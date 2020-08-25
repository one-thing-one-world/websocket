<template>
<div class="box">
  <div class="container">

  </div>
  <div class="input-box"> <input type="text"></div>
  <div class="send" @click="send">发送信息</div>
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
.box div{
  margin-top: 20px;
}
.send{
  width: 200px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: green;
  color: white;
}
.box{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.container {
  width: 500px;
  height: 500px;
  border: 1px solid black;
}
</style>
