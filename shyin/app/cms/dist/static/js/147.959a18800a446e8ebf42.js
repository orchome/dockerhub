webpackJsonp([147],{"+mSE":function(n,t,e){(n.exports=e("FZ+f")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},QTvl:function(n,t,e){var a=e("+mSE");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("rjj0")("15c87ff4",a,!0)},S3cf:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("Xxa5"),s=e.n(a),i=e("exGp"),r=e.n(i),o=e("Dd8w"),l=e.n(o),p=e("NYxO"),c={name:"CPSPushTemplatesList",computed:l()({},Object(p.b)({cpsTempletList:"cpsTempletList"})),watch:{},data:function(){return{loading:!1,params:{page:1}}},created:function(){},mounted:function(){this.getCPSTempletListFn()},methods:{postCPSTempletUpdateFn:function(){var n=r()(s.a.mark(function n(t){var e;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e={id:t.id},"1"==t.status?e.status="2":e.status="1",n.next=4,this.$store.dispatch("postCPSTempletUpdate",e);case 4:200==n.sent.code&&(this.successMsgFn("修改成功"),this.getCPSTempletListFn());case 6:case"end":return n.stop()}},n,this)}));return function(t){return n.apply(this,arguments)}}(),getCPSTempletListFn:function(){var n=r()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return this.loading=!0,n.next=3,this.$store.dispatch("getCPSTempletList",this.params);case 3:this.loading=!1;case 4:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}(),handleCurrentChange:function(n){this.params.page=n,this.getCPSTempletListFn()}}},u={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"app-container"},[e("div",{staticClass:"bar clearfix"},[e("div",{staticClass:"float-right"},[e("router-link",{attrs:{to:"/CPSManage/template/add"}},[e("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"}},[n._v("新增")])],1)],1)]),n._v(" "),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:n.cpsTempletList.data,border:"",stripe:""}},[e("el-table-column",{attrs:{prop:"id",label:"序号","min-width":"80",fixed:""}}),n._v(" "),e("el-table-column",{attrs:{prop:"templet_no",label:"模板样式","min-width":"150","show-overflow-tooltip":""},scopedSlots:n._u([{key:"default",fn:function(t){return[n._v("\n                "+n._s(1==t.row.templet_no?"模板1":2==t.row.templet_no?"模板2":"-")+"\n            ")]}}])}),n._v(" "),e("el-table-column",{attrs:{prop:"name",label:"模板标题","min-width":"150","show-overflow-tooltip":""}}),n._v(" "),e("el-table-column",{attrs:{prop:"created_at",label:"创建时间","min-width":"120"}}),n._v(" "),e("el-table-column",{attrs:{fixed:"right",label:"操作",width:"230"},scopedSlots:n._u([{key:"default",fn:function(t){return[e("router-link",{attrs:{to:"/CPSManage/template/edit/"+t.row.id}},[e("el-button",{attrs:{size:"mini",type:"primary"}},[n._v("编辑")])],1),n._v(" "),e("router-link",{attrs:{to:"/CPSManage/template/free/"+t.row.id}},[e("el-button",{attrs:{size:"mini",type:"success"}},[n._v("限时列表")])],1),n._v(" "),e("el-button",{attrs:{size:"mini",type:1==t.row.status?"danger":"info"},on:{click:function(e){n.postCPSTempletUpdateFn(t.row)}}},[n._v(n._s(t.row._status))])]}}])})],1),n._v(" "),e("div",{staticClass:"pagination-container clearfix"},[e("div",{staticClass:"float-left"},[e("global-pagination",{attrs:{"current-page":n.params.page,"page-size":n.params.per_page,layout:"total, sizes, prev, pager, next, jumper",total:n.cpsTempletList.total},on:{"current-change":n.handleCurrentChange,"size-change":n.handleSizeChange}})],1)])],1)},staticRenderFns:[]};var d=e("VU/8")(c,u,!1,function(n){e("QTvl")},null,null);t.default=d.exports}});