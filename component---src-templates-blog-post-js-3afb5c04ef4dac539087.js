(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{197:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});a(18);var r=a(0),n=a.n(r),i=a(202),o=a(208),s=a(205),l=a(206),d=a(200);var c=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,r=a.previous,c=a.next;return n.a.createElement(s.a,{location:this.props.location,title:t},n.a.createElement(l.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),n.a.createElement("article",null,n.a.createElement("header",null,n.a.createElement("h1",{style:{marginTop:Object(d.a)(1),marginBottom:0}},e.frontmatter.title),n.a.createElement("p",{style:Object.assign({},Object(d.b)(-.2),{display:"block",marginBottom:Object(d.a)(1)})},e.frontmatter.date)),n.a.createElement("section",{dangerouslySetInnerHTML:{__html:e.html}}),n.a.createElement("hr",{style:{marginBottom:Object(d.a)(1)}}),n.a.createElement("footer",null,n.a.createElement(o.a,null))),n.a.createElement("nav",null,n.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},n.a.createElement("li",null,r&&n.a.createElement(i.a,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),n.a.createElement("li",null,c&&n.a.createElement(i.a,{to:c.fields.slug,rel:"next"},c.frontmatter.title," →")))))},r}(n.a.Component);t.default=c;var u="3654438753"},200:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d});var r=a(212),n=a.n(r),i=a(213),o=a.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var s=new n.a(o.a);var l=s.rhythm,d=s.scale},201:function(e,t,a){var r;e.exports=(r=a(203))&&r.default||r},202:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(66),o=a.n(i);a.d(t,"a",function(){return o.a});a(201),a(9).default.enqueue,n.a.createContext({})},203:function(e,t,a){"use strict";a.r(t);a(18);var r=a(0),n=a.n(r),i=a(94);t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},204:function(e,t,a){"use strict";a(209)("fixed",function(e){return function(){return e(this,"tt","","")}})},205:function(e,t,a){"use strict";a(18);var r=a(0),n=a.n(r),i=a(202),o=a(200);var s=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e,t=this.props,a=t.location,r=t.title,s=t.children;return e="/"===a.pathname?n.a.createElement("h1",{style:Object.assign({},Object(o.b)(1.5),{marginBottom:Object(o.a)(1.5),marginTop:0})},n.a.createElement(i.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):n.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},n.a.createElement(i.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),n.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(o.a)(30),padding:Object(o.a)(1.5)+" "+Object(o.a)(.75)}},n.a.createElement("header",null,e),n.a.createElement("main",null,s),n.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",n.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},r}(n.a.Component);t.a=s},206:function(e,t,a){"use strict";var r=a(207),n=a(0),i=a.n(n),o=a(214),s=a.n(o);function l(e){var t=e.description,a=e.lang,n=e.meta,o=e.title,l=r.data.site,d=t||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:d}].concat(n)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},207:function(e){e.exports={data:{site:{siteMetadata:{title:"CP's software journey",description:"Random things I want to capture in my software journey",author:"Clemens Park"}}}}},208:function(e,t,a){"use strict";a(204);var r=a(210),n=a(0),i=a.n(n),o=a(211),s=a.n(o),l=a(200);t.a=function(){var e=r.data,t=e.site.siteMetadata,a=t.author;t.social;return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(2.5)}},i.a.createElement(s.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(l.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),i.a.createElement("p",null,"Written by ",i.a.createElement("strong",null,a)," who codes for a living."))}},209:function(e,t,a){var r=a(1),n=a(7),i=a(32),o=/"/g,s=function(e,t,a,r){var n=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},210:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUEAgb/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAGpP2Toqu4I8qNJ1BH/xAAaEAADAAMBAAAAAAAAAAAAAAABAgMAERIE/9oACAEBAAEFAvQ5WUXZWy5HERum8Ykno4LUA//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EAB0QAAICAQUAAAAAAAAAAAAAAAABECESESIxMkH/2gAIAQEABj8CeNMW/LXxxbFFnJ2P/8QAHRABAAEDBQAAAAAAAAAAAAAAAREAECExQVGBof/aAAgBAQABPyFOciE8VITnBT2yWAbk0WFpmyUJW2iQu6//2gAMAwEAAgADAAAAEA/fP//EABcRAQEBAQAAAAAAAAAAAAAAABEBABD/2gAIAQMBAT8Qkg8c7//EABcRAQEBAQAAAAAAAAAAAAAAABEAARD/2gAIAQIBAT8QWOGX/8QAHhABAAMAAQUBAAAAAAAAAAAAAQARIWExQYGRscH/2gAIAQEAAT8QKCIvtXX1HYK9jFqnJCqI2oMFVv7DetLXBsMTmdC2wei3W7MYIbPL7P/Z",width:50,height:50,src:"/static/f847cd8362f8c817b553da9a646cd326/9b664/profile-pic.jpg",srcSet:"/static/f847cd8362f8c817b553da9a646cd326/9b664/profile-pic.jpg 1x,\n/static/f847cd8362f8c817b553da9a646cd326/06a10/profile-pic.jpg 1.5x,\n/static/f847cd8362f8c817b553da9a646cd326/f1b5a/profile-pic.jpg 2x"}}},site:{siteMetadata:{author:"Clemens Park",social:{twitter:"clemens_park"}}}}}},211:function(e,t,a){"use strict";a(29),a(30),a(13),a(92),a(133),a(204);var r=a(14);t.__esModule=!0,t.default=void 0;var n,i=r(a(68)),o=r(a(71)),s=r(a(136)),l=r(a(137)),d=r(a(0)),c=r(a(52)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},A=Object.create({}),p=function(e){var t=u(e),a=f(t);return A[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,h=m&&window.IntersectionObserver,b=new WeakMap;function y(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),d.default.createElement("source",{media:n,srcSet:a,sizes:i}))})}function E(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function v(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function S(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var j=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},B=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)}).join("")+"<img "+d+o+s+a+r+t+i+n+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=d.default.createElement(R,(0,l.default)({src:t},n));return a.length>1?d.default.createElement("picture",null,r(a),i):i},R=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,A=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:n},A,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});R.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var x=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=m&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&h&&!t.critical&&!a.seenBefore;var r=t.critical||"eager"==t.loading||m&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),A[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,A=e.placeholderClassName,p=e.fluid,g=e.fixed,m=e.backgroundColor,h=e.durationFadeIn,b=e.Tag,E=e.itemProp,w=e.loading,j=e.draggable,x=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,l.default)({opacity:x?1:0,transition:O?"opacity "+h+"ms":"none"},s),Q="boolean"==typeof m?"lightgray":m,C={transitionDelay:h+"ms"},M=(0,l.default)({opacity:this.state.imgLoaded?0:1},O&&C,s,f),T={title:t,alt:this.state.isVisible?"":a,style:M,className:A};if(p){var N=p,k=N[0];return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),Q&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:Q,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&C)}),k.base64&&d.default.createElement(I,{src:k.base64,spreadProps:T,imageVariants:N,generateSources:S}),k.tracedSVG&&d.default.createElement(I,{src:k.tracedSVG,spreadProps:T,imageVariants:N,generateSources:v}),this.state.isVisible&&d.default.createElement("picture",null,y(N),d.default.createElement(R,{alt:a,title:t,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:j})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:B((0,l.default)({alt:a,title:t,loading:w},k,{imageVariants:N}))}}))}if(g){var V=g,P=V[0],D=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},i);return"inherit"===i.display&&delete D.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:D,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},Q&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:Q,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},O&&C)}),P.base64&&d.default.createElement(I,{src:P.base64,spreadProps:T,imageVariants:V,generateSources:S}),P.tracedSVG&&d.default.createElement(I,{src:P.tracedSVG,spreadProps:T,imageVariants:V,generateSources:v}),this.state.isVisible&&d.default.createElement("picture",null,y(V),d.default.createElement(R,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:j})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:B((0,l.default)({alt:a,title:t,loading:w},P,{imageVariants:V}))}}))}return null},t}(d.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),L=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});x.propTypes={resolutions:O,sizes:L,fixed:c.default.oneOfType([O,c.default.arrayOf(O)]),fluid:c.default.oneOfType([L,c.default.arrayOf(L)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var Q=x;t.default=Q}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-3afb5c04ef4dac539087.js.map