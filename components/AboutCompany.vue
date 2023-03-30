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
            <h3 class="h3">Путь Frese</h3>
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

<style>
.time-line-cont{
    padding: 60px 0 0;
    position: relative;
}
.time-line-stage{
    position: absolute;
    bottom: 0;
    top: 0;
    left: 80px;
}
.time-line-stage:before{
    content: '';
    width: 2px;
    height: 100%;
    background: #909090;
    position: absolute;
    top: 33px;
    left: 10px;
    bottom: 0;
}
.time-line{
    margin: 0 0 40px;
    border-radius: 6px;
    position: relative;
}
.time-line-block{
    display: inline-block;
    padding: 0px 0 0 25%;
}
.time-line-block>strong{
    width: 75px;
    display: block;
    margin: 0 0 10px;
    font-size: 18px;
    position: absolute;
    left: 0;
    font-weight: 900;
    line-height: 1.4;
    top: -60px;
    text-align: right;
}
.time-line-block>span{
   /*  width: 100%; */
    display: block;
    margin: 0 0 10px;
    font-size: 17px;
    padding: 13px 11px;
    font-weight: 600;
    width: 200px;
    /* display: none; */
    position: absolute;
    /* background: #0f0f0f; */
    top: 0px;
    left: 115px;
    z-index: 22;
    border-radius: 15px;
    /* border: 2px solid #92c815; */
    /* color: #ffffff; */
    /* box-shadow: 0px 0px 35px -16px #000; */
    text-align: right;
    height: 240px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.time-line-block>p{
    font-size: 16px;
    margin: 0px 0 0 22%;
    height: 240px;
    display: flex;
    align-items: center;
    line-height: 1.9;
    padding: 0 15% 0 0;
}
.time-line-block-img{
    height: 240px;
    border-radius: 17px;
    width: 18%;
    float: left;
}
.time-line-block-img img{
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    max-height: 240px;
    border-radius: 17px;
    box-shadow: 0px 0px 35px -16px #000;
}
.jarallax {
  position: relative;
  z-index: 0;
}
.jarallax > .jarallax-img {
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.prx-02{
height: 400px;
}
/* .bg-img {
    width: 20%;
    height: 200px;
    background-size: cover;
    border-radius: 10px;
}
.bg-img_10 {
    background-image: url('/img10.jpeg');
} */
</style>