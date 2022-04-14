!function(){"use strict";var o=window.location,n=window.document,p=n.currentScript,l=p.getAttribute("data-api")||new URL(p.src).origin+"/api/event",c=p&&p.getAttribute("data-exclude").split(",");function s(e){console.warn("Ignoring Event: "+e)}function e(e,t){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return s("localStorage flag")}catch(e){}if(c)for(var i=0;i<c.length;i++)if("pageview"===e&&o.pathname.match(new RegExp("^"+c[i].trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$")))return s("exclusion rule");var a={};a.n=e,a.u=t&&t.u?t.u:o.href,a.d=p.getAttribute("data-domain"),a.r=n.referrer||null,a.w=window.innerWidth,t&&t.meta&&(a.m=JSON.stringify(t.meta)),t&&t.props&&(a.p=JSON.stringify(t.props));var r=new XMLHttpRequest;r.open("POST",l,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(a)),r.onreadystatechange=function(){4===r.readyState&&t&&t.callback&&t.callback()}}}var t=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],i=p.getAttribute("file-types"),a=p.getAttribute("add-file-types"),u=i&&i.split(",")||a&&a.split(",").concat(t)||t;function r(e){for(var t=e.target,i="auxclick"===e.type&&2===e.which,a="click"===e.type;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;var r,n=t&&t.href&&t.href.split("?")[0];n&&(r=n.split(".").pop(),u.some(function(e){return e===r}))&&((i||a)&&plausible("File Download",{props:{url:n}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!a||(setTimeout(function(){o.href=t.href},150),e.preventDefault()))}n.addEventListener("click",r),n.addEventListener("auxclick",r);var d=window.plausible&&window.plausible.q||[];window.plausible=e;for(var w=0;w<d.length;w++)e.apply(this,d[w])}();