<template>
    <div class="hello">
        <login_lable :val="val"></login_lable>
    </div>
</template>

<script>
    import login from './Login'

    export default {
        components: {
            login_lable: login
        },
        props: {
            //属性值
        },
        data () {
            return {
                val: '1111'
            }
        },
        computed: {
            //计算

        },
        watch: {
            //监听
        },
        created () {
            //创建前进入
        },
        mounted () {
            // 初始化完成进入
        },
        methods: {
            //方法
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
