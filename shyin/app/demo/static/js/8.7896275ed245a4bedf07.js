webpackJsonp([8],{"1sRF":function(e,t,s){e.exports=s.p+"static/img/read-null-girl.faf1d4f.png"},"2qki":function(e,t){},"9Jvk":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("Xxa5"),a=s.n(i),n=s("exGp"),r=s.n(n),o=s("BO1k"),l=s.n(o),c=s("Dd8w"),h=s.n(c),u=s("SJI6"),d=s("qERK"),p=s("GQaK"),f=s("Izdj"),v={name:"record",components:{loading:d.a},mixins:[f.a],computed:h()({},Object(u.mapGetters)({sex:"sex",bookShelf:"bookShelf",readRecord:"readRecord",bookShelfPagination:"bookShelfPagination",readRecordPagination:"readRecordPagination"}),{text:function(){return 1==this.active?"没有更多记录了":"没有更多书籍了"},isHaveData:function(){return 1==this.active?this.readRecordIsHaveData:this.bookShelfIsHaveData},pagination:function(){return 1==this.active?this.readRecordIsHaveData.current_page>1:this.bookShelfIsHaveData.current_page>1},isSelectAll:function(){return this.select.length==this.list.length},showDeleteNumber:function(){return this.select.length>0},selectNumber:function(){return this.select.length},list:function(){return 1==this.active?this.readRecord:this.bookShelf},readNull:function(){return 0==this.list.length}}),watch:{},data:function(){return{scroll:"",pullingUpStart:!1,bookShelfIsHaveData:!0,readRecordIsHaveData:!0,active:2,open:!1,select:[],isReport:0,followType:2,isFocus:1,isLoad:!0}},methods:{goHomeFn:function(){this.$router.push("/")},changeActiveFn:function(e){this.open||this.active!=e&&(this.active=e,this.scroll&&(this.scroll.scrollTo(0,0),this.scroll.refresh()),(1==this.active&&this.readRecordIsHaveData||2==this.active&&this.bookShelfIsHaveData)&&this.scroll.openPullUp())},clickCheckedFn:function(e){if(this.open)if(e.checked=!e.checked,e.checked)this.select.push(e.id);else{var t=this.select.findIndex(function(t){return t==e.id});this.select.splice(t,1)}else 2==e.follow_type&&0==e.is_focus&&e.sort>=e.concern_chapter?this.$store.dispatch("setConcernVisible",{show:!0,hidden:!1}):this.isReport?this.$router.push("/404"):(localStorage.setItem("is_automatic",this.is_automatic),this.$router.push("/read/"+e.book_id+"/"+e.chapter_id))},selectAllFn:function(){if(this.isSelectAll){this.select=[];var e=!0,t=!1,s=void 0;try{for(var i,a=l()(this.list);!(e=(i=a.next()).done);e=!0){i.value.checked=!1}}catch(e){t=!0,s=e}finally{try{!e&&a.return&&a.return()}finally{if(t)throw s}}}else{this.select=[];var n=!0,r=!1,o=void 0;try{for(var c,h=l()(this.list);!(n=(c=h.next()).done);n=!0){var u=c.value;u.checked=!0,this.select.push(u.id)}}catch(e){r=!0,o=e}finally{try{!n&&h.return&&h.return()}finally{if(r)throw o}}}},manageFn:function(){this.open=!this.open;var e=!0,t=!1,s=void 0;try{for(var i,a=l()(this.list);!(e=(i=a.next()).done);e=!0){i.value.checked=!1}}catch(e){t=!0,s=e}finally{try{!e&&a.return&&a.return()}finally{if(t)throw s}}this.select=[]},getBookshelfList:function(){var e=r()(a.a.mark(function e(){var t,s=this;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("getBookshelfList",{page:this.bookShelfPagination.current_page});case 2:t=e.sent,this.pullingUpStart=!1,this.$nextTick(function(){200==t.code&&(s.isLoad=!1,s.isReport=1==t.is_report,s.followType=2==t.follow_type,s.isFocus=1==t.is_focus,t.pagination.current_page>=t.pagination.total_pages?(s.bookShelfIsHaveData=!1,s.scroll&&(s.scroll.closePullUp(),s.scroll.refresh())):(s.bookShelfIsHaveData=!0,s.scroll&&(s.scroll.finishPullUp(),s.scroll.refresh())))});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),getReadList:function(){var e=r()(a.a.mark(function e(){var t,s=this;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("getReadList",{page:this.readRecordPagination.current_page});case 2:t=e.sent,this.pullingUpStart=!1,this.$nextTick(function(){200==t.code&&(t.pagination.current_page>=t.pagination.total_pages?(s.readRecordIsHaveData=!1,s.scroll&&(s.scroll.closePullUp(),s.scroll.refresh())):(s.readRecordIsHaveData=!0,s.scroll&&(s.scroll.finishPullUp(),s.scroll.refresh())))});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),getDataFn:function(){1==this.active?this.getReadList():this.getBookshelfList()},deleteBookshelfDelFn:function(){var e=r()(a.a.mark(function e(t){var s=this;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("deleteBookshelfDel",{id:t});case 2:200==e.sent.code&&(this.$Toast({message:"删除书籍成功",duration:1500}),t.split(",").forEach(function(e){var t=s.bookShelf.findIndex(function(t){return t.id==e});s.bookShelf.splice(t,1)}),this.open=this.bookShelf.length>0,this.select=[]);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),deleteReadDelFn:function(){var e=r()(a.a.mark(function e(t){var s=this;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("deleteReadDel",{id:t});case 2:200==e.sent.code&&(this.$Toast({message:"删除书籍成功",duration:1500}),t.split(",").forEach(function(e){var t=s.readRecord.findIndex(function(t){return t.id==e});s.readRecord.splice(t,1)}),this.select=[],this.open=this.readRecord.length>0);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),deleteDataFn:function(){if(this.showDeleteNumber){var e=this.select.toString();1==this.active?this.deleteReadDelFn(e):this.deleteBookshelfDelFn(e)}},initBScroll:function(){var e=this;""==this.scroll?this.$nextTick(function(){e.scroll=new p.a(e.$refs.wrapper,{click:!0,pullUpLoad:{threshold:0}}),e.scroll.on("pullingUp",function(){e.isHaveData&&(e.pullingUpStart=!0,e.getDataFn())})}):this.scroll.refresh()}},created:function(){this.$route.query&&this.$route.query.type&&(this.active=this.$route.query.type),this.getQrcodeNewFn(),this.getReadList(),this.getBookshelfList()},mounted:function(){this.initBScroll()},beforeDestroy:function(){this.scroll&&this.scroll.destroy(),this.$store.dispatch("deleteAllRecord")}},g={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:{"read-null":e.readNull},attrs:{id:"record"}},[i("div",{staticClass:"tabbar clearFix"},[i("span",{directives:[{name:"show",rawName:"v-show",value:e.open&&!e.readNull,expression:"open&&!readNull"}],staticClass:"open-state fl",on:{click:e.selectAllFn}},[e._v(e._s(e.isSelectAll?"取消全选":"全选"))]),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:!e.isLoad&&!e.readNull,expression:"!isLoad&&!readNull"}],staticClass:"open-state fr",on:{click:e.manageFn}},[e._v(e._s(e.open?"完成":"管理"))]),e._v(" "),i("div",{staticClass:"tabbar-all"},[i("span",{class:{active:1==e.active},on:{click:function(t){e.changeActiveFn(1)}}},[e._v("阅读记录")]),e._v(" "),i("span",{class:{active:2==e.active},on:{click:function(t){e.changeActiveFn(2)}}},[e._v("我的书架")])])]),e._v(" "),i("div",{staticClass:"book-container"},[i("div",{ref:"wrapper",staticStyle:{height:"100%"}},[i("div",{staticClass:"wrap"},[i("ul",{staticClass:"books",class:{open:e.open}},[e._l(e.list,function(t){return i("li",{key:t.id,on:{click:function(s){e.clickCheckedFn(t)}}},[t.id?[i("div",{staticClass:"select"},[i("input",{attrs:{type:"checkbox"},domProps:{checked:t.checked}}),e._v(" "),i("span",{staticClass:"checked"})]),e._v(" "),i("div",{staticClass:"cover"},[i("img",{attrs:{src:t._img,alt:""}})]),e._v(" "),i("div",{staticClass:"info"},[i("h3",{staticClass:"name singleClip"},[e._v(e._s(t.name))]),e._v(" "),i("p",{staticClass:"author singleClip"},[e._v(e._s(t.pen_name)+"|"+e._s(t.read_name))]),e._v(" "),i("p",{staticClass:"intro singleClip"},[e._v(e._s(1==t.serial_status?"最近更新:"+(t.new_chapter_name?t.new_chapter_name:"暂无更新"):"已完结"))])])]:e._e()],2)}),e._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:e.pagination,expression:"pagination"}],staticClass:"bottom-top"},[e.pullingUpStart?i("loading"):e._e(),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:!e.pullingUpStart&&e.isHaveData,expression:"!pullingUpStart&&isHaveData"}],staticClass:"loading-hook"},[e._v("加载更多")]),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:!e.pullingUpStart&&!e.isHaveData,expression:"!pullingUpStart&&!isHaveData"}],staticClass:"loading-hook"},[e._v(e._s(e.text))])],1)],2)])])]),e._v(" "),i("div",{staticClass:"delete",class:{active:e.showDeleteNumber,show:e.open},on:{click:e.deleteDataFn}},[e._v("\n    点击删除"),i("span",{directives:[{name:"show",rawName:"v-show",value:e.showDeleteNumber,expression:"showDeleteNumber"}]},[e._v("("+e._s(e.selectNumber)+")")])]),e._v(" "),i("div",{staticClass:"no-record"},[i("div",{staticClass:"avatar"},[1==e.sex?i("img",{attrs:{src:s("bUGu"),alt:""}}):e._e(),e._v(" "),2==e.sex?i("img",{attrs:{src:s("1sRF"),alt:""}}):e._e()]),e._v(" "),i("p",[e._v("亲，啥也没有哦～")]),e._v(" "),i("span",{on:{click:e.goHomeFn}},[e._v("去首页看看")])])])},staticRenderFns:[]};var _=s("VU/8")(v,g,!1,function(e){s("2qki")},"data-v-3eac6a9e",null);t.default=_.exports},BO1k:function(e,t,s){e.exports={default:s("fxRn"),__esModule:!0}},bUGu:function(e,t,s){e.exports=s.p+"static/img/read-null-boy.5ab5595.png"},fxRn:function(e,t,s){s("+tPU"),s("zQR9"),e.exports=s("g8Ux")},g8Ux:function(e,t,s){var i=s("77Pl"),a=s("3fs2");e.exports=s("FeBl").getIterator=function(e){var t=a(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return i(t.call(e))}}});