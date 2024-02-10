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
const modalSucces = ref(false);
const emit = defineEmits(["ClosedModal"]);
const handleLogin = async () => {
  // modalSucces.value = true;
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
  }
  form.value = {};
};
</script>
<template>
  <div>
    <div v-if="modalSucces" class="modal-succes">
      <strong>Благодорим за заявку!</strong>
      <p>Мы свяжемся с Вами в ближайшее время.</p>
    </div>
    <form @submit.prevent="handleLogin">
      <div class="field">
        <div class="control is-medium has-icons-left">
          <input
            class="input is-medium"
            type="text"
            placeholder="Ваше имя"
            @change="onInputClick"
            v-model="form.username"
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
            placeholder="+375 "
            v-model="form.phone"
            v-maska
            data-maska="+375(##) ###-##-##"
          />
          <span class="is-small icon is-left">
            <Icon name="solar:call-dropped-broken" />
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
