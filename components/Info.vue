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
  <kinesis-container
    class="container-kinesis-info"
    event="scroll"
    :active="mobileScin"
  >
    <kinesis-element
      tag="div"
      class="circle circle-purple"
      :originY="40"
      type="translate"
      :strength="-1600"
      axis="y"
    />
    <kinesis-element
      tag="div"
      class="circle circle-purple-2"
      :originY="-10"
      type="translate"
      :strength="-400"
      axis="y"
    />
    <kinesis-element
      tag="div"
      class="circle circle-purple-3"
      :originY="50"
      type="translate"
      :strength="-500"
      axis="y"
    />
    <kinesis-container>
      <div class="container" :active="mobileScin">
        <div class="more-info">
          <div data-aos-once="true" data-aos="fade-up">
            <div class="how-accept">
              <div class="how-accept-img">
                <NuxtImg
                  provider="aliyun"
                  src="/gruz-na.png"
                  sizes="sm:400px md:400px lg:400px"
                  alt="!"
                  loading="lazy"
                  format="wepb"
                />
              </div>
              <div class="how-accept-desc">
                <kinesis-element :strength="6" type="depth" tag="strong">
                  Преимущества работы с нами!
                </kinesis-element>
                <kinesis-element :strength="8" type="depth" tag="p">
                  Оптимизируем логистику наших клиентов и сохраняем совершенный
                  подход в решении логистических задач любой сложности.
                </kinesis-element>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <h3 class="h3">Как заказать услугу</h3>
        <div class="more-info">
          <div data-aos-once="true" data-aos="fade-up">
            <div class="columns is-multiline">
              <div class="column is-12 has-text-centered">
                <!-- <h4>Как заказать</h4> -->
              </div>
              <div class="column is-3">
                <div class="more-info-how">
                  <div class="icon-how">
                    <Icon name="solar:notification-unread-lines-linear" />
                  </div>
                  <strong>Вы направляете нам запрос на перевозку</strong>
                </div>
              </div>
              <div class="column is-3">
                <div class="more-info-how">
                  <div class="icon-how">
                    <Icon name="solar:square-forward-linear" />
                  </div>
                  <strong>Мы делаем Вам лучшее предложение</strong>
                </div>
              </div>
              <div class="column is-3">
                <div class="more-info-how">
                  <div class="icon-how">
                    <Icon name="solar:document-add-broken" />
                  </div>
                  <strong
                    >Мы оформляем с Вами договор и заказ на перевозку</strong
                  >
                </div>
              </div>
              <div class="column is-3">
                <div class="more-info-how">
                  <div class="icon-how">
                    <Icon name="solar:routing-3-broken" />
                  </div>
                  <strong>Мы организуем перевозку Вашего груза</strong>
                </div>
              </div>
            </div>
          </div>

          <div class="form-info">
            <div data-aos-once="true" data-aos="fade-up">
              <kinesis-element :strength="8" type="depth" tag="h4">
                НАЧНЁМ СОТРУДНИЧАТЬ!
              </kinesis-element>
              <FormUser />
            </div>
          </div>
        </div>
      </div>
    </kinesis-container>
  </kinesis-container>
</template>
