webpackJsonp([126],{"2Sb8":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},ZpLB:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Xxa5"),r=a.n(n),i=a("exGp"),l=a.n(i),s=a("Dd8w"),o=a.n(s),c=a("NYxO"),u={components:{},name:"",mixins:[],computed:o()({},Object(c.b)({mnqOverBigDataList:"mnqOverBigDataList"})),props:{},data:function(){return{loading:!1,time:"",params:{day:"0",album_id:"",album_title:"",sort_field:"",isort:"",page:1}}},watch:{},created:function(){this.getListDataFn()},methods:{sortChangeFn:function(t){"descending"==t.order?this.params.sort="desc":"ascending"==t.order?this.params.sort="asc":this.params.sort="",this.params.sort_field=t.prop,this.getListDataFn()},getListDataFn:function(){var t=l()(r.a.mark(function t(){var e,a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return(e=this).loading=!0,a=e._.cloneDeep(this.params),t.next=5,e.triggerActionsFn("getStatMnqBigData",a,!0);case 5:e.loading=!1;case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),handleCurrentChange:function(t){this.params.page=t,this.getListDataFn()},fuzzyQueryFn:function(){this.params.page=1,this.getListDataFn()}},mounted:function(){}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"bar flex"},[a("div",{staticClass:"flex-left"},[a("el-radio-group",{attrs:{size:"big"},on:{change:t.fuzzyQueryFn},model:{value:t.params.day,callback:function(e){t.$set(t.params,"day",e)},expression:"params.day"}},[a("el-radio-button",{attrs:{label:"1"}},[t._v("昨日")]),t._v(" "),a("el-radio-button",{attrs:{label:"7"}},[t._v("7天")]),t._v(" "),a("el-radio-button",{attrs:{label:"30"}},[t._v("30天")]),t._v(" "),a("el-radio-button",{attrs:{label:"0"}},[t._v("全部")])],1)],1),t._v(" "),a("div",{staticClass:"flex-right"},[a("ul",{staticClass:"searchConditionUl"},[a("li",[a("label",{staticClass:"radio-label",staticStyle:{"padding-left":"0"}},[t._v("相册ID")]),t._v(" "),a("el-input",{staticStyle:{width:"140px"},attrs:{placeholder:"输入相册ID",size:"mini"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.fuzzyQueryFn(e)}},model:{value:t.params.album_id,callback:function(e){t.$set(t.params,"album_id",e)},expression:"params.album_id"}})],1),t._v(" "),a("li",[a("label",{staticClass:"radio-label"},[t._v("相册标题")]),t._v(" "),a("el-input",{staticStyle:{width:"140px"},attrs:{placeholder:"输入相册标题",size:"mini"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.fuzzyQueryFn(e)}},model:{value:t.params.album_title,callback:function(e){t.$set(t.params,"album_title",e)},expression:"params.album_title"}})],1),t._v(" "),a("li",[a("el-button",{staticClass:"search",attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:t.fuzzyQueryFn}},[t._v("搜索")])],1)])])]),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.mnqOverBigDataList.data,border:"",stripe:"","empty-text":""},on:{"sort-change":t.sortChangeFn}},[a("el-table-column",{attrs:{fixed:"",prop:"id",label:"相册ID",align:"center","min-width":"40"}}),t._v(" "),a("el-table-column",{attrs:{prop:"title",label:"相册标题",align:"center","min-width":"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"link_num",label:"推广链接",align:"center","min-width":"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"pv",label:"打开次数",align:"center","min-width":"120","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"uv",label:"打开人数",align:"center","min-width":"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"recharge_rate",label:"该相册充值数据","min-width":"120",align:"center",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",{attrs:{left:""}},[t._v("充值金额："+t._s(e.row.recharge_amount))]),t._v(" "),a("p",{attrs:{left:""}},[t._v("充值人数："+t._s(e.row.recharge_num))]),t._v(" "),a("p",{attrs:{left:""}},[t._v("充值转化率："+t._s(e.row.recharge_rate)+"%")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"total_recharge_rate",label:"总充值数据",align:"center","min-width":"120",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",{attrs:{left:""}},[t._v("充值金额："+t._s(e.row.total_recharge_amount))]),t._v(" "),a("p",{attrs:{left:""}},[t._v("充值人数："+t._s(e.row.total_recharge_num))]),t._v(" "),a("p",{attrs:{left:""}},[t._v("充值转化率："+t._s(e.row.total_recharge_rate)+"%")])]}}])}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{attrs:{to:"/statistics/picAnalyze/bigData/info/"+e.row.id}},[a("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("查看明细")])],1)]}}])})],1),t._v(" "),a("div",{staticClass:"pagination-container"},[a("global-pagination",{attrs:{"current-page":t.params.page,"page-size":t.params.per_page,layout:"total, sizes, prev, pager, next, jumper",total:t.mnqOverBigDataList.total},on:{"current-change":t.handleCurrentChange,"size-change":t.handleSizeChange}})],1)],1)},staticRenderFns:[]};var d=a("VU/8")(u,p,!1,function(t){a("b5E6")},null,null);e.default=d.exports},b5E6:function(t,e,a){var n=a("2Sb8");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("4f5729b0",n,!0)}});