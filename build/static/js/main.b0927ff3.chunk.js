(this["webpackJsonpreact-gallery"]=this["webpackJsonpreact-gallery"]||[]).push([[0],{35:function(t,e,o){},60:function(t,e,o){"use strict";o.r(e);var c=o(1),s=o.n(c),n=o(29),a=o.n(n),r=(o(35),o(12)),h=o(13),i=o(15),l=o(14),j=o(8),u=o(2),d=o(11),b=o.n(d),f="80b53bdd52104a7e511ad1a80c986b77",p=o(0),O=function(){return Object(p.jsx)("nav",{className:"main-nav",children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)(j.b,{to:"/food",children:"Food"})}),Object(p.jsx)("li",{children:Object(p.jsx)(j.b,{to:"/beaches",children:"Beaches"})}),Object(p.jsx)("li",{children:Object(p.jsx)(j.b,{to:"/sunset",children:"Sunset"})})]})})},x=function(t){Object(i.a)(o,t);var e=Object(l.a)(o);function o(){var t;Object(r.a)(this,o);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(t=e.call.apply(e,[this].concat(s))).submitSearch=function(e){e.preventDefault(),t.props.onSearch(t.query.value);var o="/search/".concat(t.query.value);t.props.history.push(o),e.currentTarget.reset()},t}return Object(h.a)(o,[{key:"render",value:function(){var t=this;return Object(p.jsxs)("form",{className:"search-form",onSubmit:this.submitSearch,children:[Object(p.jsx)("input",{type:"search",name:"search",ref:function(e){return t.query=e},placeholder:"Search",required:!0}),Object(p.jsx)("button",{type:"submit",className:"search-button",children:Object(p.jsxs)("svg",{fill:"#fff",height:"24",viewBox:"0 0 23 23",width:"24",xmlns:"http://www.w3.org/2000/svg",children:[Object(p.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),Object(p.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"})]})})]})}}]),o}(c.PureComponent),g=Object(u.f)(x),m=function(t){return Object(p.jsx)("li",{children:Object(p.jsx)("img",{src:t.url,alt:t.title})})},v=function(){return Object(p.jsxs)("li",{className:"not-found",children:[Object(p.jsx)("h3",{children:"No Results Found"}),Object(p.jsx)("p",{children:"You search did not return any results. Please try again."})]})},P=Object(u.f)((function(t){var e,o=t.data;return e=o.length>0?o.map((function(t){return Object(p.jsx)(m,{url:"https://live.staticflickr.com/".concat(t.server,"/").concat(t.id,"_").concat(t.secret,".jpg")},t.id)})):Object(p.jsx)(v,{}),Object(p.jsx)("div",{className:"photo-container",children:Object(p.jsxs)("ul",{children:[e,console.log(e)]})})})),k=function(){return Object(p.jsxs)("li",{className:"not-found",children:[Object(p.jsx)("h3",{children:"Page Not Found (404)"}),Object(p.jsx)("p",{children:"Please redirect to a different URL"})]})},w=function(t){Object(i.a)(o,t);var e=Object(l.a)(o);function o(){var t;return Object(r.a)(this,o),(t=e.call(this)).searchPhotos=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"flowers";b.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(f,"&tags=").concat(e,"&per_page=24&format=json&nojsoncallback=1")).then((function(e){t.setState({photos:e.data.photos.photo})})).catch((function(t){console.log(t)}))},t.getFoodPhotos=function(){b.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(f,"&tags=food&per_page=24&format=json&nojsoncallback=1")).then((function(e){t.setState({foodPhotos:e.data.photos.photo})})).catch((function(t){console.log(t)}))},t.getBeachPhotos=function(){b.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(f,"&tags=beach&per_page=24&format=json&nojsoncallback=1")).then((function(e){t.setState({beachPhotos:e.data.photos.photo})})).catch((function(t){console.log(t)}))},t.getSunsetPhotos=function(){b.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(f,"&tags=sunset&per_page=24&format=json&nojsoncallback=1")).then((function(e){t.setState({sunsetPhotos:e.data.photos.photo})})).catch((function(t){console.log(t)}))},console.log("Test constructed"),t.state={photos:[],foodPhotos:[],beachPhotos:[],sunsetPhotos:[],loading:!0},t}return Object(h.a)(o,[{key:"componentDidMount",value:function(){console.log("Test mounted"),this.searchPhotos(),this.getFoodPhotos(),this.getBeachPhotos(),this.getSunsetPhotos()}},{key:"render",value:function(){var t=this;return console.log("Test rendered"),Object(p.jsx)(j.a,{children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(g,{onSearch:this.searchPhotos}),Object(p.jsx)(O,{}),Object(p.jsxs)(u.c,{children:[Object(p.jsx)(u.a,{exact:!0,path:"/",render:function(){return Object(p.jsx)(P,{data:t.state.photos})}}),Object(p.jsx)(u.a,{exact:!0,path:"/search/:query",render:function(){return Object(p.jsx)(P,{data:t.state.photos})}}),Object(p.jsx)(u.a,{path:"/food",render:function(){return Object(p.jsx)(P,{data:t.state.foodPhotos,onClick:t.getFoodPhotos})}}),Object(p.jsx)(u.a,{path:"/beaches",render:function(){return Object(p.jsx)(P,{data:t.state.beachPhotos,onClick:t.getBeachPhotos})}}),Object(p.jsx)(u.a,{path:"/sunset",render:function(){return Object(p.jsx)(P,{data:t.state.sunsetPhotos,onClick:t.getSunsetPhotos})}}),Object(p.jsx)(u.a,{component:k})]})]})})}}]),o}(c.PureComponent);a.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(w,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.b0927ff3.chunk.js.map