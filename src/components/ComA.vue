<template>
  <h2>storeA - setup 语法糖下使用</h2>

  <div>count：{{ storeA.count }}</div>
  <div>double：{{ storeA.double }}</div>
  <div>msg：{{ storeA.msg }}</div>
  <div>arr：{{ storeA.arr }}</div>

  <button @click="handleChange">直接修改 state</button>

  <button @click="handleIncrement">调用 action 修改 state</button>
  <!-- <button @click="storeA.increment">调用 action - increment - 2</button> -->

  <!-- <button @click="handlePatch">使用 $patch 修改单个或多个 state</button> -->

  <!-- <button @click="handleReset">使用 $reset 重置 state</button> -->

  <!-- <div>解构后的 count：{{ count }}</div> -->
</template>

<script setup>
import { useStoreA } from "../store/storeA.js";
let storeA = useStoreA();

// console.log("storeA", storeA);

// 注意：storeA 是一个用 reactive 包装的对象！！！

// 所以像这样去解构是错误的，会失去响应式
// const { count, double } = storeA;
// console.log("count, double", count, double);

// ----------------------------------------------------------------

// 一、修改 state 的方式

// 1、直接修改 state
function handleChange() {
  storeA.count = 100;
}

// 2、使用 store 中的 actions 来修改
function handleIncrement() {
  storeA.increment();
}

// 3、使用 $patch 修改单个或多个 state
function handlePatch() {
  // 传入对象形式
  storeA.$patch({
    count: 1996,
    msg: "过年啦真开心啊哈哈哈哈",
  });

  // 或传入函数形式
  // storeA.$patch((state) => {
  //   state.arr.push(state.arr.length + 1);
  // });
}

// ----------------------------------------------------------

// 二、重置 state（只有 选项式store 才可以使用）
function handleReset() {
  storeA.$reset();
}

// -----------------------------------------------------------

// 三、如何解构使用？

// 使用 storeToRefs（类似于 toRefs）

import { storeToRefs } from "pinia";
const { count, msg, double } = storeToRefs(storeA);

// console.log("count, msg", count, msg, double);

// 在这里修改，不会丧失响应式
// count.value = 666;
// increment();

// ---------------------------------------------------------

// 四、使用自定义插件中定义的全局属性

// console.log("hello------", storeA.hello);
</script>
