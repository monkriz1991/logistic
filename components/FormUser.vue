<script setup>
const form = ref({
  username: "",
  phone: "",
});

const handleLogin = async () => {
  const { data: responseData } = await useFetch("/api/mail/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: form.value,
  });
  form.value = {};
};
</script>
<template>
  <div>
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
            placeholder="+7 "
            v-model="form.phone"
            v-maska
            data-maska="+7(###) ###-##-##"
          />
          <span class="is-small icon is-left">
            <Icon name="solar:call-dropped-broken" />
          </span>
        </div>
      </div>
      <div class="field">
        <div class="control form-info-but">
          <button class="button is-success index-b-modal" type="submit">
            Оформить заказ
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
