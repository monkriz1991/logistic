<script setup>
const showModal = ref(false);
const myModal = ref(0);
const scroolEl = ref(0);
const count = ref(0);
function showModalFun(value) {
  if (scroolEl.value != 0) {
    setTimeout(() => {
      myModal.value.scrollTop = myModal.value.scrollHeight;
      myModal.value.scrollTo(0, 0);
    }, 10);
  }
  myModal.value.addEventListener("scroll", handleScroll);
  count.value = 0;
  showModal.value = !showModal.value;

  if (showModal.value == true) {
    document.documentElement.classList.add("modal-open");
  } else {
    document.documentElement.classList.remove("modal-open");
  }
}
function handleScroll(el) {
  scroolEl.value = myModal.value.scrollTop;
}
function onClickOutside(event, el) {
  count.value++;
  console.log(count.value);
  if (event.target.className == "modal-wraper") {
    if (showModal.value == true && count.value >= 1) {
      showModal.value = false;
      document.documentElement.classList.remove("modal-open");
      count.value = 0;
    }
  }
}
</script>

<template>
  <div>
    <div class="kinesis-button" @click="showModalFun">
      <button class="button index-b-modal">Заказать</button>
      <strong>139 <span>руб*</span></strong>
      <span>*Цена действительна при покупке курса</span>
    </div>
    <Teleport to="body">
      <div v-show="showModal == true" class="modal-mask">
        <div class="modal-wraper" ref="myModal">
          <div
            v-click-outside="onClickOutside"
            class="modal-container modal-form-margin"
          >
            <div class="modal-header">
              <div class="hero is-primary">
                <div class="hero-body">
                  <p class="title">Офромить заказ</p>
                  <button
                    @click="showModalFun"
                    class="delete is-large"
                  ></button>
                </div>
              </div>
            </div>
            <div class="form-modal-body">
              <div class="form-modal">
                <FormUser />
              </div>
            </div>
          </div>
        </div>
        <div class="modal-background"></div>
      </div>
    </Teleport>
  </div>
</template>
