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
  <div class="about-info">
    <div class="container">
      <h2 class="h3">Что такое «Leptigen Meridian Diet»</h2>
      <div data-aos-once="true" data-aos="fade-up">
        <div class="time-line">
          <div class="time-line-stage">
            <Icon name="mdi:checkbox-blank-circle-outline" />
          </div>
          <div class="time-line-cont">
            <kinesis-container class="time-line-block" :active="mobileScin">
              <kinesis-element tag="strong" :strength="2" type="depth">
              </kinesis-element>
              <kinesis-element tag="span" :strength="2" type="depth">
                О препарате
              </kinesis-element>
              <kinesis-element class="time-line-block-img" :strength="3">
                <NuxtImg
                  provider="aliyun"
                  src="/leptigen-m-n.jpg"
                  sizes="sm:400px md:400px lg:400px"
                  alt="MERIDIAN"
                  loading="lazy"
                  format="wepb"
                />
              </kinesis-element>
              <p>
                «Leptigen Meridian Diet» - новая программа похудения,
                направленная на борьбу со всеми факторами, приводящими к набору
                избыточной массы тела. В составе капсул есть натуральные
                микроэлементы, которые нормализуют выработку лептина и помогают
                сигналам о насыщении как можно быстрее дойти до мозга.
              </p>
            </kinesis-container>
          </div>
        </div>
      </div>
      <div data-aos-once="true" data-aos="fade-up">
        <div class="time-line">
          <div class="time-line-stage">
            <Icon name="mdi:checkbox-blank-circle-outline" />
          </div>
          <div class="time-line-cont">
            <kinesis-container class="time-line-block">
              <kinesis-element tag="strong" :strength="2" type="depth">
              </kinesis-element>
              <kinesis-element tag="span" :strength="2" type="depth">
                Принцип работы
              </kinesis-element>
              <kinesis-element class="time-line-block-img" :strength="3">
                <NuxtImg
                  provider="aliyun"
                  src="/gormon-sytosti-leptin.jpg"
                  alt="Принцип работы"
                  loading="lazy"
                  format="wepb"
                />
              </kinesis-element>
              <p>
                Лептин — это гормон, который помогает регулировать аппетит. Он
                посылает сигналы в ваш мозг, когда вы наедаетесь и больше не
                нуждаетесь в пище. Однако из-за «невосприимчивости лептина» этот
                сигнал зачастую не достигает вашего мозга. В итоге вы едите
                больше, даже если ваш организм уже сыт. Новая формула блокировки
                жира борется с резистентностью к лептину.
              </p>
            </kinesis-container>
          </div>
        </div>
      </div>
      <div data-aos-once="true" data-aos="fade-up">
        <div class="time-line">
          <div class="time-line-stage">
            <Icon name="mdi:checkbox-blank-circle-outline" />
          </div>
          <div class="time-line-cont">
            <kinesis-container class="time-line-block">
              <kinesis-element tag="strong" :strength="2" type="depth">
              </kinesis-element>
              <kinesis-element tag="span" :strength="2" type="depth">
                Если Вы склонны к полноте - этот препарат для вас!
              </kinesis-element>
              <kinesis-element class="time-line-block-img" :strength="3">
                <NuxtImg
                  provider="aliyun"
                  src="/image-box.webp"
                  sizes="sm:400px md:400px lg:400px"
                  alt="Если Вы склонны к полноте - этот препарат для вас!"
                  loading="lazy"
                  format="wepb"
                />
              </kinesis-element>
              <p>
                Препарат представлен в виде капсул, рекомендованных для
                пошагового применения в домашних условиях в течение семи дней.
                Благодаря быстрому метаболизму у людей, принимающих "Leptigen
                Meridian Diet" подкожный жир в проблемных зонах может сгорать со
                скоростью до 800 грамм в сутки!
              </p>
            </kinesis-container>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
