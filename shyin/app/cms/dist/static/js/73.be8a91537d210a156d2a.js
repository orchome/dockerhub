webpackJsonp([73],{EOvp:function(n,t,e){var a=e("Q3ZA");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("rjj0")("2a11b208",a,!0)},Q3ZA:function(n,t,e){(n.exports=e("FZ+f")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},cVUP:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("Xxa5"),l=e.n(a),s=e("exGp"),i=e.n(s),r=e("woOf"),o=e.n(r),u=e("Dd8w"),c=e.n(u),p=e("NYxO"),d={name:"authorManageRewards",components:{SearchCondition:e("/y5F").a},computed:c()({},Object(p.b)({authorAwardList:"authorAwardList"}),{multiplePassVisible:function(){return 0==this.multipleSelect.length&&(this.multipleDelete=!1),0===this.multipleSelect.length}}),watch:{},data:function(){return{value:"0",signs:[{value:"all",label:"全部"},{value:"0",label:"无签约"},{value:"1",label:"全勤签约"},{value:"2",label:"保底签约"},{value:"3",label:"买断签约"}],states:[{value:"all",label:"全部"},{value:"0",label:"待审核"},{value:"1",label:"通过"},{value:"2",label:"驳回"},{value:"3",label:"已结算"}],type:[{value:"all",label:"全部"},{value:"1",label:"全勤奖励金"},{value:"2",label:"完本续签奖励金"}],batchVisible:!1,data:[{id:1}],loading:!1,params:{page:1,status:"0",type:"all",sign:"all"},total:0,size:20,multipleSelect:[],multiplePass:!1,page:1}},created:function(){this.getAuthorAwardListFn()},methods:{handleSelectionChange:function(n){var t=[];n.forEach(function(n){t.push(n.id)}),this.multipleSelect=t},multiplePassFn:function(){var n=this.multipleSelect.toString();this.postAuthorEditAwardFn(1,n)},handleCurrentChange:function(n){this.params.page=n,this.getAuthorAwardListFn()},getSearchFn:function(n){this.params=o()(this.params,n),this.fuzzyQueryFn()},fuzzyQueryFn:function(){this.params.page=1,this.getAuthorAwardListFn()},getAuthorAwardListFn:function(){var n=i()(l.a.mark(function n(){var t,e;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:for(e in t=this._.clone(this.params))"all"==t[e]&&delete t[e];return this.loading=!0,n.next=5,this.$store.dispatch("getAuthorAwardList",t);case 5:this.loading=!1;case 6:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}(),postAuthorEditRemarkFn:function(){var n=i()(l.a.mark(function n(t){return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.$store.dispatch("postAuthorEditRemark",{id:t.id,remark:t.remark});case 2:200==n.sent.code?this.$message({duration:1500,message:"添加成功！",type:"success"}):this.getAuthorAwardListFn();case 4:case"end":return n.stop()}},n,this)}));return function(t){return n.apply(this,arguments)}}(),changeAwardStatusFn:function(n,t){var e=this;1==n?this.$confirm("确定通过审核吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(){e.postAuthorEditAwardFn(n,t.id)}).catch(function(){}):this.$prompt("请输入驳回原因","申请驳回",{confirmButtonText:"确定",cancelButtonText:"取消",inputValue:"作品未达到审核标准"}).then(function(a){var l=a.value;e.postAuthorEditAwardFn(n,t.id,l)}).catch(function(){})},postAuthorEditAwardFn:function(){var n=i()(l.a.mark(function n(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.$store.dispatch("postAuthorEditAward",{id:e,status:t,reject:a});case 2:200==n.sent.code&&(this.$message({duration:1500,message:"操作成功！",type:"success"}),this.getAuthorAwardListFn());case 4:case"end":return n.stop()}},n,this)}));return function(t,e){return n.apply(this,arguments)}}()}},h={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"app-container"},[e("div",{staticClass:"bar flex"},[e("div",{staticClass:"flex-left"},[e("label",{staticClass:"radio-label",staticStyle:{"padding-left":"0"}},[n._v("签约类型")]),n._v(" "),e("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择签约类型"},on:{change:n.fuzzyQueryFn},model:{value:n.params.sign,callback:function(t){n.$set(n.params,"sign",t)},expression:"params['sign']"}},n._l(n.signs,function(n){return e("el-option",{key:n.value,attrs:{label:n.label,value:n.value}})})),n._v(" "),e("label",{staticClass:"radio-label"},[n._v("奖励金类型")]),n._v(" "),e("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择奖励金类型"},on:{change:n.fuzzyQueryFn},model:{value:n.params.type,callback:function(t){n.$set(n.params,"type",t)},expression:"params['type']"}},n._l(n.type,function(n){return e("el-option",{key:n.value,attrs:{label:n.label,value:n.value}})})),n._v(" "),e("label",{staticClass:"radio-label"},[n._v("奖励金状态")]),n._v(" "),e("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择奖励金状态"},on:{change:n.fuzzyQueryFn},model:{value:n.params.status,callback:function(t){n.$set(n.params,"status",t)},expression:"params['status']"}},n._l(n.states,function(n){return e("el-option",{key:n.value,attrs:{label:n.label,value:n.value}})}))],1),n._v(" "),e("div",{staticClass:"flex-right"},[e("search-condition",{on:{search:n.getSearchFn}})],1)]),n._v(" "),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticStyle:{width:"100%","text-align":"center"},attrs:{data:n.authorAwardList.data,border:"",stripe:"",multipleTable:""},on:{"selection-change":n.handleSelectionChange}},[e("el-table-column",{attrs:{type:"selection",width:"55"}}),n._v(" "),e("el-table-column",{attrs:{prop:"book_id",label:"小说ID","min-width":"80",fixed:""}}),n._v(" "),e("el-table-column",{attrs:{prop:"bookname",label:"小说名称","min-width":"150","show-overflow-tooltip":"",align:"center"}}),n._v(" "),e("el-table-column",{attrs:{prop:"user_id",label:"作者ID","min-width":"120",align:"center"}}),n._v(" "),e("el-table-column",{attrs:{prop:"username",label:"作者笔名","min-width":"120","show-overflow-tooltip":"",align:"center"}}),n._v(" "),e("el-table-column",{attrs:{prop:"sign",label:"签约类型","min-width":"120","show-overflow-tooltip":"",align:"center"}}),n._v(" "),e("el-table-column",{attrs:{prop:"type",label:"奖励金类型","min-width":"120","show-overflow-tooltip":"",align:"center"}}),n._v(" "),e("el-table-column",{attrs:{prop:"supportRMB",label:"奖励金额","min-width":"120","show-overflow-tooltip":"",align:"center"}}),n._v(" "),e("el-table-column",{attrs:{prop:"status",label:"奖励金状态","min-width":"120","show-overflow-tooltip":"",align:"center"},scopedSlots:n._u([{key:"default",fn:function(t){return[1==t.row.status?e("el-tag",[n._v("通过")]):3==t.row.status?e("el-tag",{attrs:{type:"success"}},[n._v("已结算")]):0==t.row.status?e("el-tag",{attrs:{type:"warning"}},[n._v("待审核")]):2==t.row.status?e("el-tag",{attrs:{type:"danger"}},[n._v("驳回")]):e("span",[n._v("-")])]}}])}),n._v(" "),e("el-table-column",{attrs:{prop:"created_at",label:"申请时间","min-width":"120","show-overflow-tooltip":"",align:"center"}}),n._v(" "),e("el-table-column",{attrs:{prop:"remark",label:"备注","min-width":"120","show-overflow-tooltip":"",align:"center"},scopedSlots:n._u([{key:"default",fn:function(t){return[e("el-input",{on:{change:function(e){n.postAuthorEditRemarkFn(t.row)}},model:{value:t.row.remark,callback:function(e){n.$set(t.row,"remark",e)},expression:"scope.row.remark"}})]}}])}),n._v(" "),e("el-table-column",{attrs:{fixed:"right",label:"操作",width:"150",align:"center"},scopedSlots:n._u([{key:"default",fn:function(t){return[e("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){n.changeAwardStatusFn(1,t.row)}}},[n._v("通过")]),n._v(" "),e("el-button",{attrs:{size:"mini",type:"danger",disabled:3==t.row.status},on:{click:function(e){n.changeAwardStatusFn(2,t.row)}}},[n._v("驳回")])]}}])})],1),n._v(" "),e("div",{staticClass:"pagination-container clearfix"},[e("div",{staticClass:"float-left mr-30"},[e("el-popover",{attrs:{placement:"top",width:"100"},model:{value:n.multiplePass,callback:function(t){n.multiplePass=t},expression:"multiplePass"}},[e("p",[n._v("确认通过选择的申请？")]),n._v(" "),e("div",{staticStyle:{"text-align":"right",margin:"0"}},[e("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){n.multiplePass=!1}}},[n._v("取消")]),n._v(" "),e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){n.multiplePassFn(),n.multiplePass=!1}}},[n._v("确定")])],1),n._v(" "),e("el-button",{attrs:{slot:"reference",size:"mini",type:"primary",disabled:n.multiplePassVisible},on:{click:function(t){n.multiplePass=!0}},slot:"reference"},[n._v("批量通过")])],1)],1),n._v(" "),e("div",{staticClass:"float-left"},[e("global-pagination",{attrs:{"current-page":n.params.page,"page-size":n.params.per_page,layout:"total, sizes, prev, pager, next, jumper",total:n.authorAwardList.total},on:{"current-change":n.handleCurrentChange,"size-change":n.handleSizeChange}})],1)])],1)},staticRenderFns:[]};var v=e("VU/8")(d,h,!1,function(n){e("EOvp")},null,null);t.default=v.exports}});