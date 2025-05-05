<script setup>
import { ref, onMounted, computed } from 'vue'

const props = defineProps({
  item: Object,
  index: Number,
  total: Number
})

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
})

// Путь к иконке в зависимости от состояния
const iconSrc = computed(() =>
  isLoading.value
    ? new URL('@/assets/icons/load-button.svg', import.meta.url).href
    : new URL('@/assets/icons/arrow-button.svg', import.meta.url).href
)
</script>

<template>
  <div class="report">
    <div class="report__content">
      <img src="@/assets/icons/xml.svg" alt="xml" class="mediaplan__icon" />
      <p class="report__text">
        {{ `Companyname ${index}/${total}` }}
      </p>
    </div>
    <button class="report__button">
      <img :src="iconSrc" alt="arrow" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.report {
  background-color: #f5f5f5;
  width: 253px;
  height: 42px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 0 9px;
  box-sizing: border-box;
  margin-bottom: 8px;

  &__content {
    display: flex;
    align-items: center;
    gap: 9px;
  }

  &__icon {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }

  &__text {
    font-size: 14px;
    color: #000;
    margin: 0;
  }

  &__button {
    background: none;
    border: none;
    padding: 0;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
      height: 100%;
      width: auto;
      object-fit: contain;
    }
  }
}
</style>