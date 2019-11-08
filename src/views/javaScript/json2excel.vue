<template>
    <div>
        <!--<input type="button" id="wwo" value="导出" />-->
        <el-button @click="export2json">导出</el-button>
    </div>
</template>

<script>
    import '../../assets/js/jquery.min.js'
    export default {
        name: "json2excel",
        data() {
            return {

            }
        },
        methods: {
            export2json(){
                var data = {
                    "title":[{"value":"集团", "type":"ROW_HEADER_HEADER", "datatype":"string"}, {"value":"日期", "type":"ROW_HEADER_HEADER", "datatype":"string"}],
                    "data":[[{"value":"好好", "type":"ROW_HEADER"}, {"value":"2015-08-24", "type":"ROW_HEADER"}],
                        [{"value":"坏坏", "type":"ROW_HEADER"}, {"value":"2015-08-25", "type":"ROW_HEADER"}]]
                };
                if(data == '')
                    return;
                this.JSONToExcelConvertor(data.data, "Report", data.title);
            },

            JSONToExcelConvertor(JSONData, FileName, ShowLabel) {
            //先转化json
            var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

            var excel = '<table>';

            //设置表头
            var row = "<tr>";
            for (var i = 0, l = ShowLabel.length; i < l; i++) {
                row += "<td>" + ShowLabel[i].value + '</td>';
            }


            //换行
            excel += row + "</tr>";

            //设置数据
            for (var i = 0; i < arrData.length; i++) {
                var row = "<tr>";

                for (var index in arrData[i]) {
                    var value = arrData[i][index].value === "." ? "" : arrData[i][index].value;
                    row += '<td>' + value + '</td>';
                }

                excel += row + "</tr>";
            }

            excel += "</table>";

            var excelFile = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:excel' xmlns='http://www.w3.org/TR/REC-html40'>";
            excelFile += '<meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">';
            excelFile += '<meta http-equiv="content-type" content="application/vnd.ms-excel';
            excelFile += '; charset=UTF-8">';
            excelFile += "<head>";
            excelFile += "<!--[if gte mso 9]>";
            excelFile += "<xml>";
            excelFile += "<x:ExcelWorkbook>";
            excelFile += "<x:ExcelWorksheets>";
            excelFile += "<x:ExcelWorksheet>";
            excelFile += "<x:Name>";
            excelFile += "{worksheet}";
            excelFile += "</x:Name>";
            excelFile += "<x:WorksheetOptions>";
            excelFile += "<x:DisplayGridlines/>";
            excelFile += "</x:WorksheetOptions>";
            excelFile += "</x:ExcelWorksheet>";
            excelFile += "</x:ExcelWorksheets>";
            excelFile += "</x:ExcelWorkbook>";
            excelFile += "</xml>";
            excelFile += "<![endif]-->";
            excelFile += "</head>";
            excelFile += "<body>";
            excelFile += excel;
            excelFile += "</body>";
            excelFile += "</html>";


            var uri = 'data:application/vnd.ms-excel;charset=utf-8,' + encodeURIComponent(excelFile);

            // 创建a标签
            var link = document.createElement("a");
            // 置顶url
            link.href = uri;
            // 设置为隐藏
            link.style = "visibility:hidden";
            // 置顶文件名和后缀
            link.download = FileName + ".xlsx";
            // 追加a标签
            document.body.appendChild(link);
            // 触发点击事件
            link.click();
            // 移除a标签
            document.body.removeChild(link);
        }
        },
        mounted() {
        }
    }
</script>



<style scoped>

</style>
