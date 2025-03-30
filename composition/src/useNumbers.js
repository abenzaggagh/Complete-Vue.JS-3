import { ref, computed, watch } from 'vue';


const a = ref(0);
const b = ref(0);

const history = ref([]);

export function useNumers() {
    
    watch([a, b], ([newA, newB], [oldA, oldB]) => {
      if (newA !== oldA) {
        history.value.push(`Old a: ${oldA} -> New a: ${newA}`)
      }
    
      if (newB !== oldB) {
        history.value.push(`Old b: ${oldB} -> New b: ${newB}`)
      }
    });
    
    const total = computed(() => {
      return a.value + b.value;
    });

    return {a, b, history, total}
}


