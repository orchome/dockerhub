webpackJsonp([120],{D2vc:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t("Xxa5"),i=t.n(a),s=t("exGp"),l=t.n(s),r=t("Dd8w"),o=t.n(r),c=t("NYxO"),p=t("TIfe"),u={name:"novelManageChapterList",computed:o()({multipleDeleteVisible:function(){return 0===this.multipleSelect.length},sources:function(){return[{id:"0",name:"全部来源"},{id:"100",name:"十音"}].concat(this.bookSources.slice())}},Object(c.b)({chapterList:"chapterList",bookSources:"bookSources"})),watch:{},data:function(){return{bookUploadVisible:!1,condition:[{value:"0",label:"章节ID"},{value:"1",label:"小说ID"},{value:"2",label:"小说名称"}],changeStates:[{value:"0",label:"草稿箱"},{value:"1",label:"审核中"},{value:"2",label:"发布"},{value:"3",label:"审核未通过"},{value:"4",label:"回收站"},{value:"10",label:"定时发布"}],loading:!1,visible2:!1,page:1,size:20,total:20,multipleDelete:!1,multipleSelect:[],keywords:"",searchCondition:"0",params:{page:1,check_img:"0"}}},methods:{handleSelectionChange:function(n){this.multipleSelect=n},handleCurrentChange:function(n){this.params.page=n,this.getChapterListFn()},getChapterListFn:function(){var n=l()(i.a.mark(function n(e){return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(this.loading=!0,!e){n.next=6;break}return n.next=4,this.$store.dispatch("getChapterList",e);case 4:n.next=8;break;case 6:return n.next=8,this.$store.dispatch("getChapterList",this.params);case 8:this.loading=!1;case 9:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}(),changeImgFn:function(){this.params.page=1,this.getChapterListFn()},changeConditionFn:function(){this.fuzzyQueryFn()},fuzzyQueryFn:function(){this.params.page=1,"0"==this.searchCondition?(this.params.chapter_id=this.keywords,this.params.book_id="",this.params.name=""):"1"==this.searchCondition?(this.params.book_id=this.keywords,this.params.name="",this.params.chapter_id=""):"2"==this.searchCondition&&(this.params.name=this.keywords,this.params.chapter_id="",this.params.book_id=""),this.getChapterListFn(this.params)},deleteChapterDelFn:function(){var n=l()(i.a.mark(function n(e){return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.$store.dispatch("deleteChapterDel",{id:e});case 2:200==n.sent.code&&(this.$message({duration:1500,message:"删除章节成功！",type:"success"}),this.getChapterListFn());case 4:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}(),multipleDeleteFn:function(){var n=[];this.multipleSelect.forEach(function(e){n.push(e.id)}),this.deleteChapterDelFn(n)},changeChapterStatusFn:function(n,e){this.postChapterUpdateFn(n,e)},postChapterUpdateFn:function(){var n=l()(i.a.mark(function n(e,t){var a=this;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.$store.dispatch("postChapterUpdate",{id:e.id,status:e.status});case 2:200==n.sent.code?(this.$message({duration:1500,message:"修改章节状态成功！",type:"success"}),3==t&&this.$prompt("请输入审核未通过原因","提示",{confirmButtonText:"确定",showCancelButton:!1,closeOnClickModal:!1,closeOnPressEscape:!1,showClose:!1}).then(function(n){var i=n.value;a.postChapterSendMsg(e.id,t,i)}).catch(function(){}),2==t&&this.postChapterSendMsg(e.id,2)):this.getChapterListFn();case 4:case"end":return n.stop()}},n,this)}));return function(e,t){return n.apply(this,arguments)}}(),postChapterSendMsg:function(){var n=l()(i.a.mark(function n(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.$store.dispatch("postChapterSendMsg",{uid:Object(p.c)(),chapter_id:e,status:t,content:a});case 2:200==n.sent.code&&this.$message({duration:1500,message:"提交成功！",type:"success"});case 4:case"end":return n.stop()}},n,this)}));return function(e,t){return n.apply(this,arguments)}}()},created:function(){this.params.role_type=Object(p.d)().role_type,this.params.admin_id=Object(p.d)().admin_id,this.getChapterListFn()}},h={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"app-container"},[t("div",{staticClass:"bar flex"},[t("div",{staticClass:"flex-left"},[t("label",{staticClass:"radio-label",staticStyle:{"padding-left":"0"}},[n._v("书籍来源")]),n._v(" "),t("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择书籍来源"},on:{change:n.changeImgFn},model:{value:n.params.check_img,callback:function(e){n.$set(n.params,"check_img",e)},expression:"params.check_img"}},n._l(n.sources,function(n,e){return t("el-option",{key:e,attrs:{label:n.name,value:n.id}})}))],1),n._v(" "),t("div",{staticClass:"flex-right"},[t("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择搜索条件"},on:{change:n.changeConditionFn},model:{value:n.searchCondition,callback:function(e){n.searchCondition=e},expression:"searchCondition"}},n._l(n.condition,function(n){return t("el-option",{key:n.value,attrs:{label:n.label,value:n.value}})})),n._v(" "),t("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"输入搜索内容",size:"mini","prefix-icon":"el-icon-search"},nativeOn:{keyup:function(e){if(!("button"in e)&&n._k(e.keyCode,"enter",13,e.key))return null;n.fuzzyQueryFn(e)}},model:{value:n.keywords,callback:function(e){n.keywords="string"==typeof e?e.trim():e},expression:"keywords"}}),n._v(" "),t("el-button",{staticClass:"search",attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:n.fuzzyQueryFn}},[n._v("搜索")]),n._v(" "),t("router-link",{attrs:{to:"/novelManage/chapter/add"}},[t("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"}},[n._v("新增")])],1)],1)]),n._v(" "),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:n.chapterList.data,border:"",stripe:"",multipleTable:""},on:{"selection-change":n.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"55"}}),n._v(" "),t("el-table-column",{attrs:{prop:"id",label:"ID","min-width":"80",fixed:""}}),n._v(" "),t("el-table-column",{attrs:{prop:"name",label:"章节名称","min-width":"150","show-overflow-tooltip":""}}),n._v(" "),t("el-table-column",{attrs:{prop:"_book_name",label:"小说名称","min-width":"120","show-overflow-tooltip":""}}),n._v(" "),t("el-table-column",{attrs:{prop:"_volume_name",label:"卷轴名称","min-width":"120","show-overflow-tooltip":""}}),n._v(" "),t("el-table-column",{attrs:{prop:"word_count",label:"章节字数","min-width":"120"}}),n._v(" "),t("el-table-column",{attrs:{prop:"_cqms_user_id",label:"书籍来源","min-width":"120"}}),n._v(" "),t("el-table-column",{attrs:{prop:"is_vip",label:"是否免费","min-width":"120"},scopedSlots:n._u([{key:"default",fn:function(e){return[e.row._is_free?t("el-tag",[n._v("是")]):t("el-tag",{attrs:{type:"danger"}},[n._v("否")])]}}])}),n._v(" "),t("el-table-column",{attrs:{prop:"sort",label:"排序","min-width":"120"}}),n._v(" "),t("el-table-column",{attrs:{prop:"status",label:"小说状态","min-width":"120"},scopedSlots:n._u([{key:"default",fn:function(e){return[t("el-select",{attrs:{placeholder:"请选择章节状态"},on:{change:function(t){n.changeChapterStatusFn(e.row,t)}},model:{value:e.row.status,callback:function(t){n.$set(e.row,"status",t)},expression:"scope.row.status"}},n._l(n.changeStates,function(n,a){return t("el-option",{key:a,attrs:{label:n.label,value:n.value,disabled:10!=e.row.status&&10==n.value}})}))]}}])}),n._v(" "),t("el-table-column",{attrs:{prop:"created_at",label:"创建时间","min-width":"120","show-overflow-tooltip":""}}),n._v(" "),t("el-table-column",{attrs:{prop:"updated_at",label:"最后更新时间","min-width":"120","show-overflow-tooltip":""}}),n._v(" "),t("el-table-column",{attrs:{fixed:"right",label:"操作",width:"150"},scopedSlots:n._u([{key:"default",fn:function(e){return[t("router-link",{attrs:{to:"/novelManage/chapter/edit/"+e.row.id}},[t("el-button",{attrs:{size:"mini",type:"primary"}},[n._v("编辑")])],1),n._v(" "),t("el-popover",{attrs:{placement:"top",width:"100"},model:{value:e.row.delete,callback:function(t){n.$set(e.row,"delete",t)},expression:"scope.row.delete"}},[t("p",[n._v("确认删除选择的章节？")]),n._v(" "),t("div",{staticStyle:{"text-align":"right",margin:"0"}},[t("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(n){e.row.delete=!1}}},[n._v("取消")]),n._v(" "),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){n.deleteChapterDelFn(e.row.id),e.row.delete=!1}}},[n._v("确定")])],1),n._v(" "),t("el-button",{attrs:{slot:"reference",size:"mini",type:"danger"},on:{click:function(n){e.row.delete=!0}},slot:"reference"},[n._v("删除")])],1)]}}])})],1),n._v(" "),t("div",{staticClass:"pagination-container clearfix"},[t("div",{staticClass:"float-left mr-30"},[t("el-popover",{attrs:{placement:"top",width:"100"},model:{value:n.multipleDelete,callback:function(e){n.multipleDelete=e},expression:"multipleDelete"}},[t("p",[n._v("确认删除选择的章节？")]),n._v(" "),t("div",{staticStyle:{"text-align":"right",margin:"0"}},[t("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){n.multipleDelete=!1}}},[n._v("取消")]),n._v(" "),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){n.multipleDeleteFn(),n.multipleDelete=!1}}},[n._v("确定")])],1),n._v(" "),t("el-button",{attrs:{slot:"reference",size:"mini",type:"danger",disabled:n.multipleDeleteVisible},on:{click:function(e){n.multipleDelete=!0}},slot:"reference"},[n._v("删除")])],1)],1),n._v(" "),t("div",{staticClass:"float-left"},[t("global-pagination",{attrs:{"current-page":n.params.page,"page-size":n.params.per_page,layout:"total, sizes, prev, pager, next, jumper",total:n.chapterList.total},on:{"current-change":n.handleCurrentChange,"size-change":n.handleSizeChange}})],1)])],1)},staticRenderFns:[]};var d=t("VU/8")(u,h,!1,function(n){t("knBJ")},null,null);e.default=d.exports},knBJ:function(n,e,t){var a=t("z50+");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);t("rjj0")("5c783eaa",a,!0)},"z50+":function(n,e,t){(n.exports=t("FZ+f")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])}});