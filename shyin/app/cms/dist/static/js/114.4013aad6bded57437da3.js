webpackJsonp([114],{"R/bV":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Xxa5"),s=a.n(i),n=a("exGp"),l=a.n(n),r=a("Dd8w"),o=a.n(r),p=a("NYxO"),c={name:"statisticsUserAnalysis",computed:o()({},Object(p.b)({statUserList:"statUserList"}),{multipleDeleteVisible:function(){return 0==this.multipleSelect.length&&(this.multipleDelete=!1),0===this.multipleSelect.length}}),watch:{},data:function(){return{data:[{id:1}],loading:!1,sendType:[{id:1,name:"十音"},{id:2,name:"CPS"}],params:{platform:2,page:1,start_time:"",end_time:""},total:0,size:20,multipleSelect:[],multipleDelete:!1,page:1,dateRange:"",quickTime:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-7776e6),t.$emit("pick",[a,e])}}]}}},created:function(){this.getList(this.params)},methods:{handleSelectionChange:function(t){var e=[];t.forEach(function(t){e.push(t.id)}),this.multipleSelect=e},multipleDeleteFn:function(){},changeSendTypeFn:function(){this.params.page=1,this.params.start_time="",this.params.end_time="",this.dateRange="",this.getList(this.params)},handleCurrentChange:function(t){this.params.page=t,this.getList(this.params)},dateChangeFn:function(t){t=t||["",""],this.params.start_time=t[0],this.params.end_time=t[1],this.params.page=1,this.getList(this.params)},getExcel:function(){var t="/admin/stat/user/export?";t+="page="+this.params.page+"&platform="+this.params.platform,this.params.start_time&&this.params.end_time&&(t+="&start_time="+this.params.start_time+"&end_time="+this.params.end_time),0!=this.statUserList.total?window.open(t):this.$message({message:"没有要导出的数据",type:"warning"})},getList:function(){var t=l()(s.a.mark(function t(e){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.$store.dispatch("statUser",e);case 3:this.loading=!1;case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"bar flex"},[a("div",{staticClass:"flex-left"},[a("label",{staticClass:"radio-label",staticStyle:{"padding-left":"0"}},[t._v("选择平台")]),t._v(" "),a("el-select",{staticStyle:{width:"140px"},attrs:{placeholder:"请选择平台"},on:{change:t.changeSendTypeFn},model:{value:t.params.platform,callback:function(e){t.$set(t.params,"platform",e)},expression:"params.platform"}},t._l(t.sendType,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),t._v(" "),a("el-date-picker",{staticClass:"ml-30",attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd","picker-options":t.quickTime},on:{change:t.dateChangeFn},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1),t._v(" "),a("div",{staticClass:"flex-right"},[a("el-button",{attrs:{type:"primary"},on:{click:t.getExcel}},[t._v("导出EXCEL")])],1)]),t._v(" "),a("div",{staticClass:"bar flex"},[a("div",{staticClass:"float-left"},[a("div",{staticClass:"total-box"},[t._v("累计用户数："),a("span",[t._v(t._s(t.statUserList.userTotal.new_sum))]),t._v("\n           \n          （男："),a("span",[t._v(t._s(t.statUserList.userTotal.new_boy_total))]),t._v(" | 女："),a("span",[t._v(t._s(t.statUserList.userTotal.new_girl_total))]),t._v("）\n        ")])])]),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%","text-align":"center"},attrs:{data:t.statUserList.data,border:"",stripe:"",multipleTable:""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{prop:"index",label:"序号","min-width":"80",fixed:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"stat_date",label:"日期","min-width":"150","show-overflow-tooltip":"",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"new_sum",label:"新增注册用户数","min-width":"120",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"new_user_boy",label:"男","min-width":"120","show-overflow-tooltip":"",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"new_user_girl",label:"女","min-width":"120","show-overflow-tooltip":"",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"active_sum",label:"活跃用户数","min-width":"120","show-overflow-tooltip":"",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"active_user_boy",label:"男","min-width":"120","show-overflow-tooltip":"",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"active_user_girl",label:"女","min-width":"120","show-overflow-tooltip":"",align:"center"}})],1),t._v(" "),a("div",{staticClass:"pagination-container clearfix"},[a("div",{staticClass:"float-left"},[a("global-pagination",{attrs:{"current-page":t.params.page,"page-size":t.params.per_page,layout:"total, sizes, prev, pager, next, jumper",total:t.statUserList.total},on:{"current-change":t.handleCurrentChange,"size-change":t.handleSizeChange}})],1)])],1)},staticRenderFns:[]};var d=a("VU/8")(c,m,!1,function(t){a("uYrT")},"data-v-6009bf4d",null);e.default=d.exports},"sL/f":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n.total-box span[data-v-6009bf4d]{\n    color: red;\n    font-size: 18px;\n}\n",""])},uYrT:function(t,e,a){var i=a("sL/f");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("2f944da4",i,!0)}});