import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFilesStore = defineStore('files', () => {
  const mediaplans = ref([])
  const reports = ref([])

  const addMediaplan = () => {
    const id = Date.now()
    const newItem = { id, status: 'pending' }
    mediaplans.value.push(newItem)

    setTimeout(() => {
      const index = mediaplans.value.findIndex(item => item.id === id)
      if (index !== -1) {
        // создаём новый объект — Vue увидит изменение
        mediaplans.value[index] = { ...mediaplans.value[index], status: 'ready' }
      }
    }, 2000)
  }

  const addReport = () => {
    const id = Date.now()
    const newItem = { id, status: 'pending' }
    reports.value.push(newItem)

    setTimeout(() => {
      const index = reports.value.findIndex(item => item.id === id)
      if (index !== -1) {
        reports.value[index] = { ...reports.value[index], status: 'ready' }
      }
    }, 2000)
  }

  return {
    mediaplans,
    reports,
    addMediaplan,
    addReport
  }
})