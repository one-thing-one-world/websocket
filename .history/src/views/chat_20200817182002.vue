<template>
  <div class="box">
    <div class="container">
      <div class="left"></div>
      <div class="right">
        <div class="top">聊天室()</div>
        <div class="line"></div>
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
      userLists: [],
    };
  },
  methods: {
    getData() {
      this.sockets.subscribe("relogin", (data) => {
        console.log(data);
      });
    },
    send() {
      this.$socket.emit("sendMessage", this.value);
    },
  },
  mounted() {
    this.getData();
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
.container{
  width: 70%;
  height: 500px;
  border: 5px solid yellow;
}

.left{
  width: 30%;
  height: 500px;
  background: red;
}
.box {
  border: 2px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  background: green;
}

</style>
