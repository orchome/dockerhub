webpackJsonp([69],{Qnfx:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("woOf"),i=e.n(a),l=e("Xxa5"),o=e.n(l),s=e("exGp"),r=e.n(s),c=e("Dd8w"),u=e.n(c),p=e("NYxO"),h=e("/y5F"),d=e("msXN"),v=e("TIfe"),m={name:"authorManageRemuneration",mixins:[d.a],components:{SearchCondition:h.a},computed:u()({},Object(p.b)({authorRoyaltiesList:"authorRoyaltiesList"})),watch:{},data:function(){return{value:"0",signs:[{value:"all",label:"全部"},{value:"1",label:"全勤签约"},{value:"2",label:"保底签约"},{value:"3",label:"买断签约"}],states:[{value:"all",label:"全部"},{value:"3",label:"核算中"},{value:"4",label:"核算出错"},{value:"0",label:"未打款"},{value:"1",label:"已打款"},{value:"2",label:"打款出错"}],batchVisible:!1,loading:!1,condition:[{value:"user_id",label:"作者ID"}],params:{sign:"all",status:"all",page:1},total:0,size:20,page:1,userParams:{sign:"",status:""},multipleSelect:[],coinDetailData:[],coinDetailDialog:!1,coinDetailDialogTitle:"订阅明细",role_type:"",admin_id:""}},created:function(){this.role_type=Object(v.d)().role_type,this.admin_id=Object(v.d)().admin_id,this.getAuthorRoyaltiesList()},methods:{getAuthorCoinDetailFn:function(){var n=r()(o.a.mark(function n(t,e){var a,i,l,s;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),n.next=3,this.$store.dispatch("getAuthorCoinDetail",{id:t,type:e});case 3:if(200==(i=n.sent).code){for(s in l=[],i.data)l.push({channel:"miniProgram"==s?"小程序":s,detail:i.data[s]});this.coinDetailData=l}this.coinDetailDialogTitle=1==e?"订阅明细":"打赏明细",this.coinDetailDialog=!0,a.close();case 8:case"end":return n.stop()}},n,this)}));return function(t,e){return n.apply(this,arguments)}}(),exportFn:function(){var n=this._.cloneDeep(this.userParams);n.role_type=this.role_type,n.admin_id=this.admin_id,this.exportExcelFn(n,"/admin/author/royalties_export","稿费列表")},handleSelectionChange:function(n){var t=[];n.forEach(function(n){t.push(n.id)}),this.multipleSelect=t},postMassEditRoyFn:function(){var n=r()(o.a.mark(function n(){var t;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=this.multipleSelect.toString(),n.next=3,this.$store.dispatch("postMassEditRoy",{id:t,status:1});case 3:200==n.sent.code&&(this.$message({message:"结算成功!",duration:1500,type:"success"}),this.getAuthorRoyaltiesList());case 5:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}(),handleCurrentChange:function(n){this.params.page=n,this.getAuthorRoyaltiesList()},fuzzyQueryFn:function(){this.params.page=1,this.getAuthorRoyaltiesList()},getAuthorRoyaltiesList:function(){var n=r()(o.a.mark(function n(){var t,e;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:for(e in t=this._.cloneDeep(this.params),this.loading=!0,t)"all"==t[e]&&delete t[e];return t.role_type=this.role_type,t.admin_id=this.admin_id,n.next=7,this.$store.dispatch("getAuthorRoyaltiesList",t);case 7:200==n.sent.code&&(this.userParams=this._.cloneDeep(t)),this.loading=!1;case 10:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}(),getSearchFn:function(n){this.params=i()(this.params,n),this.fuzzyQueryFn()},postRoyaltyMarkEditFn:function(){var n=r()(o.a.mark(function n(t,e){return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.$store.dispatch("postRoyaltyMarkEdit",{id:t,mark:e});case 2:200==n.sent.code?this.$message({message:"添加备注成功!",duration:1500,type:"success"}):this.getAuthorRoyaltiesList();case 4:case"end":return n.stop()}},n,this)}));return function(t,e){return n.apply(this,arguments)}}(),changePayMentStatus:function(){var n=r()(o.a.mark(function n(t){var e,a,i=this;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.id,a=t.status,n.next=4,this.$store.dispatch("getAuthorChangeRoyalStatus",{id:e,status:a}).then(function(){i.getAuthorRoyaltiesList()});case 4:case"end":return n.stop()}},n,this)}));return function(t){return n.apply(this,arguments)}}()}},f={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"app-container"},[e("div",{staticClass:"bar flex"},[e("div",{staticClass:"flex-left"},[e("label",{staticClass:"radio-label",staticStyle:{"padding-left":"0"}},[n._v("签约类型")]),n._v(" "),e("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择签约类型"},on:{change:n.fuzzyQueryFn},model:{value:n.params.sign,callback:function(t){n.$set(n.params,"sign",t)},expression:"params['sign']"}},n._l(n.signs,function(n){return e("el-option",{key:n.value,attrs:{label:n.label,value:n.value}})})),n._v(" "),e("label",{staticClass:"radio-label"},[n._v("稿费状态")]),n._v(" "),e("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择稿费状态"},on:{change:n.fuzzyQueryFn},model:{value:n.params.status,callback:function(t){n.$set(n.params,"status",t)},expression:"params['status']"}},n._l(n.states,function(n){return e("el-option",{key:n.value,attrs:{label:n.label,value:n.value}})}))],1),n._v(" "),e("div",{staticClass:"flex-right"},[e("search-condition",{attrs:{condition:n.condition},on:{search:n.getSearchFn}}),n._v(" "),e("el-button",{attrs:{type:"primary",icon:"el-icon-download",size:"mini"},on:{click:n.exportFn}},[n._v("导出excel")])],1)]),n._v(" "),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticStyle:{width:"100%","text-align":"center"},attrs:{data:n.authorRoyaltiesList.data,border:"",stripe:"",multipleTable:""},on:{"selection-change":n.handleSelectionChange}},[e("el-table-column",{attrs:{type:"selection",width:"55"}}),n._v(" "),e("el-table-column",{attrs:{prop:"book_id",label:"小说ID","min-width":"80",fixed:""}}),n._v(" "),e("el-table-column",{attrs:{prop:"bookname",label:"小说名称","min-width":"150","show-overflow-tooltip":"",align:"center"}}),n._v(" "),e("el-table-column",{attrs:{prop:"user_id",label:"作者ID","min-width":"120",align:"center"}}),n._v(" "),e("el-table-column",{attrs:{prop:"pen_name",label:"作者笔名","min-width":"120","show-overflow-tooltip":"",align:"center"}}),n._v(" "),e("el-table-column",{attrs:{prop:"_sign",label:"签约类型","min-width":"120","show-overflow-tooltip":"",align:"center"}}),n._v(" "),e("el-table-column",{attrs:{prop:"tax",label:"税费","min-width":"120","show-overflow-tooltip":"",align:"center"}}),n._v(" "),e("el-table-column",{attrs:{prop:"settlement",label:"实际稿费","min-width":"120","show-overflow-tooltip":"",align:"center"}}),n._v(" "),e("el-table-column",{attrs:{prop:"status",label:"稿费状态","min-width":"120","show-overflow-tooltip":"",align:"center"},scopedSlots:n._u([{key:"default",fn:function(t){return[e("el-select",{on:{change:function(e){n.changePayMentStatus(t.row)}},model:{value:t.row.status,callback:function(e){n.$set(t.row,"status",e)},expression:"scope.row.status"}},[e("el-option",{attrs:{value:0,label:"未打款"}}),n._v(" "),e("el-option",{attrs:{value:1,label:"已打款"}}),n._v(" "),e("el-option",{attrs:{value:2,label:"打款出错"}}),n._v(" "),e("el-option",{attrs:{value:3,label:"核算中"}}),n._v(" "),e("el-option",{attrs:{value:4,label:"核算出错"}})],1)]}}])}),n._v(" "),e("el-table-column",{attrs:{prop:"pay_at",label:"结算时间","min-width":"140","show-overflow-tooltip":"",align:"center"},scopedSlots:n._u([{key:"default",fn:function(t){return[e("div",[n._v(n._s(1==t.row.status?t.row.pay_at:"-"))])]}}])}),n._v(" "),e("el-table-column",{attrs:{prop:"created_at",label:"创建时间","min-width":"140","show-overflow-tooltip":"",align:"center"}}),n._v(" "),e("el-table-column",{attrs:{prop:"mark",label:"备注","min-width":"120","show-overflow-tooltip":"",align:"center"},scopedSlots:n._u([{key:"default",fn:function(t){return[e("el-input",{on:{change:function(e){n.postRoyaltyMarkEditFn(t.row.id,e)}},model:{value:t.row.mark,callback:function(e){n.$set(t.row,"mark",e)},expression:"scope.row.mark"}})]}}])}),n._v(" "),e("el-table-column",{attrs:{fixed:"right",label:"操作",width:"230",align:"center"},scopedSlots:n._u([{key:"default",fn:function(t){return[e("router-link",{attrs:{to:"/authorManage/remuneration/info/"+t.row.id}},[e("el-button",{attrs:{size:"mini",type:"primary"}},[n._v("稿费详情")])],1),n._v(" "),2==t.row.sign||1==t.row.sign?e("el-button",{attrs:{size:"mini",type:"warning"},on:{click:function(e){n.getAuthorCoinDetailFn(t.row.id,1)}}},[n._v("订阅")]):n._e(),n._v(" "),3==t.row.sign||2==t.row.sign||1==t.row.sign?e("el-button",{staticStyle:{"margin-left":"0"},attrs:{size:"mini",type:"success"},on:{click:function(e){n.getAuthorCoinDetailFn(t.row.id,2)}}},[n._v("打赏")]):n._e()]}}])})],1),n._v(" "),e("div",{staticClass:"pagination-container clearfix"},[e("div",{staticClass:"float-left mr-30"},[e("el-popover",{attrs:{placement:"top",width:"100"},model:{value:n.batchVisible,callback:function(t){n.batchVisible=t},expression:"batchVisible"}},[e("p",[n._v("确认批量结算？")]),n._v(" "),e("div",{staticStyle:{"text-align":"right",margin:"0"}},[e("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){n.batchVisible=!1}}},[n._v("取消")]),n._v(" "),e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){n.postMassEditRoyFn(),n.batchVisible=!1}}},[n._v("确定")])],1),n._v(" "),e("el-button",{attrs:{slot:"reference",size:"mini",type:"primary",disabled:0==n.multipleSelect.length},on:{click:function(t){n.batchVisible=!0}},slot:"reference"},[n._v("批量结算")])],1)],1),n._v(" "),e("div",{staticClass:"float-left"},[e("global-pagination",{attrs:{"current-page":n.params.page,"page-size":n.params.per_page,layout:"total, sizes, prev, pager, next, jumper",total:n.authorRoyaltiesList.total},on:{"current-change":n.handleCurrentChange,"size-change":n.handleSizeChange}})],1)]),n._v(" "),e("el-dialog",{attrs:{title:n.coinDetailDialogTitle,visible:n.coinDetailDialog},on:{"update:visible":function(t){n.coinDetailDialog=t}}},[e("el-table",{staticStyle:{width:"100%","text-align":"center"},attrs:{data:n.coinDetailData,border:"",stripe:""}},[e("el-table-column",{attrs:{property:"channel",label:"渠道","min-width":"150"}}),n._v(" "),e("el-table-column",{attrs:{property:"detail",label:"明细","min-width":"150"}})],1)],1)],1)},staticRenderFns:[]};var g=e("VU/8")(m,f,!1,function(n){e("aIE6")},null,null);t.default=g.exports},aIE6:function(n,t,e){var a=e("m0R+");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("rjj0")("b1057c16",a,!0)},"m0R+":function(n,t,e){(n.exports=e("FZ+f")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])}});