webpackJsonp([138],{"+vnP":function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,"\n.avatar-img {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n.dialogVip .el-dialog {\n  width: 500px;\n}\n",""])},H5xQ:function(e,t,i){var o=i("+vnP");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);i("rjj0")("6200a0a2",o,!0)},"a3m/":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i("mvHQ"),a=i.n(o),s=i("pFYg"),n=i.n(s),r=i("Xxa5"),l=i.n(r),c=i("exGp"),u=i.n(c),p=i("RRo+"),d=i.n(p),m=i("Dd8w"),h=i.n(m),v=i("NYxO"),f=i("0xDb"),b={name:"CPSUserList",computed:h()({},Object(v.b)({cpsUserList:"cpsUserList"})),watch:{dialogFormVisible:function(e){e||this.resetForm("form")},"userRuleForm.is_vip":function(e){0==e?(this.vipTime="",this.vipdisabled=!0):this.vipdisabled=!1}},data:function(){var e=function(e,t,i){d()(Number(t))?t.length>9?i(new Error("输入的数值太大")):i():i(new Error("请输入整数"))};return{vipTime:"",vipdisabled:!1,dialogVip:!1,userRuleForm:{id:"",is_vip:"",due_time:""},selectId:"",rules:{coin:[{validator:e,trigger:"blur"}],coupon:[{validator:e,trigger:"blur"}],coin_reason:[],coupon_reason:[]},dialogFormVisible:!1,form:{coin:"",coin_reason:"",coupon:"",coupon_reason:""},activeName:"1",loading:!1,params:{page:1},searchCondition:"id",condition:[{value:"id",label:"用户ID"},{value:"nickname",label:"用户昵称"},{value:"admin_id",label:"代理ID"},{value:"webchat_name",label:"公众号名称"}]}},created:function(){this.getCPSUserListFn()},methods:{postSetMemberFn:function(){var e=u()(l.a.mark(function e(t){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$store.dispatch("putCPSSetMember",t);case 3:this.$message({duration:1500,message:"修改成功！",type:"success"}),this.dialogVip=!1,this.getCPSUserListFn(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),this.$message({duration:1500,message:"修改失败！",type:"success"});case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(t){return e.apply(this,arguments)}}(),setVipFn:function(){1==this.userRuleForm.is_vip?"object"===n()(this.vipTime)?this.userRuleForm.due_time=Object(f.k)(this.vipTime):this.userRuleForm.due_time=this.vipTime:this.userRuleForm.due_time="",this.postSetMemberFn(this.userRuleForm)},datePickerChange:function(e){this.userRuleForm.due_time=e||""},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.postCPSUserAddCoinFn()})},resetForm:function(e){this.$refs[e].resetFields()},handleCurrentChange:function(e){this.params.page=e,this.getCPSUserListFn()},fuzzyQueryFn:function(){this.params.page=1,this.getCPSUserListFn()},changeConditionFn:function(e){for(var t in this.params)"page"!==t&&t!==e&&(this.params[t]="")},handleCommand:function(e,t){1==t?this.$router.push("/CPSManage/user/recharge/"+e.id):2==t?this.$router.push("/CPSManage/user/consume/"+e.id):3==t?(this.dialogFormVisible=!0,this.selectId=e.id):4==t?this.postCPSUserUpdateFn(e):5==t&&this.showUserVipFn(e)},showUserVipFn:function(e){this.dialogVip=!0,this.userRuleForm={id:e.id,is_vip:e.is_vip,due_time:""},this.vipTime=new Date(e.due_time)||""},getCPSUserListFn:function(){var e=u()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,this.$store.dispatch("getCPSUserList",this.params);case 3:this.loading=!1;case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),postCPSUserUpdateFn:function(){var e=u()(l.a.mark(function e(t){var i,o;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i={id:t.id,status:1==t.status?0:1},e.next=3,this.$store.dispatch("postCPSUserUpdate",i);case 3:200==e.sent.code&&(this.$message({duration:1500,message:"修改成功！",type:"success"}),o=this.cpsUserList.data.findIndex(function(e){return e.id==t.id}),this.cpsUserList.data[o].status=i.status);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),postCPSUserAddCoinFn:function(){var e=u()(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return""==(t=JSON.parse(a()(this.form))).coin&&delete t.coin_reason,""==t.coupon&&delete t.coupon_reason,t.id=this.selectId,e.next=6,this.$store.dispatch("postCPSUserAddCoin",t);case 6:200==e.sent.code&&(this.$message({duration:1500,message:"书币/书券发放成功！",type:"success"}),this.dialogFormVisible=!1);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}},_={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container dropdown-container"},[i("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[i("el-tab-pane",{attrs:{label:"小说",name:"1"}})],1),e._v(" "),i("div",{staticClass:"bar clearfix"},[i("div",{staticClass:"float-right"},[i("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择搜索条件"},on:{change:e.changeConditionFn},model:{value:e.searchCondition,callback:function(t){e.searchCondition=t},expression:"searchCondition"}},e._l(e.condition,function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),i("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"输入搜索内容",size:"mini","prefix-icon":"el-icon-search"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.fuzzyQueryFn(t)}},model:{value:e.params[e.searchCondition],callback:function(t){e.$set(e.params,e.searchCondition,t)},expression:"params[searchCondition]"}}),e._v(" "),i("el-button",{staticClass:"search",attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.fuzzyQueryFn}},[e._v("搜索")])],1)]),e._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.cpsUserList.data,border:"",stripe:""}},[i("el-table-column",{attrs:{prop:"id",label:"ID","min-width":"80",fixed:""}}),e._v(" "),i("el-table-column",{attrs:{prop:"_avatar",label:"头像","min-width":"70","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.avatar?i("img",{staticClass:"avatar-img",attrs:{src:t.row._avatar,alt:""}}):i("span",[e._v("-")])]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"nickname",label:"昵称","min-width":"120"}}),e._v(" "),i("el-table-column",{attrs:{prop:"_sex",label:"性别","min-width":"120","show-overflow-tooltip":""}}),e._v(" "),i("el-table-column",{attrs:{prop:"admin_id",label:"代理ID","min-width":"120","show-overflow-tooltip":""}}),e._v(" "),i("el-table-column",{attrs:{prop:"webchat_name",label:"公众号名称","min-width":"120","show-overflow-tooltip":""}}),e._v(" "),i("el-table-column",{attrs:{prop:"coin",label:"账户书币","min-width":"120","show-overflow-tooltip":""}}),e._v(" "),i("el-table-column",{attrs:{prop:"coupon",label:"账户书券","min-width":"120","show-overflow-tooltip":""}}),e._v(" "),i("el-table-column",{attrs:{prop:"_is_vip",label:"是否年费会员","min-width":"120","show-overflow-tooltip":""}}),e._v(" "),i("el-table-column",{attrs:{prop:"created_at",label:"注册时间","min-width":"120","show-overflow-tooltip":""}}),e._v(" "),i("el-table-column",{attrs:{fixed:"right",label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-dropdown",{attrs:{"split-button":"",type:"primary"},on:{command:function(i){e.handleCommand(t.row,i)},click:function(i){e.handleCommand(t.row,"1")}}},[i("span",[e._v("充值记录")]),e._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",{attrs:{command:"2"}},[e._v("消费记录")]),e._v(" "),i("el-dropdown-item",{attrs:{command:"3"}},[e._v("书币/券")]),e._v(" "),i("el-dropdown-item",{attrs:{command:"4"}},[e._v(e._s(1==t.row.status?"正常":"禁用"))]),e._v(" "),i("el-dropdown-item",{attrs:{command:"5"}},[e._v("会员设置")])],1)],1)]}}])})],1),e._v(" "),i("div",{staticClass:"pagination-container clearfix"},[i("div",{staticClass:"float-left"},[i("global-pagination",{attrs:{"current-page":e.params.page,"page-size":e.params.per_page,layout:"total, sizes, prev, pager, next, jumper",total:e.cpsUserList.total},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}})],1)]),e._v(" "),i("el-dialog",{attrs:{title:"书币/书券发放",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px",rules:e.rules}},[i("el-form-item",{attrs:{label:"书币数量",prop:"coin"}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.coin,callback:function(t){e.$set(e.form,"coin",t)},expression:"form.coin"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"发放原因",prop:"coin_reason"}},[i("el-input",{attrs:{autocomplete:"off",disabled:0==e.form.coin.length,placeholder:"请输入发放书币原因"},model:{value:e.form.coin_reason,callback:function(t){e.$set(e.form,"coin_reason",t)},expression:"form.coin_reason"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"书券数量",prop:"coupon"}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.coupon,callback:function(t){e.$set(e.form,"coupon",t)},expression:"form.coupon"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"发放原因",prop:"coupon_reason"}},[i("el-input",{attrs:{autocomplete:"off",disabled:0==e.form.coupon.length,placeholder:"请输入发放书券原因"},model:{value:e.form.coupon_reason,callback:function(t){e.$set(e.form,"coupon_reason",t)},expression:"form.coupon_reason"}})],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("form")}}},[e._v("提交")]),e._v(" "),i("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")])],1)],1),e._v(" "),i("el-dialog",{staticClass:"dialogVip",attrs:{title:"会员设置",visible:e.dialogVip},on:{"update:visible":function(t){e.dialogVip=t}}},[i("el-form",{attrs:{model:e.userRuleForm,"label-width":"120px"}},[i("el-form-item",{attrs:{label:"是否会员"}},[i("el-radio-group",{model:{value:e.userRuleForm.is_vip,callback:function(t){e.$set(e.userRuleForm,"is_vip",t)},expression:"userRuleForm.is_vip"}},[i("el-radio",{attrs:{label:"1"}},[e._v("是")]),e._v(" "),i("el-radio",{attrs:{label:"0"}},[e._v("否")])],1)],1),e._v(" "),i("el-form-item",{attrs:{label:"到期时间"}},[i("el-date-picker",{attrs:{disabled:e.vipdisabled,type:"datetime",align:"right","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"会员到期时间"},on:{change:e.datePickerChange},model:{value:e.vipTime,callback:function(t){e.vipTime=t},expression:"vipTime"}})],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogVip=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.setVipFn}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var g=i("VU/8")(b,_,!1,function(e){i("H5xQ")},null,null);t.default=g.exports}});