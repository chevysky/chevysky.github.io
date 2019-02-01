<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <el-input v-model="name" placeholder="请输入姓名"></el-input>
    <span>{{name}}</span>
    <el-input v-model="age" placeholder="请输入年龄"></el-input>
    <span>{{age}}</span>
    <el-input v-model="sex" placeholder="请输入性别"></el-input>
    <span>{{sex}}</span>
    <el-button type="warning" @click="userSend()">提交表单数据</el-button>
  </div>
</template>

<script>
export default {

  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name : 'chevysky',
      age : 18,
      sex : 'man'
    }
  },
  methods:{
    userSend(){
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
