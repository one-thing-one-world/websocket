<template>
  <div class="box">
    <div class="container">
    
      <div v-for="(item,index) in userLists" :key="index">
        {{item}}
      </div>


    
    </div>
    <div class="input-box">
      <input v-model="value" type="text" />
    </div>
    <div class="send" @click="send">发送信息</div>
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
      delUser:"",
      userLists:[],

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
        this.$router.push({ name: "chat" });
      }
    },
    loginError(data) {
      console.log(data);
    },
    receiveMessage(data) {
      console.log(data);
    },
    userList(data) {
      this.userLists = data
      
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
.box div {
  margin-top: 20px;
}
.send {
  width: 200px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: green;
  color: white;
}
.box {
  border: 2px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.container {
  width: 400px;
  height: 400px;
  border: 1px solid black;
}
</style>
