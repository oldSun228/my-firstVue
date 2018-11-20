<template>
    <!--背景图-->
    <div class="note" v-loading="loading">

        <!--login框，表单+tab标签页的组合-->
        <div class="loginFrame">

            <!--表单组件放在外面，标签栏在里面-->
            <el-form class="demo-ruleForm login-container">

                <!--tab标签-->
                <div class="tabsUser">
                    <el-tabs v-model="activeName" class="users" style="height: 30px;font-size: 25px"
                             @tab-click="handleClick">
                        <el-tab-pane label="学生" name="students" class="tab1"></el-tab-pane>
                        <el-tab-pane label="教师" name="teacher" class="tab2"></el-tab-pane>
                        <el-tab-pane label="教务老师" name="eduTeacher" class="tab3"></el-tab-pane>
                    </el-tabs>
                </div>

                <div class="formGroup">
                    <el-form-item label="账号">
                        <el-input type="text" auto-complete="off" placeholder="请输入您的账号" class="form-control"
                                  v-model="account"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" class="form-inline">
                        <el-input type="password" auto-complete="off" placeholder="请输入密码" class="form-control"
                                  v-model="password"></el-input>
                    </el-form-item>
                </div>
                <div class="remFor">
                    <el-checkbox v-model="checked" class="remember" @change="checkboxChange">记住密码</el-checkbox>
                    <a href="###" @click="alertMessage" class="forget">忘记密码？</a>
                </div>

                <div class="formButton">
                    <el-form-item style="width:100%;">
                        <el-button type="primary" style="width:100%;" @click="login">登录</el-button>
                    </el-form-item>
                </div>
                {{curTime}}
            </el-form>
        </div>
    </div>

</template>

<script>
    import date from './date.js';

    export default {
        name: 'loginPage',
        props: ['val'],
        loading: true,
        data () {
            return {
                curTime: new Date().toLocaleString(),
                account: '',
                password: '',
                activeName: 'students',
                loading: false,
                checked: true
            };

        },
        created () {
            this.defaultParam();
        },
        mounted () {
            this.setTime();
        },
        methods: {
            login () {
                this.loading = true;
                setTimeout(() => {
                    this.$router.push({path: '/helloworld'});
                }, 2000)
            },
            handleClick () {
                this.defaultParam();
            },
            defaultParam () {
                if ("students" === this.activeName) {
                    this.account = "students";
                    this.password = "123456";
                } else if ("teacher" === this.activeName) {
                    this.account = "teacher";
                    this.password = "123456";
                } else if ("eduTeacher" === this.activeName) {
                    this.account = "eduTeacher";
                    this.password = "123456";
                }
            },
            alertMessage () {
                this.$alert('这是一段内容', '标题名称', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$message({
                            type: 'info',
                            message: `action: ${ action }`
                        });
                    }
                });
            },
            checkboxChange(){
                console.log(this.checked);
            },
            setTime () {
                setInterval(() => {
                    this.curTime = date.formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss');
                }, 1000)
            }
        }
    }
</script>

<style>

    .login-container {
        -webkit-border-radius: 5px;
        border-radius: 15px;
        -moz-border-radius: 5px;
        background-clip: padding-box;
        width: 350px;
        padding: 35px 35px 15px 35px;
        background: rgba(255, 255, 255, 0.7);
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;

    }

    label {
        width: 70px;
        text-align: left;

    }

    .form-control {
        width: 270px;
        flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;

    }

    .remember {
        width: 250px;
        text-align: left;

    }

    .forget {
        width: 500px;
        text-align: right;
        font-size: 14px;
        font-family: PingFang SC;

    }

    .remFor {
        margin-bottom: 10px;
        padding-bottom: 10px;
    }

    .tabsUser {
        display: inline-block;
        margin-left: 0px;
        margin-right: 0px;
        text-align: center;
        font-size: 25px;
    }

    .note {
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-image: url(" ../assets/zhongda.jpg");
        background-size: 100% 100%;
    }

</style>
