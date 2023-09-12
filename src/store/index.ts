// 统一管理所有的模块

import useHomeStore from "./modules/home";
import useQueryStore from "./modules/query";

const useStore = () => {
  return {
    home: useHomeStore(),
    query: useQueryStore(),
  }
}

export default useStore
