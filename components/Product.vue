<script setup>
    const config = useRuntimeConfig()
    const route = useRoute()
    const idFrese = ref(43)
    const ungGal = ref([])
    const cartProduct = ref(0)
    const cartProductDoc = ref(0)
    
    const { data: product } = await useFetch(config.baseURL+`catalog/product/?ordering=position&manuf=[${idFrese.value}]`)
    onMounted(() => {
        document.documentElement.classList.remove('modal-open');
        newCard()
    });
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
        <div class="slid-item">
            <div  class="catalog-list-block">
                <ClientOnly>
                    <kinesis-container class="catalog-list-img img-first">       
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
                                                <img :src="src" class="view-box">
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
                    <strong>{{ cartProduct.name }}</strong>
                </div>
            </div> 
        </div>
        <div class="slider-product">
        <div class="columns is-multiline">
            <Swiper
                :modules="[SwiperEffectCreative, SwiperNavigation, SwiperPagination]"
         
                :space-between="0"
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
                <SwiperSlide @click="newCard(item)" v-for="item in product.results" :key="item">
                    <ClientOnly>
                        <kinesis-container  class="catalog-list-img">           
                            <kinesis-element 
                            tag="div"
                            class="catalog-list-img"
                            :strength="10" 
                            type="depth">
                                <kinesis-element 
                                tag="img"
                                :src="item.img"
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
                    <span >{{item.name}}</span>
                </div>
                </SwiperSlide>
            </swiper>
        </div>
        </div>
    </div>
</template>

<style >
.PhotoSlider__FooterWrap{
    display: none;
}
.PhotoConsumer{
    position: relative;
}
.modal-zoom-svg{
    position: absolute;
    right: 15px;
    color: #ffffff;
    bottom: 15px;
    background: #919191;
    border-radius: 50%;
    padding: 4px;
    height: 32px;
    width: 32px;
    cursor: pointer;
}
.modal-zoom-svg:hover{
    transition: .2s;
    background: #686868;
}
.hero-body-slider{

}
.hero-body-slider img{
    padding: 10px;
    -o-object-fit: contain;
    object-fit: contain;
    height: 100px;
    width: 100px;
    background: #fff;
    border-radius: 18px;
    margin: 0 10px 0 0;
}
.hero-body .title{
    font-size: 1.3rem;
    padding: 0 20px 0 0;
    display: inline-block;
    line-height: 1.4;
    max-width: 80%;
}
.vcp__header-icon svg {
    opacity: 0.5;
    height: 22px !important;
    top: 2px;
    position: relative;
}
.vpl_body-content{
    display: flex;
    justify-content: space-between;
    margin: 0 0 10px;
    border-bottom: 1px dashed #e9e9e9;
}
.vcpg .vcp__header{
    background: #fff !important;
    padding: 35px 50px;
}
.vcp__body-content{
    padding: 20px 50px !important;
}
.vcp__body-content span{
    font-size: 14px;
}
.vcp__body-content strong{
    font-size: 14px;
    font-weight: 500;
}
.product-desc{
    padding: 50px;
    line-height: 1.5;
    font-size: 14px;
}
.product-desc p {
    margin: 0 0 10px;
}
.product-desc ul {
    padding: 10px 0 0 15px;
}
.product-desc ul li{
    list-style: circle;
    margin: 0 0 10px;
}
.modal-header .hero.is-primary {
    background-color: #00d1b2;
    color: #fff;
    border-radius: 15px 15px 0 0px;
}
.modal-header .hero-body{
    position: relative;
}
.modal-header button.delete{
    position: absolute;
    right: 50px;
    top: 50px;
}
.product-links{
    margin: 0 0 25px 25px;
}
.catalog-list-desc-slide{
    font-size: 13px;
    padding: 30px 10% 0 10%;
    display: flex;
    line-height: 1.6;
    font-weight: 500;
    text-align: left;
    width: 88%;
}
.img-first{
    height: 360px !important;
    margin: 0 !important;
    min-width: 420px !important;
    width: 420px !important;
    border-radius: 32px !important;
}
.slider-product .swiper-slide{
    display: flex;
    /* justify-content: center; */
    cursor: pointer;
    flex-direction: column;
    align-items: center;
}
.img-first img{
    padding: 30px !important;
    border-radius: 32px !important;
}
.img-first .catalog-list-img-bg{
    border-radius: 32px !important;
    background-color: #ffffff;
    box-shadow: none;
}
.slid-item{
    padding: 50px 0 100px;
}
.swiper-button-prev{
    left: var(--swiper-navigation-sides-offset,40px);
}
.swiper-button-next{
    right: var(--swiper-navigation-sides-offset,40px);
}
.swiper-button-next, .swiper-button-prev{
    box-shadow: 0 0 9px -7px #333;
    background: #fff;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    display: flex;

}
.swiper-button-next:after, .swiper-button-prev:after{
    font-size: 16px !important;
    color: #333;
}
.slider-product{
    width: 82%;
    /* padding: 0 10px; */
    margin: 0 auto;
}
.swiper-wrapper{
    padding: 30px 0 0 0;
}
.swiper-pagination{
    width: 80px !important;
    top: 2% !important;
    bottom: auto !important;
}
.yellowgreenposition{
    top: -100px;
    left: -70px;
}
.yellowgreencolor{
    background-color: #d8f235;
    width: 90px;
    height: 90px;
    border-radius: 100%;
}
.circle {
    border-radius: 100%;
    position: absolute;
}
.darkgreenposition{
    top: -87px;
    left: -53px;
}
.darkgreencolor{
    background-color: #19ad9b;
    width: 170px;
    height: 170px;
    border-radius: 100%;
}
.brightgreencolor{
    border: 4px solid #00bfbf;
    border-radius: 100%;
    width: 80px;
    height: 80px;
    position: absolute;
    right: -22px;
    bottom: -26px;
    box-shadow: inset 0px 0px 33px -32px #00bfbf;
    background: transparent;
}
.smooth {
    -webkit-transition: -webkit-transform .1s;
    transition: -webkit-transform .1s;
    transition: transform .1s;
    transition: transform .1s,-webkit-transform .1s;
}
.catalog-list-block{
    display: flex;
    width: 100%;
    border-radius: 10px;
    padding: 0px 25px 0px 0px;
    cursor: pointer;
    position: relative;
    margin: 0 0 10px;
    justify-content: center;
}
.catalog-list-img{
    height: 140px;
    margin: 0px auto;
    min-width: 150px;
    width: 88%;
    position: relative;
}
.catalog-list-img img{
    max-width: 100%;
    max-height: 100%;
    padding: 25px;
    -o-object-fit: contain;
    object-fit: contain;
    height: 100%;
    width: 100%;
    background: #fff;
    border-radius: 24px;
}
.catalog-list-img-bg{
    background-color: #b8c70a;
    background-color: #0f0f0f; 
    bottom: 0;
    content: "";
    left: 0;
    opacity: .04;
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 25px;
    box-shadow: 0px 0px 35px -16px #000;
}
.catalog-list-block-desc{
    margin: 0 0 0 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.catalog-list-block-desc strong{
    font-weight: 900;
    font-size: 23px;
    line-height: 1.5;
    max-width: 440px;
    margin: 0 0 0 25px;
}
</style>