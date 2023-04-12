import { defineStore } from "pinia";

export const stateCustom = defineStore('stateCustom',{
  state: () => ({
    input_pesquisa: "",
  }),
  persist: {
    key: "stateCustom",
    storage: sessionStorage,
  },
});
