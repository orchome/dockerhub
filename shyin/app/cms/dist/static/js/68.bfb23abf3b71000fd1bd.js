webpackJsonp([68],{B7EV:function(t,e,a){var o=a("T5eQ");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("rjj0")("57dd06c6",o,!0)},T5eQ:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n.push-pool .el-button + a {\n  margin-left: 0;\n}\n.push-pool-dialog .el-dialog {\n  width: 600px;\n}\n.push-pool-dialog .form-title .el-form-item__label {\n  width: 79px;\n}\n.push-pool-dialog .form-title .el-input {\n  width: 240px;\n}\n.push-pool-dialog .el-form-item__error {\n  left: 79px;\n}\n",""])},tR5i:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("Xxa5"),i=a.n(o),r=a("exGp"),n=a.n(r),s=a("d7EF"),l=a.n(s),p=a("Dd8w"),c=a.n(p),u=a("NYxO"),d={computed:c()({},Object(u.b)({}),{dialogTitle:function(){return"add"==this.editState?"新增条目":"编辑条目"}}),watch:{},data:function(){return{editState:"add",activeName:"1",loading:!1,params:{page:1,pool_type:"novel"},dataList:{data:[],total:0},form:{title:"",time:[]},rules:{title:[{required:!0,message:"请输入标题",trigger:"blur"}],time:[{type:"array",required:!0,message:"请选择时间",trigger:"change"}]},dialogShow:!1,editID:""}},created:function(){this.getListDataFn()},methods:{submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;var a={use_start_time:"",use_end_time:"",title:e.form.title,pool_type:e.params.pool_type},o=l()(e.form.time,2);a.use_start_time=o[0],a.use_end_time=o[1],"add"==e.editState?e.submitDataFn(a):(a.id=e.editID,e.submitDataFn(a,"putSmartPushPool"))})},getListDataFn:function(){var t=n()(i.a.mark(function t(){var e,a,o;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.params,a=void 0===e?{}:e,this.loading=!0,t.next=4,this.triggerActionsFn("getSmartPushPool",a);case 4:200==(o=t.sent).code&&(this.dataList={data:o.data,total:o.meta.total}),this.loading=!1;case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),handleCurrentChange:function(t){this.params.page=t,this.getListDataFn()},fuzzyQueryFn:function(){this.params.page=1,this.getListDataFn()},resetForm:function(t){this.dialogShow=!1,this.form={title:"",time:[]},this.$refs[t].resetFields()},submitDataFn:function(){var t=n()(i.a.mark(function t(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"postSmartPushPool";return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.triggerActionsFn(a,e);case 2:200==t.sent.code&&("postSmartPushPool"==a?this.successMsgFn("添加成功！"):this.successMsgFn("修改成功！"),this.getListDataFn(),this.resetForm("form"));case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),deleteSmartPushPool:function(){var t=n()(i.a.mark(function t(e){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.triggerActionsFn("deleteSmartPushPool",{id:e});case 2:200==t.sent.code&&(this.successMsgFn("删除成功！"),this.getListDataFn());case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),editFn:function(){var t=n()(i.a.mark(function t(e){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.editState="edit",this.editID=e.id,this.form.title=e.title,this.form.time=[e.use_start_time,e.use_end_time],this.dialogShow=!0;case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container push-pool"},[a("el-tabs",{on:{"tab-click":t.fuzzyQueryFn},model:{value:t.params.pool_type,callback:function(e){t.$set(t.params,"pool_type",e)},expression:"params.pool_type"}},[a("el-tab-pane",{attrs:{label:"小说",name:"novel"}}),t._v(" "),a("el-tab-pane",{attrs:{label:"美图",name:"album"}})],1),t._v(" "),a("div",{staticClass:"bar flex"},[a("div",{staticClass:"flex-left"}),t._v(" "),a("div",{staticClass:"flex-right"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:function(e){t.dialogShow=!0,t.editState="add"}}},[t._v("新增")])],1)]),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%","text-align":"center"},attrs:{data:t.dataList.data,border:"",stripe:""}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"100",fixed:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"title",label:"标题","min-width":"100","show-overflow-tooltip":"",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"_book_name",label:"novel"==t.params.pool_type?"绑定书籍数":"绑定相册数","min-width":"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return["novel"==t.params.pool_type?a("div",[a("p",[t._v("男性："+t._s(e.row.book_boy_num))]),t._v(" "),a("p",[t._v("女性："+t._s(e.row.book_girl_num))])]):a("p",[t._v(t._s(e.row.album_num))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"created_at",label:"novel"==t.params.pool_type?"取书时间":"取图时间","min-width":"120","show-overflow-tooltip":"",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v(t._s(e.row.use_start_time))]),t._v(" "),a("p",[t._v(t._s(e.row.use_end_time))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"created_at",label:"创建时间","min-width":"120","show-overflow-tooltip":"",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作","min-width":"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){t.editFn(e.row)}}},[t._v("编辑")]),t._v(" "),"novel"==t.params.pool_type?a("router-link",{attrs:{to:"/CPSManage/push/pool/book/"+e.row.id}},[a("el-button",{attrs:{size:"mini",type:"success"}},[t._v("绑定书籍")])],1):t._e(),t._v(" "),"album"==t.params.pool_type?a("router-link",{attrs:{to:"/CPSManage/push/pool/album/"+e.row.id}},[a("el-button",{attrs:{size:"mini",type:"success"}},[t._v("绑定相册")])],1):t._e(),t._v(" "),a("el-popover",{attrs:{placement:"top",width:"100"},model:{value:e.row.delete,callback:function(a){t.$set(e.row,"delete",a)},expression:"scope.row.delete"}},[a("p",[t._v("确认删除选择的内容？")]),t._v(" "),a("div",{staticStyle:{"text-align":"right",margin:"0"}},[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){e.row.delete=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.deleteSmartPushPool(e.row.id),e.row.delete=!1}}},[t._v("确定")])],1),t._v(" "),a("el-button",{attrs:{slot:"reference",size:"mini",type:"danger"},on:{click:function(t){e.row.delete=!0}},slot:"reference"},[t._v("删除")])],1)]}}])})],1),t._v(" "),a("div",{staticClass:"pagination-container clearfix"},[a("div",{staticClass:"float-left"},[a("global-pagination",{attrs:{"current-page":t.params.page,"page-size":t.params.per_page,layout:"total, sizes, prev, pager, next, jumper",total:t.dataList.total},on:{"current-change":t.handleCurrentChange,"size-change":t.handleSizeChange}})],1)]),t._v(" "),a("el-dialog",{staticClass:"push-pool-dialog",attrs:{title:t.dialogTitle,visible:t.dialogShow,"close-on-press-escape":!1,"close-on-click-modal":!1},on:{"update:visible":function(e){t.dialogShow=e},closed:function(e){t.resetForm("form")}}},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules}},[a("el-form-item",{staticClass:"form-title",attrs:{label:"标题",prop:"title","label-width":"120px;"}},[a("el-input",{attrs:{placeholder:"请输入标题",autocomplete:"off"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"novel"==t.params.pool_type?"取书时间":"取图时间","label-width":"120px;",prop:"time"}},[a("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"起始时间","end-placeholder":"截止时间","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:t.form.time,callback:function(e){t.$set(t.form,"time",e)},expression:"form.time"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.resetForm("form")}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("form")}}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var f=a("VU/8")(d,m,!1,function(t){a("B7EV")},null,null);e.default=f.exports}});