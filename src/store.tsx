import create from 'zustand'

interface SaveQuizResult {
  resultContainer: string[]
  getQuizResult: (arr: any) => void
}

const useStore = create<SaveQuizResult>((set) => ({
  resultContainer: [],
  getQuizResult: (arr: any) => {
    set((state: any) => (state.resultContainer = arr))
  }
}))

export { useStore }
