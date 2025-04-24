//@ts-nocheck
import { create } from "zustand";


const useGlobalStore = create((set) => ({
    loading: false,
    setLoading: (value) => set({ loading: value }),
    
}));

export default useGlobalStore;
