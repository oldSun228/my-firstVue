<template>
    <div class="home">
        <tHead class="header"></tHead>
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import tHead from './header'

    export default {
        components: {
            tHead,
        },
        data() {
            return {};
        }
        ,
        methods: {

        }
    }
</script>
<style scoped>
    .home {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .main{
        flex: 1;
        align-content: left;
    }
</style>
