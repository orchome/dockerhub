webpackJsonp([63],{PKoj:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t("Xxa5"),a=t.n(i),r=t("exGp"),s=t.n(r),o=t("Dd8w"),l=t.n(o),p=t("NYxO"),c=t("mvHQ"),u=t.n(c),d={computed:l()({},Object(p.b)({})),props:{type:{type:Number,default:1},show:{type:Boolean,default:!1},params:{type:Object,default:function(){return{name:"",identifying:""}}}},watch:{type:function(n){2==n&&this.initRuleData()}},data:function(){return{ruleForm:{name:"",identifying:""},rules:{name:[{required:!0,message:"请填写应用名称",trigger:"change"}],identifying:[{required:!0,message:"请填写应用简称",trigger:"change"}]}}},created:function(){},mounted:function(){},methods:{initRuleData:function(){var n=this.params,e=n.name,t=n.identifying,i=n.id;this.ruleForm={name:e,identifying:t,id:i}},cancelFn:function(){this.$refs.ruleForm.resetFields(),this.ruleForm={name:"",identifying:""},this.$emit("update:type",0),this.$emit("update:show",!1),this.$emit("clearnParamsFn",!0)},sureFn:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"addApp",e=JSON.parse(u()(this.ruleForm));this.$emit(n,e),this.cancelFn()},addSure:function(){var n=this;this.$refs.ruleForm.validate(function(e){if(!e)return console.log("error submit!!"),!1;n.sureFn("addApp")})},editSure:function(){var n=this;this.$refs.ruleForm.validate(function(e){if(!e)return console.log("error submit!!"),!1;n.sureFn("editApp")})}}},f={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"free-operate"},[1==n.type?t("div",{staticClass:"type-1"},[t("el-dialog",{attrs:{title:"新增应用",visible:n.show,width:"30%",center:"","before-close":n.cancelFn},on:{"update:visible":function(e){n.show=e}}},[t("el-form",{ref:"ruleForm",attrs:{model:n.ruleForm,rules:n.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"应用名称",prop:"name"}},[t("el-input",{model:{value:n.ruleForm.name,callback:function(e){n.$set(n.ruleForm,"name",e)},expression:"ruleForm.name"}})],1),n._v(" "),t("el-form-item",{attrs:{label:"应用简称",prop:"identifying"}},[t("el-input",{model:{value:n.ruleForm.identifying,callback:function(e){n.$set(n.ruleForm,"identifying",e)},expression:"ruleForm.identifying"}})],1)],1),n._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:n.cancelFn}},[n._v("取 消")]),n._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:n.addSure}},[n._v("确 定")])],1)],1)],1):n._e(),n._v(" "),2==n.type?t("div",{staticClass:"type-2"},[t("el-dialog",{attrs:{title:"编辑应用",visible:n.show,width:"30%",center:"","before-close":n.cancelFn},on:{"update:visible":function(e){n.show=e}}},[t("el-form",{ref:"ruleForm",attrs:{model:n.ruleForm,rules:n.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"应用名称",prop:"name"}},[t("el-input",{model:{value:n.ruleForm.name,callback:function(e){n.$set(n.ruleForm,"name",e)},expression:"ruleForm.name"}})],1),n._v(" "),t("el-form-item",{attrs:{label:"应用简称",prop:"identifying"}},[t("el-input",{model:{value:n.ruleForm.identifying,callback:function(e){n.$set(n.ruleForm,"identifying",e)},expression:"ruleForm.identifying"}})],1)],1),n._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:n.cancelFn}},[n._v("取 消")]),n._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:n.editSure}},[n._v("确 定")])],1)],1)],1):n._e()])},staticRenderFns:[]};var m=t("VU/8")(d,f,!1,function(n){t("kNN+")},null,null).exports,h={computed:l()({},Object(p.b)({freeAppList:"freeAppList"})),components:{freeOperate:m},watch:{},data:function(){return{dialog:{show:!1,type:1,params:{name:"",identifying:""}},data:[{id:1}],loading:!1,params:{page:1,per_page:20},total:0,size:20,page:1}},created:function(){this.getListDataFn()},methods:{getListDataFn:function(){var n=s()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return this.loading=!0,n.next=3,this.$store.dispatch("getFreeAppList",this.params);case 3:this.loading=!1;case 4:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}(),getFreeAppDetail:function(){var n=s()(a.a.mark(function n(e){var t,i;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e,this.loading=!0,n.next=4,this.$store.dispatch("getFreeAppDetail",{id:t});case 4:return i=n.sent,this.loading=!1,n.abrupt("return",i);case 7:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}(),editFn:function(){var n=s()(a.a.mark(function n(e){var t,i;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.getFreeAppDetail(e);case 2:t=n.sent,i={name:t.data.name,identifying:t.data.identifying,id:t.data.id},this.dialog.params=i,this.dialog.type=2,this.dialog.show=!0;case 7:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}(),putFreeAppUpdate:function(){var n=s()(a.a.mark(function n(e){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.$store.dispatch("putFreeAppUpdate",e);case 2:this.getListDataFn();case 3:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}(),postFreeAppCreate:function(){var n=s()(a.a.mark(function n(e){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.$store.dispatch("postFreeAppCreate",e);case 2:this.getListDataFn();case 3:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}(),clearnParamsFn:function(){this.dialog={show:!1,type:1,params:{name:"",identifying:""}}},putFreeAppDel:function(){var n=s()(a.a.mark(function n(e){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.$store.dispatch("putFreeAppDel",{id:e.id});case 2:this.getListDataFn();case 3:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}(),changeSendTypeFn:function(n){console.log(n)},handleCurrentChange:function(n){this.params.page=n,this.getListDataFn()},fuzzyQueryFn:function(){this.params.page=1,this.getListDataFn()}}},g={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"app-container"},[t("div",{staticClass:"bar"},[t("div",{staticClass:"flex-right",staticStyle:{"text-align":"right"}},[t("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:function(e){n.dialog.type=1,n.dialog.show=!0}}},[n._v("新增")])],1)]),n._v(" "),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticStyle:{width:"100%","text-align":"center"},attrs:{data:n.freeAppList.data,border:"",stripe:""}},[t("el-table-column",{attrs:{prop:"id",label:"ID","min-width":"80",fixed:"",align:"center"}}),n._v(" "),t("el-table-column",{attrs:{prop:"name",label:"应用名称","min-width":"150","show-overflow-tooltip":"",align:"center"}}),n._v(" "),t("el-table-column",{attrs:{prop:"identifying",label:"应用字母","min-width":"120",align:"center"}}),n._v(" "),t("el-table-column",{attrs:{prop:"created_at",label:"创建时间","min-width":"120","show-overflow-tooltip":"",align:"center"}}),n._v(" "),t("el-table-column",{attrs:{fixed:"right",label:"操作",width:"150",align:"center"},scopedSlots:n._u([{key:"default",fn:function(e){return[t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){n.editFn(e.row.id)}}},[n._v("编辑")]),n._v(" "),t("el-popover",{attrs:{placement:"top",width:"100"},model:{value:e.row.delete,callback:function(t){n.$set(e.row,"delete",t)},expression:"scope.row.delete"}},[t("p",[n._v("确认删除选择的应用？")]),n._v(" "),t("div",{staticStyle:{"text-align":"right",margin:"0"}},[t("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(n){e.row.delete=!1}}},[n._v("取消")]),n._v(" "),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){n.putFreeAppDel(e.row),e.row.delete=!1}}},[n._v("确定")])],1),n._v(" "),t("el-button",{attrs:{slot:"reference",size:"mini",type:"danger"},on:{click:function(n){e.row.delete=!0}},slot:"reference"},[n._v("删除")])],1)]}}])})],1),n._v(" "),t("div",{staticClass:"pagination-container clearfix"},[t("div",{staticClass:"float-left"},[t("global-pagination",{attrs:{"current-page":n.params.page,"page-size":n.params.per_page,layout:"total, sizes, prev, pager, next, jumper",total:n.freeAppList.total},on:{"current-change":n.handleCurrentChange,"size-change":n.handleSizeChange}})],1)]),n._v(" "),t("free-operate",{attrs:{show:n.dialog.show,type:n.dialog.type,params:n.dialog.params},on:{"update:show":function(e){n.$set(n.dialog,"show",e)},"update:type":function(e){n.$set(n.dialog,"type",e)},addApp:n.postFreeAppCreate,editApp:n.putFreeAppUpdate,clearnParamsFn:n.clearnParamsFn}})],1)},staticRenderFns:[]};var v=t("VU/8")(h,g,!1,function(n){t("bjDa")},null,null);e.default=v.exports},PPaF:function(n,e,t){(n.exports=t("FZ+f")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},bjDa:function(n,e,t){var i=t("PPaF");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t("rjj0")("1ed63ce8",i,!0)},"kNN+":function(n,e,t){var i=t("zLqA");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t("rjj0")("2168ad52",i,!0)},zLqA:function(n,e,t){(n.exports=t("FZ+f")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])}});