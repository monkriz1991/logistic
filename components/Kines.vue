<script setup>
    const mobileScin = ref(true)

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
</script>

<template>

        <kinesis-container class="container-kinesis " :active="mobileScin">
            <kinesis-element 
            tag="div"
            class="circle circle-blue"
            :strength="10" 
            type="depth"/>
            <kinesis-element 
            tag="div"
            class="circle circle-purple"
            :strength="10" 
            type="depth"/>
            <kinesis-element 
            tag="div"
            class="circle circle-yellow"
            :strength="10" 
            type="depth"/>
            <kinesis-element 
            tag="div"
            class="circle circle-green"
            :strength="10" 
            type="depth"/>
            <kinesis-element 
            tag="div"
            class="circle circle-orange"
            :strength="10" 
            type="depth"/>
            <kinesis-element 
            tag="div"
            class="circle circle-red"
            :strength="10" 
            type="depth"/>
            <div class="container">
                <div class="kinesis-desc">
                    <kinesis-element :strength="10">
                        <h1>
                        <kinesis-element 
                        tag="strong"
                        :strength="10" 
                        type="depth">F</kinesis-element>
                        <kinesis-element 
                        tag="strong"
                        :strength="9" 
                        type="depth">r</kinesis-element>
                        <kinesis-element 
                        tag="strong"
                        :strength="8" 
                        type="depth">e</kinesis-element>
                        <kinesis-element 
                        tag="strong"
                        :strength="9" 
                        type="depth">s</kinesis-element>
                        <kinesis-element 
                        tag="strong"
                        :strength="10" 
                        type="depth">e</kinesis-element>
                        <!-- <kinesis-element 
                        tag="span"
                        :strength="7" 
                        type="depth">Балансировка и регулирование</kinesis-element> -->
                        <kinesis-element 
                        tag="span"
                        :strength="10" 
                        type="depth">
                            <!-- <VueWriter class="manuf-denmarc" :array="['Дания -> Республика Беларусь / Arhiterm /']" :typeSpeed="50" caret="cursor"/> -->
                        </kinesis-element>
                        </h1>
                    </kinesis-element>
                </div>
                <div class="kinesis-img">
                    <kinesis-element class="kinesis-desc-logo" :strength="5">
                            <nuxt-img src="/frese-logo.webp" height="40" width="180" sizes="sm:100px md:100px lg:100px" alt="Балансировка и регулирование Frese"></nuxt-img>
                    </kinesis-element>
                    <!-- <kinesis-element :strength="5">
                        <nuxt-img src="/one-img.webp" height="490" width="330" sizes="sm:200px md:300px lg:400px" alt="frese-logotip"></nuxt-img>
                    </kinesis-element> -->
                </div>
            </div>
        </kinesis-container>

</template>
