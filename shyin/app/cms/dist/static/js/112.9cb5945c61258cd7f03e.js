webpackJsonp([112],{D3q6:function(n,a,t){var e=t("Zzmr");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);t("rjj0")("68784b1a",e,!0)},O31N:function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=t("Xxa5"),s=t.n(e),r=t("exGp"),i=t.n(r),l=t("Dd8w"),o=t.n(l),c=t("NYxO"),u={computed:o()({},Object(c.b)({})),watch:{},data:function(){return{params:{page:1},author:{},list:{data:[],total:0},loading:!1}},created:function(){this.$route.params&&this.$route.params.id&&this.getAuthorDetail(this.$route.params.id)},methods:{handleCurrentChange:function(n){this.params.page=n,this.getAuthorDetail()},getAuthorDetail:function(){var n=i()(s.a.mark(function n(a){var t,e,r;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return this.loading=!0,(t=this._.cloneDeep(this.params)).id=a,n.next=5,this.$store.dispatch("getAuthorDetail",t);case 5:if(e=n.sent,this.loading=!1,200!=e.code){n.next=31;break}r=e.data[0],this.author.pen_name=r.pen_name||"-",this.author.mobile=r.mobile||"-",this.author.qq=r.qq||"-",this.author.real_name=r.real_name||"-",this.author.id_card=r.id_card||"-",this.author.email=r.email||"-",this.author.sex=r.sex+"",n.t0=this.author.sex,n.next="0"===n.t0?19:"1"===n.t0?21:"2"===n.t0?23:25;break;case 19:return this.author.sex="保密",n.abrupt("break",27);case 21:return this.author.sex="男",n.abrupt("break",27);case 23:return this.author.sex="女",n.abrupt("break",27);case 25:return this.author.sex="其他",n.abrupt("break",27);case 27:this.author.bankCard=this.author.bank_card?this.author.bank_card.bank_card:"-",this.author.userAddress=this.author.address?this.author.address.address:"-",this.list.data=e.data[1].data.map(function(n){switch(n.sign+""){case"1":n.sign="全勤签约";break;case"2":n.sign="保底签约";break;case"3":n.sign="买断签约";break;case"10":n.sign="S类签约";break;default:n.sign="无签约"}switch(n.status+""){case"0":n.status="下架";break;case"1":n.status="上架";break;case"2":n.status="审核中";break;case"3":n.status="审核未通过";break;default:n.status="其他"}switch(n.serial_status+""){case"1":n.serial_status="连载中";break;case"2":n.serial_status="暂停";break;case"3":n.serial_status="完本";break;default:n.serial_status="其他"}return n}),this.list.total=e.data[1].total;case 31:case"end":return n.stop()}},n,this)}));return function(a){return n.apply(this,arguments)}}()}},h={render:function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("div",{staticClass:"app-container"},[t("div",{staticClass:"bar"},[t("div",{staticClass:"table-info"},[t("ul",{staticClass:"table-info-wrapper"},[t("li",[t("div",{staticClass:"cell"},[t("span",[n._v("作者ID")]),n._v(" "),t("span",[n._v(n._s(n.author.id))])]),n._v(" "),t("div",{staticClass:"cell"},[t("span",[n._v("笔名")]),n._v(" "),t("span",[n._v(n._s(n.author.pen_name))])]),n._v(" "),t("div",{staticClass:"cell"},[t("span",[n._v("性别")]),n._v(" "),t("span",[n._v(n._s(n.author.sex))])]),n._v(" "),t("div",{staticClass:"cell"},[t("span",[n._v("真实姓名")]),n._v(" "),t("span",[n._v(n._s(n.author.real_name))])])]),n._v(" "),t("li",[t("div",{staticClass:"cell"},[t("span",[n._v("手机号")]),n._v(" "),t("span",[n._v(n._s(n.author.mobile))])]),n._v(" "),t("div",{staticClass:"cell"},[t("span",[n._v("QQ")]),n._v(" "),t("span",[n._v(n._s(n.author.qq))])]),n._v(" "),t("div",{staticClass:"cell"},[t("span",[n._v("邮箱")]),n._v(" "),t("span",[n._v(n._s(n.author.email))])]),n._v(" "),t("div",{staticClass:"cell"},[t("span",[n._v("银行卡")]),n._v(" "),t("span",[n._v(n._s(n.author.bankCard))])])]),n._v(" "),t("li",[t("div",{staticClass:"cell"},[t("span",[n._v("身份证号")]),n._v(" "),t("span",[n._v(n._s(n.author.id_card))])]),n._v(" "),t("div",{staticClass:"cell"},[t("span",[n._v("详细地址")]),n._v(" "),t("span",[n._v(n._s(n.author.userAddress))])])])])])]),n._v(" "),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticStyle:{width:"100%","text-align":"center"},attrs:{data:n.list.data,border:"",stripe:""}},[t("el-table-column",{attrs:{prop:"name",label:"小说名称","min-width":"80",fixed:""}}),n._v(" "),t("el-table-column",{attrs:{prop:"sign",label:"签约类型","min-width":"150","show-overflow-tooltip":"",align:"center"}}),n._v(" "),t("el-table-column",{attrs:{prop:"status",label:"小说状态","min-width":"120",align:"center"}}),n._v(" "),t("el-table-column",{attrs:{prop:"serial_status",label:"连载状态","min-width":"120","show-overflow-tooltip":"",align:"center"}}),n._v(" "),t("el-table-column",{attrs:{prop:"word_count",label:"总字数","min-width":"120","show-overflow-tooltip":"",align:"center"}}),n._v(" "),t("el-table-column",{attrs:{prop:"dingyue_num",label:"总订阅","min-width":"120","show-overflow-tooltip":"",align:"center"}}),n._v(" "),t("el-table-column",{attrs:{prop:"amount",label:"总收入","min-width":"120","show-overflow-tooltip":"",align:"center"}}),n._v(" "),t("el-table-column",{attrs:{prop:"created_at",label:"创建时间","min-width":"120","show-overflow-tooltip":"",align:"center"}}),n._v(" "),t("el-table-column",{attrs:{prop:"updated_at",label:"最后更新时间","min-width":"120","show-overflow-tooltip":"",align:"center"}})],1),n._v(" "),t("div",{staticClass:"pagination-container clearfix"},[t("div",{staticClass:"float-left"},[t("global-pagination",{attrs:{"current-page":n.params.page,"page-size":n.params.per_page,layout:"total, sizes, prev, pager, next, jumper",total:n.list.total},on:{"current-change":n.handleCurrentChange,"size-change":n.handleSizeChange}})],1)])],1)},staticRenderFns:[]};var p=t("VU/8")(u,h,!1,function(n){t("D3q6")},null,null);a.default=p.exports},Zzmr:function(n,a,t){(n.exports=t("FZ+f")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])}});