<template>
    <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="name" label="姓名" width="180" align="center"></el-table-column>
        <el-table-column prop="sex" label="性别" width="" align="center"></el-table-column>
    </el-table>
    <!--<el-button type="primary">主要按钮</el-button>-->
    <!--<el-button type="success">成功按钮</el-button>-->
</template>
<script>
    export default {
        data () {
            return {
                tableData: []
            }
        },
        mounted () {
            this.postApiData();
        },
        methods: {
            postApiData () {
                this.$backend.request(this.$api.search.queryData).then((result) => {
                    this.tableData = result;
                })
            }
        }
    }
</script>
<style scoped>

</style>
