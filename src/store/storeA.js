// 通过 options 创建
import { defineStore } from "pinia";

/**
 * - 回顾 vuex 中 module 的组成部分：state、getters、mutations、actions
 *
 * - pinia 单个 store 的组成部分：state、getters、actions
 */
export const useStoreA = defineStore("storeA", {
  state: () => ({
    count: 0,
    msg: "",
    arr: [],
  }),

  getters: {
    double: (state) => state.count * 2,
  },

  actions: {
    increment() {
      this.count++;
    },
  },

  // 持久化配置：若仅配置 true，则全部存储
  // persist: true,
  persist: {
    // 存储的 key， 默认是 defineStore 的第一个参数
    key: "A",
    // 存储位置，默认 localStorage
    storage: localStorage,
    // 指定内容
    paths: ["count"],
  },
});
