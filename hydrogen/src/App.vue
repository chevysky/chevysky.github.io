<template>
<div id="index">
<el-row class="headbg">
  <el-col :span="24" >系统标题</el-col>
</el-row>
<el-row>
  <el-col :span="6">
    <el-menu default-active="2" class="el-menu-vertical-demo">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
          <el-menu-item index="1-1" @click="hello()">
                hello页面
            </el-menu-item>
          <el-menu-item index="1-2" @click="bodyer()">
             body页面
          </el-menu-item>
          <el-menu-item index="1-3" @click="love()">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
    </el-menu>
  </el-col>

  <el-col :span="18">
    <bodyer></bodyer>
    <hero></hero>
     <router-view name='a'></router-view>
  </el-col>
</el-row>

<el-row>
<el-col :span="24" class="footbg">
  页脚
   <router-view name="b"></router-view>
</el-col>
</el-row>
</div>
</template>

<script>
import bodyer from './components/bodyer'
import hero from './components/hero'
export default {
  name: 'App',
  components:{bodyer,hero},
  methods:{
    hello(){
      this.$router.push('/hello');
    },
    bodyer(){
      this.$router.push('/body');
    },
    love(){
      this.$router.push('/love');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.headbg {
   background-color: black;
   height: 100px;
   line-height: 100px;
   color: white;
}

.asidebg {
  background-color: darkcyan;
}

.footbg {
  background-color: black;
  color: white;

}

</style>
