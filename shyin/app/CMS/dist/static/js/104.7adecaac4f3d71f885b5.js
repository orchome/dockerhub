webpackJsonp([104],{"63xr":function(n,e,t){var i=t("MibS");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t("rjj0")("6639183a",i,!0)},JaVO:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t("Xxa5"),a=t.n(i),l=t("exGp"),o=t.n(l),r=t("Dd8w"),s=t.n(r),c=t("NYxO"),p={computed:s()({},Object(c.b)({operationSecondTemplateList:"operationSecondTemplateList"}),{multipleDeleteVisible:function(){return 0==this.multipleSelect.length&&(this.multipleDelete=!1),0===this.multipleSelect.length}}),watch:{},data:function(){return{data:[{id:1}],loading:!1,params:{page:1,second_id:this.$route.params.id},size:20,multipleSelect:[],multipleDelete:!1}},created:function(){this.getSecondTemplateListFn(this.params)},methods:{sortChangeFn:function(n){var e="descending"==n.order?"desc":"asc";this.params.sort=e,this.getSecondTemplateListFn(this.params)},changeActiveFn:function(){var n=o()(a.a.mark(function n(e,t){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.$store.dispatch("putTemplateActive",{id:e,is_active:t});case 2:200==n.sent.code?this.$message({duration:1500,message:"修改成功",type:"success"}):this.getSecondTemplateListFn(this.params);case 4:case"end":return n.stop()}},n,this)}));return function(e,t){return n.apply(this,arguments)}}(),deleteSecondTemplateDelFn:function(){var n=o()(a.a.mark(function n(e){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.$store.dispatch("deleteSecondTemplateDel",{id:e});case 2:200==n.sent.code&&(this.$message({duration:1500,message:"删除成功",type:"success"}),this.getSecondTemplateListFn(this.params));case 4:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}(),handleChange:function(n){var e={client:"",page:1,to_page:""};"0"!=n[0]&&(e.client=n[0],1==n.length?e.to_page="":e.to_page=n[1]),this.getSecondTemplateListFn(e)},getSecondTemplateListFn:function(){var n=o()(a.a.mark(function n(e){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return this.loading=!0,n.next=3,this.$store.dispatch("getSecondTemplateList",e);case 3:this.loading=!1;case 4:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}(),handleSelectionChange:function(n){var e=[];n.forEach(function(n){e.push(n.id)}),this.multipleSelect=e},multipleDeleteFn:function(){var n=this.multipleSelect.toString();this.deleteSecondTemplateDelFn(n)},handleCurrentChange:function(n){this.params.page=n,this.getSecondTemplateListFn(this.params)},fuzzyQueryFn:function(){this.params.page=1,this.getSecondTemplateListFn(this.params)}}},u={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"app-container"},[t("div",{staticClass:"bar clearfix"},[t("div",{staticClass:"float-right"},[t("router-link",{attrs:{to:"/operationManage/second/"+n.params.second_id+"/template/add"}},[t("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"}},[n._v("新增")])],1)],1)]),n._v(" "),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticStyle:{width:"100%","text-align":"center"},attrs:{data:n.operationSecondTemplateList.data,border:"",stripe:"",multipleTable:""},on:{"sort-change":n.sortChangeFn,"selection-change":n.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"55"}}),n._v(" "),t("el-table-column",{attrs:{prop:"id",label:"序号","min-width":"80",fixed:""}}),n._v(" "),t("el-table-column",{attrs:{prop:"name",label:"模板名称",width:"150","show-overflow-tooltip":"",align:"center"}}),n._v(" "),t("el-table-column",{attrs:{prop:"_page",label:"模板类型","min-width":"120","show-overflow-tooltip":"",align:"center"},scopedSlots:n._u([{key:"default",fn:function(e){return[1==e.row.type?t("el-tag",[n._v("基础模板")]):t("el-tag",{attrs:{type:"success"}},[n._v("功能模板")])]}}])}),n._v(" "),t("el-table-column",{attrs:{prop:"sort",label:"排序","min-width":"120","show-overflow-tooltip":"",align:"center",sortable:"custom"}}),n._v(" "),t("el-table-column",{attrs:{prop:"is_active",label:"是否启用","min-width":"120","show-overflow-tooltip":"",align:"center"},scopedSlots:n._u([{key:"default",fn:function(e){return[t("el-switch",{attrs:{"active-value":1,"inactive-value":2,"active-color":"#409EFF","inactive-color":"#ff4949"},on:{change:function(t){n.changeActiveFn(e.row.id,t)}},model:{value:e.row.is_active,callback:function(t){n.$set(e.row,"is_active",t)},expression:"scope.row.is_active"}})]}}])}),n._v(" "),t("el-table-column",{attrs:{prop:"is_free",label:"是否免费","min-width":"120","show-overflow-tooltip":"",align:"center"},scopedSlots:n._u([{key:"default",fn:function(e){return[n._v(n._s(1==e.row.is_free?"是":"否"))]}}])}),n._v(" "),t("el-table-column",{attrs:{prop:"created_at",label:"创建时间","min-width":"120","show-overflow-tooltip":"",align:"center"}}),n._v(" "),t("el-table-column",{attrs:{fixed:"right",label:"操作",width:"240",align:"center"},scopedSlots:n._u([{key:"default",fn:function(e){return[t("router-link",{attrs:{to:"/operationManage/second/"+n.params.second_id+"/template/edit/"+e.row.id}},[t("el-button",{attrs:{size:"mini",type:"primary"}},[n._v("编辑")])],1),n._v(" "),t("el-popover",{attrs:{placement:"top",width:"100"},model:{value:e.row.delete,callback:function(t){n.$set(e.row,"delete",t)},expression:"scope.row.delete"}},[t("p",[n._v("确认删除选择的模板？")]),n._v(" "),t("div",{staticStyle:{"text-align":"right",margin:"0"}},[t("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(n){e.row.delete=!1}}},[n._v("取消")]),n._v(" "),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){n.deleteSecondTemplateDelFn(e.row.id),e.row.delete=!1}}},[n._v("确定")])],1),n._v(" "),t("el-button",{attrs:{slot:"reference",size:"mini",type:"danger"},on:{click:function(n){e.row.delete=!0}},slot:"reference"},[n._v("删除")])],1),n._v(" "),2==e.row.type?t("router-link",{attrs:{to:"/operationManage/second/"+n.params.second_id+"/binding/"+e.row.id}},[t("el-button",{attrs:{size:"mini",type:"warning"}},[n._v("绑定书籍")])],1):n._e()]}}])})],1),n._v(" "),t("div",{staticClass:"pagination-container clearfix"},[t("div",{staticClass:"float-left mr-30"},[t("el-popover",{attrs:{placement:"top",width:"100"},model:{value:n.multipleDelete,callback:function(e){n.multipleDelete=e},expression:"multipleDelete"}},[t("p",[n._v("确认删除选择的模板？")]),n._v(" "),t("div",{staticStyle:{"text-align":"right",margin:"0"}},[t("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){n.multipleDelete=!1}}},[n._v("取消")]),n._v(" "),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){n.multipleDeleteFn(),n.multipleDelete=!1}}},[n._v("确定")])],1),n._v(" "),t("el-button",{attrs:{slot:"reference",size:"mini",type:"danger",disabled:n.multipleDeleteVisible},on:{click:function(e){n.multipleDelete=!0}},slot:"reference"},[n._v("删除")])],1)],1),n._v(" "),t("div",{staticClass:"float-left"},[t("global-pagination",{attrs:{"current-page":n.params.page,"page-size":n.params.per_page,layout:"total, sizes, prev, pager, next, jumper",total:n.operationSecondTemplateList.total},on:{"current-change":n.handleCurrentChange,"size-change":n.handleSizeChange}})],1)])],1)},staticRenderFns:[]};var d=t("VU/8")(p,u,!1,function(n){t("63xr")},null,null);e.default=d.exports},MibS:function(n,e,t){(n.exports=t("FZ+f")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])}});