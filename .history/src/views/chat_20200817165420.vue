<template>
<div>
  <div class="container">

  </div>
  <div class="input-box"> <input type="text"></div>
  <div class="send">发送信息</div>
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

<style lang="scss" scoped>
.container {
  width: 500px;
  height: 500px;
  border: 1px solid black;
}
</style>
