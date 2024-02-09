<script setup>
const ungGal = ref([]);
const cartProduct = ref(0);
const mobileScin = ref(true);
const arrSwiper = ref([]);
const arrProduct = ref([]);

const { data: product } = await useAsyncData("myObject", () =>
  queryContent("/").find()
);

if (product.value && product.value.length > 0) {
  arrProduct.value = product.value[0].results;
}
onMounted(() => {
  document.documentElement.classList.remove("modal-open");
  newCard();
});
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
function SlideChange(swiper) {
  arrSwiper.value = swiper.clickedSlide.children[0].attributes[0].nodeValue;

  arrSwiper.value = JSON.parse(arrSwiper.value);

  newCard(arrSwiper.value);
}
function newCard(data) {
  ungGal.value = [];
  if (data == undefined) {
    cartProduct.value = arrProduct.value[0];
    ungGal.value.push(arrProduct.value[0].img);
  } else {
    cartProduct.value = data;
    ungGal.value.push(data.img);
  }

  // ungGal.value.push(product.value.img);
}
</script>

<template>
  <div class="container">
    <h2 class="h3">Результат применения</h2>
    <div class="slid-item">
      <div class="catalog-list-block">
        <ClientOnly>
          <div v-if="mobileScin == false" class="city-span">
            <strong>{{ cartProduct.name }}</strong>
            <span>
              <Icon name="solar:city-broken" />{{ cartProduct.city }}</span
            >
            <span>{{ cartProduct.preview }}</span>
          </div>
          <kinesis-container
            class="catalog-list-img img-first"
            :active="mobileScin"
          >
            <kinesis-element
              tag="div"
              class="circle darkgreenposition"
              :strength="10"
              type="depth"
            >
              <div class="smooth darkgreencolor"></div>
            </kinesis-element>
            <kinesis-element
              tag="div"
              class="circle yellowgreenposition"
              :strength="10"
              type="depth"
            >
              <div class="smooth yellowgreencolor"></div>
            </kinesis-element>
            <kinesis-element
              tag="div"
              class="catalog-list-img-kines"
              :strength="10"
              type="depth"
            >
              <nuxt-img
                provider="aliyun"
                :src="cartProduct.img"
                :alt="cartProduct.name"
                sizes="sm:200px md:350px lg:400px"
              ></nuxt-img>
              <kinesis-element
                tag="div"
                class="catalog-list-img-bg"
                :strength="10"
                type="depth"
              />
            </kinesis-element>
            <kinesis-element
              tag="div"
              class="smooth brightgreencolor"
              :strength="10"
              type="depth"
            />
          </kinesis-container>
        </ClientOnly>
        <div class="catalog-list-block-desc">
          <ClientOnly>
            <strong v-if="mobileScin == true">{{ cartProduct.name }}</strong>
            <span v-if="mobileScin == true" class="city-span">
              <Icon name="solar:city-broken" />{{ cartProduct.city }}</span
            >
            <span v-if="mobileScin == true">{{ cartProduct.preview }}</span>
          </ClientOnly>
          <div class="product-links">
            <ModalProduct>
              <template v-slot:headModal="{ events: { showModalFun } }">
                <div class="hero is-primary">
                  <div class="hero-body">
                    <p class="title">
                      {{ cartProduct.name }}
                    </p>
                    <div class="hero-body-slider">
                      <ClientOnly>
                        <photo-provider>
                          <photo-consumer
                            v-show="ungGal"
                            v-for="src in ungGal"
                            :intro="src"
                            :key="src"
                            :src="src"
                          >
                            <NuxtImg
                              provider="aliyun"
                              :alt="cartProduct.name + ` - thumb`"
                              :src="src"
                              sizes="sm:100px md:100px lg:100px"
                              loading="lazy"
                              format="wepb"
                            />
                            <Icon
                              class="modal-zoom-svg"
                              name="akar-icons:zoom-in"
                            />
                          </photo-consumer>
                        </photo-provider>
                      </ClientOnly>
                    </div>
                    <button
                      @click="showModalFun"
                      class="delete is-large"
                    ></button>
                  </div>
                </div>
              </template>
              <template v-slot:body>
                <div class="product-char"></div>
                <div class="product-desc">
                  <div v-html="cartProduct.description"></div>
                </div>
              </template>
            </ModalProduct>
          </div>
        </div>
      </div>
    </div>
    <div class="slider-product">
      <div class="columns is-multiline">
        <ClientOnly>
          <Swiper
            :modules="[
              SwiperEffectCreative,
              SwiperNavigation,
              SwiperPagination,
              SwiperA11y,
              SwiperMousewheel,
            ]"
            @click="SlideChange"
            :loop="true"
            :navigation="{
              next: true,
              prev: true,
            }"
            :pagination="{ clickable: true, dynamicBullets: true }"
            :creative-effect="{
              prev: {
                shadow: false,
                translate: ['-20%', 0, -1],
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }"
            :breakpoints="{
              300: {
                slidesPerView: 2,
              },
              680: {
                slidesPerView: 3,
              },
              1650: {
                slidesPerView: 4,
              },
            }"
          >
            <SwiperSlide v-for="item in arrProduct" :key="item">
              <kinesis-container
                v-bind:item-identity="JSON.stringify(item)"
                class="catalog-list-img"
                :active="mobileScin"
              >
                <kinesis-element
                  tag="div"
                  class="catalog-list-img"
                  :strength="10"
                  type="depth"
                >
                  <NuxtImg
                    provider="aliyun"
                    :src="item.img"
                    :alt="item.name"
                    sizes="sm:100px md:150px lg:200px"
                    loading="lazy"
                    format="wepb"
                  />
                  <kinesis-element
                    tag="div"
                    class="catalog-list-img-bg"
                    :strength="10"
                    type="depth"
                  />
                </kinesis-element>
              </kinesis-container>
              <div class="catalog-list-desc-slide">
                <span>{{ item.name }}</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>
