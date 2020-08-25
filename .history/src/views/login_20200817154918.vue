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
      imgText:[
        {avatar01:'../assets/avatar01.jpg'},
        {avatar02:'../assets/avatar01.jpg'},
        {avatar03:'../assets/avatar01.jpg'},
        {avatar04:'../assets/avatar01.jpg'},
        {avatar05:'../assets/avatar01.jpg'},
        {avatar06:'../assets/avatar01.jpg'},
        {avatar07:'../assets/avatar01.jpg'},
        {avatar08:'../assets/avatar01.jpg'},
        {avatar09:'../assets/avatar01.jpg'},
        {avatar10:'../assets/avatar01.jpg'},


      ]

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
 
    display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.loginBtn{
  width: 200px;
  height: 40px;
  background: green;
}
.login{
  width: 400px;
  height: 400px;
  border:1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.login div{
  margin-bottom: 20px;
}
</style>
