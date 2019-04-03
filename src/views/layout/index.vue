<template>
  <div class="layout">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item
        v-for="item,index in navs"
        :key="index"
        :index="item.index"
        @click="goto(item.href)"
      >{{item.name}}</el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      islogin: false,
      activeIndex: "1",
      nav: [
        { index: "1", name: "home", href: "/user/info" },
        { index: "2", name: "about", href: "/about" },
        { index: "3", name: "signin", href: "/signin" },
        { index: "4", name: "signup", href: "/signup" },
        { index: "5", name: "logout", href: "/signin" }
      ]
    };
  },
  computed: {
    ...mapGetters(["userInfo"]),
    navs(nav) {
      if(this.islogin){
        return this.nav.filter(item => {
          return item.index != 3 && item.index !=4
        })
      }else {
        return this.nav.filter(item => {
          return item.index != 5
        })
      }
    }
  },
  watch: {
    userInfo({ user }) {
      if (user) {
        this.islogin = true;
      }
    },
    $route() {
      console.log(this.userInfo);
      if (this.userInfo.user) {
        this.islogin = true
      }else {
        this.islogin = false
      }
    }
  },
  methods: {
    logout() {
      this.$store.commit("LOGOUT");
    },
    goto(url) {
      this.$router.push(url);
      if(url === '/signin') {
        this.logout()
      }
    }
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
  font-size: 1rem;
}
</style>

     