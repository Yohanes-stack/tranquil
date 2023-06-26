import { defineStore } from 'pinia'
// 创建store,命名规则： useXxxxStore
// 参数1：store的唯一表示
// 参数2：对象，可以提供state actions getters
const useQueryStore = defineStore('query', {
  state: () => {
    return {
      query: {
        queryInfo: {
          datasourceName: '', // 数据源名称
          datasourceId: 0, // 数据库ID
        },
      },
    }
  },
  actions: {
    setDatasourceName(dsName: string) {
      this.query.queryInfo.datasourceName = dsName
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

export default useQueryStore
