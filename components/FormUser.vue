<script setup>
const form = ref({
  username: "",
  phone: "",
  type: "",
  size: "",
  from: "",
  to: "",
});
const myButton = ref(null);
const myName = ref(null);
const myPhone = ref(null);
const modalSucces = ref(false);
const emit = defineEmits(["ClosedModal"]);
const handleLogin = async () => {
  myName.value.classList.remove("is-danger");
  myPhone.value.classList.remove("is-danger");
  if (form.value.username != "" && form.value.phone != "") {
    modalSucces.value = true;
  } else {
    if (form.value.username == "") {
      myName.value.classList.add("is-danger");
    }
    if (form.value.phone == "") {
      myPhone.value.classList.add("is-danger");
    }
  }
  myButton.value.classList.add("is-loading");
  const { data: responseData } = await useFetch("/api/mail/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: form.value,
  });
  if (responseData) {
    emit("ClosedModal", false);
    // modalSucces.value = true
    myButton.value.classList.remove("is-loading");
    myName.value.classList.remove("is-danger");
    myPhone.value.classList.remove("is-danger");
    form.value = {};
  }
};
</script>
<template>
  <div>
    <Teleport to="body">
      <div v-if="modalSucces" class="modal-succes">
        <strong>Благодарим за заявку!</strong>
        <p>Мы свяжемся с Вами в ближайшее время.</p>
        <button class="delete is-large" @click="modalSucces = false"></button>
      </div>
    </Teleport>
    <form @submit.prevent="handleLogin">
      <div class="field">
        <div class="control is-medium has-icons-left has-icons-right">
          <input
            ref="myName"
            class="input is-medium"
            type="text"
            placeholder="Ваше имя"
            @change="onInputClick"
            v-model="form.username"
          />
          <span class="is-small icon is-left">
            <Icon name="solar:user-rounded-broken" />
          </span>
          <span class="icon is-small is-right">
            <Icon name="solar:star-shine-broken" />
          </span>
        </div>
      </div>
      <div class="field">
        <div class="control is-medium has-icons-left has-icons-right">
          <input
            ref="myPhone"
            class="input is-medium"
            placeholder="+375 "
            v-model="form.phone"
            v-maska
            data-maska="+375(##) ###-##-##"
          />
          <span class="is-small icon is-left">
            <Icon name="solar:call-dropped-broken" />
          </span>
          <span class="icon is-small is-right">
            <Icon name="solar:star-shine-broken" />
          </span>
        </div>
      </div>
      <div class="field">
        <div class="control is-medium has-icons-left">
          <input
            class="input is-medium"
            type="text"
            placeholder="Тоннаж"
            @change="onInputClick"
            v-model="form.size"
          />
          <span class="is-small icon is-left">
            <Icon name="solar:user-rounded-broken" />
          </span>
        </div>
      </div>
      <div class="field">
        <div class="control is-medium has-icons-left">
          <input
            class="input is-medium"
            type="text"
            placeholder="Тип груза"
            @change="onInputClick"
            v-model="form.type"
          />
          <span class="is-small icon is-left">
            <Icon name="solar:user-rounded-broken" />
          </span>
        </div>
      </div>
      <div class="field">
        <div class="control is-medium has-icons-left">
          <input
            class="input is-medium"
            type="text"
            placeholder="Укажите откуда забрать"
            @change="onInputClick"
            v-model="form.from"
          />
          <span class="is-small icon is-left">
            <Icon name="solar:user-rounded-broken" />
          </span>
        </div>
      </div>
      <div class="field">
        <div class="control is-medium has-icons-left">
          <input
            class="input is-medium"
            type="text"
            placeholder="Пункт назначения"
            @change="onInputClick"
            v-model="form.to"
          />
          <span class="is-small icon is-left">
            <Icon name="solar:user-rounded-broken" />
          </span>
        </div>
      </div>
      <div class="field">
        <div class="control form-info-but">
          <button
            ref="myButton"
            class="button is-success index-b-modal"
            type="submit"
          >
            Отправить заявку
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
