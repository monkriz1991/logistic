<template>
    <div class="container">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <NuxtLink to="/" class="logotip">
                <strong>Frese.by</strong>
                <!-- <span><Icon name="ic:round-plus" /> arhiterm</span> -->
            </NuxtLink>
        </nav>
    </div>
</template>

<style scoped>
.logotip{
    padding: 20px 0 20px;
}
.logotip>strong{
    /* color: #213b74; */
    color: #b8c70a;
    font-size: 21px;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 0;
}
.logotip>span{
    float: left;
    width: 100%;
    font-size: 11px;
    color: #f90;
    font-weight: 600;
    position: relative;
}
.logotip>span svg{
    position: absolute;
    left: 43px;
    font-size: 13px;
    height: 13px;
    top: -1px;
}
</style>