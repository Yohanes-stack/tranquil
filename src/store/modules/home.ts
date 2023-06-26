// 这个是测试store

import { defineStore } from 'pinia'
// 创建store,命名规则： useXxxxStore
// 参数1：store的唯一表示
// 参数2：对象，可以提供state actions getters
const useHomeStore = defineStore('home', {
  state: () => {
    return {
      count: 10,
    }
  },
  // getters和vuex中的基本是一样的，也带有缓存的功能
  getters: {
    // 在getters中提供计算属性
    double(): any {
      return this.count * 2
    },
  },

  // 在pinia中没有mutations，只有actions，不管是同步还是异步的代码，都可以在actions中完成
  actions: {
    // 测试：在actions中提供方法并且修改数据
    increment() {
      this.count++
    },

    incrementAsync() {
      setTimeout(() => {
        this.count++
      }, 1000)
    },
  },
  // 开启数据缓存
  persist: {
    enabled: true,
    strategies: [
        {
          key: 'dor-vuex',
          storage: localStorage,
        }
      ]
  }
})

export default useHomeStore
