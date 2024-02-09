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
                <img src="/box.jpg" alt="" />
              </div>
              <div class="how-accept-desc">
                <kinesis-element :strength="6" type="depth" tag="strong">
                  Как принимать Leptigen Meridian?
                </kinesis-element>
                <kinesis-element :strength="8" type="depth" tag="p">
                  По 2 капсулы 2 раза в день запивая 100мл воды, применять за 30
                  минут до еды.
                </kinesis-element>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <h3 class="h3">Как заказать</h3>
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
                  <strong>Вы оставляете заявку на нашем сайте</strong>
                </div>
              </div>
              <div class="column is-3">
                <div class="more-info-how">
                  <div class="icon-how">
                    <Icon name="solar:call-chat-rounded-broken" />
                  </div>
                  <strong>Менеджер перезванивает для оформления заказа</strong>
                </div>
              </div>
              <div class="column is-3">
                <div class="more-info-how">
                  <div class="icon-how">
                    <Icon name="solar:box-broken" />
                  </div>
                  <strong>Мы отправляем Ваш заказ почтой</strong>
                </div>
              </div>
              <div class="column is-3">
                <div class="more-info-how">
                  <div class="icon-how">
                    <Icon name="solar:wallet-money-broken" />
                  </div>
                  <strong>Вы оплачиваете заказ при получении</strong>
                </div>
              </div>
            </div>
          </div>

          <div class="form-info">
            <div data-aos-once="true" data-aos="fade-up">
              <kinesis-element :strength="8" type="depth" tag="h4">
                УСПЕЙТЕ ЗАКАЗАТЬ ПО АКЦИИ!
                <strong>139 <span>руб*</span></strong>
              </kinesis-element>
              <FormUser />

              <span>*Цена действительна при покупке курса</span>
            </div>
          </div>
        </div>
      </div>
    </kinesis-container>
  </kinesis-container>
</template>
