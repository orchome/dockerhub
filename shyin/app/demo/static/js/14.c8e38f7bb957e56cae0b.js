webpackJsonp([14],{"2YAW":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=a("Xxa5"),i=a.n(n),e=a("exGp"),o=a.n(e),l=a("Dd8w"),r=a.n(l),c=a("nEpe"),p=a("cS7h"),u=a("qERK"),g=a("GQaK"),d=a("SJI6"),v={components:{SearchPanel:c.a,Navigation:p.a,loading:u.a},computed:r()({},Object(d.mapGetters)({sex:"sex"})),data:function(){return{consumptionList:[{}],page:1,total:1,loading:!1,scroll:"",pullingUpStart:!0}},methods:{goHomeFn:function(){this.$router.push("/")},postConsumptionListFn:function(){var t=o()(i.a.mark(function t(){var s,a=this;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.$store.dispatch("postConsumptionList",{page:this.page});case 3:200==(s=t.sent).code&&(this.total=s.data.last_page,1==s.data.current_page?this.consumptionList=s.data.data:this.consumptionList=this.consumptionList.concat(s.data.data),this.pullingUpStart=!1,this.$nextTick(function(){200==s.code&&(s.data.current_page>=s.data.last_page?a.scroll&&(a.scroll.closePullUp(),a.scroll.refresh()):a.scroll&&(a.scroll.finishPullUp(),a.scroll.refresh()))})),this.loading=!1;case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),initBScroll:function(){var t=this;""==this.scroll?this.$nextTick(function(){t.scroll=new g.a(t.$refs.wrapper,{click:!0,pullUpLoad:{threshold:0}}),t.scroll.on("pullingUp",function(){t.page<t.total&&!t.loading&&(t.page++,t.pullingUpStart=!0,t.postConsumptionListFn())})}):this.scroll.refresh()}},created:function(){this.postConsumptionListFn()},mounted:function(){var t=this;this.$nextTick(function(){t.initBScroll()})}},h={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{attrs:{id:"rechargeRecord"}},[n("navigation",[t._v("充值/签到记录")]),t._v(" "),0==t.consumptionList.length?n("div",{staticClass:"noImg"},[n("div",{staticClass:"noImg-img"},[n("div",{staticClass:"img-wrap"},[1==t.sex?n("img",{attrs:{src:a("uazd"),alt:""}}):t._e(),t._v(" "),2==t.sex?n("img",{attrs:{src:a("g+Q4"),alt:""}}):t._e()])]),t._v(" "),n("div",{staticClass:"Tips"},[t._v("亲，暂无记录～")]),t._v(" "),n("span",{staticClass:"gohome-button",on:{click:t.goHomeFn}},[t._v("去首页看看")])]):n("div",{staticClass:"box-container"},[n("div",{ref:"wrapper",staticClass:"wrapper"},[n("ul",[t._l(t.consumptionList,function(s){return s.id?n("li",{key:s.id},[n("div",{staticClass:"log"},[t._v(t._s(s.log))]),t._v(" "),n("div",{staticClass:"info"},[n("span",{staticClass:"time"},[t._v(t._s(s.created_at))]),t._v(" "),n("span",{staticClass:"detail"},[t._v("+"+t._s(1==s.operate_style?s.coin_amount+"书币":s.coupon_amount+"书券"))])])]):t._e()}),t._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:t.page>1,expression:"page>1"}],staticClass:"bottom-top"},[t.pullingUpStart?n("loading"):t._e(),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.pullingUpStart&&t.page<t.total,expression:"!pullingUpStart&&page<total"}],staticClass:"loading-hook"},[t._v("加载更多")]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.pullingUpStart&&t.page>t.total,expression:"!pullingUpStart&&page>total"}],staticClass:"loading-hook"},[t._v("没有更多记录了")])],1)],2)])])],1)},staticRenderFns:[]};var m=a("VU/8")(v,h,!1,function(t){a("QlXV")},null,null);s.default=m.exports},QlXV:function(t,s){},"g+Q4":function(t,s,a){t.exports=a.p+"static/img/sign-null-g.632fe2b.png"},uazd:function(t,s,a){t.exports=a.p+"static/img/sign-null-b.d312aa0.png"}});