webpackJsonp([174],{SHpv:function(e,t,a){var i=a("ZeHL");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("e6166a8e",i,!0)},ZeHL:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.dialog-wrap > .el-dialog {\r\n  width: 680px;\n}\r\n",""])},bLHE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("Xxa5"),s=a.n(i),r=a("exGp"),o=a.n(r),n=a("Dd8w"),l=a.n(n),c=a("NYxO"),p={computed:l()({qiniuUpload:function(){return"http://up.qiniu.com"}},Object(c.b)({categorySelect:"categorySelect",categoryArray:"categoryArray",cpsMaterialPictureList:"cpsMaterialPictureList"}),{categorySelectList:function(){var e=this._.cloneDeep(this.categorySelect);return e[0]&&e[0].label&&(e[0].label="全部分类"),e}}),watch:{dialogFormVisible:function(e){e||(this.$refs.upload.clearFiles(),this.form.position="1",this.form.active="1")}},data:function(){return{selectedCategoryOptions:[0],uploadAcceptType:"image/jpeg,image/png",dialogImageUrl:"",dialogVisible:!1,uploadData:{},data:[{id:1}],loading:!1,dialogFormVisible:!1,form:{position:"1",active:"1",selectedCategoryOptions:[0],pic:[]},params:{page:1,category:"1",cat_id:"",position:"0",active:"0",selectedCategoryOptions:[0],dataType:1,type:1},positions:[{id:"0",name:"全部"},{id:"1",name:"头图"},{id:"2",name:"次图"}],actives:[{id:"0",name:"全部"},{id:"1",name:"通用"},{id:"2",name:"活动"}],qiniuHost:""}},created:function(){var e=o()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("getCateList");case 2:this.getCPSMaterialListFn();case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),methods:{postCPSMaterialCreateFn:function(){var e=o()(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("postCPSMaterialCreate",t);case 2:200==e.sent.code&&(this.$message({message:"添加图片成功！",type:"success",duration:1500}),this.dialogFormVisible=!1,this.params.page=1,this.params.cat_id=t.cat_id,this.params.selectedCategoryOptions=this._.cloneDeep(this.form.selectedCategoryOptions),this.getCPSMaterialListFn());case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),submitFn:function(){if(0==this.form.pic.length)this.$message({message:"请选择图片",type:"warning",duration:1500});else{var e=this._.cloneDeep(this.form);e.pic=e.pic.toString(),delete e.selectedCategoryOptions,this.postCPSMaterialCreateFn(e)}},changeFormBookCategoryFn:function(e){this.form.cat_id=e[e.length-1]},changeActiveFn:function(e){1==e?(this.form.selectedCategoryOptions=[0],this.form.cat_id="0"):(this.form.selectedCategoryOptions=[0],this.form.cat_id="")},changeBookCategoryFn:function(e){this.params.page=1,this.params.cat_id=e[e.length-1],this.form.selectedCategoryOptions=e,this.form.cat_id=e[e.length-1],this.getCPSMaterialListFn()},beforePicUpload:function(){var e=o()(s.a.mark(function e(t){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.size/1024<=100){e.next=7;break}return this.$message.error("上传封面大小不能超过100KB!"),this.uploadData.token="",e.abrupt("return",!1);case 7:return e.next=9,this.$store.dispatch("getQiniuToken");case 9:if(200!=(a=e.sent).code){e.next=16;break}return this.qiniuHost=a.host,this.uploadData={token:a.token},e.abrupt("return",!0);case 16:return this.uploadData.token="",e.abrupt("return",!1);case 18:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),handleSuccessFn:function(e,t,a){var i=this;this.form.pic=[],a.forEach(function(e){"success"==e.status&&i.form.pic.push(e.response.key)})},handleRemove:function(e,t){var a=this;this.form.pic=[],t.forEach(function(e){"success"==e.status&&a.form.pic.push(e.response.key)})},deleteCPSMaterialDelFn:function(){var e=o()(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("deleteCPSMaterialDel",{id:t});case 2:200==e.sent.code&&(this.$message({message:"删除素材成功",type:"success",duration:1500}),this.getCPSMaterialListFn());case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},changeSelectFn:function(){this.params.page=1,this.getCPSMaterialListFn()},handleCurrentChange:function(e){this.params.page=e,this.getCPSMaterialListFn()},getCPSMaterialListFn:function(){var e=o()(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return delete(t=this._.cloneDeep(this.params)).selectedCategoryOptions,this.loading=!0,e.next=5,this.$store.dispatch("getCPSMaterialList",t);case 5:this.loading=!1;case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},mounted:function(){}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"bar flex"},[a("div",{staticClass:"flex-left"},[a("label",{staticClass:"radio-label",staticStyle:{"padding-left":"0"}},[e._v("图片位置")]),e._v(" "),a("el-select",{staticStyle:{width:"140px"},attrs:{placeholder:"请选择图片位置"},on:{change:e.changeSelectFn},model:{value:e.params.position,callback:function(t){e.$set(e.params,"position",t)},expression:"params.position"}},e._l(e.positions,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v(" "),a("label",{staticClass:"radio-label"},[e._v("类型")]),e._v(" "),a("el-select",{staticStyle:{width:"140px"},attrs:{placeholder:"请选择图片类型"},on:{change:e.changeSelectFn},model:{value:e.params.active,callback:function(t){e.$set(e.params,"active",t)},expression:"params.active"}},e._l(e.actives,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v(" "),a("label",{staticClass:"radio-label"},[e._v("书籍分类")]),e._v(" "),a("el-cascader",{attrs:{placeholder:"选择书籍分类",options:e.categorySelectList,filterable:"","show-all-levels":!1},on:{change:e.changeBookCategoryFn},model:{value:e.params.selectedCategoryOptions,callback:function(t){e.$set(e.params,"selectedCategoryOptions",t)},expression:"params.selectedCategoryOptions"}})],1),e._v(" "),a("div",{staticClass:"flex-right"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("新增")])],1)]),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.cpsMaterialPictureList.data,border:"",stripe:""}},[a("el-table-column",{attrs:{prop:"id",label:"ID","min-width":"20",fixed:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"_pic",label:"图片",width:"100"},scopedSlots:e._u([{key:"default",fn:function(e){return[e.row.pic?a("img",{staticStyle:{height:"100px"},attrs:{src:e.row._pic,alt:""}}):a("span")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"_position",label:"图片位置",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"_active",label:"类型","min-width":"120","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"_cat_name",label:"书籍分类","min-width":"120","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"created_at",label:"上传时间","min-width":"120","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-popover",{attrs:{placement:"top",width:"100"},model:{value:t.row.delete,callback:function(a){e.$set(t.row,"delete",a)},expression:"scope.row.delete"}},[a("p",[e._v("确认删除选择的素材？")]),e._v(" "),a("div",{staticStyle:{"text-align":"right",margin:"0"}},[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){t.row.delete=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.deleteCPSMaterialDelFn(t.row.id),t.row.delete=!1}}},[e._v("确定")])],1),e._v(" "),a("el-button",{attrs:{slot:"reference",size:"mini",type:"danger"},on:{click:function(e){t.row.delete=!0}},slot:"reference"},[e._v("删除")])],1)]}}])})],1),e._v(" "),a("div",{staticClass:"pagination-container clearfix"},[a("div",{staticClass:"float-left"},[a("global-pagination",{attrs:{"current-page":e.params.page,"page-size":e.params.per_page,layout:"total, sizes, prev, pager, next, jumper",total:e.cpsMaterialPictureList.total},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}})],1)]),e._v(" "),a("el-dialog",{staticClass:"dialog-wrap",attrs:{title:"新增推广素材-图片",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{attrs:{model:e.form,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"类型"}},[a("el-radio-group",{on:{change:e.changeActiveFn},model:{value:e.form.active,callback:function(t){e.$set(e.form,"active",t)},expression:"form.active"}},[a("el-radio",{attrs:{label:"1"}},[e._v("通用")]),e._v(" "),a("el-radio",{attrs:{label:"2"}},[e._v("活动")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"图片位置"}},[a("el-radio-group",{model:{value:e.form.position,callback:function(t){e.$set(e.form,"position",t)},expression:"form.position"}},[a("el-radio",{attrs:{label:"1"}},[e._v("头图")]),e._v(" "),a("el-radio",{attrs:{label:"2"}},[e._v("次图")])],1)],1),e._v(" "),1==e.form.active?a("el-form-item",{attrs:{label:"所属分类"}},[a("el-cascader",{attrs:{placeholder:"选择书籍分类",options:e.categorySelectList,filterable:"","show-all-levels":!1},on:{change:e.changeFormBookCategoryFn},model:{value:e.form.selectedCategoryOptions,callback:function(t){e.$set(e.form,"selectedCategoryOptions",t)},expression:"form.selectedCategoryOptions"}})],1):e._e(),e._v(" "),a("el-form-item",{attrs:{label:"图片"}},[a("el-upload",{ref:"upload",attrs:{action:e.qiniuUpload,multiple:"",data:e.uploadData,accept:e.uploadAcceptType,"before-upload":e.beforePicUpload,"list-type":"picture-card","on-success":e.handleSuccessFn,"on-preview":e.handlePictureCardPreview,"on-remove":e.handleRemove}},[a("i",{staticClass:"el-icon-plus"})]),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})]),e._v(" "),a("span",{staticClass:"el-upload__tip"},[e._v("头图尺寸建议为900*500像素，次图尺寸建议为200*200像素")])],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.submitFn}},[e._v("提交")])],1)],1)],1)},staticRenderFns:[]};var u=a("VU/8")(p,d,!1,function(e){a("SHpv")},null,null);t.default=u.exports}});