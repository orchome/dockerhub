webpackJsonp([194],{"6qby":function(e,t,r){var l=r("CQYC");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);r("rjj0")("75d602c4",l,!0)},"AL1+":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=r("mvHQ"),a=r.n(l),i=r("Xxa5"),s=r.n(i),o=r("exGp"),n=r.n(o),u=r("Dd8w"),c=r.n(u),p=r("NYxO"),m=r("E4LH"),d={computed:c()({},Object(p.b)({freeAppAllList:"freeAppAllList"})),data:function(){var e=this;return{routeId:"",ruleForm:{id:"",app_source:"",nickname:"",mobile:"",status:"",sex:"",identity:"",vip_time:"",client:""},rules:{app_source:[{required:!0,message:"请选择应用来源",trigger:"change"}],nickname:[{required:!0,message:"请填写昵称",trigger:"blur"}],mobile:[{required:!0,validator:function(e,t,r){return t?Object(m.f)(t)?void r():r(new Error("请填写正确的手机号")):r(new Error("请填写手机号"))},trigger:"blur"}],vip_time:[{required:!0,validator:function(t,r,l){if("1"==!e.ruleForm.status&&!r)return l(new Error("请选择日期时间"));l()},trigger:"blur"}]}}},created:function(){this.routeId=this.$route.params?this.$route.params.id:"",this.getFreeUserDetail(),this.getFreeAppAllList()},methods:{getFreeUserDetail:function(){var e=this,t=this.routeId;this.$store.dispatch("getFreeUserDetail",{id:t}).then(function(t){e.ruleForm={id:t.data.id,app_source:t.data.app_source,nickname:t.data.nickname,mobile:t.data.mobile,status:t.data.status+"",sex:t.data.sex+"",identity:t.data.identity+"",vip_time:t.data.vip_time,client:1==t.data.client?"app":"小程序"}})},getFreeAppAllList:function(){var e=n()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.$store.dispatch("getFreeAppAllList");case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),selectChange:function(e){"0"==e&&(this.ruleForm.vip_time="")},submitForm:function(e){var t=this,r=JSON.parse(a()(this.ruleForm));this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.putFreeUserUpdate(r)})},putFreeUserUpdate:function(e){var t=this;delete e.client,this.$store.dispatch("putFreeUserUpdate",e).then(function(){t.$message({duration:1500,message:"添加成功",type:"success"}),t.goBackFn()})},resetForm:function(e){this.$refs[e].resetFields(),this.closeSelectedTag("/userMana/freeUser")},goBackFn:function(){this.resetForm("ruleForm")}}},v={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"应用来源",prop:"app_source"}},[r("el-select",{staticStyle:{width:"340px"},attrs:{placeholder:"请选择来源"},model:{value:e.ruleForm.app_source,callback:function(t){e.$set(e.ruleForm,"app_source",t)},expression:"ruleForm.app_source"}},e._l(e.freeAppAllList,function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"应用客户端",prop:"app_source"}},[r("span",{staticStyle:{color:"#606266","font-size":"14px"}},[e._v(e._s(e.ruleForm.client))])]),e._v(" "),r("el-form-item",{attrs:{label:"用户昵称",prop:"nickname"}},[r("el-input",{staticStyle:{width:"340px"},attrs:{placeholder:"请填写昵称"},model:{value:e.ruleForm.nickname,callback:function(t){e.$set(e.ruleForm,"nickname",t)},expression:"ruleForm.nickname"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"手机号",prop:"mobile"}},[r("el-input",{staticStyle:{width:"340px"},attrs:{placeholder:"请填写手机号"},model:{value:e.ruleForm.mobile,callback:function(t){e.$set(e.ruleForm,"mobile",t)},expression:"ruleForm.mobile"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"状态",prop:"status"}},[r("el-select",{staticStyle:{width:"340px"},attrs:{placeholder:"请选择状态"},model:{value:e.ruleForm.status,callback:function(t){e.$set(e.ruleForm,"status",t)},expression:"ruleForm.status"}},[r("el-option",{attrs:{label:"禁用",value:"0"}}),e._v(" "),r("el-option",{attrs:{label:"正常",value:"1"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"性别",prop:"sex"}},[r("el-select",{staticStyle:{width:"340px"},attrs:{placeholder:"请选择性别"},model:{value:e.ruleForm.sex,callback:function(t){e.$set(e.ruleForm,"sex",t)},expression:"ruleForm.sex"}},[r("el-option",{attrs:{label:"保密",value:"0"}}),e._v(" "),r("el-option",{attrs:{label:"男",value:"1"}}),e._v(" "),r("el-option",{attrs:{label:"女",value:"2"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"用户身份",prop:"identity"}},[r("el-select",{staticStyle:{width:"340px"},attrs:{placeholder:"请选择身份"},on:{change:e.selectChange},model:{value:e.ruleForm.identity,callback:function(t){e.$set(e.ruleForm,"identity",t)},expression:"ruleForm.identity"}},[r("el-option",{attrs:{label:"会员",value:"1"}}),e._v(" "),r("el-option",{attrs:{label:"非会员",value:"0"}})],1)],1),e._v(" "),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"1"==e.ruleForm.identity,expression:"ruleForm.identity == '1'"}],attrs:{label:"到期时间",prop:"vip_time"}},[r("el-date-picker",{staticStyle:{width:"340px"},attrs:{type:"datetime","value-format":"yyyy-MM-dd",placeholder:"选择日期时间"},model:{value:e.ruleForm.vip_time,callback:function(t){e.$set(e.ruleForm,"vip_time",t)},expression:"ruleForm.vip_time"}})],1),e._v(" "),r("el-form-item",[r("el-button",{on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("返回")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("提交")])],1)],1)],1)},staticRenderFns:[]};var f=r("VU/8")(d,v,!1,function(e){r("6qby")},"data-v-01d5158a",null);t.default=f.exports},CQYC:function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,"",""])}});