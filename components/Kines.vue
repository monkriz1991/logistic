<template>

        <kinesis-container class="container-kinesis " >
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
                        <kinesis-element 
                        tag="span"
                        :strength="7" 
                        type="depth">Балансировка и регулирование</kinesis-element>
                        <kinesis-element 
                        tag="span"
                        :strength="10" 
                        type="depth">
                            <VueWriter class="manuf-denmarc" :array="['Дания -> Республика Беларусь / Arhiterm /']" :typeSpeed="50" caret="cursor"/>
                        </kinesis-element>
                        
                        </h1>
                    </kinesis-element>
                </div>
                <div class="kinesis-img">
                    <kinesis-element class="kinesis-desc-logo" :strength="5">
                            <img src="/frese-logo.webp" alt="">
                    </kinesis-element>
                    <kinesis-element :strength="5">
                        <img src="/one-img.png" alt="">
                    </kinesis-element>
                </div>
            </div>
        </kinesis-container>

</template>


<style scoped>
.manuf-denmarc{
    font-size: 14px;
    font-weight: 500;
}
.circle{
    border-radius: 100%;
    position: absolute;
}
.circle.circle-blue{
    background-color: #eaf1fa;
    width: 32vw;
    height: 32vw;
    top: 5%;
    right: -16vw;
}
.circle.circle-purple {
    border: 25px solid #f2eafa;
    width: 16vw;
    height: 16vw;
    left: 50%;
}
.circle.circle-yellow {
    background-color: #faf9ea;
    width: 8vw;
    height: 8vw;
    left: 30%;
    top: 25%;
}
.kinesis-desc{
    width: 100%;
    display: flex;
    align-items: center;
    line-height: 1.5;
}
.circle.circle-green {
    background-color: #eafaf2;
    width: 10vw;
    height: 10vw;
    right: 20%;
    top: 90%;
}
.circle.circle-orange{
    border: 25px solid #faf3ea;
    width: 8vw;
    height: 8vw;
    left: 20%;
    top: 60%;
}
.circle.circle-red {
    background-color: #faeaea;
    width: 12vw;
    height: 12vw;
    left: -4.8vw;
    top: 25%;
}
.kinesis-desc h1 strong{
    font-size: 66px;
    font-weight: 800;
}
.kinesis-desc h1 span{
    font-size: 33px;
    width: 100%;
    float: left;
    font-weight: 600;
}
.kinesis-img{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
.kinesis-img img{
    padding: 5%;
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
}
.kinesis-desc-logo{
    width: 78px;
    display: inline-block;
    position: absolute;
    /* top: 10%; */
    bottom: 11%;
    right: 18%;
}
.container-kinesis{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 100vh;
    position: relative;
    padding: 0 0 8%;
}
.container-kinesis .container{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
</style>