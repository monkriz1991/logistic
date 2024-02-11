<script setup>
const mobileScin = ref(true);

onMounted(() => {
  window.addEventListener("resize", (event) => {
    if (event.target.innerWidth <= 800) {
      mobileScin.value = false;
    } else {
      mobileScin.value = true;
    }
  });
  if (document.documentElement.clientWidth <= 800) {
    mobileScin.value = false;
  } else {
    mobileScin.value = true;
  }
});
</script>

<template>
  <kinesis-container class="container-kinesis" :active="mobileScin">
    <kinesis-element
      tag="div"
      class="circle circle-blue"
      :strength="10"
      type="depth"
    />
    <kinesis-element
      tag="div"
      class="circle circle-purple"
      :strength="10"
      type="depth"
    />
    <kinesis-element
      tag="div"
      class="circle circle-yellow"
      :strength="10"
      type="depth"
    />
    <kinesis-element
      tag="div"
      class="circle circle-green"
      :strength="10"
      type="depth"
    />
    <kinesis-element
      tag="div"
      class="circle circle-orange"
      :strength="10"
      type="depth"
    />
    <kinesis-element
      tag="div"
      class="circle circle-red"
      :strength="10"
      type="depth"
    />
    <div class="container">
      <div class="kinesis-desc">
        <kinesis-element :strength="10">
          <h1>
            <kinesis-element tag="strong" :strength="10" type="depth"
              >B</kinesis-element
            >
            <kinesis-element tag="strong" :strength="9" type="depth"
              >m</kinesis-element
            >
            &ensp;
            <kinesis-element tag="strong" :strength="8" type="depth"
              >C</kinesis-element
            >
            <kinesis-element tag="strong" :strength="9" type="depth"
              >a</kinesis-element
            >
            <kinesis-element tag="strong" :strength="10" type="depth"
              >r</kinesis-element
            >
            <kinesis-element tag="strong" :strength="9" type="depth"
              >g</kinesis-element
            >
            <kinesis-element tag="strong" :strength="8" type="depth"
              >o</kinesis-element
            >
          </h1>
          <div class="kinesis-desc-info">
            <kinesis-element tag="span" :strength="7" type="depth"
              >Организуем перевозку Вашего груза по лучшей цене и в кратчайшие
              сроки.</kinesis-element
            >
            <kinesis-element tag="span" :strength="10" type="depth">
              <Icon class="index-icon-one" name="carbon:delivery" />
              <VueWriter
                class="index-writer-one"
                :array="[
                  'Опыт и эффективность в доставке!',
                  'Максимальная скорость при минимальной стоимости!',
                  'Оптимизация доставки без лишних издержек!',
                ]"
                :typeSpeed="50"
                caret="cursor"
              />
            </kinesis-element>
          </div>
          <ClientOnly v-if="mobileScin == true">
            <ModalForm />
          </ClientOnly>
        </kinesis-element>
      </div>
      <div class="kinesis-img">
        <!-- <kinesis-element class="kinesis-desc-logo" :strength="5">
          <ClientOnly>
            <video
              class="video-index"
              muted=""
              autoplay=""
              loop=""
              webkit-playsinline=""
              playsinline=""
              poster=""
              type="video/webm"
              src="/mov_lept.mp4"
            >
              <source class="video-sourse" src="" type="video/mp4" />
            </video>
          </ClientOnly>
        </kinesis-element> -->
        <kinesis-element :strength="5">
          <div class="img-index-one">
            <NuxtImg
              provider="aliyun"
              src="/fleet-trucks.png"
              alt="trucks"
              loading="lazy"
              format="wepb"
            />
          </div>
        </kinesis-element>
        <kinesis-element :strength="5">
          <ClientOnly v-if="mobileScin == false">
            <ModalForm />
          </ClientOnly>
        </kinesis-element>
      </div>
    </div>
  </kinesis-container>
</template>
