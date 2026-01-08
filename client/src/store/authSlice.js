import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as authAPI from '../api/auth'

export const login = createAsyncThunk(
  'auth/login',
  async ({ userId, password }, thunkAPI) => {
    try {
      const res = await authAPI.Login({userId, password})

      return res.data
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response?.data)
    }
    // await authAPI.Login({ userId, password })
    // return { userId }
  }
)

export const logout = createAsyncThunk(
  'auth/logout',
  async () => {
    localStorage.removeItem('accessToken')
  }
)
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload.user
        state.token = action.payload.accessToken

        localStorage.setItem('accessToken', action.payload.accessToken)
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || "로그인 실패"
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null
        state.token = null
      })
  },
})

export default authSlice.reducer