import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizzes: {},
};
const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    addQuiz: (state, action) => {
      const { id, name, topicId, cardsIds } = action.payload;
      state.quizzes[id] = {
        id: id,
        name: name,
        topicId: topicId,
        cardsIds: cardsIds,
      };
    },
  },
});

export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
