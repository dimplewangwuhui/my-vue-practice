<template>
    <div style="padding: 20px;">
        <el-table :data="tableData" align="center" @cell-dblclick="fn_dbclick_row">
            <el-table-column label="级数" prop="level" align="center">
                <template slot-scope="scope">
                    <div v-if="!scope.row.editing">
                        <span v-text="scope.row.level"></span>
                    </div>
                    <div v-else>
                        <el-select v-model="scope.row.level" placeholder="请选择级数" @change="showId(scope.$index, scope.row)">
                            <el-option v-for="(item, i) in levelData" :key="i" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="序号" prop="id" align="center"></el-table-column>
            <el-table-column label="源名称" prop="fromName" align="center">
                <template slot-scope="scope">
                    <div v-if="!scope.row.editing">
                        <span v-text="scope.row.fromName"></span>
                    </div>
                    <div v-else>
                        <el-input v-model="scope.row.fromName" placeholder="请填写源名称"></el-input>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="目标名称" prop="toName" align="center">
                <template slot-scope="scope">
                    <div v-if="!scope.row.editing">
                        <span v-text="scope.row.toName"></span>
                    </div>
                    <div v-else>
                        <el-input v-model="scope.row.toName" placeholder="请填写目标名称"></el-input>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="类型" prop="type" align="center">
                <template slot-scope="scope">
                    <div v-if="!scope.row.editing">
                        <span v-text="scope.row.type"></span>
                    </div>
                    <div v-else>
                        <el-select v-model="scope.row.type" placeholder="请选择类型">
                            <el-option v-for="(item, i) in typeData" :key="i" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-button type="text" v-if="!scope.row.editing" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button type="text" v-if="scope.row.editing"  @click="handleSave(scope.$index, scope.row)">确定</el-button>
                    <el-button type="text" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-button type="primary" @click="addParam" style="margin-top: 15px">添加参数</el-button>
        <el-button type="primary" @click="submit" style="margin-top: 15px">提交</el-button>
    </div>
</template>

<script>
    export default {
        name: "tableEdit2",
        data() {
            return {
                tableData:[
                    {
                        level:'1',
                        id:'1',
                        fromName:'a',
                        toName:'a',
                        type:'string',
                        editing: false
                    }
                ],
                levelData:[
                    {label:1,value:1},
                    {label:2,value:2},
                    {label:3,value:3},
                    {label:4,value:4},
                    {label:5,value:5},
                    {label:6,value:6},
                ],
                typeData:[
                    {label:'string', value:'string'},
                    {label:'integer', value:'integer'},
                    {label:'list', value:'list'},
                ],
            }
        },
        methods: {
            // 双击行进入编辑状态
            fn_dbclick_row(row) {
                row.editing = true;
            },
            // 获取表格数据
            getData() {

            },
            // 添加参数
            addParam() {
                let editingList = [];
                for(let i=0; i<this.tableData.length; i++){
                    if (this.tableData[i].editing === true) {
                        editingList.push(this.tableData[i]);
                    }
                }
                if(editingList.length > 0) this.$message({type: 'warning', message: '数据中有未保存项，请先保存!'});
                else {
                    this.tableData.push({
                        level: '',
                        id: '',
                        fromName: '',
                        toName:'',
                        type:'',
                        editing: true
                    })
                }
            },
            // 编辑
            handleEdit ($index, row) {
                let editingList = [];
                for(let i=0; i<this.tableData.length; i++){
                    if (this.tableData[i].editing === true) {
                        editingList.push(this.tableData[i]);
                    }
                }
                if(editingList.length > 0) this.$message({type: 'warning', message: '数据中有未保存项，请先保存!'});
                else {
                    this.$set(this.tableData[$index], 'editing', true)
                }
            },
            // 保存
            handleSave ($index, row) {
                if(row.level==='' || row.id==='' || row.fromName==='' || row.toName==='' || row.type===''){
                    this.$message({type: 'warning', message: '数据项不能为空!'});
                }else {
                    this.$set(this.tableData[$index], 'editing', false);
                }
            },
            // 删除
            handleDelete($index, row) {
                this.$confirm('是否删除该条数据及其子节点数据?', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let del_count = 0;
                    for(let i=$index+1; i<this.tableData.length; i++){
                        if(this.tableData[i].level > row.level) {
                            del_count++
                        }
                        else break
                    }
                    this.tableData.splice($index, del_count+1);
                    for(let i=0; i<this.tableData.length; i++){
                        this.showId(i, this.tableData[i])
                    }
                }).catch((err) => {
                    console.log(err);
                })
            },
            // 选择级数，显示序号
            showId($index, row) {
                if(!this.tableData[$index-1]){
                    if(row.level != 1) {
                        row.level = '';
                        row.id = '';
                        row.fromName = '';
                        row.toName = '';
                        row.type = '';
                        this.$message({type: 'warning', message: '目录级数错误，请重新选择!'})
                    }else this.tableData[$index].id = '1'

                }else {
                    if(row.level == 1){
                        let count1 = 0;
                        for(let i = 0; i <= $index; i++){
                            if(this.tableData[i].level == 1) count1++
                        }
                        row.id = count1
                    }else {
                        if(row.level == this.tableData[$index-1].level){
                            let pre_id = this.tableData[$index-1].id;
                            let pre_id_list = pre_id.split('.');
                            pre_id_list[pre_id_list.length-1] = Number(pre_id_list[pre_id_list.length-1])+1;
                            row.id = pre_id_list.join('.');
                        }else if(row.level > this.tableData[$index-1].level) {
                            if(row.level - this.tableData[$index-1].level > 1){
                                row.level = '';
                                row.id = '';
                                row.fromName = '';
                                row.toName = '';
                                row.type = '';
                                this.$message({type: 'warning', message:'目录级数错误，请重新选择!'})
                            }else {
                                row.id = this.tableData[$index-1].id + '.1'
                            }
                        }else {
                            for(let i = $index-1; i >= 0; i--){
                                if(this.tableData[i].level == row.level) {
                                    let pre_id = this.tableData[i].id;
                                    let pre_id_list = pre_id.split('.');
                                    pre_id_list[pre_id_list.length-1] = Number(pre_id_list[pre_id_list.length-1])+1;
                                    row.id = pre_id_list.join('.');
                                    break
                                }
                            }
                        }
                    }
                }
            },
            // 提交
            submit() {
                for(let i=0; i<this.tableData.length; i++){
                    if(this.tableData[i].editing === true){
                        this.$message({type: 'warning', message: '数据中有未保存项，请先保存!'});
                        // this.tableData.splice(i,1)
                    }
                }
                console.log(this.tableData)
            },
        },
        mounted() {
            this.getData();
        }
    }
</script>

<style scoped>

</style>
