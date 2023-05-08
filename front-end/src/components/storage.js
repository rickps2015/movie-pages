import { defineStore } from 'pinia'
import axios from 'axios'

export const useStore = defineStore('storage', {
    // arrow function recommended for full type inference
    state: () => {
        return {
            // all these properties will have their type inferred automatically
            input_pesquisa: '...',
        }
    }
})