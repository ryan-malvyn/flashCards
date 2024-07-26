import { configureStore } from "@reduxjs/toolkit";
// import reducers
import topicsSliceReducer from "../features/topics/topicSlice.js";
import quizzesSliceReducer from "../features/quizzes/quizzesSlice.js";
import cardSliceReducer from "../features/cards/cardSlice.js";

export default configureStore({
  reducer: {
    topics: topicsSliceReducer,
    quizzes: quizzesSliceReducer,
    cards: cardSliceReducer,
  },
});
