<template>
  <div>
    <el-card class="header-card">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>课程管理</el-breadcrumb-item>
        <el-breadcrumb-item>课程列表</el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
    <el-card class="search-box">
      <el-table
          :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
          style="width: 100%">
        <el-table-column
            label="发布时间"
            prop="date">
        </el-table-column>
        <el-table-column
            label="课程名称"
            prop="name">
        </el-table-column>
        <el-table-column
            label="课程描述"
            prop="desc">
        </el-table-column>

        <el-table-column
            align="right">
          <template slot="header" slot-scope="scope">
            <el-input
                v-model="search"
                size="mini"
                placeholder="输入关键字搜索"/>
          </template>
          <template slot-scope="scope">
            <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>


    <el-dialog title="编辑课程" :visible.sync="dialogFormVisible">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="课程名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="课程描述">
          <el-input v-model="form.desc"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit" style="float: right; margin-bottom: 20px">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import courseEditor from './courseEditor'
import {getCourse, deleteCourse, editorCourse} from "../api";
import moment from "moment";
export default {
  name: "courseList",
  comments:{
    courseEditor
  },
  created() {
    getCourse().then( (data)=> {

      this.tableData = data.data
      console.log(this.tableData);
    })
  },
  data(){
    return {
      searchData: {
        key:'',
        currentPage: 1,
        pageSize: 5
      },
      tableData: [],
      search: '',
      dialogTableVisible: false,
      dialogFormVisible: false,
      form:{}
    }
  },
  methods:{
    handleEdit(index, row) {
      // console.log(index, row);
      this.dialogFormVisible = true

      this.form = row

      // console.log(row.id, row);

    },
    onSubmit(){
      this.dialogFormVisible = false
      this.form.date = moment().format('YYYY-MM-DD HH:mm:ss')
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].name == this.form.name && this.tableData[i].id != this.form.id){
          this.$message({
            showClose: true,
            message: '已有同名课程',
            type: 'warning'
          });
          return
        }
      }
      editorCourse(this.form.id,this.form).then((data)=>{
        // console.log(data);
        this.$message({
          type: 'success',
          message: '修改成功!'
        });
      })
    },
    handleDelete(index, row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
        this.tableData.splice(index, 1)
        deleteCourse(row.id).then(function (data) {
          console.log(data,"删除");
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });

    }
  }
}
</script>

<style scoped lang="scss">
  .header-card{
    margin-bottom: 10px;
  }
  .search-box{
    .demo-form-inline{
      display: flex;
      justify-content: center;
    }
  }
</style>