<template>
  <h2>storeA - 选项式组件下使用</h2>

  <!-- mapState -->
  <div>count: {{ count }}</div>
  <div>double: {{ double }}</div>
  <div>ownMsg: {{ ownMsg }}</div>
  <div>ownArr: {{ ownArr }}</div>

  <!-- mapWritableState -->
  <div>writableMsg: {{ writableMsg }}</div>
  <button @click="handleChange">修改 writable 字段</button>

  <!-- mapActions -->
  <button @click="incre">mapActions 调用</button>

  <!-- mapStores-->
  <button @click="handleStore">打印 mapStores</button>
</template>

<script>
/**
 * vuex 提供了一些映射辅助函数，如 mapState、mapGetters、mapMutations、mapActions
 *
 * pinia 也提供了几个映射辅助函数：
 *  - mapState: 映射为 "只读" 的计算属性
 *  - mapWritableState: 映射为 "可读可写" 的计算属性
 *  - mapActions: 映射方法
 *  - mapStores: 将 store 映射为计算属性，通过 id+'Store'访问
 */

import { mapState, mapWritableState, mapActions, mapStores } from "pinia";
import { useStoreA } from "../store/storeA";
export default {
  computed: {
    // 一、mapState，三种定义方式
    ...mapState(useStoreA, ["double"]),
    ...mapState(useStoreA, {
      ownMsg: "msg",
    }),
    ...mapState(useStoreA, {
      ownArr: (state) => state.arr,
    }),

    // 二、mapWritableState，第三种方式不允许，即 value 不能定义为函数
    ...mapWritableState(useStoreA, ["count"]),
    ...mapWritableState(useStoreA, {
      writableMsg: "msg",
    }),

    // 四、mapStores，将 store 映射为计算属性，多个store之间逗号隔开
    ...mapStores(useStoreA),
  },

  methods: {
    // 三、mapActions，第三种方式不允许，即 value 不能定义为函数
    ...mapActions(useStoreA, {
      incre: "increment",
    }),

    handleChange() {
      this.count = 1234;
      this.writableMsg = "哈哈哈哈";

      // ownMsg 为只读，这里修改会报错
      // this.ownMsg = "haha";
    },

    handleStore() {
      // store被映射后如何访问呢，以 id+'Store' 的形式访问每个 store（id是 defineStore 的第一个参数）
      console.log(this.storeAStore);
    },
  },
};
</script>
