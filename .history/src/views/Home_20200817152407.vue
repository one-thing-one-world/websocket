<template>
  <div class="home">
   
   <index></index>
  </div>
  
</template>

<script>
// @ is an alias to /src
import index from '@/index/index.vue'

export default {
  name: 'index',
  components: {
    index
  }
}
</script>
