webpackJsonp([27],{Rv23:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s("Xxa5"),i=s.n(r),o=s("mvHQ"),n=s.n(o),a=s("lHA8"),c=s.n(a),h=s("c/Tr"),u=s.n(h),l=s("exGp"),y=s.n(l),d=s("Dd8w"),v=s.n(d),p=s("SJI6"),f=s("nEpe"),m=s("cS7h"),_=s("8hr+"),k=s("kTGp"),S={components:{SearchPanel:f.a,Navigation:m.a,TitlePanel:_.a,CoverTitle:k.a},name:"search",computed:v()({key:function(){return void 0!==this.$route.name?this.$route.name+new Date:this.$route+new Date},isResult:function(){return this.$route.meta.searchResult||!1}},Object(p.mapGetters)({hotSearch:"hotSearch",searchKey:"searchKey",sex:"sex"})),data:function(){return{history:[]}},methods:{clickSearchFn:function(){this.$router.push("/search/result")},deleteHistoryFn:function(){var t=this;this.$MessageBox.confirm("确认删除历史记录").then(function(){t.history=[],localStorage.setItem("history","")}).catch(function(t){console.log(t)})},historyClickFn:function(){var t=y()(i.a.mark(function t(e){var s;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:(s=this._.cloneDeep(this.history)).unshift(e),s=u()(new c.a(s)),localStorage.setItem("history",n()(s)),this.$store.dispatch("setSearchKey",e),this.$router.push("/search/result");case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},created:function(){localStorage.getItem("history")&&(this.history=JSON.parse(localStorage.getItem("history"))),"/search"===this.$route.path&&this.$store.dispatch("getHotSearch",{sex:this.sex}),this.$route.query.keyword&&""!=this.$route.query.keyword&&this.historyClickFn(this.$route.query.keyword)},destroyed:function(){}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"search"}},[s("navigation",[t._v("搜索")]),t._v(" "),s("search-panel",{attrs:{history:t.history},on:{"update:history":function(e){t.history=e},success:t.clickSearchFn}}),t._v(" "),t.isResult?t._e():s("title-panel",{staticStyle:{"margin-top":".4rem"},attrs:{"same-color":"",search:""}},[t._v("热门搜索")]),t._v(" "),t.isResult?t._e():s("div",{staticClass:"hot-search"},[s("cover-title",{attrs:{three:!1,books:t.hotSearch}})],1),t._v(" "),!t.isResult&&t.history.length>0?s("div",{staticClass:"history-search"},[s("title-panel",{staticStyle:{padding:"0"},attrs:{"same-color":"",search:"",deleted:""},on:{delete:t.deleteHistoryFn}},[t._v("历史记录")]),t._v(" "),s("div",{staticClass:"history-content"},t._l(t.history,function(e){return s("span",{key:e,on:{click:function(s){t.historyClickFn(e)}}},[t._v(t._s(e))])}))],1):t._e(),t._v(" "),s("router-view",{key:t.key})],1)},staticRenderFns:[]};var $=s("VU/8")(S,g,!1,function(t){s("W2xJ")},"data-v-491e30db",null);e.default=$.exports},W2xJ:function(t,e){}});