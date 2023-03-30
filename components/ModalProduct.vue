<template>
<div>
    
    <button @click="showModalFun" class="button is-medium is-warning  r-50">
        <span class="icon">
            <Icon class="modal-b-svg" name="material-symbols:open-with-rounded" />
        </span>  
    </button>
    <slot name="pdf-arhiterm"/>
        <slot name="link-arhiterm"/>
    <Teleport to="body">

        <div v-show="showModal == true" class="modal-mask">
        <div class="modal-wraper" ref="myModal"  >
            <div v-click-outside="onClickOutside" class="modal-container">

              <div class="modal-header">
                <slot name="headModal" :events="{ showModalFun }"/>
              </div>
              <div class="modal-body">
                <slot name="body"/>
              </div>
            </div>
            </div>
            <div class="modal-background"></div>
        </div>

    </Teleport>
</div>
</template>
  
<script setup>
    const showModal = ref(false)
    const myModal = ref(0)
    const scroolEl = ref(0)
    const count = ref(0)
    function showModalFun(value) { 
        if(scroolEl.value!=0){
            setTimeout(() => {
            myModal.value.scrollTop = myModal.value.scrollHeight
            myModal.value.scrollTo(0,0); 
            }, 10)  
        }      
        myModal.value.addEventListener("scroll", handleScroll)
        count.value = 0
        showModal.value = !showModal.value

        if(showModal.value == true){
           document.documentElement.classList.add('modal-open');
        }else{
           document.documentElement.classList.remove('modal-open');
        }
    }
    function handleScroll(el){
        scroolEl.value = myModal.value.scrollTop  
    }
    function onClickOutside (event, el) {
        count.value++
        if(event.target.className=='modal-wraper'){
            if(showModal.value == true&&count.value>1){
                showModal.value = false
                document.documentElement.classList.remove('modal-open');
                count.value = 0
            }
        }
    }
</script>
<style>
.modal-wraper{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1050;
    width: 100%;
    height: 100%;
    outline: 0;
    z-index: 1072;
    overflow-x: hidden;
    overflow-y: auto;
}
.modal-b-svg{
    padding: 7px;
    height: 46px !important;
    width: 41px !important;
    border-radius: 32px;
}
.r-50{
    border-radius: 50%;
}
.modal-background {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: .5;
}
.modal-mask{
    position: absolute;
    z-index: 1071;
    align-items: center;
    flex-direction: column;
    justify-content: center;

}
.modal-container{
    margin: 50px auto;
    max-width: 840px;
    /* position: relative; */
    background: #fff;
    padding: 0px 0 0px;
    border-radius: 16px;
    display: block;
}
.modal-open{
    overflow: hidden;
    padding: 0 17px 0 0;
}
</style>