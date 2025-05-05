<script setup>
import { ref, computed } from 'vue'
import Mediaplan from './Mediaplan.vue'
import Report from './Report.vue'
import Button from '../common/Button.vue'
import { useFilesStore } from '@/stores/filesStore'

const filesStore = useFilesStore()

const showAllMediaplans = ref(false)
const showAllReports = ref(false)

const reversedMediaplans = computed(() => [...filesStore.mediaplans].reverse())
const reversedReports = computed(() => [...filesStore.reports].reverse())

const visibleMediaplans = computed(() =>
  showAllMediaplans.value ? reversedMediaplans.value : reversedMediaplans.value.slice(0, 4)
)
const visibleReports = computed(() =>
  showAllReports.value ? reversedReports.value : reversedReports.value.slice(0, 4)
)

const currentDate = new Date().toLocaleDateString('ru-RU', {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric'
})
</script>

<template>
  <section class="files mobile-hidden">
    <h2 class="files__title">Файлы</h2>

    <div
      v-if="filesStore.mediaplans.length === 0 && filesStore.reports.length === 0"
      class="files__preview"
    >
      <img src="@/assets/icons/color-folders.svg" alt="folders">
      <p>Закажи у личного помощника<br>медиаплан. Он появится в этом<br>разделе</p>
    </div>

    <div v-else class="files__desktop">
      <div class="files__desktop-wrapper">
        <div class="files__section">
          <h3 class="files__section-title">Медиапланы</h3>
          <div class="files__scroll">
            <div
              v-for="(item, index) in visibleMediaplans"
              :key="item.id"
            >
              <Mediaplan 
                :item="item" 
                :index="filesStore.mediaplans.length - index" 
                :total="filesStore.mediaplans.length" 
              />
              <p v-if="index === 0 && item.status" class="files__status files__status--mediaplan">
                <img
                  v-if="item.status === 'pending'"
                  src="@/assets/icons/warning.svg"
                  alt="В процессе"
                  class="files__status-icon"
                />
                <img
                  v-else
                  src="@/assets/icons/done.svg"
                  alt="Готов"
                  class="files__status-icon"
                />
                <span>
                  {{
                    item.status === 'pending'
                      ? 'Медиаплан формируется'
                      : `Медиаплан от ${currentDate} готов`
                  }}
                </span>
              </p>
            </div>
          </div>
          <div class="files__show-more">
            <button
              v-if="filesStore.mediaplans.length > 4"
              class="files__show-more-button"
              @click="showAllMediaplans = !showAllMediaplans"
            >
              {{ showAllMediaplans ? 'Скрыть' : 'Показать ещё' }}
            </button>
          </div>
        </div>

        <div class="files__section">
          <h3 class="files__section-title">Отчеты</h3>
          <div class="files__scroll">
            <div
              v-for="(item, index) in visibleReports"
              :key="item.id"
            >
              <Report 
                :item="item" 
                :index="filesStore.reports.length - index" 
                :total="filesStore.reports.length" 
              />
              <p v-if="index === 0 && item.status" class="files__status files__status--report">
                <img
                  v-if="item.status === 'pending'"
                  src="@/assets/icons/warning.svg"
                  alt="Формируется"
                  class="files__status-icon"
                />
                <img
                  v-else
                  src="@/assets/icons/done.svg"
                  alt="Готово"
                  class="files__status-icon"
                />
                <span>
                  {{
                    item.status === 'pending'
                      ? 'Отчет формируется'
                      : `Отчет от ${currentDate} готов`
                  }}
                </span>
              </p>
            </div>
          </div>
          <div class="files__show-more">
            <button
              v-if="filesStore.reports.length > 4"
              class="files__show-more-button"
              @click="showAllReports = !showAllReports"
            >
              {{ showAllReports ? 'Скрыть' : 'Показать ещё' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="files-mobile desctop-hidden">
    <div class="files-mobile__buttons">
      <div>
        <Button
          v-if="filesStore.mediaplans.length === 0"
          class="files-mobile__button files-mobile__button--mediaplan"
          text="Медиапланы"
        />
        <Button
          v-else
          class="files-mobile__button files-mobile__button--mediaplan files-mobile__button--updated-purple"
          text="Медиапланы"
        >
          <img src="@/assets/icons/done.svg" alt="Готово" class="files-mobile__icon"/>
        </Button>
      </div>
      <div>
        <Button
          v-if="filesStore.reports.length === 0"
          class="files-mobile__button files-mobile__button--report"
          text="Отчеты"
        />
        <Button
          v-else
          class="files-mobile__button files-mobile__button--report files-mobile__button--updated-blue"
          text="Отчеты"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/index' as main;

.files {
  width: 295px;
  height: 709px;
  border-radius: 20px;
  background-color: main.$white;
  margin-bottom: 20px;

  &__title {
    margin: 0;
    padding: 28px 0px 0px 20px;
  }

  &__preview {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 16px;
    line-height: 145%;
    padding-top: 46px;
    width: 100%;
  }

  &__desktop-wrapper {
    display: flex;
    flex-direction: column;
  }

  &__section {
    padding: 20px;
    font-size: 18px;
  }

  &__section-title {
    font-size: 18px;
    font-weight: 600;
  }

  &__scroll {
    max-height: 200px;
    overflow-y: auto;
    margin-bottom: 12px;
    padding-right: 4px;
  }

  &__status {
    margin: 6px 0 16px 0;
    font-size: 14px;
    color: #555;
    display: flex;
    align-items: center;

    &-icon {
      padding-right: 5px;
    }
  }

  &__show-more {
    display: flex;
    justify-content: flex-end;

    &-button {
      background: none;
      border: none;
      color: main.$purple;
      cursor: pointer;
      font-size: 14px;
      padding: 0;
    }
  }
}

.files-mobile {
  display: none;

  &__buttons {
    font-size: 14px;
    padding: 20px 0 30px 20px;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  &__button {
    height: 41px;
    background-color: main.$dark-grey;
    border: none;
    font-weight: bolder;
    border-radius: 4%;
    padding: 12px;
    font-size: 14px;
    text-align: center;
    margin-right: 20px;

    &--updated-purple {
      background-color: main.$white;
      border: 1px solid main.$purple;
    }

    &--updated-blue {
      background-color: main.$white;
      border: 1px solid main.$blue;
    }

  }

  &__icon {
    padding-left: 5px;
    vertical-align: middle;
    display: inline-block;
  }
}

.mobile-hidden {
  display: inline;
}

.desctop-hidden {
  display: none;
}

@media screen and (max-width: 1200px) {
  .files {
    width: 100%;
    height: 405px;
  }

  .files__preview {
    flex-direction: row;
    padding-top: 0;
  }

  .files__desktop-wrapper {
    flex-direction: row;
  }
}

@media screen and (max-width: 768px) {
  .files-mobile {
    display: flex;
  }

  .mobile-hidden {
    display: none;
  }
}
</style>