webpackJsonp([1],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("span",[this._v("body 页面")]),this._v(" "),t("br"),this._v(" "),t("router-link",{attrs:{to:"/love"}},[this._v("点击进入")])],1)},staticRenderFns:[]},o=n("VU/8")({name:"bodyer"},s,!1,null,null,null).exports,l={name:"hero",methods:{sendAjax:function(){this.$ajax.post("/user/vue",{name:"chevysky",sex:"man",age:16}).then(function(e){console.log(e),console.log(e.data),alert(e.data)})},sendNoParams:function(){this.$ajax.post("/user/vues").then(function(e){alert("请求成功")})}}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",[e._v("yesterday is history")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.sendAjax()}}},[e._v("发送ajax请求")]),e._v(" "),n("el-button",{attrs:{type:"success"},on:{click:function(t){e.sendNoParams()}}},[e._v("无参发送请求")])],1)},staticRenderFns:[]},i={name:"App",components:{bodyer:o,hero:n("VU/8")(l,r,!1,null,null,null).exports},methods:{hello:function(){this.$router.push("/hello")},bodyer:function(){this.$router.push("/body")},love:function(){this.$router.push("/love")}}},c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"index"}},[n("el-row",{staticClass:"headbg"},[n("el-col",{attrs:{span:24}},[e._v("系统标题")])],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:6}},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"2"}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),e._v(" "),n("span",[e._v("导航一")])]),e._v(" "),n("el-menu-item",{attrs:{index:"1-1"},on:{click:function(t){e.hello()}}},[e._v("\n                hello页面\n            ")]),e._v(" "),n("el-menu-item",{attrs:{index:"1-2"},on:{click:function(t){e.bodyer()}}},[e._v("\n             body页面\n          ")]),e._v(" "),n("el-menu-item",{attrs:{index:"1-3"},on:{click:function(t){e.love()}}},[e._v("选项3")])],2),e._v(" "),n("el-menu-item",{attrs:{index:"2"}},[n("i",{staticClass:"el-icon-menu"}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("导航二")])])],1)],1),e._v(" "),n("el-col",{attrs:{span:18}},[n("bodyer"),e._v(" "),n("hero"),e._v(" "),n("router-view",{attrs:{name:"a"}})],1)],1),e._v(" "),n("el-row",[n("el-col",{staticClass:"footbg",attrs:{span:24}},[e._v("\n  页脚\n   "),n("router-view",{attrs:{name:"b"}})],1)],1)],1)},staticRenderFns:[]};var u=n("VU/8")(i,c,!1,function(e){n("f2+c")},null,null).exports,v=n("Gu7T"),d=n.n(v),p=n("/ocq"),m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._v(" "),n("h2",[e._v("Essential Links")]),e._v(" "),n("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),n("span",[e._v(e._s(e.name))]),e._v(" "),n("el-input",{attrs:{placeholder:"请输入年龄"},model:{value:e.age,callback:function(t){e.age=t},expression:"age"}}),e._v(" "),n("span",[e._v(e._s(e.age))]),e._v(" "),n("el-input",{attrs:{placeholder:"请输入性别"},model:{value:e.sex,callback:function(t){e.sex=t},expression:"sex"}}),e._v(" "),n("span",[e._v(e._s(e.sex))]),e._v(" "),n("el-button",{attrs:{type:"warning"},on:{click:function(t){e.userSend()}}},[e._v("提交表单数据")])],1)},staticRenderFns:[]};var _=n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App",name:"chevysky",age:18,sex:"man"}},methods:{userSend:function(){}}},m,!1,function(e){n("tD05")},"data-v-6391e086",null).exports,h={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("span",[this._v(this._s(this.love)+" ")])])},staticRenderFns:[]},f=n("VU/8")({name:"love",data:function(){return{love:"stay away from love"}}},h,!1,null,null,null).exports,b={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n    德玛西亚 德玛西亚 德玛西亚\n")])},staticRenderFns:[]},x=[{path:"/love",components:{a:f,b:o}},{path:"/man",name:"heroman",component:n("VU/8")({name:"man"},b,!1,null,null,null).exports}];a.default.use(p.a);var y=new p.a({routes:[].concat(d()(x),[{path:"/hello",name:"HelloWorld",components:{a:_,b:o}},{path:"/body",name:"bodyer",components:{a:_,b:f}}])}),g=n("zL8q"),k=n.n(g),$=(n("tvR6"),n("mtWM")),w=n.n($);a.default.use(k.a),a.default.prototype.$ajax=w.a,w.a.defaults.timeout=5e3,w.a.defaults.headers.post["Content-Type"]="application/json;charset=UTF-8",w.a.defaults.baseURL="http://localhost:8080/",a.default.config.productionTip=!1,new a.default({el:"#app",router:y,components:{App:u},template:"<App/>"})},"f2+c":function(e,t){},tD05:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.5d0647b88effdcf554d2.js.map