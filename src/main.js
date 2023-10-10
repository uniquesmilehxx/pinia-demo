import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// 创建 pinia 实例
import { createPinia } from "pinia";
const pinia = createPinia();

// 持久化插件
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
pinia.use(piniaPluginPersistedstate);
// 统一配置
// import { createPersistedState } from "pinia-plugin-persistedstate";
// pinia.use(
//   createPersistedState({
//     key: (id) => `__persisted__${id}`,
//   })
// );

// 自定义插件
const piniaPlugin = ({ store }) => {
  console.log("store", store);
  store.hello = "我是全局字符串";

  // 保证 devtools也能看到
  if (process.env.NODE_ENV === "development") {
    // 添加你在 store 中设置的键值
    store._customProperties.add("hello");
  }
};
pinia.use(piniaPlugin);

createApp(App).use(pinia).mount("#app");
