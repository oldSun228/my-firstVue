<template>
    <div class="add">
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="地区" prop="region">
                    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="描述" prop="desc">
                    <el-input v-model="ruleForm.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                    <el-button @click="dialogFormVisible = false">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                dialogFormVisible: false,
                formLabelWidth: '120px',
                id: 2,
                ruleForm: {
                    id: null,
                    name: '',
                    region: '',
                    desc: ''
                },
                rules: {
                    name: [
                        {required: true, message: '请输入活动名称', trigger: 'blur'},
                        {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                    ],
                    region: [
                        {required: true, message: '请选择活动区域', trigger: 'change'}
                    ],
                    desc: [
                        {required: true, message: '请填写活动形式', trigger: 'blur'}
                    ]
                },
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.ruleForm.id = this.id++
                        let form = this.ruleForm
                        console.log(JSON.parse(JSON.stringify(form)))
                        this.$emit("receive", JSON.parse(JSON.stringify(form)))
                        this.reset()
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            reset() {
                this.dialogFormVisible = false
                this.$refs['ruleForm'].resetFields()

            },

            toggle() {
                this.dialogFormVisible = !this.dialogFormVisible

            }
        }
    }
</script>
<style scoped>
    .add {
        position: absolute;
        width: 50%;
        height: 600px;
    }
</style>
