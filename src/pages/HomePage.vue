<script setup>
import Footer from "../components/Foooter/Footer.vue"
import Header from "@/components/Header/Header.vue";
import FilesBlock from "@/components/Main/FilesBlock.vue";
import ChatBlock from "@/components/Main/ChatBlock.vue";
</script>

<template>
    <Header></Header>
    <main class="main">
        <FilesBlock></FilesBlock>
        <ChatBlock></ChatBlock>
    </main>
    <Footer></Footer>
</template>

<style lang="scss" scoped>
@use "../assets/styles/index" as main;

.main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 120px 60px 120px;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    padding: 0 40px 60px 40px;
  }

  @media screen and (max-width: 765px) {
    padding: 0 0px 60px 0px;
  }

  @media screen and (max-width: 560px) {
    background-color: main.$middle-grey;
  }
}
</style>