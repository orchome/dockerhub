webpackJsonp([19],{DCvG:function(e,t,n){var i=n("Qxx4");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("38368706",i,!0)},NfMd:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("mvHQ"),a=n.n(i),r=n("Xxa5"),o=n.n(r),s=n("exGp"),l=n.n(s),d=n("8BG5"),c=n("0xDb"),u={name:"add-box",props:{showAdd:{type:Boolean,default:!1},defaultVal:{type:String,default:""},type:{type:Number,default:0}},components:{EmojiAppend:d.a},computed:{},watch:{showAdd:function(e){this.showBox=e,1==this.type?this.form.word=this.defaultVal:this.form.word=""},showBox:function(e){e||(this.$emit("update:showAdd",e),this.$emit("update:defaultVal",""),this.$emit("update:type",0))}},data:function(){return{showBox:!1,form:{word:""},rules:{word:[{required:!0,message:"文字为必选",trigger:"blur"}]},selectWord:"",defaultArray:[{title:"默认文字111",id:1},{title:"默认文字222",id:2}],addType:"1"}},methods:{getDefaultList:function(){var e=this;return l()(o.a.mark(function t(){var n,i,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n={page:1,category:2,active:3,type:1,per_page:100},t.next=3,e.$store.dispatch("getCPSMaterialList",n);case 3:200==(i=t.sent).code&&(a=i.data.data,e.defaultArray=a);case 5:case"end":return t.stop()}},t,e)}))()},submitForm:function(e){var t=this,n=this.form,i=this.addType,a=this.defaultArray,r={};if(0==i){var o=a.find(function(e){return e.id==n.word});r={word:o.title}}else r={word:n.word};r.word.length>60?Object(c.i)("字符不能超过60哦~","warning"):this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.$emit("boxFn",r),t.closeFn()})},selectFaceFn:function(e){var t=e.alt,n=document.getElementById("inserInput").selectionStart,i=this.form.word.split("");i.splice(n,0,t+""),this.form.word=i.join("")},closeFn:function(){this.showBox=!1,this.form.word="",this.addType=1}},mounted:function(){this.getDefaultList()}},p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"add-box"},[n("el-dialog",{attrs:{title:0==e.type?"添加":"编辑",visible:e.showBox,width:"500px","before-close":e.closeFn,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(t){e.showBox=t}}},[n("el-form",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules}},[n("el-form-item",{directives:[{name:"show",rawName:"v-show",value:0==e.addType,expression:"addType==0"}],attrs:{label:"文本",prop:"word"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.word,callback:function(t){e.$set(e.form,"word",t)},expression:"form.word"}},e._l(e.defaultArray,function(e){return n("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),e._v(" "),n("el-button",{on:{click:function(t){e.addType=1,e.form.word=""}}},[e._v("新建")])],1),e._v(" "),n("el-form-item",{directives:[{name:"show",rawName:"v-show",value:1==e.addType,expression:"addType==1"}],attrs:{label:"文本",prop:"word"}},[n("el-input",{staticStyle:{width:"300px"},attrs:{id:"inserInput",maxlength:"60"},model:{value:e.form.word,callback:function(t){e.$set(e.form,"word",t)},expression:"form.word"}},[n("div",{attrs:{slot:"append"},slot:"append"},[n("emoji-append",{on:{select:e.selectFaceFn}})],1)]),e._v(" "),0==e.type?n("el-button",{on:{click:function(t){e.addType=0,e.form.word=""}}},[e._v("系统")]):e._e()],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("提交")])],1)],1)],1)},staticRenderFns:[]},m={name:"templete-view",components:{AddBox:n("VU/8")(u,p,!1,null,null,null).exports},data:function(){return{id:"",isEdit:!1,form:{name:"",list:["章节更新提醒"]},rules:{name:[{required:!0,message:"请填写模板名称",trigger:"blur"}],list:[]},showAdd:!1,type:0,defaultVal:"",currentItem:""}},methods:{getDefaultFn:function(){var e=this;return l()(o.a.mark(function t(){var n,i,a,r,s;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.id,t.next=3,e.$store.dispatch("chapterRemindTempleteDetail",{id:n});case 3:200==(i=t.sent).code&&(a=i.data,r=JSON.parse(a.content),s=r.map(function(e){return e.content}),e.form={list:s,name:a.name});case 5:case"end":return t.stop()}},t,e)}))()},submitForm:function(e){var t=this;this.form.list.length<2?Object(c.i)("请至少添加一条","warning"):this.$refs[e].validate(function(e){e&&(t.isEdit?t.putTemplete():t.postAddTemplete())})},addBoxFn:function(e){var t=e.word,n=this.type,i=this.currentItem;0==n?this.form.list.push(t):this.form.list[i]=t},itemFn:function(e,t){var n=this.form.list,i=t,a=t-1,r=t+1,o=[];o=0==i?this.swapArray(n,i,r):this.swapArray(n,i,a),this.form.list=o},swapArray:function(e,t,n){return e[t]=e.splice(n,1,e[t])[0],e},editFn:function(e,t){this.currentItem=t,this.type=1,this.defaultVal=e,this.showAdd=!0},deleteFn:function(e){this.form.list.splice(e,1)},resetForm:function(e){this.$refs[e].resetFields(),this.closeSelectedTag("/CPSManage/push/chapterRemind?type=template")},postAddTemplete:function(){var e=this;return l()(o.a.mark(function t(){var n,i,r,s,l;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.form,i=n.name,r=n.list,s=r.map(function(e){return{content:e+""}}),l={name:i,content:a()(s)},t.next=5,e.$store.dispatch("chapterRemindTempleteAdd",l);case 5:200===t.sent.code&&(Object(c.i)("添加成功"),e.resetForm("ruleForm"));case 7:case"end":return t.stop()}},t,e)}))()},putTemplete:function(){var e=this;return l()(o.a.mark(function t(){var n,i,r,s,l;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.form,i=n.name,r=n.list,s=r.map(function(e){return{content:e+""}}),l={id:e.id,name:i,content:a()(s)},t.next=5,e.$store.dispatch("chapterRemindTempleteEdit",l);case 5:200===t.sent.code&&(Object(c.i)("修改成功"),e.resetForm("ruleForm"));case 7:case"end":return t.stop()}},t,e)}))()}},created:function(){var e="edit"==this.$route.meta.type,t=this.$route.params.id||"";this.isEdit=e,this.id=t},mounted:function(){this.isEdit&&this.getDefaultFn()}},f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"templete-edit app-container"},[n("el-form",{ref:"ruleForm",attrs:{model:e.form,"label-width":"120px",rules:e.rules}},[n("el-form-item",{attrs:{label:"模板名称",prop:"name"}},[n("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入模板名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"模板预览",prop:"list"}},[n("div",{staticClass:"card-wrap"},[e._l(e.form.list,function(t,i){return n("div",{key:i,staticClass:"list-item flex-box"},[n("div",{staticClass:"left-item ellipse",class:"章节更新提醒"==t?"active":""},[e._v(e._s(t))]),e._v(" "),n("div",{staticClass:"right-item"},[n("i",{directives:[{name:"show",rawName:"v-show",value:0==i&&e.form.list.length>1,expression:"index==0 && form.list.length>1"}],staticClass:"el-icon-arrow-down up-down",on:{click:function(n){e.itemFn(t,i)}}}),e._v(" "),n("i",{directives:[{name:"show",rawName:"v-show",value:0!=i,expression:"index!=0"}],staticClass:"el-icon-arrow-up up-down",on:{click:function(n){e.itemFn(t,i)}}}),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:"章节更新提醒"!=t,expression:"item!='章节更新提醒'"}]},[n("i",{staticClass:"el-icon-edit-outline",on:{click:function(n){e.editFn(t,i)}}}),e._v(" "),n("i",{staticClass:"el-icon-delete",on:{click:function(t){e.deleteFn(i)}}})]),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:"章节更新提醒"==t,expression:"item=='章节更新提醒'"}]},[n("i",{staticClass:"el-icon-edit-outline",staticStyle:{opacity:"0"}}),e._v(" "),n("i",{staticClass:"el-icon-delete",staticStyle:{opacity:"0"}})])])])}),e._v(" "),n("el-button",{directives:[{name:"show",rawName:"v-show",value:e.form.list.length<8,expression:"form.list.length<8"}],staticClass:"add-btn",attrs:{type:"primary"},on:{click:function(t){e.showAdd=!0}}},[e._v("添加文本")])],2)]),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("提交")]),e._v(" "),n("el-button",{on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("返回")])],1)],1),e._v(" "),n("add-box",{attrs:{defaultVal:e.defaultVal,type:e.type,showAdd:e.showAdd},on:{"update:defaultVal":function(t){e.defaultVal=t},"update:type":function(t){e.type=t},"update:showAdd":function(t){e.showAdd=t},boxFn:e.addBoxFn}})],1)},staticRenderFns:[]};var h=n("VU/8")(m,f,!1,function(e){n("DCvG")},"data-v-7e52aae9",null);t.default=h.exports},Qxx4:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"\n.active[data-v-7e52aae9] {\n  color: #409eff;\n}\n.flex-box[data-v-7e52aae9] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n}\n.card-wrap[data-v-7e52aae9] {\n  width: 380px;\n  max-height: 400px;\n  background-color: #fff;\n  border-radius: 20px;\n  border: 1px solid #f2f2f2;\n  padding: 10px;\n}\n.card-wrap .list-item[data-v-7e52aae9] {\n    border-bottom: 1px dotted #ccc;\n    line-height: 30px;\n    font-size: 14px;\n    margin-bottom: 10px;\n}\n.card-wrap .list-item i[data-v-7e52aae9] {\n      font-size: 20px;\n      cursor: pointer;\n}\n.card-wrap .list-item i.up-down[data-v-7e52aae9] {\n        border-radius: 50%;\n        border: 1px solid #000;\n}\n.card-wrap .list-item .left-item[data-v-7e52aae9] {\n      display: inline-block;\n      max-width: 250px;\n}\n.card-wrap .list-item .right-item[data-v-7e52aae9] {\n      display: inline-block;\n}\n.card-wrap .add-btn[data-v-7e52aae9] {\n    text-align: center;\n    margin-left: 150px;\n}\n",""])}});