<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import { useFilesStore } from '@/stores/filesStore'
import Button from "@/components/common/Button.vue";
import Message from "@/components/Main/Message.vue";
import Usermessage from "./Usermessage.vue";
import AdminMessage from "./AdminMessage.vue";

const showPreview = ref(true);
const messages = ref([]);
const filesStore = useFilesStore()

const showManagerMenu = ref(false)

const toggleManagerMenu = () => {
  showManagerMenu.value = !showManagerMenu.value
}

const handleClickOutside = (event) => {
  const dropdown = document.querySelector('.manager-dropdown')
  const button = document.querySelector('.files-container__manager-button')

  if (
    dropdown &&
    !dropdown.contains(event.target) &&
    !button.contains(event.target)
  ) {
    showManagerMenu.value = false
  }
}

const getMediaplan = () => {
  filesStore.addMediaplan();
}

const getReport = () => {
  filesStore.addReport();
}

const bottomRef = ref(null);
const scrollToBottom = () => {
  nextTick(() => {
    if (bottomRef.value) {
      bottomRef.value.scrollIntoView({ behavior: 'smooth' });
    }
  });
};

const sendMessage = (newMessage) => {
  if (newMessage.trim() === '') return;

  showPreview.value = false;
  messages.value.push({
    user: 'user',
    text: newMessage,
  });

  setTimeout(() => {
    messages.value.push({ user: 'admin', text: 'Sent your question for processing' });
    scrollToBottom();
  }, 500);
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

</script>

<template>
    <section class="files-container">
      <div class="files-container__header-wrapper">
        <h2 class="files-container__header">Личный помощник</h2>
        <div class="files-container__manager">
          <p>Jim Davidson</p>
          <a class="files-container__manager-mail">Jim Davidson@adaurum.ru</a>
        </div>
        <button class="files-container__manager-button" @click="toggleManagerMenu">
          <img src="@/assets/icons/ellipses.svg">
        </button>
        <div
          v-if="showManagerMenu"
          class="files-container__manager-dropdown"
        >
          <ul class="files-container__manager-list">
            <li class="files-container__manager-item" @click="console.log('Обратная связь')">Обратная связь о работе сервера</li>
            <li class="files-container__manager-item" @click="console.log('Сменить помощника')">Сменить помощника</li>
          </ul>
        </div>
      </div>
  
      <div class="files-container__chat-wrapper">
        <div class="files-container__chat">
          <div v-if="showPreview" class="files-container__chat-preview">
            <img class="files-container__chat-preview-image" src="@/assets/icons/preview-admin.svg">
            <p class="files-container__chat-preview-text">
              Это чат с администратором. Ты можешь с ним<br>пообщаться по любому вопросу о нашем сервисе и узнать<br>о ходе работы
            </p>
          </div>
  
          <div v-else class="files-container__chat-messages-container" ref="messageWrapper">
            <div v-for="(msg, index) in messages" :key="index">
              <Usermessage v-if="msg.user === 'user'" :text="msg.text" />
              <AdminMessage v-else :text="msg.text" />
            </div>
          </div>
          <div ref="bottomRef"></div>
  
          <div class="files-container__chat-buttons">
            <Button @click="getMediaplan" text="Заказать медиаплан" class="files-container__chat-mediaplan-button" />
            <Button @click="getReport" text="Заказать отчет" class="files-container__chat-report-button" />
          </div>
  
          <Message @send-message="sendMessage" />
        </div>
      </div>
    </section>
  </template>

<style lang="scss" scoped>
@use "@/assets/styles/index" as main;

.files-container {
  width: 875px;
  height: 709px;
  border-radius: 20px;
  background-color: main.$white;

  &__header-wrapper {
    display: flex;
    position: relative;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }

  &__header {
    margin: 0;
    padding: 28px 0px 28px 28px;
  }

  &__manager {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 94px 0 20px;
  }

  &__manager-mail {
    color: #525252;
    padding: 0 26px 0 10px;
  }

  &__manager-button {
    position: absolute;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    background-color: main.$light-grey;
    right: 28px;
    top: 26px;
    cursor: pointer;
    padding: 0;
  }

  &__manager-dropdown {
    position: absolute;
    top: 64px;
    right: 20px;
    width: 382px;
    height: 82px;
    padding: 30px;
    background-color: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    z-index: 10;
    display: flex;
    align-items: center;
  }

  &__manager-list {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__manager-item {
    text-align: right;
    padding: 6px 20px;
    color: black;
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: main.$purple;
    }
  }

  &__chat-wrapper {
    display: flex;
    justify-content: center;
  }

  &__chat {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 818px;
    height: 596px;
    background-color: main.$middle-grey;
    border-radius: 20px;
  }

  &__chat-preview {
    padding-top: 50px;
    align-items: center;
    text-align: center;
  }

  &__chat-preview-text {
    line-height: 145%;
  }

  &__chat-preview-image {
    max-width: 190px;
  }

  &__chat-buttons {
    position: absolute;
    width: 100%;
    padding-left: 20px;
    bottom: 160px;
    flex-wrap: wrap-reverse;
    display: flex;
  }

  &__chat-mediaplan-button {
    width: 210px;
    height: 43px;
    border-radius: 21px;
    border: none;
    margin: 20px 20px 0 0;
    font-size: 16px;
    background-color: main.$purple;
    color: main.$white;
  }

  &__chat-report-button {
    width: 166px;
    height: 43px;
    border-radius: 21px;
    border: none;
    margin: 0 20px 0px 0px;
    font-size: 16px;
    background-color: main.$blue;
    color: main.$white;
  }

  &__chat-messages-container {
    max-height: 389px;
    overflow-y: auto;
    padding: 20px 20px 0px 20px;
    width: 100%;
  }
}

@media screen and (max-width: 1200px) {
  .files-container {
    width: 100%;

    &__chat-preview-image {
      max-width: 130px;
    }

    &__chat-report-button {
      margin: 0 0 0 20px;
    }
  }
}

@media screen and (max-width: 765px) {
  .files-container {
    &__chat-buttons {
      justify-content: flex-end;
      padding-right: 20px;
    }

    &__chat-preview-text {
      padding: 0 20px 0 20px;
    }

    &__chat-mediaplan-button {
      margin: 20px 0 0 0;
    }

    &__manager {
      margin: 20px 59px 0 20px;
    }

    &__manager-mail {
      padding: 0 0 0 10px;
    }

    &__manager-dropdown {
      width: 300px;
    }
  }
}

@media screen and (max-width: 660px) {
  .files-container__header {
    padding: 20px 0px 0px 20px;
  }
}
</style>