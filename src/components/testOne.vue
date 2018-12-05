<template>
    <div>
        <el-button type="primary" @click="onAdd">添加</el-button>
        <div class="">
            <add ref="add" v-on:receive="receive"></add>
            <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                    prop="id"
                    label="序号"
                    width="120">
                    <template slot-scope="scope">
                        {{scope.$index+1}}
                    </template>
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="region"
                    label="地区"
                    width="180">
                    <template slot-scope="scope">
                        {{scope.row.region==='shanghai'?'区域一':'区域二'}}
                    </template>
                </el-table-column>
                <el-table-column
                    prop="desc"
                    width="180"
                    label="描述">
                </el-table-column>
                <el-table-column
                    prop=""
                    width="180"
                    label="操作">
                    <template slot-scope="scope">
                        <el-button>修改</el-button>
                        <el-button @click="onDel(scope.row.id)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
    import add from './add'

    export default {
        components: {
            add,
        },
        data() {
            return {
                tableData: [{
                    id: '0',
                    name: '马鸣',
                    region: 'shanghai',
                    desc: '描述'
                },{
                    id: '1',
                    name: '哈哈',
                    region: 'shanghai',
                    desc: '兑换啥'
                }]
            };
        },
        methods: {
            onAdd() {
                this.$refs.add.toggle()
            },

            onDel(id) {
                console.log(id)
                this.tableData = this.tableData.filter(item => item.id!== id)
            },

            receive(data) {
                this.tableData.push(data)
            }

        }
    }
</script>
<style scoped>

</style>
