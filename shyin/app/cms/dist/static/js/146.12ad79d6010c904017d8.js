webpackJsonp([146],{GDOG:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Xxa5"),s=a.n(n),o=a("exGp"),i=a.n(o),r=a("Dd8w"),l=a.n(r),c=a("NYxO"),u={name:"LookpicContentCPS",components:{MulSelect:a("zGwC").a},computed:l()({},Object(c.b)({lookPicContent:"lookPicContent",pictureShopCpsParams:"pictureShopCpsParams"}),{coverHost:function(){return"http://h5h5h5.goxiaochengxu.cn/"}}),props:{},data:function(){return{mulData:[],selectCat:!1,selectTag:!1,selectType:!1,radio:1,status:[{value:"1",label:"上架中"},{value:"0",label:"已下架"}],cats:[],options:[{value:"1000",label:"全部"},{value:1,label:"热门推荐"},{value:2,label:"图册架"}],loading:!1,params:{page:1,title:"",position:"1000",cat_id:"1000",status:"1000"}}},watch:{},created:function(){var t=i()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.pictureShopCpsParams&&(this.params=this._.cloneDeep(this.pictureShopCpsParams),this.$store.commit("CLEARN_PictureShop_Cps_Params")),this.getAllCat(),this.getLookPicContentFn();case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),methods:{getAllCat:function(){var t=i()(s.a.mark(function t(){var e;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.triggerActionsFn("getMnqCategory",{is_all:1,status:1});case 2:200==(e=t.sent).code&&(this.cats=e.data);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),getLookPicDeleteFn:function(){var t=i()(s.a.mark(function t(e){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("getLookPicDelete",{ids:e});case 2:200==t.sent.code&&(this.$message({message:"删除成功",duration:1500,type:"success"}),this.getLookPicContentFn());case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),changeStatus:function(t){this.changeInfo(t,"getMnqChangeShelfStatus")},changeTags:function(t){this.changeInfo(t,"postMnqChangeAlbumTag")},changeCats:function(t){this.changeInfo(t,"postMnqChangeAlbumCategory")},changeInfo:function(){var t=i()(s.a.mark(function t(e,a){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return"",t.next=3,this.triggerActionsFn(a,e);case 3:200==t.sent.code&&this.$message({message:"修改成功",duration:1500,type:"success"}),this.getLookPicContentFn();case 6:case"end":return t.stop()}},t,this)}));return function(e,a){return t.apply(this,arguments)}}(),getChangeShelfStatusFn:function(){var t=i()(s.a.mark(function t(e,a){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("getChangeShelfStatus",{ids:e,status:a});case 2:200==t.sent.code&&this.$message({message:"修改成功",duration:1500,type:"success"}),this.getLookPicContentFn();case 5:case"end":return t.stop()}},t,this)}));return function(e,a){return t.apply(this,arguments)}}(),getLookPicContentFn:function(){var t=i()(s.a.mark(function t(){var e,a,n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(n in(e=this).loading=!0,a=this._.cloneDeep(this.params))1e3==a[n]&&delete a[n];return t.next=6,e.$store.dispatch("getLookPicContent",a);case 6:e.loading=!1;case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),handleCurrentChange:function(t){this.params.page=t,this.getLookPicContentFn()},fuzzyQueryFn:function(){this.params.page=1,this.getLookPicContentFn()},handleSelectionChange:function(t){this.mulData=t},goEdit:function(t){this.$store.commit("SET_PictureShop_Cps_Params",this._.cloneDeep(this.params)),this.$router.push({path:"/pictureShop/CPS/cps/edit/"+t})},goAdd:function(){this.$store.commit("SET_PictureShop_Cps_Params",this._.cloneDeep(this.params)),this.$router.push({path:"/pictureShop/CPS/picture/add?type=1"})}},mounted:function(){}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"bar flex"},[a("div",{staticClass:"flex-left"},[a("label",{staticClass:"radio-label",staticStyle:{"padding-left":"0"}},[t._v("位置")]),t._v(" "),a("el-select",{attrs:{placeholder:"请选择"},on:{change:t.fuzzyQueryFn},model:{value:t.params.position,callback:function(e){t.$set(t.params,"position",e)},expression:"params.position"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),t._v(" "),a("label",{staticClass:"radio-label",staticStyle:{"padding-left":"0"}},[t._v("分类")]),t._v(" "),a("el-select",{attrs:{placeholder:"请选择"},on:{change:t.fuzzyQueryFn},model:{value:t.params.cat_id,callback:function(e){t.$set(t.params,"cat_id",e)},expression:"params.cat_id"}},[a("el-option",{attrs:{label:"全部",value:"1000"}}),t._v(" "),t._l(t.cats,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})],2),t._v(" "),a("label",{staticClass:"radio-label",staticStyle:{"padding-left":"0"}},[t._v("状态")]),t._v(" "),a("el-select",{attrs:{placeholder:"请选择"},on:{change:t.fuzzyQueryFn},model:{value:t.params.status,callback:function(e){t.$set(t.params,"status",e)},expression:"params.status"}},[a("el-option",{attrs:{label:"全部",value:"1000"}}),t._v(" "),t._l(t.status,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})],2)],1),t._v(" "),a("div",{staticClass:"flex-right"},[a("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"名称关键字",size:"mini","prefix-icon":"el-icon-search"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.fuzzyQueryFn(e)}},model:{value:t.params.title,callback:function(e){t.$set(t.params,"title",e)},expression:"params.title"}}),t._v(" "),a("el-button",{staticClass:"search",attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:t.fuzzyQueryFn}},[t._v("搜索")]),t._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-upload",size:"mini"},on:{click:t.goAdd}},[t._v("新增")])],1)]),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.lookPicContent.data,border:"",stripe:"",multipleTable:"","empty-text":""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{prop:"id",label:"序号",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"cover",label:"封面",width:"120","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("img",{staticStyle:{width:"40px",height:"40px","border-radius":"50%"},attrs:{src:t.coverHost+e.row.cover,alt:""}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"title",label:"名称","min-width":"80","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"position",label:"位置","min-width":"60"}}),t._v(" "),a("el-table-column",{attrs:{prop:"position_sort",label:"排序","min-width":"60"}}),t._v(" "),a("el-table-column",{attrs:{prop:"state",label:"状态",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-text":"上架","inactive-text":"下架","active-value":1,"inactive-value":0},on:{change:function(a){t.getChangeShelfStatusFn(e.row.id,a)}},model:{value:e.row.status,callback:function(a){t.$set(e.row,"status",a)},expression:"scope.row.status"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"album_tag",label:"标签","min-width":"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"cat_name",label:"分类","min-width":"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.category.name))]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"pic_num",label:"内容个数","min-width":"60"}}),t._v(" "),a("el-table-column",{attrs:{prop:"visit_num",label:"浏览量",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"created_at",label:"添加时间","min-width":"120","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){t.goEdit(e.row.id)}}},[t._v("编辑")]),t._v(" "),a("el-popover",{attrs:{placement:"top",width:"100"},model:{value:e.row.delete,callback:function(a){t.$set(e.row,"delete",a)},expression:"scope.row.delete"}},[a("p",[t._v("确认删除选择的相册？")]),t._v(" "),a("div",{staticStyle:{"text-align":"right",margin:"0"}},[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){e.row.delete=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.getLookPicDeleteFn(e.row.id),e.row.delete=!1}}},[t._v("确定")])],1),t._v(" "),a("el-button",{attrs:{slot:"reference",size:"mini",type:"danger"},on:{click:function(t){e.row.delete=!0}},slot:"reference"},[t._v("删除")])],1)]}}])})],1),t._v(" "),a("div",{staticClass:"pagination-container"},[a("div",{staticClass:"float-left mr-30"},[a("mul-select",{attrs:{"mul-data":t.mulData,cats:t.cats,del:"",tag:"",cat:""},on:{delete:t.getLookPicDeleteFn,changeStatus:t.changeStatus,changeTags:t.changeTags,changeCats:t.changeCats}})],1),t._v(" "),a("div",{staticClass:"float-left"},[a("global-pagination",{attrs:{"current-page":t.params.page,"page-size":t.params.per_page,layout:"total, sizes, prev, pager, next, jumper",total:t.lookPicContent.total},on:{"current-change":t.handleCurrentChange,"size-change":t.handleSizeChange}})],1)])],1)},staticRenderFns:[]};var h=a("VU/8")(u,p,!1,function(t){a("xrGv")},null,null);e.default=h.exports},"Y/c4":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n.tags-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.tags-wrapper .el-tag {\n    color: #fff;\n    margin-bottom: 10px;\n    margin-right: 2px;\n}\n.mul-bottom-radio {\n  margin-bottom: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.mul-bottom-radio .el-radio:first-child {\n    margin-right: 10px;\n}\n.mul-bottom-checkbox {\n  text-align: left;\n  margin-bottom: 10px;\n}\n",""])},xrGv:function(t,e,a){var n=a("Y/c4");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("307a55e6",n,!0)}});