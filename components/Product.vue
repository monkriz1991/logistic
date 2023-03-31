<script setup>
    const config = useRuntimeConfig()
    const route = useRoute()
    const idFrese = ref(43)
    const ungGal = ref([])
    const cartProduct = ref(0)
    const cartProductDoc = ref(0)
    const mobileScin = ref(true)
    const arrSwiper = ref([])
    
    const { data: product } = await useFetch(config.baseURL+`catalog/product/?ordering=position&manuf=[${idFrese.value}]`)
    onMounted(() => {
        document.documentElement.classList.remove('modal-open');
        newCard()
    });
    onMounted(() => {
        window.addEventListener("resize", (event) => {
            if(event.target.innerWidth<=800){
                mobileScin.value = false
            }else{
                mobileScin.value = true
            }
        })
        if(document.documentElement.clientWidth<=800){
            mobileScin.value = false
        }else{
            mobileScin.value = true
        }
    });
    function SlideChange(swiper) {
        arrSwiper.value = swiper.clickedSlide.children[0].attributes[0].nodeValue
        arrSwiper.value = JSON.parse(arrSwiper.value)
        newCard(arrSwiper.value)
    }
    function newCard(data){
        ungGal.value = []

        if(data==undefined){
            cartProduct.value = product.value.results[0]
            if(cartProductDoc.value = product.value.results[0].docs[0]){
                cartProductDoc.value = product.value.results[0].docs[0].doc
            }  
            ungGal.value.push(product.value.results[0].img)
            ungGal.value.push(product.value.results[0].images[0].img)
        }else{
            cartProduct.value = data
            if( cartProductDoc.value = data.docs[0]){
                cartProductDoc.value = data.docs[0].doc
            }      
            if(data.images.length){
                ungGal.value.push(data.images[0].img)
            }
            ungGal.value.push(data.img)
        }

    }
</script>
<template>
    <div class="container">
        <h2 class="h3">Продукция</h2>
        <div class="slid-item">
            <div  class="catalog-list-block">
                <strong v-show="mobileScin==false">{{ cartProduct.name }}</strong>
                <ClientOnly>
                    <kinesis-container class="catalog-list-img img-first" :active="mobileScin">       
                        <kinesis-element 
                        tag="div"
                        class="circle darkgreenposition"
                        :strength="10" 
                        type="depth">
                            <div class="smooth darkgreencolor"></div>
                        </kinesis-element>
                        <kinesis-element 
                        tag="div"
                        class="circle yellowgreenposition"
                        :strength="10" 
                        type="depth">
                            <div class="smooth yellowgreencolor"></div>
                        </kinesis-element>       
                        <kinesis-element 
                        tag="div"
                        class="catalog-list-img img-first"
                        :strength="10" 
                        type="depth">
                            <kinesis-element 
                            tag="img"
                            :src="cartProduct.img"
                            :strength="10" 
                            :alt="cartProduct.name"
                            type="depth"/>
                            <kinesis-element 
                            tag="div"
                            class="catalog-list-img-bg"
                            :strength="10" 
                            type="depth"/>
                        </kinesis-element>
                        <kinesis-element 
                        tag="div"
                        class="smooth brightgreencolor"
                        :strength="10" 
                        type="depth"/>
                    </kinesis-container>
                </ClientOnly>
                <div class="catalog-list-block-desc">
                    <div class="product-links">
                        <ModalProduct :product="cartProduct">
                            <template v-slot:headModal="{ events: { showModalFun } }" >
                                <div class="hero is-primary">
                                    <div class="hero-body">
                                        <p class="title">
                                        {{cartProduct.name}}
                                        </p>
                                        <div class="hero-body-slider">
                                        <ClientOnly>
                                            <photo-provider>
                                                <photo-consumer  v-show="ungGal" v-for="src in ungGal" :intro="src" :key="src" :src="src">
                                                <img :alt="cartProduct.name+` - thumb`" :src="src" class="view-box">
                                                <Icon class="modal-zoom-svg" name="akar-icons:zoom-in" />
                                                </photo-consumer>
                                            </photo-provider>
                                        </ClientOnly>
                                        </div>
                                        <button 
                                        @click="showModalFun" class="delete is-large"></button>
                                    </div>
                                </div>
                            </template>
                            <template v-slot:link-arhiterm>
                                <a 
                                class="button is-medium is-danger r-50 ml-2"
                                :href="`https://arhiterm.by/product/`+cartProduct.kirilica_name" target="_blank">
                                    <span class="icon">
                                        <Icon class="modal-b-svg" name="radix-icons:open-in-new-window" />
                                    </span>  
                                </a>
                            </template>
                            <template v-if="cartProductDoc" v-slot:pdf-arhiterm>
                                <a 
                                class="button is-medium is-info r-50 ml-2"
                                :href="cartProductDoc" target="_blank">
                                    <span class="icon">
                                        <Icon class="modal-b-svg" name="carbon:document-pdf" />
                                    </span>   
                                </a>
                            </template>
                            <template v-slot:body>
                                <div class="product-char">
                                    <ClientOnly>
                                        <vue-collapsible-panel-group  >
                                            <vue-collapsible-panel 
                                            :expanded="false"
                                            v-for="item in cartProduct.product" :key="item">
                                                <template #title>
                                                    {{item.name}}
                                                </template>
                                                <template #content>
                                                    <div 
                                                    v-for="itemFill in item.filter_dict" :key="itemFill" 
                                                    class="vpl_body-content">
                                                        <span>{{itemFill.name}}</span>
                                                        <strong>{{itemFill.value}}</strong>
                                                    </div>
                                                </template>
                                            </vue-collapsible-panel>
                                        </vue-collapsible-panel-group>
                                    </ClientOnly>
                                </div>
                                <div class="product-desc">
                                    <div v-html="cartProduct.description"></div>
                                </div>
                            </template>
                        </ModalProduct>
                    </div>
                    <strong v-show="mobileScin==true">{{ cartProduct.name }}</strong>
                </div>
            </div> 
        </div>
        <div class="slider-product">
        <div class="columns is-multiline">
            <Swiper
                :modules="[SwiperEffectCreative, SwiperNavigation, SwiperPagination, SwiperA11y,SwiperMousewheel]"                
                @click="SlideChange"
                :loop="true"
                :navigation="{
                    next: true,
                    prev: true,
                }"
                :pagination="{ clickable: true, dynamicBullets: true,}"
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
                        slidesPerView: 2
                    },
                    680: {
                        slidesPerView: 3
                    },
                    1650: {
                        slidesPerView: 4
                    }
                }" 

            >
                <SwiperSlide v-for="item in product.results" :key="item">
                    <ClientOnly>
                        <kinesis-container v-bind:item-identity="JSON.stringify(item)" class="catalog-list-img" :active="mobileScin">           
                            <kinesis-element 
                            tag="div"
                            class="catalog-list-img"
                            :strength="10" 
                            type="depth">
                                <kinesis-element 
                                tag="img"
                                :src="item.img"
                                :alt="item.name"
                                :strength="10" 
                                type="depth"/>
                                <kinesis-element 
                                tag="div"
                                class="catalog-list-img-bg"
                                :strength="10" 
                                type="depth"/>
                            </kinesis-element>
                        </kinesis-container>  
                    </ClientOnly>
                <div class="catalog-list-desc-slide">
                    <span v-if="item.name.length<65">{{item.name}}</span>
                    <span v-else>{{item.name.substring(0,50)+".." }}</span>
                </div>
                </SwiperSlide>
            </swiper>
        </div>
        </div>
    </div>
</template>