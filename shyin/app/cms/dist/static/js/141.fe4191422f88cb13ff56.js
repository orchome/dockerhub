webpackJsonp([141],{"7nIw":function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,"\n#accounts-special-edit .form-type-checkout {\n  margin-bottom: 20px;\n}\n#accounts-special-edit .cps-images-item {\n  width: 130px;\n  height: 80px;\n}\n#accounts-special-edit .level-radio-label {\n  width: 105px;\n  display: inline-block;\n  text-align: right;\n  margin-bottom: 18px;\n  padding-right: 12px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n#accounts-special-edit .dialog-footer {\n  width: 500px;\n  text-align: right;\n}\n#accounts-special-edit .logo-upload-box {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n#accounts-special-edit .logo-upload-box .logo-upload-des {\n  font-size: 13px;\n  color: #999;\n  line-height: 1.2;\n  margin-left: 20px;\n  margin-top: 10px;\n}\n",""])},WNhY:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("Xxa5"),a=r.n(o),i=r("exGp"),l=r.n(i),n=r("mvHQ"),s=r.n(n),m=r("Dd8w"),u=r.n(m),c=r("NYxO"),d=r("5Vl1"),p=r("Vjby"),g=r("0xDb"),f={components:{UploadImg:d.a,UrlList:p.a},computed:u()({},Object(c.b)({}),{multipleDeleteVisible:function(){return 0==this.multipleSelect.length&&(this.multipleDelete=!1),0===this.multipleSelect.length}}),watch:{formType:function(e){console.log(e);var t=this.ruleForm.params;this.ruleForm.params=t}},data:function(){var e=function(e,t,r){""===t?"domain"==e.field?r(new Error("请输入B端后台域名")):"transfers_domain"==e.field?r(new Error("请输入中转域名")):"floor_domain"==e.field?r(new Error("请输入落地域名")):r(new Error("请输入域名")):/^(?=^.{3,255}$)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/.test(t)?r():r(new Error("请输入正确的域名"))};return{formType:1,ruleForm:{username:"",domain:"",backgroundColor:1,backgroundImg:1,api:"",transfers_domain:"",floor_domain:"",logo:"",use_common:!1,params:{}},ruleForm2:{id:"",name:"",phone:"",weixin:"",weixin_qrcode:""},logoUploadRule:{maxSize:2097152,type:["png","bmp","jpeg","jpg","gif","image/png","image/bmp","image/jpeg","image/jpg","image/gif"]},rules:{username:[{required:!0,validator:function(e,t,r){if(t&&""!==t){for(var o=0,a=0;a<t.length;a++)t.charCodeAt(a)>127||94==t.charCodeAt(a)?o+=2:o++;o>12?r(new Error("平台名称最大长度12为个字符，汉字及其符号为两个字符")):r()}else r(new Error("请输入平台名称"))},trigger:"blur"}],domain:[{required:!0,validator:e,trigger:"blur"}],transfers_domain:[{required:!0,validator:e,trigger:"blur"}],floor_domain:[{required:!0,validator:e,trigger:"blur"}]},rules2:{name:[{required:!0,message:"请输入联系人名称",trigger:"blur"}],phone:[{required:!0,validator:function(e,t,r){t&&/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(t)?r():r(new Error("请输入正确的11位手机号码"))},trigger:"blur"}],weixin:[{required:!0,message:"请输入微信号",trigger:"blur"}],weixin_qrcode:[{required:!0,message:"请选择微信二维码",trigger:"blur"}]},CpsbackgroundImgList:g.l,backgroundColorList:g.m}},created:function(){},mounted:function(){this.getSpecialAgent(),this.getSpecialKefu()},methods:{getSpecialAgent:function(){var e=this,t=this.$route.params.id;this.$store.dispatch("getSpecialAgent",{id:t}).then(function(t){if(200==t.code){var r=t.data,o=JSON.parse(t.data.domain.material),a=Object(g.j)(r.mid_menu),i=Object(g.j)(r.mid_promote),l=r.mid_msg,n=Object(g.j)(r.mid_activity),s=Object(g.j)(r.fall_menu),m=Object(g.j)(r.fall_promote),u=r.fall_msg,c=Object(g.j)(r.fall_activity),d=Object(g.j)(r.fall_pay),p={};0==l.length&&(l=[{domain:"",flag:""}]),0==u.length&&(u=[{domain:"",flag:""}]),p.params={mid_menu:a,mid_promote:i,mid_msg:l,mid_activity:n,fall_menu:s,fall_promote:m,fall_msg:u,fall_activity:c,fall_pay:d},p.use_common=Boolean(r.domain.use_common),p.username=t.data.username,p.domain=t.data.domain.domain,p.floor_domain=t.data.domain.floor_domain,p.transfers_domain=t.data.domain.transfers_domain,p.api=t.data.domain.api,p.backgroundColor=o.colorIdx,p.backgroundImg=o.imgIdx,p.logo=o.logo?o.logo.split("http://res.shiyin.net/")[1]:"",e.ruleForm=p}})},getSpecialKefu:function(){var e=this,t=this.$route.params.id;this.$store.dispatch("getSpecialKefu",{id:t}).then(function(t){if(200==t.code&&t.data){var r={id:t.data.id||e.$route.params.id,name:t.data.name,phone:t.data.phone,weixin:t.data.weixin,weixin_qrcode:t.data.weixin_qrcode?t.data.weixin_qrcode.split("http://res.shiyin.net/")[1]:""};e.ruleForm2=r}})},formTypeChange:function(e){console.log(e)},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;1==t.formType?t.upDateAccount():2==t.formType&&t.editKeFu()})},upDateAccount:function(){this._.cloneDeep(this.ruleForm).use_common?this.putUpdateSpecialAgent():this.putUpdateSpecialAgentUseCommon()},putUpdateSpecialAgentUseCommon:function(){var e=this,t=this._.cloneDeep(this.ruleForm),r=this.$refs.urlList.urlAll,o=this.$refs.urlList.getAll(),a=Object(g.f)(r.mid_menu),i=Object(g.f)(r.mid_promote),l=r.mid_msg,n=Object(g.f)(r.mid_activity),m=Object(g.f)(r.fall_menu),u=Object(g.f)(r.fall_promote),c=r.fall_msg,d=Object(g.f)(r.fall_activity),p=Object(g.f)(r.fall_pay);if(t.use_common=0,this.$refs.urlList.hasSame())if(t.mid_menu=s()(a),t.mid_promote=s()(i),t.mid_msg=s()(l),t.mid_activity=s()(n),t.fall_menu=s()(m),t.fall_promote=s()(u),t.fall_msg=s()(c),t.fall_activity=s()(d),t.fall_pay=s()(p),t.unique_array=s()(o),t.logo){t.id=this.$route.params.id;var f={imgIdx:t.backgroundImg,colorIdx:t.backgroundColor,logo:"http://res.shiyin.net/"+t.logo,backgroundImg:1==this.ruleForm.backgroundImg?"default":this.CpsbackgroundImgList[this.ruleForm.backgroundImg-1],backgroundColor:1==this.ruleForm.backgroundColor?"default":this.backgroundColorList[this.ruleForm.backgroundColor-1]};t.material=s()(f),t.level=this.level,delete t.backgroundColor,delete t.backgroundImg,delete t.logo,delete t.params,this.$store.dispatch("putUpdateSpecialAgent",t).then(function(t){200==t.code&&(e.$message({duration:1500,message:"编辑成功！",type:"success"}),setTimeout(function(){e.closeSelectedTag("/CPSManage/accounts")},1500))})}else this.$message({message:"请上传B端logo！",type:"warning"})},putUpdateSpecialAgent:function(){var e=this,t=this._.cloneDeep(this.ruleForm);if(t.logo){t.id=this.$route.params.id,t.use_common=1;var r={imgIdx:t.backgroundImg,colorIdx:t.backgroundColor,logo:"http://res.shiyin.net/"+t.logo,backgroundImg:1==this.ruleForm.backgroundImg?"default":this.CpsbackgroundImgList[this.ruleForm.backgroundImg-1],backgroundColor:1==this.ruleForm.backgroundColor?"default":this.backgroundColorList[this.ruleForm.backgroundColor-1]};t.material=s()(r),t.level=this.level,delete t.backgroundColor,delete t.backgroundImg,delete t.logo,delete t.params,this.$store.dispatch("putUpdateSpecialAgent",t).then(function(t){200==t.code&&(e.$message({duration:1500,message:"编辑成功！",type:"success"}),setTimeout(function(){e.closeSelectedTag("/CPSManage/accounts")},1500))})}else this.$message({message:"请上传B端logo！",type:"warning"})},editKeFu:function(){var e=l()(a.a.mark(function e(){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=this.ruleForm2.weixin_qrcode){e.next=3;break}return this.$message({message:"请上传对应的微信二维码！",type:"warning"}),e.abrupt("return");case 3:return(t=this._.cloneDeep(this.ruleForm2)).weixin_qrcode="http://res.shiyin.net/"+t.weixin_qrcode,e.next=7,this.$store.dispatch("putSpecialKefu",t);case 7:this.$message({message:"修改成功！",type:"success"}),this.closeSelectedTag("/CPSManage/accounts");case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),inappropriate:function(e){"maxSize"==e.type&&this.$message({message:"图片太大，请选择合适图片",type:"warning"}),"type"==e.type&&this.$message({message:"图片格式不对，请选择合适图片",type:"warning"})},resetForm:function(e){this.$refs[e].resetFields(),this.closeSelectedTag("/CPSManage/accounts")}}},b={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container",attrs:{id:"accounts-special-edit"}},[r("el-radio-group",{staticClass:"form-type-checkout",model:{value:e.formType,callback:function(t){e.formType=t},expression:"formType"}},[r("el-radio-button",{attrs:{label:1}},[e._v("账号设置")]),e._v(" "),r("el-radio-button",{attrs:{label:2}},[e._v("客服信息")])],1),e._v(" "),r("el-form",{directives:[{name:"show",rawName:"v-show",value:1==e.formType,expression:"formType == 1"}],ref:"ruleForm",staticClass:"demo-ruleForm",staticStyle:{width:"500px"},attrs:{model:e.ruleForm,rules:e.rules,"label-width":"105px"}},[r("el-alert",{staticStyle:{width:"calc(100% - 30px)","margin-left":"28px","margin-bottom":"15px"},attrs:{title:"通用域名配置",type:"warning",closable:!1}}),e._v(" "),r("el-form-item",{attrs:{label:"平台名称",prop:"username"}},[r("el-input",{attrs:{placeholder:"请输入平台名称"},model:{value:e.ruleForm.username,callback:function(t){e.$set(e.ruleForm,"username",t)},expression:"ruleForm.username"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"B端后台域名",prop:"domain"}},[r("el-input",{attrs:{placeholder:"请输入B端后台域名"},model:{value:e.ruleForm.domain,callback:function(t){e.$set(e.ruleForm,"domain",t)},expression:"ruleForm.domain"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"API",prop:"api"}},[r("el-input",{attrs:{placeholder:"请输入API"},model:{value:e.ruleForm.api,callback:function(t){e.$set(e.ruleForm,"api",t)},expression:"ruleForm.api"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"通用域名池"}},[r("el-switch",{model:{value:e.ruleForm.use_common,callback:function(t){e.$set(e.ruleForm,"use_common",t)},expression:"ruleForm.use_common"}})],1),e._v(" "),r("url-list",{directives:[{name:"show",rawName:"v-show",value:0==e.ruleForm.use_common,expression:"ruleForm.use_common==false"}],ref:"urlList",attrs:{params:e.ruleForm.params}}),e._v(" "),r("el-form-item",{attrs:{label:"主题色",prop:"backgroundColor"}},[r("el-select",{model:{value:e.ruleForm.backgroundColor,callback:function(t){e.$set(e.ruleForm,"backgroundColor",t)},expression:"ruleForm.backgroundColor"}},e._l(e.backgroundColorList,function(e){return r("el-option",{key:e.id,attrs:{label:e.label,value:e.id}})}))],1),e._v(" "),r("el-form-item",{attrs:{prop:"backgroundImg",label:"B端登录背景"}},[r("el-radio-group",{model:{value:e.ruleForm.backgroundImg,callback:function(t){e.$set(e.ruleForm,"backgroundImg",t)},expression:"ruleForm.backgroundImg"}},e._l(e.CpsbackgroundImgList,function(e,t){return r("el-radio",{key:t,staticStyle:{"margin-bottom":"20px"},attrs:{label:t+1}},[r("img",{staticClass:"cps-images-item",attrs:{src:e,alt:""}})])}))],1),e._v(" "),r("el-form-item",{attrs:{label:"B端logo",prop:"logo"}},[r("div",{staticClass:"bar flex logo-upload-box"},[r("upload-img",{attrs:{picture:e.ruleForm.logo,rule:e.logoUploadRule},on:{"update:picture":function(t){e.$set(e.ruleForm,"logo",t)},inappropriate:e.inappropriate}}),e._v(" "),r("div",{staticClass:"logo-upload-des"},[e._v("\n\t\t\t\t\t图片格式必须为:\n\t\t\t\t\t"),r("br"),e._v("png,bmp,jpeg,jpg,gif;\n\t\t\t\t\t"),r("br"),e._v("不可大于2M；建议使用png格式图片，以保持最佳效果；\n\t\t\t\t\t"),r("br"),e._v("建议图片尺寸为144px*144px\n\t\t\t\t")])],1)]),e._v(" "),r("div",{staticClass:"dialog-footer"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("提交")]),e._v(" "),r("el-button",{on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("返回")])],1)],1),e._v(" "),r("el-form",{directives:[{name:"show",rawName:"v-show",value:2==e.formType,expression:"formType == 2"}],ref:"ruleForm2",staticClass:"demo-ruleForm",staticStyle:{width:"500px"},attrs:{model:e.ruleForm2,rules:e.rules2,"label-width":"105px"}},[r("el-form-item",{attrs:{label:"联系人",prop:"name"}},[r("el-input",{staticStyle:{width:"200px"},model:{value:e.ruleForm2.name,callback:function(t){e.$set(e.ruleForm2,"name",t)},expression:"ruleForm2.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"手机号码",prop:"phone"}},[r("el-input",{staticStyle:{width:"200px"},model:{value:e.ruleForm2.phone,callback:function(t){e.$set(e.ruleForm2,"phone",t)},expression:"ruleForm2.phone"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"微信号",prop:"weixin"}},[r("el-input",{staticStyle:{width:"200px"},model:{value:e.ruleForm2.weixin,callback:function(t){e.$set(e.ruleForm2,"weixin",t)},expression:"ruleForm2.weixin"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"微信二维码",prop:"weixin_qrcode",required:""}},[r("upload-img",{attrs:{picture:e.ruleForm2.weixin_qrcode},on:{"update:picture":function(t){e.$set(e.ruleForm2,"weixin_qrcode",t)}}})],1),e._v(" "),r("div",{staticClass:"dialog-footer"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm2")}}},[e._v("提交")]),e._v(" "),r("el-button",{on:{click:function(t){e.resetForm("ruleForm2")}}},[e._v("返回")])],1)],1)],1)},staticRenderFns:[]};var h=r("VU/8")(f,b,!1,function(e){r("kuPq")},null,null);t.default=h.exports},kuPq:function(e,t,r){var o=r("7nIw");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r("rjj0")("0d75596f",o,!0)}});