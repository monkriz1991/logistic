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
      <h2 class="h3">Что мы делаем</h2>
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
                Автоперевозки
              </kinesis-element>
              <kinesis-element class="time-line-block-img" :strength="3">
                <NuxtImg
                  provider="aliyun"
                  src="/avto-gruz.jpg"
                  sizes="sm:400px md:400px lg:400px"
                  alt="MERIDIAN"
                  loading="lazy"
                  format="wepb"
                />
              </kinesis-element>
              <p>
                Организовываем международные перевозки на автотранспорте полными
                машинами (FTL) и в составе сборных грузов (LTL). Мы работаем в
                странах ЕС, Центральной Азии, Китая и внутри РФ.
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
                Проектная логистика
              </kinesis-element>
              <kinesis-element class="time-line-block-img" :strength="3">
                <NuxtImg
                  provider="aliyun"
                  src="/trans_log.jpg"
                  alt="Принцип работы"
                  loading="lazy"
                  format="wepb"
                />
              </kinesis-element>
              <p>
                Готовые отраслевые решения для перевозки крупногабаритных
                грузов. Специалисты компании составят транспортные маршруты с
                учетом оптимальной стоимости и скорости доставки.
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
                Отрасли
              </kinesis-element>
              <kinesis-element class="time-line-block-img" :strength="3">
                <NuxtImg
                  provider="aliyun"
                  src="/komb-log.jpg"
                  sizes="sm:400px md:400px lg:400px"
                  alt="Если Вы склонны к полноте - этот препарат для вас!"
                  loading="lazy"
                  format="wepb"
                />
              </kinesis-element>
              <p>
                Организовываем перевозки товаров народного потребления, таких
                как продукты питания, бытовая химия, скоропортящиеся продукты и
                т.д. Мы понимаем, что важно для бизнеса FMCG, и адаптировали
                наши решения с учетом специфики перевозки продуктов и других
                грузов
              </p>
            </kinesis-container>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
