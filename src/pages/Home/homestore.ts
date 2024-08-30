import { create } from 'zustand';



// Step 2: Create the Zustand store
const useHomeStore = create((set) => ({
  showPop: false,
  togglePop: (val) => set((state) => ({ currentPage: !state.Pop })),
}));

export { useHomeStore};
