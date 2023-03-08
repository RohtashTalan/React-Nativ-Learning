import {firebase} from '@react-native-firebase/database';
import {firebase_db} from '../../database';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const getPosts = createAsyncThunk('/getPosts', async () => {
  try {
    const eventref = firebase
      .app()
      .database(
        'https://instatest-f9323-default-rtdb.asia-southeast1.firebasedatabase.app',
      )
      .ref('/posts/');
    const snapshot = await eventref.once('value');
    const value = snapshot.val();

    const objArray = [];
    Object.keys(value).forEach(key =>
      objArray.push({
        postId: key,
        ...value[key],
      }),
    );
    return objArray;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  posts: null,
  loading: true,
  error: false,
};

const postState = createSlice({
  name: 'postState',
  initialState,
  reducers: {
    SET_POST(state, action) {
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: false,
      };
    },
    ERROR_POST(state, action) {
      return {
        ...state,
        error: true,
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
        state.error = true;
      });
  },
});

export {postState};
export const {SET_POST, ERROR_POST} = postState.actions;
