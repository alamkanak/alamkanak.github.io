(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{303:function(t,a,e){"use strict";e.r(a);e(166),e(30),e(164),e(167),e(61),e(163),e(165);var s=e(302),r=e.n(s),n={data:function(){return{selectedTag:"*"}},computed:{layout:function(){return this.$page.path?this.$frontmatter.layout?this.$frontmatter.layout:"Layout":"NotFound"},projects:function(){return this.$site.pages.filter((function(t){return t.path.indexOf("/project/")>=0}))},tags:function(){var t=this.projects.map((function(t){return t.frontmatter.tags})).reduce((function(t,a){return t.concat(a)}));return t=r.a.uniq(t).map((function(t){return{text:t,value:r.a.snakeCase(t)}})),t.unshift({text:"All",value:"*"}),this.selected=t[0].value,t}},methods:{shouldShowProject:function(t){if("*"==this.selectedTag)return!0;var a=t.frontmatter.tags;return a.length>0&&a.map((function(t){return r.a.snakeCase(t)})).includes(this.selectedTag)}}},i=e(41),o=Object(i.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"theme-container home-layout"},[e("b-container",[e("b-row",[e("b-col",{staticClass:"text-center my-5"},[e("b-alert",{staticClass:"mb-5",attrs:{show:""}},[t._v("This site is currently under construction")]),t._v(" "),e("img",{staticClass:"avatar mb-5",attrs:{src:t.$page.frontmatter.avatar,alt:"avatar"}}),t._v(" "),e("h2",{staticClass:"mb-4 display-4"},[e("span",{staticClass:"text-muted"},[t._v("Hi! I'm")]),t._v(" "+t._s(t.$page.frontmatter.title))]),t._v(" "),e("div",{staticClass:"lead"},[e("Content")],1),t._v(" "),void 0!==t.$site.themeConfig.social?e("div",{staticClass:"mt-5"},[e("h4",{staticClass:"mb-4"},[t._v("Contact Me")]),t._v(" "),e("ul",{staticClass:"mb-4 social"},t._l(t.$site.themeConfig.social,(function(t){return e("li",{key:t.url,staticClass:"mx-3"},[e("a",{attrs:{href:t.url,target:"_blank"}},[e("font-awesome-icon",{attrs:{icon:t.icon,size:"3x"}})],1)])})),0)]):t._e()],1)],1)],1),t._v(" "),e("div",{staticClass:"bg-light"},[e("b-container",[e("b-row",[e("b-col",{staticClass:"my-5"},[e("h1",{staticClass:"mb-4 text-center"},[t._v("Projects")]),t._v(" "),e("b-form-group",{staticClass:"text-center mb-5",attrs:{label:""}},[e("b-form-radio-group",{attrs:{id:"btn-radios-1","button-variant":"outline-dark",options:t.tags,buttons:"",name:"radios-btn-default"},model:{value:t.selectedTag,callback:function(a){t.selectedTag=a},expression:"selectedTag"}})],1),t._v(" "),e("transition-group",{staticClass:"projects",attrs:{name:"projects"}},t._l(t.projects,(function(a){return t.shouldShowProject(a)?e("a",{key:a.path,staticClass:"project",attrs:{href:a.path}},[e("img",{attrs:{src:a.frontmatter.thumbnail,alt:""}}),t._v(" "),e("p",{staticClass:"lead px-3 pt-3 mb-1 font-weight-normal"},[t._v(t._s(a.title))]),t._v(" "),e("p",{staticClass:"px-3 text-muted mb-2 clamp-2 text-center desc"},[t._v(t._s(a.frontmatter.description))]),t._v(" "),e("div",{staticClass:"mx-3 mb-3 clamp-1 text-center"},t._l(a.frontmatter.tags,(function(a){return e("b-badge",{key:a,staticClass:"mr-1",attrs:{variant:"light bg-light font-weight-normal"}},[t._v(t._s(a))])})),1)]):t._e()})),0)],1)],1)],1)],1)],1)}),[],!1,null,null,null);a.default=o.exports}}]);