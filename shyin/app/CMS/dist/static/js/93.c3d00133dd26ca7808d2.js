webpackJsonp([93],{"C5/w":function(e,t,r){var a=r("vLmP");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r("rjj0")("4958aefa",a,!0)},El4r:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("Xxa5"),i=r.n(a),o=r("exGp"),n=r.n(o),s=r("Dd8w"),l=r.n(s),c=r("NYxO"),u={name:"CPSProductListEditer",components:{NumberInput:r("jwbk").a},computed:l()({qiniuUpload:function(){return"http://up.qiniu.com"},qiniuHost:function(){return"http://res.shiyin.net/"}},Object(c.b)({categoryList:"categoryList",categoryArray:"categoryArray"})),watch:{},data:function(){return{uploadData:{},uploadAcceptType:"image/jpeg,image/png",ruleForm:{id:"",name:"",cat_id:[],author_id:"",is_ground:1,serial_status:1,img:"",wechat_img_reply:"",word_count:"",summary:"",recomment:"",price:30,charge_type:1},data:[],rules:{name:[{required:!0,message:"请输入18字以内的小说名称",trigger:"blur"},{min:1,max:18,message:"长度在 1 到 18 个字符",trigger:"blur"}],summary:[{required:!0,message:"请输入20字-300字的描述",trigger:"blur"},{min:20,max:300,message:"长度在 20 到 300 个字符",trigger:"blur"}],cat_id:[{type:"array",required:!0,message:"请选择所属分类",trigger:"change"}]},submitLoding:!1,titleList:[]}},methods:{saveOrEditFn:function(){var e=n()(i.a.mark(function e(t,r,a){var o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a||"cancel"!=a){e.next=5;break}o=this.titleList.findIndex(function(e){return e.id==t.id}),this.data[o].title=this.titleList[o].title,e.next=17;break;case 5:if(""!=t.title){e.next=9;break}this.$message({duration:1500,message:"文本标题不能为空！",type:"warning"}),e.next=17;break;case 9:if(!r){e.next=16;break}return e.next=12,this.$store.dispatch("postCPSMaterialUpdate",{id:t.id,book_id:t.book_id,title:t.title});case 12:200==e.sent.code&&(this.$message({duration:1500,message:"修改标题成功！",type:"success"}),t.edit=!1),e.next=17;break;case 16:t.edit=!0;case 17:case"end":return e.stop()}},e,this)}));return function(t,r,a){return e.apply(this,arguments)}}(),getQiniuTokenFn:function(){var e=n()(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("getQiniuToken");case 2:200==(t=e.sent).code&&(this.uploadData={token:t.token});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),handleCoverImageSuccess:function(e){this.ruleForm.img=e.key},handleNoWatermarkCoverImageSuccess:function(e){this.ruleForm.wechat_img_reply=e.key},beforeAvatarUpload:function(){var e=n()(i.a.mark(function e(t){var r,a,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.size/1024<=100,a=!1,r){e.next=7;break}this.$message.error("上传图片大小不能超过100KB!"),this.uploadData.token="",e.next=12;break;case 7:return e.next=9,this.$store.dispatch("getQiniuToken");case 9:200==(o=e.sent).code?this.uploadData={token:o.token}:this.uploadData.token="",a=200==o.code;case 12:return e.abrupt("return",r&&a);case 13:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),submitForm:function(e){var t=this;""!=this.ruleForm.price?this.$refs[e].validate(function(e){if(!e)return!1;t.submitLoding=!0;var r=t._.cloneDeep(t.ruleForm);r.cat_id=r.cat_id[r.cat_id.length-1],delete r.author_id,delete r.word_count,t.postCPSBookUpdate(r)}):this.warningMsgFn("价格不正确，请重新输入！")},resetForm:function(e){this.$router.push("/CPSManage/product"),this.$refs[e].resetFields()},getCPSBookInfoFn:function(){var e=n()(i.a.mark(function e(t){var r,a,o,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("getCPSBookInfo",{id:t});case 2:if(200==(r=e.sent).code){for(n in a=this.categoryArray.find(function(e){return e.id==r.data.cat_id}),r.data.cat_id=[Number(a.parent_id),a.id],o=r.data,this.ruleForm)this.ruleForm[n]=o[n];r.title.forEach(function(e){e.delete=!1,e.edit=!1}),this.titleList=this._.cloneDeep(r.title),this.data=r.title}case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),postCPSBookUpdate:function(){var e=n()(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("postCPSBookUpdate",t);case 2:200==e.sent.code&&(this.$message({duration:1500,message:"编辑书籍成功！",type:"success"}),this.$router.push("/CPSManage/product")),this.submitLoding=!1;case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),deleteCPSMaterialDelFn:function(){var e=n()(i.a.mark(function e(t){var r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("deleteCPSMaterialDel",{id:t});case 2:200==e.sent.code&&(this.$message({duration:1500,message:"删除成功！",type:"success"}),r=this.data.findIndex(function(e){return e.id==t}),this.data.splice(r,1));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},created:function(){var e=n()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("getCateList");case 2:this.$route.params&&this.$route.params.id&&this.getCPSBookInfoFn(this.$route.params.id);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},d={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",staticStyle:{width:"500px"},attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"小说名称",prop:"name"}},[r("el-input",{attrs:{placeholder:"请输入小说名称"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"描述",prop:"summary"}},[r("el-input",{attrs:{type:"textarea",placeholder:"请输入小说描述",rows:5,resize:"none"},model:{value:e.ruleForm.summary,callback:function(t){e.$set(e.ruleForm,"summary",t)},expression:"ruleForm.summary"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"主编推荐",prop:"recomment"}},[r("el-input",{attrs:{placeholder:"请输入主编推荐"},model:{value:e.ruleForm.recomment,callback:function(t){e.$set(e.ruleForm,"recomment",t)},expression:"ruleForm.recomment"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"所属分类",prop:"cat_id"}},[r("el-cascader",{attrs:{placeholder:"选择书籍分类",options:e.categoryList,filterable:"","show-all-levels":!0},model:{value:e.ruleForm.cat_id,callback:function(t){e.$set(e.ruleForm,"cat_id",t)},expression:"ruleForm.cat_id"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"作者ID"}},[r("span",[e._v(e._s(e.ruleForm.author_id))])]),e._v(" "),r("el-form-item",{attrs:{label:"字数"}},[r("span",[e._v(e._s(e.ruleForm.word_count))])]),e._v(" "),r("el-form-item",{attrs:{label:"小说状态",prop:"is_ground"}},[r("el-radio-group",{model:{value:e.ruleForm.is_ground,callback:function(t){e.$set(e.ruleForm,"is_ground",t)},expression:"ruleForm.is_ground"}},[r("el-radio",{attrs:{label:1}},[e._v("上架")]),e._v(" "),r("el-radio",{attrs:{label:2}},[e._v("下架")]),e._v(" "),r("el-radio",{attrs:{label:3}},[e._v("审核中")])],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"连载状态",prop:"serial_status"}},[r("el-radio-group",{model:{value:e.ruleForm.serial_status,callback:function(t){e.$set(e.ruleForm,"serial_status",t)},expression:"ruleForm.serial_status"}},[r("el-radio",{attrs:{label:1}},[e._v("连载中")]),e._v(" "),r("el-radio",{attrs:{label:2}},[e._v("暂停")]),e._v(" "),r("el-radio",{attrs:{label:3}},[e._v("完本")])],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"收费方式"}},[r("el-radio-group",{model:{value:e.ruleForm.charge_type,callback:function(t){e.$set(e.ruleForm,"charge_type",t)},expression:"ruleForm.charge_type"}},[r("el-radio",{attrs:{label:1}},[e._v("按章收费")]),e._v(" "),r("el-radio",{attrs:{label:2}},[e._v("按本收费")])],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"价格"}},[r("div",{staticClass:"flex-box"},[e._v("\n        "+e._s(1==e.ruleForm.charge_type?"每章":"每本")),r("number-input",{attrs:{value:e.ruleForm.price,placeholder:"请输入价格"},on:{"update:value":function(t){e.$set(e.ruleForm,"price",t)}}}),e._v("书币\n      ")],1)]),e._v(" "),r("el-form-item",{attrs:{label:"封面"}},[r("el-upload",{staticClass:"coverImage-uploader",attrs:{action:e.qiniuUpload,"show-file-list":!1,accept:e.uploadAcceptType,"on-success":e.handleCoverImageSuccess,data:e.uploadData,"before-upload":e.beforeAvatarUpload}},[e.ruleForm.img?r("img",{staticClass:"coverImage",attrs:{src:e.qiniuHost+e.ruleForm.img}}):r("i",{staticClass:"el-icon-plus coverImage-uploader-icon"}),e._v(" "),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("支持JPG、PNG、图片尺寸 150*216 像素、建议尺寸 300*432 像素")])])],1),e._v(" "),r("el-form-item",{attrs:{label:"微信头图"}},[r("el-upload",{staticClass:"coverImage-uploader",attrs:{action:e.qiniuUpload,"show-file-list":!1,accept:e.uploadAcceptType,"on-success":e.handleNoWatermarkCoverImageSuccess,data:e.uploadData,"before-upload":e.beforeAvatarUpload}},[e.ruleForm.wechat_img_reply?r("img",{staticClass:"wxImage",attrs:{src:e.qiniuHost+e.ruleForm.wechat_img_reply}}):r("i",{staticClass:"el-icon-plus wxImage-uploader-icon"}),e._v(" "),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("支持JPG、BMP、PNG、图片尺寸 900*500像素")])])],1),e._v(" "),r("el-form-item",{attrs:{label:"文本标题"}},[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.data,border:"",stripe:""}},[r("el-table-column",{attrs:{prop:"title",label:"标题","min-width":"80",fixed:""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.edit?r("el-input",{attrs:{placeholder:"请输入标题内容"},model:{value:t.row.title,callback:function(r){e.$set(t.row,"title",r)},expression:"scope.row.title"}}):r("span",[e._v("\n              "+e._s(t.row.title)+"\n            ")])]}}])}),e._v(" "),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"mini",type:t.row.edit?"success":"primary"},on:{click:function(r){e.saveOrEditFn(t.row,t.row.edit)}}},[e._v(e._s(t.row.edit?"保存":"编辑"))]),e._v(" "),r("el-popover",{attrs:{placement:"top",width:"100"},model:{value:t.row.delete,callback:function(r){e.$set(t.row,"delete",r)},expression:"scope.row.delete"}},[r("p",[e._v("确认删除该文本标题？")]),e._v(" "),r("div",{staticStyle:{"text-align":"right",margin:"0"}},[r("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){t.row.delete=!1}}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(r){e.deleteCPSMaterialDelFn(t.row.id),t.row.delete=!1}}},[e._v("确定")])],1),e._v(" "),t.row.edit?e._e():r("el-button",{attrs:{slot:"reference",size:"mini",type:"danger"},on:{click:function(e){t.row.delete=!0}},slot:"reference"},[e._v("删除")])],1),e._v(" "),t.row.edit?r("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(r){e.saveOrEditFn(t.row,t.row.edit,"cancel")}}},[e._v("取消")]):e._e()]}}])})],1)],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary",loading:e.submitLoding},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("提交")]),e._v(" "),r("el-button",{on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("返回")])],1)],1)],1)},staticRenderFns:[]};var p=r("VU/8")(u,d,!1,function(e){r("C5/w")},null,null);t.default=p.exports},vLmP:function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,"\n.coverImage-uploader .el-upload {\r\n  border: 1px dashed #d9d9d9;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n  position: relative;\r\n  overflow: hidden;\n}\n.coverImage-uploader .el-upload:hover {\r\n  border-color: #409eff;\n}\n.coverImage-uploader-icon {\r\n  font-size: 28px;\r\n  color: #8c939d;\r\n  width: 150px;\r\n  height: 216px;\r\n  line-height: 216px;\r\n  text-align: center;\n}\n.wxImage-uploader-icon {\r\n  font-size: 28px;\r\n  color: #8c939d;\r\n  width: 225px;\r\n  height: 125px;\r\n  line-height: 125px;\r\n  text-align: center;\n}\n.coverImage {\r\n  width: 150px;\r\n  height: 216px;\r\n  display: block;\n}\n.wxImage {\r\n  width: 225px;\r\n  height: 125px;\r\n  display: block;\n}\r\n",""])}});