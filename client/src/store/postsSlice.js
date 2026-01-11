import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as postsAPI from '../api/posts';

export const listPosts = createAsyncThunk('posts/listPosts', async ({ page, tag }, thunkAPI) => {
  try {
    const res = await postsAPI.getAllPosts({ page, tag, limit: 10 });

    return {
      items: res.data.items,
      totalCount: res.data.totalCount,
      page,
    };
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response?.data);
  }
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    lastPage: 1,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(listPosts.fulfilled, (state, action) => {
        const { items, totalCount } = action.payload;

        state.posts = items;
        state.lastPage = Math.ceil(totalCount / 10);
        state.loading = false;
      })
      .addCase(listPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || '게시글 로딩 실패';
      });
  },
});

export default postsSlice.reducer;
