<script setup>
</script>

<template>
<div class="footer">
    <div class="footer__logo">
        <img src="@/assets/icons/logo.png" alt="logo">
    </div>
    <div class="footer__privacy">
       <p>Политика конфиденциальности</p> 
    </div>
    <div class="footer__mail">
        <img src="@/assets/icons/email.svg" alt="email">
        <p>pinkchicken@adaurum.ru</p>
    </div>
    <div class="footer__lang">
        <img src="@/assets/icons/global.svg" alt="global">
        <span class="footer__lang-switcher--active footer__lang-switcher" data-lang="ru">RU</span>
        <span class="footer__lang-switcher" data-lang="en">EN</span>
        <span class="footer__lang-switcher" data-lang="tr">TR</span>
    </div>
    <div class="footer__links">
        <img src="@/assets/icons/whatsapp.svg" alt="whatsapp">
        <img src="@/assets/icons/telegram.svg" alt="telegram">
    </div>
</div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/index" as main;

.footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 120px;
  background-color: main.$middle-grey;
  height: 95px;
  font-size: 15px;
  line-height: 145%;
  color: #525252;
}

.footer__logo {
  max-width: 219px;
  margin-right: 64px;
}

.footer__privacy {
  font-weight: 500;
  margin-right: 64px;
}

.footer__mail {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 219px;
  margin-right: 64px;
}

.footer__lang {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 133px;
  margin-right: 64px;
}

.footer__lang-switcher {
  background-color: transparent;
  cursor: pointer;
}

.footer__lang-switcher--active {
  color: main.$purple;
}

.footer__links img {
  padding: 6px;
  cursor: pointer;
}

@media screen and (max-width: 1200px) {
  .footer {
    padding: 30px 40px 0 40px;
    justify-content: flex-start;
    height: 100%;
  }

  .footer__logo {
    order: 1;
  }

  .footer__privacy {
    order: 2;
  }

  .footer__links {
    order: 3;
    width: 219px;
  }

  .footer__mail {
    order: 4;
  }

  .footer__lang {
    order: 5;
  }
}

@media screen and (max-width: 768px) {
  .footer {
    background-color: main.$white;
    padding: 40px 23px;
    font-size: 14px;
  }

  .footer__logo {
    width: 181px;
    order: 1;
  }

  .footer__privacy {
    order: 2;
  }

  .footer__links {
    order: 5;
  }

  .footer__mail {
    order: 4;
  }

  .footer__lang {
    order: 3;
  }
}
</style>