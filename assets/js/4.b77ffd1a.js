(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{305:function(t,a,s){"use strict";s.r(a);s(166),s(30),s(164),s(167),s(61),s(163),s(302),s(303),s(165);var e=s(304),r=s.n(e),i={data:function(){return{selectedTag:"*"}},computed:{layout:function(){return this.$page.path?this.$frontmatter.layout?this.$frontmatter.layout:"Layout":"NotFound"},projects:function(){return this.$site.pages.filter((function(t){return t.path.indexOf("/project/")>=0})).sort((function(t,a){return t.frontmatter.date<a.frontmatter.date?-1:t.frontmatter.date>a.frontmatter.date?1:0})).reverse()},tags:function(){var t=this.projects.map((function(t){return t.frontmatter.tags})).reduce((function(t,a){return t.concat(a)}));return t=r.a.uniq(t).map((function(t){return{text:t,value:r.a.snakeCase(t)}})),t.unshift({text:"All",value:"*"}),this.selectedTag=t[1].value,t}},methods:{shouldShowProject:function(t){if("*"==this.selectedTag)return!0;var a=t.frontmatter.tags;return a.length>0&&a.map((function(t){return r.a.snakeCase(t)})).includes(this.selectedTag)}}},n=s(41),l=Object(n.a)(i,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"theme-container home-layout"},[s("b-container",[s("b-row",[s("b-col",{staticClass:"text-center my-5"},[s("b-alert",{staticClass:"mb-5",attrs:{show:""}},[t._v("This site is currently under construction")]),t._v(" "),s("img",{staticClass:"avatar mb-5 medium-zoom",attrs:{src:t.$page.frontmatter.avatar,alt:"avatar"}}),t._v(" "),s("h2",{staticClass:"mb-4 display-4"},[t._v("Hi! I'm "+t._s(t.$page.frontmatter.title))]),t._v(" "),s("div",{staticClass:"lead"},[s("Content")],1),t._v(" "),void 0!==t.$site.themeConfig.social?s("div",{staticClass:"mt-5"},[s("h4",{staticClass:"mb-4"},[t._v("Contact Me")]),t._v(" "),s("ul",{staticClass:"mb-4 social"},t._l(t.$site.themeConfig.social,(function(t){return s("li",{key:t.url,staticClass:"mx-3"},[s("a",{attrs:{href:t.url,target:"_blank"}},[s("font-awesome-icon",{attrs:{icon:t.icon,size:"3x"}})],1)])})),0)]):t._e()],1)],1)],1),t._v(" "),void 0!==t.$page.frontmatter.skills?s("div",{staticClass:"pb-4 skills"},[s("div",{staticClass:"separator mb-5"}),t._v(" "),s("h1",{staticClass:"text-center mb-4"},[t._v("Skills Summary")]),t._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center pt-2"},t._l(t.$page.frontmatter.skills,(function(a){return s("div",{key:a.title,staticClass:"col-12 col-lg-4"},[s("div",{staticClass:"rounded-lg bg-light pt-4 pb-2 px-4 mb-4"},[s("h4",{staticClass:"mb-4 mt-1"},[t._v(t._s(a.title))]),t._v(" "),s("ul",t._l(a.skills,(function(a){return s("li",{staticClass:"mb-4"},[s("div",{staticClass:"title mb-1"},[t._v(t._s(a[0]))]),t._v(" "),s("div",{staticClass:"text-muted"},[t._v(t._s(a[1]))])])})),0)])])})),0)])]):t._e(),t._v(" "),s("div",{staticClass:"bg-light"},[s("b-container",[s("b-row",[s("b-col",{staticClass:"my-5"},[s("h1",{staticClass:"mb-4 text-center"},[t._v("Noteworthy Projects")]),t._v(" "),s("div",{staticClass:"text-center pt-3 mb-2"},[s("b-button-group",{staticClass:"mb-4 flex-wrap",attrs:{label:""}},t._l(t.tags,(function(a){return s("b-button",{key:a.value,staticClass:"mb-3",class:{active:t.selectedTag==a.value},attrs:{variant:"outline-secondary"},on:{click:function(s){t.selectedTag=a.value}}},[t._v(t._s(a.text))])})),1)],1),t._v(" "),s("transition-group",{staticClass:"projects",attrs:{name:"projects"}},t._l(t.projects,(function(a){return t.shouldShowProject(a)?s("a",{key:a.path,staticClass:"project",attrs:{href:a.path}},[s("img",{attrs:{src:a.frontmatter.thumbnail,alt:""}}),t._v(" "),s("p",{staticClass:"lead px-3 pt-3 mb-1 font-weight-normal text-center"},[t._v(t._s(a.title))]),t._v(" "),s("p",{staticClass:"px-3 text-muted mb-2 clamp-2 text-center desc"},[t._v(t._s(a.frontmatter.description))]),t._v(" "),s("div",{staticClass:"mx-3 mb-3 clamp-1 text-center"},t._l(a.frontmatter.tags,(function(a){return s("b-badge",{key:a,staticClass:"mr-1",attrs:{variant:"light bg-light font-weight-normal"}},[t._v(t._s(a))])})),1)]):t._e()})),0)],1)],1)],1)],1)],1)}),[],!1,null,null,null);a.default=l.exports}}]);