<script setup></script>
<template>
    <div class="header">
        <div class="header__logo">
            <img src="@/assets/icons/pink-logo.png" alt="logo">
        </div>
        <section id="header__management">
            <div class="header__management-wrapper">
                <div class="header__management-statistic">
                    <button class="header__management-statistic-button mobile-hidden">
                        <img src="@/assets/icons/procced.svg">
                    </button>
                    <p class="mobile-hidden">5%</p>
                    <p class="desctop-hidden">5% выручки</p>
                </div>
                <div class="header__management-account">
                    <button class="header__management-account-button mobile-hidden">
                        <img src="@/assets/icons/user.svg">
                    </button>
                    <p>Username@adaurum.ru</p>
                </div>
            </div>
            <div>
            <button class="header__management-settings-button">
                <img src="@/assets/icons/settings.svg">
            </button>
            <button class="header__management-logout-button">
                <img src="@/assets/icons/login.svg">
            </button>
        </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/index" as main;

.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 120px;
  height: 107px;
  flex-wrap: wrap;
}

#header__management {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.header__management-wrapper {
  display: flex;
  flex-direction: row;
}

.header__management-statistic,
.header__management-account {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 26px;
}

.header__management-statistic-button,
.header__management-account-button {
  width: 40px;
  height: 40px;
  margin-right: 8px;
  border: none;
  border-radius: 50%;
  background-color: main.$purple;
}

.header__management-settings-button,
.header__management-logout-button {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  margin-right: 12px;
  background-color: main.$white;
}

.desctop-hidden {
  display: none;
  color: #797979;
}

@media screen and (max-width: 1200px) {
  .header {
    padding: 32px 40px;
  }
}

@media screen and (max-width: 768px) {
  .header {
    padding: 32px 20px 0 20px;
    height: 100%;
    background-color: main.$white;
  }

  .header__logo {
    margin-bottom: 20px;
  }

  .mobile-hidden {
    display: none;
  }

  .desctop-hidden {
    display: block;
  }

  #header__management {
    justify-content: space-between;
    width: 100%;
  }

  .header__management-account {
    font-weight: 600;
    order: 1;
  }

  .header__management-statistic {
    order: 2;
  }

  .header__management-wrapper {
    justify-content: space-between;
    flex-direction: column;
    font-size: 14px;
    line-height: 0;
    flex-wrap: wrap-reverse;
  }

  .header__management-settings-button,
  .header__management-logout-button {
    background-color: main.$light-grey;
  }
}
</style>