<template>
<div>

</div>
</template>

<script>
export default {
  name: '',
  props: {},
  components: {

  },
  data() {
    return {

    }
  },
  methods: {
    getData() {
      this.sockets.subscribe('relogin', (data) => {
        console.log(data)
      })
    }

  },
  mounted() {
    this.getData()
  },
  watch: {

  },
  computed: {

  }
}
</script>

<style scoped lang='scss'>

</style>
