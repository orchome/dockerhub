webpackJsonp([88],{KgJI:function(n,e,t){(n.exports=t("FZ+f")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},bB0t:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t("Xxa5"),a=t.n(i),r=t("exGp"),s=t.n(r),l=t("Dd8w"),o=t.n(l),c=t("NYxO"),u={name:"operationSearch",computed:o()({},Object(c.b)({operationSearchList:"operationSearchList"}),{multipleDeleteVisible:function(){return 0==this.multipleSelect.length&&(this.multipleDelete=!1),0===this.multipleSelect.length},dialogTitle:function(){return"add"==this.dialogType?"新增关键词":"编辑关键词"}}),watch:{},data:function(){return{rules:{name:[{required:!0,message:"请输入关键词",trigger:"change"}]},names:[],form:{id:"",name:[]},dialogType:"add",dialogFormVisible:!1,loading:!1,params:{page:1,name:""},size:20,multipleSelect:[],multipleDelete:!1}},created:function(){this.getSearchListFn()},methods:{editFn:function(n){this.dialogType="edit",this.form={id:n.id,name:n.name},this.dialogFormVisible=!0},addFn:function(){this.dialogType="add",this.form={id:"",name:[]},this.dialogFormVisible=!0},resetForm:function(n){this.$refs[n].resetFields()},submitForm:function(n){var e=this,t=this;t.$refs[n].validate(function(n){if(!n)return console.log("error submit!!"),!1;if("add"==t.dialogType){var i=e.form.name.toString();t.putSearchCreateFn(i)}else t.putSearchUpdateFn(t.form)})},putSearchCreateFn:function(){var n=s()(a.a.mark(function n(e){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.$store.dispatch("putSearchCreate",{name:e});case 2:200==n.sent.code&&(this.$message({duration:1500,message:"添加成功！",type:"success"}),this.dialogFormVisible=!1,this.getSearchListFn());case 4:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}(),putSearchUpdateFn:function(){var n=s()(a.a.mark(function n(e){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.$store.dispatch("putSearchUpdate",e);case 2:200==n.sent.code&&(this.$message({duration:1500,message:"修改成功！",type:"success"}),this.dialogFormVisible=!1,this.getSearchListFn());case 4:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}(),putSearchSortFn:function(){var n=s()(a.a.mark(function n(e){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.sort.isNumber()){n.next=7;break}return n.next=3,this.$store.dispatch("putSearchSort",{id:e.id,sort:e.sort});case 3:200==n.sent.code?this.$message({duration:1500,message:"修改成功！",type:"success"}):this.getSearchListFn(),n.next=9;break;case 7:this.$message({duration:1500,message:"请输入正确的排序",type:"warning"}),this.getSearchListFn();case 9:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}(),deleteSearchDelFn:function(){var n=s()(a.a.mark(function n(e){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.$store.dispatch("deleteSearchDel",{id:e});case 2:200==n.sent.code&&(this.$message({duration:1500,message:"删除成功！",type:"success"}),this.getSearchListFn());case 4:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}(),getSearchListFn:function(){var n=s()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return this.loading=!0,n.next=3,this.$store.dispatch("getSearchList",this.params);case 3:this.loading=!1;case 4:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}(),handleSelectionChange:function(n){var e=[];n.forEach(function(n){e.push(n.id)}),this.multipleSelect=e},multipleDeleteFn:function(){var n=this.multipleSelect.toString();this.deleteSearchDelFn(n)},handleCurrentChange:function(n){this.params.page=n,this.getSearchListFn()},fuzzyQueryFn:function(){this.params.page=1,this.getSearchListFn()}}},p={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"app-container"},[t("div",{staticClass:"bar clearfix"},[t("div",{staticClass:"float-right"},[t("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"输入关键词名称",size:"mini","prefix-icon":"el-icon-search"},nativeOn:{keyup:function(e){if(!("button"in e)&&n._k(e.keyCode,"enter",13,e.key))return null;n.fuzzyQueryFn(e)}},model:{value:n.params.name,callback:function(e){n.$set(n.params,"name",e)},expression:"params.name"}}),n._v(" "),t("el-button",{staticClass:"search",attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:n.fuzzyQueryFn}},[n._v("搜索")]),n._v(" "),t("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:n.addFn}},[n._v("新增")]),n._v(" "),t("router-link",{attrs:{to:"/operationManage/search/hot"}},[t("el-button",{attrs:{type:"primary",icon:"el-icon-view",size:"mini"}},[n._v("查看搜索热度")])],1)],1)]),n._v(" "),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticStyle:{width:"100%","text-align":"center"},attrs:{data:n.operationSearchList.data,border:"",stripe:"",multipleTable:""},on:{"selection-change":n.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"55"}}),n._v(" "),t("el-table-column",{attrs:{prop:"id",label:"ID","min-width":"150","show-overflow-tooltip":"",align:"center"}}),n._v(" "),t("el-table-column",{attrs:{prop:"name",label:"关键词名称","min-width":"120","show-overflow-tooltip":"",align:"center"}}),n._v(" "),t("el-table-column",{attrs:{prop:"sort",label:"排序","min-width":"120","show-overflow-tooltip":"",align:"center"},scopedSlots:n._u([{key:"default",fn:function(e){return[t("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:"输入序号",type:"tel"},on:{change:function(t){n.putSearchSortFn(e.row)}},model:{value:e.row.sort,callback:function(t){n.$set(e.row,"sort",t)},expression:"scope.row.sort"}})]}}])}),n._v(" "),t("el-table-column",{attrs:{prop:"created_at",label:"创建时间","min-width":"120","show-overflow-tooltip":"",align:"center"}}),n._v(" "),t("el-table-column",{attrs:{fixed:"right",label:"操作",width:"150",align:"center"},scopedSlots:n._u([{key:"default",fn:function(e){return[t("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){n.editFn(e.row)}}},[n._v("编辑")]),n._v(" "),t("el-popover",{attrs:{placement:"top",width:"100"},model:{value:e.row.delete,callback:function(t){n.$set(e.row,"delete",t)},expression:"scope.row.delete"}},[t("p",[n._v("确认删除选择的关键词？")]),n._v(" "),t("div",{staticStyle:{"text-align":"right",margin:"0"}},[t("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(n){e.row.delete=!1}}},[n._v("取消")]),n._v(" "),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){n.deleteSearchDelFn(e.row.id),e.row.delete=!1}}},[n._v("确定")])],1),n._v(" "),t("el-button",{attrs:{slot:"reference",size:"mini",type:"danger"},on:{click:function(n){e.row.delete=!0}},slot:"reference"},[n._v("删除")])],1)]}}])})],1),n._v(" "),t("div",{staticClass:"pagination-container clearfix"},[t("div",{staticClass:"float-left mr-30"},[t("el-popover",{attrs:{placement:"top",width:"100"},model:{value:n.multipleDelete,callback:function(e){n.multipleDelete=e},expression:"multipleDelete"}},[t("p",[n._v("确认删除选择的关键词？")]),n._v(" "),t("div",{staticStyle:{"text-align":"right",margin:"0"}},[t("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){n.multipleDelete=!1}}},[n._v("取消")]),n._v(" "),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){n.multipleDeleteFn(),n.multipleDelete=!1}}},[n._v("确定")])],1),n._v(" "),t("el-button",{attrs:{slot:"reference",size:"mini",type:"danger",disabled:n.multipleDeleteVisible},on:{click:function(e){n.multipleDelete=!0}},slot:"reference"},[n._v("删除")])],1)],1),n._v(" "),t("div",{staticClass:"float-left"},[t("global-pagination",{attrs:{"current-page":n.params.page,"page-size":n.params.per_page,layout:"total, sizes, prev, pager, next, jumper",total:n.operationSearchList.total},on:{"current-change":n.handleCurrentChange,"size-change":n.handleSizeChange}})],1)]),n._v(" "),t("el-dialog",{attrs:{title:n.dialogTitle,visible:n.dialogFormVisible,width:"450px","close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(e){n.dialogFormVisible=e},closed:function(e){n.resetForm("ruleForm")}}},[t("el-form",{ref:"ruleForm",attrs:{model:n.form,"label-width":"120px",rules:n.rules}},[t("el-form-item",{attrs:{label:"关键词名称",prop:"name"}},["add"==n.dialogType?t("el-select",{attrs:{multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"请输入一个或者多个关键词"},model:{value:n.form.name,callback:function(e){n.$set(n.form,"name",e)},expression:"form.name"}},n._l(n.names,function(n){return t("el-option",{key:n.value,attrs:{label:n.label,value:n.value}})})):t("el-input",{attrs:{placeholder:"请输入关键词"},model:{value:n.form.name,callback:function(e){n.$set(n.form,"name",e)},expression:"form.name"}})],1)],1),n._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary"},on:{click:function(e){n.submitForm("ruleForm")}}},[n._v("提交")])],1)],1)],1)},staticRenderFns:[]};var d=t("VU/8")(u,p,!1,function(n){t("vZHP")},null,null);e.default=d.exports},vZHP:function(n,e,t){var i=t("KgJI");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t("rjj0")("ea8b552c",i,!0)}});