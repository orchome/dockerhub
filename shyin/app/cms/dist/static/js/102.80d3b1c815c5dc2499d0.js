webpackJsonp([102],{NY5i:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("Xxa5"),n=i.n(a),s=i("exGp"),r=i.n(s),o=i("Dd8w"),c=i.n(o),l=i("NYxO"),d={name:"CPSPromotionCreditList",computed:c()({},Object(l.b)({cpsActivitySettingList:"cpsActivitySettingList"})),watch:{dialogFormVisible:function(t){t||(this.form={id:"",recharge:1,gift:1})}},data:function(){return{dialogType:"add",form:{id:"",recharge:1,gift:1},dialogFormVisible:!1,dialogTitle:"新增CPS充值金额 (单位：元)",loading:!1,params:{page:1},loadingBut:!1}},created:function(){this.getCPSActivitySettingListFn()},methods:{submitFn:function(){this.form.recharge&&this.form.gift?(this.loadingBut=!0,"add"==this.dialogType?this.postCPSActivitySettingCreateFn(this.form):"edit"==this.dialogType&&this.postCPSActivitySettingUpdateFn(this.form)):this.$message({message:"请输入正确的活动金额！",type:"warning",duration:1500})},postCPSActivitySettingCreateFn:function(){var t=r()(n.a.mark(function t(e){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("postCPSActivitySettingCreate",e);case 2:200==t.sent.code&&(this.$message({message:"添加活动金额成功！",type:"success",duration:1500}),this.params.page=1,this.getCPSActivitySettingListFn()),this.dialogFormVisible=!1,this.loadingBut=!1;case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),postCPSActivitySettingUpdateFn:function(){var t=r()(n.a.mark(function t(e){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("postCPSActivitySettingUpdate",e);case 2:200==t.sent.code&&(this.$message({message:"修改活动金额成功！",type:"success",duration:1500}),this.params.page=1,this.getCPSActivitySettingListFn()),this.dialogFormVisible=!1,this.loadingBut=!1;case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),editFn:function(t){this.form={id:t.id,recharge:t.recharge,gift:t.gift},this.dialogType="edit",this.dialogTitle="编辑CPS充值金额 (单位：元)",this.dialogFormVisible=!0},addFn:function(){this.dialogType="add",this.dialogTitle="新增CPS充值金额 (单位：元)",this.dialogFormVisible=!0},getCPSActivitySettingListFn:function(){var t=r()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.$store.dispatch("getCPSActivitySettingList",this.params);case 3:this.loading=!1;case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),handleCurrentChange:function(t){this.params.page=t,this.getCPSActivitySettingListFn()},fuzzyQueryFn:function(){this.params.page=1,this.getCPSActivitySettingListFn()},deleteCPSActivitySettingDelFn:function(){var t=r()(n.a.mark(function t(e){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("deleteCPSActivitySettingDel",{id:e});case 2:200==t.sent.code&&(this.$message({message:"删除成功！",type:"success",duration:1500}),this.getCPSActivitySettingListFn());case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container "},[i("div",{staticClass:"bar clearfix"},[i("div",{staticClass:"float-right"},[i("el-button",{staticClass:"search",attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:t.addFn}},[t._v("新增")])],1)]),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.cpsActivitySettingList.data,border:"",stripe:""}},[i("el-table-column",{attrs:{prop:"id",label:"序号","min-width":"80",fixed:""}}),t._v(" "),i("el-table-column",{attrs:{prop:"_activity",label:"活动金额","min-width":"150","show-overflow-tooltip":""}}),t._v(" "),i("el-table-column",{attrs:{prop:"created_at",label:"创建时间","min-width":"120"}}),t._v(" "),i("el-table-column",{attrs:{fixed:"right",label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(i){t.editFn(e.row)}}},[t._v("编辑")]),t._v(" "),i("el-popover",{attrs:{placement:"top",width:"100"},model:{value:e.row.delete,callback:function(i){t.$set(e.row,"delete",i)},expression:"scope.row.delete"}},[i("p",[t._v("确认删除选择的内容？")]),t._v(" "),i("div",{staticStyle:{"text-align":"right",margin:"0"}},[i("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){e.row.delete=!1}}},[t._v("取消")]),t._v(" "),i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(i){t.deleteCPSActivitySettingDelFn(e.row.id),e.row.delete=!1}}},[t._v("确定")])],1),t._v(" "),i("el-button",{attrs:{slot:"reference",size:"mini",type:"danger"},on:{click:function(t){e.row.delete=!0}},slot:"reference"},[t._v("删除")])],1)]}}])})],1),t._v(" "),i("div",{staticClass:"pagination-container clearfix"},[i("div",{staticClass:"float-left"},[i("global-pagination",{attrs:{"current-page":t.params.page,"page-size":t.params.per_page,layout:"total, sizes, prev, pager, next, jumper",total:t.cpsActivitySettingList.total},on:{"current-change":t.handleCurrentChange,"size-change":t.handleSizeChange}})],1)]),t._v(" "),i("el-dialog",{staticClass:"credit-dialog",attrs:{title:t.dialogTitle,visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[i("el-form",{attrs:{model:t.form}},[i("el-form-item",{attrs:{label:"充值金额","label-width":"120px"}},[i("span",{staticStyle:{"margin-right":"10px"}},[t._v("充")]),t._v(" "),i("el-input-number",{attrs:{min:1,max:1e8,"controls-position":"right"},model:{value:t.form.recharge,callback:function(e){t.$set(t.form,"recharge",e)},expression:"form.recharge"}}),t._v(" "),i("span",{staticStyle:{margin:"0 10px"}},[t._v("送")]),t._v(" "),i("el-input-number",{attrs:{min:1,max:1e8,"controls-position":"right"},model:{value:t.form.gift,callback:function(e){t.$set(t.form,"gift",e)},expression:"form.gift"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary",loading:t.loadingBut},on:{click:t.submitFn}},[t._v("提交")])],1)],1)],1)},staticRenderFns:[]};var g=i("VU/8")(d,p,!1,function(t){i("o49L")},null,null);e.default=g.exports},o49L:function(t,e,i){var a=i("wchO");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("08cb5988",a,!0)},wchO:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])}});