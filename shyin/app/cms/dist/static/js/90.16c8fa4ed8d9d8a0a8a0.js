webpackJsonp([90],{X1FB:function(t,e,r){var i=r("maSI");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);r("rjj0")("02a7b90f",i,!0)},maSI:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"\n.checkmnq .mnq-upload-li-box:first-child {\n  margin-bottom: 0;\n  margin-right: 8px;\n}\n",""])},ryij:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r("Xxa5"),a=r.n(i),n=r("exGp"),s=r.n(n),o=r("Dd8w"),c=r.n(o),l=r("NYxO"),p={components:{MnqUploadImg:r("pQT1").a},computed:c()({},Object(l.b)({}),{pageType:function(){return this.$route.meta.type}}),watch:{},data:function(){return{cardType:"ios",ruleForm:{status:"0",pic:"",product_type:"4"},miniapp:{},miniappClassify:"",loading:!1}},created:function(){this.getMtMiniprogramExamine(),this.getPornConfInfo()},methods:{getMtMiniprogramExamine:function(){var t=s()(a.a.mark(function t(){var e;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.triggerActionsFn("getMtMiniprogramExamine",{product_type:4,cat_id:this.miniappClassify,client:2});case 2:(e=t.sent)&&(this.ruleForm.status=e.data.status,this.ruleForm.id=e.data.id);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),handleClick:function(t){this.ruleForm.product_type=t.name,3!=t.name?this.getPornConfInfo():this.getMtMiniprogramExamine()},miniAppClassifyChange:function(){this.getMtMiniprogramExamine(),this.getPornConfInfo()},postPornConfUpload:function(){var t=s()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=this.ruleForm.pic){t.next=3;break}return this.$message({message:"请上传图片",type:"error"}),t.abrupt("return");case 3:return t.next=5,this.triggerActionsFn("postPornConfUpload",{pic:this.ruleForm.pic,product_type:this.ruleForm.product_type,cat_id:4==this.ruleForm.product_type?this.miniappClassify:""});case 5:this.$message({message:"保存图片成功",type:"success"});case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),getPornConfInfo:function(){var t=s()(a.a.mark(function t(){var e,r,i;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.triggerActionsFn("getPornConfInfo",{type:"audit",product_type:this.ruleForm.product_type,cat_id:4==this.ruleForm.product_type?this.miniappClassify:""});case 3:e=t.sent,this.loading=!1,e&&(4!=this.ruleForm.product_type&&(this.ruleForm.status=e.data.check[0].status),r=this._.cloneDeep(e.data),i=[],r.photo.forEach(function(t){i.push(t.pic)}),this.ruleForm.pic=i.toString());case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),changeStatusFn:function(){var t=s()(a.a.mark(function t(e){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r="",4==this.ruleForm.product_type){t.next=7;break}return t.next=4,this.triggerActionsFn("putPornConf",{id:1,type:"audit",status:e,product_type:this.ruleForm.product_type});case 4:r=t.sent,t.next=10;break;case 7:return t.next=9,this.triggerActionsFn("patchMtMiniprogramExamineStatus",{id:this.ruleForm.id,status:e,client:2});case 9:r=t.sent;case 10:r?this.$message({type:"success",message:"修改成功！"}):4!=this.ruleForm.product_type?this.getPornConfInfo():this.getMtMiniprogramExamine();case 11:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),resetForm:function(){this.closeSelectedTag("/pictureShop/index")}}},u={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-container"},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"审核开关"}},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":1,"inactive-value":0},on:{change:t.changeStatusFn},model:{value:t.ruleForm.status,callback:function(e){t.$set(t.ruleForm,"status",e)},expression:"ruleForm.status"}})],1),t._v(" "),4==t.ruleForm.product_type?r("el-form-item",{attrs:{label:"分类"}},[r("el-radio-group",{on:{change:t.miniAppClassifyChange},model:{value:t.miniappClassify,callback:function(e){t.miniappClassify=e},expression:"miniappClassify"}},[r("el-radio",{attrs:{label:""}},[t._v("全部")]),t._v(" "),r("el-radio",{attrs:{label:"1"}},[t._v("树林")]),t._v(" "),r("el-radio",{attrs:{label:"2"}},[t._v("星空")]),t._v(" "),r("el-radio",{attrs:{label:"3"}},[t._v("城市")]),t._v(" "),r("el-radio",{attrs:{label:"4"}},[t._v("田园")]),t._v(" "),r("el-radio",{attrs:{label:"5"}},[t._v("雪山")]),t._v(" "),r("el-radio",{attrs:{label:"6"}},[t._v("卡通")]),t._v(" "),r("el-radio",{attrs:{label:"7"}},[t._v("创意")])],1)],1):t._e(),t._v(" "),r("el-form-item",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{label:"审核页面图片上传"}},[r("MnqUploadImg",{staticClass:"checkmnq",attrs:{picture:t.ruleForm.pic,"list-type":"picture-card-drag","class-name":"list",mnq:"",multiple:"","edit-visible":!1},on:{"update:picture":function(e){t.$set(t.ruleForm,"pic",e)}}})],1),t._v(" "),r("el-form-item",[4!=t.ruleForm.product_type||t.miniappClassify?r("div",{staticStyle:{display:"inline-block"}},[r("el-button",{attrs:{type:"primary"},on:{click:t.postPornConfUpload}},[t._v("保存图片")])],1):[r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"分类为全部时，不能保存图片",placement:"bottom",disabled:!1}},[r("div",{staticStyle:{display:"inline-block"}},[r("el-button",{attrs:{disabled:"",type:"primary"}},[t._v("保存图片")])],1)])]],2)],1)],1)},staticRenderFns:[]};var m=r("VU/8")(p,u,!1,function(t){r("X1FB")},null,null);e.default=m.exports}});