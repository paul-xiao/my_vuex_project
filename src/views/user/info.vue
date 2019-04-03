<template>
  <div class="userinfo">Hello,{{user.username}}</div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  watch: {
      userInfo({user}){
        this.user.username = user
      }
  },
  methods: {
    init() {
      this.$store.dispatch("GET_USER_INFO");
    },
  },
  mounted(){
      this.init()
  }
};
</script>
<style lang="less">
.userinfo {
  margin-top: 20px;
}
</style>
