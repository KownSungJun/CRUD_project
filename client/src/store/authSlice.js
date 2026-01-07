import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as authAPI from '../api/auth'

export const login = createAsyncThunk(
  'auth/login',
  async ({ userId, password }) => {
    await authAPI.Login({ userId, password })
    return { userId }
  }
)

export const logout = createAsyncThunk(
  'auth/logout',
  async () => {
    await authAPI.logout()
  }
)
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
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
        state.user = {userId: action.payload.userId}
      })
      .addCase(login.rejected, (state, action) => {
        state.user = null
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null
      })
  },
})

export default authSlice.reducer