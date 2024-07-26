import { createSlice } from "@reduxjs/toolkit";
import { addQuiz } from "../quizzes/quizzesSlice";

const initialState = {
  topics: {},
};

const topicsSlice = createSlice({
  name: "topics",
  initialState,
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      console.log(state);
      state.topics[id] = {
        id: id,
        name: name,
        icon: icon,
        quizIds: [],
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addQuiz, (state, action) => {
      const { id, topicId } = action.payload;
      console.log(topicId);
      state.topics[topicId].quizIds.push(id);
    });
  },
});

export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
