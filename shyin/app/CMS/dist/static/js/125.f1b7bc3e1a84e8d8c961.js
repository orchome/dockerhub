webpackJsonp([125],{QADw:function(n,t,e){(n.exports=e("FZ+f")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},b7v6:function(n,t,e){var a=e("QADw");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("rjj0")("ebeb5540",a,!0)},wDR8:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("Xxa5"),i=e.n(a),s=e("exGp"),r=e.n(s),l=e("Dd8w"),o=e.n(l),c=e("NYxO"),d=e("msXN"),p={name:"statisticsFinance",computed:o()({},Object(c.b)({dataList:"cpsCountDetail"})),mixins:[d.a],watch:{},data:function(){return{time:null,quickTime:{shortcuts:[{text:"最近一周",onClick:function(n){var t=new Date,e=new Date;e.setTime(e.getTime()-6048e5),n.$emit("pick",[e,t])}},{text:"最近一个月",onClick:function(n){var t=new Date,e=new Date;e.setTime(e.getTime()-2592e6),n.$emit("pick",[e,t])}},{text:"最近三个月",onClick:function(n){var t=new Date,e=new Date;e.setTime(e.getTime()-7776e6),n.$emit("pick",[e,t])}}]},loading:!1,params:{page:1},size:20,id:""}},created:function(){},mounted:function(){var n=this.$route.params.id;this.id=n,this.getListData()},methods:{exportFn:function(){var n=this.id,t=this.params,e=void 0===t?{}:t,a={start:e.start_time,end:e.end_time};this.downloadNoToken("/admin/cps/account/info/export/"+n,a)},getListData:function(){var n=r()(i.a.mark(function n(){var t,e,a,s;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=this.id,e=this.params,(s={start:(a=void 0===e?{}:e).start_time,end:a.end_time}).id=t,this.loading=!0,n.next=6,this.$store.dispatch("getStatCpsDetail",s);case 6:n.sent,this.loading=!1;case 8:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}(),handleCurrentChange:function(n){this.params.page=n,this.getListData()},dateChangeFn:function(n){var t="",e="";null!=n&&(t=n[0]+" 00:00:00",e=n[1]+" 23:59:59"),this.params.start_time=t,this.params.end_time=e},fuzzyQueryFn:function(){this.params.page=1,this.getListData()},handleSizeChange:function(){this.fuzzyQueryFn()}}},u={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"app-container"},[e("div",{staticClass:"bar flex"},[e("div",{staticClass:"flex-left"},[n._v("\n            充值累计: "),e("span",{staticStyle:{color:"red"}},[n._v(n._s(n.dataList.stat.recharge))]),n._v(" | 分成累计：\n            "),e("span",{staticStyle:{color:"red"}},[n._v(n._s(n.dataList.stat.commission))]),n._v(" | 已提现累计:\n            "),e("span",{staticStyle:{color:"red"}},[n._v(n._s(n.dataList.stat.withdraw))])]),n._v(" "),e("div",{staticClass:"flex-right"},[e("el-date-picker",{staticClass:"ml-30",attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd","picker-options":n.quickTime},on:{change:n.dateChangeFn},model:{value:n.time,callback:function(t){n.time=t},expression:"time"}}),n._v(" "),e("el-button",{staticClass:"search",attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:n.fuzzyQueryFn}},[n._v("查询")]),n._v(" "),e("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-download"},on:{click:n.exportFn}},[n._v("导出")])],1)]),n._v(" "),n._m(0),n._v(" "),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticStyle:{width:"100%","text-align":"center"},attrs:{data:n.dataList.data.slice((n.params.page-1)*n.size,n.params.page*n.size),border:"",stripe:""}},[e("el-table-column",{attrs:{prop:"stat_date",label:"日期","min-width":"150","show-overflow-tooltip":"",align:"center"}}),n._v(" "),e("el-table-column",{attrs:{prop:"recharge",label:"充值金额","min-width":"150","show-overflow-tooltip":"",align:"center"}}),n._v(" "),e("el-table-column",{attrs:{prop:"settle",label:"分成金额","min-width":"150","show-overflow-tooltip":"",align:"center"}}),n._v(" "),e("el-table-column",{attrs:{prop:"withdraw",label:"已提现金额","min-width":"150",align:"center"}})],1),n._v(" "),e("div",{staticClass:"pagination-container clearfix"},[e("div",{staticClass:"float-left"},[e("global-pagination",{attrs:{"current-page":n.params.page,"page-size":n.size,layout:"total, sizes, prev, pager, next, jumper",total:n.dataList.total},on:{"current-change":n.handleCurrentChange,"size-change":n.handleSizeChange}})],1)])],1)},staticRenderFns:[function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"bar flex"},[t("div",{staticClass:"flex-left"},[t("p",{staticStyle:{color:"red","font-size":"16px"}},[t("i",{staticClass:"el-icon-info"}),this._v("\n                温馨提示:本页仅展示一级代理截止至昨日的数据\n            ")])])])}]};var m=e("VU/8")(p,u,!1,function(n){e("b7v6")},null,null);t.default=m.exports}});