webpackJsonp([91],{CmZH:function(n,t,e){(n.exports=e("FZ+f")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},V5Ye:function(n,t,e){var a=e("CmZH");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("rjj0")("aeed7bea",a,!0)},puV0:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("Xxa5"),i=e.n(a),o=e("exGp"),r=e.n(o),l=e("Dd8w"),s=e.n(l),c=e("NYxO"),p=e("0xDb"),u={name:"operationPush",computed:s()({},Object(c.b)({listData:"operationPushList"})),watch:{},data:function(){return{loading:!1,data:[],options:[{name:"十音书城",id:"1"},{name:"免费小说",id:"2"}],params:{page:1,adhibition:"1",per_page:20,title:""}}},created:function(){console.log(1),this.getData()},activated:function(){console.log(2),this.getData()},mounted:function(){},methods:{getData:function(){var n=this;return r()(i.a.mark(function t(){var e;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.loading=!0,e=s()({},n.params),t.next=4,n.$store.dispatch("getOperationPushList",e);case 4:200===t.sent.code&&(n.loading=!1);case 6:case"end":return t.stop()}},t,n)}))()},handleCurrentChange:function(n){this.page=n,this.getData()},handleSizeChange:function(n){this.params.per_page=n,this.page=1,this.getData()},fuzzyQueryFn:function(){this.params.page=1,this.getData()},deleteItem:function(n){var t=this;return r()(i.a.mark(function e(){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.id,e.next=3,t.$store.dispatch("deleteOperationPushList",{id:a});case 3:200==e.sent.code&&(Object(p.i)("删除成功"),t.getData());case 5:case"end":return e.stop()}},e,t)}))()}}},d={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"app-container"},[e("div",{staticClass:"bar flex"},[e("div",{staticClass:"flex-left"},[e("label",{staticClass:"radio-label",staticStyle:{"padding-left":"0"}},[n._v("推送对象")]),n._v(" "),e("el-select",{staticStyle:{width:"140px"},attrs:{placeholder:"请选择推送对象"},on:{change:n.fuzzyQueryFn},model:{value:n.params.adhibition,callback:function(t){n.$set(n.params,"adhibition",t)},expression:"params.adhibition"}},n._l(n.options,function(n){return e("el-option",{key:n.id,attrs:{label:n.name,value:n.id}})})),n._v(" "),e("label",{staticClass:"radio-label"},[n._v("消息")]),n._v(" "),e("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"输入标题",size:"mini","prefix-icon":"el-icon-search"},nativeOn:{keyup:function(t){if(!("button"in t)&&n._k(t.keyCode,"enter",13,t.key))return null;n.fuzzyQueryFn(t)}},model:{value:n.params.title,callback:function(t){n.$set(n.params,"title",t)},expression:"params.title"}})],1),n._v(" "),e("div",{staticClass:"flex-right"},[e("el-button",{staticClass:"search",attrs:{type:"primary",size:"mini"},on:{click:n.fuzzyQueryFn}},[n._v("搜索")]),n._v(" "),e("router-link",{attrs:{to:"/operationManage/push/add"}},[e("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"}},[n._v("新增")])],1)],1)]),n._v(" "),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticStyle:{width:"100%","text-align":"center"},attrs:{data:n.listData.data,border:"",stripe:""}},[e("el-table-column",{attrs:{prop:"id",label:"序号","min-width":"80",align:"center",fixed:""}}),n._v(" "),e("el-table-column",{attrs:{prop:"name",label:"消息名称","min-width":"150","show-overflow-tooltip":"",align:"center"}}),n._v(" "),e("el-table-column",{attrs:{prop:"title",label:"消息标题","min-width":"150","show-overflow-tooltip":"",align:"center"}}),n._v(" "),e("el-table-column",{attrs:{prop:"content",label:"消息内容","min-width":"120",align:"center"}}),n._v(" "),e("el-table-column",{attrs:{prop:"created_at",label:"创建时间","min-width":"120","show-overflow-tooltip":"",align:"center"}}),n._v(" "),e("el-table-column",{attrs:{prop:"push_at",label:"推送时间","min-width":"120","show-overflow-tooltip":"",align:"center"}}),n._v(" "),e("el-table-column",{attrs:{prop:"id",label:"推送状态","min-width":"120","show-overflow-tooltip":"",align:"center"},scopedSlots:n._u([{key:"default",fn:function(t){return[n._v(n._s(1==t.row.status?"已推送":"未推送"))]}}])}),n._v(" "),e("el-table-column",{attrs:{prop:"adhibition",label:"应用","min-width":"120",align:"center"},scopedSlots:n._u([{key:"default",fn:function(t){return[n._v(n._s(1==t.row.adhibition?"十音文学":"免费小说"))]}}])}),n._v(" "),e("el-table-column",{attrs:{fixed:"right",label:"操作",width:"150",align:"center"},scopedSlots:n._u([{key:"default",fn:function(t){return[t.row.status?e("div",[n._v("-")]):e("div",[e("router-link",{attrs:{to:"/operationManage/push/edit/"+t.row.id}},[e("el-button",{attrs:{size:"mini",type:"primary"}},[n._v("编辑")])],1),n._v(" "),e("el-popover",{attrs:{placement:"top",width:"100"},model:{value:t.row.show,callback:function(e){n.$set(t.row,"show",e)},expression:"scope.row.show"}},[e("p",[n._v("确认要删除？")]),n._v(" "),e("div",{staticStyle:{"text-align":"right",margin:"0"}},[e("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(n){t.row.show=!1}}},[n._v("取消")]),n._v(" "),e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){n.deleteItem(t.row)}}},[n._v("确定")])],1),n._v(" "),e("el-button",{attrs:{slot:"reference",size:"mini",type:"danger"},on:{click:function(n){t.row.show=!0}},slot:"reference"},[n._v("删除")])],1)],1)]}}])})],1),n._v(" "),e("div",{staticClass:"pagination-container clearfix"},[e("div",{staticClass:"float-left"},[e("global-pagination",{attrs:{"current-page":n.params.page,"page-size":n.params.per_page,layout:"total, sizes, prev, pager, next, jumper",total:n.listData.total},on:{"current-change":n.handleCurrentChange,"size-change":n.handleSizeChange}})],1)])],1)},staticRenderFns:[]};var h=e("VU/8")(u,d,!1,function(n){e("V5Ye")},null,null);t.default=h.exports}});