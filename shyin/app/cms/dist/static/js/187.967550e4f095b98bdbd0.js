webpackJsonp([187],{FAQT:function(n,e,t){var i=t("p0n9");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t("rjj0")("484b58b0",i,!0)},p0n9:function(n,e,t){(n.exports=t("FZ+f")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},pYas:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t("Xxa5"),l=t.n(i),a=t("exGp"),r=t.n(a),s=t("Dd8w"),o=t.n(s),c=t("NYxO"),u=t("TIfe"),p={name:"novelManageVolumeList",computed:o()({},Object(c.b)({volumeList:"volumeList"}),{placeholder:function(){return 1==this.radio?"请输入小说ID":"请输入小说名称"},multipleDeleteVisible:function(){return 0===this.multipleSelect.length}}),watch:{},data:function(){return{keywords:"",loading:!1,visible2:!1,multipleDelete:!1,page:1,total:20,multipleSelect:[],params:{page:1,name:""}}},created:function(){this.params.role_type=Object(u.d)().role_type,this.params.admin_id=Object(u.d)().admin_id,this.getVolumeListFn()},methods:{fuzzyQueryFn:function(){this.params.page=1,this.params.name=this.keywords,this.getVolumeListFn()},multipleDeleteFn:function(n){"1"==n&&this.deleteVolumeDelFn(this.multipleSelect),this.multipleDelete=!1},handleSelectionChange:function(n){var e=this;this.multipleSelect=[],n.forEach(function(n){return e.multipleSelect.push(n.id)})},getVolumeListFn:function(){var n=r()(l.a.mark(function n(){return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return this.loading=!0,n.next=3,this.$store.dispatch("getVolumeList",this.params);case 3:this.loading=!1;case 4:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}(),handleCurrentChange:function(n){this.params.page=n,this.getVolumeListFn()},deleteVolumeDelFn:function(){var n=r()(l.a.mark(function n(e){return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.$store.dispatch("deleteVolumeDel",{id:e});case 2:200==n.sent.code&&(this.$message({duration:1500,message:"删除成功！",type:"success"}),this.getVolumeListFn());case 4:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()}},d={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"app-container"},[t("div",{staticClass:"bar clearfix"},[t("div",{staticClass:"float-right"},[t("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入小说名称",size:"mini","prefix-icon":"el-icon-search"},nativeOn:{keyup:function(e){if(!("button"in e)&&n._k(e.keyCode,"enter",13,e.key))return null;n.fuzzyQueryFn(e)}},model:{value:n.keywords,callback:function(e){n.keywords=e},expression:"keywords"}}),n._v(" "),t("el-button",{staticClass:"search",attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:n.fuzzyQueryFn}},[n._v("搜索")]),n._v(" "),t("router-link",{attrs:{to:"/novelManage/volume/add"}},[t("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"}},[n._v("新增")])],1)],1)]),n._v(" "),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:n.volumeList.data,border:"",stripe:"",multipleTable:""},on:{"selection-change":n.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"55"}}),n._v(" "),t("el-table-column",{attrs:{prop:"id",label:"ID","min-width":"80",fixed:""}}),n._v(" "),t("el-table-column",{attrs:{prop:"name",label:"卷轴名称","min-width":"120"}}),n._v(" "),t("el-table-column",{attrs:{prop:"_book_name",label:"小说名称","min-width":"120"}}),n._v(" "),t("el-table-column",{attrs:{prop:"sort",label:"排序","min-width":"120"}}),n._v(" "),t("el-table-column",{attrs:{prop:"created_at",label:"创建时间","min-width":"120"}}),n._v(" "),t("el-table-column",{attrs:{fixed:"right",label:"操作",width:"150"},scopedSlots:n._u([{key:"default",fn:function(e){return[t("router-link",{attrs:{to:"/novelManage/volume/edit/"+e.row.id}},[t("el-button",{attrs:{size:"mini",type:"primary"}},[n._v("编辑")])],1),n._v(" "),t("el-popover",{attrs:{placement:"top",width:"100"},model:{value:e.row.delete,callback:function(t){n.$set(e.row,"delete",t)},expression:"scope.row.delete"}},[t("p",[n._v("确认删除选择的卷轴？")]),n._v(" "),t("div",{staticStyle:{"text-align":"right",margin:"0"}},[t("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(n){e.row.delete=!1}}},[n._v("取消")]),n._v(" "),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){n.deleteVolumeDelFn(e.row.id),e.row.delete=!1}}},[n._v("确定")])],1),n._v(" "),t("el-button",{attrs:{slot:"reference",size:"mini",type:"danger"},on:{click:function(n){e.row.delete=!0}},slot:"reference"},[n._v("删除")])],1)]}}])})],1),n._v(" "),t("div",{staticClass:"pagination-container clearfix"},[t("div",{staticClass:"float-left mr-30"},[t("el-popover",{attrs:{placement:"top",width:"100"},model:{value:n.multipleDelete,callback:function(e){n.multipleDelete=e},expression:"multipleDelete"}},[t("p",[n._v("确认删除选择的书籍？")]),n._v(" "),t("div",{staticStyle:{"text-align":"right",margin:"0"}},[t("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){n.multipleDeleteFn(0)}}},[n._v("取消")]),n._v(" "),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){n.multipleDeleteFn(1)}}},[n._v("确定")])],1),n._v(" "),t("el-button",{attrs:{slot:"reference",size:"mini",type:"danger",disabled:n.multipleDeleteVisible},on:{click:function(e){n.multipleDelete=!0}},slot:"reference"},[n._v("删除")])],1)],1),n._v(" "),t("div",{staticClass:"float-left"},[t("global-pagination",{attrs:{"current-page":n.params.page,"page-size":n.params.per_page,layout:"total, sizes, prev, pager, next, jumper",total:n.volumeList.total},on:{"current-change":n.handleCurrentChange,"size-change":n.handleSizeChange}})],1)])],1)},staticRenderFns:[]};var m=t("VU/8")(p,d,!1,function(n){t("FAQT")},null,null);e.default=m.exports}});