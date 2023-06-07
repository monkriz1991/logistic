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
  
