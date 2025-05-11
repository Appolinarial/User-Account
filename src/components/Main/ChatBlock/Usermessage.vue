<script setup>
defineProps({ text: String });
</script>
<template>
    <div class="dialog__message user-message">
      <div class="user-message__text">
        {{ text }}
      </div>
      <p class="user-message__sign">20:55</p>
    </div>
  </template>
  
<style lang="scss">

.user-message {
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 10px;
}
.user-message__text {
    margin: 0;
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 145%;
    padding: 16px 22px;
    border-radius: 12px;
    background: #FFF;
}

.user-message__sign {
    margin: 0;
    color: #525252;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 135%;
}


@media screen and (max-width: 650px) {
    .user-message__text {
      font-size: 14px;
    }
  }

  </style>