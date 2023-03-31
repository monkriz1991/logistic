<template>
    <kinesis-container class="container-kinesis-info" event="scroll">
        <kinesis-element 
        tag="div"
        class="circle circle-purple"
        :originY="40"
        type="translate"
        :strength="-2600" 
        axis="y"/>
        <kinesis-element 
        tag="div"
        class="circle circle-purple-2"
        :originY="-10"
        type="translate"
        :strength="-400" 
        axis="y"/>
        <kinesis-element 
        tag="div"
        class="circle circle-purple-3"
        :originY="50"
        type="translate"
        :strength="-500" 
        axis="y"/>
        <div class="container">
            <h3 class="h3">Больше Frese</h3>
            <div class="more-info">
                <div class="more-info-block">
                    <ClientOnly>
                        <vue-collapsible-panel-group >
                            <vue-collapsible-panel :expanded="false">
                                <template #title>
                                    <div>PDF</div>
                                </template>
                                <template #content>
                                    <div >
                                        Обзор продукции
                                    </div>
                                </template>
                            </vue-collapsible-panel>
                            <vue-collapsible-panel :expanded="false">
                                <template #title>
                                    <div>Frese в РБ</div>
                                </template>
                                <template #content>
                                    <div >
                                        <a href="https://arhiterm.by/factory/frese/" target="_blank">frese / arhiterm</a>
                                    </div>
                                </template>
                            </vue-collapsible-panel>
                            <vue-collapsible-panel :expanded="false">
                                <template #title>
                                    <div>PDF</div>
                                </template>
                                <template #content>
                                    <div >
                                        Обзор продукции
                                    </div>
                                </template>
                            </vue-collapsible-panel>
                        </vue-collapsible-panel-group>
                    </ClientOnly>
                </div>
                <div hidden class="content is-normal mt-6">
                    <h3>Цели компании Frese</h3>
                    <p>Мы являемся, и намеренны оставаться, мировым лидером в производстве динамических балансировочных клапанов благодаря нашим общирным знаниям в области гидравлических систем. </p>
                    <p>Мы стремимся быть лидером в области технологий и авторитетом в глазах наших клиентов в рамках нашего основного направления бизнеса.</p>
                    <p>Наше основное направление бизнеса заключается в разработке решений для давления, 
                    расхода и контроля температуры, 
                    которые минимизируют потребление электроэнергии без ущерба для комфортного климата помещений.</p>
                    <p>Благодяря нашей продукции, производственным процессам и услугам, 
                    совместно с нашими клиентами, сотрудниками и стратегическими партнерами мы будем работать 
                    над эффективным использованием электроэнергии для нашего общего будущего.</p>
                    <p>За счет стабильных инвестиций в исследования и разработки, а также нашему желанию быть лучшими, 
                    мы будем продолжать предоставлять нашим клиентам ведущие, 
                    инновационные решения по экономии электроэнергии, 
                    с целью расширения нашего бизнеса и повышения прибыли заинтересованных сторон.</p>


                    <h4>Больше о продукции Frese Вы може узнеть из источников:</h4>
                    <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
                    <ul>
                    <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
                    <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
                    <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
                    <li>Ut non enim metus.</li>
                    </ul>
                </div>
            </div>
        </div>
</kinesis-container>
</template>
