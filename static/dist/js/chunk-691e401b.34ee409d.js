(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-691e401b"],{"09bc":function(t,e,s){},"29bf":function(t,e,s){"use strict";var a=s("09bc"),n=s.n(a);n.a},"93f9":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"layout"},[s("header",{staticClass:"flex-between flex-vcenter plr-20"},[s("span",{staticClass:"fs-18 font-bold"},[t._v("ClickHouse Management Console")]),s("div",{staticClass:"header-right"},[s("el-dropdown",{staticClass:"pointer"},[s("div",[s("i",{staticClass:"fa fa-user-o fs-20"}),s("span",{staticClass:"fs-16 ml-5 user",domProps:{textContent:t._s(t.user)}})]),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{nativeOn:{click:function(e){return t.loginOut(e)}}},[t._v("Login out")])],1)],1),s("router-link",{attrs:{to:"/setting"}},[s("i",{staticClass:"fa fa-cog fs-20 pointer ml-10"})])],1)]),s("main",{staticClass:"plr-20 pt-10",staticStyle:{"padding-bottom":"85px"}},[s("router-view")],1),s("transition",{attrs:{name:"el-fade-in-linear",appear:""}},[s("footer",{directives:[{name:"show",rawName:"v-show",value:t.$route.params.id,expression:"$route.params.id"}],staticClass:"flex-center width-full"},[s("div",{staticClass:"flex-center list-content width-1000"},t._l(t.menus,(function(e){return s("router-link",{key:e.name,staticClass:"flex flex-1 flex-center height-full pointer list-item",attrs:{to:{path:e.path},"exact-active-class":"router-active"}},[s("span",{staticClass:"fs-20"},[t._v(t._s(e.name))])])})),1)])])],1)},n=[],i=s("8f12"),o={name:"Layout",data:function(){return{menus:i["f"],user:""}},mounted:function(){this.user=JSON.parse(localStorage.getItem("user")||"{}").username},methods:{handleMenuClick:function(t){console.log(t)},loginOut:function(){var t=this;localStorage.removeItem("user"),this.$message.success("成功登出"),setTimeout((function(){t.$router.push({path:"/login"})}),1e3)}},watch:{$route:{handler:function(t,e){this.menus="loader"===t.meta?i["d"]:i["f"]},immediate:!0}}},r=o,l=(s("29bf"),s("2877")),c=Object(l["a"])(r,a,n,!1,null,"9ed5b758",null);e["default"]=c.exports}}]);