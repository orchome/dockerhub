webpackJsonp([22],{B5BO:function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=r("Xxa5"),i=r.n(t),a=r("exGp"),o=r.n(a),l=r("Dd8w"),s=r.n(l),u=r("NYxO"),p={computed:s()({},Object(u.b)({}),{routerType:function(){return this.$route.meta.type}}),watch:{},data:function(){return{ruleForm:{level:"",id:"",expire_time:""},rules:{expire_time:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}]},pickerOptions:{disabledDate:function(n){return n<new Date}}}},created:function(){this.getInfoFn(this.$route.params.id)},methods:{changeLevelFn:function(n){1==n&&(this.ruleForm.expire_time="")},submitForm:function(){if("shop"===this.routerType){if(1==this.ruleForm.level&&(this.ruleForm.expire_time="2000-01-01 00:00:00"),2==this.ruleForm.level&&(""==this.ruleForm.expire_time||null==this.ruleForm.expire_time))return void this.errorMsgFn("请选择到期时间")}else if(0==this.ruleForm.level&&(this.ruleForm.expire_time="2000-01-01 00:00:00"),0!=this.ruleForm.level&&(""==this.ruleForm.expire_time||null==this.ruleForm.expire_time))return void this.errorMsgFn("请选择到期时间");this.putPornUserUpdateFn()},resetForm:function(){"shop"===this.routerType&&this.closeSelectedTag("/pictureShop/gorgeous_pic_app/user_list")},getInfoFn:function(){var n=o()(i.a.mark(function n(e){var r,t;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r="",r="miniapp"===this.routerType?"getMtMiniprogramUserInfo":"getPornUserInfo",n.next=4,this.triggerActionsFn(r,{id:e});case 4:(t=n.sent)&&("miniapp"===this.routerType?this.ruleForm={level:t.data.vip,id:t.data.id,expire_time:t.data.due_at,nickname:t.data.nickname,avatar:t.data.avatar}:("0000-00-00 00:00:00"===t.data.expire_time&&(t.data.expire_time=""),this.ruleForm=t.data));case 6:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}(),putPornUserUpdateFn:function(){var n=o()(i.a.mark(function n(){var e,r;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e=this._.cloneDeep(this.ruleForm),r="","shop"!==this.routerType){n.next=8;break}return n.next=5,this.triggerActionsFn("putPornUserUpdate",{id:e.id,level:e.level,expire_time:e.expire_time});case 5:r=n.sent,n.next=11;break;case 8:return n.next=10,this.triggerActionsFn("putMtMiniprogramUser",{id:e.id,vip:e.level,due_at:e.expire_time});case 10:r=n.sent;case 11:r&&(this.successMsgFn("修改成功！"),this.resetForm());case 12:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()}},m={render:function(){var n=this,e=n.$createElement,r=n._self._c||e;return r("div",{staticClass:"app-container"},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:n.ruleForm,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"用户ID"}},[n._v("\n          "+n._s(n.ruleForm.id)+"\n        ")]),n._v(" "),r("el-form-item",{attrs:{label:"用户昵称"}},[n._v("\n          "+n._s(n.ruleForm.nickname)+"\n        ")]),n._v(" "),r("el-form-item",{attrs:{label:"头  像"}},[r("img",{staticStyle:{width:"100px",height:"100px","border-radius":"50%"},attrs:{src:n.ruleForm.avatar,alt:""}})]),n._v(" "),r("el-form-item",{attrs:{label:"用户等级"}},[r("el-radio-group",{on:{change:n.changeLevelFn},model:{value:n.ruleForm.level,callback:function(e){n.$set(n.ruleForm,"level",e)},expression:"ruleForm.level"}},["shop"==n.routerType?r("el-radio",{attrs:{label:1}},[n._v("普通用户")]):n._e(),n._v(" "),"shop"==n.routerType?r("el-radio",{attrs:{label:2}},[n._v("VIP")]):n._e(),n._v(" "),"miniapp"==n.routerType?r("el-radio",{attrs:{label:0}},[n._v("普通用户")]):n._e(),n._v(" "),"miniapp"==n.routerType?r("el-radio",{attrs:{label:1}},[n._v("月卡")]):n._e(),n._v(" "),"miniapp"==n.routerType?r("el-radio",{attrs:{label:2}},[n._v("季卡")]):n._e(),n._v(" "),"miniapp"==n.routerType?r("el-radio",{attrs:{label:3}},[n._v("半年卡")]):n._e(),n._v(" "),"miniapp"==n.routerType?r("el-radio",{attrs:{label:4}},[n._v("年卡")]):n._e()],1)],1),n._v(" "),r("el-form-item",{attrs:{label:"到期时间"}},[r("el-date-picker",{attrs:{"picker-options":n.pickerOptions,type:"datetime",disabled:"shop"===n.routerType?1==n.ruleForm.level:0==n.ruleForm.level,"value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"选择到期时间"},model:{value:n.ruleForm.expire_time,callback:function(e){n.$set(n.ruleForm,"expire_time",e)},expression:"ruleForm.expire_time"}})],1),n._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:n.submitForm}},[n._v("保存")]),n._v(" "),r("el-button",{on:{click:n.resetForm}},[n._v("取消")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var c=r("VU/8")(p,m,!1,function(n){r("CdX4")},null,null);e.default=c.exports},CdX4:function(n,e,r){var t=r("T3UF");"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);r("rjj0")("44f331ad",t,!0)},T3UF:function(n,e,r){(n.exports=r("FZ+f")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])}});