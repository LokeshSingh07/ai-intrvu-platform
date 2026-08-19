import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InterviewSetupType } from "@/schema/InterviewSetupSchema";

interface InterviewData {
  interview: any;
  questions: Array<{ question: string }>;
}

interface InterviewState {
  interviewData: InterviewData | null;
}

// Initialize state from localStorage if available (client-side only)
const getInitialState = (): InterviewState => {
  if (typeof window === "undefined") {
    return { interviewData: null };
  }
  
  try {
    const stored = localStorage.getItem("interview_state");
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (err) {
    console.warn("Failed to parse interview state from localStorage:", err);
  }
  
  return { interviewData: null };
};

const initialState: InterviewState = getInitialState();

export const interviewSlice = createSlice({
  name: "interview",
  initialState,
  reducers: {
    setInterviewData: (state, action: PayloadAction<InterviewData>) => {
      state.interviewData = action.payload;
      // Persist to localStorage
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem("interview_state", JSON.stringify(state));
        } catch (err) {
          console.warn("Failed to save interview state to localStorage:", err);
        }
      }
    },
    clearInterviewData: (state) => {
      state.interviewData = null;
      // Clear from localStorage
      if (typeof window !== "undefined") {
        try {
          localStorage.removeItem("interview_state");
        } catch (err) {
          console.warn("Failed to clear interview state from localStorage:", err);
        }
      }
    },
  },
});

export const { setInterviewData, clearInterviewData } = interviewSlice.actions;
export default interviewSlice.reducer;
