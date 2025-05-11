<script setup>
</script>
<template>
    <div class="dialog__message manager-message">
      <div class="manager-message__pic"></div>
      <div class="manager-message__message">
        <p class="manager-message__text">
          Lörem ipsum suparad pepött då satsig och soskap metrosocial. Sapongar
          trenåvis i hypol innan visiskap, heterovybelt. Besav ditugen stenosade
          om exopagt.
        </p>
        <p class="manager-message__sign"><span>Jim</span> 20:43</p>
      </div>
    </div>
</template>
  
  
<style lang="scss" scoped>
@use "@/assets/styles/index" as main;


.manager-message {
  display: flex;
  justify-content: flex-start;
  gap: 13px;
}
.manager-message__pic {
    flex-shrink: 0;
    width: 49px;
    height: 49px;
    background-image: url(@/assets/icons/assistent.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
}

.manager-message__message {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    max-width: 541px;
  }

.manager-message__text {
    margin: 0;
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 145%;
    padding: 16px 22px;
    border-radius: 12px;
    background: #fff;
  }

.manager-message__sign {
    margin: 0;
    color: #525252;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 135%;
}
 span {
      color: #000;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
}

@media screen and (max-width: 900px) {
    .manager-message__message {
      max-width: 454px;
    }

    .manager-message__pic {
      width: 36px;
      height: 36px;
    }
  }

@media screen and (max-width: 650px) {
    .manager-message__text {
      font-size: 14px;
    }
  }

</style>