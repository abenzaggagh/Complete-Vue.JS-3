<template>
  <form @submit.prevent="submit">
    <my-input 
    name="Username"
    :value="username.value"
    :rules="{ required: true, min: 5 }"
    :error="username.error"
    @update="update"
  />
  <my-input 
    name="Password"
    type="password"
    :value="password.value"
    :rules="{ required: true, min: 10 }"
    :error="password.error"
    @update="update"
  />
  <div>
    <my-button
    background="darkslateblue"
    color="white"
    :disabled="!valid"
    ></my-button>
  </div>
  </form>
</template>

<script>
import MyButton from './MyButton.vue';
import MyInput from './MyInput.vue';

export default {
  name: 'App',
  components: {
    MyButton,
    MyInput,
  },
  data() {
    return {
      username: {
        value: '',
        error: '',
      },
      password: {
        value: '',
        erro: '',
      }
    }
  },
  computed: {
    valid() {
      return !this.username.error && !this.password.error;
    }
  },
  methods: {
    submit($event) {
      $event.preventDefault();
      console.log($event)
    },
    update({ name, value, error }) {
      this[name].value = value;
      this[name].error = error;
    }
  }
}
</script>

<style scoped>

</style>
