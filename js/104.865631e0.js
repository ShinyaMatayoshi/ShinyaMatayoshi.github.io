(self["webpackChunkaboutme"]=self["webpackChunkaboutme"]||[]).push([[104,617],{6322:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return c}});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"about-wrapper",attrs:{id:"about"}},[n("pageTitle",{attrs:{title:"About"}}),n("div",{staticClass:"box-wrapper"},[n("table",[n("tbody",t._l(t.contacts,(function(e,s){return n("tr",{key:s},[n("th",[t._v(t._s(e.key))]),e.url?n("td",{staticClass:"last-td"},[n("a",{attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(e.value)+" ")])]):n("td",{staticClass:"last-td"},[t._v(" "+t._s(e.value)+" ")])])})),0)])])],1)},a=[],r=n(3185),i={name:"About",components:{pageTitle:r.Z},data:function(){return{contacts:[{key:"Name",value:"又吉 真也(Matayoshi Shinya)",url:""},{key:"Corp.",value:"株式会社ソフィア",url:"https://sophia-holdings.jp/"},{key:"GitHub",value:"ShinyaMatayoshi",url:"https://github.com/ShinyaMatayoshi"},{key:"Twitter",value:"@k14i12d1",url:"https://twitter.com/k14i12d1"},{key:"Mail",value:"k14i12d35@gmail.com",url:""}]}}},o=i,l=n(5961),u=(0,l.Z)(o,s,a,!1,null,"993a7f3e",null),c=u.exports},7078:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return c}});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"experiences-wrapper",attrs:{id:"experiences"}},[n("pageTitle",{attrs:{title:"Experiences"}}),n("v-app",[n("v-timeline",{attrs:{reverse:t.reverse,dense:t.dense}},t._l(t.experiences,(function(e,s){return n("v-timeline-item",{key:s,attrs:{color:"#2F80ED","fill-dot":"",small:""}},[n("span",{attrs:{slot:""},slot:"default"},[t._v(t._s(e.term))]),n("span",{staticClass:"elevation-2"},[n("v-card-title",{staticClass:"headline"},[t._v(" "+t._s(e.key)),n("br"),t._v(t._s(e.value)+" ")]),n("v-card-text",[t._v(" "+t._s(e.description)+" ")])],1)])})),1)],1)],1)},a=[],r=n(3185),i={name:"Experiences",components:{pageTitle:r.Z},data:function(){return{width:window.innerWidth,experiences:[{key:"東京消防庁",value:"キッティング",term:"2020/11(a month)",description:"ルーター、L2スイッチ、無線APの初期設定、設定時のログの作成、リース先対応表の作成",language:"TeraTerm"},{key:"Webサービスアプリ運営会社",value:"求人サイト構築支援",term:"2020/6~2020/10",description:"テスト仕様書作成、単体テスト、結合テスト、総合テストの実施、エビデンスの作成、発見したバグの修正(フロント、バックともに対応)、二重送信防止機能の実装を1人称で対応(バックエンド側でのトークンによる制御およびJSによるボタンの非活性化)",language:"Java8(SpringBoot2),JavaScript(Vue.js),PostgreSQL"}]}},computed:{dense:function(){return!(this.width>670)},reverse:function(){return this.width>670}},mounted:function(){window.addEventListener("resize",this.handleResize)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize:function(){this.width=window.innerWidth}}},o=i,l=n(5961),u=(0,l.Z)(o,s,a,!1,null,"49d89b87",null),c=u.exports},8456:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"products-wrapper",attrs:{id:"products"}},[n("pageTitle",{attrs:{title:"Products"}}),n("div",{staticClass:"products"},t._l(t.products,(function(t){return n("productBox",{key:t.link,attrs:{item:t}})})),1)],1)},a=[],r=n(3185),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-box"},[n("a",{attrs:{href:t.item.link,target:"_blank",rel:"noopener noreferrer"}},[n("h2",[t._v(t._s(t.item.name))])]),n("p",{staticClass:"box-content"},[t._v(" "+t._s(t.item.content)+" ")]),n("p",{staticClass:"sub-content"},[t._v(" "+t._s(t.item.subContent)+" ")])])},o=[],l={name:"ProductBox",props:{item:{type:Object,default:function(){}}}},u=l,c=n(5961),d=(0,c.Z)(u,i,o,!1,null,"63904ec7",null),p=d.exports,m={name:"Products",components:{pageTitle:r.Z,productBox:p},data:function(){return{products:[{name:"Medjed",content:"2Dシューティングゲームです。学生の頃4人ほどの有志のチームで作成しました。(コーディングは2人)",subContent:"C++",link:"https://github.com/DWGShuka/Medjed/"},{name:"Portfolio Site",content:"私のPortfolio(このページ)です。いろいろなサイトを参考にしながら1週間前後で完成させました。",subContent:"Vue.js, JavaScript",link:"https://ShinyaMatayoshi.github.io"}]}}},f=m,v=(0,c.Z)(f,s,a,!1,null,"515691ec",null),h=v.exports},1179:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return c}});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"skills-wrapper",attrs:{id:"skills"}},[n("pageTitle",{attrs:{title:"Skills"}}),n("div",{staticClass:"skills"},[n("ul",t._l(t.skills,(function(e,s){return n("li",{key:s},[t._v(" "+t._s(e.name)+" ")])})),0)])],1)},a=[],r=n(3185),i={name:"Skills",components:{pageTitle:r.Z},data:function(){return{skills:[{name:"R"},{name:"Python(3.x)"},{name:"JavaScript (ES6)"},{name:"Vue.js / Node.js"},{name:"C"},{name:"C++"},{name:"Java"},{name:"SpringBoot2"},{name:"GitHub"},{name:"Docker"},{name:"TeraTerm"},{name:"Circle CI"},{name:"PostgresSQL"}]}}},o=i,l=n(5961),u=(0,l.Z)(o,s,a,!1,null,"1dcebbd1",null),c=u.exports},8501:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return f}});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("section",{staticClass:"top-wrapper",attrs:{id:"top"}},[n("h1",[t._v(t._s(t.msg))])]),n("About"),n("Experiences"),n("Products"),n("Skills"),n("Contact")],1)},a=[],r=n(6322),i=n(7078),o=n(8456),l=n(1179),u=n(2745),c={name:"Top",components:{About:r.default,Experiences:i.default,Products:o.default,Skills:l.default,Contact:u.default},data:function(){return{msg:"Welcome to Shinya Matayoshi's Portfolio Site"}}},d=c,p=n(5961),m=(0,p.Z)(d,s,a,!1,null,"5fc373c6",null),f=m.exports}}]);
//# sourceMappingURL=104.865631e0.js.map