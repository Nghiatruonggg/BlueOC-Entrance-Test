import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../untils/variable";

const addPosts = createAsyncThunk(
  "addPosts",
  async (postInfo, { rejectWithValue }) => {
    try {
      const res = await axios.post(URL, postInfo);
      console.log(res)
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const getPosts = createAsyncThunk("getPosts", async () => {
  try {
    const res = await axios.get(URL);
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
});

const postsCRUDSlice = createSlice({
  name: "postsCRUD",
  initialState: {
    posts: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })

      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(addPosts.pending, (state) => {
        state.isLoading = true;
        state.error = null
      })

      .addCase(addPosts.fulfilled, (state) => {
        state.isLoading = false
      })

      .addCase(addPosts.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
});

export default postsCRUDSlice.reducer;
export { getPosts, addPosts };
