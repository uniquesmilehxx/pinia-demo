# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

# ———————————————————————————————————————————————————————————————————

# vite 项目的 创建与启动

创建：

`yarn create vite vite1(项目名称) --template vue(模板)`

启动：

`cd vite1`
`yarn`
`yarn dev`

# 本项目用来熟悉 pinia 的基本使用

- pinia 是 vue 官方推荐的状态管理器 [https://cn.vuejs.org/guide/scaling-up/state-management.html#pinia]
- pinia 的简单介绍 [https://pinia.vuejs.org/zh/introduction.html]
- pinia 个人总结 [https://blog.csdn.net/weixin_42289080/category_12322276.html]

## 安装

`yarn add pinia`
或
`npm install pinia`

## 引入

见 main.js

## 创建 store

src 下新建文件夹 store

## 使用 store

见 App.vue

## 如何持久化？

使用 pinia-plugin-persist

### 安装

`yarn add pinia-plugin-persist`
或
`npm install pinia-plugin-persist`

### 使用

见 main.js、store/storeA.js

## 自定义插件

[https://pinia.vuejs.org/zh/core-concepts/plugins.html]

见 main.js
