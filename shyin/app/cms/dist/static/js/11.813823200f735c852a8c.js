webpackJsonp([11],{"1Ghu":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t("Xxa5"),o=t.n(a),r=t("exGp"),l=t.n(r),i=t("RRo+"),s=t.n(i),u=t("Dd8w"),p=t.n(u),c=t("NYxO"),d=t("bOdI"),h=t.n(d),m={computed:{options:function(){var n=[];return this.type.forEach(function(e){switch(e){case 1:n.push({value:"1",label:"书籍"});break;case 2:n.push({value:"2",label:"男频书单"});break;case 3:n.push({value:"3",label:"女频书单"});break;case 4:n.push({value:"4",label:"单个书单"});break;case 5:n.push({value:"5",label:"二级页"});break;case 6:n.push({value:"6",label:"链接"});break;case 7:n.push({value:"7",label:"无指向"});break;case 8:n.push({value:"8",label:"相册"});break;case 9:n.push({value:"9",label:"充值页"})}}),n},showPoint:function(){return this.type.indexOf(7)>-1?""!=this.to_type&&(2!=this.to_type&&3!=this.to_type&&7!=this.to_type&&9!=this.to_type):2!=this.to_type&&3!=this.to_type},placeholder:function(){}},props:{type:{type:Array,default:function(){return[1,2,3,4,5,6,7,8,9]}},toType:{type:String,default:"1"},toValue:{type:String,default:""},client:{type:String,default:""}},watch:{toType:{immediate:!0,handler:function(n){this.to_type=n}},toValue:{immediate:!0,handler:function(n){this.to_value=n,1!=this.to_type&&4!=this.to_type&&5!=this.to_type&&8!=this.to_type||(1==this.to_type?this.remoteMethod(n,"book_id"):4==this.to_type?this.remoteMethod(n,"id"):5==this.to_type?this.remoteMethod(n,"id"):8==this.to_type&&this.remoteMethod(n,"id"))}}},data:function(){return{optionsMore:[],loading:!1,to_type:"2",to_value:""}},methods:{remoteMethod:function(){var n=l()(o.a.mark(function n(e){var t,a,r,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:console.log(this.to_type,"__-query"),t="",a={},n.t0=this.to_type,n.next="1"===n.t0?6:"4"===n.t0?9:"5"===n.t0?12:"8"===n.t0?15:18;break;case 6:return t="getBookList",a=l?h()({page:1},l,e):{page:1,name:e},n.abrupt("break",18);case 9:return t="getBookbarList",a=l?h()({page:1},l,e):{page:1,title:e},n.abrupt("break",18);case 12:return t="getSecondList",a=l?h()({page:1},l,e):{page:1,name:e},n.abrupt("break",18);case 15:return t="getMnqList",a=l?h()({page:1,client:this.client},l,e):{page:1,client:this.client,keyword:e},n.abrupt("break",18);case 18:return n.next=20,this.$store.dispatch(t,a);case 20:200==(r=n.sent).code&&(8==this.to_type?(r.data.forEach(function(n){return n.id=n.id+""}),this.optionsMore=r.data):(r.data.data.forEach(function(n){return n.id=n.id+""}),this.optionsMore=r.data.data));case 22:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}(),changeToTypeFn:function(n){this.to_value="",this.optionsMore=[],this.$emit("update:toValue",""),this.$emit("update:toType",n)},blurFn:function(){this.$emit("update:toValue",this.to_value)},changeToValueFn:function(n){this.$emit("update:toValue",n+"")}}},v={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"pointTo"},[t("el-form-item",{attrs:{label:"指向类型",required:""}},[t("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择指向类型"},on:{change:n.changeToTypeFn},model:{value:n.to_type,callback:function(e){n.to_type=e},expression:"to_type"}},n._l(n.options,function(n){return t("el-option",{key:n.value,attrs:{label:n.label,value:n.value}})}))],1),n._v(" "),n.showPoint?t("el-form-item",{attrs:{required:"",label:"指向目标"}},[6==n.to_type?t("el-input",{attrs:{placeholder:"请输入URL链接"},on:{blur:n.blurFn},model:{value:n.to_value,callback:function(e){n.to_value=e},expression:"to_value"}}):t("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",remote:"",placeholder:"请输入关键词","remote-method":n.remoteMethod,loading:n.loading},on:{change:n.changeToValueFn},model:{value:n.to_value,callback:function(e){n.to_value=e},expression:"to_value"}},n._l(n.optionsMore,function(e){return t("el-option",{key:e.id,attrs:{label:4==n.to_type||8==n.to_type?e.title:e.name,value:e.id}},[t("span",{staticStyle:{float:"left"}},[n._v(n._s(e.id))]),n._v(" "),4==n.to_type||8==n.to_type?t("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[n._v(n._s(e.title))]):t("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[n._v(n._s(e.name))])])}))],1):n._e()],1)},staticRenderFns:[]};var b={components:{PonitTo:t("VU/8")(m,v,!1,function(n){t("Zyl1")},null,null).exports,UploadImg:t("5Vl1").a},computed:p()({pointType:function(){return[8,7]}},Object(c.b)({}),{isEdit:function(){return"edit"==this.$route.meta.type},webPage:function(){var n=[];switch(this.ruleForm.client){case"1":n=[{value:"1",label:"首页"},{value:"2",label:"男频"},{value:"3",label:"女频"}];break;case"2":n=[{value:"4",label:"男频"},{value:"5",label:"女频"},{value:"6",label:"完本"},{value:"7",label:"免费"}];break;case"3":n=[{value:"8",label:"精选"},{value:"9",label:"男生"},{value:"10",label:"女生"},{value:"11",label:"推荐"}];break;case"4":n=[{value:"22",label:"男频"},{value:"23",label:"女频"}];break;case"5":n=[{value:"16",label:"美图首页"}];break;case"6":n=[{value:"17",label:"男频"},{value:"18",label:"女频"},{value:"19",label:"完本"}];break;case"7":n=[{value:"20",label:"男频"},{value:"21",label:"女频"}];break;case"8":n=[{value:"16",label:"美图首页"}];break;default:n=[]}return console.log(this.ruleForm.client,"this.ruleForm.client"),console.log(n,"_pages"),n}}),watch:{},data:function(){return{ruleForm:{time:[],client:"",page:"",point:{to_type:"",to_value:"",to_img:"",resolution:""},sort:"",adhibition:"1"},client_arr:[{label:"PC",value:"1"},{label:"APP",value:"2"},{label:"H5",value:"3"},{label:"小程序",value:"4"},{label:"美图C端H5",value:"5"},{label:"美图小程序",value:"8"}],rules:{title:[{required:!0,message:"请输入图片标题",trigger:"blur"}],client:[{required:!0,message:"请选择客户端",trigger:"change"}],page:[{required:!0,message:"请选择页面",trigger:"change"}],time:[{type:"array",required:!0,message:"请选择有效期",trigger:"change"}],sort:[{validator:function(n,e,t){e||e+""=="0"||t(new Error("序号不能为空")),setTimeout(function(){s()(Number(e))?t():t(new Error("请输入数字值"))},1e3)},trigger:"blur"}]}}},created:function(){this.isEdit&&this.getBannerInfoFn(this.$route.params.id)},methods:{getResolutionFn:function(n){this.ruleForm.point.resolution=n},changeClientFn:function(n){5!=n&&8!=n&&9!=n||(this.ruleForm.point.to_type=""),this.ruleForm.page=""},submitForm:function(n){var e=this;this.$refs[n].validate(function(n){if(!n)return console.log("error submit!!"),!1;if(1!=e.ruleForm.point.to_type&&4!=e.ruleForm.point.to_type&&5!=e.ruleForm.point.to_type&&8!=e.ruleForm.point.to_type&&6!=e.ruleForm.point.to_type||""!=e.ruleForm.point.to_value)if(""==e.ruleForm.point.to_img)e.$message({duration:1500,message:"请上传图片",type:"warning"});else{var t=e._.cloneDeep(e.ruleForm);t.start_time=t.time[0],t.end_time=t.time[1],delete t.time,2!=t.point.to_type&&3!=t.point.to_type&&7!=t.point.to_type&&9!=t.point.to_type||delete t.point.to_value,5==t.client&&delete t.title,e.isEdit?e.putBannerUpdateFn(t):e.putBannerAddFn(t)}else e.$message({duration:1500,message:"请输入正确的指向目标",type:"warning"})})},resetForm:function(n){this.$refs[n].resetFields()},goBackFn:function(){this.resetForm("ruleForm"),this.$router.push({path:"/pictureShop/banner_management/index",query:{edit:"1"}})},putBannerUpdateFn:function(){var n=l()(o.a.mark(function n(e){return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.$store.dispatch("putBannerUpdate",e);case 2:200==n.sent.code&&(this.$message({duration:1500,message:"修改成功",type:"success"}),this.goBackFn());case 4:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}(),putBannerAddFn:function(){var n=l()(o.a.mark(function n(e){return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.$store.dispatch("putBannerAdd",e);case 2:200==n.sent.code&&(this.$message({duration:1500,message:"添加成功",type:"success"}),this.goBackFn());case 4:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}(),getBannerInfoFn:function(){var n=l()(o.a.mark(function n(e){var t;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.$store.dispatch("getBannerInfo",{id:e});case 2:200==(t=n.sent).code&&(this.ruleForm={id:t.data.id,time:[t.data.start_time,t.data.end_time],client:t.data.client+"",adhibition:t.data.adhibition+"",page:t.data.page+"",sort:t.data.sort,title:t.data.title,point:{to_type:t.data.point[0].to_type+"",to_value:t.data.point[0].to_value,to_img:t.data.point[0].to_img,resolution:t.data.point[0].resolution||""}},this.client_arr=this.getClientArr());case 4:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}(),changeType:function(){this.client_arr=this.getClientArr(),this.ruleForm.client="",this.ruleForm.page=""},getClientArr:function(){var n=this.ruleForm.adhibition,e=[];return 1==n?e=[{label:"PC",value:"1"},{label:"APP",value:"2"},{label:"H5",value:"3"},{label:"小程序",value:"4"},{label:"美图C端H5",value:"5"},{label:"美图小程序",value:"8"}]:2==n&&(e=[{label:"客户端APP",value:"6"},{value:"7",label:"小程序"}]),e}}},f={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"app-container"},[t("div",{staticStyle:{width:"600px"}},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:n.ruleForm,rules:n.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"选择客户端",prop:"client"}},[t("el-select",{attrs:{placeholder:"请选择客户端"},on:{change:n.changeClientFn},model:{value:n.ruleForm.client,callback:function(e){n.$set(n.ruleForm,"client",e)},expression:"ruleForm.client"}},[t("el-option",{attrs:{label:"CPS分销",value:"5"}}),n._v(" "),t("el-option",{attrs:{label:"趣撸小程序",value:"8"}}),n._v(" "),t("el-option",{attrs:{label:"小优圈小程序",value:"9"}})],1)],1),n._v(" "),t("el-form-item",{attrs:{label:"选择页面",prop:"page"}},[t("el-select",{attrs:{placeholder:"请选择页面"},model:{value:n.ruleForm.page,callback:function(e){n.$set(n.ruleForm,"page",e)},expression:"ruleForm.page"}},[t("el-option",{key:"1",attrs:{label:"首页",value:"16"}})],1)],1),n._v(" "),t("el-form-item",{attrs:{label:"上传图片",required:""}},[t("upload-img",{attrs:{picture:n.ruleForm.point.to_img},on:{"update:picture":function(e){n.$set(n.ruleForm.point,"to_img",e)},getResolution:n.getResolutionFn}},[n._v("支持JPG、BMP、PNG、建议尺寸 750*299PX")])],1),n._v(" "),t("el-form-item",{attrs:{label:"排序",prop:"sort",required:""}},[t("el-input",{model:{value:n.ruleForm.sort,callback:function(e){n.$set(n.ruleForm,"sort",e)},expression:"ruleForm.sort"}})],1),n._v(" "),t("ponit-to",{attrs:{type:n.pointType,"to-type":n.ruleForm.point.to_type,"to-value":n.ruleForm.point.to_value,client:n.ruleForm.client},on:{"update:toType":function(e){n.$set(n.ruleForm.point,"to_type",e)},"update:toValue":function(e){n.$set(n.ruleForm.point,"to_value",e)}}}),n._v(" "),t("el-form-item",[t("el-button",{on:{click:function(e){n.goBackFn()}}},[n._v("返回")]),n._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(e){n.submitForm("ruleForm")}}},[n._v("保存")])],1)],1)],1)])},staticRenderFns:[]};var _=t("VU/8")(b,f,!1,function(n){t("qSeH")},null,null);e.default=_.exports},"Ch/4":function(n,e,t){(n.exports=t("FZ+f")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},WkQA:function(n,e,t){(n.exports=t("FZ+f")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},Zyl1:function(n,e,t){var a=t("Ch/4");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);t("rjj0")("862c3122",a,!0)},qSeH:function(n,e,t){var a=t("WkQA");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);t("rjj0")("76751902",a,!0)}});