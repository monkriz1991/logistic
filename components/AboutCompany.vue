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
    <div class="about-info"> 
        <div class="container " >
            <h2 class="h3">Путь Frese</h2>
            <div data-aos-once="true" data-aos="fade-up">
                <div class="time-line">
                    <div class="time-line-stage">
                        <Icon name="mdi:checkbox-blank-circle-outline" />
                    </div>
                    <div class="time-line-cont">
                        <kinesis-container class="time-line-block" :active="mobileScin">
                            <kinesis-element 
                            tag="strong"
                            :strength="2" 
                            type="depth">
                            1944
                            </kinesis-element>
                            <kinesis-element 
                                tag="span"
                                :strength="2" 
                                type="depth">
                                Основание компании
                            </kinesis-element>
                            <kinesis-element class="time-line-block-img" :strength="3">
                                <img src="/history-factory-1.webp" alt="История компании Frese продолжается уже более 70 лет">
                            </kinesis-element>
                            <p>История компании Frese продолжается уже более 70 лет и берет свое начало в 1944 году, 
                            когда Берге Фрезе (Børge Frese) основал скромный литейный цех в подвальном помещении 
                            в городе Слагельсе в Дании, где и по сей день находится головной офис компании FRESE.</p>
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
                            <kinesis-element 
                            tag="strong"
                            :strength="2" 
                            type="depth">
                            1960-х
                            </kinesis-element>
                            <kinesis-element 
                                tag="span"
                                :strength="2" 
                                type="depth">
                                Расширение производства
                            </kinesis-element>
                            <kinesis-element class="time-line-block-img" :strength="3">
                                <img src="/history-factory-2.webp" alt="В 1960-х, Frese инвестировала значительные средства в новое предприятие">
                            </kinesis-element>
                            <p>В 1960-х, Frese инвестировала значительные средства в новое предприятие - передовое производство по выпуску клапанов. 
                            Это было началом истории успеха, залогом которого послужили передовые технологии и автоматические клапаны, которые Frese разрабатывает и по сегодняшний день. 
                            Компании Frese принадлежит мировой патент на автоматический балансировочный клапан.</p>
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
                            <kinesis-element 
                            tag="strong"
                            :strength="2" 
                            type="depth">
                            Сейчас
                            </kinesis-element>
                            <kinesis-element 
                                tag="span"
                                :strength="2" 
                                type="depth">
                                Мировой лидер в области динамических балансировочных клапанов
                            </kinesis-element>
                            <kinesis-element class="time-line-block-img" :strength="3">
                                <img src="/history-factory-3.webp" alt="С момента своего основания в 1944 году">
                            </kinesis-element>
                            <p>С момента своего основания в 1944 году, Frese построила глобальную сеть, состоящую из специализированных дистрибьютериов, торговых представительств и дочерних компаний во всех уголках мира. 
                            В настоящее время компания Frese представлена почти в 50-ти странах. 
                            Международная деятельность компании простирается от Европы, Африки и Ближнего Востока до Восточной Азии и Новой Зеландии.</p>
                        </kinesis-container>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>
