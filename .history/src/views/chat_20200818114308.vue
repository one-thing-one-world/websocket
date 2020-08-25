<template>
<div class="box">
{{list}}
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
      userSelf: null,
      list:[],

    };
  },
  methods: {
    send() {
      this.$socket.emit("sendMessage", this.value);
    },
  },
  mounted() {
    // this.userlist = JSON.parse(this.$route.params.user);
    // this.userSelf = this.userlist[
    //   JSON.parse(this.$route.params.user).length - 1
    // ];
    // console.log(this.$route.params);
    // console.log(JSON.parse(this.$route.params.user));
  },
  watch: {
    // 'delUser'(val){
    //   console.log(val);
    // }
  },
  computed: {

  },
  sockets: {

    userList(data) {
      let arr = data
      // console.log('list', data);
      // this.list = data
      console.log(data);

    }
   
  },
};
</script>

<style lang="scss" scoped>
.username-line {
  width: 100%;
  height: 1px;
  background: rgb(161, 149, 149);
}

.avatar {
  width: 40px;
  height: 40px;
  margin-left: 20px;
}

.username-text {
  margin-left: 20px;
}

.avatar img {
  width: 100%;
  height: 100%;
}

.bottom {
  height: 140px;

  width: 100%;
}

.content {
  height: 320px;
  width: 100%;

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
  width: 25%;
  height: 550px;
  background: #2e3238;
  color: red;

}

.username {

  width: 100%;
  margin: 10px 0px;
  height: 50px;
  display: flex;
  align-items: center;
}

.right {
  width: 75%;
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
