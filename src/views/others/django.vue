<template>
    <div style="padding: 20px;">
        <div class="well">
            <el-form class="search-form">
                <div style="margin-bottom: 20px">
                    <el-input v-model="username" placeholder="请输入用户名">
                        <el-button slot="append" @click="get_user">查询</el-button>
                    </el-input>
                </div>
                <el-button type="primary" @click="FnAddUser('add')">新建用户</el-button>
                <el-button type="primary" @click="fn_multi_delete">批量删除</el-button>
            </el-form>
        </div>

        <el-table :data="tableData" tooltip-effect="dark" border @select="handleSelectionChange">
            <el-table-column type="selection" width="55" align="center" fixed></el-table-column>
            <el-table-column label="id" prop="id" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column label="用户名" prop="username" align="center"></el-table-column>
            <el-table-column label="密码" prop="password" align="center"></el-table-column>
            <el-table-column label="邮箱" prop="email" align="center"></el-table-column>
            <el-table-column label="创建时间" align="center" width="220px">
                <template slot-scope="scope">
                    <span>{{ scope.row.create_time | formatDate }}</span>
                </template>
            </el-table-column>
            <el-table-column label="更新时间" align="center" width="220px">
                <template slot-scope="scope">
                    <span>{{ scope.row.update_time | formatDate }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center" width="150px">
                <template slot-scope="scope">
                    <el-button type="text" @click="FnAddUser('update', scope.row)">编辑</el-button>
                    <el-button type="text" @click="fn_delete(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagelist" style="margin-top: 20px;  text-align: center;">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="pageInfo.pageIndex"
                    :page-size="pageInfo.pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="pageInfo.total">
            </el-pagination>
        </div>


        <el-dialog :title="user_dialog_title" :visible.sync="user_dialog_visible" :close-on-click-modal="false">
            <el-form :model="form" label-position="right" :rules="formRules" ref="form">
                <el-form-item label="用户" prop="username">
                    <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="form.password" placeholder="请输入密码"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="user_dialog_visible = false">取消</el-button>
                <el-button type="primary" v-if="user_dialog_type === 'add'" @click="add_user_submit">确定</el-button>
                <el-button type="primary" v-if="user_dialog_type === 'update'" @click="update_user_submit(currentUser.id)">确定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import httpServer from '../../service/user/user_list';
    import {Message, MessageBox} from 'element-ui';
    export default {
        name: "django",
        data() {
            return {
                tableData:[],
                pageInfo: {
                    total: 0, // 默认数据总数
                    pageSize: 10,  // 默认每页数据量
                    pageIndex: 1
                },
                username:'',
                multipleSelection:[],
                user_dialog_title:'',
                user_dialog_visible:false,
                user_dialog_type:'',
                form:{
                    username:'',
                    email:'',
                    password:''
                },
                currentUser:'',
                ids:[],
                formRules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                    email: [
                        { required:true, message:'请输入邮箱', trigger:'blur'},
                        { type:'email', message:'请输入正确的邮箱地址', trigger:'blur' }
                    ]
                }
            }
        },
        methods:{
            handleSizeChange (val) {
                if (this.pageInfo.pageSize !== val) {
                    this.pageInfo.pageSize = val;
                    this.pageInfo.pageIndex = 1;
                    this.get_user();
                }
            },
            handleCurrentChange (val) {
                if (this.pageInfo.pageIndex !== val) {
                    this.pageInfo.pageIndex = val;
                    this.get_user();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
                console.log(this.multipleSelection)
            },
            resetForm(formName) {
                this.$nextTick(() => {
                    this.$refs[formName].resetFields()
                });
            },
            get_user() {
                let reqData = {
                    username: this.username
                };
                let pageData = {
                    current: this.pageInfo.pageIndex,
                    size: this.pageInfo.pageSize
                };
                httpServer.get_user(reqData, pageData)
                    .then((response) => {
                        let Data = response.data;
                        if(Data && response.code === 'Success') {
                            this.tableData = Data;
                            this.pageInfo.total = response.total
                        }else {
                            this.$message.error(response.msg)
                        }
                    }).catch(err => {
                    console.log(err);
                })
            },
            FnAddUser(type, item) {
                this.user_dialog_visible = true;
                this.user_dialog_type = type;
                if(type === 'add'){
                    this.resetForm('form');
                    this.user_dialog_title = '新增用户';
                    this.form.username = '';
                    this.form.password = '';
                    this.form.email = '';
                }else {
                    this.currentUser = item;
                    this.user_dialog_title = '编辑用户';
                    this.form.username = item.username;
                    this.form.password = item.password;
                    this.form.email = item.email;
                }
            },
            add_user_submit() {
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        let reqData = {
                            username: this.form.username,
                            password: this.form.password,
                            email: this.form.email,
                        };
                        httpServer.add_user(reqData)
                            .then((response) => {
                                let Data = response.data;
                                if(Data && response.code === 'Success'){
                                    Message({message: response.msg, type: 'success'});
                                    this.user_dialog_visible = false;
                                    this.get_user();
                                }else {
                                    Message({message: response.msg, type: 'error'});
                                }
                            }).catch(err => {
                            console.log(err)
                        })
                    }else {
                        this.$message.error('请检查数据是否有效')
                    }
                });
            },
            update_user_submit(id) {
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        let reqData = {
                            username: this.form.username,
                            password: this.form.password,
                            email: this.form.email,
                        };
                        httpServer.update_user(reqData, id)
                            .then((response) => {
                                let Data = response.data;
                                if(Data && response.code === 'Success'){
                                    Message({message: response.msg, type: 'success'});
                                    this.user_dialog_visible = false;
                                    this.get_user();
                                }else {
                                    Message({message: response.msg, type: 'error'});
                                }
                            }).catch(err => {
                            console.log(err)
                        })
                    }else {
                        this.$message.error('请检查数据是否有效')
                    }
                });
            },
            fn_delete(id) {
                MessageBox.confirm('确认删除吗？', {
                    type: 'success',
                    closeOnClickModal: false
                }).then(() => {
                    httpServer.delete_user(id)
                        .then((response) => {
                            if (response.code === 'Success') {
                                Message({message: response.msg, type: 'success'});
                                this.get_user()
                            }else {
                                Message({message: response.msg, type: 'error'});
                            }
                        }).catch((err) => {
                        console.log(err);
                    })
                })
            },
            fn_multi_delete(id) {
                for(let item of this.multipleSelection){
                    this.ids.push(item.id)
                }
                let reqData = {ids: this.ids};
                MessageBox.confirm('确认批量删除吗？', {
                    type: 'success',
                    closeOnClickModal: false
                }).then(() => {
                    httpServer.multi_delete_user(reqData)
                        .then((response) => {
                            if (response.code === 'Success') {
                                Message({message: response.msg, type: 'success'});
                                this.get_user()
                            }else {
                                Message({message: response.msg, type: 'error'});
                            }
                        }).catch((err) => {
                        console.log(err);
                    })
                })
            },
        },
        mounted() {
            this.get_user();
            var list = []
            if(list) {
                console.log('==================')
            }
        },
        filters: {
            formatDate(value) {
                if(value) {
                    let newValue1 = value.replace('T', ' ');
                    let dot = newValue1.indexOf('.');
                    return newValue1.replace(value.substring(dot, value.length+1), '');
                }else {
                    return value
                }
            }
        },
        watch: {
            'form.username': {
                handler(newValue, oldValue) {
                    if(newValue === oldValue){
                        return
                    }else {
                        this.form.username = this.namelimit(newValue, 16, '用户名')
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
