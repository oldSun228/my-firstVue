<template>
    <div>
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <!--<el-menu-item index="testOne"><router-link to="/testOne">主页</router-link></el-menu-item>-->
            <!--<el-menu-item index="testTwo"><router-link to="/testTwo">222</router-link></el-menu-item>-->
            <!--<el-menu-item index="testThree"><router-link to="/testThree">333</router-link></el-menu-item>-->
            <!--<el-menu-item index="testFour"><router-link to="/testFour">444</router-link></el-menu-item>-->
            <el-menu-item index="testOne">主页</el-menu-item>
            <el-menu-item index="testTwo">222</el-menu-item>
            <el-menu-item index="testThree">333</el-menu-item>
            <el-menu-item index="testFour">444</el-menu-item>
        </el-menu>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                activeIndex: 'testOne'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                // console.log(key, keyPath);
                // console.log(`/${key}`)
                this.$router.push(`/${key}`)
            }
        }
    }
</script>
<style scoped>

</style>
