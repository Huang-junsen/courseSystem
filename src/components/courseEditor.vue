<template>
  <div>
    <el-card class="header-card">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>课程管理</el-breadcrumb-item>
        <el-breadcrumb-item>新增课程</el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
    <el-card style="position: relative;">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="课程名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="课程描述">
          <el-input v-model="form.desc"></el-input>
        </el-form-item>
      </el-form>
      <el-button @click="onSubmit" style="float: right; margin-bottom: 20px">提交</el-button>
    </el-card>
  </div>
</template>

<script>
import {createCourse, getCourse} from "../api";
var moment = require('moment');

export default {
  name: "courseEditor",
  data(){
    return {
      form:{
        date: "",
        desc:"",
        name: ""
      },
      formList:[]
    }
  },
  mounted() {
    getCourse().then( (data)=> {

      this.formList = data.data
      console.log(this.formList);
    })
  },
  methods:{
    onSubmit(scope) {
      console.log('submit!',this.form);
      //获取当前时间，作为当前创建时间
      this.form.date = moment().format('YYYY-MM-DD HH:mm:ss')

      //判断课程名称是否为空，直接返回
      if (!this.form.name) {
        this.$message({
          showClose: true,
          message: '标题不能为空',
          type: 'error'
        });
        return
      }
      //判断是否为同名课程，同名课程不添加，防止重复添加
      for (let i = 0; i < this.formList.length; i++) {
        if (this.formList[i].name == this.form.name){
          this.$message({
            showClose: true,
            message: '已有同名课程',
            type: 'warning'
          });
          return
        }
      }

      //创建课程
      createCourse(this.form).then((data) => {
        console.log(data.data);
        this.$message({
          showClose: true,
          message: '添加成功',
          type: 'success'
        });
        //创建完毕清空输入框
        this.form = {}
      })
    }
  }
}
</script>

<style scoped lang="scss">
.header-card{
  margin-bottom: 20px;
}
</style>