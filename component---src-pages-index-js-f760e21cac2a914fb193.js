(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),l=r(a("8OQS")),o=r(a("pVnL")),c=r(a("q1tI")),d=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},m=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},A=Object.create({}),f=function(e){var t=u(e),a=m(t);return A[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,g="undefined"!=typeof window,h=g&&window.IntersectionObserver,E=new WeakMap;function b(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),c.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function v(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function y(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function S(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var N=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},j=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?S(e,!0):"")+S(e)})).join("")+"<img "+c+s+l+a+r+t+n+i+o+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},B=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=c.default.createElement(k,(0,o.default)({src:t},i));return a.length>1?c.default.createElement("picture",null,r(a),n):n},k=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,d=e.onError,u=e.loading,m=e.draggable,A=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:i},A,{onLoad:s,onError:d,ref:t,loading:u,draggable:m,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));k.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var x=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=g&&f(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!p&&h&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||g&&(p||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=N(e,(function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=m(t),A[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,d=e.placeholderStyle,m=void 0===d?{}:d,A=e.placeholderClassName,f=e.fluid,p=e.fixed,g=e.backgroundColor,h=e.durationFadeIn,E=e.Tag,v=e.itemProp,S=e.loading,N=e.draggable,x=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,o.default)({opacity:x?1:0,transition:C?"opacity "+h+"ms":"none"},l),R="boolean"==typeof g?"lightgray":g,I={transitionDelay:h+"ms"},L=(0,o.default)({opacity:this.state.imgLoaded?0:1},C&&I,{},l,{},m),Q={title:t,alt:this.state.isVisible?"":a,style:L,className:A,itemProp:v};if(f){var V=f,Y=V[0];return c.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(Y.srcSet)},c.default.createElement(E,{style:{width:"100%",paddingBottom:100/Y.aspectRatio+"%"}}),R&&c.default.createElement(E,{title:t,style:(0,o.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&I)}),Y.base64&&c.default.createElement(B,{src:Y.base64,spreadProps:Q,imageVariants:V,generateSources:w}),Y.tracedSVG&&c.default.createElement(B,{src:Y.tracedSVG,spreadProps:Q,imageVariants:V,generateSources:y}),this.state.isVisible&&c.default.createElement("picture",null,b(V),c.default.createElement(k,{alt:a,title:t,sizes:Y.sizes,src:Y.src,crossOrigin:this.props.crossOrigin,srcSet:Y.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:S,draggable:N})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,o.default)({alt:a,title:t,loading:S},Y,{imageVariants:V}))}}))}if(p){var z=p,P=z[0],_=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},n);return"inherit"===n.display&&delete _.display,c.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:_,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},R&&c.default.createElement(E,{title:t,style:(0,o.default)({backgroundColor:R,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},C&&I)}),P.base64&&c.default.createElement(B,{src:P.base64,spreadProps:Q,imageVariants:z,generateSources:w}),P.tracedSVG&&c.default.createElement(B,{src:P.tracedSVG,spreadProps:Q,imageVariants:z,generateSources:y}),this.state.isVisible&&c.default.createElement("picture",null,b(z),c.default.createElement(k,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:S,draggable:N})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,o.default)({alt:a,title:t,loading:S},P,{imageVariants:z}))}}))}return null},t}(c.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),O=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});x.propTypes={resolutions:C,sizes:O,fixed:d.default.oneOfType([C,d.default.arrayOf(C)]),fluid:d.default.oneOfType([O,d.default.arrayOf(O)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var R=x;t.default=R},OGtf:function(e,t,a){var r=a("XKFU"),i=a("eeVq"),n=a("vhPU"),s=/"/g,l=function(e,t,a,r){var i=String(n(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),l+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=(a("Wbzz"),a("YZX3"),a("9eSz"),a("Bl7J")),s=a("vrFN");a.d(t,"pageQuery",(function(){return o}));var l=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title;e.allMarkdownRemark.edges;return i.a.createElement(n.a,{location:this.props.location,title:t},i.a.createElement(s.a,{title:"All posts"}),i.a.createElement(i.a.Fragment,null,i.a.createElement("section",{className:"hero_section"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"hero-wrap"},i.a.createElement("div",{className:"hero"},i.a.createElement("div",{className:"brand"},i.a.createElement("a",{href:"/"},i.a.createElement("img",{src:"uigate.png",className:"logomark"}),i.a.createElement("img",{src:"uigate-logo.png",className:"logotype"}))),i.a.createElement("div",{className:"txt"},i.a.createElement("h2",null,"A modern age digital ",i.a.createElement("strong",null,"creative studio")),i.a.createElement("p",null," We are a team of designers, dreamer, storyteller, illustrator, and developers with the aim to build great design solutions for even the most complicated problems.")),i.a.createElement("div",{className:"worked"},i.a.createElement("h4",null,"Worked with"),i.a.createElement("div",{className:"brand"},i.a.createElement("img",{src:"eversend.png"}),i.a.createElement("img",{src:"feedly.png"}),i.a.createElement("img",{src:"learnapp.png"}))))))),i.a.createElement("section",{className:"product_section"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"product-list-wrap"},i.a.createElement("h4",null,"Our Products"),i.a.createElement("div",{className:"product-list"},i.a.createElement("div",{className:"product-wrap"},i.a.createElement("a",{href:"https://illlustrations.co",className:"product",target:"__blank"},i.a.createElement("img",{src:"/illlustrations.png"}),i.a.createElement("p",null,"Open-source illustrations library, contain more than 100+ illustrations"),i.a.createElement("h5",null,"illlustrations.co"),i.a.createElement("div",{className:"tags ph"},"#3 of the day at product hunt"))),i.a.createElement("div",{className:"product-wrap"},i.a.createElement("a",{href:"https://uiprint.co",className:"product",target:"__blank"},i.a.createElement("img",{src:"/uiprint.png"}),i.a.createElement("p",null,"Collection of printable wireframe, mockup and dot grid sketchpad templates."),i.a.createElement("h5",null,"uiprint.co"),i.a.createElement("div",{className:"tags ph"},"#1 of the day at product hunt"))),i.a.createElement("div",{className:"product-wrap"},i.a.createElement("a",{href:"https://uilogos.co",className:"product"},i.a.createElement("img",{src:"/uilogos.png"}),i.a.createElement("p",null,"Sketch and XD Plugin to insert professional logos in design persentations."),i.a.createElement("h5",null,"uilogos.co"))),i.a.createElement("div",{className:"product-wrap"},i.a.createElement("a",{href:"https://instagram.com/uihues",className:"product"},i.a.createElement("img",{src:"/uihues.png"}),i.a.createElement("p",null,"Curated collection of color palettes and gradient."),i.a.createElement("h5",null,"uihues.com"))),i.a.createElement("div",{className:"product-wrap"},i.a.createElement("a",{href:"https://graficspark.com",className:"product"},i.a.createElement("img",{src:"/graficspark.png"}),i.a.createElement("p",null,"Digital Market place for design mockups and illustrations."),i.a.createElement("h5",null,"graficspark.com"))),i.a.createElement("div",{className:"product-wrap"},i.a.createElement("a",{href:"https://makerofthis.co",className:"product"},i.a.createElement("img",{src:"/mot.png"}),i.a.createElement("p",null,"Curated list of real makers."),i.a.createElement("div",{className:"tags soon"},"comming soon"))),i.a.createElement("div",{className:"product-wrap"},i.a.createElement("a",{href:"#",className:"product"},i.a.createElement("img",{src:"/uischool.png"}),i.a.createElement("p",null,"Next generation design school."),i.a.createElement("div",{className:"tags soon"},"comming soon"))))))),i.a.createElement("section",{className:"team_section"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"team-list-wrap"},i.a.createElement("h4",null,"Who we are"),i.a.createElement("div",{className:"team-wrap"},i.a.createElement("div",{className:"team"},i.a.createElement("div",{className:"t-img"},i.a.createElement("img",{src:"vijay-verma.jpg"})),i.a.createElement("div",{className:"t-txt"},i.a.createElement("h1",null,"vijay verma"),i.a.createElement("h3",null,"Founder / Design Cheif"),i.a.createElement("ul",{className:"social"},i.a.createElement("li",null,i.a.createElement("a",{href:"https://dribbble.com/uigate",target:"__blank"},i.a.createElement("img",{src:"/dribbble.svg"}))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://instagram.com/realvjy",target:"__blank"},i.a.createElement("img",{src:"/insta.svg"}))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://twitter.com/realvjy",target:"__blank"},i.a.createElement("img",{src:"/twitter.svg"}))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://facebook.com/realvjy",target:"__blank"},i.a.createElement("img",{src:"/linkedin.svg"})))),i.a.createElement("p",null,"A designer, maker and dreamer. Working towards excelling at creating memorable design solutions. Creates touch point between brands and people they serve through his wisdom of user experience.")))))))))},r}(i.a.Component),o=(t.default=l,"2785444898")},YZX3:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAUBAgME/8QAFwEBAAMAAAAAAAAAAAAAAAAAAgABA//aAAwDAQACEAMQAAABtTuWpVlGVPBk0HAFf//EABsQAAICAwEAAAAAAAAAAAAAAAECAxMAESMk/9oACAEBAAEFAnOlgZ7cvIZnEYuxj6ZjxjOh/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQEiH/2gAIAQMBAT8BwqOP/8QAGREAAQUAAAAAAAAAAAAAAAAAAAEQEiEx/9oACAECAQE/AbJCY3//xAAgEAABAgUFAAAAAAAAAAAAAAABABECAxASITFBYYGR/9oACAEBAAY/Ai2qYx3A0tPifYlsLBBT8qX3T//EABoQAQADAQEBAAAAAAAAAAAAAAEAESExQVH/2gAIAQEAAT8hRVcZF9KXnJkRaRWsbCd3oQNMD6x1eoRshVw76T//2gAMAwEAAgADAAAAENvoAP/EABkRAAIDAQAAAAAAAAAAAAAAAAABESExUf/aAAgBAwEBPxCEpsj00xYf/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAEQESExUf/aAAgBAgEBPxBNs0X5A9n/xAAeEAEBAQACAQUAAAAAAAAAAAABEQAhMUFRYXGBkf/aAAgBAQABPxClwdnV0whQo4lO/wAzyyrjkGw+cZbkILxecbfXBH7zSeBntAmta2n5uEBbXZ4N/9k=","width":50,"height":50,"src":"/static/4f27694bd7811d13157e5e488ad64f43/9b664/profile-pic.jpg","srcSet":"/static/4f27694bd7811d13157e5e488ad64f43/9b664/profile-pic.jpg 1x,\\n/static/4f27694bd7811d13157e5e488ad64f43/06a10/profile-pic.jpg 1.5x,\\n/static/4f27694bd7811d13157e5e488ad64f43/f1b5a/profile-pic.jpg 2x"}}},"site":{"siteMetadata":{"author":"vijay verma","social":{"twitter":"realvjy"}}}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-f760e21cac2a914fb193.js.map