webpackJsonp([132],{"/mYn":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n.table-icon[data-v-486157c3] {\r\n  font-size: 20px;\n}\r\n",""])},hy1V:function(t,e,a){var s=a("/mYn");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("67f6bb52",s,!0)},sfAr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Xxa5"),i=a.n(s),l=a("mvHQ"),n=a.n(l),o=a("exGp"),r=a.n(o),c=a("Dd8w"),p=a.n(c),u=a("NYxO"),d={name:"statisticsSubscribe",mixins:[a("msXN").a],computed:p()({},Object(u.b)({statBookRetList:"statBookRetList"}),{multipleDeleteVisible:function(){return 0==this.multipleSelect.length&&(this.multipleDelete=!1),0===this.multipleSelect.length},inputPlac:function(){return"1"==this.radioClasses?"请输入小说ID":"请输入小说名称"}}),watch:{},data:function(){return{data:[{id:1}],loading:!1,sendType:[{id:1,name:"十音"},{id:2,name:"CPS"}],bookStatus:[{id:0,name:"全部"},{id:10,name:"下架"},{id:1,name:"上架"}],radioClasses:"1",keywords:"",params:{platform:2,page:1,name:"",stat_status:0,book_id:"",cat_id:"",cqms_user_id:"",orderby:"",orderway:""},total:0,size:20,multipleSelect:[],multipleDelete:!1,page:1,sourcesDis:!1}},created:function(){this.getList(this.params)},methods:{handleSelectionChange:function(t){var e=[];t.forEach(function(t){e.push(t.id)}),this.multipleSelect=e},multipleDeleteFn:function(){},changeSendTypeFn:function(){this.params.page=1,this.getList(this.params)},changeSendTypePlatformFn:function(t){this.sourcesDis=2==t,this.params.page=1,this.getList(this.params)},handleCurrentChange:function(t){this.params.page=t,this.getList(this.params)},fuzzyQueryFn:function(){this.params.page=1,this.params.name=this.params.book_id="","1"==this.radioClasses?(this.params.book_id=this.keywords,this.params.name=""):(this.params.name=this.keywords,this.params.keywords=""),this.getList(this.params)},getExcel:function(){var t=this._.cloneDeep(this.statBookRetList.data);t.export_type=2,t.platform=this.params.platform,t.cqms_user_id=this.params.cqms_user_id,t.stat_status=this.params.stat_status,t.cat_id=this.params.cat_id,t.book_id=this.params.book_id,t.name=this.params.name,this.exportExcelFn(t,"/admin/stat_book_retention_export","小说概况")},goRoute:function(t){this.$router.push(t)},getList:function(){var t=r()(i.a.mark(function t(e){var a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,2==(a=JSON.parse(n()(e))).stat_status&&(a.stat_status=""),t.next=5,this.$store.dispatch("statBookRetention",a);case 5:this.loading=!1;case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),sortChange:function(t){t.prop&&(this.params.orderby=t.prop),"ascending"==t.order?this.params.orderway="asc":"descending"==t.order?this.params.orderway="desc":this.params.orderway="",this.getList(this.params)}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"bar flex"},[a("div",{staticClass:"flex-left"},[a("label",{staticClass:"radio-label"},[t._v("选择平台")]),t._v(" "),a("el-select",{staticStyle:{width:"140px"},attrs:{placeholder:"请选择平台"},on:{change:t.changeSendTypePlatformFn},model:{value:t.params.platform,callback:function(e){t.$set(t.params,"platform",e)},expression:"params.platform"}},t._l(t.sendType,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),t._v(" "),a("label",{staticClass:"radio-label"},[t._v("书籍来源")]),t._v(" "),a("el-select",{staticStyle:{width:"140px"},attrs:{placeholder:"书籍来源"},on:{change:t.changeSendTypeFn},model:{value:t.params.cqms_user_id,callback:function(e){t.$set(t.params,"cqms_user_id",e)},expression:"params.cqms_user_id"}},t._l(t.statBookRetList.sources,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),t._v(" "),a("label",{staticClass:"radio-label"},[t._v("小说状态")]),t._v(" "),a("el-select",{staticStyle:{width:"140px"},attrs:{placeholder:"小说状态"},on:{change:t.changeSendTypeFn},model:{value:t.params.stat_status,callback:function(e){t.$set(t.params,"stat_status",e)},expression:"params.stat_status"}},t._l(t.bookStatus,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),t._v(" "),a("label",{staticClass:"radio-label"},[t._v("所属分类")]),t._v(" "),a("el-select",{staticStyle:{width:"140px"},attrs:{placeholder:"所属分类"},on:{change:t.changeSendTypeFn},model:{value:t.params.cat_id,callback:function(e){t.$set(t.params,"cat_id",e)},expression:"params.cat_id"}},t._l(t.statBookRetList.category,function(t){return a("el-option",{key:t.id,attrs:{label:t.cat_name,value:t.id}})}))],1),t._v(" "),a("div",{staticClass:"flex-right ml-30"},[a("label",{staticClass:"radio-label flex-right ml-30"},[a("el-radio",{attrs:{label:"1"},model:{value:t.radioClasses,callback:function(e){t.radioClasses=e},expression:"radioClasses"}},[t._v("小说ID")]),t._v(" "),a("el-radio",{attrs:{label:"2"},model:{value:t.radioClasses,callback:function(e){t.radioClasses=e},expression:"radioClasses"}},[t._v("小说名称")])],1),t._v(" "),a("el-input",{staticStyle:{width:"140px"},attrs:{placeholder:t.inputPlac,size:"mini"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.fuzzyQueryFn(e)}},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}}),t._v(" "),a("el-button",{staticClass:"search",attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:t.fuzzyQueryFn}},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.getExcel}},[t._v("导出EXCEL")])],1)]),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%","text-align":"center"},attrs:{data:t.statBookRetList.data,border:"",stripe:"",multipleTable:""},on:{"selection-change":t.handleSelectionChange,"sort-change":t.sortChange}},[a("el-table-column",{attrs:{prop:"book_id",label:"ID","min-width":"50",fixed:"",sortable:"custom"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"小说名称","min-width":"150","show-overflow-tooltip":"",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"cat_name",label:"所属分类","min-width":"120",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"cqms_user_name",label:"书籍来源","min-width":"120","show-overflow-tooltip":"",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"subscribe_sum",label:"累计订阅人数","min-width":"120","show-overflow-tooltip":"",sortable:"custom",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"boy",label:"男","min-width":"120","show-overflow-tooltip":"",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"girl",label:"女","min-width":"120","show-overflow-tooltip":"",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"coin",label:"书币总收益","min-width":"120","show-overflow-tooltip":"",align:"center",sortable:"custom"}}),t._v(" "),a("el-table-column",{attrs:{prop:"giving_coin",label:"书券总收益","min-width":"120","show-overflow-tooltip":"",align:"center",sortable:"custom"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{on:{click:function(a){t.goRoute("/statistics/novelAnalyze/subscribe/subscribe/"+e.row.book_id)}}},[t._v("小说订阅率分析")]),t._v(" "),a("el-button",{staticStyle:{"margin-left":"0","margin-top":"5px"},on:{click:function(a){t.goRoute("/statistics/novelAnalyze/subscribe/section/"+e.row.book_id)}}},[t._v("章节留存率分析")])]}}])})],1),t._v(" "),a("div",{staticClass:"pagination-container clearfix"},[a("div",{staticClass:"float-left"},[a("global-pagination",{attrs:{"current-page":t.params.page,"page-size":t.params.per_page,layout:"total, sizes, prev, pager, next, jumper",total:t.statBookRetList.total},on:{"current-change":t.handleCurrentChange,"size-change":t.handleSizeChange}})],1)])],1)},staticRenderFns:[]};var h=a("VU/8")(d,m,!1,function(t){a("hy1V")},"data-v-486157c3",null);e.default=h.exports}});