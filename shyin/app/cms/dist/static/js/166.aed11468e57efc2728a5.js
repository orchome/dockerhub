webpackJsonp([166],{"4v1c":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("mvHQ"),i=e.n(a),s=e("Xxa5"),r=e.n(s),l=e("exGp"),o=e.n(l),c=e("Dd8w"),p=e.n(c),u=e("NYxO"),d={computed:p()({},Object(u.b)({}),{multipleDeleteVisible:function(){return 0==this.multipleSelect.length&&(this.multipleDelete=!1),0===this.multipleSelect.length}}),watch:{},data:function(){return{data:[{id:1}],loading:!1,options:[{id:1,name:"十音"},{id:2,name:"CPS"}],params:{platform:2,page:1},total:0,size:20,multipleSelect:[],multipleDelete:!1,page:1,dateRange:"",quickTime:{shortcuts:[{text:"最近一周",onClick:function(n){var t=new Date,e=new Date;e.setTime(e.getTime()-6048e5),n.$emit("pick",[e,t])}},{text:"最近一个月",onClick:function(n){var t=new Date,e=new Date;e.setTime(e.getTime()-2592e6),n.$emit("pick",[e,t])}},{text:"最近三个月",onClick:function(n){var t=new Date,e=new Date;e.setTime(e.getTime()-7776e6),n.$emit("pick",[e,t])}}]},chapteruvList:[]}},created:function(){this.params.id=this.$route.params.id,this.getList(this.params)},methods:{multipleDeleteFn:function(){},changeSendTypeFn:function(){this.params.page=1,this.getList(this.params)},handleCurrentChange:function(n){this.params.page=n,this.getList(this.params)},getList:function(){var n=o()(r.a.mark(function n(t){var e;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return this.loading=!0,n.next=3,this.$store.dispatch("chapteruv",t);case 3:200==(e=n.sent).code&&(this.chapteruvList={data:e.data.data,total:e.data.total,current_page:e.data.current_page}),this.dispose(t),this.loading=!1;case 7:case"end":return n.stop()}},n,this)}));return function(t){return n.apply(this,arguments)}}(),dateChangeFn:function(n){n=n||["",""],this.params.start_time=n[0],this.params.end_time=n[1],this.params.page=1,this.getList(this.params)},dispose:function(){var n=o()(r.a.mark(function n(t){var e,a,s,l,o;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e=JSON.parse(i()(this.chapteruvList)),a="",1!=t.page){n.next=6;break}a="-",n.next=12;break;case 6:return(s=JSON.parse(i()(t))).page-=1,n.next=10,this.$store.dispatch("chapteruv",s);case 10:200==(l=n.sent).code&&(o=l.data.data[l.data.data.length-1].uv,a=(a=e.data[0].uv/o)>1?"-":(100*a).toFixed(2)+"%");case 12:e.data.forEach(function(n,t){t>0?(n.Retention=n.uv/e.data[t-1].uv,n.Retention>1?n.Retention="-":n.Retention=(100*n.Retention).toFixed(2)+"%"):n.Retention=a}),this.chapteruvList=e;case 14:case"end":return n.stop()}},n,this)}));return function(t){return n.apply(this,arguments)}}()}},h={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"app-container"},[e("div",{staticClass:"bar flex"},[e("div",{staticClass:"flex-left"},[e("label",{staticClass:"radio-label",staticStyle:{"padding-left":"0"}},[n._v("选择平台")]),n._v(" "),e("el-select",{staticStyle:{width:"140px"},attrs:{placeholder:"请选择平台"},on:{change:n.changeSendTypeFn},model:{value:n.params.platform,callback:function(t){n.$set(n.params,"platform",t)},expression:"params.platform"}},n._l(n.options,function(n){return e("el-option",{key:n.id,attrs:{label:n.name,value:n.id}})}))],1)]),n._v(" "),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticStyle:{width:"100%","text-align":"center"},attrs:{data:n.chapteruvList.data,border:"",stripe:"",multipleTable:""}},[e("el-table-column",{attrs:{prop:"id",label:"ID","min-width":"80",fixed:""}}),n._v(" "),e("el-table-column",{attrs:{prop:"name",label:"章节名称","min-width":"150","show-overflow-tooltip":"",align:"center"}}),n._v(" "),e("el-table-column",{attrs:{prop:"uv",label:"阅读人数","min-width":"150","show-overflow-tooltip":"",align:"center"}}),n._v(" "),e("el-table-column",{attrs:{prop:"Retention",label:"章节留存率","min-width":"120","show-overflow-tooltip":"",align:"center"}})],1),n._v(" "),e("div",{staticClass:"pagination-container clearfix"},[e("div",{staticClass:"float-left"},[e("global-pagination",{attrs:{"current-page":n.params.page,"page-size":n.params.per_page,layout:"total, sizes, prev, pager, next, jumper",total:n.chapteruvList.total},on:{"current-change":n.handleCurrentChange,"size-change":n.handleSizeChange}})],1)])],1)},staticRenderFns:[]};var m=e("VU/8")(d,h,!1,function(n){e("tlAN")},null,null);t.default=m.exports},YGbf:function(n,t,e){(n.exports=e("FZ+f")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},tlAN:function(n,t,e){var a=e("YGbf");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("rjj0")("7774ec54",a,!0)}});