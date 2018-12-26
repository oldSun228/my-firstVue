<template>
    <div>
        <div style="margin: auto;text-align: center">
            <h1>Welcome to websocket</h1>
        </div>
        <br/>
        <el-row>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <el-select v-model="value" placeholder="请选择">
                        <el-option v-for="item in options"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-light">
                    <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-light">
                    <el-button @click="send">发送消息</el-button>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-light">
                    <el-button @click="closeWebSocket">关闭连接</el-button>
                </div>
            </el-col>
        </el-row>
        <hr/>
        <ul id="example-1">
            <li v-for="item in message">
                {{ item}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'message',
        loading: true,
        data () {
            return {
                loading: false,
                webSocket: null,
                message: [],
                options: [],
                value: '',
                input: ''
            };
        },
        created () {
            this.webSocket = new WebSocket("ws://192.168.1.112:18080/study/websocket/" + this.$route.query.account);
        },
        mounted () {
            this.connection();
        },
        methods: {
            connection () {
                if ("WebSocket" in window) {
                    //连通之后的回调事件
                    this.webSocket.onopen = () => {
                        this.setMessageInnerHTML("已经连通了websocket");
                    },
                    //接收后台服务端的消息
                    this.webSocket.onmessage = (evt) => {
                        let received_msg = evt.data;
                        let obj = JSON.parse(received_msg);
                        //1代表上线 2代表下线 3代表在线名单 4代表普通消息
                        if (obj.messageType === 1) {
                            //把名称放入到selection当中供选择
                            let object = {};
                            object.label = obj.username;
                            object.value = obj.username;
                            this.options.push(object);
                            this.setMessageInnerHTML(obj.username + "上线了");
                        } else if (obj.messageType == 2) {
                            this.options = [];
                            let onlineName = obj.onlineUsers;
                            let offlineName = obj.username;
                            for (var i = 0; i < onlineName.length; i++) {
                                if (onlineName[i] !== this.$route.query.account) {
                                    let object = {};
                                    object.label = onlineName[i];
                                    object.value = onlineName[i];
                                    this.options.push(object);
                                }
                            }
                            this.setMessageInnerHTML(offlineName + "下线了");
                        } else if (obj.messageType == 3) {
                            let onlineName = obj.onlineUsers;
                            for (var i = 0; i < onlineName.length; i++) {
                                if (onlineName[i] !== this.$route.query.account) {
                                    let object = {};
                                    object.label = onlineName[i];
                                    object.value = onlineName[i];
                                    this.options.push(object);
                                }
                            }
                        } else {
                            this.setMessageInnerHTML(obj.fromusername + "对" + obj.tousername + "说：" + obj.textMessage);
                        }
                    },
                    //连接关闭的回调事件
                    this.webSocket.onclose = () => {
                        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
                        this.setMessageInnerHTML("连接已经关闭....");
                    }
                } else {
                    alert("您的浏览器不支持 WebSocket!");
                }
            },
            //将消息显示在网页上
            setMessageInnerHTML (innerHTML) {
                this.message.push(innerHTML);
            },
            //关闭连接
            closeWebSocket () {
                //直接关闭websocket的连接
                this.webSocket.close();
                this.setMessageInnerHTML("连接已经关闭....");
            },
            //发送消息
            send () {
                this.setMessageInnerHTML(this.$route.query.account + "对" + this.value + "说：" + this.input);
                var message = {
                    "message": this.input,
                    "username": this.$route.query.account,
                    "to": this.value
                };
                this.webSocket.send(JSON.stringify(message));
            }
        }
    }
</script>

<style scoped>

</style>