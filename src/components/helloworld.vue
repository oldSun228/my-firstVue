<template>
    <div>
        <div class="home">
            <tHead class="header"></tHead>
            <div class="main">
                <router-view></router-view>
            </div>
        </div>
        <div>
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="name" label="姓名" width="180" align="center"></el-table-column>
                <el-table-column prop="sex" label="性别" width="" align="center"></el-table-column>
            </el-table>
            <el-button type="primary" @click="toMessage">websocket</el-button>
        </div>
    </div>

</template>
<script>
    import tHead from './header'

    export default {
        components: {
            tHead,
        },
        data () {
            return {
                tableData: []
            };
        }
        ,
        mounted () {
            this.postApiData();
        },
        methods: {
            postApiData () {
                this.$backend.request(this.$api.search.queryData).then((result) => {
                    this.tableData = result;
                })
            },
            toMessage () {
                this.$router.push({path: '/message',query:{account:this.$route.query.account}});
            }
        }
    }
</script>
<style scoped>
    .home {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .main {
        flex: 1;
        align-content: left;
    }
</style>
