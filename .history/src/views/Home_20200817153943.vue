<template>
<div class="container">
  <div class="login">
    <div>用户登录</div>
    <div>username:
      <input type="text">
    </div>
    <div>
      <div>选择头像</div>
      <div>imgs</div>
    </div>


    <div class="loginBtn">登录</div>
  </div>

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

  },
  mounted() {

  },
  watch: {

  },
  computed: {

  }
}
</script>

<style scoped lang='scss'>
.container{
  border: 2px solid gray;
}
.loginBtn{
  width: 200px;
  height: 40px;
}
</style>
