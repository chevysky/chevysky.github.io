<template>
    <div>
        <span>yesterday is history</span>
        <el-button type="primary" @click="sendAjax()">发送ajax请求</el-button>
        <el-button type="success" @click="sendNoParams()">无参发送请求</el-button>
    </div>
</template>

<script>
export default {
    name:'hero',
    methods:{
        sendAjax(){
            this.$ajax.post('/user/vue',{
                name:'chevysky',
                sex:'man',
                age:16
            }).then(function(res){
                console.log(res);
                console.log(res.data);
                alert(res.data);
            })
        },
        sendNoParams(){
            this.$ajax.post('/user/vues').then(function(res){
                alert('请求成功');
            })
        }
    }
}
</script>

