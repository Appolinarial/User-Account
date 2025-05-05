<script setup>
const props = defineProps({
    text: {
        type: String,
        default: '',
    },
});
</script>

<template>
    <button class="btn">
        {{ text }}
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/index" as main;

.btn {
  cursor: pointer;
}
</style>

