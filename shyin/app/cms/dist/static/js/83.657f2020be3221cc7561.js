webpackJsonp([83],{"/zMv":function(n,t,e){var i=e("c+ZN");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("18934c86",i,!0)},"2LtW":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("Xxa5"),a=e.n(i),o=e("exGp"),r=e.n(o),s=e("Dd8w"),l=e.n(s),c=e("NYxO"),d={components:{Upload:e("TAej").a},computed:l()({},Object(c.b)({categorySelect:"categorySelect",categoryArray:"categoryArray",cpsMaterialTitleList:"cpsMaterialTitleList"}),{categorySelectList:function(){var n=this._.cloneDeep(this.categorySelect);return n[0]&&n[0].label&&(n[0].label="全部分类"),n}}),watch:{dialogFormVisible:function(n){n||(this.form.title="",this.form.book_id="",this.form.id="",this.$refs.ruleForm.resetFields())},isOpenDialog:function(n){n&&this.getAjaxGetBookFn()}},data:function(){return{visible:!1,options:[],bookList:[],selectLoading:!1,dialogType:"add",loading:!1,dialogTitle:"新增文本标题",radio:"book_id",dialogFormVisible:!1,form:{id:"",title:"",book_id:"",category:"2",type:"2"},params:{page:1,category:"2",cat_id:"",selectedCategoryOptions:[0],dataType:2,type:2},actives:[{id:"0",name:"全部"},{id:"1",name:"通用"},{id:"2",name:"活动"}],rules:{title:[{required:!0,message:"请输入文本标题",trigger:"blur"}],book_id:[{required:!0,message:"请选择书籍",trigger:"change"}]},isOpenDialog:!1}},created:function(){var n=r()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return this.loading=!0,n.next=3,this.$store.dispatch("getCateList");case 3:this.getCPSMaterialListFn();case 4:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}(),methods:{deleteCPSMaterialDelFn:function(){var n=r()(a.a.mark(function n(t){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.$store.dispatch("deleteCPSMaterialDel",{id:t});case 2:200==n.sent.code&&(this.$message({message:"删除素材成功",type:"success",duration:1500}),this.getCPSMaterialListFn());case 4:case"end":return n.stop()}},n,this)}));return function(t){return n.apply(this,arguments)}}(),postCPSMaterialTextAddFn:function(){var n=r()(a.a.mark(function n(){var t;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=this._.cloneDeep(this.form),n.next=3,this.$store.dispatch("postCPSMaterialTextAdd",t);case 3:200==n.sent.code&&(this.$message({message:"添加标题成功！",type:"success",duration:1500}),this.dialogFormVisible=!1,this.params.page=1,this.getCPSMaterialListFn());case 5:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}(),postCPSMaterialUpdateFn:function(){var n=r()(a.a.mark(function n(){var t;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=this._.cloneDeep(this.form),n.next=3,this.$store.dispatch("postCPSMaterialUpdate",t);case 3:200==n.sent.code&&(this.$message({message:"修改文本标题成功！",type:"success",duration:1500}),this.dialogFormVisible=!1,this.params.page=1,this.getCPSMaterialListFn());case 5:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}(),submitForm:function(n){var t=this;this.$refs[n].validate(function(n){if(!n)return console.log("error submit!!"),!1;"add"==t.dialogType?t.postCPSMaterialTextAddFn():"edit"==t.dialogType&&t.postCPSMaterialUpdateFn()})},resetForm:function(n){this.dialogFormVisible=!1,this.$refs[n].resetFields()},remoteMethod:function(n){var t=this;""!==n?(this.selectLoading=!0,setTimeout(function(){t.selectLoading=!1,t.options=t.bookList.filter(function(t){return t.id.indexOf(n)>-1||t.name.indexOf(n)>-1})},200)):this.options=[]},getAjaxGetBookFn:function(){var n=r()(a.a.mark(function n(){var t;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.$store.dispatch("getCPSBook");case 2:200==(t=n.sent).code&&(t.data.forEach(function(n){return n.id=n.id+""}),this.bookList=t.data);case 4:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}(),changRadioFn:function(n){"name"==n.target.value?this.params.book_id="":this.params.name=""},addFn:function(){this.isOpenDialog=!0,this.dialogTitle="新增文本标题",this.dialogType="add",this.dialogFormVisible=!0},editFn:function(n){this.form.title=n.title,this.form.id=n.id,this.form.book_id=n.book_id,this.options=[{id:n.book_id,name:n._book_name}],this.dialogTitle="编辑文本标题",this.dialogType="edit",this.dialogFormVisible=!0},handleCurrentChange:function(n){this.params.page=n,this.getCPSMaterialListFn()},fuzzyQueryFn:function(){this.params.page=1,this.getCPSMaterialListFn()},changeBookCategoryFn:function(n){this.params.page=1,this.params.cat_id=n[n.length-1],this.getCPSMaterialListFn()},getCPSMaterialListFn:function(){var n=r()(a.a.mark(function n(){var t;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return delete(t=this._.cloneDeep(this.params)).selectedCategoryOptions,this.loading=!0,n.next=5,this.$store.dispatch("getCPSMaterialList",t);case 5:this.loading=!1;case 6:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}(),changeSelectFn:function(){this.params.page=1,this.getCPSMaterialListFn()}}},p={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"app-container credit-dialog"},[e("div",{staticClass:"bar flex"},[e("div",{staticClass:"flex-left"},[e("label",{staticClass:"radio-label",staticStyle:{"padding-left":"0"}},[n._v("书籍分类")]),n._v(" "),e("el-cascader",{attrs:{placeholder:"选择书籍分类",options:n.categorySelectList,filterable:"","show-all-levels":!1},on:{change:n.changeBookCategoryFn},model:{value:n.params.selectedCategoryOptions,callback:function(t){n.$set(n.params,"selectedCategoryOptions",t)},expression:"params.selectedCategoryOptions"}})],1),n._v(" "),e("div",{staticClass:"flex-right"},[e("label",{staticClass:"radio-label",on:{change:n.changRadioFn}},[e("el-radio",{attrs:{label:"book_id"},model:{value:n.radio,callback:function(t){n.radio=t},expression:"radio"}},[n._v("书籍ID")]),n._v(" "),e("el-radio",{attrs:{label:"name"},model:{value:n.radio,callback:function(t){n.radio=t},expression:"radio"}},[n._v("书籍名称")])],1),n._v(" "),e("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"输入搜索内容",size:"mini","prefix-icon":"el-icon-search"},nativeOn:{keyup:function(t){if(!("button"in t)&&n._k(t.keyCode,"enter",13,t.key))return null;n.fuzzyQueryFn(t)}},model:{value:n.params[n.radio],callback:function(t){n.$set(n.params,n.radio,t)},expression:"params[radio]"}}),n._v(" "),e("el-button",{staticClass:"search",attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:n.fuzzyQueryFn}},[n._v("搜索")]),n._v(" "),e("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:n.addFn}},[n._v("新增")]),n._v(" "),e("el-button",{attrs:{type:"primary",icon:"el-icon-upload2",size:"mini"},on:{click:function(t){n.visible=!0}}},[n._v("上传Excel")])],1)]),n._v(" "),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:n.cpsMaterialTitleList.data,border:"",stripe:""}},[e("el-table-column",{attrs:{prop:"id",label:"ID","min-width":"80",fixed:""}}),n._v(" "),e("el-table-column",{attrs:{prop:"title",label:"文本标题","min-width":"150","show-overflow-tooltip":""}}),n._v(" "),e("el-table-column",{attrs:{prop:"book_id",label:"书籍ID","min-width":"120"}}),n._v(" "),e("el-table-column",{attrs:{prop:"_book_name",label:"书籍名称","min-width":"120","show-overflow-tooltip":""}}),n._v(" "),e("el-table-column",{attrs:{prop:"_cat_name",label:"书籍分类","min-width":"120","show-overflow-tooltip":""},scopedSlots:n._u([{key:"default",fn:function(t){return[2==t.row.active?e("span",[n._v(" - ")]):e("span",[n._v(n._s(t.row._cat_name))])]}}])}),n._v(" "),e("el-table-column",{attrs:{prop:"_active",label:"类型","min-width":"120","show-overflow-tooltip":""}}),n._v(" "),e("el-table-column",{attrs:{prop:"created_at",label:"上传时间","min-width":"120","show-overflow-tooltip":""}}),n._v(" "),e("el-table-column",{attrs:{fixed:"right",label:"操作",width:"150"},scopedSlots:n._u([{key:"default",fn:function(t){return[e("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){n.editFn(t.row)}}},[n._v("编辑")]),n._v(" "),e("el-popover",{attrs:{placement:"top",width:"100"},model:{value:t.row.delete,callback:function(e){n.$set(t.row,"delete",e)},expression:"scope.row.delete"}},[e("p",[n._v("确认删除选择的素材？")]),n._v(" "),e("div",{staticStyle:{"text-align":"right",margin:"0"}},[e("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(n){t.row.delete=!1}}},[n._v("取消")]),n._v(" "),e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){n.deleteCPSMaterialDelFn(t.row.id),t.row.delete=!1}}},[n._v("确定")])],1),n._v(" "),e("el-button",{attrs:{slot:"reference",size:"mini",type:"danger"},on:{click:function(n){t.row.delete=!0}},slot:"reference"},[n._v("删除")])],1)]}}])})],1),n._v(" "),e("div",{staticClass:"pagination-container clearfix"},[e("div",{staticClass:"float-left"},[e("global-pagination",{attrs:{"current-page":n.params.page,"page-size":n.params.per_page,layout:"total, sizes, prev, pager, next, jumper",total:n.cpsMaterialTitleList.total},on:{"current-change":n.handleCurrentChange,"size-change":n.handleSizeChange}})],1)]),n._v(" "),e("el-dialog",{attrs:{title:n.dialogTitle,visible:n.dialogFormVisible},on:{"update:visible":function(t){n.dialogFormVisible=t}}},[e("el-form",{ref:"ruleForm",attrs:{model:n.form,"label-width":"120px",rules:n.rules}},[e("el-form-item",{attrs:{label:"文本标题",prop:"title"}},[e("el-input",{attrs:{placeholder:"请输入文本标题"},model:{value:n.form.title,callback:function(t){n.$set(n.form,"title",t)},expression:"form.title"}})],1),n._v(" "),e("el-form-item",{attrs:{label:"书籍名称",prop:"book_id"}},[e("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入书籍名称",filterable:"",remote:"","remote-method":n.remoteMethod,loading:n.selectLoading},model:{value:n.form.book_id,callback:function(t){n.$set(n.form,"book_id",t)},expression:"form.book_id"}},n._l(n.options,function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.id}},[e("span",{staticStyle:{float:"left"}},[n._v(n._s(t.id))]),n._v(" "),e("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[n._v(n._s(t.name))])])}))],1)],1),n._v(" "),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(t){n.resetForm("ruleForm")}}},[n._v("取消")]),n._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(t){n.submitForm("ruleForm")}}},[n._v("提交")])],1)],1),n._v(" "),e("upload",{attrs:{visible:n.visible,template:"material_body_title_universal.xls",title:"上传Excel",action:"/admin/cps_import_body_universal"},on:{"update:visible":function(t){n.visible=t},success:n.getCPSMaterialListFn}},[n._v("仅允许上传xls结尾的文件")])],1)},staticRenderFns:[]};var u=e("VU/8")(d,p,!1,function(n){e("/zMv")},null,null);t.default=u.exports},"c+ZN":function(n,t,e){(n.exports=e("FZ+f")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])}});