<script setup>
import { ref } from 'vue';

const emit = defineEmits(['send-message']);
const message = ref('');

const sendMessage = () => {
  if (!message.value.trim()) return;
  emit('send-message', message.value);
  message.value = '';
};

const addFile = () => {
  console.log('Добавить файл');
};

const addPhoto = () => {
  console.log('Добавить фото');
};
</script>

<template>
  <div class="chat-input">
    <button class="chat-input__file-button" @click="addFile">
      <img src="@/assets/icons/toadd-file.svg" alt="Добавить файл" />
    </button>
    <button class="chat-input__photo-button" @click="addPhoto">
      <img src="@/assets/icons/xml.svg" alt="Добавить фото" />
    </button>

    <textarea
      v-model="message"
      @keyup.enter.prevent="sendMessage"
      placeholder="Введите сообщение для администратора"
      class="chat-input__textarea"
    ></textarea>

    <button class="chat-input__send-button" @click="sendMessage">
      <img src="@/assets/icons/enterButton.png" alt="Отправить сообщение" />
    </button>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/styles/index" as main;

.chat-input {
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 0;
  background-color: main.$white;
  border-radius: 21px;
  padding: 8px 48px;
  width: 100%;
  min-height: 144px;
  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.1);

  &:hover {
    border: 1px solid main.$purple;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  &__textarea {
    flex: 1;
    z-index: 2;
    resize: none;
    border: none;
    background: transparent;
    font-size: 16px;
    padding: 8px 0;
    outline: none;
    min-height: 30px;
    max-height: 150px;
    line-height: 1.4;
  }

  &__file-button,
  &__photo-button,
  &__send-button {
    position: absolute;
    background: none;
    border: none;
    cursor: pointer;
  }

  &__file-button {
    left: 20px;
    bottom: 10px;
  }

  &__photo-button {
    left: 64px;
    bottom: 10px;
  }

  &__send-button {
    right: 28px;
    bottom: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: main.$purple;
    padding-top: 6px;
  }
}
</style>