<template>
  <div class="container">
    <div class="login">
      <div>用户登录</div>
      <div>
        username:
        <input type="text" />
      </div>
      <div>
        <div>选择头像</div>
        <div class="img-box">
          <div v-for="(item,index) in imgList" :key="index">
            <div class="pic">
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
     
      imgList: [
        {
           name: require('../assets/avatar01.jpg')
        },
        {
          name: require('../assets/avatar01.jpg')
        },
        {
          name: require('../assets/avatar01.jpg')
        },
        {
           name: require('../assets/avatar01.jpg')
        },
        {
           name: require('../assets/avatar01.jpg')
        },
        {
          name: require('../assets/avatar01.jpg')
        },
        {
           name: require('../assets/avatar01.jpg')
        },
        {
           name: require('../assets/avatar01.jpg')
        },
        {
           name: require('../assets/avatar01.jpg')
        },
        {
           name: require('../assets/avatar01.jpg')
        },
      ],
    };
  },
  methods: {},
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
}
.pic{
  width: 20px;
  height: 20px;
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
  width: 200px;
  height: 40px;
  background: green;
}

.login {
  width: 400px;
  height: 400px;
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
