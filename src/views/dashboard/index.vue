<template>
  <div class="dashboard-container">
    <!--<div class='dashboard-text'>name:{{name}}</div>-->
    <!--<div class='dashboard-text'>role:<span v-for='role in roles' :key='role'>{{role}}</span></div>-->
    <admin-dashboard></admin-dashboard>
    <!--<el-button @click="gg" id="a">aa</el-button>-->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import adminDashboard from './admin';
export default {
  name: 'dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  },
  components: {
    adminDashboard
  },
  methods: {
    gg() {
      document.getElementById('a').style = 'display:none';
      // document.getElementById('a').style = 'visibility:hidden';
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    /*margin: 30px;*/
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
