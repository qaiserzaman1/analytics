!function(){"use strict";var e,t,i,n,r=window.location,o=window.document,a=window.localStorage,l=o.getElementById("plausible"),s=l.getAttribute("data-api")||(e=l.src.split("/"),t=e[0],i=e[2],t+"//"+i+"/api/event"),w=a&&a.plausible_ignore,d=l&&l.getAttribute("data-exclude").split(",");function p(e){console.warn("Ignoring Event: "+e)}function u(e,t){if(!(window.phantom||window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){if("true"==w)return p("localStorage flag");if(d)for(var i=0;i<d.length;i++)if("pageview"==e&&r.pathname.match(new RegExp("^"+d[i].trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$")))return p("exclusion rule");var n={};n.n=e,n.u=r.href,n.d=l.getAttribute("data-domain"),n.r=o.referrer||null,n.w=window.innerWidth,t&&t.meta&&(n.m=JSON.stringify(t.meta)),t&&t.props&&(n.p=JSON.stringify(t.props)),n.h=1;var a=new XMLHttpRequest;a.open("POST",s,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(n)),a.onreadystatechange=function(){4==a.readyState&&t&&t.callback&&t.callback()}}}function c(){n=r.pathname,u("pageview")}window.addEventListener("hashchange",c);var g=window.plausible&&window.plausible.q||[];window.plausible=u;for(var f=0;f<g.length;f++)u.apply(this,g[f]);"prerender"===o.visibilityState?o.addEventListener("visibilitychange",function(){n||"visible"!==o.visibilityState||c()}):c()}();