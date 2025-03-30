<template>
  <button @click="increment()">{{ count }}</button>
  <button @click="a++">{{ a }}</button>
  <button @click="b++">{{ b }}</button>
  <p>{{ total }}</p>
</template>

<script>
import { ref } from 'vue';
import { useNumers } from './useNumbers';

export default {
  setup() {
    const count = ref(0);
    const increment = () => {
      count.value++;
    }

    const { a, b, history, total } = useNumers(); 
    
    return {
      count,
      a, b,
      total,
      history,
      increment,
    }
  }
}
</script>

<style>
p {
  font-size: 40px;
}

button {
  width: 100px;
  height: 100px;
  font-size: 40px;
}
</style>
