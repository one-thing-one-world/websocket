<template>
<div class="box">
  <div class="container">
    <div class="left">

      <div class="username" v-for="(item,index) in userlist" :key="index">
        {{item}}
      </div>

    </div>
    <div class="right">
      <div class="top">聊天室()</div>
      <div class="line"></div>

      <div class="content">

      </div>
      <div class="bottom"></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      value: "",
      delUser: "",
      userlist: [],
    };
  },
  methods: {
    send() {
      this.$socket.emit("sendMessage", this.value);
    },
  },
  mounted() {
    this.userlist = JSON.parse(this.$route.params.userlist)
    console.log(this.userList);
  },
  sockets: {
    loginSuccess(data) {
      if (data.msg !== "登陆失败") {
        this.$router.push({
          name: "chat",
        });
      }
    },
    loginError(data) {
      console.log(data);
    },
    receiveMessage(data) {
      console.log(data);
    },
    userList(data) {
      this.userLists = data;

      console.log(this.userLists);
    },
    delUser(data) {
      console.log(data.username);
    },
  },
  watch: {
    // 'delUser'(val){
    //   console.log(val);
    // }
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.bottom {

  height: 140px;
  border: 2px solid green;
  width: 100%;

}

.content {

  height: 320px;
  width: 100%;
  border: 1px solid red;
  display: flex;

}

.line {
  width: 80%;
  height: 1px;
  background: gray;
  margin-top: 10px;
  margin-bottom: 10px;
}

.top {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
}

.container {
  display: flex;
  width: 60%;
  height: 550px;
}

.left {
  width: 20%;
  height: 550px;
  background: #2e3238;
  color: red;
  display: flex;
  flex-wrap: wrap;
}

.username {
  width: 100%;
  border: 2px solid red;
  height: 100px;
}

.right {
  width: 80%;
  height: 550px;
  background: #eeeeee;
  display: flex;

  align-items: center;
  flex-direction: column;
}

.box {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
