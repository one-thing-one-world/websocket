<template>
<div class="container">
  <div class="login">
    <div>用户登录</div>
    <div>
      username:
      <input type="text" v-model="value" />
    </div>
    <div>
      <div>选择头像</div>
      <div class="img-box">
        <div v-for="(item,index) in imgList" :key="index">
          <div class="pic" @click="addPic(item)">
            <img :src="item.name" alt />
          </div>
        </div>
      </div>
    </div>

    <div class="loginBtn">登录</div>
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
      value: '',
      imgValue: '',
      imgList: [{
          name: require('../assets/avatar01.jpg')
        },
        {
          name: require('../assets/avatar02.jpg')
        },
        {
          name: require('../assets/avatar03.jpg')
        },
        {
          name: require('../assets/avatar04.jpg')
        },
        {
          name: require('../assets/avatar05.jpg')
        },
        {
          name: require('../assets/avatar06.jpg')
        },
        {
          name: require('../assets/avatar07.jpg')
        },
        {
          name: require('../assets/avatar08.jpg')
        },
        {
          name: require('../assets/avatar09.jpg')
        },
        {
          name: require('../assets/avatar10.jpg')
        },
      ],
    };
  },
  methods: {
    addPic(item) {

      this.imgValue = item.name
    
    },
    loginBtn() {
      this.$router.push({name:'Home'})
      this.$socket.emit('login', {
        username: this.value,
        avatar:this.imgValue
      });
      this.$router.push({name:'Home'})
    }
  },
  mounted() {
    console.log(this.imgList);
  },
  watch: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.img-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.pic {
  width: 70px;
  height: 60px;
}

img {
  width: 100%;
  height: 100%;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.loginBtn {
  cursor: pointer;
  width: 200px;
  height: 40px;
  background: green;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login {
  width: 400px;
  height: 500px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.login div {
  margin-bottom: 20px;
}
</style>
