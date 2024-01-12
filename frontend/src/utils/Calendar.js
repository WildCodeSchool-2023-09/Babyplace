import { create } from "zustand";
import { INITIAL_EVENTS } from "../constants/dataGen";

const useCalendar = create((set) => ({
  currentEvents: INITIAL_EVENTS,
  setCurrentEvents: (events) => set({ currentEvents: events }),
}));

export default useCalendar;