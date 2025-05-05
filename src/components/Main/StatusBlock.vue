<script setup>
import { computed } from 'vue'

const props = defineProps({
  status: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true, // 'mediaplan' или 'report'
  },
})

const icon = computed(() =>
  props.status === 'pending'
    ? '@/assets/icons/warning.svg'
    : '@/assets/icons/done.svg'
)

const alt = computed(() =>
  props.status === 'pending'
    ? 'Формируется'
    : 'Готово'
)

const message = computed(() => {
  if (props.status === 'pending') {
    return props.type === 'mediaplan' ? 'Медиаплан формируется' : 'Отчёт формируется'
  } else {
    return props.type === 'mediaplan'
      ? `Медиаплан от ${props.date} готов`
      : `Отчёт от ${props.date} готов`
  }
})
</script>

<template>
    <p class="status-text" role="status">
      <img
        :src="icon"
        :alt="alt"
        class="status-text__icon"
      />
      <span>{{ message }}</span>
    </p>
  </template>

<style scoped>
.status-text {
  margin: 6px 0 16px 0px;
  font-size: 14px;
  color: #555;
  font-style: italic;
  display: flex;
  align-items: center;
}

.status-text__icon {
  padding-right: 5px;
}
</style>