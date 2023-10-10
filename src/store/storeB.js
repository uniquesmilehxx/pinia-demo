// 通过组合式函数创建
import { defineStore } from "pinia";
import { ref, computed } from "vue";

/**
 *  - ref 对应 state
 *  - computed 对应 getters
 *  - function 对应 actions
 *
 */
export const useStoreB = defineStore(
  "storeB",
  () => {
    const count = ref(0);
    const msg = ref("");
    const arr = ref([]);

    const double = computed(() => {
      return count.value * 2;
    });

    function increment() {
      count.value++;
    }

    return { count, double, msg, arr, increment };
  },
  {
    // persist: true,
    persist: {
      // 存储的 key， 默认是 defineStore 的第一个参数
      key: "B",
      // 存储位置，默认 localStorage
      storage: localStorage,
      // 指定内容
      paths: ["count"],
    },
  }
);
