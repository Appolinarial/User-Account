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
    <section class="files-container mobile-hidden">
      <h2 class="header">Файлы</h2>
  
      <div
        v-if="filesStore.mediaplans.length === 0 && filesStore.reports.length === 0"
        class="files-container__preview"
      >
        <img src="@/assets/icons/color-folders.svg" alt="folders">
        <p>Закажи у личного помощника<br>медиаплан. Он появится в этом<br>разделе</p>
      </div>
  
      <div v-else class="files-container-desctop">
        <div class="files-container-desctop__wrapper">
          <!-- Медиапланы -->
          <div class="files-container-desctop__mediaplans">
            <h3 class="files-container-desctop__mediaplans__header">Медиапланы</h3>
            <div class="scroll-box">
              <div
                v-for="(item, index) in visibleMediaplans"
                :key="item.id"
              >
                <Mediaplan 
                :item="item" 
                :index="filesStore.mediaplans.length - index" 
                :total="filesStore.mediaplans.length" 
            />
                <p v-if="index === 0 && item.status" class="mediaplan-status">
                  <img
                    v-if="item.status === 'pending'"
                    src="@/assets/icons/warning.svg"
                    alt="В процессе"
                    class="mediaplan-status__icon"
                  />
                  <img
                    v-else
                    src="@/assets/icons/done.svg"
                    alt="Готов"
                    class="mediaplan-status__icon"
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
            <div class="show-more-wrapper">
                <button
                v-if="filesStore.mediaplans.length > 4"
                class="show-more-button"
                @click="showAllMediaplans = !showAllMediaplans"
                >
                {{ showAllMediaplans ? 'Скрыть' : 'Показать ещё' }}
                </button>
        </div>
          </div>
  
          <!-- Отчеты -->
          <div class="files-container-desctop__reports">
            <h3 class="files-container-desctop__reports__header">Отчеты</h3>
            <div class="scroll-box">
              <div
                v-for="(item, index) in visibleReports"
                :key="item.id"
              >
                <Report 
                :item="item" 
                :index="filesStore.reports.length - index" 
                :total="filesStore.reports.length" />
                <p v-if="index === 0 && item.status" class="report-status">
                  <img
                    v-if="item.status === 'pending'"
                    src="@/assets/icons/warning.svg"
                    alt="Формируется"
                    class="report-status__icon"
                  />
                  <img
                    v-else
                    src="@/assets/icons/done.svg"
                    alt="Готово"
                    class="report-status__icon"
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
            <div class="show-more-wrapper">
                <button
                v-if="filesStore.reports.length > 4"
                class="show-more-button"
                @click="showAllReports = !showAllReports"
                >
                {{ showAllReports ? 'Скрыть' : 'Показать ещё' }}
                </button>
          </div>
          </div>
        </div>
      </div>
    </section>
    <section class="desctop-hidden">
  <div class="files-container__mobile">
    <!-- Медиапланы -->
    <div>
      <Button
        v-if="filesStore.mediaplans.length === 0"
        class="files-container__button-mediaplan"
        text="Медиапланы"
      />
      <Button
        v-else
        class="files-container__button-mediaplan-updated"
        text="Медиапланы"
      >
      <img src="@/assets/icons/done.svg" alt="Готово" class="mediaplan-mobile-status__icon"/></Button>
    </div>
    <!-- Отчеты -->
    <div>
      <Button
        v-if="filesStore.reports.length === 0"
        class="files-container__button-report"
        text="Отчеты"
      />
      <Button
        v-else
        class="files-container__button-report-updated"
        text="Отчеты"
      />
    </div>
  </div>
</section>
  </template>

<style lang="scss" scoped>
@use "@/assets/styles/index" as main;

.desctop-hidden {
  display: none;
}

.mobile-hidden {
  display: inline;
}

.files-container {
  width: 295px;
  height: 709px;
  border-radius: 20px;
  background-color: main.$white;
  margin-bottom: 20px;
}

.files-container__mobile {
  font-size: 14px;
  padding: 20px 0 30px 20px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  width: 100%;
}

.header {
  margin: 0;
  padding: 28px 0px 0px 20px;
}

.files-container-desctop__mediaplans__header,
.files-container-desctop__reports__header {
  font-size: 18px;
  font-weight: 600;
}

.files-container__preview {
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

.files-container__button-mediaplan,
.files-container__button-report {
  height: 41px;
  background-color: main.$dark-grey;
  border: none;
  font-weight: bolder;
  border-radius: 4%;
  padding: 12px;
  font-size: 14px;
  text-align: center;
}

.files-container__button-mediaplan-updated,
.files-container__button-report-updated {
  height: 41px;
  background-color: main.$white;
  font-weight: bolder;
  border-radius: 4%;
  padding: 12px;
  font-size: 14px;
  text-align: center;
}

.files-container__button-mediaplan-updated {
  border: 1px solid main.$purple;
  margin-right: 20px;
}

.files-container__button-report-updated {
  border: 1px solid main.$blue;
}

.files-container__button-mediaplan {
  margin-right: 20px;
}

.files-container-desctop__mediaplans,
.files-container-desctop__reports {
  padding: 20px 20px 0 20px;
  font-size: 18px;
}

.scroll-box {
  max-height: 200px;
  overflow-y: auto;
  margin-bottom: 12px;
  padding-right: 4px;
}

.files-container-desctop__wrapper {
  display: flex;
  flex-direction: column;
}

.mediaplan-status,
.report-status {
  margin: 6px 0 16px 0px;
  font-size: 14px;
  color: #555;
  font-style: italic;
  display: flex;
  align-items: center;
}

.report-status__icon,
.mediaplan-status__icon {
  padding-right: 5px;
}

.mediaplan-mobile-status__icon {
  padding-left: 5px;
  vertical-align: middle;
  display: inline-block;
}

.show-more-wrapper {
  display: flex;
  justify-content: flex-end;
}

.show-more-button {
  background: none;
  border: none;
  color: main.$purple;
  cursor: pointer;
  font-size: 14px;
  padding: 0;
}

@media screen and (max-width: 1200px) {
  .files-container {
    width: 100%;
    height: 405px;
  }

  .files-container__preview {
    flex-direction: row;
    padding-top: 0;
  }

  .files-container-desctop__wrapper {
    flex-direction: row;
  }

  .header {
    padding: 28px 0px 0px 20px;
  }

  .mediaplan,
  .report {
    width: 296px;
  }
}

@media screen and (max-width: 768px) {
  .desctop-hidden {
    display: flex;
  }

  .mobile-hidden {
    display: none;
  }
}
</style>