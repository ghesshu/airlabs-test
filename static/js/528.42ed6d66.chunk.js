"use strict";(self.webpackChunkopc_website=self.webpackChunkopc_website||[]).push([[528],{2300:function(e,t,n){n(2791);var o=n(6078),r=n(8820),i=n(184);t.Z=function(e){var t=e.open,n=e.toggle,c=e.title,l=e.desc;return(0,i.jsxs)("div",{className:"pt-[10px] ",children:[(0,i.jsxs)("div",{onClick:n,className:"bg-white border py-4 px-4 flex justify-between items-center cursor-pointer",children:[(0,i.jsx)("p",{className:"text-lg font-semibold",children:c}),(0,i.jsx)("div",{className:"text-[30px]",children:t?(0,i.jsx)(r.ywL,{}):(0,i.jsx)(r.Lfi,{})})]}),(0,i.jsx)(o.Collapse,{isOpened:t,children:(0,i.jsx)("div",{className:"bg-white px-[50px] pb-[20px]",children:l})})]})}},4593:function(e,t,n){n.d(t,{Z:function(){return i}});n(2791);var o=n.p+"static/media/p-img.c0b3646b1c161401966f.png",r=n(184),i=function(e){var t=e.title;return(0,r.jsx)("div",{style:{backgroundImage:"url(".concat(o,")")},className:"h-[24rem] w-screen   bg-center bg-cover ",children:(0,r.jsx)("div",{className:"bg-blac w-full h-full flex justify-center items-center bg-opacity-50",children:(0,r.jsx)("h1",{className:"text-5xl md:text-7xl lg:text-9xl  tracking-widest\t",children:t})})})}},1278:function(e,t,n){function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.Collapse=void 0;var r,i=(r=n(2791))&&r.__esModule?r:{default:r};function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=a(e);if(t){var i=a(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===o(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return u(e)}(this,n)}}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(a,e);var t,n,o,r=s(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),f(u(t=r.call(this,e)),"timeout",void 0),f(u(t),"container",void 0),f(u(t),"content",void 0),f(u(t),"onResize",(function(){if(clearTimeout(t.timeout),t.container&&t.content){var e=t.props,n=e.isOpened,o=e.checkTimeout,r=Math.floor(t.container.clientHeight),i=Math.floor(t.content.clientHeight),c=n&&Math.abs(i-r)<=1,l=!n&&Math.abs(r)<=1;c||l?t.onRest({isFullyOpened:c,isFullyClosed:l,isOpened:n,containerHeight:r,contentHeight:i}):(t.onWork({isFullyOpened:c,isFullyClosed:l,isOpened:n,containerHeight:r,contentHeight:i}),t.timeout=setTimeout((function(){return t.onResize()}),o))}})),f(u(t),"onRest",(function(e){var n=e.isFullyOpened,o=e.isFullyClosed,r=e.isOpened,i=e.containerHeight,c=e.contentHeight;if(t.container&&t.content){var l=r&&t.container.style.height==="".concat(c,"px"),s=!r&&"0px"===t.container.style.height;if(l||s){t.container.style.overflow=r?"initial":"hidden",t.container.style.height=r?"auto":"0px";var u=t.props.onRest;u&&u({isFullyOpened:n,isFullyClosed:o,isOpened:r,containerHeight:i,contentHeight:c})}}})),f(u(t),"onWork",(function(e){var n=e.isFullyOpened,o=e.isFullyClosed,r=e.isOpened,i=e.containerHeight,c=e.contentHeight;if(t.container&&t.content){var l=r&&t.container.style.height==="".concat(c,"px"),s=!r&&"0px"===t.container.style.height;if(!l&&!s){t.container.style.overflow="hidden",t.container.style.height=r?"".concat(c,"px"):"0px";var u=t.props.onWork;u&&u({isFullyOpened:n,isFullyClosed:o,isOpened:r,containerHeight:i,contentHeight:c})}}})),f(u(t),"onRefContainer",(function(e){t.container=e})),f(u(t),"onRefContent",(function(e){t.content=e})),e.initialStyle?t.initialStyle=e.initialStyle:t.initialStyle=e.isOpened?{height:"auto",overflow:"initial"}:{height:"0px",overflow:"hidden"},t}return t=a,(n=[{key:"componentDidMount",value:function(){this.onResize()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props,n=t.theme,o=t.isOpened;return t.children!==e.children||o!==e.isOpened||Object.keys(n).some((function(t){return n[t]!==e.theme[t]}))}},{key:"getSnapshotBeforeUpdate",value:function(){if(!this.container||!this.content)return null;if("auto"===this.container.style.height){var e=this.content.clientHeight;this.container.style.height="".concat(e,"px")}return null}},{key:"componentDidUpdate",value:function(){this.onResize()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout)}},{key:"render",value:function(){var e=this.props,t=e.theme,n=e.children,o=e.isOpened;return i.default.createElement("div",{ref:this.onRefContainer,className:t.collapse,style:this.initialStyle,"aria-hidden":!o},i.default.createElement("div",{ref:this.onRefContent,className:t.content},n))}}])&&c(t.prototype,n),o&&c(t,o),a}(i.default.Component);t.Collapse=p,f(p,"defaultProps",{theme:{collapse:"ReactCollapse--collapse",content:"ReactCollapse--content"},initialStyle:void 0,onRest:void 0,onWork:void 0,checkTimeout:50})},3194:function(e,t,n){function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.UnmountClosed=void 0;var r,i=(r=n(2791))&&r.__esModule?r:{default:r},c=n(1278),l=["isOpened"],s=["isOpened"];function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var i=v(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===o(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}(this,n)}}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(a,e);var t,n,o,r=h(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),O(b(t=r.call(this,e)),"onWork",(function(e){var n=e.isOpened,o=p(e,l);t.setState({isResting:!1,isOpened:n});var r=t.props.onWork;r&&r(f({isOpened:n},o))})),O(b(t),"onRest",(function(e){var n=e.isOpened,o=p(e,s);t.setState({isResting:!0,isOpened:n,isInitialRender:!1});var r=t.props.onRest;r&&r(f({isOpened:n},o))})),O(b(t),"getInitialStyle",(function(){var e=t.state,n=e.isOpened;return e.isInitialRender&&n?{height:"auto",overflow:"initial"}:{height:"0px",overflow:"hidden"}})),t.state={isResting:!0,isOpened:e.isOpened,isInitialRender:!0},t}return t=a,(n=[{key:"componentDidUpdate",value:function(e){var t=this.props.isOpened;e.isOpened!==t&&this.setState({isResting:!1,isOpened:t,isInitialRender:!1})}},{key:"render",value:function(){var e=this.state,t=e.isResting,n=e.isOpened;return t&&!n?null:i.default.createElement(c.Collapse,u({},this.props,{initialStyle:this.getInitialStyle(),onWork:this.onWork,onRest:this.onRest}))}}])&&d(t.prototype,n),o&&d(t,o),a}(i.default.PureComponent);t.UnmountClosed=m,O(m,"defaultProps",{onWork:void 0,onRest:void 0})},6078:function(e,t,n){var o=n(1278).Collapse,r=n(3194).UnmountClosed;e.exports=r,r.Collapse=o,r.UnmountClosed=r}}]);
//# sourceMappingURL=528.42ed6d66.chunk.js.map