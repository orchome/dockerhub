webpackJsonp([9],{"1+hx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("mvHQ"),o=n.n(i),r=n("Xxa5"),s=n.n(r),a=n("exGp"),u=n.n(a),l=n("Dd8w"),c=n.n(l),d=n("NYxO"),p=n("TIfe"),f=n("TAej"),h=n("fZjL"),m=n.n(h),_=n("//Fk"),v=n.n(_),b=n("woOf"),g=n.n(b),F=n("Zrlr"),w=n.n(F),y=n("wxAW"),x=n.n(y),k=function(){function e(){w()(this,e),this.listeners={}}return x()(e,[{key:"on",value:function(e,t){void 0===this.listeners[e]&&(this.listeners[e]=[]),this.listeners[e].push(t)}},{key:"emit",value:function(e){this.listeners[e]&&this.listeners[e].forEach(function(e){return e()})}}]),e}(),E={name:"VueUeditorWrap",data:function(){return{uploadData:{},id:"editor"+Math.random().toString().slice(-10),editor:null,status:0,initValue:"",defaultConfig:{UEDITOR_HOME_URL:"/static/UEditor/",enableAutoSave:!1}}},props:{accept:{type:String,default:"image/jpeg,image/png"},qiniuUpload:{type:String,default:"https://up.qbox.me"},qiniuHost:{type:String,default:"https://res.shiyin.net/"},value:{type:String,default:""},config:{type:Object,default:function(){return{initialFrameHeight:600,toolbars:[["fullscreen","source","undo","redo","qiniuimage","preview"],["bold","italic","underline","fontborder","strikethrough","superscript","subscript","removeformat","formatmatch","autotypeset","blockquote","pasteplain","|","forecolor","backcolor","insertorderedlist","insertunorderedlist","selectall","cleardoc"]]}}},init:{type:Function,default:function(){return function(){}}},destroy:{type:Boolean,default:!1},name:{type:String,default:""}},computed:{mixedConfig:function(){return g()({},this.defaultConfig,this.config)}},methods:{handleSuccess:function(e){var t=this.qiniuHost+e.key;this.editor.execCommand("inserthtml",'<img style="width:100%"  src="'+t+'"/>')},beforeUpload:function(){var e=u()(s.a.mark(function e(){var t,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=!1,this.uploadData.token){e.next=9;break}return e.next=4,this.$store.dispatch("getQiniuToken");case 4:200==(n=e.sent).code?this.uploadData={token:n.token}:this.uploadData.token="",t=200==n.code,e.next=10;break;case 9:t=!0;case 10:return e.abrupt("return",t);case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),registerButton:function(e){var t=e.name,n=e.icon,i=e.tip,o=e.handler,r=e.UE,s=void 0===r?window.UE:r;s.registerUI(t,function(e,t){e.registerCommand(t,{execCommand:function(){o(e,t)}});var r=new s.ui.Button({name:t,title:i,cssRules:"background-image: url("+n+") !important;background-size: cover;",onclick:function(){e.execCommand(t)}});return e.addListener("selectionchange",function(){var n=e.queryCommandState(t);-1===n?(r.setDisabled(!0),r.setChecked(!1)):(r.setDisabled(!1),r.setChecked(n))}),r})},_initEditor:function(){var e=this;this.$nextTick(function(){e.init(),e.editor=window.UE.getEditor(e.id,e.mixedConfig),e.editor.addListener("ready",function(){e.status=2,e.editor.setContent(e.initValue),e.$emit("ready",e.editor),e.editor.addListener("contentChange",function(){e.$emit("input",e.editor.getContent())})})})},_checkDependencies:function(){var e=this;return new v.a(function(t,n){!!window.UE&&!!window.UEDITOR_CONFIG&&0!==m()(window.UEDITOR_CONFIG).length&&!!window.UE.getEditor?t():window.loadEnv?window.loadEnv.on("scriptsLoaded",function(){t()}):(window.loadEnv=new k,e._loadConfig().then(function(){return e._loadCore()}).then(function(){t(),window.loadEnv.emit("scriptsLoaded")}))})},_loadConfig:function(){var e=this;return new v.a(function(t,n){if(window.UE&&window.UEDITOR_CONFIG&&0!==m()(window.UEDITOR_CONFIG).length)t();else{var i=document.createElement("script");i.type="text/javascript",i.src=e.mixedConfig.UEDITOR_HOME_URL+"ueditor.config.js",document.getElementsByTagName("head")[0].appendChild(i),i.onload=function(){window.UE&&window.UEDITOR_CONFIG&&0!==m()(window.UEDITOR_CONFIG).length?t():console.error("加载ueditor.config.js失败,请检查您的配置地址UEDITOR_HOME_URL填写是否正确!\n",i.src)}}})},_loadCore:function(){var e=this;return new v.a(function(t,n){if(window.UE&&window.UE.getEditor)t();else{var i=document.createElement("script");i.type="text/javascript",i.src=e.mixedConfig.UEDITOR_HOME_URL+"ueditor.all.js",document.getElementsByTagName("head")[0].appendChild(i),i.onload=function(){window.UE&&window.UE.getEditor?t():console.error("加载ueditor.all.min.js失败,请检查您的配置地址UEDITOR_HOME_URL填写是否正确!\n",i.src)}}})},_setContent:function(e){e===this.editor.getContent()||this.editor.setContent(e)}},beforeDestroy:function(){this.destroy&&this.editor&&this.editor.destroy&&this.editor.destroy()},watch:{value:{handler:function(e){var t=this;switch(this.status){case 0:this.status=1,this.initValue=e,this._checkDependencies().then(function(){return t._initEditor()});break;case 1:this.initValue=e;break;case 2:this._setContent(e)}},immediate:!0}}},j={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"ueditor"}},[n("script",{attrs:{id:e.id,name:e.name,type:"text/plain"}}),e._v(" "),n("el-upload",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{id:"ueditor-qiniu",action:e.qiniuUpload,"show-file-list":!1,"on-success":e.handleSuccess,accept:e.accept,data:e.uploadData,"before-upload":e.beforeUpload}})],1)},staticRenderFns:[]},C=n("VU/8")(E,j,!1,null,null,null).exports,O={components:{Upload:f.a,UEditor:C},computed:c()({isEdit:function(){return this.$route.fullPath.indexOf("/edit/")>-1},isInfo:function(){return this.$route.fullPath.indexOf("/info/")>-1},isAdd:function(){return this.$route.fullPath.indexOf("/add")>-1},pushScope:function(){return 1==this.ruleForm.push_obj?[{value:"1",label:"个人"},{value:"2",label:"全体"}]:2==this.ruleForm.push_obj?[{value:"1",label:"个人"},{value:"2",label:"全体"}]:3==this.ruleForm.push_obj?[{value:"1",label:"个人"},{value:"2",label:"全体"}]:4==this.ruleForm.push_obj?[{value:"1",label:"个人"},{value:"2",label:"全体"}]:void 0}},Object(d.b)({})),watch:{ruleForm:{handler:function(e){"2"==e.push_scope&&(this.ruleForm.to_id="")},deep:!0}},data:function(){return{visible:!1,pickerOptions:{disabledDate:function(e){return e<new Date}},infoPushObj:{push_obj:"",push_scope:""},options:[],loadingBut:!1,loading:!1,ruleForm:{title:"",push_obj:"2",content:"",from_id:Object(p.c)(),to_id:"",push_time:"",push_scope:"1",file_name:"",file_url:""},rules:{title:[{required:!0,message:"请输入通知标题",trigger:"blur"}],content:[{required:!0,message:"请输入通知内容",trigger:"blur"}]}}},methods:{changePushObjFn:function(){this.ruleForm.content=""},deleteFileFn:function(){this.ruleForm.file_name="",this.ruleForm.file_url=""},successUploadFn:function(e){this.ruleForm.file_name=e.file_name,this.ruleForm.file_url=e.file_url},goBackFn:function(){this.resetForm("ruleForm"),this.$router.go(-1)},remoteMethod:function(e){var t=this;""!==e?(this.loading=!0,setTimeout(function(){t.loading=!1,t.options=t.bookList.filter(function(t){return t.id.indexOf(e)>-1||t.name.indexOf(e)>-1})},200)):this.options=[]},submitForm:function(e){var t=this;this.loadingBut=!0,this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),t.loadingBut=!1,!1;t.isAdd&&t.postMessageCreateFn(t.ruleForm),t.isEdit&&t.postMessageUpdateFn(t.ruleForm)})},resetForm:function(e){this.$refs[e].resetFields()},getMessageInfo:function(){var e=u()(s.a.mark(function e(t){var n,i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("getMessageInfo",{id:t});case 2:200==(n=e.sent).code&&(i="0"==n.data.push_obj?"全部":"1"==n.data.push_obj?"作者":"2"==n.data.push_obj?"读者":"3"==n.data.push_obj?"CPS代理":"内容商",this.infoPushObj={push_obj:i,push_scope:n.data.to_id&&0!=n.data.to_id?"单个"+i:"所有"+i},this.ruleForm={id:n.data.id,title:n.data.title,push_obj:n.data.push_obj,content:n.data.content,from_id:Object(p.c)(),to_id:n.data.to_id,push_time:n.data.push_time,push_scope:n.data.to_id?"1":"2",file_url:n.data.file_url||"",file_name:n.data.file_name||""});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),postMessageCreateFn:function(){var e=u()(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("postMessageCreate",t);case 2:200==e.sent.code&&(this.$message({duration:1500,message:"添加消息成功！",type:"success"}),this.$router.push("/notifyManage/notify"));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),postMessageUpdateFn:function(){var e=u()(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return delete(n=JSON.parse(o()(t))).push_scope,e.next=4,this.$store.dispatch("postMessageUpdate",n);case 4:200==e.sent.code&&(this.$message({duration:1500,message:"修改消息成功！",type:"success"}),this.$router.push("/notifyManage/notify"));case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},created:function(){var e=u()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),mounted:function(){this.isAdd||this.getMessageInfo(this.$route.params.id)}},U={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",[n("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[n("el-form-item",{staticStyle:{width:"500px"},attrs:{label:"通知标题",prop:"title"}},[n("el-input",{attrs:{placeholder:"请输入通知标题",disabled:e.isInfo},model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1),e._v(" "),n("el-form-item",{staticStyle:{width:"500px"},attrs:{label:"推送对象"}},[e.isInfo?n("span",[e._v(e._s(e.infoPushObj.push_obj))]):n("el-radio-group",{on:{change:e.changePushObjFn},model:{value:e.ruleForm.push_obj,callback:function(t){e.$set(e.ruleForm,"push_obj",t)},expression:"ruleForm.push_obj"}},[n("el-radio",{attrs:{label:"2"}},[e._v("读者")]),e._v(" "),n("el-radio",{attrs:{label:"1"}},[e._v("作者")]),e._v(" "),n("el-radio",{attrs:{label:"3"}},[e._v("CPS代理")]),e._v(" "),n("el-radio",{attrs:{label:"4"}},[e._v("内容商")]),e._v(" "),"0"==e.ruleForm.push_obj?n("el-radio",{attrs:{label:"0"}},[e._v("全部")]):e._e()],1)],1),e._v(" "),"0"!=e.ruleForm.push_obj?n("el-form-item",{staticStyle:{width:"500px"},attrs:{label:"推送范围"}},[e.isInfo?n("span",[e._v(e._s(e.infoPushObj.push_scope))]):n("el-radio-group",{model:{value:e.ruleForm.push_scope,callback:function(t){e.$set(e.ruleForm,"push_scope",t)},expression:"ruleForm.push_scope"}},[e._l(e.pushScope,function(t){return[n("el-radio",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label))])]})],2)],1):e._e(),e._v(" "),1==e.ruleForm.push_scope&&"0"!=e.ruleForm.push_obj&&!e.isInfo||e.isInfo&&e.ruleForm.to_id?n("el-form-item",{staticStyle:{width:"500px"},attrs:{label:"对象ID"}},[e.isInfo?n("span",[e._v(e._s(e.ruleForm.to_id))]):n("el-input",{attrs:{placeholder:"请输入对象ID"},model:{value:e.ruleForm.to_id,callback:function(t){e.$set(e.ruleForm,"to_id",t)},expression:"ruleForm.to_id"}})],1):e._e(),e._v(" "),n("el-form-item",{staticStyle:{"min-width":"500px"},attrs:{label:"推送时间"}},[n("el-date-picker",{staticStyle:{width:"400px"},attrs:{type:"datetime",placeholder:"选择推送时间,不选择默认立即发送","picker-options":e.pickerOptions,"value-format":"yyyy-MM-dd HH:mm:ss",disabled:e.isInfo},model:{value:e.ruleForm.push_time,callback:function(t){e.$set(e.ruleForm,"push_time",t)},expression:"ruleForm.push_time"}})],1),e._v(" "),n("el-form-item",{staticStyle:{"min-width":"500px","margin-top":"30px"},attrs:{label:"通知内容",prop:"content"}},[1==e.ruleForm.push_obj||2==e.ruleForm.push_obj||3==e.ruleForm.push_obj||4==e.ruleForm.push_obj?n("div",{staticStyle:{width:"600px"}},[e.isInfo?e._e():n("u-editor",{attrs:{destroy:!0},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}}),e._v(" "),e.isInfo?n("div",{domProps:{innerHTML:e._s(e.ruleForm.content)}}):e._e()],1):e._e(),e._v(" "),0==e.ruleForm.push_obj?n("el-input",{attrs:{type:"textarea",rows:5,resize:"none",disabled:e.isInfo},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}}):e._e()],1),e._v(" "),n("el-form-item",{attrs:{label:"附件"}},[this.ruleForm.file_name||e.isInfo?e._e():n("el-button",{on:{click:function(t){e.visible=!0}}},[e._v("点击添加")]),e._v(" "),this.ruleForm.file_name&&!e.isInfo?n("span",{staticClass:"hover-point",on:{click:function(t){e.visible=!0}}},[e._v(e._s(this.ruleForm.file_name))]):e._e(),e._v(" "),this.ruleForm.file_name&&e.isInfo?n("a",{staticClass:"hover-point",attrs:{target:"_blank",href:this.ruleForm.file_url+".xls"}},[e._v(e._s(this.ruleForm.file_name))]):e._e(),e._v(" "),this.ruleForm.file_name&&!e.isInfo?n("el-button",{attrs:{type:"danger"},on:{click:e.deleteFileFn}},[e._v("删除附件")]):e._e()],1),e._v(" "),e.isInfo?e._e():n("el-form-item",[n("el-button",{attrs:{type:"primary",loading:e.loadingBut},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("提交")]),e._v(" "),n("el-button",{on:{click:e.goBackFn}},[e._v("返回")])],1)],1)],1),e._v(" "),n("upload",{attrs:{visible:e.visible,download:!1,"upload-by-qiniu":"",name:"file","only-one":""},on:{"update:visible":function(t){e.visible=t},success:e.successUploadFn}},[e._v("仅允许上传xls结尾的文件")])],1)},staticRenderFns:[]};var I=n("VU/8")(O,U,!1,function(e){n("4SWc")},null,null);t.default=I.exports},"4SWc":function(e,t,n){var i=n("o8Lz");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("0b842a75",i,!0)},Zrlr:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},o8Lz:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"\n.hover-point:hover {\r\n\tcursor: pointer;\r\n\tcolor: #409eff;\n}\r\n",""])},wxAW:function(e,t,n){"use strict";t.__esModule=!0;var i,o=n("C4MV"),r=(i=o)&&i.__esModule?i:{default:i};t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,r.default)(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}()}});