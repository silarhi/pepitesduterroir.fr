!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";(function(e){var n;function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*!
 * jQuery JavaScript Library v2.2.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:23Z
 */
/*!
 * jQuery JavaScript Library v2.2.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:23Z
 */
!function(t,n){"object"===r(e)&&"object"===r(e.exports)?e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}:n(t)}("undefined"!=typeof window?window:void 0,function(i,o){var a=[],s=i.document,u=a.slice,l=a.concat,c=a.push,d=a.indexOf,f={},p=f.toString,h=f.hasOwnProperty,v={},m=function e(t,n){return new e.fn.init(t,n)},g=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,y=/^-ms-/,b=/-([\da-z])/gi,x=function(e,t){return t.toUpperCase()};function w(e){var t=!!e&&"length"in e&&e.length,n=m.type(e);return"function"!==n&&!m.isWindow(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}m.fn=m.prototype={jquery:"2.2.4",constructor:m,selector:"",length:0,toArray:function(){return u.call(this)},get:function(e){return null!=e?e<0?this[e+this.length]:this[e]:u.call(this)},pushStack:function(e){var t=m.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e){return m.each(this,e)},map:function(e){return this.pushStack(m.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(u.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:c,sort:a.sort,splice:a.splice},m.extend=m.fn.extend=function(){var e,t,n,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[u]||{},u++),"object"===r(s)||m.isFunction(s)||(s={}),u===l&&(s=this,u--);u<l;u++)if(null!=(e=arguments[u]))for(t in e)n=s[t],s!==(i=e[t])&&(c&&i&&(m.isPlainObject(i)||(o=m.isArray(i)))?(o?(o=!1,a=n&&m.isArray(n)?n:[]):a=n&&m.isPlainObject(n)?n:{},s[t]=m.extend(c,a,i)):void 0!==i&&(s[t]=i));return s},m.extend({expando:"jQuery"+("2.2.4"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===m.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){var t=e&&e.toString();return!m.isArray(e)&&t-parseFloat(t)+1>=0},isPlainObject:function(e){var t;if("object"!==m.type(e)||e.nodeType||m.isWindow(e))return!1;if(e.constructor&&!h.call(e,"constructor")&&!h.call(e.constructor.prototype||{},"isPrototypeOf"))return!1;for(t in e);return void 0===t||h.call(e,t)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"===r(e)||"function"==typeof e?f[p.call(e)]||"object":r(e)},globalEval:function(e){var t,n=eval;(e=m.trim(e))&&(1===e.indexOf("use strict")?((t=s.createElement("script")).text=e,s.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(y,"ms-").replace(b,x)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t){var n,r=0;if(w(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(g,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(w(Object(e))?m.merge(n,"string"==typeof e?[e]:e):c.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:d.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(w(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return l.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m.isFunction(e))return r=u.call(arguments,2),i=function(){return e.apply(t||this,r.concat(u.call(arguments)))},i.guid=e.guid=e.guid||m.guid++,i},now:Date.now,support:v}),"function"==typeof Symbol&&(m.fn[Symbol.iterator]=a[Symbol.iterator]),m.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){f["[object "+t+"]"]=t.toLowerCase()});var T=
/*!
   * Sizzle CSS Selector Engine v2.2.1
   * http://sizzlejs.com/
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license
   * http://jquery.org/license
   *
   * Date: 2015-10-17
   */
function(e){var t,n,r,i,o,a,s,u,l,c,d,f,p,h,v,m,g,y,b,x="sizzle"+1*new Date,w=e.document,T=0,C=0,k=oe(),S=oe(),j=oe(),_=function(e,t){return e===t&&(d=!0),0},E=1<<31,N={}.hasOwnProperty,A=[],D=A.pop,q=A.push,L=A.push,P=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},H="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W="\\["+M+"*("+F+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+F+"))|)"+M+"*\\]",R=":("+F+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",I=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),B=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),X=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),U=new RegExp(R),V=new RegExp("^"+F+"$"),G={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),TAG:new RegExp("^("+F+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+R),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+H+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,J=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/[+~]/,ee=/'|\\/g,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=function(){f()};try{L.apply(A=P.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,P.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function ie(e,t,r,i){var o,s,l,c,d,h,g,y,T=t&&t.ownerDocument,C=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==C&&9!==C&&11!==C)return r;if(!i&&((t?t.ownerDocument||t:w)!==p&&f(t),t=t||p,v)){if(11!==C&&(h=K.exec(e)))if(o=h[1]){if(9===C){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(T&&(l=T.getElementById(o))&&b(t,l)&&l.id===o)return r.push(l),r}else{if(h[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=h[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!j[e+" "]&&(!m||!m.test(e))){if(1!==C)T=t,y=e;else if("object"!==t.nodeName.toLowerCase()){for((c=t.getAttribute("id"))?c=c.replace(ee,"\\$&"):t.setAttribute("id",c=x),s=(g=a(e)).length,d=V.test(c)?"#"+c:"[id='"+c+"']";s--;)g[s]=d+" "+ve(g[s]);y=g.join(","),T=Z.test(e)&&pe(t.parentNode)||t}if(y)try{return L.apply(r,T.querySelectorAll(y)),r}catch(e){}finally{c===x&&t.removeAttribute("id")}}}return u(e.replace($,"$1"),t,r,i)}function oe(){var e=[];return function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}}function ae(e){return e[x]=!0,e}function se(e){var t=p.createElement("div");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ue(e,t){for(var n=e.split("|"),i=n.length;i--;)r.attrHandle[n[i]]=t}function le(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||E)-(~e.sourceIndex||E);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function ce(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function de(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function fe(e){return ae(function(t){return t=+t,ae(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function pe(e){return e&&void 0!==e.getElementsByTagName&&e}for(t in n=ie.support={},o=ie.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},f=ie.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==p&&9===a.nodeType&&a.documentElement?(h=(p=a).documentElement,v=!o(p),(i=p.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=se(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=se(function(e){return e.appendChild(p.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=J.test(p.getElementsByClassName),n.getById=se(function(e){return h.appendChild(e).id=x,!p.getElementsByName||!p.getElementsByName(x).length}),n.getById?(r.find.ID=function(e,t){if(void 0!==t.getElementById&&v){var n=t.getElementById(e);return n?[n]:[]}},r.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}}):(delete r.find.ID,r.filter.ID=function(e){var t=e.replace(te,ne);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),r.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&v)return t.getElementsByClassName(e)},g=[],m=[],(n.qsa=J.test(p.querySelectorAll))&&(se(function(e){h.appendChild(e).innerHTML="<a id='"+x+"'></a><select id='"+x+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||m.push("\\["+M+"*(?:value|"+H+")"),e.querySelectorAll("[id~="+x+"-]").length||m.push("~="),e.querySelectorAll(":checked").length||m.push(":checked"),e.querySelectorAll("a#"+x+"+*").length||m.push(".#.+[+~]")}),se(function(e){var t=p.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&m.push("name"+M+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||m.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),m.push(",.*:")})),(n.matchesSelector=J.test(y=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&se(function(e){n.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),g.push("!=",R)}),m=m.length&&new RegExp(m.join("|")),g=g.length&&new RegExp(g.join("|")),t=J.test(h.compareDocumentPosition),b=t||J.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},_=t?function(e,t){if(e===t)return d=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===p||e.ownerDocument===w&&b(w,e)?-1:t===p||t.ownerDocument===w&&b(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return d=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===p?-1:t===p?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return le(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)s.unshift(n);for(;a[r]===s[r];)r++;return r?le(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},p):p},ie.matches=function(e,t){return ie(e,null,null,t)},ie.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&f(e),t=t.replace(X,"='$1']"),n.matchesSelector&&v&&!j[t+" "]&&(!g||!g.test(t))&&(!m||!m.test(t)))try{var r=y.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return ie(t,p,null,[e]).length>0},ie.contains=function(e,t){return(e.ownerDocument||e)!==p&&f(e),b(e,t)},ie.attr=function(e,t){(e.ownerDocument||e)!==p&&f(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!v):void 0;return void 0!==o?o:n.attributes||!v?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},ie.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ie.uniqueSort=function(e){var t,r=[],i=0,o=0;if(d=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(_),d){for(;t=e[o++];)t===e[o]&&(i=r.push(o));for(;i--;)e.splice(r[i],1)}return c=null,e},i=ie.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=i(t);return n},(r=ie.selectors={cacheLength:50,createPseudo:ae,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ie.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ie.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&U.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=k[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&k(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ie.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace(I," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,d,f,p,h,v=o!==a?"nextSibling":"previousSibling",m=t.parentNode,g=s&&t.nodeName.toLowerCase(),y=!u&&!s,b=!1;if(m){if(o){for(;v;){for(f=t;f=f[v];)if(s?f.nodeName.toLowerCase()===g:1===f.nodeType)return!1;h=v="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&y){for(b=(p=(l=(c=(d=(f=m)[x]||(f[x]={}))[f.uniqueID]||(d[f.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],f=p&&m.childNodes[p];f=++p&&f&&f[v]||(b=p=0)||h.pop();)if(1===f.nodeType&&++b&&f===t){c[e]=[T,p,b];break}}else if(y&&(b=p=(l=(c=(d=(f=t)[x]||(f[x]={}))[f.uniqueID]||(d[f.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===b)for(;(f=++p&&f&&f[v]||(b=p=0)||h.pop())&&((s?f.nodeName.toLowerCase()!==g:1!==f.nodeType)||!++b||(y&&((c=(d=f[x]||(f[x]={}))[f.uniqueID]||(d[f.uniqueID]={}))[e]=[T,b]),f!==t)););return(b-=i)===r||b%r==0&&b/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||ie.error("unsupported pseudo: "+e);return i[x]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?ae(function(e,n){for(var r,o=i(e,t),a=o.length;a--;)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:ae(function(e){var t=[],n=[],r=s(e.replace($,"$1"));return r[x]?ae(function(e,t,n,i){for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:ae(function(e){return function(t){return ie(e,t).length>0}}),contains:ae(function(e){return e=e.replace(te,ne),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:ae(function(e){return V.test(e||"")||ie.error("unsupported lang: "+e),e=e.replace(te,ne).toLowerCase(),function(t){var n;do{if(n=v?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return Y.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:fe(function(){return[0]}),last:fe(function(e,t){return[t-1]}),eq:fe(function(e,t,n){return[n<0?n+t:n]}),even:fe(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:fe(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:fe(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:fe(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=ce(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=de(t);function he(){}function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=C++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,u,l,c=[T,o];if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if((s=(u=(l=t[x]||(t[x]={}))[t.uniqueID]||(l[t.uniqueID]={}))[r])&&s[0]===T&&s[1]===o)return c[2]=s[2];if(u[r]=c,c[2]=e(t,n,a))return!0}}}function ge(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function ye(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function be(e,t,n,r,i,o){return r&&!r[x]&&(r=be(r)),i&&!i[x]&&(i=be(i,o)),ae(function(o,a,s,u){var l,c,d,f=[],p=[],h=a.length,v=o||function(e,t,n){for(var r=0,i=t.length;r<i;r++)ie(e,t[r],n);return n}(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?v:ye(v,f,e,s,u),g=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,g,s,u),r)for(l=ye(g,p),r(l,[],s,u),c=l.length;c--;)(d=l[c])&&(g[p[c]]=!(m[p[c]]=d));if(o){if(i||e){if(i){for(l=[],c=g.length;c--;)(d=g[c])&&l.push(m[c]=d);i(null,g=[],l,u)}for(c=g.length;c--;)(d=g[c])&&(l=i?O(o,d):f[c])>-1&&(o[l]=!(a[l]=d))}}else g=ye(g===a?g.splice(h,g.length):g),i?i(null,a,g,u):L.apply(a,g)})}function xe(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),d=me(function(e){return O(t,e)>-1},s,!0),f=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):d(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])f=[me(ge(f),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[x]){for(i=++u;i<o&&!r.relative[e[i].type];i++);return be(u>1&&ge(f),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace($,"$1"),n,u<i&&xe(e.slice(u,i)),i<o&&xe(e=e.slice(i)),i<o&&ve(e))}f.push(n)}return ge(f)}return he.prototype=r.filters=r.pseudos,r.setFilters=new he,a=ie.tokenize=function(e,t){var n,i,o,a,s,u,l,c=S[e+" "];if(c)return t?0:c.slice(0);for(s=e,u=[],l=r.preFilter;s;){for(a in n&&!(i=B.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=z.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace($," ")}),s=s.slice(n.length)),r.filter)!(i=G[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?ie.error(e):S(e,u).slice(0)},s=ie.compile=function(e,t){var n,i=[],o=[],s=j[e+" "];if(!s){for(t||(t=a(e)),n=t.length;n--;)(s=xe(t[n]))[x]?i.push(s):o.push(s);(s=j(e,function(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var d,h,m,g=0,y="0",b=o&&[],x=[],w=l,C=o||i&&r.find.TAG("*",c),k=T+=null==w?1:Math.random()||.1,S=C.length;for(c&&(l=a===p||a||c);y!==S&&null!=(d=C[y]);y++){if(i&&d){for(h=0,a||d.ownerDocument===p||(f(d),s=!v);m=e[h++];)if(m(d,a||p,s)){u.push(d);break}c&&(T=k)}n&&((d=!m&&d)&&g--,o&&b.push(d))}if(g+=y,n&&y!==g){for(h=0;m=t[h++];)m(b,x,a,s);if(o){if(g>0)for(;y--;)b[y]||x[y]||(x[y]=D.call(u));x=ye(x)}L.apply(u,x),c&&!o&&x.length>0&&g+t.length>1&&ie.uniqueSort(u)}return c&&(T=k,l=w),b};return n?ae(o):o}(o,i))).selector=e}return s},u=ie.select=function(e,t,i,o){var u,l,c,d,f,p="function"==typeof e&&e,h=!o&&a(e=p.selector||e);if(i=i||[],1===h.length){if((l=h[0]=h[0].slice(0)).length>2&&"ID"===(c=l[0]).type&&n.getById&&9===t.nodeType&&v&&r.relative[l[1].type]){if(!(t=(r.find.ID(c.matches[0].replace(te,ne),t)||[])[0]))return i;p&&(t=t.parentNode),e=e.slice(l.shift().value.length)}for(u=G.needsContext.test(e)?0:l.length;u--&&(c=l[u],!r.relative[d=c.type]);)if((f=r.find[d])&&(o=f(c.matches[0].replace(te,ne),Z.test(l[0].type)&&pe(t.parentNode)||t))){if(l.splice(u,1),!(e=o.length&&ve(l)))return L.apply(i,o),i;break}}return(p||s(e,h))(o,t,!v,i,!t||Z.test(e)&&pe(t.parentNode)||t),i},n.sortStable=x.split("").sort(_).join("")===x,n.detectDuplicates=!!d,f(),n.sortDetached=se(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),se(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ue("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&se(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ue("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),se(function(e){return null==e.getAttribute("disabled")})||ue(H,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),ie}(i);m.find=T,m.expr=T.selectors,m.expr[":"]=m.expr.pseudos,m.uniqueSort=m.unique=T.uniqueSort,m.text=T.getText,m.isXMLDoc=T.isXML,m.contains=T.contains;var C=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&m(e).is(n))break;r.push(e)}return r},k=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},S=m.expr.match.needsContext,j=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,_=/^.[^:#\[\.,]*$/;function E(e,t,n){if(m.isFunction(t))return m.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return m.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(_.test(t))return m.filter(t,e,n);t=m.filter(t,e)}return m.grep(e,function(e){return d.call(t,e)>-1!==n})}m.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?m.find.matchesSelector(r,e)?[r]:[]:m.find.matches(e,m.grep(t,function(e){return 1===e.nodeType}))},m.fn.extend({find:function(e){var t,n=this.length,r=[],i=this;if("string"!=typeof e)return this.pushStack(m(e).filter(function(){for(t=0;t<n;t++)if(m.contains(i[t],this))return!0}));for(t=0;t<n;t++)m.find(e,i[t],r);return(r=this.pushStack(n>1?m.unique(r):r)).selector=this.selector?this.selector+" "+e:e,r},filter:function(e){return this.pushStack(E(this,e||[],!1))},not:function(e){return this.pushStack(E(this,e||[],!0))},is:function(e){return!!E(this,"string"==typeof e&&S.test(e)?m(e):e||[],!1).length}});var N,A=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(m.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||N,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:A.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof m?t[0]:t,m.merge(this,m.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:s,!0)),j.test(r[1])&&m.isPlainObject(t))for(r in t)m.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=s.getElementById(r[2]))&&i.parentNode&&(this.length=1,this[0]=i),this.context=s,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):m.isFunction(e)?void 0!==n.ready?n.ready(e):e(m):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),m.makeArray(e,this))}).prototype=m.fn,N=m(s);var D=/^(?:parents|prev(?:Until|All))/,q={children:!0,contents:!0,next:!0,prev:!0};function L(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}m.fn.extend({has:function(e){var t=m(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(m.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=S.test(e)||"string"!=typeof e?m(e,t||this.context):0;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&m.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?m.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?d.call(m(e),this[0]):d.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(m.uniqueSort(m.merge(this.get(),m(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),m.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return C(e,"parentNode")},parentsUntil:function(e,t,n){return C(e,"parentNode",n)},next:function(e){return L(e,"nextSibling")},prev:function(e){return L(e,"previousSibling")},nextAll:function(e){return C(e,"nextSibling")},prevAll:function(e){return C(e,"previousSibling")},nextUntil:function(e,t,n){return C(e,"nextSibling",n)},prevUntil:function(e,t,n){return C(e,"previousSibling",n)},siblings:function(e){return k((e.parentNode||{}).firstChild,e)},children:function(e){return k(e.firstChild)},contents:function(e){return e.contentDocument||m.merge([],e.childNodes)}},function(e,t){m.fn[e]=function(n,r){var i=m.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=m.filter(r,i)),this.length>1&&(q[e]||m.uniqueSort(i),D.test(e)&&i.reverse()),this.pushStack(i)}});var P,O=/\S+/g;function H(){s.removeEventListener("DOMContentLoaded",H),i.removeEventListener("load",H),m.ready()}m.Callbacks=function(e){e="string"==typeof e?function(e){var t={};return m.each(e.match(O)||[],function(e,n){t[n]=!0}),t}(e):m.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=e.once,r=t=!0;a.length;s=-1)for(n=a.shift();++s<o.length;)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1);e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){m.each(n,function(n,r){m.isFunction(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==m.type(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return m.each(arguments,function(e,t){for(var n;(n=m.inArray(t,o,n))>-1;)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?m.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l},m.extend({Deferred:function(e){var t=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return m.Deferred(function(n){m.each(t,function(t,o){var a=m.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&m.isFunction(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[o[0]+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?m.extend(e,r):r}},i={};return r.pipe=r.then,m.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=u.call(arguments),a=o.length,s=1!==a||e&&m.isFunction(e.promise)?a:0,l=1===s?e:m.Deferred(),c=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?u.call(arguments):i,r===t?l.notifyWith(n,r):--s||l.resolveWith(n,r)}};if(a>1)for(t=new Array(a),n=new Array(a),r=new Array(a);i<a;i++)o[i]&&m.isFunction(o[i].promise)?o[i].promise().progress(c(i,n,t)).done(c(i,r,o)).fail(l.reject):--s;return s||l.resolveWith(r,o),l.promise()}}),m.fn.ready=function(e){return m.ready.promise().done(e),this},m.extend({isReady:!1,readyWait:1,holdReady:function(e){e?m.readyWait++:m.ready(!0)},ready:function(e){(!0===e?--m.readyWait:m.isReady)||(m.isReady=!0,!0!==e&&--m.readyWait>0||(P.resolveWith(s,[m]),m.fn.triggerHandler&&(m(s).triggerHandler("ready"),m(s).off("ready"))))}}),m.ready.promise=function(e){return P||(P=m.Deferred(),"complete"===s.readyState||"loading"!==s.readyState&&!s.documentElement.doScroll?i.setTimeout(m.ready):(s.addEventListener("DOMContentLoaded",H),i.addEventListener("load",H))),P.promise(e)},m.ready.promise();var M=function e(t,n,r,i,o,a,s){var u=0,l=t.length,c=null==r;if("object"===m.type(r))for(u in o=!0,r)e(t,n,u,r[u],!0,a,s);else if(void 0!==i&&(o=!0,m.isFunction(i)||(s=!0),c&&(s?(n.call(t,i),n=null):(c=n,n=function(e,t,n){return c.call(m(e),n)})),n))for(;u<l;u++)n(t[u],r,s?i:i.call(t[u],u,n(t[u],r)));return o?t:c?n.call(t):l?n(t[0],r):a},F=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function W(){this.expando=m.expando+W.uid++}W.uid=1,W.prototype={register:function(e,t){var n=t||{};return e.nodeType?e[this.expando]=n:Object.defineProperty(e,this.expando,{value:n,writable:!0,configurable:!0}),e[this.expando]},cache:function(e){if(!F(e))return{};var t=e[this.expando];return t||(t={},F(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[t]=n;else for(r in t)i[r]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][t]},access:function(e,t,n){var r;return void 0===t||t&&"string"==typeof t&&void 0===n?void 0!==(r=this.get(e,t))?r:this.get(e,m.camelCase(t)):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r,i,o=e[this.expando];if(void 0!==o){if(void 0===t)this.register(e);else{m.isArray(t)?r=t.concat(t.map(m.camelCase)):(i=m.camelCase(t),r=t in o?[t,i]:(r=i)in o?[r]:r.match(O)||[]),n=r.length;for(;n--;)delete o[r[n]]}(void 0===t||m.isEmptyObject(o))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!m.isEmptyObject(t)}};var R=new W,I=new W,$=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,B=/[A-Z]/g;function z(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(B,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:$.test(n)?m.parseJSON(n):n)}catch(e){}I.set(e,t,n)}else n=void 0;return n}m.extend({hasData:function(e){return I.hasData(e)||R.hasData(e)},data:function(e,t,n){return I.access(e,t,n)},removeData:function(e,t){I.remove(e,t)},_data:function(e,t,n){return R.access(e,t,n)},_removeData:function(e,t){R.remove(e,t)}}),m.fn.extend({data:function(e,t){var n,i,o,a=this[0],s=a&&a.attributes;if(void 0===e){if(this.length&&(o=I.get(a),1===a.nodeType&&!R.get(a,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&0===(i=s[n].name).indexOf("data-")&&(i=m.camelCase(i.slice(5)),z(a,i,o[i]));R.set(a,"hasDataAttrs",!0)}return o}return"object"===r(e)?this.each(function(){I.set(this,e)}):M(this,function(t){var n,r;if(a&&void 0===t)return void 0!==(n=I.get(a,e)||I.get(a,e.replace(B,"-$&").toLowerCase()))?n:(r=m.camelCase(e),void 0!==(n=I.get(a,r))?n:void 0!==(n=z(a,r,void 0))?n:void 0);r=m.camelCase(e),this.each(function(){var n=I.get(this,r);I.set(this,r,t),e.indexOf("-")>-1&&void 0!==n&&I.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){I.remove(this,e)})}}),m.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=R.get(e,t),n&&(!r||m.isArray(n)?r=R.access(e,t,m.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=m.queue(e,t),r=n.length,i=n.shift(),o=m._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){m.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return R.get(e,n)||R.access(e,n,{empty:m.Callbacks("once memory").add(function(){R.remove(e,[t+"queue",n])})})}}),m.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?m.queue(this[0],e):void 0===t?this:this.each(function(){var n=m.queue(this,e,t);m._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&m.dequeue(this,e)})},dequeue:function(e){return this.each(function(){m.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=m.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=R.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var X=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+X+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],G=function(e,t){return e=t||e,"none"===m.css(e,"display")||!m.contains(e.ownerDocument,e)};function Y(e,t,n,r){var i,o=1,a=20,s=r?function(){return r.cur()}:function(){return m.css(e,t,"")},u=s(),l=n&&n[3]||(m.cssNumber[t]?"":"px"),c=(m.cssNumber[t]||"px"!==l&&+u)&&U.exec(m.css(e,t));if(c&&c[3]!==l){l=l||c[3],n=n||[],c=+u||1;do{c/=o=o||".5",m.style(e,t,c+l)}while(o!==(o=s()/u)&&1!==o&&--a)}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var Q=/^(?:checkbox|radio)$/i,J=/<([\w:-]+)/,K=/^$|\/(?:java|ecma)script/i,Z={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ee(e,t){var n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&m.nodeName(e,t)?m.merge([e],n):n}function te(e,t){for(var n=0,r=e.length;n<r;n++)R.set(e[n],"globalEval",!t||R.get(t[n],"globalEval"))}Z.optgroup=Z.option,Z.tbody=Z.tfoot=Z.colgroup=Z.caption=Z.thead,Z.th=Z.td;var ne=/<|&#?\w+;/;function re(e,t,n,r,i){for(var o,a,s,u,l,c,d=t.createDocumentFragment(),f=[],p=0,h=e.length;p<h;p++)if((o=e[p])||0===o)if("object"===m.type(o))m.merge(f,o.nodeType?[o]:o);else if(ne.test(o)){for(a=a||d.appendChild(t.createElement("div")),s=(J.exec(o)||["",""])[1].toLowerCase(),u=Z[s]||Z._default,a.innerHTML=u[1]+m.htmlPrefilter(o)+u[2],c=u[0];c--;)a=a.lastChild;m.merge(f,a.childNodes),(a=d.firstChild).textContent=""}else f.push(t.createTextNode(o));for(d.textContent="",p=0;o=f[p++];)if(r&&m.inArray(o,r)>-1)i&&i.push(o);else if(l=m.contains(o.ownerDocument,o),a=ee(d.appendChild(o),"script"),l&&te(a),n)for(c=0;o=a[c++];)K.test(o.type||"")&&n.push(o);return d}!function(){var e=s.createDocumentFragment().appendChild(s.createElement("div")),t=s.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),v.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var ie=/^key/,oe=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ae=/^([^.]*)(?:\.(.+)|)/;function se(){return!0}function ue(){return!1}function le(){try{return s.activeElement}catch(e){}}function ce(e,t,n,i,o,a){var s,u;if("object"===r(t)){for(u in"string"!=typeof n&&(i=i||n,n=void 0),t)ce(e,u,n,i,t[u],a);return e}if(null==i&&null==o?(o=n,i=n=void 0):null==o&&("string"==typeof n?(o=i,i=void 0):(o=i,i=n,n=void 0)),!1===o)o=ue;else if(!o)return e;return 1===a&&(s=o,(o=function(e){return m().off(e),s.apply(this,arguments)}).guid=s.guid||(s.guid=m.guid++)),e.each(function(){m.event.add(this,t,o,i,n)})}m.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,d,f,p,h,v,g=R.get(e);if(g)for(n.handler&&(n=(o=n).handler,i=o.selector),n.guid||(n.guid=m.guid++),(u=g.events)||(u=g.events={}),(a=g.handle)||(a=g.handle=function(t){return void 0!==m&&m.event.triggered!==t.type?m.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(O)||[""]).length;l--;)p=v=(s=ae.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),p&&(d=m.event.special[p]||{},p=(i?d.delegateType:d.bindType)||p,d=m.event.special[p]||{},c=m.extend({type:p,origType:v,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&m.expr.match.needsContext.test(i),namespace:h.join(".")},o),(f=u[p])||((f=u[p]=[]).delegateCount=0,d.setup&&!1!==d.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(p,a)),d.add&&(d.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?f.splice(f.delegateCount++,0,c):f.push(c),m.event.global[p]=!0)},remove:function(e,t,n,r,i){var o,a,s,u,l,c,d,f,p,h,v,g=R.hasData(e)&&R.get(e);if(g&&(u=g.events)){for(l=(t=(t||"").match(O)||[""]).length;l--;)if(p=v=(s=ae.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),p){for(d=m.event.special[p]||{},f=u[p=(r?d.delegateType:d.bindType)||p]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=f.length;o--;)c=f[o],!i&&v!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,d.remove&&d.remove.call(e,c));a&&!f.length&&(d.teardown&&!1!==d.teardown.call(e,h,g.handle)||m.removeEvent(e,p,g.handle),delete u[p])}else for(p in u)m.event.remove(e,p+t[l],n,r,!0);m.isEmptyObject(u)&&R.remove(e,"handle events")}},dispatch:function(e){e=m.event.fix(e);var t,n,r,i,o,a,s=u.call(arguments),l=(R.get(this,"events")||{})[e.type]||[],c=m.event.special[e.type]||{};if(s[0]=e,e.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,e)){for(a=m.event.handlers.call(this,e,l),t=0;(i=a[t++])&&!e.isPropagationStopped();)for(e.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!e.isImmediatePropagationStopped();)e.rnamespace&&!e.rnamespace.test(o.namespace)||(e.handleObj=o,e.data=o.data,void 0!==(r=((m.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(e.result=r)&&(e.preventDefault(),e.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,a=[],s=t.delegateCount,u=e.target;if(s&&u.nodeType&&("click"!==e.type||isNaN(e.button)||e.button<1))for(;u!==this;u=u.parentNode||this)if(1===u.nodeType&&(!0!==u.disabled||"click"!==e.type)){for(r=[],n=0;n<s;n++)void 0===r[i=(o=t[n]).selector+" "]&&(r[i]=o.needsContext?m(i,this).index(u)>-1:m.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&a.push({elem:u,handlers:r})}return s<t.length&&a.push({elem:this,handlers:t.slice(s)}),a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,o=t.button;return null==e.pageX&&null!=t.clientX&&(r=(n=e.target.ownerDocument||s).documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},fix:function(e){if(e[m.expando])return e;var t,n,r,i=e.type,o=e,a=this.fixHooks[i];for(a||(this.fixHooks[i]=a=oe.test(i)?this.mouseHooks:ie.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new m.Event(o),t=r.length;t--;)e[n=r[t]]=o[n];return e.target||(e.target=s),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==le()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===le()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&m.nodeName(this,"input"))return this.click(),!1},_default:function(e){return m.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},m.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},m.Event=function(e,t){if(!(this instanceof m.Event))return new m.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?se:ue):this.type=e,t&&m.extend(this,t),this.timeStamp=e&&e.timeStamp||m.now(),this[m.expando]=!0},m.Event.prototype={constructor:m.Event,isDefaultPrevented:ue,isPropagationStopped:ue,isImmediatePropagationStopped:ue,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=se,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=se,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=se,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){m.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=e.relatedTarget,i=e.handleObj;return r&&(r===this||m.contains(this,r))||(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}}),m.fn.extend({on:function(e,t,n,r){return ce(this,e,t,n,r)},one:function(e,t,n,r){return ce(this,e,t,n,r,1)},off:function(e,t,n){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,m(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"===r(e)){for(o in e)this.off(o,t,e[o]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ue),this.each(function(){m.event.remove(this,e,n,t)})}});var de=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,fe=/<script|<style|<link/i,pe=/checked\s*(?:[^=]|=\s*.checked.)/i,he=/^true\/(.*)/,ve=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function me(e,t){return m.nodeName(e,"table")&&m.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ge(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ye(e){var t=he.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function be(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(R.hasData(e)&&(o=R.access(e),a=R.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)m.event.add(t,i,l[i][n]);I.hasData(e)&&(s=I.access(e),u=m.extend({},s),I.set(t,u))}}function xe(e,t){var n=t.nodeName.toLowerCase();"input"===n&&Q.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function we(e,t,n,r){t=l.apply([],t);var i,o,a,s,u,c,d=0,f=e.length,p=f-1,h=t[0],g=m.isFunction(h);if(g||f>1&&"string"==typeof h&&!v.checkClone&&pe.test(h))return e.each(function(i){var o=e.eq(i);g&&(t[0]=h.call(this,i,o.html())),we(o,t,n,r)});if(f&&(o=(i=re(t,e[0].ownerDocument,!1,e,r)).firstChild,1===i.childNodes.length&&(i=o),o||r)){for(s=(a=m.map(ee(i,"script"),ge)).length;d<f;d++)u=i,d!==p&&(u=m.clone(u,!0,!0),s&&m.merge(a,ee(u,"script"))),n.call(e[d],u,d);if(s)for(c=a[a.length-1].ownerDocument,m.map(a,ye),d=0;d<s;d++)u=a[d],K.test(u.type||"")&&!R.access(u,"globalEval")&&m.contains(c,u)&&(u.src?m._evalUrl&&m._evalUrl(u.src):m.globalEval(u.textContent.replace(ve,"")))}return e}function Te(e,t,n){for(var r,i=t?m.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||m.cleanData(ee(r)),r.parentNode&&(n&&m.contains(r.ownerDocument,r)&&te(ee(r,"script")),r.parentNode.removeChild(r));return e}m.extend({htmlPrefilter:function(e){return e.replace(de,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=m.contains(e.ownerDocument,e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||m.isXMLDoc(e)))for(a=ee(s),r=0,i=(o=ee(e)).length;r<i;r++)xe(o[r],a[r]);if(t)if(n)for(o=o||ee(e),a=a||ee(s),r=0,i=o.length;r<i;r++)be(o[r],a[r]);else be(e,s);return(a=ee(s,"script")).length>0&&te(a,!u&&ee(e,"script")),s},cleanData:function(e){for(var t,n,r,i=m.event.special,o=0;void 0!==(n=e[o]);o++)if(F(n)){if(t=n[R.expando]){if(t.events)for(r in t.events)i[r]?m.event.remove(n,r):m.removeEvent(n,r,t.handle);n[R.expando]=void 0}n[I.expando]&&(n[I.expando]=void 0)}}}),m.fn.extend({domManip:we,detach:function(e){return Te(this,e,!0)},remove:function(e){return Te(this,e)},text:function(e){return M(this,function(e){return void 0===e?m.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return we(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||me(this,e).appendChild(e)})},prepend:function(){return we(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=me(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return we(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return we(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(m.cleanData(ee(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return m.clone(this,e,t)})},html:function(e){return M(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!fe.test(e)&&!Z[(J.exec(e)||["",""])[1].toLowerCase()]){e=m.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(m.cleanData(ee(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return we(this,arguments,function(t){var n=this.parentNode;m.inArray(this,e)<0&&(m.cleanData(ee(this)),n&&n.replaceChild(t,this))},e)}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){m.fn[e]=function(e){for(var n,r=[],i=m(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),m(i[a])[t](n),c.apply(r,n.get());return this.pushStack(r)}});var Ce,ke={HTML:"block",BODY:"block"};function Se(e,t){var n=m(t.createElement(e)).appendTo(t.body),r=m.css(n[0],"display");return n.detach(),r}function je(e){var t=s,n=ke[e];return n||("none"!==(n=Se(e,t))&&n||((t=(Ce=(Ce||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(),t.close(),n=Se(e,t),Ce.detach()),ke[e]=n),n}var _e=/^margin/,Ee=new RegExp("^("+X+")(?!px)[a-z%]+$","i"),Ne=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=i),t.getComputedStyle(e)},Ae=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i},De=s.documentElement;function qe(e,t,n){var r,i,o,a,s=e.style;return""!==(a=(n=n||Ne(e))?n.getPropertyValue(t)||n[t]:void 0)&&void 0!==a||m.contains(e.ownerDocument,e)||(a=m.style(e,t)),n&&!v.pixelMarginRight()&&Ee.test(a)&&_e.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o),void 0!==a?a+"":a}function Le(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){var e,t,n,r,o=s.createElement("div"),a=s.createElement("div");function u(){a.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",a.innerHTML="",De.appendChild(o);var s=i.getComputedStyle(a);e="1%"!==s.top,r="2px"===s.marginLeft,t="4px"===s.width,a.style.marginRight="50%",n="4px"===s.marginRight,De.removeChild(o)}a.style&&(a.style.backgroundClip="content-box",a.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===a.style.backgroundClip,o.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",o.appendChild(a),m.extend(v,{pixelPosition:function(){return u(),e},boxSizingReliable:function(){return null==t&&u(),t},pixelMarginRight:function(){return null==t&&u(),n},reliableMarginLeft:function(){return null==t&&u(),r},reliableMarginRight:function(){var e,t=a.appendChild(s.createElement("div"));return t.style.cssText=a.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",t.style.marginRight=t.style.width="0",a.style.width="1px",De.appendChild(o),e=!parseFloat(i.getComputedStyle(t).marginRight),De.removeChild(o),a.removeChild(t),e}}))}();var Pe=/^(none|table(?!-c[ea]).+)/,Oe={position:"absolute",visibility:"hidden",display:"block"},He={letterSpacing:"0",fontWeight:"400"},Me=["Webkit","O","Moz","ms"],Fe=s.createElement("div").style;function We(e){if(e in Fe)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=Me.length;n--;)if((e=Me[n]+t)in Fe)return e}function Re(e,t,n){var r=U.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ie(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;o<4;o+=2)"margin"===n&&(a+=m.css(e,n+V[o],!0,i)),r?("content"===n&&(a-=m.css(e,"padding"+V[o],!0,i)),"margin"!==n&&(a-=m.css(e,"border"+V[o]+"Width",!0,i))):(a+=m.css(e,"padding"+V[o],!0,i),"padding"!==n&&(a+=m.css(e,"border"+V[o]+"Width",!0,i)));return a}function $e(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Ne(e),a="border-box"===m.css(e,"boxSizing",!1,o);if(i<=0||null==i){if(((i=qe(e,t,o))<0||null==i)&&(i=e.style[t]),Ee.test(i))return i;r=a&&(v.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+Ie(e,t,n||(a?"border":"content"),r,o)+"px"}function Be(e,t){for(var n,r,i,o=[],a=0,s=e.length;a<s;a++)(r=e[a]).style&&(o[a]=R.get(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&G(r)&&(o[a]=R.access(r,"olddisplay",je(r.nodeName)))):(i=G(r),"none"===n&&i||R.set(r,"olddisplay",i?n:m.css(r,"display"))));for(a=0;a<s;a++)(r=e[a]).style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}function ze(e,t,n,r,i){return new ze.prototype.init(e,t,n,r,i)}m.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=qe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=m.camelCase(t),l=e.style;if(t=m.cssProps[u]||(m.cssProps[u]=We(u)||u),s=m.cssHooks[t]||m.cssHooks[u],void 0===n)return s&&"get"in s&&void 0!==(o=s.get(e,!1,i))?o:l[t];"string"===(a=r(n))&&(o=U.exec(n))&&o[1]&&(n=Y(e,t,o),a="number"),null!=n&&n==n&&("number"===a&&(n+=o&&o[3]||(m.cssNumber[u]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,i))||(l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=m.camelCase(t);return t=m.cssProps[s]||(m.cssProps[s]=We(s)||s),(a=m.cssHooks[t]||m.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=qe(e,t,r)),"normal"===i&&t in He&&(i=He[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),m.each(["height","width"],function(e,t){m.cssHooks[t]={get:function(e,n,r){if(n)return Pe.test(m.css(e,"display"))&&0===e.offsetWidth?Ae(e,Oe,function(){return $e(e,t,r)}):$e(e,t,r)},set:function(e,n,r){var i,o=r&&Ne(e),a=r&&Ie(e,t,r,"border-box"===m.css(e,"boxSizing",!1,o),o);return a&&(i=U.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=m.css(e,t)),Re(0,n,a)}}}),m.cssHooks.marginLeft=Le(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(qe(e,"marginLeft"))||e.getBoundingClientRect().left-Ae(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),m.cssHooks.marginRight=Le(v.reliableMarginRight,function(e,t){if(t)return Ae(e,{display:"inline-block"},qe,[e,"marginRight"])}),m.each({margin:"",padding:"",border:"Width"},function(e,t){m.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+V[r]+t]=o[r]||o[r-2]||o[0];return i}},_e.test(e)||(m.cssHooks[e+t].set=Re)}),m.fn.extend({css:function(e,t){return M(this,function(e,t,n){var r,i,o={},a=0;if(m.isArray(t)){for(r=Ne(e),i=t.length;a<i;a++)o[t[a]]=m.css(e,t[a],!1,r);return o}return void 0!==n?m.style(e,t,n):m.css(e,t)},e,t,arguments.length>1)},show:function(){return Be(this,!0)},hide:function(){return Be(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){G(this)?m(this).show():m(this).hide()})}}),m.Tween=ze,ze.prototype={constructor:ze,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||m.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(m.cssNumber[n]?"":"px")},cur:function(){var e=ze.propHooks[this.prop];return e&&e.get?e.get(this):ze.propHooks._default.get(this)},run:function(e){var t,n=ze.propHooks[this.prop];return this.options.duration?this.pos=t=m.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):ze.propHooks._default.set(this),this}},ze.prototype.init.prototype=ze.prototype,ze.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=m.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){m.fx.step[e.prop]?m.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[m.cssProps[e.prop]]&&!m.cssHooks[e.prop]?e.elem[e.prop]=e.now:m.style(e.elem,e.prop,e.now+e.unit)}}},ze.propHooks.scrollTop=ze.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},m.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},m.fx=ze.prototype.init,m.fx.step={};var Xe,Ue,Ve=/^(?:toggle|show|hide)$/,Ge=/queueHooks$/;function Ye(){return i.setTimeout(function(){Xe=void 0}),Xe=m.now()}function Qe(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=V[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function Je(e,t,n){for(var r,i=(Ke.tweeners[t]||[]).concat(Ke.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function Ke(e,t,n){var r,i,o=0,a=Ke.prefilters.length,s=m.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=Xe||Ye(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:m.extend({},t),opts:m.extend(!0,{specialEasing:{},easing:m.easing._default},n),originalProperties:t,originalOptions:n,startTime:Xe||Ye(),duration:n.duration,tweens:[],createTween:function(t,n){var r=m.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=m.camelCase(n)],o=e[n],m.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=m.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);o<a;o++)if(r=Ke.prefilters[o].call(l,e,c,l.opts))return m.isFunction(r.stop)&&(m._queueHooks(l.elem,l.opts.queue).stop=m.proxy(r.stop,r)),r;return m.map(c,Je,l),m.isFunction(l.opts.start)&&l.opts.start.call(e,l),m.fx.timer(m.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}m.Animation=m.extend(Ke,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return Y(n.elem,e,U.exec(t),n),n}]},tweener:function(e,t){m.isFunction(e)?(t=e,e=["*"]):e=e.match(O);for(var n,r=0,i=e.length;r<i;r++)n=e[r],Ke.tweeners[n]=Ke.tweeners[n]||[],Ke.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c=this,d={},f=e.style,p=e.nodeType&&G(e),h=R.get(e,"fxshow");for(r in n.queue||(null==(s=m._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,u=s.empty.fire,s.empty.fire=function(){s.unqueued||u()}),s.unqueued++,c.always(function(){c.always(function(){s.unqueued--,m.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[f.overflow,f.overflowX,f.overflowY],"inline"===("none"===(l=m.css(e,"display"))?R.get(e,"olddisplay")||je(e.nodeName):l)&&"none"===m.css(e,"float")&&(f.display="inline-block")),n.overflow&&(f.overflow="hidden",c.always(function(){f.overflow=n.overflow[0],f.overflowX=n.overflow[1],f.overflowY=n.overflow[2]})),t)if(i=t[r],Ve.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(p?"hide":"show")){if("show"!==i||!h||void 0===h[r])continue;p=!0}d[r]=h&&h[r]||m.style(e,r)}else l=void 0;if(m.isEmptyObject(d))"inline"===("none"===l?je(e.nodeName):l)&&(f.display=l);else for(r in h?"hidden"in h&&(p=h.hidden):h=R.access(e,"fxshow",{}),o&&(h.hidden=!p),p?m(e).show():c.done(function(){m(e).hide()}),c.done(function(){var t;for(t in R.remove(e,"fxshow"),d)m.style(e,t,d[t])}),d)a=Je(p?h[r]:0,r,c),r in h||(h[r]=a.start,p&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}],prefilter:function(e,t){t?Ke.prefilters.unshift(e):Ke.prefilters.push(e)}}),m.speed=function(e,t,n){var i=e&&"object"===r(e)?m.extend({},e):{complete:n||!n&&t||m.isFunction(e)&&e,duration:e,easing:n&&t||t&&!m.isFunction(t)&&t};return i.duration=m.fx.off?0:"number"==typeof i.duration?i.duration:i.duration in m.fx.speeds?m.fx.speeds[i.duration]:m.fx.speeds._default,null!=i.queue&&!0!==i.queue||(i.queue="fx"),i.old=i.complete,i.complete=function(){m.isFunction(i.old)&&i.old.call(this),i.queue&&m.dequeue(this,i.queue)},i},m.fn.extend({fadeTo:function(e,t,n,r){return this.filter(G).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=m.isEmptyObject(e),o=m.speed(t,n,r),a=function(){var t=Ke(this,m.extend({},e),o);(i||R.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=m.timers,a=R.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&Ge.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||m.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=R.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=m.timers,a=r?r.length:0;for(n.finish=!0,m.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),m.each(["toggle","show","hide"],function(e,t){var n=m.fn[t];m.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(Qe(t,!0),e,r,i)}}),m.each({slideDown:Qe("show"),slideUp:Qe("hide"),slideToggle:Qe("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){m.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),m.timers=[],m.fx.tick=function(){var e,t=0,n=m.timers;for(Xe=m.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||m.fx.stop(),Xe=void 0},m.fx.timer=function(e){m.timers.push(e),e()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){Ue||(Ue=i.setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){i.clearInterval(Ue),Ue=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(e,t){return e=m.fx&&m.fx.speeds[e]||e,t=t||"fx",this.queue(t,function(t,n){var r=i.setTimeout(t,e);n.stop=function(){i.clearTimeout(r)}})},function(){var e=s.createElement("input"),t=s.createElement("select"),n=t.appendChild(s.createElement("option"));e.type="checkbox",v.checkOn=""!==e.value,v.optSelected=n.selected,t.disabled=!0,v.optDisabled=!n.disabled,(e=s.createElement("input")).value="t",e.type="radio",v.radioValue="t"===e.value}();var Ze,et=m.expr.attrHandle;m.fn.extend({attr:function(e,t){return M(this,m.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){m.removeAttr(this,e)})}}),m.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?m.prop(e,t,n):(1===o&&m.isXMLDoc(e)||(t=t.toLowerCase(),i=m.attrHooks[t]||(m.expr.match.bool.test(t)?Ze:void 0)),void 0!==n?null===n?void m.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=m.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&m.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(O);if(o&&1===e.nodeType)for(;n=o[i++];)r=m.propFix[n]||n,m.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)}}),Ze={set:function(e,t,n){return!1===t?m.removeAttr(e,n):e.setAttribute(n,n),n}},m.each(m.expr.match.bool.source.match(/\w+/g),function(e,t){var n=et[t]||m.find.attr;et[t]=function(e,t,r){var i,o;return r||(o=et[t],et[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,et[t]=o),i}});var tt=/^(?:input|select|textarea|button)$/i,nt=/^(?:a|area)$/i;m.fn.extend({prop:function(e,t){return M(this,m.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[m.propFix[e]||e]})}}),m.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&m.isXMLDoc(e)||(t=m.propFix[t]||t,i=m.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=m.find.attr(e,"tabindex");return t?parseInt(t,10):tt.test(e.nodeName)||nt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),v.optSelected||(m.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this});var rt=/[\t\r\n\f]/g;function it(e){return e.getAttribute&&e.getAttribute("class")||""}m.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(m.isFunction(e))return this.each(function(t){m(this).addClass(e.call(this,t,it(this)))});if("string"==typeof e&&e)for(t=e.match(O)||[];n=this[u++];)if(i=it(n),r=1===n.nodeType&&(" "+i+" ").replace(rt," ")){for(a=0;o=t[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=m.trim(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(m.isFunction(e))return this.each(function(t){m(this).removeClass(e.call(this,t,it(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof e&&e)for(t=e.match(O)||[];n=this[u++];)if(i=it(n),r=1===n.nodeType&&(" "+i+" ").replace(rt," ")){for(a=0;o=t[a++];)for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ");i!==(s=m.trim(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=r(e);return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):m.isFunction(e)?this.each(function(n){m(this).toggleClass(e.call(this,n,it(this),t),t)}):this.each(function(){var t,r,i,o;if("string"===n)for(r=0,i=m(this),o=e.match(O)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else void 0!==e&&"boolean"!==n||((t=it(this))&&R.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":R.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+it(n)+" ").replace(rt," ").indexOf(t)>-1)return!0;return!1}});var ot=/\r/g,at=/[\x20\t\r\n\f]+/g;m.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=m.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,m(this).val()):e)?i="":"number"==typeof i?i+="":m.isArray(i)&&(i=m.map(i,function(e){return null==e?"":e+""})),(t=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=m.valHooks[i.type]||m.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(ot,""):null==n?"":n:void 0}}),m.extend({valHooks:{option:{get:function(e){var t=m.find.attr(e,"value");return null!=t?t:m.trim(m.text(e)).replace(at," ")}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||i<0,a=o?null:[],s=o?i+1:r.length,u=i<0?s:o?i:0;u<s;u++)if(((n=r[u]).selected||u===i)&&(v.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!m.nodeName(n.parentNode,"optgroup"))){if(t=m(n).val(),o)return t;a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=m.makeArray(t),a=i.length;a--;)((r=i[a]).selected=m.inArray(m.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(e,t){if(m.isArray(t))return e.checked=m.inArray(m(e).val(),t)>-1}},v.checkOn||(m.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var st=/^(?:focusinfocus|focusoutblur)$/;m.extend(m.event,{trigger:function(e,t,n,o){var a,u,l,c,d,f,p,v=[n||s],g=h.call(e,"type")?e.type:e,y=h.call(e,"namespace")?e.namespace.split("."):[];if(u=l=n=n||s,3!==n.nodeType&&8!==n.nodeType&&!st.test(g+m.event.triggered)&&(g.indexOf(".")>-1&&(g=(y=g.split(".")).shift(),y.sort()),d=g.indexOf(":")<0&&"on"+g,(e=e[m.expando]?e:new m.Event(g,"object"===r(e)&&e)).isTrigger=o?2:3,e.namespace=y.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+y.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:m.makeArray(t,[e]),p=m.event.special[g]||{},o||!p.trigger||!1!==p.trigger.apply(n,t))){if(!o&&!p.noBubble&&!m.isWindow(n)){for(c=p.delegateType||g,st.test(c+g)||(u=u.parentNode);u;u=u.parentNode)v.push(u),l=u;l===(n.ownerDocument||s)&&v.push(l.defaultView||l.parentWindow||i)}for(a=0;(u=v[a++])&&!e.isPropagationStopped();)e.type=a>1?c:p.bindType||g,(f=(R.get(u,"events")||{})[e.type]&&R.get(u,"handle"))&&f.apply(u,t),(f=d&&u[d])&&f.apply&&F(u)&&(e.result=f.apply(u,t),!1===e.result&&e.preventDefault());return e.type=g,o||e.isDefaultPrevented()||p._default&&!1!==p._default.apply(v.pop(),t)||!F(n)||d&&m.isFunction(n[g])&&!m.isWindow(n)&&((l=n[d])&&(n[d]=null),m.event.triggered=g,n[g](),m.event.triggered=void 0,l&&(n[d]=l)),e.result}},simulate:function(e,t,n){var r=m.extend(new m.Event,n,{type:e,isSimulated:!0});m.event.trigger(r,null,t)}}),m.fn.extend({trigger:function(e,t){return this.each(function(){m.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return m.event.trigger(e,t,n,!0)}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){m.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),m.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.focusin="onfocusin"in i,v.focusin||m.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){m.event.simulate(t,e.target,m.event.fix(e))};m.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=R.access(r,t);i||r.addEventListener(e,n,!0),R.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=R.access(r,t)-1;i?R.access(r,t,i):(r.removeEventListener(e,n,!0),R.remove(r,t))}}});var ut=i.location,lt=m.now(),ct=/\?/;m.parseJSON=function(e){return JSON.parse(e+"")},m.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new i.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+e),t};var dt=/#.*$/,ft=/([?&])_=[^&]*/,pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,ht=/^(?:GET|HEAD)$/,vt=/^\/\//,mt={},gt={},yt="*/".concat("*"),bt=s.createElement("a");function xt(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(O)||[];if(m.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function wt(e,t,n,r){var i={},o=e===gt;function a(s){var u;return i[s]=!0,m.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function Tt(e,t){var n,r,i=m.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&m.extend(!0,e,r),e}bt.href=ut.href,m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ut.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ut.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":yt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Tt(Tt(e,m.ajaxSettings),t):Tt(m.ajaxSettings,e)},ajaxPrefilter:xt(mt),ajaxTransport:xt(gt),ajax:function(e,t){"object"===r(e)&&(t=e,e=void 0),t=t||{};var n,o,a,u,l,c,d,f,p=m.ajaxSetup({},t),h=p.context||p,v=p.context&&(h.nodeType||h.jquery)?m(h):m.event,g=m.Deferred(),y=m.Callbacks("once memory"),b=p.statusCode||{},x={},w={},T=0,C="canceled",k={readyState:0,getResponseHeader:function(e){var t;if(2===T){if(!u)for(u={};t=pt.exec(a);)u[t[1].toLowerCase()]=t[2];t=u[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===T?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return T||(e=w[n]=w[n]||e,x[e]=t),this},overrideMimeType:function(e){return T||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(T<2)for(t in e)b[t]=[b[t],e[t]];else k.always(e[k.status]);return this},abort:function(e){var t=e||C;return n&&n.abort(t),S(0,t),this}};if(g.promise(k).complete=y.add,k.success=k.done,k.error=k.fail,p.url=((e||p.url||ut.href)+"").replace(dt,"").replace(vt,ut.protocol+"//"),p.type=t.method||t.type||p.method||p.type,p.dataTypes=m.trim(p.dataType||"*").toLowerCase().match(O)||[""],null==p.crossDomain){c=s.createElement("a");try{c.href=p.url,c.href=c.href,p.crossDomain=bt.protocol+"//"+bt.host!=c.protocol+"//"+c.host}catch(e){p.crossDomain=!0}}if(p.data&&p.processData&&"string"!=typeof p.data&&(p.data=m.param(p.data,p.traditional)),wt(mt,p,t,k),2===T)return k;for(f in(d=m.event&&p.global)&&0==m.active++&&m.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!ht.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(ct.test(o)?"&":"?")+p.data,delete p.data),!1===p.cache&&(p.url=ft.test(o)?o.replace(ft,"$1_="+lt++):o+(ct.test(o)?"&":"?")+"_="+lt++)),p.ifModified&&(m.lastModified[o]&&k.setRequestHeader("If-Modified-Since",m.lastModified[o]),m.etag[o]&&k.setRequestHeader("If-None-Match",m.etag[o])),(p.data&&p.hasContent&&!1!==p.contentType||t.contentType)&&k.setRequestHeader("Content-Type",p.contentType),k.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+yt+"; q=0.01":""):p.accepts["*"]),p.headers)k.setRequestHeader(f,p.headers[f]);if(p.beforeSend&&(!1===p.beforeSend.call(h,k,p)||2===T))return k.abort();for(f in C="abort",{success:1,error:1,complete:1})k[f](p[f]);if(n=wt(gt,p,t,k)){if(k.readyState=1,d&&v.trigger("ajaxSend",[k,p]),2===T)return k;p.async&&p.timeout>0&&(l=i.setTimeout(function(){k.abort("timeout")},p.timeout));try{T=1,n.send(x,S)}catch(e){if(!(T<2))throw e;S(-1,e)}}else S(-1,"No Transport");function S(e,t,r,s){var u,c,f,x,w,C=t;2!==T&&(T=2,l&&i.clearTimeout(l),n=void 0,a=s||"",k.readyState=e>0?4:0,u=e>=200&&e<300||304===e,r&&(x=function(e,t,n){for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(p,k,r)),x=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(p,x,k,u),u?(p.ifModified&&((w=k.getResponseHeader("Last-Modified"))&&(m.lastModified[o]=w),(w=k.getResponseHeader("etag"))&&(m.etag[o]=w)),204===e||"HEAD"===p.type?C="nocontent":304===e?C="notmodified":(C=x.state,c=x.data,u=!(f=x.error))):(f=C,!e&&C||(C="error",e<0&&(e=0))),k.status=e,k.statusText=(t||C)+"",u?g.resolveWith(h,[c,C,k]):g.rejectWith(h,[k,C,f]),k.statusCode(b),b=void 0,d&&v.trigger(u?"ajaxSuccess":"ajaxError",[k,p,u?c:f]),y.fireWith(h,[k,C]),d&&(v.trigger("ajaxComplete",[k,p]),--m.active||m.event.trigger("ajaxStop")))}return k},getJSON:function(e,t,n){return m.get(e,t,n,"json")},getScript:function(e,t){return m.get(e,void 0,t,"script")}}),m.each(["get","post"],function(e,t){m[t]=function(e,n,r,i){return m.isFunction(n)&&(i=i||r,r=n,n=void 0),m.ajax(m.extend({url:e,type:t,dataType:i,data:n,success:r},m.isPlainObject(e)&&e))}}),m._evalUrl=function(e){return m.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,throws:!0})},m.fn.extend({wrapAll:function(e){var t;return m.isFunction(e)?this.each(function(t){m(this).wrapAll(e.call(this,t))}):(this[0]&&(t=m(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return m.isFunction(e)?this.each(function(t){m(this).wrapInner(e.call(this,t))}):this.each(function(){var t=m(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=m.isFunction(e);return this.each(function(n){m(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(e){return!m.expr.filters.visible(e)},m.expr.filters.visible=function(e){return e.offsetWidth>0||e.offsetHeight>0||e.getClientRects().length>0};var Ct=/%20/g,kt=/\[\]$/,St=/\r?\n/g,jt=/^(?:submit|button|image|reset|file)$/i,_t=/^(?:input|select|textarea|keygen)/i;function Et(e,t,n,i){var o;if(m.isArray(t))m.each(t,function(t,o){n||kt.test(e)?i(e,o):Et(e+"["+("object"===r(o)&&null!=o?t:"")+"]",o,n,i)});else if(n||"object"!==m.type(t))i(e,t);else for(o in t)Et(e+"["+o+"]",t[o],n,i)}m.param=function(e,t){var n,r=[],i=function(e,t){t=m.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(e)||e.jquery&&!m.isPlainObject(e))m.each(e,function(){i(this.name,this.value)});else for(n in e)Et(n,e[n],t,i);return r.join("&").replace(Ct,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=m.prop(this,"elements");return e?m.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!m(this).is(":disabled")&&_t.test(this.nodeName)&&!jt.test(e)&&(this.checked||!Q.test(e))}).map(function(e,t){var n=m(this).val();return null==n?null:m.isArray(n)?m.map(n,function(e){return{name:t.name,value:e.replace(St,"\r\n")}}):{name:t.name,value:n.replace(St,"\r\n")}}).get()}}),m.ajaxSettings.xhr=function(){try{return new i.XMLHttpRequest}catch(e){}};var Nt={0:200,1223:204},At=m.ajaxSettings.xhr();v.cors=!!At&&"withCredentials"in At,v.ajax=At=!!At,m.ajaxTransport(function(e){var t,n;if(v.cors||At&&!e.crossDomain)return{send:function(r,o){var a,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(a in e.xhrFields)s[a]=e.xhrFields[a];for(a in e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest"),r)s.setRequestHeader(a,r[a]);t=function(e){return function(){t&&(t=n=s.onload=s.onerror=s.onabort=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Nt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=t(),n=s.onerror=t("error"),void 0!==s.onabort?s.onabort=n:s.onreadystatechange=function(){4===s.readyState&&i.setTimeout(function(){t&&n()})},t=t("abort");try{s.send(e.hasContent&&e.data||null)}catch(e){if(t)throw e}},abort:function(){t&&t()}}}),m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return m.globalEval(e),e}}}),m.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),m.ajaxTransport("script",function(e){var t,n;if(e.crossDomain)return{send:function(r,i){t=m("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),s.head.appendChild(t[0])},abort:function(){n&&n()}}});var Dt=[],qt=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Dt.pop()||m.expando+"_"+lt++;return this[e]=!0,e}}),m.ajaxPrefilter("json jsonp",function(e,t,n){var r,o,a,s=!1!==e.jsonp&&(qt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&qt.test(e.data)&&"data");if(s||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,s?e[s]=e[s].replace(qt,"$1"+r):!1!==e.jsonp&&(e.url+=(ct.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return a||m.error(r+" was not called"),a[0]},e.dataTypes[0]="json",o=i[r],i[r]=function(){a=arguments},n.always(function(){void 0===o?m(i).removeProp(r):i[r]=o,e[r]&&(e.jsonpCallback=t.jsonpCallback,Dt.push(r)),a&&m.isFunction(o)&&o(a[0]),a=o=void 0}),"script"}),m.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||s;var r=j.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=re([e],t,i),i&&i.length&&m(i).remove(),m.merge([],r.childNodes))};var Lt=m.fn.load;function Pt(e){return m.isWindow(e)?e:9===e.nodeType&&e.defaultView}m.fn.load=function(e,t,n){if("string"!=typeof e&&Lt)return Lt.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>-1&&(i=m.trim(e.slice(u)),e=e.slice(0,u)),m.isFunction(t)?(n=t,t=void 0):t&&"object"===r(t)&&(o="POST"),s.length>0&&m.ajax({url:e,type:o||"GET",dataType:"html",data:t}).done(function(e){a=arguments,s.html(i?m("<div>").append(m.parseHTML(e)).find(i):e)}).always(n&&function(e,t){s.each(function(){n.apply(this,a||[e.responseText,t,e])})}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){m.fn[t]=function(e){return this.on(t,e)}}),m.expr.filters.animated=function(e){return m.grep(m.timers,function(t){return e===t.elem}).length},m.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=m.css(e,"position"),c=m(e),d={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=m.css(e,"top"),u=m.css(e,"left"),("absolute"===l||"fixed"===l)&&(o+u).indexOf("auto")>-1?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m.isFunction(t)&&(t=t.call(e,n,m.extend({},s))),null!=t.top&&(d.top=t.top-s.top+a),null!=t.left&&(d.left=t.left-s.left+i),"using"in t?t.using.call(e,d):c.css(d)}},m.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){m.offset.setOffset(this,e,t)});var t,n,r=this[0],i={top:0,left:0},o=r&&r.ownerDocument;return o?(t=o.documentElement,m.contains(t,r)?(i=r.getBoundingClientRect(),n=Pt(o),{top:i.top+n.pageYOffset-t.clientTop,left:i.left+n.pageXOffset-t.clientLeft}):i):void 0},position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===m.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),m.nodeName(e[0],"html")||(r=e.offset()),r.top+=m.css(e[0],"borderTopWidth",!0),r.left+=m.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-m.css(n,"marginTop",!0),left:t.left-r.left-m.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===m.css(e,"position");)e=e.offsetParent;return e||De})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;m.fn[e]=function(r){return M(this,function(e,r,i){var o=Pt(e);if(void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),m.each(["top","left"],function(e,t){m.cssHooks[t]=Le(v.pixelPosition,function(e,n){if(n)return n=qe(e,t),Ee.test(n)?m(e).position()[t]+"px":n})}),m.each({Height:"height",Width:"width"},function(e,t){m.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){m.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),a=n||(!0===r||!0===i?"margin":"border");return M(this,function(t,n,r){var i;return m.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?m.css(t,n,a):m.style(t,n,r,a)},t,o?r:void 0,o,null)}})}),m.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},size:function(){return this.length}}),m.fn.andSelf=m.fn.addBack,void 0===(n=function(){return m}.apply(t,[]))||(e.exports=n);var Ot=i.jQuery,Ht=i.$;return m.noConflict=function(e){return i.$===m&&(i.$=Ht),e&&i.jQuery===m&&(i.jQuery=Ot),m},o||(i.jQuery=i.$=m),m})}).call(this,n(5)(e))},function(e,t){e.exports=prestashop},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.psShowHide=
/**
 * 2007-2019 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
function(){(0,r.default)(".ps-shown-by-js").show(),(0,r.default)(".ps-hidden-by-js").hide()},t.psGetRequestParameter=i,t.refreshCheckoutPage=function(){if(null!==i("updatedTransaction"))window.location.reload();else{var e=i();e.updatedTransaction=1;var t=[];for(var n in e){var r=e[n];t.push(n+"="+r)}window.location.href=window.location.pathname+"?"+t.join("&")}};var r=function(e){return e&&e.__esModule?e:{default:e}}(n(0));function i(e){var t={};return window.location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=?([^&]*)?/gi,function(e,n,r){t[n]=void 0!==r?r:""}),void 0!==e?t[e]?t[e]:null:t}},function(e,t,n){e.exports=n(4)},function(e,t,n){"use strict";var r=s(n(0));n(6),n(7),n(11),n(12),n(13),n(14);var i=s(n(1)),o=s(n(15)),a=n(2);function s(e){return e&&e.__esModule?e:{default:e}}for(var u in window.$=r.default,window.jQuery=r.default,o.default.prototype)i.default[u]=o.default.prototype[u];(0,r.default)(document).ready(function(){(0,a.psShowHide)()})},function(e,t,n){"use strict";e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){"use strict";var r=a(n(0)),i=a(n(1)),o=n(2);function a(e){return e&&e.__esModule?e:{default:e}}
/**
 * 2007-2019 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */(0,r.default)(document).ready(function(){i.default.on("updateCart",function(e){i.default.cart=e.reason.cart;var t=(0,r.default)(".js-cart").data("refresh-url");if(t){var n={};e&&e.reason&&(n={id_product_attribute:e.reason.idProductAttribute,id_product:e.reason.idProduct}),r.default.post(t,n).then(function(e){(0,r.default)(".cart-detailed-totals").replaceWith(e.cart_detailed_totals),(0,r.default)(".cart-summary-items-subtotal").replaceWith(e.cart_summary_items_subtotal),(0,r.default)(".cart-summary-subtotals-container").replaceWith(e.cart_summary_subtotals_container),(0,r.default)(".cart-summary-totals").replaceWith(e.cart_summary_totals),(0,r.default)(".cart-detailed-actions").replaceWith(e.cart_detailed_actions),(0,r.default)(".cart-voucher").replaceWith(e.cart_voucher),(0,r.default)(".cart-overview").replaceWith(e.cart_detailed),(0,r.default)("#product_customization_id").val(0),(0,r.default)(".js-cart-line-product-quantity").each(function(e,t){var n=(0,r.default)(t);n.attr("value",n.val())}),(0,r.default)(".js-cart-payment-step-refresh").length&&(0,o.refreshCheckoutPage)(),i.default.emit("updatedCart",{eventType:"updateCart",resp:e})}).fail(function(e){i.default.emit("handleError",{eventType:"updateCart",resp:e})})}});var e=(0,r.default)("body");e.on("click",'[data-button-action="add-to-cart"]',function(e){if(e.preventDefault(),(0,r.default)("#quantity_wanted").val()>(0,r.default)("[data-stock]").data("stock")&&0===(0,r.default)("[data-allow-oosp]").data("allow-oosp").length)(0,r.default)('[data-button-action="add-to-cart"]').attr("disabled","disabled");else{var t=(0,r.default)(e.target).closest("form"),n=t.serialize()+"&add=1&action=update",o=t.attr("action"),a=function(e){e.parents(".product-add-to-cart").first().find(".product-minimal-quantity").addClass("error"),e.parent().find("label").addClass("error")},s=t.find("input[min]");if(!function(e){var t=!0;return e.each(function(e,n){var i=(0,r.default)(n),o=parseInt(i.attr("min"),10);o&&i.val()<o&&(a(i),t=!1)}),t}(s))return void a(s);r.default.post(o,n,null,"json").then(function(e){i.default.emit("updateCart",{reason:{idProduct:e.id_product,idProductAttribute:e.id_product_attribute,idCustomization:e.id_customization,linkAction:"add-to-cart",cart:e.cart},resp:e})}).fail(function(e){i.default.emit("handleError",{eventType:"addProductToCart",resp:e})})}}),e.on("submit",'[data-link-action="add-voucher"]',function(e){e.preventDefault();var t=(0,r.default)(e.currentTarget),n=t.attr("action");0===t.find("[name=action]").length&&t.append((0,r.default)("<input>",{type:"hidden",name:"ajax",value:1})),0===t.find("[name=action]").length&&t.append((0,r.default)("<input>",{type:"hidden",name:"action",value:"update"})),r.default.post(n,t.serialize(),null,"json").then(function(t){t.hasError?(0,r.default)(".js-error").show().find(".js-error-text").text(t.errors[0]):i.default.emit("updateCart",{reason:e.target.dataset,resp:t})}).fail(function(e){i.default.emit("handleError",{eventType:"updateCart",resp:e})})})})},function(e,t,n){"use strict";var r=u(n(0)),i=u(n(1)),o=u(n(8)),a=u(n(9)),s=u(n(10));function u(e){return e&&e.__esModule?e:{default:e}}
/**
 * 2007-2019 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */function l(){(0,o.default)(),(0,a.default)(),(0,s.default)(),function(){(0,r.default)(".checkout-step").off("click");var e=(0,r.default)(".js-current-step").prevAll();(e=(0,r.default)(".js-current-step").add(e)).addClass("-clickable"),e.on("click",function(e){var t=(0,r.default)(e.target).closest(".checkout-step");if(!t.hasClass("-unreachable"))if((0,r.default)(".js-current-step, .-current").removeClass("js-current-step -current"),t.toggleClass("-current"),t.toggleClass("js-current-step"),0==(0,r.default)("button.continue",t).length){var n=t.nextAll(".checkout-step.-clickable");n.removeClass("-unreachable").addClass("-complete"),(0,r.default)(".step-title",n).removeClass("not-allowed")}else{var o=t.nextAll();o.addClass("-unreachable").removeClass("-complete"),(0,r.default)(".step-title",o).addClass("not-allowed")}i.default.emit("changedCheckoutStep",{event:e})})}()}(0,r.default)(document).ready(function(){1===(0,r.default)("#checkout").length&&l()})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){(0,r.default)(".js-edit-addresses").on("click",function(e){e.stopPropagation(),(0,r.default)("#checkout-addresses-step").trigger("click"),i.default.emit("editAddress")}),(0,r.default)("#delivery-addresses input[type=radio], #invoice-addresses input[type=radio]").on("click",function(){(0,r.default)(".address-item").removeClass("selected"),(0,r.default)(".address-item:has(input[type=radio]:checked)").addClass("selected");var e=(0,r.default)(".js-address-error").prop("id").split("-").pop(),t=(0,r.default)("#not-valid-addresses").val(),n=this.name.split("_").pop(),i=(0,r.default)(".js-address-error[name=alert-"+n+"]");l(!1,e,n),""!==t&&null===s&&t.split(",").indexOf(this.value)>=0?(i.show(),l(!0,this.value,n),(0,r.default)(".js-address-error").prop("id","id-failure-address-"+this.value)):i.hide();var o=(0,r.default)(".js-address-error:visible");c(o.length<=0)})};var r=a(n(0)),i=a(n(1)),o=n(2);function a(e){return e&&e.__esModule?e:{default:e}}
/**
 * 2007-2019 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */var s=(0,o.psGetRequestParameter)("editAddress"),u=(0,o.psGetRequestParameter)("use_same_address");(0,r.default)(window).on("load",function(){var e=(0,r.default)(".js-address-error:visible");if(0===parseInt(u)&&(0,r.default)("#invoice-addresses input[type=radio]:checked").trigger("click"),(null!==s||(0,r.default)(".js-address-form:visible").length>1)&&e.hide(),e.length>0){var t=(0,r.default)(".js-address-error").prop("id").split("-").pop();e.each(function(){l(!0,t,(0,r.default)(this).attr("name").split("-").pop())})}e=(0,r.default)(".js-address-error:visible"),c(e.length<=0)});var l=function(e,t,n){var i="#7a7a7a";e&&((0,r.default)("#"+n+"-addresses a.edit-address").prop("style","color: #7a7a7a !important"),i="#2fb5d2"),(0,r.default)("#id-address-"+n+"-address-"+t+" a.edit-address").prop("style","color: "+i+" !important")},c=function(e){(0,r.default)("button[name=confirm-addresses]").prop("disabled",!e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=
/**
 * 2007-2019 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
function(){var e=(0,r.default)("body");e.on("change","#js-delivery input",function(e){var t=(0,r.default)("#js-delivery"),n=t.serialize(),a=(0,r.default)(e.currentTarget).parents("div.delivery-option");r.default.post(t.data("url-update"),n).then(function(e){(0,r.default)("#js-checkout-summary").replaceWith(e.preview),(0,r.default)(".js-cart-payment-step-refresh").length&&(0,o.refreshCheckoutPage)(),i.default.emit("updatedDeliveryForm",{dataForm:t.serializeArray(),deliveryOption:a,resp:e})}).fail(function(e){i.default.trigger("handleError",{eventType:"updateDeliveryOptions",resp:e})})}),e.on("click",".js-edit-delivery",function(e){e.stopPropagation(),(0,r.default)("#checkout-delivery-step").trigger("click"),i.default.emit("editDelivery")})};var r=a(n(0)),i=a(n(1)),o=n(2);function a(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=new o;return e.init(),e};var r=function(e){return e&&e.__esModule?e:{default:e}}(n(0));function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.confirmationSelector="#payment-confirmation",this.paymentSelector="#payment-section",this.conditionsSelector="#conditions-to-approve",this.conditionAlertSelector=".js-alert-payment-conditions",this.additionalInformatonSelector=".js-additional-information",this.optionsForm=".js-payment-option-form"}return function(e,t,n){t&&i(e.prototype,t),n&&i(e,n)}(e,[{key:"init",value:function(){(0,r.default)(this.paymentSelector+' input[type="checkbox"][disabled]').attr("disabled",!1);var e=(0,r.default)("body");e.on("change",this.conditionsSelector+' input[type="checkbox"]',r.default.proxy(this.toggleOrderButton,this)),e.on("change",'input[name="payment-option"]',r.default.proxy(this.toggleOrderButton,this)),e.on("click",this.confirmationSelector+" button",r.default.proxy(this.confirm,this)),this.collapseOptions()}},{key:"collapseOptions",value:function(){(0,r.default)(this.additionalInformatonSelector+", "+this.optionsForm).hide()}},{key:"getSelectedOption",value:function(){return(0,r.default)('input[name="payment-option"]:checked').attr("id")}},{key:"hideConfirmation",value:function(){(0,r.default)(this.confirmationSelector).hide()}},{key:"showConfirmation",value:function(){(0,r.default)(this.confirmationSelector).show()}},{key:"toggleOrderButton",value:function(){var e=!0;(0,r.default)(this.conditionsSelector+' input[type="checkbox"]').each(function(t,n){n.checked||(e=!1)}),this.collapseOptions();var t=this.getSelectedOption();if(t||(e=!1),(0,r.default)("#"+t+"-additional-information").show(),(0,r.default)("#pay-with-"+t+"-form").show(),(0,r.default)(".js-payment-binary").hide(),(0,r.default)("#"+t).hasClass("binary")){var n=this.getPaymentOptionSelector(t);this.hideConfirmation(),(0,r.default)(n).show(),e?(0,r.default)(n).removeClass("disabled"):(0,r.default)(n).addClass("disabled")}else this.showConfirmation(),(0,r.default)(this.confirmationSelector+" button").attr("disabled",!e),e?(0,r.default)(this.conditionAlertSelector).hide():(0,r.default)(this.conditionAlertSelector).show()}},{key:"getPaymentOptionSelector",value:function(e){var t=(0,r.default)("#".concat(e)).data("module-name");return".js-payment-".concat(t)}},{key:"confirm",value:function(){var e=this.getSelectedOption();e&&((0,r.default)(this.confirmationSelector+" button").prop("disabled",!0),(0,r.default)("#pay-with-"+e+"-form form").submit())}}]),e}()},function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}}
/**
 * 2007-2019 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */(n(0));var i=!1;function o(e){i=!1,prestashop.emit("updateProductList",e),window.history.pushState(e,document.title,e.current_url)}function a(){i=!1}(0,r.default)(document).ready(function(){prestashop.on("updateFacets",function(e){!function(e){if(i);else{var t=[e,e.indexOf("?")>=0?"&":"?","from-xhr"].join("");r.default.get(t,null,null,"json").then(o).fail(a)}}(e)})})},function(e,t,n){"use strict";var r=o(n(0)),i=o(n(1));function o(e){return e&&e.__esModule?e:{default:e}}
/**
 * 2007-2019 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */(0,r.default)(document).ready(function(){(0,r.default)("body").on("click",".quick-view",function(e){i.default.emit("clickQuickView",{dataset:(0,r.default)(e.target).closest(".js-product-miniature").data()}),e.preventDefault()})})},function(e,t,n){"use strict";var r=a(n(0)),i=a(n(1)),o=n(2);function a(e){return e&&e.__esModule?e:{default:e}}
/**
 * 2007-2019 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */var s=null,u=null;function l(e,t,n){var a=(0,r.default)(".product-actions"),l=a.find("#quantity_wanted"),f=a.find("form:first").serialize(),p=(0,o.psGetRequestParameter)("preview");if(p=null!==p?"&preview="+p:"",null!==n){if(!e||"keyup"!==e.type||l.val()!==l.data("old-value")){l.data("old-value",l.val()),u&&clearTimeout(u);var h=30;"updatedProductQuantity"===t&&(h=750),u=setTimeout(function(){""!==f&&(s=r.default.ajax({url:n+(-1===n.indexOf("?")?"?":"&")+f+p,method:"POST",data:{ajax:1,action:"refresh",quantity_wanted:"updatedProductCombination"===t?l.attr("min"):l.val()},dataType:"json",beforeSend:function(){null!==s&&s.abort()},error:function(e,t,n){"abort"!==t&&0===(0,r.default)("section#main > .ajax-error").length&&d((0,r.default)(".quickview #product-availability, .page-product:not(.modal-open) .row #product-availability"),"An error occurred while processing your request")},success:function(e,n,o){var a=(0,r.default)("<div>").append(e.product_cover_thumbnails);(0,r.default)(".images-container").html()!==a.find(".images-container").html()&&(0,r.default)(".images-container").replaceWith(e.product_cover_thumbnails),(0,r.default)(".quickview .product-prices, .page-product:not(.modal-open) .row .product-prices").replaceWith(e.product_prices),(0,r.default)(".quickview .product-customization, .page-product:not(.modal-open) .row .product-customization").replaceWith(e.product_customization),(0,r.default)(".quickview .product-variants .page-product:not(.modal-open) .row .product-variants").replaceWith(e.product_variants),(0,r.default)(".quickview .product-discounts, .page-product:not(.modal-open) .row .product-discounts").replaceWith(e.product_discounts),(0,r.default)(".quickview .product-additional-info, .page-product:not(.modal-open) .row .product-additional-info").replaceWith(e.product_additional_info),(0,r.default)(".quickview #product-details, #product-details").replaceWith(e.product_details),(0,r.default)(".quickview .product-flags, .page-product:not(.modal-open) .row .product-flags").replaceWith(e.product_flags),function(e){var t=null;(0,r.default)(e.product_add_to_cart).each(function(e,n){if((0,r.default)(n).hasClass("product-add-to-cart"))return t=(0,r.default)(n),!1}),null===t&&d((0,r.default)(".quickview #product-availability, .page-product:not(.modal-open) .row #product-availability"),"An error occurred while processing your request");var n=(0,r.default)(".product-add-to-cart");c({$addToCartSnippet:t,$targetParent:n,targetSelector:".add"}),c({$addToCartSnippet:t,$targetParent:n,targetSelector:"#product-availability"}),c({$addToCartSnippet:t,$targetParent:n,targetSelector:".product-minimal-quantity"})}(e);var s=parseInt(e.product_minimal_quantity,10);isNaN(s)||"updatedProductQuantity"===t||(l.attr("min",s),l.val(s)),i.default.emit("updatedProduct",e)},complete:function(e,t){s=null,u=null}}))}.bind(s,u),h)}}else d((0,r.default)("#product-availability"),"An error occurred while processing your request")}function c(e){var t=(0,r.default)(e.$targetParent.find(e.targetSelector));if(!(t.length<=0)){var n=e.$addToCartSnippet.find(e.targetSelector);n.length>0?t.replaceWith(n[0].outerHTML):t.html("")}}function d(e,t){var n=(0,r.default)('<div class="alert alert-danger ajax-error" role="alert">'.concat(t,"</div>"));e.replaceWith(n)}(0,r.default)(document).ready(function(){(0,r.default)("body").on("change touchspin.on.startspin",".product-variants *[name]",function(e){i.default.emit("updateProduct",{eventType:"updatedProductCombination",event:e,resp:{},reason:{productUrl:i.default.urls.pages.product||""}})}),(0,r.default)("body").on("click",".product-refresh",function(e,t){e.preventDefault();var n="updatedProductCombination";void 0!==t&&t.eventType&&(n=t.eventType),i.default.emit("updateProduct",{eventType:n,event:e,resp:{},reason:{productUrl:i.default.urls.pages.product||""}})}),i.default.on("updateProduct",function(e){var t=e.eventType,n=e.event;(function(){var e=r.default.Deferred(),t=(0,r.default)(".product-actions"),n=(0,r.default)("#quantity_wanted");if(null!==i.default&&null!==i.default.urls&&null!==i.default.urls.pages&&""!==i.default.urls.pages.product&&null!==i.default.urls.pages.product)return e.resolve(i.default.urls.pages.product),e.promise();var o={};return(0,r.default)(t.find("form:first").serializeArray()).each(function(e,t){o[t.name]=t.value}),r.default.ajax({url:t.find("form:first").attr("action"),method:"POST",data:Object.assign({ajax:1,action:"productrefresh",quantity_wanted:n.val()},o),dataType:"json",success:function(t){var n=t.productUrl;i.default.page.canonical=n,e.resolve(n)},error:function(t,n,r){e.reject({jqXHR:t,textStatus:n,errorThrown:r})}}),e.promise()})().done(function(e){return l(n,t,e)}).fail(function(){0===(0,r.default)("section#main > .ajax-error").length&&d((0,r.default)("#product-availability"),"An error occurred while processing your request")})}),i.default.on("updatedProduct",function(e){if(e.product_url&&e.id_product_attribute&&!(0,r.default)(".modal.quickview").length){var t=document.title;e.product_title&&(t=e.product_title,(0,r.default)(document).attr("title",t)),window.history.replaceState({id_product_attribute:e.id_product_attribute},t,e.product_url)}}),i.default.on("updateCart",function(e){e&&e.reason&&"add-to-cart"===e.reason.linkAction&&(0,r.default)("#quantity_wanted").val(1)})})},function(e,t,n){"use strict";var r=o(n(0)),i=o(n(1));function o(e){return e&&e.__esModule?e:{default:e}}(0,r.default)(document).ready(function(){!function(e){(0,r.default)("body").on("change",e.country,function(){var t={id_country:(0,r.default)(e.country).val(),id_address:(0,r.default)(e.address+" form").data("id-address")},n=(0,r.default)(e.address+" form").data("refresh-url"),o=e.address+" input";r.default.post(n,t).then(function(t){var n=[];(0,r.default)(o).each(function(){n[(0,r.default)(this).prop("name")]=(0,r.default)(this).val()}),(0,r.default)(e.address).replaceWith(t.address_form),(0,r.default)(o).each(function(){(0,r.default)(this).val(n[(0,r.default)(this).prop("name")])}),i.default.emit("updatedAddressForm",{target:(0,r.default)(e.address),resp:t})}).fail(function(e){i.default.emit("handleError",{eventType:"updateAddressForm",resp:e})})})}({country:".js-country",address:".js-address-form"})})},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function o(e){return"function"==typeof e}function a(e){return"object"===r(e)&&null!==e}function s(e){return void 0===e}e.exports=i,i.EventEmitter=i,i.prototype._events=void 0,i.prototype._maxListeners=void 0,i.defaultMaxListeners=10,i.prototype.setMaxListeners=function(e){if(!function(e){return"number"==typeof e}(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},i.prototype.emit=function(e){var t,n,r,i,u,l;if(this._events||(this._events={}),"error"===e&&(!this._events.error||a(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var c=new Error('Uncaught, unspecified "error" event. ('+t+")");throw c.context=t,c}if(s(n=this._events[e]))return!1;if(o(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:i=Array.prototype.slice.call(arguments,1),n.apply(this,i)}else if(a(n))for(i=Array.prototype.slice.call(arguments,1),r=(l=n.slice()).length,u=0;u<r;u++)l[u].apply(this,i);return!0},i.prototype.addListener=function(e,t){var n;if(!o(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,o(t.listener)?t.listener:t),this._events[e]?a(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,a(this._events[e])&&!this._events[e].warned&&(n=s(this._maxListeners)?i.defaultMaxListeners:this._maxListeners)&&n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},i.prototype.on=i.prototype.addListener,i.prototype.once=function(e,t){if(!o(t))throw TypeError("listener must be a function");var n=!1;function r(){this.removeListener(e,r),n||(n=!0,t.apply(this,arguments))}return r.listener=t,this.on(e,r),this},i.prototype.removeListener=function(e,t){var n,r,i,s;if(!o(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(i=(n=this._events[e]).length,r=-1,n===t||o(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(a(n)){for(s=i;s-->0;)if(n[s]===t||n[s].listener&&n[s].listener===t){r=s;break}if(r<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},i.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(o(n=this._events[e]))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},i.prototype.listeners=function(e){return this._events&&this._events[e]?o(this._events[e])?[this._events[e]]:this._events[e].slice():[]},i.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(o(t))return 1;if(t)return t.length}return 0},i.listenerCount=function(e,t){return e.listenerCount(t)}}]);/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/theme.scss":
/*!************************!*\
  !*** ./css/theme.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./js/aone/_aonebrandlogo.js":
/*!***********************************!*\
  !*** ./js/aone/_aonebrandlogo.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function setBrandLogoSlider(obj, scroll, rtl) {
	$(obj).slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		adaptiveHeight: false,
		infinite: true,
		speed: 700,
		autoplay: scroll,
		dots: false,
		arrows: true,
		draggable: false,
		rtl: rtl,
		responsive: [{
			breakpoint: 1220,
			settings: {
				slidesToShow: 5
			}
		}, {
			breakpoint: 992,
			settings: {
				slidesToShow: 4
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 3
			}
		}, {
			breakpoint: 576,
			settings: {
				slidesToShow: 2
			}
		}]
	});
	$(obj).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		$(obj).find('.slick-active img.js-lazy').trigger("appear");
	});
}

$(window).load(function () {
	var rtl = false;
	if (prestashop.language.is_rtl == '1') {
		rtl = true;
	}
	$('.js-brand-logo-slider').each(function () {
		var scroll = $(this).data('autoscroll');
		setBrandLogoSlider($(this), scroll, rtl);
	});
});

/***/ }),

/***/ "./js/aone/_aonecolorsfonts.js":
/*!*************************************!*\
  !*** ./js/aone/_aonecolorsfonts.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function ajaxLoadPreviewContent(preview_controller) {
    $.ajax({
        type: 'POST',
        url: preview_controller,
        data: {
            ajax: true
        },
        success: function (data) {
            $('.js-previewContainer').append(data);
            colorsLivePreviewConfig();
        },
        error: function (err) {
            console.log(err);
        }
    });

    var colorsLivePreviewConfig = function () {
        var live_preview = $('#js-colorsLivePreview'),
            color_picker = live_preview.find('.js-colorPicker'),
            reset_button = live_preview.find('.js-previewReset'),
            preview_boxed = live_preview.find('.js-previewBoxed'),
            preview_wide = live_preview.find('.js-previewWide'),
            special_style = live_preview.find('.js-specialStyle');

        color_picker.each(function () {
            $(this).colpick({
                layout: 'hex',
                color: $(this).data('color'),
                onSubmit: function (hsb, hex, rgb, el) {
                    $(el).css('background-color', '#' + hex);

                    var styles = $(el).parent('.js-color').children('.style');
                    $.each(styles, function () {
                        var selector = $(this).children('.selector');
                        var property = $(this).children('.property');
                        var preview = $(this).children('.preview');
                        preview.html('<style>' + selector.text() + '{' + property.text() + '#' + hex + '}</style>');
                    });
                }
            });
        });

        reset_button.click(function (e) {
            e.preventDefault();
            live_preview.find('.js-color .preview').html('');
            color_picker.each(function () {
                $(this).css('background-color', $(this).data('color'));
            });
            return false;
        });

        preview_boxed.click(function (e) {
            e.preventDefault();
            $('body').addClass('boxed-layout');
            preview_wide.removeClass('active');
            $(this).addClass('active');
            $('.js-boxedWide .style .preview').html('<style>' + $('.js-boxedBackgroundCSS').text() + '</style>');

            return false;
        });
        preview_wide.click(function (e) {
            e.preventDefault();
            $('body').removeClass('boxed-layout');
            preview_boxed.removeClass('active');
            $(this).addClass('active');
            $('.js-boxedWide .style .preview').html('');

            return false;
        });

        if ($('body').hasClass('remove-border-radius')) {
            special_style.find('input[name="disable_border_radius"]').attr('checked', 'checked');
        }
        if ($('body').hasClass('remove-box-shadow')) {
            special_style.find('input[name="disable_box_shadow"]').attr('checked', 'checked');
        }
        if ($('#wrapper').hasClass('background-for-title')) {
            special_style.find('input[name="background_block_title"]').attr('checked', 'checked');
        }
        special_style.find('input[name="disable_border_radius"]').change(function () {
            $('body').toggleClass('remove-border-radius');
        });
        special_style.find('input[name="disable_box_shadow"]').change(function () {
            $('body').toggleClass('remove-box-shadow');
        });
        special_style.find('input[name="background_block_title"]').change(function () {
            $('#wrapper').toggleClass('background-for-title background-for-tab-title background-for-column-title');
        });
    };
}
function livePreviewColorPicker() {
    if ($('.js-previewToggle').length) {
        $('.js-previewToggle').click(function () {
            $(this).parent().toggleClass('open');
        });

        ajaxLoadPreviewContent($('.js-previewToggle').data('preview-controller'));
    }
}

$(window).load(function () {
    setTimeout(function () {
        livePreviewColorPicker();
    }, 2400);
});

/***/ }),

/***/ "./js/aone/_aonecolumnblocks.js":
/*!**************************************!*\
  !*** ./js/aone/_aonecolumnblocks.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function setColumnBlockSlider(obj, opt) {
  $(obj).slick({
    slidesToShow: opt.slidesToShow,
    slidesToScroll: opt.slidesToShow,
    infinite: true,
    draggable: opt.draggable,
    speed: opt.speed,
    autoplay: opt.autoplay,
    dots: opt.dots,
    arrows: opt.arrows,
    rtl: opt.rtl
  });

  $(obj).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $(obj).find('.slick-active img.js-lazy').trigger('appear');
  });
}

$(window).load(function () {
  $('.js-column-block-slider').each(function () {
    setColumnBlockSlider($(this), $(this).data('slickoptions'));
  });
});

/***/ }),

/***/ "./js/aone/_aonefeaturedcategories.js":
/*!********************************************!*\
  !*** ./js/aone/_aonefeaturedcategories.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function setFeaturedCategoriesSlider(obj, sts, rtl) {
	$(obj).slick({
		slidesToShow: sts,
		slidesToScroll: sts,
		adaptiveHeight: true,
		infinite: true,
		draggable: false,
		speed: 1000,
		autoplay: false,
		dots: false,
		arrows: true,
		rtl: rtl,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: Math.min(2, sts - 1),
				slidesToScroll: Math.min(2, sts - 1)
			}
		}, {
			breakpoint: 576,
			settings: {
				slidesToShow: Math.min(1, sts),
				slidesToScroll: Math.min(1, sts)
			}
		}]
	});
	$(obj).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		$(obj).find('.slick-active img.js-lazy').trigger("appear");
	});
}

$(window).load(function () {
	var rtl = false;
	if (prestashop.language.is_rtl == '1') {
		rtl = true;
	}
	$('.js-featured-categories-slider').each(function () {
		var sts = $(this).data('slidestoshow');

		setFeaturedCategoriesSlider($(this), sts, rtl);
	});
});

/***/ }),

/***/ "./js/aone/_aonehomeblocks.js":
/*!************************************!*\
  !*** ./js/aone/_aonehomeblocks.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function updateSlickInTabs() {
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    let anchor = $(e.target).attr('href');
    $('.js-home-block-slider', anchor).slick('setPosition');
    $('img.js-lazy', anchor).trigger('appear');
  });
}

function setHomeBlockSlider(obj, opt) {
  $(obj).slick({
    slidesToShow: opt.slidesToShow,
    slidesToScroll: opt.slidesToShow,
    adaptiveHeight: false,
    infinite: true,
    draggable: opt.draggable,
    speed: opt.speed,
    autoplay: opt.autoplay,
    dots: opt.dots,
    arrows: opt.arrows,
    rtl: opt.rtl,
    responsive: [{
      breakpoint: 1220,
      settings: {
        slidesToShow: opt.slidesToShow_1220,
        slidesToScroll: opt.slidesToShow_1220
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: opt.slidesToShow_992,
        slidesToScroll: opt.slidesToShow_992
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: opt.slidesToShow_768,
        slidesToScroll: opt.slidesToShow_768
      }
    }]
  });

  $(obj).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $(obj).find('.slick-active img.js-lazy').trigger('appear');
  });
}

$(window).load(function () {
  $('.js-home-block-slider').each(function () {
    setHomeBlockSlider($(this), $(this).data('slickoptions'));
  });

  updateSlickInTabs();
});

/***/ }),

/***/ "./js/aone/_aonemegamenu.js":
/*!**********************************!*\
  !*** ./js/aone/_aonemegamenu.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function updateDropdownPosition() {
    var $amegamenu = $('#amegamenu');
    if ($amegamenu.length) {
        var updatePosition = function () {
            if ($amegamenu.hasClass('amegamenu_rtl')) {
                updateDropdownPositionRTL($amegamenu);
            } else {
                updateDropdownPositionLTR($amegamenu);
            }
        };

        updatePosition();
        $(window).resize(updatePosition);
    }
}

function updateDropdownPositionLTR(mm) {
    var m_left = mm.offset().left,
        m_right = mm.offset().left + mm.outerWidth();

    $('.adropdown', mm).each(function () {
        let t = $(this),
            p = t.parent('.amenu-item'),
            i = 0 - (t.outerWidth() - p.outerWidth()) / 2,
            t_right = t.offset().left + t.outerWidth(),
            p_left = p.offset().left,
            margin = parseInt(t.css('margin-left'));

        if (t_right - margin + i > m_right) {
            t.css('margin-left', m_right - p_left - t.outerWidth() + 'px');
        } else if (t.offset().left - margin + i < m_left) {
            t.css('margin-left', m_left - p_left + 'px');
        } else {
            t.css('margin-left', i + 'px');
        }
    });
}
function updateDropdownPositionRTL(mm) {
    var m_left = mm.offset().left,
        m_right = mm.offset().left + mm.outerWidth();

    $('.adropdown', mm).each(function () {
        let t = $(this),
            p = t.parent(),
            i = 0 - (t.outerWidth() - p.outerWidth()) / 2,
            t_right = t.offset().left + t.outerWidth(),
            p_right = p.offset().left + p.outerWidth(),
            margin = parseInt(t.css('margin-right'));

        if (t.offset().left + margin - i < m_left) {
            t.css('margin-right', 0 - (t.outerWidth() - p_right + m_left) + 'px');
        } else if (t_right + margin - i > m_right) {
            t.css('margin-right', 0 - (m_right - p_right) + 'px');
        } else {
            t.css('margin-right', i + 'px');
        }
    });
}

function mobileToggleEvent() {
    $('#mobile-amegamenu .amenu-item.plex > .amenu-link').on('click', function () {
        if (!$(this).hasClass('expanded')) {
            $('#mobile-amegamenu .expanded').removeClass('expanded').next('.adropdown').slideUp();
        }
        $(this).next('.adropdown').stop().slideToggle();
        $(this).toggleClass('expanded');

        return false;
    });
}

function enableHoverMenuOnTablet() {
    $('html').on('touchstart', function (e) {
        $('#amegamenu .amenu-item').removeClass('hover');
    });
    $('#amegamenu').on('touchstart', function (e) {
        e.stopPropagation();
    });
    $('#amegamenu .amenu-item.plex > .amenu-link').on('touchstart', function (e) {
        'use strict'; //satisfy code inspectors        

        var li = $(this).parent('li');
        if (li.hasClass('hover')) {
            return true;
        } else {
            $('#amegamenu .amenu-item').removeClass('hover');
            li.addClass('hover');
            e.preventDefault();
            return false;
        }
    });
}

function ajaxLoadDrodownContent() {
    var $ajaxmenu = $('.js-ajax-mega-menu');
    if ($ajaxmenu.length) {
        $.ajax({
            type: 'POST',
            url: $ajaxmenu.data('ajax-dropdown-controller'),
            data: {
                ajax: true
            },
            dataType: 'json',
            success: function (data) {
                updateDrodownContent(data);
            },
            error: function (err) {
                console.log(err);
            }
        });

        var updateDrodownContent = function (dropdown) {
            $('.js-dropdown-content', $ajaxmenu).each(function () {
                let item = $(this).data('menu-id');
                $(this).replaceWith(dropdown[item]);
            });
        };
    }
}

$(window).load(function () {
    setTimeout(function () {
        ajaxLoadDrodownContent();
        updateDropdownPosition();
    }, 600);
    mobileToggleEvent();
    enableHoverMenuOnTablet();
});

/***/ }),

/***/ "./js/aone/_aonepopupnewsletter.js":
/*!*****************************************!*\
  !*** ./js/aone/_aonepopupnewsletter.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function setCookie(cname, cvalue, exdays, path) {
    var d = new Date();
    var expires = '';
    if (exdays) {
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        expires = ';expires=' + d.toUTCString();
    }

    document.cookie = cname + '=' + cvalue + expires + ';path=' + path;
}

function getCookie(cname) {
    var name = cname + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

function ajaxNewsletterSubscribe(subscribeForm) {
    var subscribeURL = $('.js-popup-newsletter-form').data('ajax-submit-url');

    if (subscribeURL && subscribeForm.length) {
        subscribeForm.submit(function (event) {
            event.preventDefault();
            var $form = $(this);

            $.ajax({
                type: 'POST',
                url: subscribeURL,
                data: $form.serialize() + '&submitNewsletter=1&ajax=1',
                dataType: 'json',
                success: function (data) {
                    let msg_html = '<p class="alert alert-success">' + data.msg + '</p>';
                    if (data.nw_error) {
                        msg_html = '<p class="alert alert-danger">' + data.msg + '</p>';
                    }
                    $form.find('.newsletter-message').fadeOut(400, function () {
                        $(this).html(msg_html).fadeIn();
                    });
                },
                error: function (XMLHttpRequest) {
                    alert("Response Text:\n" + XMLHttpRequest.responseText);
                }
            });

            return false;
        });
    }
}

function aoneNewsletterLoad() {
    var jsAOneNewsletter = $('.js-aone-popupnewsletter');
    if (jsAOneNewsletter.length) {
        var save_time = jsAOneNewsletter.data('save-time');

        if (getCookie('aonehidepopupnewsletter' + save_time) === '') {
            $.ajax({
                type: 'POST',
                url: jsAOneNewsletter.data('modal-newsletter-controller'),
                data: {
                    ajax: true
                },
                success: function (result) {
                    jsAOneNewsletter.replaceWith(result);
                    modalNewsletterConfig();
                },
                error: function (err) {
                    console.log(err);
                }
            });

            var modalNewsletterConfig = function () {
                let displayed = false,
                    popNewsletterModal = $('#aone-popup-newsletter-modal'),
                    cookie_expire = popNewsletterModal.data('hidepopup-time');

                $(window).on('scroll', function () {
                    if (!displayed && $(this).scrollTop() > 600) {
                        displayed = true;
                        popNewsletterModal.modal('show');
                    }
                });

                popNewsletterModal.on('hidden.bs.modal', function () {
                    let path = prestashop.urls.base_url.substring(prestashop.urls.shop_domain_url.length);
                    setCookie('aonehidepopupnewsletter' + save_time, '1', parseInt(cookie_expire), path);
                });

                $('.js-newsletter-nothanks').click(function () {
                    popNewsletterModal.modal('hide');
                    return false;
                });

                ajaxNewsletterSubscribe($('.js-popupemailsubscription .js-subscription-form'));
            };
        }
    }
}

$(window).load(function () {
    setTimeout(function () {
        aoneNewsletterLoad();
    }, 1500);
    ajaxNewsletterSubscribe($('.js-emailsubscription .js-subscription-form'));
});

/***/ }),

/***/ "./js/aone/_aoneproductadditional.js":
/*!*******************************************!*\
  !*** ./js/aone/_aoneproductadditional.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function extraFieldPopupModal() {
  var $eModal = $('#extraModal');
  $('button[data-extrafield="popup"]').on('click', function () {
    let width = $(this).data('width'),
        content = $(this).data('content');

    $eModal.find('.modal-dialog').css('max-width', width + 'px');
    $eModal.find('.js-modal-extra-content').html(content);
    $eModal.modal('show');
  });

  $eModal.on('hidden.bs.modal', function () {
    $eModal.find('.js-modal-extra-content').html('');
  });
}

function switchCombination() {
  $('body').on('click', '.js-switch-cbnt', function (e) {
    if (!$(this).hasClass('active')) {
      //$(this).parent().children().removeClass('active');
      //$(this).addClass('active');
      let groups = $(this).data('groups');
      for (g in groups) {
        $('.product-variants [data-product-attribute="' + g + '"]').val(groups[g]).trigger('change');
      }
    }
  });
}

function productSwatchesEvent() {
  $('body').on('click', '.js-swatch-item', function (e) {
    if (!$(this).hasClass('selected')) {
      $('.product-variants [data-product-attribute="' + $(this).parent().attr('data-id-group') + '"]').val($(this).attr('data-id-attribute')).change();
    }
    //$(this).parent().children().removeClass('selected');
    //$(this).addClass('selected');
  });
}

function countdownSpecificPrices() {
  if (typeof varGetFinalDateController !== 'undefined') {
    setTimeout(function () {
      $('.js-product-countdown').runCountdown({
        specificPricesTo: $('.js-product-countdown').attr('data-specific-prices-to'),
        getFinalDateController: varGetFinalDateController
      });
    }, 300);

    prestashop.on('updatedProduct', function (event) {
      $('.js-product-countdown').updateCountdown({
        newSpecificPricesTo: $('.js-new-specific-prices-to').attr('data-new-specific-prices-to'),
        currentSpecificPricesTo: $('.js-product-countdown').attr('data-specific-prices-to'),
        getFinalDateController: varGetFinalDateController
      });
    });
  }
}

$(window).load(function () {
  extraFieldPopupModal();
  switchCombination();
  countdownSpecificPrices();
  productSwatchesEvent();
});

/***/ }),

/***/ "./js/aone/_aoneslideshow.js":
/*!***********************************!*\
  !*** ./js/aone/_aoneslideshow.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(window).load(function () {
	var sliderObject = $('#aoneSlider'),
	    settings = sliderObject.data('settings');

	if (sliderObject.length) {
		sliderObject.nivoSlider({
			effect: settings.effect,
			slices: Number(settings.slices),
			boxCols: Number(settings.boxCols),
			boxRows: Number(settings.boxRows),
			animSpeed: Number(settings.animSpeed),
			pauseTime: Number(settings.pauseTime),
			startSlide: Number(settings.startSlide),
			directionNav: settings.directionNav,
			controlNav: settings.controlNav,
			controlNavThumbs: settings.controlNavThumbs,
			pauseOnHover: settings.pauseOnHover,
			manualAdvance: settings.manualAdvance,
			randomStart: settings.randomStart,
			afterLoad: function () {
				$('#js-nivoSliderOverlay').fadeOut(100, function () {
					sliderObject.fadeIn(400);
				});
			}
		});
	}
});

/***/ }),

/***/ "./js/aone/_aonethememanager.js":
/*!**************************************!*\
  !*** ./js/aone/_aonethememanager.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function stickyHeader() {
    var header_width = $('#header .main-header > .container').width(),
        $stickyMenu = $('.desktop-header-version [data-sticky-menu]'),
        $mobileStickyMenu = $('.mobile-header-version [data-mobile-sticky]');
    if (typeof varStickyMenu !== 'undefined' && varStickyMenu && $stickyMenu.length) {
        $stickyMenu.sticky({
            wrapperClassName: 'desktop-sticky-wrapper'
        });

        $('[data-sticky-cart]').html($('[data-sticky-cart-source]').html());
    }
    if (typeof varMobileStickyMenu !== 'undefined' && varMobileStickyMenu && $mobileStickyMenu.length) {
        $mobileStickyMenu.sticky({
            wrapperClassName: 'mobile-sticky-wrapper'
        });
    }
}

function scrollToTopButton() {
    var $sttb = $('[data-scroll-to-top]');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $sttb.fadeIn();
        } else {
            $sttb.fadeOut();
        }
    });

    $('a', $sttb).on('click', function () {
        $.smoothScroll({
            speed: 500,
            scrollTarget: '#page'
        });
        return false;
    });
}

function loadPageWithProcessBar() {
    if (typeof varPageProgressBar !== 'undefined' && varPageProgressBar) {
        Pace.start();
    }
}

function ajaxLoadSidebarCategoryTree() {
    let $sbct = $('.js-sidebar-category-tree');
    if ($sbct.length) {
        $.ajax({
            type: 'POST',
            url: $sbct.data('categorytree-controller'),
            data: {
                ajax: true
            },
            success: function (data) {
                $sbct.html(data);
                sidebarCategoryTreeConfig();
            },
            error: function (err) {
                console.log(err);
            }
        });

        var sidebarCategoryTreeConfig = function () {
            let $subcats = $('.js-sidebar-categories');
            if ($subcats.length) {
                $subcats.find('.js-collapse-trigger').click(function (e) {
                    if (!$(this).hasClass('opened')) {
                        let $p = $(this).closest('.js-sidebar-categories, .js-sub-categories');
                        $p.find('.js-sub-categories.expanded').slideUp().removeClass('expanded');
                        $p.find('.js-collapse-trigger.opened').removeClass('opened').find('.add, .remove').toggle();
                    }
                    $(this).parent().find(' > .js-sub-categories').stop().slideToggle().toggleClass('expanded');
                    $(this).toggleClass('opened').find('.add, .remove').toggle();
                });
            }

            let currentCatID = $('.js-category-page').data('current-category-id');
            if (currentCatID !== 'undefined' && currentCatID !== '') {
                let $currentSBCatObj = $('.js-sidebar-categories [data-category-id=' + currentCatID + ']');

                $currentSBCatObj.addClass('current');
                $currentSBCatObj.parents('li').each(function () {
                    $(this).children('.js-sub-categories').addClass('expanded').show();
                    $(this).find(' > .js-collapse-trigger').addClass('opened');
                    $(this).find(' > .js-collapse-trigger .add').hide();
                    $(this).find(' > .js-collapse-trigger .remove').show();
                });
            }
        };
    }
}

function loadSidebarNavigation() {
    setTimeout(function () {
        ajaxLoadSidebarCategoryTree();
    }, 1200);
    $('#js-header-phone-sidebar').removeClass('js-hidden').html($('.js-header-phone-source').html());
    $('#js-account-sidebar').removeClass('js-hidden').html($('.js-account-source').html());
    $('#js-language-sidebar').removeClass('js-hidden').html($('.js-language-source').html()).find('.l-name').remove();
    if (typeof varSidebarCart !== 'undefined' && !varSidebarCart) {
        $('#js-left-currency-sidebar').removeClass('js-hidden').html($('.js-currency-source').html());
    }

    $('[data-close-st-menu]').on('click', function (e) {
        $('html').removeClass('st-menu-open st-effect-left st-effect-right');
    });
    $('[data-left-nav-trigger]').on('click', function (e) {
        $('html').addClass('st-effect-left st-menu-open');
        return false;
    });
}

function loadSidebarCart() {
    if (prestashop.page.page_name !== 'checkout' && prestashop.page.page_name !== 'cart') {
        if (typeof varSidebarCart !== 'undefined' && varSidebarCart) {
            $('#js-cart-sidebar').removeClass('js-hidden').html($('[data-shopping-cart-source]').html());
            $('[data-shopping-cart-source]').addClass('js-hidden');
            $.each($('#js-cart-sidebar input[name="product-sidebar-quantity-spin"]'), function (index, spinner) {
                $(spinner).makeTouchSpin();

                $(spinner).on('change', function () {
                    $(spinner).trigger('focusout');
                });
            });

            $('#js-currency-sidebar').removeClass('js-hidden').html($('.js-currency-source').html()).find('.c-sign').remove();

            $('[data-sidebar-cart-trigger]').on('click', function (e) {
                $('html').addClass('st-effect-right st-menu-open');
                return false;
            });
        }
    }
}

function handleCookieMessage() {
    var $cookieMsg = $('.js-cookieMessage');
    if ($cookieMsg.length) {
        setTimeout(function () {
            $cookieMsg.cookieBar({
                closeButton: '.js-cookieCloseButton',
                path: prestashop.urls.base_url.substring(prestashop.urls.shop_domain_url.length)
            });
        }, 2000);
    }
}

function lazyItemMobileSliderScroll() {
    $('.js-items-mobile-slider').each(function () {
        $(this).on('scroll', function () {
            if ($(this).scrollLeft()) {
                $('img.js-lazy', $(this)).trigger('appear');
            }
        });
    });
}

loadPageWithProcessBar();

$(window).load(function () {
    handleCookieMessage();
    $('img.js-lazy').lazyload({
        failure_limit: 9999,
        load: function (el, s) {
            $(this).removeClass('js-lazy');
        }
    });
    stickyHeader();
    scrollToTopButton();
    loadSidebarNavigation();
    loadSidebarCart();
    lazyItemMobileSliderScroll();
});

/***/ }),

/***/ "./js/aone/_update-styles.js":
/*!***********************************!*\
  !*** ./js/aone/_update-styles.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function addTooltip() {
    $('body:not(.touch-screen) [data-toggle="tooltip"]').tooltip({
        position: { my: "center bottom-8", at: "center top" },
        hide: false,
        show: false
    });
}

function updateCustomerDropdownMenu() {
    var $otherLinks = $('.js-otherCustomerDropdownLinks');
    if ($otherLinks.length) {
        $('.js-displayCustomerAccount > a').each(function () {
            $(this).removeAttr('id').removeAttr('class').addClass('dropdown-item');
            var $span = $(this).find('span'),
                $i = $span.find('i');
            $span.removeAttr('class');
            $(this).remove('i');
            $(this).append($i);

            var $newThis = $(this).wrap('<li></li>').parent();
            $newThis.insertBefore($otherLinks);
        });
    }
}

function expandPSCategoryTree() {
    var currentCatID = $('.js-category-page').data('current-category-id');

    if (currentCatID !== 'undefined' && currentCatID !== '') {
        var $currentCatObj = $('.js-category-tree [data-category-id=' + currentCatID + ']');

        $currentCatObj.addClass('current');
        $currentCatObj.parents('li').each(function () {
            $(this).children('[data-toggle="collapse"]').attr('aria-expanded', 'true');
            $(this).children('.category-sub-menu.collapse').addClass('show');
        });
    }
}

function categoryDescriptionExpand() {
    var $catDesc = $('.js-expand-description');
    if ($catDesc.length) {
        let maxHeight = $('.descSmall', $catDesc).height(),
            realHeight = $('.descFull', $catDesc).height();
        if (realHeight > maxHeight) {
            $catDesc.addClass('descCollapsed');
            $('.descSmall', $catDesc).css('max-height', 'none').height(maxHeight);

            $('.descToggle.expand a', $catDesc).click(function () {
                $catDesc.removeClass('descCollapsed').addClass('descExpanded');
                $('.descSmall', $catDesc).height(realHeight + 30);
                return false;
            });
            $('.descToggle.collapse a', $catDesc).click(function () {
                $catDesc.addClass('descCollapsed').removeClass('descExpanded');
                $('.descSmall', $catDesc).height(maxHeight);
                return false;
            });
        }
    }
}

function mobileMenuControl() {
    $('#mobile-menu-icon').on('click', function () {
        $('#dropdown-mobile-menu').stop().slideToggle();
        $('html').toggleClass('js-overflow-hidden');
    });
}

function typoImageSlider() {
    $('.js-typoImageSlider').makeFlexScrollBox();
}

$(window).load(function () {
    addTooltip();
    updateCustomerDropdownMenu();
    expandPSCategoryTree();
    categoryDescriptionExpand();
    typoImageSlider();
});

/***/ }),

/***/ "./js/aone/aone-module.js":
/*!********************************!*\
  !*** ./js/aone/aone-module.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aonebrandlogo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_aonebrandlogo.js */ "./js/aone/_aonebrandlogo.js");
/* harmony import */ var _aonebrandlogo_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aonebrandlogo_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _aonecolorsfonts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_aonecolorsfonts.js */ "./js/aone/_aonecolorsfonts.js");
/* harmony import */ var _aonecolorsfonts_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_aonecolorsfonts_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _aonecolumnblocks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_aonecolumnblocks.js */ "./js/aone/_aonecolumnblocks.js");
/* harmony import */ var _aonecolumnblocks_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_aonecolumnblocks_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _aonefeaturedcategories_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_aonefeaturedcategories.js */ "./js/aone/_aonefeaturedcategories.js");
/* harmony import */ var _aonefeaturedcategories_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_aonefeaturedcategories_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _aonehomeblocks_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_aonehomeblocks.js */ "./js/aone/_aonehomeblocks.js");
/* harmony import */ var _aonehomeblocks_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_aonehomeblocks_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _aonemegamenu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_aonemegamenu.js */ "./js/aone/_aonemegamenu.js");
/* harmony import */ var _aonemegamenu_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_aonemegamenu_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _aonepopupnewsletter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_aonepopupnewsletter.js */ "./js/aone/_aonepopupnewsletter.js");
/* harmony import */ var _aonepopupnewsletter_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_aonepopupnewsletter_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _aoneproductadditional_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_aoneproductadditional.js */ "./js/aone/_aoneproductadditional.js");
/* harmony import */ var _aoneproductadditional_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_aoneproductadditional_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _aoneslideshow_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_aoneslideshow.js */ "./js/aone/_aoneslideshow.js");
/* harmony import */ var _aoneslideshow_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_aoneslideshow_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _aonethememanager_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_aonethememanager.js */ "./js/aone/_aonethememanager.js");
/* harmony import */ var _aonethememanager_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_aonethememanager_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _update_styles_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_update-styles.js */ "./js/aone/_update-styles.js");
/* harmony import */ var _update_styles_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_update_styles_js__WEBPACK_IMPORTED_MODULE_11__);











//import './_aonecategoryslider.js';



/***/ }),

/***/ "./js/aone/shared-functions.js":
/*!*************************************!*\
  !*** ./js/aone/shared-functions.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  $.fn.makeProductScrollBox = function () {
    if (this.length && !this.hasClass('js-enabled-scrollbox')) {
      var $scrollbox = this.find('.product-list'),
          $items = $scrollbox.find('.product-miniature'),
          $arrows = this.find('.scroll-box-arrows'),
          list_element = '.product-list-wrapper',
          list_item_element = '.product-miniature',
          auto_play = $scrollbox.data('autoscroll') || false;

      if ($scrollbox.width() + 20 < $items.length * $items.outerWidth()) {
        this.addClass('js-enabled-scrollbox');

        $scrollbox.scrollbox({
          direction: 'h',
          distance: 'auto',
          autoPlay: auto_play,
          infiniteLoop: false,
          onMouseOverPause: auto_play,
          listElement: list_element,
          listItemElement: list_item_element
        });
        $arrows.addClass('scroll');
        $arrows.find('.left').click(function () {
          $scrollbox.trigger('backward');
        });
        $arrows.find('.right').click(function () {
          $scrollbox.trigger('forward');
        });
        if ('ontouchstart' in document.documentElement) {
          $scrollbox.on('swipeleft', function () {
            $scrollbox.trigger('forward');
          });
          $scrollbox.on('swiperight', function () {
            $scrollbox.trigger('backward');
          });
        }
      }
    }
  };

  $.fn.makeFlexScrollBox = function (options) {
    var settings = $.extend({
      list: 'ul',
      items: 'li',
      arrows: '.scroll-box-arrows',
      autoPlay: false,
      onMouseOverPause: false,
      forceMakeScroll: false
    }, options);

    var $scrollbox = this,
        $items = $scrollbox.find(settings.items),
        $arrows = $scrollbox.next(settings.arrows);

    if ($scrollbox.width() + 20 < $items.length * $items.outerWidth() || settings.forceMakeScroll) {
      $scrollbox.scrollbox({
        direction: 'h',
        distance: 'auto',
        autoPlay: settings.autoPlay,
        onMouseOverPause: settings.onMouseOverPause,
        infiniteLoop: false,
        listElement: settings.list,
        listItemElement: settings.items
      });
      $arrows.addClass('scroll');
      $arrows.find('.left').click(function () {
        $scrollbox.trigger('backward');
      });
      $arrows.find('.right').click(function () {
        $scrollbox.trigger('forward');
      });
      if ('ontouchstart' in document.documentElement) {
        $scrollbox.on('swipeleft', function () {
          $scrollbox.trigger('forward');
        });
        $scrollbox.on('swiperight', function () {
          $scrollbox.trigger('backward');
        });
      }
    }
  };

  $.fn.runCountdown = function (options) {
    var settings = $.extend({
      specificPricesTo: false,
      getFinalDateController: false
    }, options);
    var $countdown_wrapper = this;

    if (settings.specificPricesTo && settings.getFinalDateController) {
      $.ajax({
        type: 'POST',
        url: settings.getFinalDateController,
        data: {
          'ajax': true,
          'specific-prices-to': settings.specificPricesTo
        },
        success: function (result) {
          $countdown_wrapper.html(result);
          setTimeout(function () {
            $countdown_wrapper.slideDown();
          }, 500);

          let $new_cd = $countdown_wrapper.find('[data-final-date]');
          $new_cd.countdown($new_cd.data('final-date')).on('update.countdown', function (event) {
            if (event.offset.totalDays <= 0) {
              $new_cd.html(event.strftime($new_cd.data('short-format')));
            } else {
              $new_cd.html(event.strftime($new_cd.data('format')));
            }
          }).on('finish.countdown', function () {
            $new_cd.parent().addClass('expired').html($new_cd.data('expired'));
          });
        },
        error: function (err) {
          console.log(err);
        }
      });
    }
  };
  $.fn.updateCountdown = function (options) {
    var settings = $.extend({
      newSpecificPricesTo: '',
      currentSpecificPricesTo: '',
      getFinalDateController: false
    }, options);
    var $product_countdown = this;
    $product_countdown.attr('data-specific-prices-to', settings.newSpecificPricesTo);

    if (settings.newSpecificPricesTo != '' && settings.getFinalDateController) {
      if (settings.currentSpecificPricesTo != settings.newSpecificPricesTo) {
        if (settings.currentSpecificPricesTo != '') {
          $product_countdown.addClass('updating-timer');
        }
        $.ajax({
          type: 'POST',
          url: settings.getFinalDateController,
          data: {
            'ajax': true,
            'specific-prices-to': settings.newSpecificPricesTo
          },
          success: function (result) {
            $product_countdown.html(result);
            setTimeout(function () {
              if (settings.currentSpecificPricesTo != '') {
                $product_countdown.removeClass('updating-timer');
              } else {
                $product_countdown.slideDown();
              }
            }, 500);

            let $new_cd = $product_countdown.find('[data-final-date]');
            $new_cd.countdown($new_cd.data('final-date')).on('update.countdown', function (event) {
              if (event.offset.totalDays <= 0) {
                $new_cd.html(event.strftime($new_cd.data('short-format')));
              } else {
                $new_cd.html(event.strftime($new_cd.data('format')));
              }
            }).on('finish.countdown', function () {
              $new_cd.parent().addClass('expired').html($new_cd.data('expired'));
            });
          },
          error: function (err) {
            console.log(err);
          }
        });
      }
    } else {
      $product_countdown.slideUp().html('');
    }
  };

  $.fn.makeTouchSpin = function () {
    this.TouchSpin({
      verticalbuttons: false,
      verticalupclass: 'material-icons touchspin-up',
      verticaldownclass: 'material-icons touchspin-down',
      buttondown_class: 'btn btn-touchspin js-touchspin',
      buttonup_class: 'btn btn-touchspin js-touchspin',
      buttondown_txt: '<i class="material-icons">remove</i>',
      buttonup_txt: '<i class="material-icons">add</i>',
      min: parseInt(this.attr('min'), 10),
      max: 1000000
    });
  };
})(jQuery);

/***/ }),

/***/ "./js/cart.js":
/*!********************!*\
  !*** ./js/cart.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prestashop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prestashop */ "prestashop");
/* harmony import */ var prestashop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prestashop__WEBPACK_IMPORTED_MODULE_1__);



prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.cart = prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.cart || {};

prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.cart.active_inputs = null;

let spinnerSelector = 'input[name="product-quantity-spin"]';
let hasError = false;
let isUpdateOperation = false;
let errorMsg = '';

/**
 * Attach Bootstrap TouchSpin event handlers
 */
function createSpin() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(jquery__WEBPACK_IMPORTED_MODULE_0___default()(spinnerSelector), function (index, spinner) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(spinner).makeTouchSpin();
  });

  CheckUpdateQuantityOperations.switchErrorStat();
}

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  const productLineInCartSelector = '.js-cart-line-product-quantity';
  const promises = [];
  let disablefocusout = false;

  prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.on('updateCart', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.quickview').modal('hide');
  });

  prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.on('updatedCart', function () {
    createSpin();
  });

  createSpin();

  const $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');

  function isTouchSpin(namespace) {
    return namespace === 'on.startupspin' || namespace === 'on.startdownspin';
  }

  function shouldIncreaseProductQuantity(namespace) {
    return namespace === 'on.startupspin';
  }

  function findCartLineProductQuantityInput($target) {
    var $input = $target.parents('.bootstrap-touchspin').find(productLineInCartSelector);

    if ($input.is(':focus')) {
      return null;
    }

    return $input;
  }

  function camelize(subject) {
    let actionTypeParts = subject.split('-');
    let i;
    let part;
    let camelizedSubject = '';

    for (i = 0; i < actionTypeParts.length; i++) {
      part = actionTypeParts[i];

      if (0 !== i) {
        part = part.substring(0, 1).toUpperCase() + part.substring(1);
      }

      camelizedSubject = camelizedSubject + part;
    }

    return camelizedSubject;
  }

  function parseCartAction($target, namespace) {
    if (!isTouchSpin(namespace)) {
      return {
        url: $target.attr('href'),
        type: camelize($target.data('link-action'))
      };
    }

    let $input = findCartLineProductQuantityInput($target);
    if (!$input) {
      return;
    }

    let cartAction = {};
    if (shouldIncreaseProductQuantity(namespace)) {
      cartAction = {
        url: $input.data('up-url'),
        type: 'increaseProductQuantity'
      };
    } else {
      cartAction = {
        url: $input.data('down-url'),
        type: 'decreaseProductQuantity'
      };
    }

    return cartAction;
  }

  let abortPreviousRequests = function () {
    var promise;
    while (promises.length > 0) {
      promise = promises.pop();
      promise.abort();
    }
  };

  var getTouchSpinInput = function ($button) {
    return jquery__WEBPACK_IMPORTED_MODULE_0___default()($button.parents('.bootstrap-touchspin').find('input'));
  };

  var handleCartAction = function (event) {
    event.preventDefault();

    let $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget);
    let dataset = event.currentTarget.dataset;

    let cartAction = parseCartAction($target, event.namespace);
    let requestData = {
      ajax: '1',
      action: 'update'
    };

    if (typeof cartAction === 'undefined') {
      return;
    }

    abortPreviousRequests();

    if (cartAction.type == 'removeVoucher') {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-cart-update-voucher').fadeIn();
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-cart-update-quantity').fadeIn();
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
      url: cartAction.url,
      method: 'POST',
      data: requestData,
      dataType: 'json',
      beforeSend: function (jqXHR) {
        promises.push(jqXHR);
      }
    }).then(function (resp) {
      CheckUpdateQuantityOperations.checkUpdateOpertation(resp);
      var $quantityInput = getTouchSpinInput($target);
      $quantityInput.val(resp.quantity);

      if (resp.hasError) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-cart-update-voucher, .js-cart-update-quantity').fadeOut();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-modal-message-text').text(resp.errors[0]);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-modal-message').modal('show');
      } else {
        // Refresh cart preview
        prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.emit('updateCart', {
          reason: dataset
        });
      }
    }).fail(function (resp) {
      prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.emit('handleError', {
        eventType: 'updateProductInCart',
        resp: resp,
        cartAction: cartAction.type
      });
    });
  };

  $body.on('click', '[data-link-action="delete-from-cart"], [data-link-action="remove-voucher"]', handleCartAction);

  $body.on('touchspin.on.startdownspin', spinnerSelector, handleCartAction);
  $body.on('touchspin.on.startupspin', spinnerSelector, handleCartAction);

  function sendUpdateQuantityInCartRequest(updateQuantityInCartUrl, requestData, $target) {
    abortPreviousRequests();

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-cart-update-quantity').fadeIn();
    return jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
      url: updateQuantityInCartUrl,
      method: 'POST',
      data: requestData,
      dataType: 'json',
      beforeSend: function (jqXHR) {
        promises.push(jqXHR);
      }
    }).then(function (resp) {
      CheckUpdateQuantityOperations.checkUpdateOpertation(resp);
      $target.val(resp.quantity);

      if (resp.hasError) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-cart-update-voucher, .js-cart-update-quantity').fadeOut();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-modal-message-text').text(resp.errors[0]);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-modal-message').modal('show');
      } else {
        var dataset;
        if ($target && $target.dataset) {
          dataset = $target.dataset;
        } else {
          dataset = resp;
        }
        // Refresh cart preview
        prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.emit('updateCart', {
          reason: dataset
        });
      }
    }).fail(function (resp) {
      prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.emit('handleError', { eventType: 'updateProductQuantityInCart', resp: resp });
    });
  }

  function getRequestData(quantity) {
    return {
      ajax: '1',
      qty: Math.abs(quantity),
      action: 'update',
      op: getQuantityChangeType(quantity)
    };
  }

  function getQuantityChangeType($quantity) {
    return $quantity > 0 ? 'up' : 'down';
  }

  function updateProductQuantityInCart(event) {
    const $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget);
    const updateQuantityInCartUrl = $target.data('update-url');
    const baseValue = $target.attr('value');

    // There should be a valid product quantity in cart
    const targetValue = $target.val();
    if (targetValue != parseInt(targetValue) || targetValue < 0 || isNaN(targetValue)) {
      $target.val(baseValue);

      return;
    }

    // There should be a new product quantity in cart
    const qty = targetValue - baseValue;
    if (qty == 0) {
      return;
    }

    $target.attr('value', targetValue);

    sendUpdateQuantityInCartRequest(updateQuantityInCartUrl, getRequestData(qty), $target);
  }

  $body.on('focusout', productLineInCartSelector, function (event) {
    if (!disablefocusout) {
      updateProductQuantityInCart(event);
    } else {
      disablefocusout = false;
    }
  });

  $body.on('keyup', productLineInCartSelector, function (event) {
    if (event.keyCode == 13) {
      disablefocusout = true;
      updateProductQuantityInCart(event);
    }
  });

  $body.on('click', '.js-discount .code', function (event) {
    event.stopPropagation();

    const $code = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget);
    const $discountInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name=discount_name]');

    $discountInput.val($code.text());

    return false;
  });

  // overwrite add-voucher
  var hanleAddVoucher = function (event) {
    event.preventDefault();

    var $addVoucherForm = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget);
    var getCartViewUrl = $addVoucherForm.attr('action');

    if (0 === $addVoucherForm.find('[name=action]').length) {
      $addVoucherForm.append(jquery__WEBPACK_IMPORTED_MODULE_0___default()('<input>', { 'type': 'hidden', 'name': 'ajax', "value": 1 }));
    }
    if (0 === $addVoucherForm.find('[name=action]').length) {
      $addVoucherForm.append(jquery__WEBPACK_IMPORTED_MODULE_0___default()('<input>', { 'type': 'hidden', 'name': 'action', "value": "update" }));
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-cart-update-voucher').fadeIn();
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
      url: getCartViewUrl,
      method: 'POST',
      data: $addVoucherForm.serialize(),
      dataType: 'json'
    }).then(function (resp) {
      if (resp.hasError) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-cart-update-voucher, .js-cart-update-quantity').fadeOut();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-error').show().find('.js-error-text').text(resp.errors[0]);
      } else {
        // Refresh cart preview
        prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.emit('updateCart', { reason: event.target.dataset, resp: resp });
      }
    }).fail(function (resp) {
      prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.emit('handleError', { eventType: 'updateCart', resp: resp });
    });
  };

  if (typeof varCustomActionAddVoucher !== 'undefined' && varCustomActionAddVoucher) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').off('submit', '[data-link-action="add-voucher"]');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('submit', '[data-link-action="add-voucher"]', hanleAddVoucher);
  }
});

const CheckUpdateQuantityOperations = {
  'switchErrorStat': function () {
    const $checkoutBtn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.checkout a');
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()("#notifications article.alert-danger").length || '' !== errorMsg && !hasError) {
      $checkoutBtn.addClass('disabled');
    }

    if ('' !== errorMsg) {
      let strError = ' <article class="alert alert-danger" role="alert" data-alert="danger"><ul><li>' + errorMsg + '</li></ul></article>';
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#notifications .container').html(strError);
      errorMsg = '';
      isUpdateOperation = false;
      if (hasError) {
        $checkoutBtn.removeClass('disabled');
      }
    } else if (!hasError && isUpdateOperation) {
      hasError = false;
      isUpdateOperation = false;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#notifications .container').html('');
      $checkoutBtn.removeClass('disabled');
    }
  },
  'checkUpdateOpertation': function (resp) {
    hasError = resp.hasOwnProperty('hasError');
    let errors = resp.errors || "";

    if (errors instanceof Array) {
      errorMsg = errors.join(" ");
    } else {
      errorMsg = errors;
    }
    isUpdateOperation = true;
  }
};

/***/ }),

/***/ "./js/checkout.js":
/*!************************!*\
  !*** ./js/checkout.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prestashop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prestashop */ "prestashop");
/* harmony import */ var prestashop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prestashop__WEBPACK_IMPORTED_MODULE_1__);



function setUpCheckout() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-terms a').on('click', function (event) {
    event.preventDefault();
    var url = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).attr('href');
    if (url) {
      // TODO: Handle request if no pretty URL
      url += '?content_only=1';
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, function (content) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-modal-content').html(jquery__WEBPACK_IMPORTED_MODULE_0___default()(content).find('.page-cms').contents());
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#modal').modal('show');
      }).fail(function (resp) {
        prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.emit('handleError', { eventType: 'clickTerms', resp: resp });
      });
    }
  });

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-gift-checkbox').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#gift').collapse('toggle');
  });
}

function initPersonalForm() {
  let guest_form = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#checkout-guest-form'),
      login_form = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#checkout-login-form');

  if (guest_form.length && (guest_form.find('input[name="email"]').val() != '' || guest_form.has('.help-block').length)) {
    login_form.hide();
    guest_form.show();
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', '.js-switch-personal-form', function (event) {
    let form_object = jquery__WEBPACK_IMPORTED_MODULE_0___default()(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('href'));
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.personal-form').fadeOut(400, function () {
      form_object.fadeIn();
    });

    return false;
  });
}

function scrollToCurrentStep() {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').hasClass('a-mobile-device')) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').animate({
      scrollTop: jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-current-step').offset().top - 55
    }, 'slow');
  }
}

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('body#checkout').length === 1) {
    setUpCheckout();
    initPersonalForm();
    scrollToCurrentStep();
  }

  prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.on('updatedDeliveryForm', function (params) {
    if (typeof params.deliveryOption === 'undefined' || 0 === params.deliveryOption.length) {
      return;
    }
    // Hide all carrier extra content ...
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.carrier-extra-content').hide();
    // and show the one related to the selected carrier
    params.deliveryOption.next('.carrier-extra-content').show();
  });
});

/***/ }),

/***/ "./js/components/block-cart.js":
/*!*************************************!*\
  !*** ./js/components/block-cart.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prestashop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prestashop */ "prestashop");
/* harmony import */ var prestashop__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prestashop__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);



prestashop__WEBPACK_IMPORTED_MODULE_0___default.a.blockcart = prestashop__WEBPACK_IMPORTED_MODULE_0___default.a.blockcart || {};

prestashop__WEBPACK_IMPORTED_MODULE_0___default.a.blockcart.showModal = function (html) {
  function getBlockCartModal() {
    return jquery__WEBPACK_IMPORTED_MODULE_1___default()('#blockcart-modal');
  }

  let $blockCartModal = getBlockCartModal();
  if ($blockCartModal.length) {
    $blockCartModal.remove();
  }

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('body').append(html);

  $blockCartModal = getBlockCartModal();
  $blockCartModal.modal('show');

  $blockCartModal.on('hidden.bs.modal', function (event) {
    if (prestashop__WEBPACK_IMPORTED_MODULE_0___default.a.page.page_name == 'product') {
      prestashop__WEBPACK_IMPORTED_MODULE_0___default.a.emit('updateProduct', {});
    }
  });
};

/***/ }),

/***/ "./js/components/drop-down.js":
/*!************************************!*\
  !*** ./js/components/drop-down.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function makeJSDropdown() {
  var $dropDownEl = $('.js-dropdown');

  $dropDownEl.on('show.bs.dropdown', function (e, el) {
    $(e.target).find('.dropdown-menu').first().stop(true, true).slideDown();
  });

  $dropDownEl.on('hide.bs.dropdown', function (e, el) {
    $(e.target).find('.dropdown-menu').first().stop(true, true).slideUp();
  });

  $dropDownEl.find('select.link').each(function (idx, el) {
    $(el).on('change', function (event) {
      window.location = $(this).val();
    });
  });
}

$(document).ready(function () {
  if (prestashop.language.is_rtl == '1') {
    $('.dropdown-menu').addClass('dropdown-menu-right');
  }
  makeJSDropdown();
});

/***/ }),

/***/ "./js/components/form.js":
/*!*******************************!*\
  !*** ./js/components/form.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function parentFocus() {
  $('.js-child-focus').focus(function () {
    $(this).closest('.js-parent-focus').addClass('focus');
  });
  $('.js-child-focus').focusout(function () {
    $(this).closest('.js-parent-focus').removeClass('focus');
  });
}

function togglePasswordVisibility() {
  $('button[data-action="show-password"]').on('click', function () {
    var elm = $(this).closest('.input-group').children('input.js-visible-password');
    if (elm.attr('type') === 'password') {
      elm.attr('type', 'text');
      $(this).text($(this).data('textHide'));
    } else {
      elm.attr('type', 'password');
      $(this).text($(this).data('textShow'));
    }
  });
}

function makeJSForm() {
  togglePasswordVisibility();
}

$(document).ready(function () {
  makeJSForm();
});

/***/ }),

/***/ "./js/components/ps-modules.js":
/*!*************************************!*\
  !*** ./js/components/ps-modules.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  var rtl = false;
  if (prestashop.language.is_rtl == '1') {
    rtl = true;
  }
  productBottomSlider(rtl);
  productMobileBottomSliderScroll();
});

function productMobileBottomSliderScroll() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-product-page-mobile-slider').each(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).on('scroll', function () {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).scrollLeft()) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('img.js-lazy', jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)).trigger('appear');
      }
    });
  });
}

function productBottomSlider(rtl) {
  var obj = '.js-crossselling-slider, .js-viewedproduct-slider, .js-accessories-slider, .js-category-products-slider, .js-featuredproducts-slider';
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(obj).slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    adaptiveHeight: true,
    infinite: true,
    speed: 1000,
    autoplay: false,
    dots: false,
    arrows: true,
    draggable: false,
    rtl: rtl,
    responsive: [{
      breakpoint: 1220,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }]
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(obj).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(obj).find('.slick-active img.js-lazy').trigger('appear');
  });
}

/***/ }),

/***/ "./js/customer.js":
/*!************************!*\
  !*** ./js/customer.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


function initRmaItemSelector() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#order-return-form table thead input[type=checkbox]').on('click', function () {
    var checked = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).prop('checked');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#order-return-form table tbody input[type=checkbox]').each(function (_, checkbox) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(checkbox).prop('checked', checked);
    });
  });
}

function setupCustomerScripts() {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('body#order-detail')) {
    initRmaItemSelector();
  }
}

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(setupCustomerScripts);

/***/ }),

/***/ "./js/lib/bootstrap-filestyle.min.js":
/*!*******************************************!*\
  !*** ./js/lib/bootstrap-filestyle.min.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  var nextId = 0;var Filestyle = function (element, options) {
    this.options = options;this.$elementFilestyle = [];this.$element = $(element);
  };Filestyle.prototype = { clear: function () {
      this.$element.val("");this.$elementFilestyle.find(":text").val("");this.$elementFilestyle.find(".badge").remove();
    }, destroy: function () {
      this.$element.removeAttr("style").removeData("filestyle");this.$elementFilestyle.remove();
    }, disabled: function (value) {
      if (value === true) {
        if (!this.options.disabled) {
          this.$element.attr("disabled", "true");this.$elementFilestyle.find("label").attr("disabled", "true");this.options.disabled = true;
        }
      } else {
        if (value === false) {
          if (this.options.disabled) {
            this.$element.removeAttr("disabled");this.$elementFilestyle.find("label").removeAttr("disabled");this.options.disabled = false;
          }
        } else {
          return this.options.disabled;
        }
      }
    }, buttonBefore: function (value) {
      if (value === true) {
        if (!this.options.buttonBefore) {
          this.options.buttonBefore = true;if (this.options.input) {
            this.$elementFilestyle.remove();this.constructor();this.pushNameFiles();
          }
        }
      } else {
        if (value === false) {
          if (this.options.buttonBefore) {
            this.options.buttonBefore = false;if (this.options.input) {
              this.$elementFilestyle.remove();this.constructor();this.pushNameFiles();
            }
          }
        } else {
          return this.options.buttonBefore;
        }
      }
    }, icon: function (value) {
      if (value === true) {
        if (!this.options.icon) {
          this.options.icon = true;this.$elementFilestyle.find("label").prepend(this.htmlIcon());
        }
      } else {
        if (value === false) {
          if (this.options.icon) {
            this.options.icon = false;this.$elementFilestyle.find(".icon-span-filestyle").remove();
          }
        } else {
          return this.options.icon;
        }
      }
    }, input: function (value) {
      if (value === true) {
        if (!this.options.input) {
          this.options.input = true;if (this.options.buttonBefore) {
            this.$elementFilestyle.append(this.htmlInput());
          } else {
            this.$elementFilestyle.prepend(this.htmlInput());
          }this.$elementFilestyle.find(".badge").remove();this.pushNameFiles();this.$elementFilestyle.find(".group-span-filestyle").addClass("input-group-btn");
        }
      } else {
        if (value === false) {
          if (this.options.input) {
            this.options.input = false;this.$elementFilestyle.find(":text").remove();var files = this.pushNameFiles();if (files.length > 0 && this.options.badge) {
              this.$elementFilestyle.find("label").append(' <span class="badge">' + files.length + "</span>");
            }this.$elementFilestyle.find(".group-span-filestyle").removeClass("input-group-btn");
          }
        } else {
          return this.options.input;
        }
      }
    }, size: function (value) {
      if (value !== undefined) {
        var btn = this.$elementFilestyle.find("label"),
            input = this.$elementFilestyle.find("input");btn.removeClass("btn-lg btn-sm");input.removeClass("input-lg input-sm");if (value != "nr") {
          btn.addClass("btn-" + value);input.addClass("input-" + value);
        }
      } else {
        return this.options.size;
      }
    }, placeholder: function (value) {
      if (value !== undefined) {
        this.options.placeholder = value;this.$elementFilestyle.find("input").attr("placeholder", value);
      } else {
        return this.options.placeholder;
      }
    }, buttonText: function (value) {
      if (value !== undefined) {
        this.options.buttonText = value;this.$elementFilestyle.find("label .buttonText").html(this.options.buttonText);
      } else {
        return this.options.buttonText;
      }
    }, buttonName: function (value) {
      if (value !== undefined) {
        this.options.buttonName = value;this.$elementFilestyle.find("label").attr({ "class": "btn " + this.options.buttonName });
      } else {
        return this.options.buttonName;
      }
    }, iconName: function (value) {
      if (value !== undefined) {
        this.$elementFilestyle.find(".icon-span-filestyle").attr({ "class": "icon-span-filestyle " + this.options.iconName });
      } else {
        return this.options.iconName;
      }
    }, htmlIcon: function () {
      if (this.options.icon) {
        return '<span class="icon-span-filestyle ' + this.options.iconName + '"></span> ';
      } else {
        return "";
      }
    }, htmlInput: function () {
      if (this.options.input) {
        return '<input type="text" class="form-control ' + (this.options.size == "nr" ? "" : "input-" + this.options.size) + '" placeholder="' + this.options.placeholder + '" disabled> ';
      } else {
        return "";
      }
    }, pushNameFiles: function () {
      var content = "",
          files = [];if (this.$element[0].files === undefined) {
        files[0] = { name: this.$element[0] && this.$element[0].value };
      } else {
        files = this.$element[0].files;
      }for (var i = 0; i < files.length; i++) {
        content += files[i].name.split("\\").pop() + ", ";
      }if (content !== "") {
        this.$elementFilestyle.find(":text").val(content.replace(/\, $/g, ""));
      } else {
        this.$elementFilestyle.find(":text").val("");
      }return files;
    }, constructor: function () {
      var _self = this,
          html = "",
          id = _self.$element.attr("id"),
          files = [],
          btn = "",
          $label;if (id === "" || !id) {
        id = "filestyle-" + nextId;_self.$element.attr({ id: id });nextId++;
      }btn = '<span class="group-span-filestyle ' + (_self.options.input ? "input-group-btn" : "") + '"><label for="' + id + '" class="btn ' + _self.options.buttonName + " " + (_self.options.size == "nr" ? "" : "btn-" + _self.options.size) + '" ' + (_self.options.disabled ? 'disabled="true"' : "") + ">" + _self.htmlIcon() + '<span class="buttonText">' + _self.options.buttonText + "</span></label></span>";html = _self.options.buttonBefore ? btn + _self.htmlInput() : _self.htmlInput() + btn;_self.$elementFilestyle = $('<div class="bootstrap-filestyle input-group">' + html + "</div>");_self.$elementFilestyle.find(".group-span-filestyle").attr("tabindex", "0").keypress(function (e) {
        if (e.keyCode === 13 || e.charCode === 32) {
          _self.$elementFilestyle.find("label").click();return false;
        }
      });_self.$element.css({ position: "absolute", clip: "rect(0px 0px 0px 0px)" }).attr("tabindex", "-1").after(_self.$elementFilestyle);if (_self.options.disabled) {
        _self.$element.attr("disabled", "true");
      }_self.$element.change(function () {
        var files = _self.pushNameFiles();if (_self.options.input == false && _self.options.badge) {
          if (_self.$elementFilestyle.find(".badge").length == 0) {
            _self.$elementFilestyle.find("label").append(' <span class="badge">' + files.length + "</span>");
          } else {
            if (files.length == 0) {
              _self.$elementFilestyle.find(".badge").remove();
            } else {
              _self.$elementFilestyle.find(".badge").html(files.length);
            }
          }
        } else {
          _self.$elementFilestyle.find(".badge").remove();
        }
      });if (window.navigator.userAgent.search(/firefox/i) > -1) {
        _self.$elementFilestyle.find("label").click(function () {
          _self.$element.click();return false;
        });
      }
    } };var old = $.fn.filestyle;$.fn.filestyle = function (option, value) {
    var get = "",
        element = this.each(function () {
      if ($(this).attr("type") === "file") {
        var $this = $(this),
            data = $this.data("filestyle"),
            options = $.extend({}, $.fn.filestyle.defaults, option, typeof option === "object" && option);if (!data) {
          $this.data("filestyle", data = new Filestyle(this, options));data.constructor();
        }if (typeof option === "string") {
          get = data[option](value);
        }
      }
    });if (typeof get !== undefined) {
      return get;
    } else {
      return element;
    }
  };$.fn.filestyle.defaults = { buttonText: "Choose file", iconName: "glyphicon glyphicon-folder-open", buttonName: "btn-default", size: "nr", input: true, badge: true, icon: true, buttonBefore: false, disabled: false, placeholder: "" };$.fn.filestyle.noConflict = function () {
    $.fn.filestyle = old;return this;
  };$(function () {
    $(".filestyle").each(function () {
      var $this = $(this),
          options = { input: $this.attr("data-input") === "false" ? false : true, icon: $this.attr("data-icon") === "false" ? false : true, buttonBefore: $this.attr("data-buttonBefore") === "true" ? true : false, disabled: $this.attr("data-disabled") === "true" ? true : false, size: $this.attr("data-size"), buttonText: $this.attr("data-buttonText"), buttonName: $this.attr("data-buttonName"), iconName: $this.attr("data-iconName"), badge: $this.attr("data-badge") === "false" ? false : true, placeholder: $this.attr("data-placeholder") };$this.filestyle(options);
    });
  });
})(window.jQuery);

/***/ }),

/***/ "./js/lib/colpick.js":
/*!***************************!*\
  !*** ./js/lib/colpick.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
colpick Color Picker
Copyright 2013 Jose Vargas. Licensed under GPL license. Based on Stefan Petre's Color Picker www.eyecon.ro, dual licensed under the MIT and GPL licenses

For usage and examples: colpick.com/plugin
 */

(function ($) {
	var colpick = function () {
		var tpl = '<div class="colpick"><div class="colpick_color"><div class="colpick_color_overlay1"><div class="colpick_color_overlay2"><div class="colpick_selector_outer"><div class="colpick_selector_inner"></div></div></div></div></div><div class="colpick_hue"><div class="colpick_hue_arrs"><div class="colpick_hue_larr"></div><div class="colpick_hue_rarr"></div></div></div><div class="colpick_new_color"></div><div class="colpick_current_color"></div><div class="colpick_hex_field"><div class="colpick_field_letter">#</div><input type="text" maxlength="6" size="6" /></div><div class="colpick_rgb_r colpick_field"><div class="colpick_field_letter">R</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_rgb_g colpick_field"><div class="colpick_field_letter">G</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_rgb_b colpick_field"><div class="colpick_field_letter">B</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_hsb_h colpick_field"><div class="colpick_field_letter">H</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_hsb_s colpick_field"><div class="colpick_field_letter">S</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_hsb_b colpick_field"><div class="colpick_field_letter">B</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_submit"></div></div>',
		    defaults = {
			showEvent: 'click',
			onShow: function () {},
			onBeforeShow: function () {},
			onHide: function () {},
			onChange: function () {},
			onSubmit: function () {},
			colorScheme: 'light',
			color: '3289c7',
			livePreview: true,
			flat: false,
			layout: 'full',
			submit: 1,
			submitText: 'OK',
			height: 156
		},

		//Fill the inputs of the plugin
		fillRGBFields = function (hsb, cal) {
			var rgb = hsbToRgb(hsb);
			$(cal).data('colpick').fields.eq(1).val(rgb.r).end().eq(2).val(rgb.g).end().eq(3).val(rgb.b).end();
		},
		    fillHSBFields = function (hsb, cal) {
			$(cal).data('colpick').fields.eq(4).val(Math.round(hsb.h)).end().eq(5).val(Math.round(hsb.s)).end().eq(6).val(Math.round(hsb.b)).end();
		},
		    fillHexFields = function (hsb, cal) {
			$(cal).data('colpick').fields.eq(0).val(hsbToHex(hsb));
		},

		//Set the round selector position
		setSelector = function (hsb, cal) {
			$(cal).data('colpick').selector.css('backgroundColor', '#' + hsbToHex({ h: hsb.h, s: 100, b: 100 }));
			$(cal).data('colpick').selectorIndic.css({
				left: parseInt($(cal).data('colpick').height * hsb.s / 100, 10),
				top: parseInt($(cal).data('colpick').height * (100 - hsb.b) / 100, 10)
			});
		},

		//Set the hue selector position
		setHue = function (hsb, cal) {
			$(cal).data('colpick').hue.css('top', parseInt($(cal).data('colpick').height - $(cal).data('colpick').height * hsb.h / 360, 10));
		},

		//Set current and new colors
		setCurrentColor = function (hsb, cal) {
			$(cal).data('colpick').currentColor.css('backgroundColor', '#' + hsbToHex(hsb));
		},
		    setNewColor = function (hsb, cal) {
			$(cal).data('colpick').newColor.css('backgroundColor', '#' + hsbToHex(hsb));
		},

		//Called when the new color is changed
		change = function (ev) {
			var cal = $(this).parent().parent(),
			    col;
			if (this.parentNode.className.indexOf('_hex') > 0) {
				cal.data('colpick').color = col = hexToHsb(fixHex(this.value));
				fillRGBFields(col, cal.get(0));
				fillHSBFields(col, cal.get(0));
			} else if (this.parentNode.className.indexOf('_hsb') > 0) {
				cal.data('colpick').color = col = fixHSB({
					h: parseInt(cal.data('colpick').fields.eq(4).val(), 10),
					s: parseInt(cal.data('colpick').fields.eq(5).val(), 10),
					b: parseInt(cal.data('colpick').fields.eq(6).val(), 10)
				});
				fillRGBFields(col, cal.get(0));
				fillHexFields(col, cal.get(0));
			} else {
				cal.data('colpick').color = col = rgbToHsb(fixRGB({
					r: parseInt(cal.data('colpick').fields.eq(1).val(), 10),
					g: parseInt(cal.data('colpick').fields.eq(2).val(), 10),
					b: parseInt(cal.data('colpick').fields.eq(3).val(), 10)
				}));
				fillHexFields(col, cal.get(0));
				fillHSBFields(col, cal.get(0));
			}
			setSelector(col, cal.get(0));
			setHue(col, cal.get(0));
			setNewColor(col, cal.get(0));
			cal.data('colpick').onChange.apply(cal.parent(), [col, hsbToHex(col), hsbToRgb(col), cal.data('colpick').el, 0]);
		},

		//Change style on blur and on focus of inputs
		blur = function (ev) {
			$(this).parent().removeClass('colpick_focus');
		},
		    focus = function () {
			$(this).parent().parent().data('colpick').fields.parent().removeClass('colpick_focus');
			$(this).parent().addClass('colpick_focus');
		},

		//Increment/decrement arrows functions
		downIncrement = function (ev) {
			ev.preventDefault ? ev.preventDefault() : ev.returnValue = false;
			var field = $(this).parent().find('input').focus();
			var current = {
				el: $(this).parent().addClass('colpick_slider'),
				max: this.parentNode.className.indexOf('_hsb_h') > 0 ? 360 : this.parentNode.className.indexOf('_hsb') > 0 ? 100 : 255,
				y: ev.pageY,
				field: field,
				val: parseInt(field.val(), 10),
				preview: $(this).parent().parent().data('colpick').livePreview
			};
			$(document).mouseup(current, upIncrement);
			$(document).mousemove(current, moveIncrement);
		},
		    moveIncrement = function (ev) {
			ev.data.field.val(Math.max(0, Math.min(ev.data.max, parseInt(ev.data.val - ev.pageY + ev.data.y, 10))));
			if (ev.data.preview) {
				change.apply(ev.data.field.get(0), [true]);
			}
			return false;
		},
		    upIncrement = function (ev) {
			change.apply(ev.data.field.get(0), [true]);
			ev.data.el.removeClass('colpick_slider').find('input').focus();
			$(document).off('mouseup', upIncrement);
			$(document).off('mousemove', moveIncrement);
			return false;
		},

		//Hue slider functions
		downHue = function (ev) {
			ev.preventDefault ? ev.preventDefault() : ev.returnValue = false;
			var current = {
				cal: $(this).parent(),
				y: $(this).offset().top
			};
			$(document).on('mouseup touchend', current, upHue);
			$(document).on('mousemove touchmove', current, moveHue);

			var pageY = ev.type == 'touchstart' ? ev.originalEvent.changedTouches[0].pageY : ev.pageY;
			change.apply(current.cal.data('colpick').fields.eq(4).val(parseInt(360 * (current.cal.data('colpick').height - (pageY - current.y)) / current.cal.data('colpick').height, 10)).get(0), [current.cal.data('colpick').livePreview]);
			return false;
		},
		    moveHue = function (ev) {
			var pageY = ev.type == 'touchmove' ? ev.originalEvent.changedTouches[0].pageY : ev.pageY;
			change.apply(ev.data.cal.data('colpick').fields.eq(4).val(parseInt(360 * (ev.data.cal.data('colpick').height - Math.max(0, Math.min(ev.data.cal.data('colpick').height, pageY - ev.data.y))) / ev.data.cal.data('colpick').height, 10)).get(0), [ev.data.preview]);
			return false;
		},
		    upHue = function (ev) {
			fillRGBFields(ev.data.cal.data('colpick').color, ev.data.cal.get(0));
			fillHexFields(ev.data.cal.data('colpick').color, ev.data.cal.get(0));
			$(document).off('mouseup touchend', upHue);
			$(document).off('mousemove touchmove', moveHue);
			return false;
		},

		//Color selector functions
		downSelector = function (ev) {
			ev.preventDefault ? ev.preventDefault() : ev.returnValue = false;
			var current = {
				cal: $(this).parent(),
				pos: $(this).offset()
			};
			current.preview = current.cal.data('colpick').livePreview;

			$(document).on('mouseup touchend', current, upSelector);
			$(document).on('mousemove touchmove', current, moveSelector);

			var pageX = ev.pageX,
			    pageY = ev.pageY;
			if (ev.type == 'touchstart') {
				pageX = ev.originalEvent.changedTouches[0].pageX, pageY = ev.originalEvent.changedTouches[0].pageY;
			}

			change.apply(current.cal.data('colpick').fields.eq(6).val(parseInt(100 * (current.cal.data('colpick').height - (pageY - current.pos.top)) / current.cal.data('colpick').height, 10)).end().eq(5).val(parseInt(100 * (pageX - current.pos.left) / current.cal.data('colpick').height, 10)).get(0), [current.preview]);
			return false;
		},
		    moveSelector = function (ev) {
			var pageX = ev.pageX,
			    pageY = ev.pageY;
			if (ev.type == 'touchmove') {
				pageX = ev.originalEvent.changedTouches[0].pageX, pageY = ev.originalEvent.changedTouches[0].pageY;
			}

			change.apply(ev.data.cal.data('colpick').fields.eq(6).val(parseInt(100 * (ev.data.cal.data('colpick').height - Math.max(0, Math.min(ev.data.cal.data('colpick').height, pageY - ev.data.pos.top))) / ev.data.cal.data('colpick').height, 10)).end().eq(5).val(parseInt(100 * Math.max(0, Math.min(ev.data.cal.data('colpick').height, pageX - ev.data.pos.left)) / ev.data.cal.data('colpick').height, 10)).get(0), [ev.data.preview]);
			return false;
		},
		    upSelector = function (ev) {
			fillRGBFields(ev.data.cal.data('colpick').color, ev.data.cal.get(0));
			fillHexFields(ev.data.cal.data('colpick').color, ev.data.cal.get(0));
			$(document).off('mouseup touchend', upSelector);
			$(document).off('mousemove touchmove', moveSelector);
			return false;
		},

		//Submit button
		clickSubmit = function (ev) {
			var cal = $(this).parent();
			var col = cal.data('colpick').color;
			cal.data('colpick').origColor = col;
			setCurrentColor(col, cal.get(0));
			cal.data('colpick').onSubmit(col, hsbToHex(col), hsbToRgb(col), cal.data('colpick').el);
		},

		//Show/hide the color picker
		show = function (ev) {
			// Prevent the trigger of any direct parent
			ev.stopPropagation();
			var cal = $('#' + $(this).data('colpickid'));
			cal.data('colpick').onBeforeShow.apply(this, [cal.get(0)]);
			var pos = $(this).offset();
			var top = pos.top - $(window).scrollTop();
			var left = pos.left - 3;
			var viewPort = getViewport();
			var calW = cal.width();
			if (left + calW > viewPort.l + viewPort.w) {
				left -= calW;
			}
			cal.css({ left: left + 'px', top: top + 'px' });
			if (cal.data('colpick').onShow.apply(this, [cal.get(0)]) != false) {
				cal.show();
			}
			//Hide when user clicks outside
			$('html').mousedown({ cal: cal }, hide);
			cal.mousedown(function (ev) {
				ev.stopPropagation();
			});
		},
		    hide = function (ev) {
			if (ev.data.cal.data('colpick').onHide.apply(this, [ev.data.cal.get(0)]) != false) {
				ev.data.cal.hide();
			}
			$('html').off('mousedown', hide);
		},
		    getViewport = function () {
			var m = document.compatMode == 'CSS1Compat';
			return {
				l: window.pageXOffset || (m ? document.documentElement.scrollLeft : document.body.scrollLeft),
				w: window.innerWidth || (m ? document.documentElement.clientWidth : document.body.clientWidth)
			};
		},

		//Fix the values if the user enters a negative or high value
		fixHSB = function (hsb) {
			return {
				h: Math.min(360, Math.max(0, hsb.h)),
				s: Math.min(100, Math.max(0, hsb.s)),
				b: Math.min(100, Math.max(0, hsb.b))
			};
		},
		    fixRGB = function (rgb) {
			return {
				r: Math.min(255, Math.max(0, rgb.r)),
				g: Math.min(255, Math.max(0, rgb.g)),
				b: Math.min(255, Math.max(0, rgb.b))
			};
		},
		    fixHex = function (hex) {
			var len = 6 - hex.length;
			if (len > 0) {
				var o = [];
				for (var i = 0; i < len; i++) {
					o.push('0');
				}
				o.push(hex);
				hex = o.join('');
			}
			return hex;
		},
		    restoreOriginal = function () {
			var cal = $(this).parent();
			var col = cal.data('colpick').origColor;
			cal.data('colpick').color = col;
			fillRGBFields(col, cal.get(0));
			fillHexFields(col, cal.get(0));
			fillHSBFields(col, cal.get(0));
			setSelector(col, cal.get(0));
			setHue(col, cal.get(0));
			setNewColor(col, cal.get(0));
		};
		return {
			init: function (opt) {
				opt = $.extend({}, defaults, opt || {});
				//Set color
				if (typeof opt.color == 'string') {
					opt.color = hexToHsb(opt.color);
				} else if (opt.color.r != undefined && opt.color.g != undefined && opt.color.b != undefined) {
					opt.color = rgbToHsb(opt.color);
				} else if (opt.color.h != undefined && opt.color.s != undefined && opt.color.b != undefined) {
					opt.color = fixHSB(opt.color);
				} else {
					return this;
				}

				//For each selected DOM element
				return this.each(function () {
					//If the element does not have an ID
					if (!$(this).data('colpickid')) {
						var options = $.extend({}, opt);
						options.origColor = opt.color;
						//Generate and assign a random ID
						var id = 'collorpicker_' + parseInt(Math.random() * 1000);
						$(this).attr('data-colpickid', id);
						//Set the tpl's ID and get the HTML
						var cal = $(tpl).attr('id', id);
						//Add class according to layout
						cal.addClass('colpick_' + options.layout + (options.submit ? '' : ' colpick_' + options.layout + '_ns'));
						//Add class if the color scheme is not default
						if (options.colorScheme != 'light') {
							cal.addClass('colpick_' + options.colorScheme);
						}
						//Setup submit button
						cal.find('div.colpick_submit').html(options.submitText).click(clickSubmit);
						//Setup input fields
						options.fields = cal.find('input').change(change).blur(blur).focus(focus);
						cal.find('div.colpick_field_arrs').mousedown(downIncrement).end().find('div.colpick_current_color').click(restoreOriginal);
						//Setup hue selector
						options.selector = cal.find('div.colpick_color').on('mousedown touchstart', downSelector);
						options.selectorIndic = options.selector.find('div.colpick_selector_outer');
						//Store parts of the plugin
						options.el = this;
						options.hue = cal.find('div.colpick_hue_arrs');
						var huebar = options.hue.parent();
						//Paint the hue bar
						var UA = navigator.userAgent.toLowerCase();
						var isIE = navigator.appName === 'Microsoft Internet Explorer';
						var IEver = isIE ? parseFloat(UA.match(/msie ([0-9]{1,}[\.0-9]{0,})/)[1]) : 0;
						var ngIE = isIE && IEver < 10;
						var stops = ['#ff0000', '#ff0080', '#ff00ff', '#8000ff', '#0000ff', '#0080ff', '#00ffff', '#00ff80', '#00ff00', '#80ff00', '#ffff00', '#ff8000', '#ff0000'];
						if (ngIE) {
							var i, div;
							for (i = 0; i <= 11; i++) {
								div = $('<div></div>').attr('style', 'height:8.333333%; filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=' + stops[i] + ', endColorstr=' + stops[i + 1] + '); -ms-filter: "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=' + stops[i] + ', endColorstr=' + stops[i + 1] + ')";');
								huebar.append(div);
							}
						} else {
							var stopList = stops.join(',');
							huebar.attr('style', 'background:-webkit-linear-gradient(top,' + stopList + '); background: -o-linear-gradient(top,' + stopList + '); background: -ms-linear-gradient(top,' + stopList + '); background:-moz-linear-gradient(top,' + stopList + '); -webkit-linear-gradient(top,' + stopList + '); background:linear-gradient(to bottom,' + stopList + '); ');
						}
						cal.find('div.colpick_hue').on('mousedown touchstart', downHue);
						options.newColor = cal.find('div.colpick_new_color');
						options.currentColor = cal.find('div.colpick_current_color');
						//Store options and fill with default color
						cal.data('colpick', options);
						fillRGBFields(options.color, cal.get(0));
						fillHSBFields(options.color, cal.get(0));
						fillHexFields(options.color, cal.get(0));
						setHue(options.color, cal.get(0));
						setSelector(options.color, cal.get(0));
						setCurrentColor(options.color, cal.get(0));
						setNewColor(options.color, cal.get(0));
						//Append to body if flat=false, else show in place
						if (options.flat) {
							cal.appendTo(this).show();
							cal.css({
								position: 'relative',
								display: 'block'
							});
						} else {
							cal.appendTo(document.body);
							$(this).on(options.showEvent, show);
							cal.css({
								position: 'fixed'
							});
						}
					}
				});
			},
			//Shows the picker
			showPicker: function () {
				return this.each(function () {
					if ($(this).data('colpickid')) {
						show.apply(this);
					}
				});
			},
			//Hides the picker
			hidePicker: function () {
				return this.each(function () {
					if ($(this).data('colpickid')) {
						$('#' + $(this).data('colpickid')).hide();
					}
				});
			},
			//Sets a color as new and current (default)
			setColor: function (col, setCurrent) {
				setCurrent = typeof setCurrent === "undefined" ? 1 : setCurrent;
				if (typeof col == 'string') {
					col = hexToHsb(col);
				} else if (col.r != undefined && col.g != undefined && col.b != undefined) {
					col = rgbToHsb(col);
				} else if (col.h != undefined && col.s != undefined && col.b != undefined) {
					col = fixHSB(col);
				} else {
					return this;
				}
				return this.each(function () {
					if ($(this).data('colpickid')) {
						var cal = $('#' + $(this).data('colpickid'));
						cal.data('colpick').color = col;
						cal.data('colpick').origColor = col;
						fillRGBFields(col, cal.get(0));
						fillHSBFields(col, cal.get(0));
						fillHexFields(col, cal.get(0));
						setHue(col, cal.get(0));
						setSelector(col, cal.get(0));

						setNewColor(col, cal.get(0));
						cal.data('colpick').onChange.apply(cal.parent(), [col, hsbToHex(col), hsbToRgb(col), cal.data('colpick').el, 1]);
						if (setCurrent) {
							setCurrentColor(col, cal.get(0));
						}
					}
				});
			}
		};
	}();
	//Color space convertions
	var hexToRgb = function (hex) {
		var hex = parseInt(hex.indexOf('#') > -1 ? hex.substring(1) : hex, 16);
		return { r: hex >> 16, g: (hex & 0x00FF00) >> 8, b: hex & 0x0000FF };
	};
	var hexToHsb = function (hex) {
		return rgbToHsb(hexToRgb(hex));
	};
	var rgbToHsb = function (rgb) {
		var hsb = { h: 0, s: 0, b: 0 };
		var min = Math.min(rgb.r, rgb.g, rgb.b);
		var max = Math.max(rgb.r, rgb.g, rgb.b);
		var delta = max - min;
		hsb.b = max;
		hsb.s = max != 0 ? 255 * delta / max : 0;
		if (hsb.s != 0) {
			if (rgb.r == max) hsb.h = (rgb.g - rgb.b) / delta;else if (rgb.g == max) hsb.h = 2 + (rgb.b - rgb.r) / delta;else hsb.h = 4 + (rgb.r - rgb.g) / delta;
		} else hsb.h = -1;
		hsb.h *= 60;
		if (hsb.h < 0) hsb.h += 360;
		hsb.s *= 100 / 255;
		hsb.b *= 100 / 255;
		return hsb;
	};
	var hsbToRgb = function (hsb) {
		var rgb = {};
		var h = hsb.h;
		var s = hsb.s * 255 / 100;
		var v = hsb.b * 255 / 100;
		if (s == 0) {
			rgb.r = rgb.g = rgb.b = v;
		} else {
			var t1 = v;
			var t2 = (255 - s) * v / 255;
			var t3 = (t1 - t2) * (h % 60) / 60;
			if (h == 360) h = 0;
			if (h < 60) {
				rgb.r = t1;rgb.b = t2;rgb.g = t2 + t3;
			} else if (h < 120) {
				rgb.g = t1;rgb.b = t2;rgb.r = t1 - t3;
			} else if (h < 180) {
				rgb.g = t1;rgb.r = t2;rgb.b = t2 + t3;
			} else if (h < 240) {
				rgb.b = t1;rgb.r = t2;rgb.g = t1 - t3;
			} else if (h < 300) {
				rgb.b = t1;rgb.g = t2;rgb.r = t2 + t3;
			} else if (h < 360) {
				rgb.r = t1;rgb.g = t2;rgb.b = t1 - t3;
			} else {
				rgb.r = 0;rgb.g = 0;rgb.b = 0;
			}
		}
		return { r: Math.round(rgb.r), g: Math.round(rgb.g), b: Math.round(rgb.b) };
	};
	var rgbToHex = function (rgb) {
		var hex = [rgb.r.toString(16), rgb.g.toString(16), rgb.b.toString(16)];
		$.each(hex, function (nr, val) {
			if (val.length == 1) {
				hex[nr] = '0' + val;
			}
		});
		return hex.join('');
	};
	var hsbToHex = function (hsb) {
		return rgbToHex(hsbToRgb(hsb));
	};
	$.fn.extend({
		colpick: colpick.init,
		colpickHide: colpick.hidePicker,
		colpickShow: colpick.showPicker,
		colpickSetColor: colpick.setColor
	});
	$.extend({
		colpick: {
			rgbToHex: rgbToHex,
			rgbToHsb: rgbToHsb,
			hsbToHex: hsbToHex,
			hsbToRgb: hsbToRgb,
			hexToHsb: hexToHsb,
			hexToRgb: hexToRgb
		}
	});
})(jQuery);

/***/ }),

/***/ "./js/lib/jquery.cookieBar.js":
/*!************************************!*\
  !*** ./js/lib/jquery.cookieBar.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * jQuery Cookiebar Plugin
 * https://github.com/carlwoodhouse/jquery.cookieBar
 *
 * Copyright 2012-17, Carl Woodhouse. the cookie function is inspired by https://github.com/carhartl/jquery-cookie
 * Disclaimer: if you still get fined for not complying with the eu cookielaw, it's not our fault.
 * Licence: MIT
 */

(function ($) {
	$.cookie = function (key, value, options) {
		if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
			options = $.extend({}, options);

			if (value === null || value === undefined) {
				options.expires = -1;
			}

			if (typeof options.expires === 'number') {
				var days = options.expires,
				    t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = String(value);

			return document.cookie = [encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', // max-age is not supported by IE
			options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join('');
		}
		options = value || {};
		var decode = options.raw ? function (s) {
			return s;
		} : decodeURIComponent;

		var pairs = document.cookie.split('; ');
		for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
			// IE
			if (decode(pair[0]) === key) return decode(pair[1] || '');
		}
		return null;
	};

	$.fn.cookieBar = function (options) {
		var settings = $.extend({
			'closeButton': 'none',
			'hideOnClose': true,
			'secure': false,
			'path': '/',
			'domain': ''
		}, options);

		return this.each(function () {
			var cookiebar = $(this);

			// just in case they didnt hide it by default.
			cookiebar.hide();

			// if close button not defined. define it!
			if (settings.closeButton == 'none') {
				cookiebar.append('<a class="cookiebar-close">Continue</a>');
				$.extend(settings, { 'closeButton': '.cookiebar-close' });
			}

			if ($.cookie('cookiebar') != 'hide') {
				cookiebar.show();
			}

			cookiebar.find(settings.closeButton).click(function () {
				if (settings.hideOnClose) {
					cookiebar.hide();
				}
				$.cookie('cookiebar', 'hide', { path: settings.path, secure: settings.secure, domain: settings.domain, expires: 30 });
				cookiebar.trigger('cookieBar-close');
				return false;
			});
		});
	};

	// self injection init
	$.cookieBar = function (options) {
		$('body').prepend('<div class="ui-widget"><div style="display: none;" class="cookie-message ui-widget-header blue"><p>By using this website you allow us to place cookies on your computer. They are harmless and never personally identify you.</p></div></div>');
		$('.cookie-message').cookieBar(options);
	};
})(jQuery);

/***/ }),

/***/ "./js/lib/jquery.countdown.min.js":
/*!****************************************!*\
  !*** ./js/lib/jquery.countdown.min.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!function (a) {
  "use strict";
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (a) {
  "use strict";
  function b(a) {
    if (a instanceof Date) return a;if (String(a).match(g)) return String(a).match(/^[0-9]*$/) && (a = Number(a)), String(a).match(/\-/) && (a = String(a).replace(/\-/g, "/")), new Date(a);throw new Error("Couldn't cast `" + a + "` to a date object.");
  }function c(a) {
    var b = a.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");return new RegExp(b);
  }function d(a) {
    return function (b) {
      var d = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if (d) for (var f = 0, g = d.length; f < g; ++f) {
        var h = d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
            j = c(h[0]),
            k = h[1] || "",
            l = h[3] || "",
            m = null;h = h[2], i.hasOwnProperty(h) && (m = i[h], m = Number(a[m])), null !== m && ("!" === k && (m = e(l, m)), "" === k && m < 10 && (m = "0" + m.toString()), b = b.replace(j, m.toString()));
      }return b = b.replace(/%%/, "%");
    };
  }function e(a, b) {
    var c = "s",
        d = "";return a && (a = a.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === a.length ? c = a[0] : (d = a[0], c = a[1])), Math.abs(b) > 1 ? c : d;
  }var f = [],
      g = [],
      h = { precision: 100, elapse: !1, defer: !1 };g.push(/^[0-9]*$/.source), g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g = new RegExp(g.join("|"));var i = { Y: "years", m: "months", n: "daysToMonth", d: "daysToWeek", w: "weeks", W: "weeksToMonth", H: "hours", M: "minutes", S: "seconds", D: "totalDays", I: "totalHours", N: "totalMinutes", T: "totalSeconds" },
      j = function (b, c, d) {
    this.el = b, this.$el = a(b), this.interval = null, this.offset = {}, this.options = a.extend({}, h), this.instanceNumber = f.length, f.push(this), this.$el.data("countdown-instance", this.instanceNumber), d && ("function" == typeof d ? (this.$el.on("update.countdown", d), this.$el.on("stoped.countdown", d), this.$el.on("finish.countdown", d)) : this.options = a.extend({}, h, d)), this.setFinalDate(c), this.options.defer === !1 && this.start();
  };a.extend(j.prototype, { start: function () {
      null !== this.interval && clearInterval(this.interval);var a = this;this.update(), this.interval = setInterval(function () {
        a.update.call(a);
      }, this.options.precision);
    }, stop: function () {
      clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped");
    }, toggle: function () {
      this.interval ? this.stop() : this.start();
    }, pause: function () {
      this.stop();
    }, resume: function () {
      this.start();
    }, remove: function () {
      this.stop.call(this), f[this.instanceNumber] = null, delete this.$el.data().countdownInstance;
    }, setFinalDate: function (a) {
      this.finalDate = b(a);
    }, update: function () {
      if (0 === this.$el.closest("html").length) return void this.remove();var b,
          c = void 0 !== a._data(this.el, "events"),
          d = new Date();b = this.finalDate.getTime() - d.getTime(), b = Math.ceil(b / 1e3), b = !this.options.elapse && b < 0 ? 0 : Math.abs(b), this.totalSecsLeft !== b && c && (this.totalSecsLeft = b, this.elapsed = d >= this.finalDate, this.offset = { seconds: this.totalSecsLeft % 60, minutes: Math.floor(this.totalSecsLeft / 60) % 60, hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24, days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7, daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7, daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368), weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7), weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4, months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368), years: Math.abs(this.finalDate.getFullYear() - d.getFullYear()), totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24), totalHours: Math.floor(this.totalSecsLeft / 60 / 60), totalMinutes: Math.floor(this.totalSecsLeft / 60), totalSeconds: this.totalSecsLeft }, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")));
    }, dispatchEvent: function (b) {
      var c = a.Event(b + ".countdown");c.finalDate = this.finalDate, c.elapsed = this.elapsed, c.offset = a.extend({}, this.offset), c.strftime = d(this.offset), this.$el.trigger(c);
    } }), a.fn.countdown = function () {
    var b = Array.prototype.slice.call(arguments, 0);return this.each(function () {
      var c = a(this).data("countdown-instance");if (void 0 !== c) {
        var d = f[c],
            e = b[0];j.prototype.hasOwnProperty(e) ? d[e].apply(d, b.slice(1)) : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (d.setFinalDate.call(d, e), d.start()) : a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, e));
      } else new j(this, b[0], b[1]);
    });
  };
});

/***/ }),

/***/ "./js/lib/jquery.elevateZoom.min.js":
/*!******************************************!*\
  !*** ./js/lib/jquery.elevateZoom.min.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* jQuery elevateZoom 3.0.8 - Demo's and documentation: - www.elevateweb.co.uk/image-zoom - Copyright (c) 2013 Andrew Eades - www.elevateweb.co.uk - Dual licensed under the LGPL licenses. - http://en.wikipedia.org/wiki/MIT_License - http://en.wikipedia.org/wiki/GNU_General_Public_License */
"function" !== typeof Object.create && (Object.create = function (d) {
  function h() {}h.prototype = d;return new h();
});
(function (d, h, l, m) {
  var k = { init: function (b, a) {
      var c = this;c.elem = a;c.$elem = d(a);c.imageSrc = c.$elem.data("zoom-image") ? c.$elem.data("zoom-image") : c.$elem.attr("src");c.options = d.extend({}, d.fn.elevateZoom.options, b);c.options.tint && (c.options.lensColour = "none", c.options.lensOpacity = "1");"inner" == c.options.zoomType && (c.options.showLens = !1);c.$elem.parent().removeAttr("title").removeAttr("alt");c.zoomImage = c.imageSrc;c.refresh(1);d("#" + c.options.gallery + " a").click(function (a) {
        c.options.galleryActiveClass && (d("#" + c.options.gallery + " a").removeClass(c.options.galleryActiveClass), d(this).addClass(c.options.galleryActiveClass));a.preventDefault();d(this).data("zoom-image") ? c.zoomImagePre = d(this).data("zoom-image") : c.zoomImagePre = d(this).data("image");c.swaptheimage(d(this).data("image"), c.zoomImagePre);return !1;
      });
    }, refresh: function (b) {
      var a = this;setTimeout(function () {
        a.fetch(a.imageSrc);
      }, b || a.options.refresh);
    }, fetch: function (b) {
      var a = this,
          c = new Image();c.onload = function () {
        a.largeWidth = c.width;a.largeHeight = c.height;a.startZoom();a.currentImage = a.imageSrc;a.options.onZoomedImageLoaded(a.$elem);
      };c.src = b;
    }, startZoom: function () {
      var b = this;b.nzWidth = b.$elem.width();b.nzHeight = b.$elem.height();b.isWindowActive = !1;b.isLensActive = !1;b.isTintActive = !1;b.overWindow = !1;b.options.imageCrossfade && (b.zoomWrap = b.$elem.wrap('<div style="height:' + b.nzHeight + "px;width:" + b.nzWidth + 'px;" class="zoomWrapper" />'), b.$elem.css("position", "absolute"));b.zoomLock = 1;b.scrollingLock = !1;b.changeBgSize = !1;b.currentZoomLevel = b.options.zoomLevel;
      b.nzOffset = b.$elem.offset();b.widthRatio = b.largeWidth / b.currentZoomLevel / b.nzWidth;b.heightRatio = b.largeHeight / b.currentZoomLevel / b.nzHeight;"window" == b.options.zoomType && (b.zoomWindowStyle = "overflow: hidden;background-position: 0px 0px;text-align:center;background-color: " + String(b.options.zoomWindowBgColour) + ";width: " + String(b.options.zoomWindowWidth) + "px;height: " + String(b.options.zoomWindowHeight) + "px;float: left;background-size: " + b.largeWidth / b.currentZoomLevel + "px " + b.largeHeight / b.currentZoomLevel + "px;display: none;z-index:100;border: " + String(b.options.borderSize) + "px solid " + b.options.borderColour + ";background-repeat: no-repeat;position: absolute;");if ("inner" == b.options.zoomType) {
        var a = b.$elem.css("border-left-width");b.zoomWindowStyle = "overflow: hidden;margin-left: " + String(a) + ";margin-top: " + String(a) + ";background-position: 0px 0px;width: " + String(b.nzWidth) + "px;height: " + String(b.nzHeight) + "px;float: left;display: none;cursor:" + b.options.cursor + ";px solid " + b.options.borderColour + ";background-repeat: no-repeat;position: absolute;";
      }"window" == b.options.zoomType && (lensHeight = b.nzHeight < b.options.zoomWindowWidth / b.widthRatio ? b.nzHeight : String(b.options.zoomWindowHeight / b.heightRatio), lensWidth = b.largeWidth < b.options.zoomWindowWidth ? b.nzWidth : b.options.zoomWindowWidth / b.widthRatio, b.lensStyle = "background-position: 0px 0px;width: " + String(b.options.zoomWindowWidth / b.widthRatio) + "px;height: " + String(b.options.zoomWindowHeight / b.heightRatio) + "px;float: right;display: none;overflow: hidden;z-index: 999;-webkit-transform: translateZ(0);opacity:" + b.options.lensOpacity + ";filter: alpha(opacity = " + 100 * b.options.lensOpacity + "); zoom:1;width:" + lensWidth + "px;height:" + lensHeight + "px;background-color:" + b.options.lensColour + ";cursor:" + b.options.cursor + ";border: " + b.options.lensBorderSize + "px solid " + b.options.lensBorderColour + ";background-repeat: no-repeat;position: absolute;");b.tintStyle = "display: block;position: absolute;background-color: " + b.options.tintColour + ";filter:alpha(opacity=0);opacity: 0;width: " + b.nzWidth + "px;height: " + b.nzHeight + "px;";
      b.lensRound = "";"lens" == b.options.zoomType && (b.lensStyle = "background-position: 0px 0px;float: left;display: none;border: " + String(b.options.borderSize) + "px solid " + b.options.borderColour + ";width:" + String(b.options.lensSize) + "px;height:" + String(b.options.lensSize) + "px;background-repeat: no-repeat;position: absolute;");"round" == b.options.lensShape && (b.lensRound = "border-top-left-radius: " + String(b.options.lensSize / 2 + b.options.borderSize) + "px;border-top-right-radius: " + String(b.options.lensSize / 2 + b.options.borderSize) + "px;border-bottom-left-radius: " + String(b.options.lensSize / 2 + b.options.borderSize) + "px;border-bottom-right-radius: " + String(b.options.lensSize / 2 + b.options.borderSize) + "px;");b.zoomContainer = d('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:' + b.nzOffset.left + "px;top:" + b.nzOffset.top + "px;height:" + b.nzHeight + "px;width:" + b.nzWidth + 'px;"></div>');d("body").append(b.zoomContainer);b.options.containLensZoom && "lens" == b.options.zoomType && b.zoomContainer.css("overflow", "hidden");"inner" != b.options.zoomType && (b.zoomLens = d("<div class='zoomLens' style='" + b.lensStyle + b.lensRound + "'>&nbsp;</div>").appendTo(b.zoomContainer).click(function () {
        b.$elem.trigger("click");
      }), b.options.tint && (b.tintContainer = d("<div/>").addClass("tintContainer"), b.zoomTint = d("<div class='zoomTint' style='" + b.tintStyle + "'></div>"), b.zoomLens.wrap(b.tintContainer), b.zoomTintcss = b.zoomLens.after(b.zoomTint), b.zoomTintImage = d('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: ' + b.nzWidth + "px; height: " + b.nzHeight + 'px;" src="' + b.imageSrc + '">').appendTo(b.zoomLens).click(function () {
        b.$elem.trigger("click");
      })));isNaN(b.options.zoomWindowPosition) ? b.zoomWindow = d("<div style='z-index:999;left:" + b.windowOffsetLeft + "px;top:" + b.windowOffsetTop + "px;" + b.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>").appendTo("body").click(function () {
        b.$elem.trigger("click");
      }) : b.zoomWindow = d("<div style='z-index:999;left:" + b.windowOffsetLeft + "px;top:" + b.windowOffsetTop + "px;" + b.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>").appendTo(b.zoomContainer).click(function () {
        b.$elem.trigger("click");
      });b.zoomWindowContainer = d("<div/>").addClass("zoomWindowContainer").css("width", b.options.zoomWindowWidth);b.zoomWindow.wrap(b.zoomWindowContainer);"lens" == b.options.zoomType && b.zoomLens.css({ backgroundImage: "url('" + b.imageSrc + "')" });"window" == b.options.zoomType && b.zoomWindow.css({ backgroundImage: "url('" + b.imageSrc + "')" });"inner" == b.options.zoomType && b.zoomWindow.css({ backgroundImage: "url('" + b.imageSrc + "')" });b.$elem.bind("touchmove", function (a) {
        a.preventDefault();b.setPosition(a.originalEvent.touches[0] || a.originalEvent.changedTouches[0]);
      });b.zoomContainer.bind("touchmove", function (a) {
        "inner" == b.options.zoomType && b.showHideWindow("show");a.preventDefault();b.setPosition(a.originalEvent.touches[0] || a.originalEvent.changedTouches[0]);
      });b.zoomContainer.bind("touchend", function (a) {
        b.showHideWindow("hide");b.options.showLens && b.showHideLens("hide");b.options.tint && "inner" != b.options.zoomType && b.showHideTint("hide");
      });
      b.$elem.bind("touchend", function (a) {
        b.showHideWindow("hide");b.options.showLens && b.showHideLens("hide");b.options.tint && "inner" != b.options.zoomType && b.showHideTint("hide");
      });b.options.showLens && (b.zoomLens.bind("touchmove", function (a) {
        a.preventDefault();b.setPosition(a.originalEvent.touches[0] || a.originalEvent.changedTouches[0]);
      }), b.zoomLens.bind("touchend", function (a) {
        b.showHideWindow("hide");b.options.showLens && b.showHideLens("hide");b.options.tint && "inner" != b.options.zoomType && b.showHideTint("hide");
      }));
      b.$elem.bind("mousemove", function (a) {
        !1 == b.overWindow && b.setElements("show");if (b.lastX !== a.clientX || b.lastY !== a.clientY) b.setPosition(a), b.currentLoc = a;b.lastX = a.clientX;b.lastY = a.clientY;
      });b.zoomContainer.bind("mousemove", function (a) {
        !1 == b.overWindow && b.setElements("show");if (b.lastX !== a.clientX || b.lastY !== a.clientY) b.setPosition(a), b.currentLoc = a;b.lastX = a.clientX;b.lastY = a.clientY;
      });"inner" != b.options.zoomType && b.zoomLens.bind("mousemove", function (a) {
        if (b.lastX !== a.clientX || b.lastY !== a.clientY) b.setPosition(a), b.currentLoc = a;b.lastX = a.clientX;b.lastY = a.clientY;
      });b.options.tint && "inner" != b.options.zoomType && b.zoomTint.bind("mousemove", function (a) {
        if (b.lastX !== a.clientX || b.lastY !== a.clientY) b.setPosition(a), b.currentLoc = a;b.lastX = a.clientX;b.lastY = a.clientY;
      });"inner" == b.options.zoomType && b.zoomWindow.bind("mousemove", function (a) {
        if (b.lastX !== a.clientX || b.lastY !== a.clientY) b.setPosition(a), b.currentLoc = a;b.lastX = a.clientX;b.lastY = a.clientY;
      });b.zoomContainer.add(b.$elem).mouseenter(function () {
        !1 == b.overWindow && b.setElements("show");
      }).mouseleave(function () {
        b.scrollLock || b.setElements("hide");
      });"inner" != b.options.zoomType && b.zoomWindow.mouseenter(function () {
        b.overWindow = !0;b.setElements("hide");
      }).mouseleave(function () {
        b.overWindow = !1;
      });b.minZoomLevel = b.options.minZoomLevel ? b.options.minZoomLevel : 2 * b.options.scrollZoomIncrement;b.options.scrollZoom && b.zoomContainer.add(b.$elem).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function (a) {
        b.scrollLock = !0;clearTimeout(d.data(this, "timer"));d.data(this, "timer", setTimeout(function () {
          b.scrollLock = !1;
        }, 250));var e = a.originalEvent.wheelDelta || -1 * a.originalEvent.detail;a.stopImmediatePropagation();a.stopPropagation();a.preventDefault();0 < e / 120 ? b.currentZoomLevel >= b.minZoomLevel && b.changeZoomLevel(b.currentZoomLevel - b.options.scrollZoomIncrement) : b.options.maxZoomLevel ? b.currentZoomLevel <= b.options.maxZoomLevel && b.changeZoomLevel(parseFloat(b.currentZoomLevel) + b.options.scrollZoomIncrement) : b.changeZoomLevel(parseFloat(b.currentZoomLevel) + b.options.scrollZoomIncrement);
        return !1;
      });
    }, setElements: function (b) {
      if (!this.options.zoomEnabled) return !1;"show" == b && this.isWindowSet && ("inner" == this.options.zoomType && this.showHideWindow("show"), "window" == this.options.zoomType && this.showHideWindow("show"), this.options.showLens && this.showHideLens("show"), this.options.tint && "inner" != this.options.zoomType && this.showHideTint("show"));"hide" == b && ("window" == this.options.zoomType && this.showHideWindow("hide"), this.options.tint || this.showHideWindow("hide"), this.options.showLens && this.showHideLens("hide"), this.options.tint && this.showHideTint("hide"));
    }, setPosition: function (b) {
      if (!this.options.zoomEnabled) return !1;this.nzHeight = this.$elem.height();this.nzWidth = this.$elem.width();this.nzOffset = this.$elem.offset();this.options.tint && "inner" != this.options.zoomType && (this.zoomTint.css({ top: 0 }), this.zoomTint.css({ left: 0 }));this.options.responsive && !this.options.scrollZoom && this.options.showLens && (lensHeight = this.nzHeight < this.options.zoomWindowWidth / this.widthRatio ? this.nzHeight : String(this.options.zoomWindowHeight / this.heightRatio), lensWidth = this.largeWidth < this.options.zoomWindowWidth ? this.nzWidth : this.options.zoomWindowWidth / this.widthRatio, this.widthRatio = this.largeWidth / this.nzWidth, this.heightRatio = this.largeHeight / this.nzHeight, "lens" != this.options.zoomType && (lensHeight = this.nzHeight < this.options.zoomWindowWidth / this.widthRatio ? this.nzHeight : String(this.options.zoomWindowHeight / this.heightRatio), lensWidth = this.options.zoomWindowWidth < this.options.zoomWindowWidth ? this.nzWidth : this.options.zoomWindowWidth / this.widthRatio, this.zoomLens.css("width", lensWidth), this.zoomLens.css("height", lensHeight), this.options.tint && (this.zoomTintImage.css("width", this.nzWidth), this.zoomTintImage.css("height", this.nzHeight))), "lens" == this.options.zoomType && this.zoomLens.css({ width: String(this.options.lensSize) + "px", height: String(this.options.lensSize) + "px" }));this.zoomContainer.css({ top: this.nzOffset.top });this.zoomContainer.css({ left: this.nzOffset.left });this.mouseLeft = parseInt(b.pageX - this.nzOffset.left);this.mouseTop = parseInt(b.pageY - this.nzOffset.top);"window" == this.options.zoomType && (this.Etoppos = this.mouseTop < this.zoomLens.height() / 2, this.Eboppos = this.mouseTop > this.nzHeight - this.zoomLens.height() / 2 - 2 * this.options.lensBorderSize, this.Eloppos = this.mouseLeft < 0 + this.zoomLens.width() / 2, this.Eroppos = this.mouseLeft > this.nzWidth - this.zoomLens.width() / 2 - 2 * this.options.lensBorderSize);"inner" == this.options.zoomType && (this.Etoppos = this.mouseTop < this.nzHeight / 2 / this.heightRatio, this.Eboppos = this.mouseTop > this.nzHeight - this.nzHeight / 2 / this.heightRatio, this.Eloppos = this.mouseLeft < 0 + this.nzWidth / 2 / this.widthRatio, this.Eroppos = this.mouseLeft > this.nzWidth - this.nzWidth / 2 / this.widthRatio - 2 * this.options.lensBorderSize);0 >= this.mouseLeft || 0 > this.mouseTop || this.mouseLeft > this.nzWidth || this.mouseTop > this.nzHeight ? this.setElements("hide") : (this.options.showLens && (this.lensLeftPos = String(this.mouseLeft - this.zoomLens.width() / 2), this.lensTopPos = String(this.mouseTop - this.zoomLens.height() / 2)), this.Etoppos && (this.lensTopPos = 0), this.Eloppos && (this.tintpos = this.lensLeftPos = this.windowLeftPos = 0), "window" == this.options.zoomType && (this.Eboppos && (this.lensTopPos = Math.max(this.nzHeight - this.zoomLens.height() - 2 * this.options.lensBorderSize, 0)), this.Eroppos && (this.lensLeftPos = this.nzWidth - this.zoomLens.width() - 2 * this.options.lensBorderSize)), "inner" == this.options.zoomType && (this.Eboppos && (this.lensTopPos = Math.max(this.nzHeight - 2 * this.options.lensBorderSize, 0)), this.Eroppos && (this.lensLeftPos = this.nzWidth - this.nzWidth - 2 * this.options.lensBorderSize)), "lens" == this.options.zoomType && (this.windowLeftPos = String(-1 * ((b.pageX - this.nzOffset.left) * this.widthRatio - this.zoomLens.width() / 2)), this.windowTopPos = String(-1 * ((b.pageY - this.nzOffset.top) * this.heightRatio - this.zoomLens.height() / 2)), this.zoomLens.css({ backgroundPosition: this.windowLeftPos + "px " + this.windowTopPos + "px" }), this.changeBgSize && (this.nzHeight > this.nzWidth ? ("lens" == this.options.zoomType && this.zoomLens.css({ "background-size": this.largeWidth / this.newvalueheight + "px " + this.largeHeight / this.newvalueheight + "px" }), this.zoomWindow.css({ "background-size": this.largeWidth / this.newvalueheight + "px " + this.largeHeight / this.newvalueheight + "px" })) : ("lens" == this.options.zoomType && this.zoomLens.css({ "background-size": this.largeWidth / this.newvaluewidth + "px " + this.largeHeight / this.newvaluewidth + "px" }), this.zoomWindow.css({ "background-size": this.largeWidth / this.newvaluewidth + "px " + this.largeHeight / this.newvaluewidth + "px" })), this.changeBgSize = !1), this.setWindowPostition(b)), this.options.tint && "inner" != this.options.zoomType && this.setTintPosition(b), "window" == this.options.zoomType && this.setWindowPostition(b), "inner" == this.options.zoomType && this.setWindowPostition(b), this.options.showLens && (this.fullwidth && "lens" != this.options.zoomType && (this.lensLeftPos = 0), this.zoomLens.css({ left: this.lensLeftPos + "px", top: this.lensTopPos + "px" })));
    }, showHideWindow: function (b) {
      "show" != b || this.isWindowActive || (this.options.zoomWindowFadeIn ? this.zoomWindow.stop(!0, !0, !1).fadeIn(this.options.zoomWindowFadeIn) : this.zoomWindow.show(), this.isWindowActive = !0);"hide" == b && this.isWindowActive && (this.options.zoomWindowFadeOut ? this.zoomWindow.stop(!0, !0).fadeOut(this.options.zoomWindowFadeOut) : this.zoomWindow.hide(), this.isWindowActive = !1);
    }, showHideLens: function (b) {
      "show" != b || this.isLensActive || (this.options.lensFadeIn ? this.zoomLens.stop(!0, !0, !1).fadeIn(this.options.lensFadeIn) : this.zoomLens.show(), this.isLensActive = !0);"hide" == b && this.isLensActive && (this.options.lensFadeOut ? this.zoomLens.stop(!0, !0).fadeOut(this.options.lensFadeOut) : this.zoomLens.hide(), this.isLensActive = !1);
    }, showHideTint: function (b) {
      "show" != b || this.isTintActive || (this.options.zoomTintFadeIn ? this.zoomTint.css({ opacity: this.options.tintOpacity }).animate().stop(!0, !0).fadeIn("slow") : (this.zoomTint.css({ opacity: this.options.tintOpacity }).animate(), this.zoomTint.show()), this.isTintActive = !0);"hide" == b && this.isTintActive && (this.options.zoomTintFadeOut ? this.zoomTint.stop(!0, !0).fadeOut(this.options.zoomTintFadeOut) : this.zoomTint.hide(), this.isTintActive = !1);
    }, setLensPostition: function (b) {},
    setWindowPostition: function (b) {
      var a = this;if (isNaN(a.options.zoomWindowPosition)) a.externalContainer = d("#" + a.options.zoomWindowPosition), a.externalContainerWidth = a.externalContainer.width(), a.externalContainerHeight = a.externalContainer.height(), a.externalContainerOffset = a.externalContainer.offset(), a.windowOffsetTop = a.externalContainerOffset.top, a.windowOffsetLeft = a.externalContainerOffset.left;else switch (a.options.zoomWindowPosition) {case 1:
          a.windowOffsetTop = a.options.zoomWindowOffety;a.windowOffsetLeft = +a.nzWidth;break;case 2:
          a.options.zoomWindowHeight > a.nzHeight && (a.windowOffsetTop = -1 * (a.options.zoomWindowHeight / 2 - a.nzHeight / 2), a.windowOffsetLeft = a.nzWidth);break;case 3:
          a.windowOffsetTop = a.nzHeight - a.zoomWindow.height() - 2 * a.options.borderSize;a.windowOffsetLeft = a.nzWidth;break;case 4:
          a.windowOffsetTop = a.nzHeight;a.windowOffsetLeft = a.nzWidth;break;case 5:
          a.windowOffsetTop = a.nzHeight;a.windowOffsetLeft = a.nzWidth - a.zoomWindow.width() - 2 * a.options.borderSize;break;case 6:
          a.options.zoomWindowHeight > a.nzHeight && (a.windowOffsetTop = a.nzHeight, a.windowOffsetLeft = -1 * (a.options.zoomWindowWidth / 2 - a.nzWidth / 2 + 2 * a.options.borderSize));break;case 7:
          a.windowOffsetTop = a.nzHeight;a.windowOffsetLeft = 0;break;case 8:
          a.windowOffsetTop = a.nzHeight;a.windowOffsetLeft = -1 * (a.zoomWindow.width() + 2 * a.options.borderSize);break;case 9:
          a.windowOffsetTop = a.nzHeight - a.zoomWindow.height() - 2 * a.options.borderSize;a.windowOffsetLeft = -1 * (a.zoomWindow.width() + 2 * a.options.borderSize);break;case 10:
          a.options.zoomWindowHeight > a.nzHeight && (a.windowOffsetTop = -1 * (a.options.zoomWindowHeight / 2 - a.nzHeight / 2), a.windowOffsetLeft = -1 * (a.zoomWindow.width() + 2 * a.options.borderSize));break;case 11:
          a.windowOffsetTop = a.options.zoomWindowOffety;a.windowOffsetLeft = -1 * (a.zoomWindow.width() + 2 * a.options.borderSize);break;case 12:
          a.windowOffsetTop = -1 * (a.zoomWindow.height() + 2 * a.options.borderSize);a.windowOffsetLeft = -1 * (a.zoomWindow.width() + 2 * a.options.borderSize);break;case 13:
          a.windowOffsetTop = -1 * (a.zoomWindow.height() + 2 * a.options.borderSize);a.windowOffsetLeft = 0;break;case 14:
          a.options.zoomWindowHeight > a.nzHeight && (a.windowOffsetTop = -1 * (a.zoomWindow.height() + 2 * a.options.borderSize), a.windowOffsetLeft = -1 * (a.options.zoomWindowWidth / 2 - a.nzWidth / 2 + 2 * a.options.borderSize));break;case 15:
          a.windowOffsetTop = -1 * (a.zoomWindow.height() + 2 * a.options.borderSize);a.windowOffsetLeft = a.nzWidth - a.zoomWindow.width() - 2 * a.options.borderSize;break;case 16:
          a.windowOffsetTop = -1 * (a.zoomWindow.height() + 2 * a.options.borderSize);a.windowOffsetLeft = a.nzWidth;break;default:
          a.windowOffsetTop = a.options.zoomWindowOffety, a.windowOffsetLeft = a.nzWidth;}a.isWindowSet = !0;a.windowOffsetTop += a.options.zoomWindowOffety;a.windowOffsetLeft += a.options.zoomWindowOffetx;a.zoomWindow.css({ top: a.windowOffsetTop });a.zoomWindow.css({ left: a.windowOffsetLeft });"inner" == a.options.zoomType && (a.zoomWindow.css({ top: 0 }), a.zoomWindow.css({ left: 0 }));a.windowLeftPos = String(-1 * ((b.pageX - a.nzOffset.left) * a.widthRatio - a.zoomWindow.width() / 2));a.windowTopPos = String(-1 * ((b.pageY - a.nzOffset.top) * a.heightRatio - a.zoomWindow.height() / 2));a.Etoppos && (a.windowTopPos = 0);a.Eloppos && (a.windowLeftPos = 0);a.Eboppos && (a.windowTopPos = -1 * (a.largeHeight / a.currentZoomLevel - a.zoomWindow.height()));a.Eroppos && (a.windowLeftPos = -1 * (a.largeWidth / a.currentZoomLevel - a.zoomWindow.width()));a.fullheight && (a.windowTopPos = 0);a.fullwidth && (a.windowLeftPos = 0);if ("window" == a.options.zoomType || "inner" == a.options.zoomType) 1 == a.zoomLock && (1 >= a.widthRatio && (a.windowLeftPos = 0), 1 >= a.heightRatio && (a.windowTopPos = 0)), a.largeHeight < a.options.zoomWindowHeight && (a.windowTopPos = 0), a.largeWidth < a.options.zoomWindowWidth && (a.windowLeftPos = 0), a.options.easing ? (a.xp || (a.xp = 0), a.yp || (a.yp = 0), a.loop || (a.loop = setInterval(function () {
        a.xp += (a.windowLeftPos - a.xp) / a.options.easingAmount;a.yp += (a.windowTopPos - a.yp) / a.options.easingAmount;a.scrollingLock ? (clearInterval(a.loop), a.xp = a.windowLeftPos, a.yp = a.windowTopPos, a.xp = -1 * ((b.pageX - a.nzOffset.left) * a.widthRatio - a.zoomWindow.width() / 2), a.yp = -1 * ((b.pageY - a.nzOffset.top) * a.heightRatio - a.zoomWindow.height() / 2), a.changeBgSize && (a.nzHeight > a.nzWidth ? ("lens" == a.options.zoomType && a.zoomLens.css({ "background-size": a.largeWidth / a.newvalueheight + "px " + a.largeHeight / a.newvalueheight + "px" }), a.zoomWindow.css({ "background-size": a.largeWidth / a.newvalueheight + "px " + a.largeHeight / a.newvalueheight + "px" })) : ("lens" != a.options.zoomType && a.zoomLens.css({ "background-size": a.largeWidth / a.newvaluewidth + "px " + a.largeHeight / a.newvalueheight + "px" }), a.zoomWindow.css({ "background-size": a.largeWidth / a.newvaluewidth + "px " + a.largeHeight / a.newvaluewidth + "px" })), a.changeBgSize = !1), a.zoomWindow.css({ backgroundPosition: a.windowLeftPos + "px " + a.windowTopPos + "px" }), a.scrollingLock = !1, a.loop = !1) : (a.changeBgSize && (a.nzHeight > a.nzWidth ? ("lens" == a.options.zoomType && a.zoomLens.css({ "background-size": a.largeWidth / a.newvalueheight + "px " + a.largeHeight / a.newvalueheight + "px" }), a.zoomWindow.css({ "background-size": a.largeWidth / a.newvalueheight + "px " + a.largeHeight / a.newvalueheight + "px" })) : ("lens" != a.options.zoomType && a.zoomLens.css({ "background-size": a.largeWidth / a.newvaluewidth + "px " + a.largeHeight / a.newvaluewidth + "px" }), a.zoomWindow.css({ "background-size": a.largeWidth / a.newvaluewidth + "px " + a.largeHeight / a.newvaluewidth + "px" })), a.changeBgSize = !1), a.zoomWindow.css({ backgroundPosition: a.xp + "px " + a.yp + "px" }));
      }, 16))) : (a.changeBgSize && (a.nzHeight > a.nzWidth ? ("lens" == a.options.zoomType && a.zoomLens.css({ "background-size": a.largeWidth / a.newvalueheight + "px " + a.largeHeight / a.newvalueheight + "px" }), a.zoomWindow.css({ "background-size": a.largeWidth / a.newvalueheight + "px " + a.largeHeight / a.newvalueheight + "px" })) : ("lens" == a.options.zoomType && a.zoomLens.css({ "background-size": a.largeWidth / a.newvaluewidth + "px " + a.largeHeight / a.newvaluewidth + "px" }), a.largeHeight / a.newvaluewidth < a.options.zoomWindowHeight ? a.zoomWindow.css({ "background-size": a.largeWidth / a.newvaluewidth + "px " + a.largeHeight / a.newvaluewidth + "px" }) : a.zoomWindow.css({ "background-size": a.largeWidth / a.newvalueheight + "px " + a.largeHeight / a.newvalueheight + "px" })), a.changeBgSize = !1), a.zoomWindow.css({ backgroundPosition: a.windowLeftPos + "px " + a.windowTopPos + "px" }));
    }, setTintPosition: function (b) {
      this.nzOffset = this.$elem.offset();this.tintpos = String(-1 * (b.pageX - this.nzOffset.left - this.zoomLens.width() / 2));this.tintposy = String(-1 * (b.pageY - this.nzOffset.top - this.zoomLens.height() / 2));this.Etoppos && (this.tintposy = 0);this.Eloppos && (this.tintpos = 0);this.Eboppos && (this.tintposy = -1 * (this.nzHeight - this.zoomLens.height() - 2 * this.options.lensBorderSize));this.Eroppos && (this.tintpos = -1 * (this.nzWidth - this.zoomLens.width() - 2 * this.options.lensBorderSize));
      this.options.tint && (this.fullheight && (this.tintposy = 0), this.fullwidth && (this.tintpos = 0), this.zoomTintImage.css({ left: this.tintpos + "px" }), this.zoomTintImage.css({ top: this.tintposy + "px" }));
    }, swaptheimage: function (b, a) {
      var c = this,
          e = new Image();c.options.loadingIcon && (c.spinner = d("<div style=\"background: url('" + c.options.loadingIcon + "') no-repeat center;height:" + c.nzHeight + "px;width:" + c.nzWidth + 'px;z-index: 2000;position: absolute; background-position: center center;"></div>'), c.$elem.after(c.spinner));
      c.options.onImageSwap(c.$elem);e.onload = function () {
        c.largeWidth = e.width;c.largeHeight = e.height;c.zoomImage = a;c.zoomWindow.css({ "background-size": c.largeWidth + "px " + c.largeHeight + "px" });c.zoomWindow.css({ "background-size": c.largeWidth + "px " + c.largeHeight + "px" });c.swapAction(b, a);
      };e.src = a;
    }, swapAction: function (b, a) {
      var c = this,
          e = new Image();e.onload = function () {
        c.nzHeight = e.height;c.nzWidth = e.width;c.options.onImageSwapComplete(c.$elem);c.doneCallback();
      };e.src = b;c.currentZoomLevel = c.options.zoomLevel;c.options.maxZoomLevel = !1;"lens" == c.options.zoomType && c.zoomLens.css({ backgroundImage: "url('" + a + "')" });"window" == c.options.zoomType && c.zoomWindow.css({ backgroundImage: "url('" + a + "')" });"inner" == c.options.zoomType && c.zoomWindow.css({ backgroundImage: "url('" + a + "')" });c.currentImage = a;if (c.options.imageCrossfade) {
        var f = c.$elem,
            g = f.clone();c.$elem.attr("src", b);c.$elem.after(g);g.stop(!0).fadeOut(c.options.imageCrossfade, function () {
          d(this).remove();
        });c.$elem.width("auto").removeAttr("width");c.$elem.height("auto").removeAttr("height");
        f.fadeIn(c.options.imageCrossfade);c.options.tint && "inner" != c.options.zoomType && (f = c.zoomTintImage, g = f.clone(), c.zoomTintImage.attr("src", a), c.zoomTintImage.after(g), g.stop(!0).fadeOut(c.options.imageCrossfade, function () {
          d(this).remove();
        }), f.fadeIn(c.options.imageCrossfade), c.zoomTint.css({ height: c.$elem.height() }), c.zoomTint.css({ width: c.$elem.width() }));c.zoomContainer.css("height", c.$elem.height());c.zoomContainer.css("width", c.$elem.width());"inner" != c.options.zoomType || c.options.constrainType || (c.zoomWrap.parent().css("height", c.$elem.height()), c.zoomWrap.parent().css("width", c.$elem.width()), c.zoomWindow.css("height", c.$elem.height()), c.zoomWindow.css("width", c.$elem.width()));
      } else c.$elem.attr("src", b), c.options.tint && (c.zoomTintImage.attr("src", a), c.zoomTintImage.attr("height", c.$elem.height()), c.zoomTintImage.css({ height: c.$elem.height() }), c.zoomTint.css({ height: c.$elem.height() })), c.zoomContainer.css("height", c.$elem.height()), c.zoomContainer.css("width", c.$elem.width());c.options.imageCrossfade && (c.zoomWrap.css("height", c.$elem.height()), c.zoomWrap.css("width", c.$elem.width()));c.options.constrainType && ("height" == c.options.constrainType && (c.zoomContainer.css("height", c.options.constrainSize), c.zoomContainer.css("width", "auto"), c.options.imageCrossfade ? (c.zoomWrap.css("height", c.options.constrainSize), c.zoomWrap.css("width", "auto"), c.constwidth = c.zoomWrap.width()) : (c.$elem.css("height", c.options.constrainSize), c.$elem.css("width", "auto"), c.constwidth = c.$elem.width()), "inner" == c.options.zoomType && (c.zoomWrap.parent().css("height", c.options.constrainSize), c.zoomWrap.parent().css("width", c.constwidth), c.zoomWindow.css("height", c.options.constrainSize), c.zoomWindow.css("width", c.constwidth)), c.options.tint && (c.tintContainer.css("height", c.options.constrainSize), c.tintContainer.css("width", c.constwidth), c.zoomTint.css("height", c.options.constrainSize), c.zoomTint.css("width", c.constwidth), c.zoomTintImage.css("height", c.options.constrainSize), c.zoomTintImage.css("width", c.constwidth))), "width" == c.options.constrainType && (c.zoomContainer.css("height", "auto"), c.zoomContainer.css("width", c.options.constrainSize), c.options.imageCrossfade ? (c.zoomWrap.css("height", "auto"), c.zoomWrap.css("width", c.options.constrainSize), c.constheight = c.zoomWrap.height()) : (c.$elem.css("height", "auto"), c.$elem.css("width", c.options.constrainSize), c.constheight = c.$elem.height()), "inner" == c.options.zoomType && (c.zoomWrap.parent().css("height", c.constheight), c.zoomWrap.parent().css("width", c.options.constrainSize), c.zoomWindow.css("height", c.constheight), c.zoomWindow.css("width", c.options.constrainSize)), c.options.tint && (c.tintContainer.css("height", c.constheight), c.tintContainer.css("width", c.options.constrainSize), c.zoomTint.css("height", c.constheight), c.zoomTint.css("width", c.options.constrainSize), c.zoomTintImage.css("height", c.constheight), c.zoomTintImage.css("width", c.options.constrainSize))));
    }, doneCallback: function () {
      this.options.loadingIcon && this.spinner.hide();this.nzOffset = this.$elem.offset();this.nzWidth = this.$elem.width();
      this.nzHeight = this.$elem.height();this.currentZoomLevel = this.options.zoomLevel;this.widthRatio = this.largeWidth / this.nzWidth;this.heightRatio = this.largeHeight / this.nzHeight;"window" == this.options.zoomType && (lensHeight = this.nzHeight < this.options.zoomWindowWidth / this.widthRatio ? this.nzHeight : String(this.options.zoomWindowHeight / this.heightRatio), lensWidth = this.options.zoomWindowWidth < this.options.zoomWindowWidth ? this.nzWidth : this.options.zoomWindowWidth / this.widthRatio, this.zoomLens && (this.zoomLens.css("width", lensWidth), this.zoomLens.css("height", lensHeight)));
    }, getCurrentImage: function () {
      return this.zoomImage;
    }, getGalleryList: function () {
      var b = this;b.gallerylist = [];b.options.gallery ? d("#" + b.options.gallery + " a").each(function () {
        var a = "";d(this).data("zoom-image") ? a = d(this).data("zoom-image") : d(this).data("image") && (a = d(this).data("image"));a == b.zoomImage ? b.gallerylist.unshift({ href: "" + a + "", title: d(this).find("img").attr("title") }) : b.gallerylist.push({ href: "" + a + "", title: d(this).find("img").attr("title") });
      }) : b.gallerylist.push({ href: "" + b.zoomImage + "", title: d(this).find("img").attr("title") });return b.gallerylist;
    }, changeZoomLevel: function (b) {
      this.scrollingLock = !0;this.newvalue = parseFloat(b).toFixed(2);newvalue = parseFloat(b).toFixed(2);maxheightnewvalue = this.largeHeight / (this.options.zoomWindowHeight / this.nzHeight * this.nzHeight);maxwidthtnewvalue = this.largeWidth / (this.options.zoomWindowWidth / this.nzWidth * this.nzWidth);"inner" != this.options.zoomType && (maxheightnewvalue <= newvalue ? (this.heightRatio = this.largeHeight / maxheightnewvalue / this.nzHeight, this.newvalueheight = maxheightnewvalue, this.fullheight = !0) : (this.heightRatio = this.largeHeight / newvalue / this.nzHeight, this.newvalueheight = newvalue, this.fullheight = !1), maxwidthtnewvalue <= newvalue ? (this.widthRatio = this.largeWidth / maxwidthtnewvalue / this.nzWidth, this.newvaluewidth = maxwidthtnewvalue, this.fullwidth = !0) : (this.widthRatio = this.largeWidth / newvalue / this.nzWidth, this.newvaluewidth = newvalue, this.fullwidth = !1), "lens" == this.options.zoomType && (maxheightnewvalue <= newvalue ? (this.fullwidth = !0, this.newvaluewidth = maxheightnewvalue) : (this.widthRatio = this.largeWidth / newvalue / this.nzWidth, this.newvaluewidth = newvalue, this.fullwidth = !1)));"inner" == this.options.zoomType && (maxheightnewvalue = parseFloat(this.largeHeight / this.nzHeight).toFixed(2), maxwidthtnewvalue = parseFloat(this.largeWidth / this.nzWidth).toFixed(2), newvalue > maxheightnewvalue && (newvalue = maxheightnewvalue), newvalue > maxwidthtnewvalue && (newvalue = maxwidthtnewvalue), maxheightnewvalue <= newvalue ? (this.heightRatio = this.largeHeight / newvalue / this.nzHeight, this.newvalueheight = newvalue > maxheightnewvalue ? maxheightnewvalue : newvalue, this.fullheight = !0) : (this.heightRatio = this.largeHeight / newvalue / this.nzHeight, this.newvalueheight = newvalue > maxheightnewvalue ? maxheightnewvalue : newvalue, this.fullheight = !1), maxwidthtnewvalue <= newvalue ? (this.widthRatio = this.largeWidth / newvalue / this.nzWidth, this.newvaluewidth = newvalue > maxwidthtnewvalue ? maxwidthtnewvalue : newvalue, this.fullwidth = !0) : (this.widthRatio = this.largeWidth / newvalue / this.nzWidth, this.newvaluewidth = newvalue, this.fullwidth = !1));scrcontinue = !1;"inner" == this.options.zoomType && (this.nzWidth > this.nzHeight && (this.newvaluewidth <= maxwidthtnewvalue ? scrcontinue = !0 : (scrcontinue = !1, this.fullwidth = this.fullheight = !0)), this.nzHeight > this.nzWidth && (this.newvaluewidth <= maxwidthtnewvalue ? scrcontinue = !0 : (scrcontinue = !1, this.fullwidth = this.fullheight = !0)));"inner" != this.options.zoomType && (scrcontinue = !0);scrcontinue && (this.zoomLock = 0, this.changeZoom = !0, this.options.zoomWindowHeight / this.heightRatio <= this.nzHeight && (this.currentZoomLevel = this.newvalueheight, "lens" != this.options.zoomType && "inner" != this.options.zoomType && (this.changeBgSize = !0, this.zoomLens.css({ height: String(this.options.zoomWindowHeight / this.heightRatio) + "px" })), "lens" == this.options.zoomType || "inner" == this.options.zoomType) && (this.changeBgSize = !0), this.options.zoomWindowWidth / this.widthRatio <= this.nzWidth && ("inner" != this.options.zoomType && this.newvaluewidth > this.newvalueheight && (this.currentZoomLevel = this.newvaluewidth), "lens" != this.options.zoomType && "inner" != this.options.zoomType && (this.changeBgSize = !0, this.zoomLens.css({ width: String(this.options.zoomWindowWidth / this.widthRatio) + "px" })), "lens" == this.options.zoomType || "inner" == this.options.zoomType) && (this.changeBgSize = !0), "inner" == this.options.zoomType && (this.changeBgSize = !0, this.nzWidth > this.nzHeight && (this.currentZoomLevel = this.newvaluewidth), this.nzHeight > this.nzWidth && (this.currentZoomLevel = this.newvaluewidth)));this.setPosition(this.currentLoc);
    }, closeAll: function () {
      self.zoomWindow && self.zoomWindow.hide();
      self.zoomLens && self.zoomLens.hide();self.zoomTint && self.zoomTint.hide();
    }, changeState: function (b) {
      "enable" == b && (this.options.zoomEnabled = !0);"disable" == b && (this.options.zoomEnabled = !1);
    } };d.fn.elevateZoom = function (b) {
    return this.each(function () {
      var a = Object.create(k);a.init(b, this);d.data(this, "elevateZoom", a);
    });
  };d.fn.elevateZoom.options = { zoomActivation: "hover", zoomEnabled: !0, preloading: 1, zoomLevel: 1, scrollZoom: !1, scrollZoomIncrement: 0.1, minZoomLevel: !1, maxZoomLevel: !1, easing: !1, easingAmount: 12, lensSize: 200,
    zoomWindowWidth: 400, zoomWindowHeight: 400, zoomWindowOffetx: 0, zoomWindowOffety: 0, zoomWindowPosition: 1, zoomWindowBgColour: "#fff", lensFadeIn: !1, lensFadeOut: !1, debug: !1, zoomWindowFadeIn: !1, zoomWindowFadeOut: !1, zoomWindowAlwaysShow: !1, zoomTintFadeIn: !1, zoomTintFadeOut: !1, borderSize: 4, showLens: !0, borderColour: "#888", lensBorderSize: 1, lensBorderColour: "#000", lensShape: "square", zoomType: "window", containLensZoom: !1, lensColour: "white", lensOpacity: 0.4, lenszoom: !1, tint: !1, tintColour: "#333", tintOpacity: 0.4, gallery: !1,
    galleryActiveClass: "zoomGalleryActive", imageCrossfade: !1, constrainType: !1, constrainSize: !1, loadingIcon: !1, cursor: "default", responsive: !0, onComplete: d.noop, onZoomedImageLoaded: function () {}, onImageSwap: d.noop, onImageSwapComplete: d.noop };
})(jQuery, window, document);

/***/ }),

/***/ "./js/lib/jquery.lazyload.js":
/*!***********************************!*\
  !*** ./js/lib/jquery.lazyload.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2015 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.9.7
 *
 */

(function ($, window, document, undefined) {
    var $window = $(window);

    $.fn.lazyload = function (options) {
        var elements = this;
        var $container;
        var settings = {
            threshold: 0,
            failure_limit: 0,
            event: "scroll.lazyload",
            effect: "show",
            container: window,
            data_attribute: "original",
            data_srcset: "srcset",
            skip_invisible: false,
            appear: null,
            load: null,
            placeholder: "data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
        };

        function update() {
            var counter = 0;

            elements.each(function () {
                var $this = $(this);
                if (settings.skip_invisible && !$this.is(":visible")) {
                    console.log('skip');
                    return;
                }
                if ($.abovethetop(this, settings) || $.leftofbegin(this, settings)) {
                    /* Nothing. */
                } else if (!$.belowthefold(this, settings) && !$.rightoffold(this, settings)) {
                    $this.trigger("appear");
                    /* if we found an image we'll load, reset the counter */
                    counter = 0;
                } else {
                    if (++counter > settings.failure_limit) {
                        return false;
                    }
                }
            });
        }

        if (options) {
            /* Maintain BC for a couple of versions. */
            if (undefined !== options.failurelimit) {
                options.failure_limit = options.failurelimit;
                delete options.failurelimit;
            }
            if (undefined !== options.effectspeed) {
                options.effect_speed = options.effectspeed;
                delete options.effectspeed;
            }

            $.extend(settings, options);
        }

        /* Cache container as jQuery as object. */
        $container = settings.container === undefined || settings.container === window ? $window : $(settings.container);

        /* Fire one scroll event per scroll. Not one scroll event per image. */
        var current_scroll = $(window).scrollTop();
        if (0 === settings.event.indexOf("scroll")) {
            $container.off(settings.event).on(settings.event, function () {
                if ($(this).scrollTop() > current_scroll + 100 || $(this).scrollTop() < current_scroll - 100) {
                    current_scroll = $(this).scrollTop();
                    return update();
                } else {
                    return;
                }
            });
        }

        this.each(function () {
            var self = this;
            var $self = $(self);

            self.loaded = false;

            /* If no src attribute given use data:uri. */
            if ($self.attr("src") === undefined || $self.attr("src") === false) {
                if ($self.is("img")) {
                    $self.attr("src", settings.placeholder);
                }
            }

            /* When appear is triggered load original image. */
            $self.one("appear", function () {
                if (!this.loaded) {
                    if (settings.appear) {
                        var elements_left = elements.length;
                        settings.appear.call(self, elements_left, settings);
                    }
                    $("<img />").one("load", function () {
                        var original = $self.attr("data-" + settings.data_attribute);
                        var srcset = $self.attr("data-" + settings.data_srcset);

                        if (original != $self.attr("src")) {
                            //$self.hide();
                            if ($self.is("img")) {
                                $self.attr("src", original);
                                if (srcset != null) {
                                    $self.attr("srcset", srcset);
                                }
                            }
                            //if ($self.is("video")) {
                            //    $self.attr("poster", original);
                            //} else {
                            //$self.css("background-image", "url('" + original + "')");
                            //}
                            //$self[settings.effect](settings.effect_speed);
                        }

                        self.loaded = true;

                        /* Remove image from array so it is not looped next time. */
                        var temp = $.grep(elements, function (element) {
                            return !element.loaded;
                        });
                        elements = $(temp);

                        // appear the same images
                        var same = $.grep(elements, function (element) {
                            if ($(element).attr("data-" + settings.data_attribute) == $self.attr("data-" + settings.data_attribute)) return true;else return false;
                        });
                        $(same).each(function () {
                            $(this).trigger("appear");
                        });

                        if (settings.load) {
                            var elements_left = elements.length;
                            settings.load.call(self, elements_left, settings);
                        }
                    }).attr({
                        "src": $self.attr("data-" + settings.data_attribute),
                        "srcset": $self.attr("data-" + settings.data_srcset) || ""
                    });
                }
            });

            /* When wanted event is triggered load original image */
            /* by triggering appear.                              */
            if (0 !== settings.event.indexOf("scroll")) {
                $self.off(settings.event).on(settings.event, function () {
                    if (!self.loaded) {
                        $self.trigger("appear");
                    }
                });
            }
        });

        /* Check if something appears when window is resized. */
        $window.off("resize.lazyload").bind("resize.lazyload", function () {
            update();
        });

        /* With IOS5 force loading images when navigating with back button. */
        /* Non optimal workaround. */
        if (/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)) {
            $window.on("pageshow", function (event) {
                if (event.originalEvent && event.originalEvent.persisted) {
                    elements.each(function () {
                        $(this).trigger("appear");
                    });
                }
            });
        }

        /* Force initial check if images should appear. */
        $(function () {
            update();
        });

        return this;
    };

    /* Convenience methods in jQuery namespace.           */
    /* Use as  $.belowthefold(element, {threshold : 100, container : window}) */

    $.belowthefold = function (element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = (window.innerHeight ? window.innerHeight : $window.height()) + $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top + $(settings.container).height();
        }

        return fold <= $(element).offset().top - settings.threshold;
    };

    $.rightoffold = function (element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.width() + $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left + $(settings.container).width();
        }

        return fold <= $(element).offset().left - settings.threshold;
    };

    $.abovethetop = function (element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top;
        }

        return fold >= $(element).offset().top + settings.threshold + $(element).height();
    };

    $.leftofbegin = function (element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left;
        }

        return fold >= $(element).offset().left + settings.threshold + $(element).width();
    };

    $.inviewport = function (element, settings) {
        return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) && !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
    };

    /* Custom selectors for your convenience.   */
    /* Use as $("img:below-the-fold").something() or */
    /* $("img").filter(":below-the-fold").something() which is faster */

    $.extend($.expr[":"], {
        "below-the-fold": function (a) {
            return $.belowthefold(a, { threshold: 0 });
        },
        "above-the-top": function (a) {
            return !$.belowthefold(a, { threshold: 0 });
        },
        "right-of-screen": function (a) {
            return $.rightoffold(a, { threshold: 0 });
        },
        "left-of-screen": function (a) {
            return !$.rightoffold(a, { threshold: 0 });
        },
        "in-viewport": function (a) {
            return $.inviewport(a, { threshold: 0 });
        },
        /* Maintain BC for couple of versions. */
        "above-the-fold": function (a) {
            return !$.belowthefold(a, { threshold: 0 });
        },
        "right-of-fold": function (a) {
            return $.rightoffold(a, { threshold: 0 });
        },
        "left-of-fold": function (a) {
            return !$.rightoffold(a, { threshold: 0 });
        }
    });
})(jQuery, window, document);

/***/ }),

/***/ "./js/lib/jquery.magnific-popup.min.js":
/*!*********************************************!*\
  !*** ./js/lib/jquery.magnific-popup.min.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function (a) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (a) {
  var b,
      c,
      d,
      e,
      f,
      g,
      h = "Close",
      i = "BeforeClose",
      j = "AfterClose",
      k = "BeforeAppend",
      l = "MarkupParse",
      m = "Open",
      n = "Change",
      o = "mfp",
      p = "." + o,
      q = "mfp-ready",
      r = "mfp-removing",
      s = "mfp-prevent-close",
      t = function () {},
      u = !!window.jQuery,
      v = a(window),
      w = function (a, c) {
    b.ev.on(o + a + p, c);
  },
      x = function (b, c, d, e) {
    var f = document.createElement("div");return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f;
  },
      y = function (c, d) {
    b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
  },
      z = function (c) {
    return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn;
  },
      A = function () {
    a.magnificPopup.instance || (b = new t(), b.init(), a.magnificPopup.instance = b);
  },
      B = function () {
    var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];if (void 0 !== a.transition) return !0;for (; b.length;) if (b.pop() + "Transition" in a) return !0;return !1;
  };t.prototype = { constructor: t, init: function () {
      var c = navigator.appVersion;b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {};
    }, open: function (c) {
      var e;if (c.isObj === !1) {
        b.items = c.items.toArray(), b.index = 0;var g,
            h = c.items;for (e = 0; e < h.length; e++) if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
          b.index = e;break;
        }
      } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;if (b.isOpen) return void b.updateItemHTML();b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () {
        b.close();
      }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) {
        b._checkIfClose(a.target) && b.close();
      }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));var i = a.magnificPopup.modules;for (e = 0; e < i.length; e++) {
        var j = i[e];j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b);
      }y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) {
        c.close_replaceWith = z(d.type);
      }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({ overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY }) : b.wrap.css({ top: v.scrollTop(), position: "absolute" }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({ height: d.height(), position: "absolute" }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) {
        27 === a.keyCode && b.close();
      }), v.on("resize" + p, function () {
        b.updateSize();
      }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);var k = b.wH = v.height(),
          n = {};if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();o && (n.marginRight = o);
      }b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");var r = b.st.mainClass;return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () {
        b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn);
      }, 16), b.isOpen = !0, b.updateSize(k), y(m), c;
    }, close: function () {
      b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () {
        b._close();
      }, b.st.removalDelay)) : b._close());
    }, _close: function () {
      y(h);var c = r + " " + q + " ";if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
        var e = { marginRight: "" };b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e);
      }d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j);
    }, updateSize: function (a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
            d = window.innerHeight * c;b.wrap.css("height", d), b.wH = d;
      } else b.wH = a || v.height();b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
    }, updateItemHTML: function () {
      var c = b.items[b.index];b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));var d = c.type;if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
        var f = b.st[d] ? b.st[d].markup : !1;y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0;
      }e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange");
    }, appendContent: function (a, c) {
      b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content);
    }, parseEl: function (c) {
      var d,
          e = b.items[c];if (e.tagName ? e = { el: a(e) } : (d = e.type, e = { data: e, src: e.src }), e.el) {
        for (var f = b.types, g = 0; g < f.length; g++) if (e.el.hasClass("mfp-" + f[g])) {
          d = f[g];break;
        }e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"));
      }return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c];
    }, addGroup: function (a, c) {
      var d = function (d) {
        d.mfpEl = this, b._openClick(d, a, c);
      };c || (c = {});var e = "click.magnificPopup";c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)));
    }, _openClick: function (c, d, e) {
      var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
        var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;if (g) if (a.isFunction(g)) {
          if (!g.call(b)) return !0;
        } else if (v.width() < g) return !0;c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e);
      }
    }, updateStatus: function (a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);var e = { status: a, text: d };y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) {
          a.stopImmediatePropagation();
        }), b.container.addClass("mfp-s-" + a), c = a;
      }
    }, _checkIfClose: function (c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
            e = b.st.closeOnBgClick;if (d && e) return !0;if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0;
        } else if (e && a.contains(document, c)) return !0;return !1;
      }
    }, _addClassToMFP: function (a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a);
    }, _removeClassFromMFP: function (a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
    }, _hasScrollBar: function (a) {
      return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height());
    }, _setFocus: function () {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
    }, _onFocusIn: function (c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1);
    }, _parseMarkup: function (b, c, d) {
      var e;d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (c, d) {
        if (void 0 === d || d === !1) return !0;if (e = c.split("_"), e.length > 1) {
          var f = b.find(p + "-" + e[0]);if (f.length > 0) {
            var g = e[1];"replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d);
          }
        } else b.find(p + "-" + c).html(d);
      });
    }, _getScrollbarSize: function () {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a);
      }return b.scrollbarSize;
    } }, a.magnificPopup = { instance: null, proto: t.prototype, modules: [], open: function (b, c) {
      return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b);
    }, close: function () {
      return a.magnificPopup.instance && a.magnificPopup.instance.close();
    }, registerModule: function (b, c) {
      c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b);
    }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 } }, a.fn.magnificPopup = function (c) {
    A();var d = a(this);if ("string" == typeof c) {
      if ("open" === c) {
        var e,
            f = u ? d.data("magnificPopup") : d[0].magnificPopup,
            g = parseInt(arguments[1], 10) || 0;f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({ mfpEl: e }, d, f);
      } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
    } else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);return d;
  };var C,
      D,
      E,
      F = "inline",
      G = function () {
    E && (D.after(E.addClass(C)).detach(), E = null);
  };a.magnificPopup.registerModule(F, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function () {
        b.types.push(F), w(h + "." + F, function () {
          G();
        });
      }, getInline: function (c, d) {
        if (G(), c.src) {
          var e = b.st.inline,
              f = a(c.src);if (f.length) {
            var g = f[0].parentNode;g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready");
          } else b.updateStatus("error", e.tNotFound), f = a("<div>");return c.inlineElement = f, f;
        }return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
      } } });var H,
      I = "ajax",
      J = function () {
    H && a(document.body).removeClass(H);
  },
      K = function () {
    J(), b.req && b.req.abort();
  };a.magnificPopup.registerModule(I, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function () {
        b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K);
      }, getAjax: function (c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");var d = a.extend({ url: c.src, success: function (d, e, f) {
            var g = { data: d, xhr: f };y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () {
              b.wrap.addClass(q);
            }, 16), b.updateStatus("ready"), y("AjaxContentAdded");
          }, error: function () {
            J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src));
          } }, b.st.ajax.settings);return b.req = a.ajax(d), "";
      } } });var L,
      M = function (c) {
    if (c.data && void 0 !== c.data.title) return c.data.title;var d = b.st.image.titleSrc;if (d) {
      if (a.isFunction(d)) return d.call(b, c);if (c.el) return c.el.attr(d) || "";
    }return "";
  };a.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function () {
        var c = b.st.image,
            d = ".image";b.types.push("image"), w(m + d, function () {
          "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor);
        }), w(h + d, function () {
          c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p);
        }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage);
      }, resizeImage: function () {
        var a = b.currItem;if (a && a.img && b.st.image.verticalFit) {
          var c = 0;b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c);
        }
      }, _onImageHasSize: function (a) {
        a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1));
      }, findImageSize: function (a) {
        var c = 0,
            d = a.img[0],
            e = function (f) {
          L && clearInterval(L), L = setInterval(function () {
            return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)));
          }, f);
        };e(1);
      }, getImage: function (c, d) {
        var e = 0,
            f = function () {
          c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()));
        },
            g = function () {
          c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0);
        },
            h = b.st.image,
            i = d.find(".mfp-img");if (i.length) {
          var j = document.createElement("img");j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1);
        }return b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d);
      } } });var N,
      O = function () {
    return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N;
  };a.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function (a) {
        return a.is("img") ? a : a.find("img");
      } }, proto: { initZoom: function () {
        var a,
            c = b.st.zoom,
            d = ".zoom";if (c.enabled && b.supportsTransition) {
          var e,
              f,
              g = c.duration,
              j = function (a) {
            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                f = "transition";return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b;
          },
              k = function () {
            b.content.css("visibility", "visible");
          };w("BuildControls" + d, function () {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () {
                f.css(b._getOffset(!0)), e = setTimeout(function () {
                  k(), setTimeout(function () {
                    f.remove(), a = f = null, y("ZoomAnimationEnded");
                  }, 16);
                }, g);
              }, 16);
            }
          }), w(i + d, function () {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.st.removalDelay = g, !a) {
                if (a = b._getItemToZoom(), !a) return;f = j(a);
              }f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () {
                f.css(b._getOffset());
              }, 16);
            }
          }), w(h + d, function () {
            b._allowZoom() && (k(), f && f.remove(), a = null);
          });
        }
      }, _allowZoom: function () {
        return "image" === b.currItem.type;
      }, _getItemToZoom: function () {
        return b.currItem.hasSize ? b.currItem.img : !1;
      }, _getOffset: function (c) {
        var d;d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);var e = d.offset(),
            f = parseInt(d.css("padding-top"), 10),
            g = parseInt(d.css("padding-bottom"), 10);e.top -= a(window).scrollTop() - f;var h = { width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f };return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h;
      } } });var P = "iframe",
      Q = "//about:blank",
      R = function (a) {
    if (b.currTemplate[P]) {
      var c = b.currTemplate[P].find("iframe");c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"));
    }
  };a.magnificPopup.registerModule(P, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function () {
        b.types.push(P), w("BeforeChange", function (a, b, c) {
          b !== c && (b === P ? R() : c === P && R(!0));
        }), w(h + "." + P, function () {
          R();
        });
      }, getIframe: function (c, d) {
        var e = c.src,
            f = b.st.iframe;a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0;
        });var g = {};return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d;
      } } });var S = function (a) {
    var c = b.items.length;return a > c - 1 ? a - c : 0 > a ? c + a : a;
  },
      T = function (a, b, c) {
    return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
  };a.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function () {
        var c = b.st.gallery,
            e = ".mfp-gallery";return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () {
          c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () {
            return b.items.length > 1 ? (b.next(), !1) : void 0;
          }), d.on("keydown" + e, function (a) {
            37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
          });
        }), w("UpdateStatus" + e, function (a, c) {
          c.text && (c.text = T(c.text, b.currItem.index, b.items.length));
        }), w(l + e, function (a, d, e, f) {
          var g = b.items.length;e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
        }), w("BuildControls" + e, function () {
          if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
            var d = c.arrowMarkup,
                e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);e.click(function () {
              b.prev();
            }), f.click(function () {
              b.next();
            }), b.container.append(e.add(f));
          }
        }), w(n + e, function () {
          b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () {
            b.preloadNearbyImages(), b._preloadTimeout = null;
          }, 16);
        }), void w(h + e, function () {
          d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null;
        })) : !1;
      }, next: function () {
        b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML();
      }, prev: function () {
        b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML();
      }, goTo: function (a) {
        b.direction = a >= b.index, b.index = a, b.updateItemHTML();
      }, preloadNearbyImages: function () {
        var a,
            c = b.st.gallery.preload,
            d = Math.min(c[0], b.items.length),
            e = Math.min(c[1], b.items.length);for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a);
      }, _preloadItem: function (c) {
        if (c = S(c), !b.items[c].preloaded) {
          var d = b.items[c];d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
            d.hasSize = !0;
          }).on("error.mfploader", function () {
            d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d);
          }).attr("src", d.src)), d.preloaded = !0;
        }
      } } });var U = "retina";a.magnificPopup.registerModule(U, { options: { replaceSrc: function (a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a;
        });
      }, ratio: 1 }, proto: { initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
              c = a.ratio;c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) {
            b.img.css({ "max-width": b.img[0].naturalWidth / c, width: "100%" });
          }), w("ElementParse." + U, function (b, d) {
            d.src = a.replaceSrc(d, c);
          }));
        }
      } } }), A();
});

/***/ }),

/***/ "./js/lib/jquery.mobile-events.min.js":
/*!********************************************!*\
  !*** ./js/lib/jquery.mobile-events.min.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * jQuery Mobile Events
 * by Ben Major
 *
 * Copyright 2011-2017, Ben Major
 * Licensed under the MIT License:
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */


(function (a) {
  function b() {
    var x = j();x !== k && (k = x, g.trigger('orientationchange'));
  }function c(x, y, z, A) {
    var B = z.type;z.type = y, a.event.dispatch.call(x, z, A), z.type = B;
  }a.attrFn = a.attrFn || {};var d = 'ontouchstart' in window,
      f = { tap_pixel_range: 5, swipe_h_threshold: 50, swipe_v_threshold: 50, taphold_threshold: 750, doubletap_int: 500, touch_capable: d, orientation_support: 'orientation' in window && 'onorientationchange' in window, startevent: d ? 'touchstart' : 'mousedown', endevent: d ? 'touchend' : 'mouseup', moveevent: d ? 'touchmove' : 'mousemove', tapevent: d ? 'tap' : 'click', scrollevent: d ? 'touchmove' : 'scroll', hold_timer: null, tap_timer: null };a.isTouchCapable = function () {
    return f.touch_capable;
  }, a.getStartEvent = function () {
    return f.startevent;
  }, a.getEndEvent = function () {
    return f.endevent;
  }, a.getMoveEvent = function () {
    return f.moveevent;
  }, a.getTapEvent = function () {
    return f.tapevent;
  }, a.getScrollEvent = function () {
    return f.scrollevent;
  }, a.each(['tapstart', 'tapend', 'tapmove', 'tap', 'tap2', 'tap3', 'tap4', 'singletap', 'doubletap', 'taphold', 'swipe', 'swipeup', 'swiperight', 'swipedown', 'swipeleft', 'swipeend', 'scrollstart', 'scrollend', 'orientationchange'], function (x, y) {
    a.fn[y] = function (z) {
      return z ? this.on(y, z) : this.trigger(y);
    }, a.attrFn[y] = !0;
  }), a.event.special.tapstart = { setup: function () {
      var x = this,
          y = a(x);y.on(f.startevent, function z(A) {
        if (y.data('callee', z), A.which && 1 !== A.which) return !1;var B = A.originalEvent,
            C = { position: { x: f.touch_capable ? B.touches[0].screenX : A.screenX, y: f.touch_capable ? B.touches[0].screenY : A.screenY }, offset: { x: f.touch_capable ? Math.round(B.changedTouches[0].pageX - (y.offset() ? y.offset().left : 0)) : Math.round(A.pageX - (y.offset() ? y.offset().left : 0)), y: f.touch_capable ? Math.round(B.changedTouches[0].pageY - (y.offset() ? y.offset().top : 0)) : Math.round(A.pageY - (y.offset() ? y.offset().top : 0)) }, time: Date.now(), target: A.target };return c(x, 'tapstart', A, C), !0;
      });
    }, remove: function () {
      a(this).off(f.startevent, a(this).data.callee);
    } }, a.event.special.tapmove = { setup: function () {
      var x = this,
          y = a(x);y.on(f.moveevent, function z(A) {
        y.data('callee', z);var B = A.originalEvent,
            C = { position: { x: f.touch_capable ? B.touches[0].screenX : A.screenX, y: f.touch_capable ? B.touches[0].screenY : A.screenY }, offset: { x: f.touch_capable ? Math.round(B.changedTouches[0].pageX - (y.offset() ? y.offset().left : 0)) : Math.round(A.pageX - (y.offset() ? y.offset().left : 0)), y: f.touch_capable ? Math.round(B.changedTouches[0].pageY - (y.offset() ? y.offset().top : 0)) : Math.round(A.pageY - (y.offset() ? y.offset().top : 0)) }, time: Date.now(), target: A.target };return c(x, 'tapmove', A, C), !0;
      });
    }, remove: function () {
      a(this).off(f.moveevent, a(this).data.callee);
    } }, a.event.special.tapend = { setup: function () {
      var x = this,
          y = a(x);y.on(f.endevent, function z(A) {
        y.data('callee', z);var B = A.originalEvent,
            C = { position: { x: f.touch_capable ? B.changedTouches[0].screenX : A.screenX, y: f.touch_capable ? B.changedTouches[0].screenY : A.screenY }, offset: { x: f.touch_capable ? Math.round(B.changedTouches[0].pageX - (y.offset() ? y.offset().left : 0)) : Math.round(A.pageX - (y.offset() ? y.offset().left : 0)), y: f.touch_capable ? Math.round(B.changedTouches[0].pageY - (y.offset() ? y.offset().top : 0)) : Math.round(A.pageY - (y.offset() ? y.offset().top : 0)) }, time: Date.now(), target: A.target };return c(x, 'tapend', A, C), !0;
      });
    }, remove: function () {
      a(this).off(f.endevent, a(this).data.callee);
    } }, a.event.special.taphold = { setup: function () {
      var z,
          x = this,
          y = a(x),
          A = { x: 0, y: 0 },
          B = 0,
          C = 0;y.on(f.startevent, function D(E) {
        if (E.which && 1 !== E.which) return !1;y.data('tapheld', !1), z = E.target;var F = E.originalEvent,
            G = Date.now(),
            H = { x: f.touch_capable ? F.touches[0].screenX : E.screenX, y: f.touch_capable ? F.touches[0].screenY : E.screenY },
            I = { x: f.touch_capable ? F.touches[0].pageX - F.touches[0].target.offsetLeft : E.offsetX, y: f.touch_capable ? F.touches[0].pageY - F.touches[0].target.offsetTop : E.offsetY };A.x = E.originalEvent.targetTouches ? E.originalEvent.targetTouches[0].pageX : E.pageX, A.y = E.originalEvent.targetTouches ? E.originalEvent.targetTouches[0].pageY : E.pageY, B = A.x, C = A.y;var J = y.parent().data('threshold') ? y.parent().data('threshold') : y.data('threshold'),
            K = 'undefined' != typeof J && !1 !== J && parseInt(J) ? parseInt(J) : f.taphold_threshold;return f.hold_timer = window.setTimeout(function () {
          var L = A.x - B,
              M = A.y - C;if (E.target == z && (A.x == B && A.y == C || L >= -f.tap_pixel_range && L <= f.tap_pixel_range && M >= -f.tap_pixel_range && M <= f.tap_pixel_range)) {
            y.data('tapheld', !0);var N = Date.now(),
                O = { x: f.touch_capable ? F.touches[0].screenX : E.screenX, y: f.touch_capable ? F.touches[0].screenY : E.screenY },
                P = { x: f.touch_capable ? Math.round(F.changedTouches[0].pageX - (y.offset() ? y.offset().left : 0)) : Math.round(E.pageX - (y.offset() ? y.offset().left : 0)), y: f.touch_capable ? Math.round(F.changedTouches[0].pageY - (y.offset() ? y.offset().top : 0)) : Math.round(E.pageY - (y.offset() ? y.offset().top : 0)) },
                R = { startTime: G, endTime: N, startPosition: H, startOffset: I, endPosition: O, endOffset: P, duration: N - G, target: E.target };y.data('callee1', D), c(x, 'taphold', E, R);
          }
        }, K), !0;
      }).on(f.endevent, function D() {
        y.data('callee2', D), y.data('tapheld', !1), window.clearTimeout(f.hold_timer);
      }).on(f.moveevent, function D(E) {
        y.data('callee3', D), B = E.originalEvent.targetTouches ? E.originalEvent.targetTouches[0].pageX : E.pageX, C = E.originalEvent.targetTouches ? E.originalEvent.targetTouches[0].pageY : E.pageY;
      });
    }, remove: function () {
      a(this).off(f.startevent, a(this).data.callee1).off(f.endevent, a(this).data.callee2).off(f.moveevent, a(this).data.callee3);
    } }, a.event.special.doubletap = { setup: function () {
      var z,
          A,
          C,
          D,
          x = this,
          y = a(x),
          B = null,
          E = !1;y.on(f.startevent, function F(G) {
        return G.which && 1 !== G.which ? !1 : (y.data('doubletapped', !1), z = G.target, y.data('callee1', F), C = G.originalEvent, B || (B = { position: { x: f.touch_capable ? C.touches[0].screenX : G.screenX, y: f.touch_capable ? C.touches[0].screenY : G.screenY }, offset: { x: f.touch_capable ? Math.round(C.changedTouches[0].pageX - (y.offset() ? y.offset().left : 0)) : Math.round(G.pageX - (y.offset() ? y.offset().left : 0)), y: f.touch_capable ? Math.round(C.changedTouches[0].pageY - (y.offset() ? y.offset().top : 0)) : Math.round(G.pageY - (y.offset() ? y.offset().top : 0)) }, time: Date.now(), target: G.target, element: G.originalEvent.srcElement, index: a(G.target).index() }), !0);
      }).on(f.endevent, function F(G) {
        var H = Date.now(),
            I = y.data('lastTouch') || H + 1,
            J = H - I;if (window.clearTimeout(A), y.data('callee2', F), J < f.doubletap_int && a(G.target).index() == B.index && 100 < J) {
          y.data('doubletapped', !0), window.clearTimeout(f.tap_timer);var K = { position: { x: f.touch_capable ? G.originalEvent.changedTouches[0].screenX : G.screenX, y: f.touch_capable ? G.originalEvent.changedTouches[0].screenY : G.screenY }, offset: { x: f.touch_capable ? Math.round(C.changedTouches[0].pageX - (y.offset() ? y.offset().left : 0)) : Math.round(G.pageX - (y.offset() ? y.offset().left : 0)), y: f.touch_capable ? Math.round(C.changedTouches[0].pageY - (y.offset() ? y.offset().top : 0)) : Math.round(G.pageY - (y.offset() ? y.offset().top : 0)) }, time: Date.now(), target: G.target, element: G.originalEvent.srcElement, index: a(G.target).index() },
              L = { firstTap: B, secondTap: K, interval: K.time - B.time };E || (c(x, 'doubletap', G, L), B = null), E = !0, D = window.setTimeout(function () {
            E = !1;
          }, f.doubletap_int);
        } else y.data('lastTouch', H), A = window.setTimeout(function () {
          B = null, window.clearTimeout(A);
        }, f.doubletap_int, [G]);y.data('lastTouch', H);
      });
    }, remove: function () {
      a(this).off(f.startevent, a(this).data.callee1).off(f.endevent, a(this).data.callee2);
    } }, a.event.special.singletap = { setup: function () {
      var x = this,
          y = a(x),
          z = null,
          A = null,
          B = { x: 0, y: 0 };y.on(f.startevent, function C(D) {
        return D.which && 1 !== D.which ? !1 : (A = Date.now(), z = D.target, y.data('callee1', C), B.x = D.originalEvent.targetTouches ? D.originalEvent.targetTouches[0].pageX : D.pageX, B.y = D.originalEvent.targetTouches ? D.originalEvent.targetTouches[0].pageY : D.pageY, !0);
      }).on(f.endevent, function C(D) {
        if (y.data('callee2', C), D.target == z) {
          var E = D.originalEvent.changedTouches ? D.originalEvent.changedTouches[0].pageX : D.pageX,
              F = D.originalEvent.changedTouches ? D.originalEvent.changedTouches[0].pageY : D.pageY;f.tap_timer = window.setTimeout(function () {
            var G = B.x - E,
                H = B.y - F;if (!y.data('doubletapped') && !y.data('tapheld') && (B.x == E && B.y == F || G >= -f.tap_pixel_range && G <= f.tap_pixel_range && H >= -f.tap_pixel_range && H <= f.tap_pixel_range)) {
              var I = D.originalEvent,
                  J = { position: { x: f.touch_capable ? I.changedTouches[0].screenX : D.screenX, y: f.touch_capable ? I.changedTouches[0].screenY : D.screenY }, offset: { x: f.touch_capable ? Math.round(I.changedTouches[0].pageX - (y.offset() ? y.offset().left : 0)) : Math.round(D.pageX - (y.offset() ? y.offset().left : 0)), y: f.touch_capable ? Math.round(I.changedTouches[0].pageY - (y.offset() ? y.offset().top : 0)) : Math.round(D.pageY - (y.offset() ? y.offset().top : 0)) }, time: Date.now(), target: D.target };J.time - A < f.taphold_threshold && c(x, 'singletap', D, J);
            }
          }, f.doubletap_int);
        }
      });
    }, remove: function () {
      a(this).off(f.startevent, a(this).data.callee1).off(f.endevent, a(this).data.callee2);
    } }, a.event.special.tap = { setup: function () {
      var B,
          D,
          x = this,
          y = a(x),
          z = !1,
          A = null,
          C = { x: 0, y: 0 };y.on(f.startevent, function E(F) {
        return y.data('callee1', E), F.which && 1 !== F.which ? !1 : (z = !0, C.x = F.originalEvent.targetTouches ? F.originalEvent.targetTouches[0].pageX : F.pageX, C.y = F.originalEvent.targetTouches ? F.originalEvent.targetTouches[0].pageY : F.pageY, B = Date.now(), A = F.target, D = F.originalEvent.targetTouches ? F.originalEvent.targetTouches : [F], !0);
      }).on(f.endevent, function E(F) {
        y.data('callee2', E);var G = F.originalEvent.targetTouches ? F.originalEvent.changedTouches[0].pageX : F.pageX,
            H = F.originalEvent.targetTouches ? F.originalEvent.changedTouches[0].pageY : F.pageY,
            I = C.x - G,
            J = C.y - H;if (A == F.target && z && Date.now() - B < f.taphold_threshold && (C.x == G && C.y == H || I >= -f.tap_pixel_range && I <= f.tap_pixel_range && J >= -f.tap_pixel_range && J <= f.tap_pixel_range)) {
          for (var O, L = F.originalEvent, M = [], N = 0; N < D.length; N++) O = { position: { x: f.touch_capable ? L.changedTouches[N].screenX : F.screenX, y: f.touch_capable ? L.changedTouches[N].screenY : F.screenY }, offset: { x: f.touch_capable ? Math.round(L.changedTouches[N].pageX - (y.offset() ? y.offset().left : 0)) : Math.round(F.pageX - (y.offset() ? y.offset().left : 0)), y: f.touch_capable ? Math.round(L.changedTouches[N].pageY - (y.offset() ? y.offset().top : 0)) : Math.round(F.pageY - (y.offset() ? y.offset().top : 0)) }, time: Date.now(), target: F.target }, M.push(O);c(x, 'tap', F, M);
        }
      });
    }, remove: function () {
      a(this).off(f.startevent, a(this).data.callee1).off(f.endevent, a(this).data.callee2);
    } }, a.event.special.swipe = { setup: function () {
      function x(H) {
        B = a(H.currentTarget), B.data('callee1', x), E.x = H.originalEvent.targetTouches ? H.originalEvent.targetTouches[0].pageX : H.pageX, E.y = H.originalEvent.targetTouches ? H.originalEvent.targetTouches[0].pageY : H.pageY, F.x = E.x, F.y = E.y, C = !0;var I = H.originalEvent;G = { position: { x: f.touch_capable ? I.touches[0].screenX : H.screenX, y: f.touch_capable ? I.touches[0].screenY : H.screenY }, offset: { x: f.touch_capable ? Math.round(I.changedTouches[0].pageX - (B.offset() ? B.offset().left : 0)) : Math.round(H.pageX - (B.offset() ? B.offset().left : 0)), y: f.touch_capable ? Math.round(I.changedTouches[0].pageY - (B.offset() ? B.offset().top : 0)) : Math.round(H.pageY - (B.offset() ? B.offset().top : 0)) }, time: Date.now(), target: H.target };
      }function y(H) {
        B = a(H.currentTarget), B.data('callee2', y), F.x = H.originalEvent.targetTouches ? H.originalEvent.targetTouches[0].pageX : H.pageX, F.y = H.originalEvent.targetTouches ? H.originalEvent.targetTouches[0].pageY : H.pageY;var I,
            J = B.parent().data('xthreshold') ? B.parent().data('xthreshold') : B.data('xthreshold'),
            K = B.parent().data('ythreshold') ? B.parent().data('ythreshold') : B.data('ythreshold'),
            L = 'undefined' != typeof J && !1 !== J && parseInt(J) ? parseInt(J) : f.swipe_h_threshold,
            M = 'undefined' != typeof K && !1 !== K && parseInt(K) ? parseInt(K) : f.swipe_v_threshold;if (E.y > F.y && E.y - F.y > M && (I = 'swipeup'), E.x < F.x && F.x - E.x > L && (I = 'swiperight'), E.y < F.y && F.y - E.y > M && (I = 'swipedown'), E.x > F.x && E.x - F.x > L && (I = 'swipeleft'), void 0 != I && C) {
          E.x = 0, E.y = 0, F.x = 0, F.y = 0, C = !1;var N = H.originalEvent,
              O = { position: { x: f.touch_capable ? N.touches[0].screenX : H.screenX, y: f.touch_capable ? N.touches[0].screenY : H.screenY }, offset: { x: f.touch_capable ? Math.round(N.changedTouches[0].pageX - (B.offset() ? B.offset().left : 0)) : Math.round(H.pageX - (B.offset() ? B.offset().left : 0)), y: f.touch_capable ? Math.round(N.changedTouches[0].pageY - (B.offset() ? B.offset().top : 0)) : Math.round(H.pageY - (B.offset() ? B.offset().top : 0)) }, time: Date.now(), target: H.target },
              P = Math.abs(G.position.x - O.position.x),
              Q = Math.abs(G.position.y - O.position.y),
              R = { startEvnt: G, endEvnt: O, direction: I.replace('swipe', ''), xAmount: P, yAmount: Q, duration: O.time - G.time };D = !0, B.trigger('swipe', R).trigger(I, R);
        }
      }function z(H) {
        B = a(H.currentTarget);var I = '';if (B.data('callee3', z), D) {
          var J = B.data('xthreshold'),
              K = B.data('ythreshold'),
              L = 'undefined' != typeof J && !1 !== J && parseInt(J) ? parseInt(J) : f.swipe_h_threshold,
              M = 'undefined' != typeof K && !1 !== K && parseInt(K) ? parseInt(K) : f.swipe_v_threshold,
              N = H.originalEvent,
              O = { position: { x: f.touch_capable ? N.changedTouches[0].screenX : H.screenX, y: f.touch_capable ? N.changedTouches[0].screenY : H.screenY }, offset: { x: f.touch_capable ? Math.round(N.changedTouches[0].pageX - (B.offset() ? B.offset().left : 0)) : Math.round(H.pageX - (B.offset() ? B.offset().left : 0)), y: f.touch_capable ? Math.round(N.changedTouches[0].pageY - (B.offset() ? B.offset().top : 0)) : Math.round(H.pageY - (B.offset() ? B.offset().top : 0)) }, time: Date.now(), target: H.target };G.position.y > O.position.y && G.position.y - O.position.y > M && (I = 'swipeup'), G.position.x < O.position.x && O.position.x - G.position.x > L && (I = 'swiperight'), G.position.y < O.position.y && O.position.y - G.position.y > M && (I = 'swipedown'), G.position.x > O.position.x && G.position.x - O.position.x > L && (I = 'swipeleft');var P = Math.abs(G.position.x - O.position.x),
              Q = Math.abs(G.position.y - O.position.y),
              R = { startEvnt: G, endEvnt: O, direction: I.replace('swipe', ''), xAmount: P, yAmount: Q, duration: O.time - G.time };B.trigger('swipeend', R);
        }C = !1, D = !1;
      }var G,
          A = this,
          B = a(A),
          C = !1,
          D = !1,
          E = { x: 0, y: 0 },
          F = { x: 0, y: 0 };B.on(f.startevent, x), B.on(f.moveevent, y), B.on(f.endevent, z);
    }, remove: function () {
      a(this).off(f.startevent, a(this).data.callee1).off(f.moveevent, a(this).data.callee2).off(f.endevent, a(this).data.callee3);
    } }, a.event.special.scrollstart = { setup: function () {
      function x(C, D) {
        A = D, c(y, A ? 'scrollstart' : 'scrollend', C);
      }var A,
          B,
          y = this,
          z = a(y);z.on(f.scrollevent, function C(D) {
        z.data('callee', C), A || x(D, !0), clearTimeout(B), B = setTimeout(function () {
          x(D, !1);
        }, 50);
      });
    }, remove: function () {
      a(this).off(f.scrollevent, a(this).data.callee);
    } };var h,
      j,
      k,
      l,
      m,
      g = a(window),
      n = { 0: !0, 180: !0 };if (f.orientation_support) {
    var o = window.innerWidth || g.width(),
        p = window.innerHeight || g.height();l = o > p && o - p > 50, m = n[window.orientation], (l && m || !l && !m) && (n = { 90: !0, '-90': !0 });
  }a.event.special.orientationchange = h = { setup: function () {
      return !f.orientation_support && (k = j(), g.on('throttledresize', b), !0);
    }, teardown: function () {
      return !f.orientation_support && (g.off('throttledresize', b), !0);
    }, add: function (x) {
      var y = x.handler;x.handler = function (z) {
        return z.orientation = j(), y.apply(this, arguments);
      };
    } }, a.event.special.orientationchange.orientation = j = function () {
    var x = !0,
        y = document.documentElement;return x = f.orientation_support ? n[window.orientation] : y && 1.1 > y.clientWidth / y.clientHeight, x ? 'portrait' : 'landscape';
  }, a.event.special.throttledresize = { setup: function () {
      a(this).on('resize', s);
    }, teardown: function () {
      a(this).off('resize', s);
    } };var u,
      v,
      w,
      r = 250,
      s = function () {
    v = Date.now(), w = v - t, w >= r ? (t = v, a(this).trigger('throttledresize')) : (u && window.clearTimeout(u), u = window.setTimeout(b, r - w));
  },
      t = 0;a.each({ scrollend: 'scrollstart', swipeup: 'swipe', swiperight: 'swipe', swipedown: 'swipe', swipeleft: 'swipe', swipeend: 'swipe', tap2: 'tap' }, function (x, y) {
    a.event.special[x] = { setup: function () {
        a(this).on(y, a.noop);
      } };
  });
})(jQuery);

/***/ }),

/***/ "./js/lib/jquery.nivo.slider.js":
/*!**************************************!*\
  !*** ./js/lib/jquery.nivo.slider.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * jQuery Nivo Slider v3.2
 * http://nivo.dev7studios.com
 *
 * Copyright 2012, Dev7studios
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

(function ($) {
    var NivoSlider = function (element, options) {
        // Defaults are below
        var settings = $.extend({}, $.fn.nivoSlider.defaults, options);

        // Useful variables. Play carefully.
        var vars = {
            currentSlide: 0,
            currentImage: '',
            totalSlides: 0,
            running: false,
            paused: false,
            stop: false,
            controlNavEl: false
        };

        // Get this slider
        var slider = $(element);
        slider.data('nivo:vars', vars).addClass('nivoSlider');
        //slider.height(slider.height());

        // Find our slider children
        var kids = slider.children();
        kids.each(function () {
            var child = $(this);
            var link = '';
            if (!child.is('img')) {
                if (child.is('a')) {
                    child.addClass('nivo-imageLink');
                    link = child;
                }
                child = child.find('img:first');
            }
            // Get img width & height
            var childWidth = childWidth === 0 ? child.attr('width') : child.width(),
                childHeight = childHeight === 0 ? child.attr('height') : child.height();

            if (link !== '') {
                link.css('display', 'none');
            }
            child.css('display', 'none');
            vars.totalSlides++;
        });

        // If randomStart
        if (settings.randomStart) {
            settings.startSlide = Math.floor(Math.random() * vars.totalSlides);
        }

        // Set startSlide
        if (settings.startSlide > 0) {
            if (settings.startSlide >= vars.totalSlides) {
                settings.startSlide = vars.totalSlides - 1;
            }
            vars.currentSlide = settings.startSlide;
        }

        // Get initial image
        if ($(kids[vars.currentSlide]).is('img')) {
            vars.currentImage = $(kids[vars.currentSlide]);
        } else {
            vars.currentImage = $(kids[vars.currentSlide]).find('img:first');
        }

        // Show initial link
        if ($(kids[vars.currentSlide]).is('a')) {
            $(kids[vars.currentSlide]).css('display', 'block');
        }

        // Set first background
        var sliderImg = $('<img/>').addClass('nivo-main-image');
        sliderImg.attr('src', vars.currentImage.attr('data-src')).attr('width', vars.currentImage.attr('width')).attr('height', vars.currentImage.attr('height')).attr('alt', vars.currentImage.attr('alt'));
        slider.append(sliderImg);

        // Detect Window Resize
        $(window).resize(function () {
            slider.children('img').width(slider.width());
            sliderImg.attr('src', vars.currentImage.attr('data-src'));
            sliderImg.stop().height('auto');
            $('.nivo-slice').remove();
            $('.nivo-box').remove();
        });

        //Create caption
        slider.append($('<div class="nivo-caption"></div>'));

        // Process caption function
        var processCaption = function (settings) {
            var nivoCaption = $('.nivo-caption', slider);
            if (vars.currentImage.attr('data-title') != '' && vars.currentImage.attr('data-title') != undefined) {
                var title = vars.currentImage.attr('data-title');
                if (title.substr(0, 1) == '#') title = $(title).html();

                if (nivoCaption.css('display') == 'block') {
                    nivoCaption.stop().fadeOut(settings.animSpeed, function () {
                        setTimeout(function () {
                            nivoCaption.html(title);
                            nivoCaption.stop().fadeIn(settings.animSpeed);
                        }, settings.animSpeed);
                    });
                } else {
                    setTimeout(function () {
                        nivoCaption.html(title);
                        nivoCaption.stop().fadeIn(settings.animSpeed);
                    }, settings.animSpeed);
                }
            } else {
                nivoCaption.stop().fadeOut(settings.animSpeed);
            }
        };

        //Process initial  caption
        processCaption(settings);

        // In the words of Super Mario "let's a go!"
        var timer = 0;
        if (!settings.manualAdvance && kids.length > 1) {
            timer = setInterval(function () {
                nivoRun(slider, kids, settings, false);
            }, settings.pauseTime);
        }

        // Add Direction nav
        if (settings.directionNav) {
            slider.append('<div class="nivo-directionNav"><a class="nivo-prevNav"><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></a><a class="nivo-nextNav"><i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a></div>');

            $(slider).on('click', 'a.nivo-prevNav', function () {
                if (vars.running) {
                    return false;
                }
                clearInterval(timer);
                timer = '';
                vars.currentSlide -= 2;
                nivoRun(slider, kids, settings, 'prev');
            });

            $(slider).on('click', 'a.nivo-nextNav', function () {
                if (vars.running) {
                    return false;
                }
                clearInterval(timer);
                timer = '';
                nivoRun(slider, kids, settings, 'next');
            });
        }

        // Add Control nav
        if (settings.controlNav) {
            vars.controlNavEl = $('<div class="nivo-controlNav"></div>');
            slider.append(vars.controlNavEl);
            for (var i = 0; i < kids.length; i++) {
                if (settings.controlNavThumbs) {
                    vars.controlNavEl.addClass('nivo-thumbs-enabled');
                    var child = kids.eq(i);
                    if (!child.is('img')) {
                        child = child.find('img:first');
                    }
                    if (child.attr('data-thumb')) vars.controlNavEl.append('<a class="nivo-control" rel="' + i + '"><img src="' + child.attr('data-thumb') + '" alt="" /></a>');
                } else {
                    vars.controlNavEl.append('<a class="nivo-control" rel="' + i + '">' + (i + 1) + '</a>');
                }
            }

            //Set initial active link
            $('a:eq(' + vars.currentSlide + ')', vars.controlNavEl).addClass('active');

            $('a', vars.controlNavEl).bind('click', function () {
                if (vars.running) return false;
                if ($(this).hasClass('active')) return false;
                clearInterval(timer);
                timer = '';
                sliderImg.attr('src', vars.currentImage.attr('data-src'));
                vars.currentSlide = $(this).attr('rel') - 1;
                nivoRun(slider, kids, settings, 'control');
            });
        }

        //For pauseOnHover setting
        if (settings.pauseOnHover) {
            slider.hover(function () {
                vars.paused = true;
                clearInterval(timer);
                timer = '';
            }, function () {
                vars.paused = false;
                // Restart the timer
                if (timer === '' && !settings.manualAdvance) {
                    timer = setInterval(function () {
                        nivoRun(slider, kids, settings, false);
                    }, settings.pauseTime);
                }
            });
        }

        // Event when Animation finishes
        slider.bind('nivo:animFinished', function () {
            sliderImg.attr('src', vars.currentImage.attr('data-src'));
            vars.running = false;
            // Hide child links
            $(kids).each(function () {
                if ($(this).is('a')) {
                    $(this).css('display', 'none');
                }
            });
            // Show current link
            if ($(kids[vars.currentSlide]).is('a')) {
                $(kids[vars.currentSlide]).css('display', 'block');
            }
            // Restart the timer
            if (timer === '' && !vars.paused && !settings.manualAdvance) {
                timer = setInterval(function () {
                    nivoRun(slider, kids, settings, false);
                }, settings.pauseTime);
            }
            // Trigger the afterChange callback
            settings.afterChange.call(this);
        });

        // Add slices for slice animations
        var createSlices = function (slider, settings, vars) {
            if ($(vars.currentImage).parent().is('a')) $(vars.currentImage).parent().css('display', 'block');
            $('img[src="' + vars.currentImage.attr('data-src') + '"]', slider).not('.nivo-main-image,.nivo-control img').width(slider.width()).css('visibility', 'hidden').show();
            var sliceHeight = $('img[src="' + vars.currentImage.attr('data-src') + '"]', slider).not('.nivo-main-image,.nivo-control img').parent().is('a') ? $('img[src="' + vars.currentImage.attr('data-src') + '"]', slider).not('.nivo-main-image,.nivo-control img').parent().height() : $('img[src="' + vars.currentImage.attr('data-src') + '"]', slider).not('.nivo-main-image,.nivo-control img').height();

            for (var i = 0; i < settings.slices; i++) {
                var sliceWidth = Math.round(slider.width() / settings.slices);

                if (i === settings.slices - 1) {
                    slider.append($('<div class="nivo-slice" name="' + i + '"><img src="' + vars.currentImage.attr('data-src') + '" alt="" style="position:absolute; width:' + slider.width() + 'px; height:auto; display:block !important; top:0; left:-' + (sliceWidth + i * sliceWidth - sliceWidth) + 'px;" width="' + vars.currentImage.attr('width') + '" height="' + vars.currentImage.attr('height') + '" /></div>').css({
                        left: sliceWidth * i + 'px',
                        width: slider.width() - sliceWidth * i + 'px',
                        height: sliceHeight + 'px',
                        opacity: '0',
                        overflow: 'hidden'
                    }));
                } else {
                    slider.append($('<div class="nivo-slice" name="' + i + '"><img src="' + vars.currentImage.attr('data-src') + '" alt="" style="position:absolute; width:' + slider.width() + 'px; height:auto; display:block !important; top:0; left:-' + (sliceWidth + i * sliceWidth - sliceWidth) + 'px;" width="' + vars.currentImage.attr('width') + '" height="' + vars.currentImage.attr('height') + '" /></div>').css({
                        left: sliceWidth * i + 'px',
                        width: sliceWidth + 'px',
                        height: sliceHeight + 'px',
                        opacity: '0',
                        overflow: 'hidden'
                    }));
                }
            }

            $('.nivo-slice', slider).height(sliceHeight);
            sliderImg.stop().animate({
                height: $(vars.currentImage).height()
            }, settings.animSpeed);
        };

        // Add boxes for box animations
        var createBoxes = function (slider, settings, vars) {
            if ($(vars.currentImage).parent().is('a')) $(vars.currentImage).parent().css('display', 'block');
            $('img[src="' + vars.currentImage.attr('data-src') + '"]', slider).not('.nivo-main-image,.nivo-control img').width(slider.width()).css('visibility', 'hidden').show();
            var boxWidth = Math.round(slider.width() / settings.boxCols),
                boxHeight = Math.round($('img[src="' + vars.currentImage.attr('data-src') + '"]', slider).not('.nivo-main-image,.nivo-control img').height() / settings.boxRows);

            for (var rows = 0; rows < settings.boxRows; rows++) {
                for (var cols = 0; cols < settings.boxCols; cols++) {
                    if (cols === settings.boxCols - 1) {
                        slider.append($('<div class="nivo-box" name="' + cols + '" rel="' + rows + '"><img src="' + vars.currentImage.attr('data-src') + '" alt="" style="position:absolute; width:' + slider.width() + 'px; height:auto; display:block; top:-' + boxHeight * rows + 'px; left:-' + boxWidth * cols + 'px;" width="' + vars.currentImage.attr('width') + '" height="' + vars.currentImage.attr('height') + '" /></div>').css({
                            opacity: 0,
                            left: boxWidth * cols + 'px',
                            top: boxHeight * rows + 'px',
                            width: slider.width() - boxWidth * cols + 'px'

                        }));
                        $('.nivo-box[name="' + cols + '"]', slider).height($('.nivo-box[name="' + cols + '"] img', slider).height() + 'px');
                    } else {
                        slider.append($('<div class="nivo-box" name="' + cols + '" rel="' + rows + '"><img src="' + vars.currentImage.attr('data-src') + '" alt="" style="position:absolute; width:' + slider.width() + 'px; height:auto; display:block; top:-' + boxHeight * rows + 'px; left:-' + boxWidth * cols + 'px;" width="' + vars.currentImage.attr('width') + '" height="' + vars.currentImage.attr('height') + '" /></div>').css({
                            opacity: 0,
                            left: boxWidth * cols + 'px',
                            top: boxHeight * rows + 'px',
                            width: boxWidth + 'px'
                        }));
                        $('.nivo-box[name="' + cols + '"]', slider).height($('.nivo-box[name="' + cols + '"] img', slider).height() + 'px');
                    }
                }
            }

            sliderImg.stop().animate({
                height: $(vars.currentImage).height()
            }, settings.animSpeed);
        };

        // Private run method
        var nivoRun = function (slider, kids, settings, nudge) {
            // Get our vars
            var vars = slider.data('nivo:vars');

            // Trigger the lastSlide callback
            if (vars && vars.currentSlide === vars.totalSlides - 1) {
                settings.lastSlide.call(this);
            }

            // Stop
            if ((!vars || vars.stop) && !nudge) {
                return false;
            }

            // Trigger the beforeChange callback
            settings.beforeChange.call(this);

            // Set current background before change
            if (!nudge) {
                sliderImg.attr('src', vars.currentImage.attr('data-src'));
            } else {
                if (nudge === 'prev') {
                    sliderImg.attr('src', vars.currentImage.attr('data-src'));
                }
                if (nudge === 'next') {
                    sliderImg.attr('src', vars.currentImage.attr('data-src'));
                }
            }

            vars.currentSlide++;
            // Trigger the slideshowEnd callback
            if (vars.currentSlide === vars.totalSlides) {
                vars.currentSlide = 0;
                settings.slideshowEnd.call(this);
            }
            if (vars.currentSlide < 0) {
                vars.currentSlide = vars.totalSlides - 1;
            }
            // Set vars.currentImage
            if ($(kids[vars.currentSlide]).is('img')) {
                vars.currentImage = $(kids[vars.currentSlide]);
            } else {
                vars.currentImage = $(kids[vars.currentSlide]).find('img:first');
            }

            // Set active links
            if (settings.controlNav) {
                $('a', vars.controlNavEl).removeClass('active');
                $('a:eq(' + vars.currentSlide + ')', vars.controlNavEl).addClass('active');
            }

            // Process caption
            processCaption(settings);

            // Remove any slices from last transition
            $('.nivo-slice', slider).remove();

            // Remove any boxes from last transition
            $('.nivo-box', slider).remove();

            var currentEffect = settings.effect,
                anims = '';

            // Generate random effect
            if (settings.effect === 'random') {
                anims = new Array('sliceDownRight', 'sliceDownLeft', 'sliceUpRight', 'sliceUpLeft', 'sliceUpDown', 'sliceUpDownLeft', 'fold', 'fade', 'boxRandom', 'boxRain', 'boxRainReverse', 'boxRainGrow', 'boxRainGrowReverse');
                currentEffect = anims[Math.floor(Math.random() * (anims.length + 1))];
                if (currentEffect === undefined) {
                    currentEffect = 'fade';
                }
            }

            // Run random effect from specified set (eg: effect:'fold,fade')
            if (settings.effect.indexOf(',') !== -1) {
                anims = settings.effect.split(',');
                currentEffect = anims[Math.floor(Math.random() * anims.length)];
                if (currentEffect === undefined) {
                    currentEffect = 'fade';
                }
            }

            // Custom transition as defined by "data-transition" attribute
            if (vars.currentImage.attr('data-transition')) {
                currentEffect = vars.currentImage.attr('data-transition');
            }

            // Run effects
            vars.running = true;
            var timeBuff = 0,
                i = 0,
                slices = '',
                firstSlice = '',
                totalBoxes = '',
                boxes = '';

            if (currentEffect === 'sliceDown' || currentEffect === 'sliceDownRight' || currentEffect === 'sliceDownLeft') {
                createSlices(slider, settings, vars);
                timeBuff = 0;
                i = 0;
                slices = $('.nivo-slice', slider);
                if (currentEffect === 'sliceDownLeft') {
                    slices = $('.nivo-slice', slider)._reverse();
                }

                slices.each(function () {
                    var slice = $(this);
                    slice.css({ 'top': '0px' });
                    if (i === settings.slices - 1) {
                        setTimeout(function () {
                            slice.animate({ opacity: '1.0' }, settings.animSpeed, '', function () {
                                slider.trigger('nivo:animFinished');
                            });
                        }, 100 + timeBuff);
                    } else {
                        setTimeout(function () {
                            slice.animate({ opacity: '1.0' }, settings.animSpeed);
                        }, 100 + timeBuff);
                    }
                    timeBuff += 50;
                    i++;
                });
            } else if (currentEffect === 'sliceUp' || currentEffect === 'sliceUpRight' || currentEffect === 'sliceUpLeft') {
                createSlices(slider, settings, vars);
                timeBuff = 0;
                i = 0;
                slices = $('.nivo-slice', slider);
                if (currentEffect === 'sliceUpLeft') {
                    slices = $('.nivo-slice', slider)._reverse();
                }

                slices.each(function () {
                    var slice = $(this);
                    slice.css({ 'bottom': '0px' });
                    if (i === settings.slices - 1) {
                        setTimeout(function () {
                            slice.animate({ opacity: '1.0' }, settings.animSpeed, '', function () {
                                slider.trigger('nivo:animFinished');
                            });
                        }, 100 + timeBuff);
                    } else {
                        setTimeout(function () {
                            slice.animate({ opacity: '1.0' }, settings.animSpeed);
                        }, 100 + timeBuff);
                    }
                    timeBuff += 50;
                    i++;
                });
            } else if (currentEffect === 'sliceUpDown' || currentEffect === 'sliceUpDownRight' || currentEffect === 'sliceUpDownLeft') {
                createSlices(slider, settings, vars);
                timeBuff = 0;
                i = 0;
                var v = 0;
                slices = $('.nivo-slice', slider);
                if (currentEffect === 'sliceUpDownLeft') {
                    slices = $('.nivo-slice', slider)._reverse();
                }

                slices.each(function () {
                    var slice = $(this);
                    if (i === 0) {
                        slice.css('top', '0px');
                        i++;
                    } else {
                        slice.css('bottom', '0px');
                        i = 0;
                    }

                    if (v === settings.slices - 1) {
                        setTimeout(function () {
                            slice.animate({ opacity: '1.0' }, settings.animSpeed, '', function () {
                                slider.trigger('nivo:animFinished');
                            });
                        }, 100 + timeBuff);
                    } else {
                        setTimeout(function () {
                            slice.animate({ opacity: '1.0' }, settings.animSpeed);
                        }, 100 + timeBuff);
                    }
                    timeBuff += 50;
                    v++;
                });
            } else if (currentEffect === 'fold') {
                createSlices(slider, settings, vars);
                timeBuff = 0;
                i = 0;

                $('.nivo-slice', slider).each(function () {
                    var slice = $(this);
                    var origWidth = slice.width();
                    slice.css({ top: '0px', width: '0px' });
                    if (i === settings.slices - 1) {
                        setTimeout(function () {
                            slice.animate({ width: origWidth, opacity: '1.0' }, settings.animSpeed, '', function () {
                                slider.trigger('nivo:animFinished');
                            });
                        }, 100 + timeBuff);
                    } else {
                        setTimeout(function () {
                            slice.animate({ width: origWidth, opacity: '1.0' }, settings.animSpeed);
                        }, 100 + timeBuff);
                    }
                    timeBuff += 50;
                    i++;
                });
            } else if (currentEffect === 'fade') {
                createSlices(slider, settings, vars);

                firstSlice = $('.nivo-slice:first', slider);
                firstSlice.css({
                    'width': slider.width() + 'px'
                });

                firstSlice.animate({ opacity: '1.0' }, settings.animSpeed * 2, '', function () {
                    slider.trigger('nivo:animFinished');
                });
            } else if (currentEffect === 'slideInRight') {
                createSlices(slider, settings, vars);

                firstSlice = $('.nivo-slice:first', slider);
                firstSlice.css({
                    'width': '0px',
                    'opacity': '1'
                });

                firstSlice.animate({ width: slider.width() + 'px' }, settings.animSpeed * 2, '', function () {
                    slider.trigger('nivo:animFinished');
                });
            } else if (currentEffect === 'slideInLeft') {
                createSlices(slider, settings, vars);

                firstSlice = $('.nivo-slice:first', slider);
                firstSlice.css({
                    'width': '0px',
                    'opacity': '1',
                    'left': '',
                    'right': '0px'
                });

                firstSlice.animate({ width: slider.width() + 'px' }, settings.animSpeed * 2, '', function () {
                    // Reset positioning
                    firstSlice.css({
                        'left': '0px',
                        'right': ''
                    });
                    slider.trigger('nivo:animFinished');
                });
            } else if (currentEffect === 'boxRandom') {
                createBoxes(slider, settings, vars);

                totalBoxes = settings.boxCols * settings.boxRows;
                i = 0;
                timeBuff = 0;

                boxes = shuffle($('.nivo-box', slider));
                boxes.each(function () {
                    var box = $(this);
                    if (i === totalBoxes - 1) {
                        setTimeout(function () {
                            box.animate({ opacity: '1' }, settings.animSpeed, '', function () {
                                slider.trigger('nivo:animFinished');
                            });
                        }, 100 + timeBuff);
                    } else {
                        setTimeout(function () {
                            box.animate({ opacity: '1' }, settings.animSpeed);
                        }, 100 + timeBuff);
                    }
                    timeBuff += 20;
                    i++;
                });
            } else if (currentEffect === 'boxRain' || currentEffect === 'boxRainReverse' || currentEffect === 'boxRainGrow' || currentEffect === 'boxRainGrowReverse') {
                createBoxes(slider, settings, vars);

                totalBoxes = settings.boxCols * settings.boxRows;
                i = 0;
                timeBuff = 0;

                // Split boxes into 2D array
                var rowIndex = 0;
                var colIndex = 0;
                var box2Darr = [];
                box2Darr[rowIndex] = [];
                boxes = $('.nivo-box', slider);
                if (currentEffect === 'boxRainReverse' || currentEffect === 'boxRainGrowReverse') {
                    boxes = $('.nivo-box', slider)._reverse();
                }
                boxes.each(function () {
                    box2Darr[rowIndex][colIndex] = $(this);
                    colIndex++;
                    if (colIndex === settings.boxCols) {
                        rowIndex++;
                        colIndex = 0;
                        box2Darr[rowIndex] = [];
                    }
                });

                // Run animation
                for (var cols = 0; cols < settings.boxCols * 2; cols++) {
                    var prevCol = cols;
                    for (var rows = 0; rows < settings.boxRows; rows++) {
                        if (prevCol >= 0 && prevCol < settings.boxCols) {
                            /* Due to some weird JS bug with loop vars 
                            being used in setTimeout, this is wrapped
                            with an anonymous function call */
                            (function (row, col, time, i, totalBoxes) {
                                var box = $(box2Darr[row][col]);
                                var w = box.width();
                                var h = box.height();
                                if (currentEffect === 'boxRainGrow' || currentEffect === 'boxRainGrowReverse') {
                                    box.width(0).height(0);
                                }
                                if (i === totalBoxes - 1) {
                                    setTimeout(function () {
                                        box.animate({ opacity: '1', width: w, height: h }, settings.animSpeed / 1.3, '', function () {
                                            slider.trigger('nivo:animFinished');
                                        });
                                    }, 100 + time);
                                } else {
                                    setTimeout(function () {
                                        box.animate({ opacity: '1', width: w, height: h }, settings.animSpeed / 1.3);
                                    }, 100 + time);
                                }
                            })(rows, prevCol, timeBuff, i, totalBoxes);
                            i++;
                        }
                        prevCol--;
                    }
                    timeBuff += 100;
                }
            }
        };

        // Shuffle an array
        var shuffle = function (arr) {
            for (var j, x, i = arr.length; i; j = parseInt(Math.random() * i, 10), x = arr[--i], arr[i] = arr[j], arr[j] = x);
            return arr;
        };

        // For debugging
        var trace = function (msg) {
            if (this.console && typeof console.log !== 'undefined') {
                console.log(msg);
            }
        };

        // Start / Stop
        this.stop = function () {
            if (!$(element).data('nivo:vars').stop) {
                $(element).data('nivo:vars').stop = true;
                trace('Stop Slider');
            }
        };

        this.start = function () {
            if ($(element).data('nivo:vars').stop) {
                $(element).data('nivo:vars').stop = false;
                trace('Start Slider');
            }
        };

        // Trigger the afterLoad callback
        settings.afterLoad.call(this);

        return this;
    };

    $.fn.nivoSlider = function (options) {
        return this.each(function (key, value) {
            var element = $(this);
            // Return early if this element already has a plugin instance
            if (element.data('nivoslider')) {
                return element.data('nivoslider');
            }
            // Pass options to plugin constructor
            var nivoslider = new NivoSlider(this, options);
            // Store plugin object in this element's data
            element.data('nivoslider', nivoslider);
        });
    };

    //Default settings
    $.fn.nivoSlider.defaults = {
        effect: 'random',
        slices: 15,
        boxCols: 8,
        boxRows: 4,
        animSpeed: 500,
        pauseTime: 3000,
        startSlide: 0,
        directionNav: true,
        controlNav: true,
        controlNavThumbs: false,
        pauseOnHover: true,
        manualAdvance: false,
        prevText: 'Prev',
        nextText: 'Next',
        randomStart: false,
        beforeChange: function () {},
        afterChange: function () {},
        slideshowEnd: function () {},
        lastSlide: function () {},
        afterLoad: function () {}
    };

    $.fn._reverse = [].reverse;
})(jQuery);

/***/ }),

/***/ "./js/lib/jquery.scrollbox.min.js":
/*!****************************************!*\
  !*** ./js/lib/jquery.scrollbox.min.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  $.fn.scrollbox = function (config) {
    var defConfig = { linear: false, startDelay: 2, delay: 3, step: 5, speed: 32, switchItems: 1, direction: "vertical", distance: "auto", autoPlay: true, onMouseOverPause: true, paused: false, queue: null, listElement: "ul", listItemElement: "li", infiniteLoop: true, switchAmount: 0, afterForward: null, afterBackward: null, triggerStackable: false };config = $.extend(defConfig, config);config.scrollOffset = config.direction === "vertical" ? "scrollTop" : "scrollLeft";if (config.queue) {
      config.queue = $("#" + config.queue);
    }return this.each(function () {
      var container = $(this),
          containerUL,
          scrollingId = null,
          nextScrollId = null,
          paused = false,
          releaseStack,
          backward,
          forward,
          resetClock,
          scrollForward,
          scrollBackward,
          forwardHover,
          pauseHover,
          switchCount = 0,
          stackedTriggerIndex = 0;if (config.onMouseOverPause) {
        container.bind("mouseover", function () {
          paused = true;
        });container.bind("mouseout", function () {
          paused = false;
        });
      }containerUL = container.children(config.listElement + ":first-child");if (config.infiniteLoop === false && config.switchAmount === 0) {
        config.switchAmount = containerUL.children().length;
      }scrollForward = function () {
        if (paused) {
          return;
        }var curLi, i, newScrollOffset, scrollDistance, theStep;curLi = containerUL.children(config.listItemElement + ":first-child");scrollDistance = config.distance !== "auto" ? config.distance : config.direction === "vertical" ? curLi.outerHeight(true) : curLi.outerWidth(true);if (!config.linear) {
          theStep = Math.max(3, parseInt((scrollDistance - container[0][config.scrollOffset]) * .3, 10));newScrollOffset = Math.min(container[0][config.scrollOffset] + theStep, scrollDistance);
        } else {
          newScrollOffset = Math.min(container[0][config.scrollOffset] + config.step, scrollDistance);
        }container[0][config.scrollOffset] = newScrollOffset;if (newScrollOffset >= scrollDistance) {
          for (i = 0; i < config.switchItems; i++) {
            if (config.queue && config.queue.find(config.listItemElement).length > 0) {
              containerUL.append(config.queue.find(config.listItemElement)[0]);containerUL.children(config.listItemElement + ":first-child").remove();
            } else {
              containerUL.append(containerUL.children(config.listItemElement + ":first-child"));
            }++switchCount;
          }container[0][config.scrollOffset] = 0;clearInterval(scrollingId);scrollingId = null;if ($.isFunction(config.afterForward)) {
            config.afterForward.call(container, { switchCount: switchCount, currentFirstChild: containerUL.children(config.listItemElement + ":first-child") });
          }if (config.triggerStackable && stackedTriggerIndex !== 0) {
            releaseStack();return;
          }if (config.infiniteLoop === false && switchCount >= config.switchAmount) {
            return;
          }if (config.autoPlay) {
            nextScrollId = setTimeout(forward, config.delay * 1e3);
          }
        }
      };scrollBackward = function () {
        if (paused) {
          return;
        }var curLi, i, newScrollOffset, scrollDistance, theStep;if (container[0][config.scrollOffset] === 0) {
          for (i = 0; i < config.switchItems; i++) {
            containerUL.children(config.listItemElement + ":last-child").insertBefore(containerUL.children(config.listItemElement + ":first-child"));
          }curLi = containerUL.children(config.listItemElement + ":first-child");scrollDistance = config.distance !== "auto" ? config.distance : config.direction === "vertical" ? curLi.height() : curLi.width();container[0][config.scrollOffset] = scrollDistance;
        }if (!config.linear) {
          theStep = Math.max(3, parseInt(container[0][config.scrollOffset] * .3, 10));newScrollOffset = Math.max(container[0][config.scrollOffset] - theStep, 0);
        } else {
          newScrollOffset = Math.max(container[0][config.scrollOffset] - config.step, 0);
        }container[0][config.scrollOffset] = newScrollOffset;if (newScrollOffset === 0) {
          --switchCount;clearInterval(scrollingId);scrollingId = null;if ($.isFunction(config.afterBackward)) {
            config.afterBackward.call(container, { switchCount: switchCount, currentFirstChild: containerUL.children(config.listItemElement + ":first-child") });
          }if (config.triggerStackable && stackedTriggerIndex !== 0) {
            releaseStack();return;
          }if (config.autoPlay) {
            nextScrollId = setTimeout(forward, config.delay * 1e3);
          }
        }
      };releaseStack = function () {
        if (stackedTriggerIndex === 0) {
          return;
        }if (stackedTriggerIndex > 0) {
          stackedTriggerIndex--;nextScrollId = setTimeout(forward, 0);
        } else {
          stackedTriggerIndex++;nextScrollId = setTimeout(backward, 0);
        }
      };forward = function () {
        clearInterval(scrollingId);scrollingId = setInterval(scrollForward, config.speed);
      };backward = function () {
        clearInterval(scrollingId);scrollingId = setInterval(scrollBackward, config.speed);
      };forwardHover = function () {
        config.autoPlay = true;paused = false;clearInterval(scrollingId);scrollingId = setInterval(scrollForward, config.speed);
      };pauseHover = function () {
        paused = true;
      };resetClock = function (delay) {
        config.delay = delay || config.delay;clearTimeout(nextScrollId);if (config.autoPlay) {
          nextScrollId = setTimeout(forward, config.delay * 1e3);
        }
      };if (config.autoPlay) {
        nextScrollId = setTimeout(forward, config.startDelay * 1e3);
      }container.bind("resetClock", function (delay) {
        resetClock(delay);
      });container.bind("forward", function () {
        if (config.triggerStackable) {
          if (scrollingId !== null) {
            stackedTriggerIndex++;
          } else {
            forward();
          }
        } else {
          clearTimeout(nextScrollId);forward();
        }
      });container.bind("backward", function () {
        if (config.triggerStackable) {
          if (scrollingId !== null) {
            stackedTriggerIndex--;
          } else {
            backward();
          }
        } else {
          clearTimeout(nextScrollId);backward();
        }
      });container.bind("pauseHover", function () {
        pauseHover();
      });container.bind("forwardHover", function () {
        forwardHover();
      });container.bind("speedUp", function (event, speed) {
        if (speed === "undefined") {
          speed = Math.max(1, parseInt(config.speed / 2, 10));
        }config.speed = speed;
      });container.bind("speedDown", function (event, speed) {
        if (speed === "undefined") {
          speed = config.speed * 2;
        }config.speed = speed;
      });container.bind("updateConfig", function (event, options) {
        config = $.extend(config, options);
      });
    });
  };
})(jQuery);

/***/ }),

/***/ "./js/lib/jquery.smooth-scroll.min.js":
/*!********************************************!*\
  !*** ./js/lib/jquery.smooth-scroll.min.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery Smooth Scroll - v2.1.2 - 2017-01-19
 * https://github.com/kswedberg/jquery-smooth-scroll
 * Copyright (c) 2017 Karl Swedberg
 * Licensed MIT
 */

!function (a) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (a) {
  var b = "2.1.2",
      c = {},
      d = { exclude: [], excludeWithin: [], offset: 0, direction: "top", delegateSelector: null, scrollElement: null, scrollTarget: null, beforeScroll: function () {}, afterScroll: function () {}, easing: "swing", speed: 400, autoCoefficient: 2, preventDefault: !0 },
      e = function (b) {
    var c = [],
        d = !1,
        e = b.dir && "left" === b.dir ? "scrollLeft" : "scrollTop";return this.each(function () {
      var b = a(this);if (this !== document && this !== window) return !document.scrollingElement || this !== document.documentElement && this !== document.body ? void (b[e]() > 0 ? c.push(this) : (b[e](1), d = b[e]() > 0, d && c.push(this), b[e](0))) : (c.push(document.scrollingElement), !1);
    }), c.length || this.each(function () {
      this === document.documentElement && "smooth" === a(this).css("scrollBehavior") && (c = [this]), c.length || "BODY" !== this.nodeName || (c = [this]);
    }), "first" === b.el && c.length > 1 && (c = [c[0]]), c;
  },
      f = /^([\-\+]=)(\d+)/;a.fn.extend({ scrollable: function (a) {
      var b = e.call(this, { dir: a });return this.pushStack(b);
    }, firstScrollable: function (a) {
      var b = e.call(this, { el: "first", dir: a });return this.pushStack(b);
    }, smoothScroll: function (b, c) {
      if (b = b || {}, "options" === b) return c ? this.each(function () {
        var b = a(this),
            d = a.extend(b.data("ssOpts") || {}, c);a(this).data("ssOpts", d);
      }) : this.first().data("ssOpts");var d = a.extend({}, a.fn.smoothScroll.defaults, b),
          e = function (b) {
        var c = function (a) {
          return a.replace(/(:|\.|\/)/g, "\\$1");
        },
            e = this,
            f = a(this),
            g = a.extend({}, d, f.data("ssOpts") || {}),
            h = d.exclude,
            i = g.excludeWithin,
            j = 0,
            k = 0,
            l = !0,
            m = {},
            n = a.smoothScroll.filterPath(location.pathname),
            o = a.smoothScroll.filterPath(e.pathname),
            p = location.hostname === e.hostname || !e.hostname,
            q = g.scrollTarget || o === n,
            r = c(e.hash);if (r && !a(r).length && (l = !1), g.scrollTarget || p && q && r) {
          for (; l && j < h.length;) f.is(c(h[j++])) && (l = !1);for (; l && k < i.length;) f.closest(i[k++]).length && (l = !1);
        } else l = !1;l && (g.preventDefault && b.preventDefault(), a.extend(m, g, { scrollTarget: g.scrollTarget || r, link: e }), a.smoothScroll(m));
      };return null !== b.delegateSelector ? this.off("click.smoothscroll", b.delegateSelector).on("click.smoothscroll", b.delegateSelector, e) : this.off("click.smoothscroll").on("click.smoothscroll", e), this;
    } });var g = function (a) {
    var b = { relative: "" },
        c = "string" == typeof a && f.exec(a);return "number" == typeof a ? b.px = a : c && (b.relative = c[1], b.px = parseFloat(c[2]) || 0), b;
  };a.smoothScroll = function (b, d) {
    if ("options" === b && "object" == typeof d) return a.extend(c, d);var e,
        f,
        h,
        i,
        j = g(b),
        k = {},
        l = 0,
        m = "offset",
        n = "scrollTop",
        o = {},
        p = {};j.px ? e = a.extend({ link: null }, a.fn.smoothScroll.defaults, c) : (e = a.extend({ link: null }, a.fn.smoothScroll.defaults, b || {}, c), e.scrollElement && (m = "position", "static" === e.scrollElement.css("position") && e.scrollElement.css("position", "relative")), d && (j = g(d))), n = "left" === e.direction ? "scrollLeft" : n, e.scrollElement ? (f = e.scrollElement, j.px || /^(?:HTML|BODY)$/.test(f[0].nodeName) || (l = f[n]())) : f = a("html, body").firstScrollable(e.direction), e.beforeScroll.call(f, e), k = j.px ? j : { relative: "", px: a(e.scrollTarget)[m]() && a(e.scrollTarget)[m]()[e.direction] || 0 }, o[n] = k.relative + (k.px + l + e.offset), h = e.speed, "auto" === h && (i = Math.abs(o[n] - f[n]()), h = i / e.autoCoefficient), p = { duration: h, easing: e.easing, complete: function () {
        e.afterScroll.call(e.link, e);
      } }, e.step && (p.step = e.step), f.length ? f.stop().animate(o, p) : e.afterScroll.call(e.link, e);
  }, a.smoothScroll.version = b, a.smoothScroll.filterPath = function (a) {
    return a = a || "", a.replace(/^\//, "").replace(/(?:index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "");
  }, a.fn.smoothScroll.defaults = d;
});

/***/ }),

/***/ "./js/lib/jquery.sticky.js":
/*!*********************************!*\
  !*** ./js/lib/jquery.sticky.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Sticky Plugin v1.0.4 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 02/14/2011
// Date: 07/20/2015
// Website: http://stickyjs.com/
// Description: Makes an element on the page stick on the screen as you scroll
//              It will only set the 'top' and 'position' of your element, you
//              might need to adjust the width in some cases.

(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  var slice = Array.prototype.slice; // save ref to original slice()
  var splice = Array.prototype.splice; // save ref to original slice()

  var defaults = {
    topSpacing: 0,
    bottomSpacing: 0,
    className: 'is-sticky',
    wrapperClassName: 'sticky-wrapper',
    center: false,
    getWidthFrom: '',
    widthFromWrapper: true, // works only when .getWidthFrom is empty
    responsiveWidth: false,
    zIndex: 'auto'
  },
      $window = $(window),
      $document = $(document),
      sticked = [],
      windowHeight = $window.height(),
      scroller = function () {
    var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = scrollTop > dwh ? dwh - scrollTop : 0;

    for (var i = 0, l = sticked.length; i < l; i++) {
      var s = sticked[i],
          elementTop = s.stickyWrapper.offset().top,
          etse = elementTop - s.topSpacing - extra;

      //update height in case of dynamic content
      s.stickyWrapper.css('height', s.stickyElement.outerHeight());

      if (scrollTop <= etse) {
        if (s.currentTop !== null) {
          s.stickyElement.css({
            'width': '',
            'position': '',
            'top': ''
          });
          s.stickyElement.parent().removeClass(s.className);
          s.stickyElement.trigger('sticky-end', [s]);
          s.currentTop = null;
        }
      } else {
        var newTop = documentHeight - s.stickyElement.outerHeight() - s.topSpacing - s.bottomSpacing - scrollTop - extra;
        if (newTop < 0) {
          newTop = newTop + s.topSpacing;
        } else {
          newTop = s.topSpacing;
        }
        if (s.currentTop !== newTop) {
          var newWidth;
          if (s.getWidthFrom) {
            newWidth = $(s.getWidthFrom).width() || null;
          } else if (s.widthFromWrapper) {
            newWidth = s.stickyWrapper.width();
          }
          if (newWidth == null) {
            newWidth = s.stickyElement.width();
          }
          s.stickyElement.css('width', newWidth).css('position', 'fixed').css('top', newTop);

          s.stickyElement.parent().addClass(s.className);

          if (s.currentTop === null) {
            s.stickyElement.trigger('sticky-start', [s]);
          } else {
            // sticky is started but it have to be repositioned
            s.stickyElement.trigger('sticky-update', [s]);
          }

          if (s.currentTop === s.topSpacing && s.currentTop > newTop || s.currentTop === null && newTop < s.topSpacing) {
            // just reached bottom || just started to stick but bottom is already reached
            s.stickyElement.trigger('sticky-bottom-reached', [s]);
          } else if (s.currentTop !== null && newTop === s.topSpacing && s.currentTop < newTop) {
            // sticky is started && sticked at topSpacing && overflowing from top just finished
            s.stickyElement.trigger('sticky-bottom-unreached', [s]);
          }

          s.currentTop = newTop;
        }

        // Check if sticky has reached end of container and stop sticking
        var stickyWrapperContainer = s.stickyWrapper.parent();
        var unstick = s.stickyElement.offset().top + s.stickyElement.outerHeight() >= stickyWrapperContainer.offset().top + stickyWrapperContainer.outerHeight() && s.stickyElement.offset().top <= s.topSpacing;

        if (unstick) {
          s.stickyElement.css('position', 'absolute').css('top', '').css('bottom', 0);
        } else {
          s.stickyElement.css('position', 'fixed').css('top', newTop).css('bottom', '');
        }
      }
    }
  },
      resizer = function () {
    windowHeight = $window.height();

    for (var i = 0, l = sticked.length; i < l; i++) {
      var s = sticked[i];
      var newWidth = null;
      if (s.getWidthFrom) {
        if (s.responsiveWidth) {
          newWidth = $(s.getWidthFrom).width();
        }
      } else if (s.widthFromWrapper) {
        newWidth = s.stickyWrapper.width();
      }
      if (newWidth != null) {
        s.stickyElement.css('width', newWidth);
      }
    }
  },
      methods = {
    init: function (options) {
      return this.each(function () {
        var o = $.extend({}, defaults, options);
        var stickyElement = $(this);

        var stickyId = stickyElement.attr('id');
        var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName;
        var wrapper = $('<div></div>').attr('id', wrapperId).addClass(o.wrapperClassName);

        stickyElement.wrapAll(function () {
          if ($(this).parent("#" + wrapperId).length == 0) {
            return wrapper;
          }
        });

        var stickyWrapper = stickyElement.parent();

        if (o.center) {
          stickyWrapper.css({ width: stickyElement.outerWidth(), marginLeft: "auto", marginRight: "auto" });
        }

        if (stickyElement.css("float") === "right") {
          stickyElement.css({ "float": "none" }).parent().css({ "float": "right" });
        }

        o.stickyElement = stickyElement;
        o.stickyWrapper = stickyWrapper;
        o.currentTop = null;

        sticked.push(o);

        methods.setWrapperHeight(this);
        methods.setupChangeListeners(this);
      });
    },

    setWrapperHeight: function (stickyElement) {
      var element = $(stickyElement);
      var stickyWrapper = element.parent();
      if (stickyWrapper) {
        stickyWrapper.css('height', element.outerHeight());
      }
    },

    setupChangeListeners: function (stickyElement) {
      if (window.MutationObserver) {
        var mutationObserver = new window.MutationObserver(function (mutations) {
          if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) {
            methods.setWrapperHeight(stickyElement);
          }
        });
        mutationObserver.observe(stickyElement, { subtree: true, childList: true });
      } else {
        if (window.addEventListener) {
          stickyElement.addEventListener('DOMNodeInserted', function () {
            methods.setWrapperHeight(stickyElement);
          }, false);
          stickyElement.addEventListener('DOMNodeRemoved', function () {
            methods.setWrapperHeight(stickyElement);
          }, false);
        } else if (window.attachEvent) {
          stickyElement.attachEvent('onDOMNodeInserted', function () {
            methods.setWrapperHeight(stickyElement);
          });
          stickyElement.attachEvent('onDOMNodeRemoved', function () {
            methods.setWrapperHeight(stickyElement);
          });
        }
      }
    },
    update: scroller,
    unstick: function (options) {
      return this.each(function () {
        var that = this;
        var unstickyElement = $(that);

        var removeIdx = -1;
        var i = sticked.length;
        while (i-- > 0) {
          if (sticked[i].stickyElement.get(0) === that) {
            splice.call(sticked, i, 1);
            removeIdx = i;
          }
        }
        if (removeIdx !== -1) {
          unstickyElement.unwrap();
          unstickyElement.css({
            'width': '',
            'position': '',
            'top': '',
            'float': ''
          });
        }
      });
    }
  };

  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
  if (window.addEventListener) {
    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', resizer, false);
  } else if (window.attachEvent) {
    window.attachEvent('onscroll', scroller);
    window.attachEvent('onresize', resizer);
  }

  $.fn.sticky = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };

  $.fn.unstick = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.unstick.apply(this, arguments);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };
  $(function () {
    setTimeout(scroller, 0);
  });
});

/***/ }),

/***/ "./js/lib/pace.js":
/*!************************!*\
  !*** ./js/lib/pace.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  var AjaxMonitor,
      Bar,
      DocumentMonitor,
      ElementMonitor,
      ElementTracker,
      EventLagMonitor,
      Evented,
      Events,
      NoTargetError,
      Pace,
      RequestIntercept,
      SOURCE_KEYS,
      Scaler,
      SocketRequestTracker,
      XHRRequestTracker,
      animation,
      avgAmplitude,
      bar,
      cancelAnimation,
      cancelAnimationFrame,
      defaultOptions,
      extend,
      extendNative,
      getFromDOM,
      getIntercept,
      handlePushState,
      ignoreStack,
      init,
      now,
      options,
      requestAnimationFrame,
      result,
      runAnimation,
      scalers,
      shouldIgnoreURL,
      shouldTrack,
      source,
      sources,
      uniScaler,
      _WebSocket,
      _XDomainRequest,
      _XMLHttpRequest,
      _i,
      _intercept,
      _len,
      _pushState,
      _ref,
      _ref1,
      _replaceState,
      __slice = [].slice,
      __hasProp = {}.hasOwnProperty,
      __extends = function (child, parent) {
    for (var key in parent) {
      if (__hasProp.call(parent, key)) child[key] = parent[key];
    }function ctor() {
      this.constructor = child;
    }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
  },
      __indexOf = [].indexOf || function (item) {
    for (var i = 0, l = this.length; i < l; i++) {
      if (i in this && this[i] === item) return i;
    }return -1;
  };

  defaultOptions = {
    catchupTime: 100,
    initialRate: .03,
    minTime: 250,
    ghostTime: 100,
    maxProgressPerFrame: 20,
    easeFactor: 1.25,
    startOnPageLoad: false,
    restartOnPushState: false,
    restartOnRequestAfter: false,
    target: 'body',
    elements: {
      checkInterval: 100,
      selectors: ['body']
    },
    eventLag: {
      minSamples: 10,
      sampleCount: 3,
      lagThreshold: 3
    },
    ajax: false
  };

  now = function () {
    var _ref;
    return (_ref = typeof performance !== "undefined" && performance !== null ? typeof performance.now === "function" ? performance.now() : void 0 : void 0) != null ? _ref : +new Date();
  };

  requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

  if (requestAnimationFrame == null) {
    requestAnimationFrame = function (fn) {
      return setTimeout(fn, 50);
    };
    cancelAnimationFrame = function (id) {
      return clearTimeout(id);
    };
  }

  runAnimation = function (fn) {
    var last, tick;
    last = now();
    tick = function () {
      var diff;
      diff = now() - last;
      if (diff >= 33) {
        last = now();
        return fn(diff, function () {
          return requestAnimationFrame(tick);
        });
      } else {
        return setTimeout(tick, 33 - diff);
      }
    };
    return tick();
  };

  result = function () {
    var args, key, obj;
    obj = arguments[0], key = arguments[1], args = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
    if (typeof obj[key] === 'function') {
      return obj[key].apply(obj, args);
    } else {
      return obj[key];
    }
  };

  extend = function () {
    var key, out, source, sources, val, _i, _len;
    out = arguments[0], sources = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    for (_i = 0, _len = sources.length; _i < _len; _i++) {
      source = sources[_i];
      if (source) {
        for (key in source) {
          if (!__hasProp.call(source, key)) continue;
          val = source[key];
          if (out[key] != null && typeof out[key] === 'object' && val != null && typeof val === 'object') {
            extend(out[key], val);
          } else {
            out[key] = val;
          }
        }
      }
    }
    return out;
  };

  avgAmplitude = function (arr) {
    var count, sum, v, _i, _len;
    sum = count = 0;
    for (_i = 0, _len = arr.length; _i < _len; _i++) {
      v = arr[_i];
      sum += Math.abs(v);
      count++;
    }
    return sum / count;
  };

  getFromDOM = function (key, json) {
    var data, e, el;
    if (key == null) {
      key = 'options';
    }
    if (json == null) {
      json = true;
    }
    el = document.querySelector("[data-pace-" + key + "]");
    if (!el) {
      return;
    }
    data = el.getAttribute("data-pace-" + key);
    if (!json) {
      return data;
    }
    try {
      return JSON.parse(data);
    } catch (_error) {
      e = _error;
      return typeof console !== "undefined" && console !== null ? console.error("Error parsing inline pace options", e) : void 0;
    }
  };

  Evented = function () {
    function Evented() {}

    Evented.prototype.on = function (event, handler, ctx, once) {
      var _base;
      if (once == null) {
        once = false;
      }
      if (this.bindings == null) {
        this.bindings = {};
      }
      if ((_base = this.bindings)[event] == null) {
        _base[event] = [];
      }
      return this.bindings[event].push({
        handler: handler,
        ctx: ctx,
        once: once
      });
    };

    Evented.prototype.once = function (event, handler, ctx) {
      return this.on(event, handler, ctx, true);
    };

    Evented.prototype.off = function (event, handler) {
      var i, _ref, _results;
      if (((_ref = this.bindings) != null ? _ref[event] : void 0) == null) {
        return;
      }
      if (handler == null) {
        return delete this.bindings[event];
      } else {
        i = 0;
        _results = [];
        while (i < this.bindings[event].length) {
          if (this.bindings[event][i].handler === handler) {
            _results.push(this.bindings[event].splice(i, 1));
          } else {
            _results.push(i++);
          }
        }
        return _results;
      }
    };

    Evented.prototype.trigger = function () {
      var args, ctx, event, handler, i, once, _ref, _ref1, _results;
      event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if ((_ref = this.bindings) != null ? _ref[event] : void 0) {
        i = 0;
        _results = [];
        while (i < this.bindings[event].length) {
          _ref1 = this.bindings[event][i], handler = _ref1.handler, ctx = _ref1.ctx, once = _ref1.once;
          handler.apply(ctx != null ? ctx : this, args);
          if (once) {
            _results.push(this.bindings[event].splice(i, 1));
          } else {
            _results.push(i++);
          }
        }
        return _results;
      }
    };

    return Evented;
  }();

  Pace = window.Pace || {};

  window.Pace = Pace;

  extend(Pace, Evented.prototype);

  options = Pace.options = extend({}, defaultOptions, window.paceOptions, getFromDOM());

  _ref = ['ajax', 'document', 'eventLag', 'elements'];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    source = _ref[_i];
    if (options[source] === true) {
      options[source] = defaultOptions[source];
    }
  }

  NoTargetError = function (_super) {
    __extends(NoTargetError, _super);

    function NoTargetError() {
      _ref1 = NoTargetError.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    return NoTargetError;
  }(Error);

  Bar = function () {
    function Bar() {
      this.progress = 0;
    }

    Bar.prototype.getElement = function () {
      var targetElement;
      if (this.el == null) {
        targetElement = document.querySelector(options.target);
        if (!targetElement) {
          throw new NoTargetError();
        }
        this.el = document.createElement('div');
        this.el.className = "pace pace-active";
        document.body.className = document.body.className.replace(/pace-done/g, '');
        document.body.className += ' pace-running';
        this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>';
        if (targetElement.firstChild != null) {
          targetElement.insertBefore(this.el, targetElement.firstChild);
        } else {
          targetElement.appendChild(this.el);
        }
      }
      return this.el;
    };

    Bar.prototype.finish = function () {
      var el;
      el = this.getElement();
      el.className = el.className.replace('pace-active', '');
      el.className += ' pace-inactive';
      document.body.className = document.body.className.replace('pace-running', '');
      return document.body.className += ' pace-done';
    };

    Bar.prototype.update = function (prog) {
      this.progress = prog;
      return this.render();
    };

    Bar.prototype.destroy = function () {
      try {
        this.getElement().parentNode.removeChild(this.getElement());
      } catch (_error) {
        NoTargetError = _error;
      }
      return this.el = void 0;
    };

    Bar.prototype.render = function () {
      var el, key, progressStr, transform, _j, _len1, _ref2;
      if (document.querySelector(options.target) == null) {
        return false;
      }
      el = this.getElement();
      transform = "translate3d(" + this.progress + "%, 0, 0)";
      _ref2 = ['webkitTransform', 'msTransform', 'transform'];
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        key = _ref2[_j];
        el.children[0].style[key] = transform;
      }
      if (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) {
        el.children[0].setAttribute('data-progress-text', "" + (this.progress | 0) + "%");
        if (this.progress >= 100) {
          progressStr = '99';
        } else {
          progressStr = this.progress < 10 ? "0" : "";
          progressStr += this.progress | 0;
        }
        el.children[0].setAttribute('data-progress', "" + progressStr);
      }
      return this.lastRenderedProgress = this.progress;
    };

    Bar.prototype.done = function () {
      return this.progress >= 100;
    };

    return Bar;
  }();

  Events = function () {
    function Events() {
      this.bindings = {};
    }

    Events.prototype.trigger = function (name, val) {
      var binding, _j, _len1, _ref2, _results;
      if (this.bindings[name] != null) {
        _ref2 = this.bindings[name];
        _results = [];
        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
          binding = _ref2[_j];
          _results.push(binding.call(this, val));
        }
        return _results;
      }
    };

    Events.prototype.on = function (name, fn) {
      var _base;
      if ((_base = this.bindings)[name] == null) {
        _base[name] = [];
      }
      return this.bindings[name].push(fn);
    };

    return Events;
  }();

  _XMLHttpRequest = window.XMLHttpRequest;

  _XDomainRequest = window.XDomainRequest;

  _WebSocket = window.WebSocket;

  extendNative = function (to, from) {
    var e, key, _results;
    _results = [];
    for (key in from.prototype) {
      try {
        if (to[key] == null && typeof from[key] !== 'function') {
          if (typeof Object.defineProperty === 'function') {
            _results.push(Object.defineProperty(to, key, {
              get: function () {
                return from.prototype[key];
              },
              configurable: true,
              enumerable: true
            }));
          } else {
            _results.push(to[key] = from.prototype[key]);
          }
        } else {
          _results.push(void 0);
        }
      } catch (_error) {
        e = _error;
      }
    }
    return _results;
  };

  ignoreStack = [];

  Pace.ignore = function () {
    var args, fn, ret;
    fn = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    ignoreStack.unshift('ignore');
    ret = fn.apply(null, args);
    ignoreStack.shift();
    return ret;
  };

  Pace.track = function () {
    var args, fn, ret;
    fn = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    ignoreStack.unshift('track');
    ret = fn.apply(null, args);
    ignoreStack.shift();
    return ret;
  };

  shouldTrack = function (method) {
    var _ref2;
    if (method == null) {
      method = 'GET';
    }
    if (ignoreStack[0] === 'track') {
      return 'force';
    }
    if (!ignoreStack.length && options.ajax) {
      if (method === 'socket' && options.ajax.trackWebSockets) {
        return true;
      } else if (_ref2 = method.toUpperCase(), __indexOf.call(options.ajax.trackMethods, _ref2) >= 0) {
        return true;
      }
    }
    return false;
  };

  RequestIntercept = function (_super) {
    __extends(RequestIntercept, _super);

    function RequestIntercept() {
      var monitorXHR,
          _this = this;
      RequestIntercept.__super__.constructor.apply(this, arguments);
      monitorXHR = function (req) {
        var _open;
        _open = req.open;
        return req.open = function (type, url, async) {
          if (shouldTrack(type)) {
            _this.trigger('request', {
              type: type,
              url: url,
              request: req
            });
          }
          return _open.apply(req, arguments);
        };
      };
      window.XMLHttpRequest = function (flags) {
        var req;
        req = new _XMLHttpRequest(flags);
        monitorXHR(req);
        return req;
      };
      try {
        extendNative(window.XMLHttpRequest, _XMLHttpRequest);
      } catch (_error) {}
      if (_XDomainRequest != null) {
        window.XDomainRequest = function () {
          var req;
          req = new _XDomainRequest();
          monitorXHR(req);
          return req;
        };
        try {
          extendNative(window.XDomainRequest, _XDomainRequest);
        } catch (_error) {}
      }
      if (_WebSocket != null && options.ajax.trackWebSockets) {
        window.WebSocket = function (url, protocols) {
          var req;
          if (protocols != null) {
            req = new _WebSocket(url, protocols);
          } else {
            req = new _WebSocket(url);
          }
          if (shouldTrack('socket')) {
            _this.trigger('request', {
              type: 'socket',
              url: url,
              protocols: protocols,
              request: req
            });
          }
          return req;
        };
        try {
          extendNative(window.WebSocket, _WebSocket);
        } catch (_error) {}
      }
    }

    return RequestIntercept;
  }(Events);

  _intercept = null;

  getIntercept = function () {
    if (_intercept == null) {
      _intercept = new RequestIntercept();
    }
    return _intercept;
  };

  shouldIgnoreURL = function (url) {
    var pattern, _j, _len1, _ref2;
    _ref2 = options.ajax.ignoreURLs;
    for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
      pattern = _ref2[_j];
      if (typeof pattern === 'string') {
        if (url.indexOf(pattern) !== -1) {
          return true;
        }
      } else {
        if (pattern.test(url)) {
          return true;
        }
      }
    }
    return false;
  };

  getIntercept().on('request', function (_arg) {
    var after, args, request, type, url;
    type = _arg.type, request = _arg.request, url = _arg.url;
    if (shouldIgnoreURL(url)) {
      return;
    }
    if (!Pace.running && (options.restartOnRequestAfter !== false || shouldTrack(type) === 'force')) {
      args = arguments;
      after = options.restartOnRequestAfter || 0;
      if (typeof after === 'boolean') {
        after = 0;
      }
      return setTimeout(function () {
        var stillActive, _j, _len1, _ref2, _ref3, _results;
        if (type === 'socket') {
          stillActive = request.readyState < 2;
        } else {
          stillActive = 0 < (_ref2 = request.readyState) && _ref2 < 4;
        }
        if (stillActive) {
          Pace.restart();
          _ref3 = Pace.sources;
          _results = [];
          for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {
            source = _ref3[_j];
            if (source instanceof AjaxMonitor) {
              source.watch.apply(source, args);
              break;
            } else {
              _results.push(void 0);
            }
          }
          return _results;
        }
      }, after);
    }
  });

  AjaxMonitor = function () {
    function AjaxMonitor() {
      var _this = this;
      this.elements = [];
      getIntercept().on('request', function () {
        return _this.watch.apply(_this, arguments);
      });
    }

    AjaxMonitor.prototype.watch = function (_arg) {
      var request, tracker, type, url;
      type = _arg.type, request = _arg.request, url = _arg.url;
      if (shouldIgnoreURL(url)) {
        return;
      }
      if (type === 'socket') {
        tracker = new SocketRequestTracker(request);
      } else {
        tracker = new XHRRequestTracker(request);
      }
      return this.elements.push(tracker);
    };

    return AjaxMonitor;
  }();

  XHRRequestTracker = function () {
    function XHRRequestTracker(request) {
      var event,
          size,
          _j,
          _len1,
          _onreadystatechange,
          _ref2,
          _this = this;
      this.progress = 0;
      if (window.ProgressEvent != null) {
        size = null;
        request.addEventListener('progress', function (evt) {
          if (evt.lengthComputable) {
            return _this.progress = 100 * evt.loaded / evt.total;
          } else {
            return _this.progress = _this.progress + (100 - _this.progress) / 2;
          }
        }, false);
        _ref2 = ['load', 'abort', 'timeout', 'error'];
        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
          event = _ref2[_j];
          request.addEventListener(event, function () {
            return _this.progress = 100;
          }, false);
        }
      } else {
        _onreadystatechange = request.onreadystatechange;
        request.onreadystatechange = function () {
          var _ref3;
          if ((_ref3 = request.readyState) === 0 || _ref3 === 4) {
            _this.progress = 100;
          } else if (request.readyState === 3) {
            _this.progress = 50;
          }
          return typeof _onreadystatechange === "function" ? _onreadystatechange.apply(null, arguments) : void 0;
        };
      }
    }

    return XHRRequestTracker;
  }();

  SocketRequestTracker = function () {
    function SocketRequestTracker(request) {
      var event,
          _j,
          _len1,
          _ref2,
          _this = this;
      this.progress = 0;
      _ref2 = ['error', 'open'];
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        event = _ref2[_j];
        request.addEventListener(event, function () {
          return _this.progress = 100;
        }, false);
      }
    }

    return SocketRequestTracker;
  }();

  ElementMonitor = function () {
    function ElementMonitor(options) {
      var selector, _j, _len1, _ref2;
      if (options == null) {
        options = {};
      }
      this.elements = [];
      if (options.selectors == null) {
        options.selectors = [];
      }
      _ref2 = options.selectors;
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        selector = _ref2[_j];
        this.elements.push(new ElementTracker(selector));
      }
    }

    return ElementMonitor;
  }();

  ElementTracker = function () {
    function ElementTracker(selector) {
      this.selector = selector;
      this.progress = 0;
      this.check();
    }

    ElementTracker.prototype.check = function () {
      var _this = this;
      if (document.querySelector(this.selector)) {
        return this.done();
      } else {
        return setTimeout(function () {
          return _this.check();
        }, options.elements.checkInterval);
      }
    };

    ElementTracker.prototype.done = function () {
      return this.progress = 100;
    };

    return ElementTracker;
  }();

  DocumentMonitor = function () {
    DocumentMonitor.prototype.states = {
      loading: 0,
      interactive: 50,
      complete: 100
    };

    function DocumentMonitor() {
      var _onreadystatechange,
          _ref2,
          _this = this;
      this.progress = (_ref2 = this.states[document.readyState]) != null ? _ref2 : 100;
      _onreadystatechange = document.onreadystatechange;
      document.onreadystatechange = function () {
        if (_this.states[document.readyState] != null) {
          _this.progress = _this.states[document.readyState];
        }
        return typeof _onreadystatechange === "function" ? _onreadystatechange.apply(null, arguments) : void 0;
      };
    }

    return DocumentMonitor;
  }();

  EventLagMonitor = function () {
    function EventLagMonitor() {
      var avg,
          interval,
          last,
          points,
          samples,
          _this = this;
      this.progress = 0;
      avg = 0;
      samples = [];
      points = 0;
      last = now();
      interval = setInterval(function () {
        var diff;
        diff = now() - last - 50;
        last = now();
        samples.push(diff);
        if (samples.length > options.eventLag.sampleCount) {
          samples.shift();
        }
        avg = avgAmplitude(samples);
        if (++points >= options.eventLag.minSamples && avg < options.eventLag.lagThreshold) {
          _this.progress = 100;
          return clearInterval(interval);
        } else {
          return _this.progress = 100 * (3 / (avg + 3));
        }
      }, 50);
    }

    return EventLagMonitor;
  }();

  Scaler = function () {
    function Scaler(source) {
      this.source = source;
      this.last = this.sinceLastUpdate = 0;
      this.rate = options.initialRate;
      this.catchup = 0;
      this.progress = this.lastProgress = 0;
      if (this.source != null) {
        this.progress = result(this.source, 'progress');
      }
    }

    Scaler.prototype.tick = function (frameTime, val) {
      var scaling;
      if (val == null) {
        val = result(this.source, 'progress');
      }
      if (val >= 100) {
        this.done = true;
      }
      if (val === this.last) {
        this.sinceLastUpdate += frameTime;
      } else {
        if (this.sinceLastUpdate) {
          this.rate = (val - this.last) / this.sinceLastUpdate;
        }
        this.catchup = (val - this.progress) / options.catchupTime;
        this.sinceLastUpdate = 0;
        this.last = val;
      }
      if (val > this.progress) {
        this.progress += this.catchup * frameTime;
      }
      scaling = 1 - Math.pow(this.progress / 100, options.easeFactor);
      this.progress += scaling * this.rate * frameTime;
      this.progress = Math.min(this.lastProgress + options.maxProgressPerFrame, this.progress);
      this.progress = Math.max(0, this.progress);
      this.progress = Math.min(100, this.progress);
      this.lastProgress = this.progress;
      return this.progress;
    };

    return Scaler;
  }();

  sources = null;

  scalers = null;

  bar = null;

  uniScaler = null;

  animation = null;

  cancelAnimation = null;

  Pace.running = false;

  handlePushState = function () {
    if (options.restartOnPushState) {
      return Pace.restart();
    }
  };

  if (window.history.pushState != null) {
    _pushState = window.history.pushState;
    window.history.pushState = function () {
      handlePushState();
      return _pushState.apply(window.history, arguments);
    };
  }

  if (window.history.replaceState != null) {
    _replaceState = window.history.replaceState;
    window.history.replaceState = function () {
      handlePushState();
      return _replaceState.apply(window.history, arguments);
    };
  }

  SOURCE_KEYS = {
    ajax: AjaxMonitor,
    elements: ElementMonitor,
    document: DocumentMonitor,
    eventLag: EventLagMonitor
  };

  (init = function () {
    var type, _j, _k, _len1, _len2, _ref2, _ref3, _ref4;
    Pace.sources = sources = [];
    _ref2 = ['ajax', 'elements', 'document', 'eventLag'];
    for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
      type = _ref2[_j];
      if (options[type] !== false) {
        sources.push(new SOURCE_KEYS[type](options[type]));
      }
    }
    _ref4 = (_ref3 = options.extraSources) != null ? _ref3 : [];
    for (_k = 0, _len2 = _ref4.length; _k < _len2; _k++) {
      source = _ref4[_k];
      sources.push(new source(options));
    }
    Pace.bar = bar = new Bar();
    scalers = [];
    return uniScaler = new Scaler();
  })();

  Pace.stop = function () {
    Pace.trigger('stop');
    Pace.running = false;
    bar.destroy();
    cancelAnimation = true;
    if (animation != null) {
      if (typeof cancelAnimationFrame === "function") {
        cancelAnimationFrame(animation);
      }
      animation = null;
    }
    return init();
  };

  Pace.restart = function () {
    Pace.trigger('restart');
    Pace.stop();
    return Pace.start();
  };

  Pace.go = function () {
    var start;
    Pace.running = true;
    bar.render();
    start = now();
    cancelAnimation = false;
    return animation = runAnimation(function (frameTime, enqueueNextFrame) {
      var avg, count, done, element, elements, i, j, remaining, scaler, scalerList, sum, _j, _k, _len1, _len2, _ref2;
      remaining = 100 - bar.progress;
      count = sum = 0;
      done = true;
      for (i = _j = 0, _len1 = sources.length; _j < _len1; i = ++_j) {
        source = sources[i];
        scalerList = scalers[i] != null ? scalers[i] : scalers[i] = [];
        elements = (_ref2 = source.elements) != null ? _ref2 : [source];
        for (j = _k = 0, _len2 = elements.length; _k < _len2; j = ++_k) {
          element = elements[j];
          scaler = scalerList[j] != null ? scalerList[j] : scalerList[j] = new Scaler(element);
          done &= scaler.done;
          if (scaler.done) {
            continue;
          }
          count++;
          sum += scaler.tick(frameTime);
        }
      }
      avg = sum / count;
      bar.update(uniScaler.tick(frameTime, avg));
      if (bar.done() || done || cancelAnimation) {
        bar.update(100);
        Pace.trigger('done');
        return setTimeout(function () {
          bar.finish();
          Pace.running = false;
          return Pace.trigger('hide');
        }, Math.max(options.ghostTime, Math.max(options.minTime - (now() - start), 0)));
      } else {
        return enqueueNextFrame();
      }
    });
  };

  Pace.start = function (_options) {
    extend(options, _options);
    Pace.running = true;
    try {
      bar.render();
    } catch (_error) {
      NoTargetError = _error;
    }
    if (!document.querySelector('.pace')) {
      return setTimeout(Pace.start, 50);
    } else {
      Pace.trigger('start');
      return Pace.go();
    }
  };
})(jQuery);

/***/ }),

/***/ "./js/lib/slick.js":
/*!*************************!*\
  !*** ./js/lib/slick.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
(function (factory) {
    'use strict';

    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})(function ($) {
    'use strict';

    var Slick = window.Slick || {};

    Slick = function () {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this,
                dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" tabindex="0" role="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function (slider, i) {
                    return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;

            _.registerBreakpoints();
            _.init(true);
        }

        return Slick;
    }();

    Slick.prototype.activateADA = function () {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });
    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {

        var _ = this;

        if (typeof index === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || index >= _.slideCount) {
            return false;
        }

        _.unload();

        if (typeof index === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function (index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();
    };

    Slick.prototype.animateHeight = function () {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function (targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }
        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -_.currentLeft;
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function (now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' + now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' + now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function () {
                        if (callback) {
                            callback.call();
                        }
                    }
                });
            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function () {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }
            }
        }
    };

    Slick.prototype.getNavTarget = function () {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if (asNavFor && asNavFor !== null) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;
    };

    Slick.prototype.asNavFor = function (index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if (asNavFor !== null && typeof asNavFor === 'object') {
            asNavFor.each(function () {
                var target = $(this).slick('getSlick');
                if (!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }
    };

    Slick.prototype.applyTransition = function (slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }
    };

    Slick.prototype.autoPlay = function () {

        var _ = this;

        _.autoPlayClear();

        if (_.slideCount > _.options.slidesToShow) {
            _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
        }
    };

    Slick.prototype.autoPlayClear = function () {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }
    };

    Slick.prototype.autoPlayIterator = function () {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if (!_.paused && !_.interrupted && !_.focussed) {

            if (_.options.infinite === false) {

                if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
                    _.direction = 0;
                } else if (_.direction === 0) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if (_.currentSlide - 1 === 0) {
                        _.direction = 1;
                    }
                }
            }

            _.slideHandler(slideTo);
        }
    };

    Slick.prototype.buildArrows = function () {

        var _ = this;

        if (_.options.arrows === true) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if (_.slideCount > _.options.slidesToShow) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                }
            } else {

                _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({
                    'aria-disabled': 'true',
                    'tabindex': '-1'
                });
            }
        }
    };

    Slick.prototype.buildDots = function () {

        var _ = this,
            i,
            dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');
        }
    };

    Slick.prototype.buildOut = function () {

        var _ = this;

        _.$slides = _.$slider.children(_.options.slide + ':not(.slick-cloned)').addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function (index, element) {
            $(element).attr('data-slick-index', index).data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = _.slideCount === 0 ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }
    };

    Slick.prototype.buildRows = function () {

        var _ = this,
            a,
            b,
            c,
            newSlides,
            numOfSlides,
            originalSlides,
            slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if (_.options.rows > 1) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);

            for (a = 0; a < numOfSlides; a++) {
                var slide = document.createElement('div');
                for (b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for (c = 0; c < _.options.slidesPerRow; c++) {
                        var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children().css({
                'width': 100 / _.options.slidesPerRow + '%',
                'display': 'inline-block'
            });
        }
    };

    Slick.prototype.checkResponsive = function (initial, forceUpdate) {

        var _ = this,
            breakpoint,
            targetBreakpoint,
            respondToWidth,
            triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint = targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if (!initial && triggerBreakpoint !== false) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }
    };

    Slick.prototype.changeSlide = function (event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset,
            slideOffset,
            unevenOffset;

        // If target is a link, prevent default action.
        if ($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if (!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }
    };

    Slick.prototype.checkNavigable = function (index) {

        var _ = this,
            navigables,
            prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function () {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots).off('click.slick', _.changeSlide).off('mouseenter.slick', $.proxy(_.interrupt, _, true)).off('mouseleave.slick', $.proxy(_.interrupt, _, false));
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);
    };

    Slick.prototype.cleanUpSlideEvents = function () {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
    };

    Slick.prototype.cleanUpRows = function () {

        var _ = this,
            originalSlides;

        if (_.options.rows > 1) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }
    };

    Slick.prototype.clickHandler = function (event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }
    };

    Slick.prototype.destroy = function (refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.$prevArrow.length) {

            _.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

            if (_.htmlExpr.test(_.options.prevArrow)) {
                _.$prevArrow.remove();
            }
        }

        if (_.$nextArrow && _.$nextArrow.length) {

            _.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

            if (_.htmlExpr.test(_.options.nextArrow)) {
                _.$nextArrow.remove();
            }
        }

        if (_.$slides) {

            _.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function () {
                $(this).attr('style', $(this).data('originalStyling'));
            });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if (!refresh) {
            _.$slider.trigger('destroy', [_]);
        }
    };

    Slick.prototype.disableTransition = function (slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }
    };

    Slick.prototype.fadeSlide = function (slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);
        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function () {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }
        }
    };

    Slick.prototype.fadeSlideOut = function (slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);
        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });
        }
    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();
        }
    };

    Slick.prototype.focusHandler = function () {

        var _ = this;

        _.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*:not(.slick-arrow)', function (event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function () {

                if (_.options.pauseOnFocus) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }
            }, 0);
        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {

        var _ = this;
        return _.currentSlide;
    };

    Slick.prototype.getDotCount = function () {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if (!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        } else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;
    };

    Slick.prototype.getLeft = function (slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
                verticalOffset = verticalHeight * _.options.slidesToShow * -1;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;
                        verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1;
                    } else {
                        _.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1;
                        verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
                verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
        } else {
            targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft = 0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft = 0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;
    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {

        var _ = this;

        return _.options[option];
    };

    Slick.prototype.getNavigableIndexes = function () {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;
    };

    Slick.prototype.getSlick = function () {

        return this;
    };

    Slick.prototype.getSlideCount = function () {

        var _ = this,
            slidesTraversed,
            swipedSlide,
            centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function (index, slide) {
                if (slide.offsetLeft - centerOffset + $(slide).outerWidth() / 2 > _.swipeLeft * -1) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;
        } else {
            return _.options.slidesToScroll;
        }
    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);
    };

    Slick.prototype.init = function (creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();
        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if (_.options.autoplay) {

            _.paused = false;
            _.autoPlay();
        }
    };

    Slick.prototype.initADA = function () {
        var _ = this;
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        _.$slideTrack.attr('role', 'listbox');

        _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
            $(this).attr({
                'role': 'option'
            });
        });

        if (_.$dots !== null) {
            _.$dots.find('li').each(function (i) {
                $(this).attr({
                    'id': 'slick-slide' + _.instanceUid + i + ''
                });
            }).end().find('button').attr('role', 'button').end().closest('div').attr('role', 'toolbar');
        }
        _.activateADA();
    };

    Slick.prototype.initArrowEvents = function () {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.off('click.slick').on('click.slick', {
                message: 'previous'
            }, _.changeSlide);
            _.$nextArrow.off('click.slick').on('click.slick', {
                message: 'next'
            }, _.changeSlide);
        }
    };

    Slick.prototype.initDotEvents = function () {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true) {

            $('li', _.$dots).on('mouseenter.slick', $.proxy(_.interrupt, _, true)).on('mouseleave.slick', $.proxy(_.interrupt, _, false));
        }
    };

    Slick.prototype.initSlideEvents = function () {

        var _ = this;

        if (_.options.pauseOnHover) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
        }
    };

    Slick.prototype.initializeEvents = function () {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);
    };

    Slick.prototype.initUI = function () {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();
        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();
        }
    };

    Slick.prototype.keyHandler = function (event) {

        var _ = this;
        //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' : 'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }
    };

    Slick.prototype.lazyLoad = function () {

        var _ = this,
            loadRange,
            cloneRange,
            rangeStart,
            rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function () {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function () {

                    /*image
                        .animate({ opacity: 0 }, 100, function() {
                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });*/
                    image.attr('src', imageSource).removeAttr('data-lazy').removeClass('slick-loading');
                    _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                };

                imageToLoad.onerror = function () {

                    image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

                    _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
                };

                imageToLoad.src = imageSource;
            });
        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }
    };

    Slick.prototype.loadSlider = function () {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }
    };

    Slick.prototype.next = Slick.prototype.slickNext = function () {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });
    };

    Slick.prototype.orientationChange = function () {

        var _ = this;

        _.checkResponsive();
        _.setPosition();
    };

    Slick.prototype.pause = Slick.prototype.slickPause = function () {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;
    };

    Slick.prototype.play = Slick.prototype.slickPlay = function () {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;
    };

    Slick.prototype.postSlide = function (index) {

        var _ = this;

        if (!_.unslicked) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            _.setPosition();

            _.swipeLeft = null;

            if (_.options.autoplay) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();
            }
        }
    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function () {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });
    };

    Slick.prototype.preventDefault = function (event) {

        event.preventDefault();
    };

    Slick.prototype.progressiveLazyLoad = function (tryCount) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $('img[data-lazy]', _.$slider),
            image,
            imageSource,
            imageToLoad;

        if ($imgsToLoad.length) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function () {

                image.attr('src', imageSource).removeAttr('data-lazy').removeClass('slick-loading');

                if (_.options.adaptiveHeight === true) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                _.progressiveLazyLoad();
            };

            imageToLoad.onerror = function () {

                if (tryCount < 3) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout(function () {
                        _.progressiveLazyLoad(tryCount + 1);
                    }, 500);
                } else {

                    image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

                    _.$slider.trigger('lazyLoadError', [_, image, imageSource]);

                    _.progressiveLazyLoad();
                }
            };

            imageToLoad.src = imageSource;
        } else {

            _.$slider.trigger('allImagesLoaded', [_]);
        }
    };

    Slick.prototype.refresh = function (initializing) {

        var _ = this,
            currentSlide,
            lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if (!initializing) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);
        }
    };

    Slick.prototype.registerBreakpoints = function () {

        var _ = this,
            breakpoint,
            currentBreakpoint,
            l,
            responsiveSettings = _.options.responsive || null;

        if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {

            _.respondTo = _.options.respondTo || 'window';

            for (breakpoint in responsiveSettings) {

                l = _.breakpoints.length - 1;
                currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while (l >= 0) {
                        if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
                            _.breakpoints.splice(l, 1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
                }
            }

            _.breakpoints.sort(function (a, b) {
                return _.options.mobileFirst ? a - b : b - a;
            });
        }
    };

    Slick.prototype.reinit = function () {

        var _ = this;

        _.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);
    };

    Slick.prototype.resize = function () {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function () {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if (!_.unslicked) {
                    _.setPosition();
                }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {

        var _ = this;

        if (typeof index === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();
    };

    Slick.prototype.setCSS = function (position) {

        var _ = this,
            positionProps = {},
            x,
            y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }
    };

    Slick.prototype.setDimensions = function () {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: '0px ' + _.options.centerPadding
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: _.options.centerPadding + ' 0px'
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();

        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = _.listWidth / _.options.slidesToShow;
            _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children('.slick-slide').length));
        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
    };

    Slick.prototype.setFade = function () {

        var _ = this,
            targetLeft;

        _.$slides.each(function (index, element) {
            targetLeft = _.slideWidth * index * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });
    };

    Slick.prototype.setHeight = function () {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }
    };

    Slick.prototype.setOption = Slick.prototype.slickSetOption = function () {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this,
            l,
            item,
            option,
            value,
            refresh = false,
            type;

        if ($.type(arguments[0]) === 'object') {

            option = arguments[0];
            refresh = arguments[1];
            type = 'multiple';
        } else if ($.type(arguments[0]) === 'string') {

            option = arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {

                type = 'responsive';
            } else if (typeof arguments[1] !== 'undefined') {

                type = 'single';
            }
        }

        if (type === 'single') {

            _.options[option] = value;
        } else if (type === 'multiple') {

            $.each(option, function (opt, val) {

                _.options[opt] = val;
            });
        } else if (type === 'responsive') {

            for (item in value) {

                if ($.type(_.options.responsive) !== 'array') {

                    _.options.responsive = [value[item]];
                } else {

                    l = _.options.responsive.length - 1;

                    // loop through the responsive object and splice out duplicates.
                    while (l >= 0) {

                        if (_.options.responsive[l].breakpoint === value[item].breakpoint) {

                            _.options.responsive.splice(l, 1);
                        }

                        l--;
                    }

                    _.options.responsive.push(value[item]);
                }
            }
        }

        if (refresh) {

            _.unload();
            _.reinit();
        }
    };

    Slick.prototype.setPosition = function () {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);
    };

    Slick.prototype.setProps = function () {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if (_.options.fade) {
            if (typeof _.options.zIndex === 'number') {
                if (_.options.zIndex < 3) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && _.animType !== null && _.animType !== false;
    };

    Slick.prototype.setSlideClasses = function (index) {

        var _ = this,
            centerOffset,
            allSlides,
            indexOffset,
            remainder;

        allSlides = _.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true');

        _.$slides.eq(index).addClass('slick-current');

        if (_.options.centerMode === true) {

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {

                    _.$slides.slice(index - centerOffset, index + centerOffset + 1).addClass('slick-active').attr('aria-hidden', 'false');
                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides.slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2).addClass('slick-active').attr('aria-hidden', 'false');
                }

                if (index === 0) {

                    allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
                } else if (index === _.slideCount - 1) {

                    allSlides.eq(_.options.slidesToShow).addClass('slick-center');
                }
            }

            _.$slides.eq(index).addClass('slick-center');
        } else {

            if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {

                _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides.addClass('slick-active').attr('aria-hidden', 'false');
            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) {

                    allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass('slick-active').attr('aria-hidden', 'false');
                } else {

                    allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
                }
            }
        }

        if (_.options.lazyLoad === 'ondemand') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function () {

        var _ = this,
            i,
            slideIndex,
            infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
                    $(this).attr('id', '');
                });
            }
        }
    };

    Slick.prototype.interrupt = function (toggle) {

        var _ = this;

        if (!toggle) {
            _.autoPlay();
        }
        _.interrupted = toggle;
    };

    Slick.prototype.selectHandler = function (event) {

        var _ = this;

        var targetElement = $(event.target).is('.slick-slide') ? $(event.target) : $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.setSlideClasses(index);
            _.asNavFor(index);
            return;
        }

        _.slideHandler(index);
    };

    Slick.prototype.slideHandler = function (index, sync, dontAnimate) {

        var targetSlide,
            animSlide,
            oldSlide,
            slideLeft,
            targetLeft = null,
            _ = this,
            navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function () {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function () {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if (_.options.autoplay) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - _.slideCount % _.options.slidesToScroll;
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        //_.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if (_.options.asNavFor) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if (navTarget.slideCount <= navTarget.options.slidesToShow) {
                navTarget.setSlideClasses(_.currentSlide);
            }
        }

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function () {
                    _.postSlide(animSlide);
                });
            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true) {
            _.animateSlide(targetLeft, function () {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }
    };

    Slick.prototype.startLoad = function () {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();
        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();
        }

        _.$slider.addClass('slick-loading');
    };

    Slick.prototype.swipeDirection = function () {

        var xDist,
            yDist,
            r,
            swipeAngle,
            _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if (swipeAngle <= 45 && swipeAngle >= 0) {
            return _.options.rtl === false ? 'left' : 'right';
        }
        if (swipeAngle <= 360 && swipeAngle >= 315) {
            return _.options.rtl === false ? 'left' : 'right';
        }
        if (swipeAngle >= 135 && swipeAngle <= 225) {
            return _.options.rtl === false ? 'right' : 'left';
        }
        if (_.options.verticalSwiping === true) {
            if (swipeAngle >= 35 && swipeAngle <= 135) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';
    };

    Slick.prototype.swipeEnd = function (event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.interrupted = false;
        _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;

        if (_.touchObject.curX === undefined) {
            return false;
        }

        if (_.touchObject.edgeHit === true) {
            _.$slider.trigger('edge', [_, _.swipeDirection()]);
        }

        if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {

            direction = _.swipeDirection();

            switch (direction) {

                case 'left':
                case 'down':

                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:

            }

            if (direction != 'vertical') {

                _.slideHandler(slideCount);
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction]);
            }
        } else {

            if (_.touchObject.startX !== _.touchObject.curX) {

                _.slideHandler(_.currentSlide);
                _.touchObject = {};
            }
        }
    };

    Slick.prototype.swipeHandler = function (event) {

        var _ = this;

        if (_.options.swipe === false || 'ontouchend' in document && _.options.swipe === false) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }
    };

    Slick.prototype.swipeMove = function (event) {

        var _ = this,
            edgeWasHit = false,
            curLeft,
            swipeDirection,
            swipeLength,
            positionOffset,
            touches;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
        }

        swipeDirection = _.swipeDirection();

        if (swipeDirection === 'vertical') {
            return;
        }

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }

        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if (_.currentSlide === 0 && swipeDirection === 'right' || _.currentSlide >= _.getDotCount() && swipeDirection === 'left') {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);
    };

    Slick.prototype.swipeStart = function (event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;
    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();
        }
    };

    Slick.prototype.unload = function () {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
    };

    Slick.prototype.unslick = function (fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();
    };

    Slick.prototype.updateArrows = function () {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            }
        }
    };

    Slick.prototype.updateDots = function () {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots.find('li').removeClass('slick-active').attr('aria-hidden', 'true');

            _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active').attr('aria-hidden', 'false');
        }
    };

    Slick.prototype.visibility = function () {

        var _ = this;

        if (_.options.autoplay) {

            if (document[_.hidden]) {

                _.interrupted = true;
            } else {

                _.interrupted = false;
            }
        }
    };

    $.fn.slick = function () {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined') _[i].slick = new Slick(_[i], opt);else ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };
});

/***/ }),

/***/ "./js/listing.js":
/*!***********************!*\
  !*** ./js/listing.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prestashop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prestashop */ "prestashop");
/* harmony import */ var prestashop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prestashop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var velocity_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! velocity-animate */ "./node_modules/velocity-animate/velocity.js");
/* harmony import */ var velocity_animate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(velocity_animate__WEBPACK_IMPORTED_MODULE_2__);




/* Ajax Add to cart */
function ajaxAddToCart() {
  if (prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.configuration.is_catalog === false) {
    var psAjaxCart = false,
        waitting_html = '<div class="js-waitting-addtocart page-loading-overlay add-to-cart-loading"><div class="page-loading-backdrop"><span class="uil-spin-css"><span><span></span></span><span><span></span></span><span><span></span></span><span><span></span></span><span><span></span></span><span><span></span></span><span><span></span></span><span><span></span></span></span></div></div>';
    if (typeof varPSAjaxCart !== 'undefined' && varPSAjaxCart) {
      psAjaxCart = varPSAjaxCart;
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', '.js-ajax-add-to-cart', function (event) {
      event.preventDefault();

      var $btn = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
      if (!$btn.find('.js-waitting-addtocart').length) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).append(waitting_html);
      }
      $btn.removeClass('added').addClass('disabled');

      let actionURL = prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.urls.pages.cart,
          query = 'id_product=' + $btn.data('id-product') + '&add=1&action=update&token=' + prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.static_token,
          qty_val = 1,
          qty = $btn.closest('.js-product-miniature').find('.js-add-to-cart-quantity');
      if (qty.length && parseInt(qty.val()) > 1) {
        qty_val = parseInt(qty.val());
      }
      query = query + '&qty=' + qty_val;

      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.post(actionURL, query, null, 'json').then(function (resp) {
        prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.emit('updateCart', {
          reason: {
            idProduct: resp.id_product,
            idProductAttribute: resp.id_product_attribute,
            linkAction: 'add-to-cart'
          }
        });

        if (resp.success) {
          $btn.addClass('added');
          if (!psAjaxCart) {
            window.location.href = prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.urls.pages.cart + '?action=show';
          }
        }
        if (resp.hasError) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-modal-message-text').text(resp.errors[0]);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-modal-message').modal('show');
        }
      }).fail(function (resp) {
        prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.emit('handleError', { eventType: 'addProductToCart', resp: resp });
      });

      return false;
    });
  }
}

function createListingSpin() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(jquery__WEBPACK_IMPORTED_MODULE_0___default()('input.js-add-to-cart-quantity'), function (index, spinner) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(spinner).makeTouchSpin();
  });
}

/* Quickview */
function quickviewFunction() {
  var waitting_html = '<div class="js-waitting-quickview page-loading-overlay quickview-loading"><div class="page-loading-backdrop"><span class="uil-spin-css"><span><span></span></span><span><span></span></span><span><span></span></span><span><span></span></span><span><span></span></span><span><span></span></span><span><span></span></span><span><span></span></span></span></div></div>';

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', '[data-link-action="quickview"]', function (event) {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.js-waitting-quickview').length) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).append(waitting_html);
    }
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('disabled');
  });

  prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.on('clickQuickView', function (elm) {
    let data = {
      'action': 'quickview',
      'id_product': elm.dataset.idProduct,
      'id_product_attribute': elm.dataset.idProductAttribute
    };
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.post(prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.urls.pages.product, data, null, 'json').then(function (resp) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').append(resp.quickview_html);
      let productModal = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#quickview-modal-' + resp.product.id + '-' + resp.product.id_product_attribute);
      productModal.modal('show');
      productConfig(productModal);
      productModal.on('hidden.bs.modal', function () {
        productModal.remove();
      });

      jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-link-action="quickview"]').removeClass('disabled');
    }).fail(function (resp) {
      prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.emit('handleError', { eventType: 'clickQuickView', resp: resp });
    });
  });

  var productConfig = function (qv) {
    let $mask = qv.find('.js-product-thumbs-scrollbox'),
        $thumbnails = qv.find('.js-thumb'),
        $cover = qv.find('.js-qv-product-cover'),
        $quantity = qv.find('#quantity_wanted'),
        $src = qv.find('.js-product-attributes-source'),
        $dest = qv.find('.js-product-attributes-destination'),
        $src2 = qv.find('.js-product-availability-source'),
        $dest2 = qv.find('.js-product-availability-destination');

    if (typeof varGetFinalDateController !== 'undefined') {
      setTimeout(function () {
        qv.find('.js-product-countdown').runCountdown({
          specificPricesTo: qv.find('.js-product-countdown').attr('data-specific-prices-to'),
          getFinalDateController: varGetFinalDateController
        });
      }, 300);
    }

    $dest.empty();
    if ($src.length) {
      $dest.html($src.html()); //$src.remove();
    }

    $dest2.empty();
    if ($src2.length) {
      $dest2.html($src2.html()); //$src2.remove();
    }

    $thumbnails.on('click', function (event) {
      $thumbnails.removeClass('selected');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget).addClass('selected');
      $cover.attr('src', jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget).data('image'));
    });

    setTimeout(function () {
      $mask.makeFlexScrollBox();
    }, 500);

    $quantity.makeTouchSpin();
  };
}

/* Product Countdown */
function countdownSpecificPricesMiniature() {
  if (typeof varGetFinalDateMiniatureController !== 'undefined') {
    var $ts = {};
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-product-countdown-miniature').each(function () {
      $ts[jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('id-product')] = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('specific-prices-to');
    });

    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default.a.isEmptyObject($ts)) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
        type: 'POST',
        url: varGetFinalDateMiniatureController,
        data: {
          'ajax': true,
          'specific-prices-to': JSON.stringify($ts)
        },
        dataType: 'json',
        success: function (results) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-product-countdown-miniature').each(function () {
            let wrapper = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);

            if (wrapper.data('id-product') in results) {
              wrapper.html(results[wrapper.data('id-product')]);
              setTimeout(function () {
                wrapper.slideDown();
              }, 500);

              let $new_cd = wrapper.find('[data-final-date]');
              $new_cd.countdown($new_cd.data('final-date')).on('update.countdown', function (event) {
                if (event.offset.totalDays <= 0) {
                  $new_cd.html(event.strftime($new_cd.data('short-format')));
                } else {
                  $new_cd.html(event.strftime($new_cd.data('format')));
                }
              }).on('finish.countdown', function () {
                $new_cd.parent().addClass('expired').html($new_cd.data('expired'));
              });
            }
          });
        },
        error: function (err) {
          console.log(err);
        }
      });
    }
  }
}

/* Search filters - Facets */
function searchFiterFacets() {
  var dataGrid = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#js-product-list').data('grid-columns'),
      storage = window.localStorage || window.sessionStorage;

  const parseSearchUrl = function (event) {
    if (event.target.dataset.searchUrl !== undefined) {
      return event.target.dataset.searchUrl;
    }

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).parent()[0].dataset.searchUrl === undefined) {
      throw new Error('Can not parse search URL');
    }

    return jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).parent()[0].dataset.searchUrl;
  };

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('change', '#search_filters input[data-search-url]', function (event) {
    prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.emit('updateFacets', parseSearchUrl(event));
  });

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', '.js-search-filters-clear-all', function (event) {
    prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.emit('updateFacets', parseSearchUrl(event));
  });

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', '.js-search-link', function (event) {
    event.preventDefault();
    prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.emit('updateFacets', jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).closest('a').get(0).href);
  });

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('change', '#search_filters select', function (event) {
    const form = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).closest('form');
    prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.emit('updateFacets', '?' + form.serialize());
  });

  prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.on('updateFacets', function (data) {
    togglePendingIcon('in');
  });
  prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.on('updateProductList', function (data) {
    updateProductListDOM(data);

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#js-product-list').find('.js-product-list-view').removeClass('columns-2 columns-3 columns-4 columns-5').addClass(dataGrid);

    if (storage && storage.productListView) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#product_display_control a[data-view="' + storage.productListView + '"]').trigger('click');
    }
    createListingSpin();

    setTimeout(function () {
      togglePendingIcon('out');
      countdownSpecificPricesMiniature();
      productCommentMiniature();
    }, 200);

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#js-filter-scroll-here').length) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.smoothScroll({
        scrollTarget: '#js-filter-scroll-here',
        offset: -145
      });
    }
  });
}
function togglePendingIcon(fade) {
  if (fade == 'in') {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-pending-query').fadeIn();
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-pending-query').fadeOut();
  }
}

function updateProductListDOM(data) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search_filters').replaceWith(data.rendered_facets);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#js-active-search-filters').replaceWith(data.rendered_active_filters);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#js-product-list-top').replaceWith(data.rendered_products_top);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#js-product-list').replaceWith(data.rendered_products);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#js-product-list-bottom').replaceWith(data.rendered_products_bottom);
  //if (data.rendered_products_header) {
  //  $('#js-product-list-header').replaceWith(data.rendered_products_header);
  //}
}

/* Grid - List - Table */
function productDisplayControl() {
  var displayControl = '#product_display_control a',
      storage = window.localStorage || window.sessionStorage;

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', displayControl, function (event) {
    event.preventDefault();

    let view = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('view');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(displayControl).removeClass('selected');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('selected');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-product-list-view').removeClass('grid list table-view').addClass(view);

    try {
      storage.setItem('productListView', view);
    } catch (error) {
      console.log('Can not cache the product list view');
    }
  });

  if (storage.productListView) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(displayControl + '[data-view="' + storage.productListView + '"]').trigger('click');
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(displayControl + '.selected').trigger('click');
  }
}

/* Mobile search filter toggle */
function mobileSearchFilterToggle() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', '#search_filter_toggler', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#_mobile_search_filters').stop().slideToggle();
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search_filter_controls .ok').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#_mobile_search_filters').stop().slideUp();
  });
}

/* Javascript for productcomments module */
function productCommentMiniature() {
  if (typeof varProductCommentGradeController !== 'undefined') {
    var $ids = [];
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-product-comment').each(function () {
      $ids.push(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('id-product'));
    });

    if ($ids.length) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
        type: 'POST',
        url: varProductCommentGradeController,
        data: {
          'ajax': true,
          'idProducts': JSON.stringify($ids)
        },
        success: function (jsonResponse) {
          var jsonData = false;
          try {
            jsonData = JSON.parse(jsonResponse);
          } catch (e) {}

          if (jsonData) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-product-comment').each(function () {
              let wrapper = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
                  id_product = wrapper.data('id-product');
              if (id_product in jsonData) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.grade-stars', wrapper).rating({ grade: jsonData[id_product].average_grade, starWidth: 16 });
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.comments-nb', wrapper).html('(' + jsonData[id_product].comments_nb + ')');
                wrapper.slideDown();
              }
            });
          }
        },
        error: function (err) {
          console.log(err);
        }
      });
    }
  }
}

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  productDisplayControl();
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).load(function () {
  quickviewFunction();
  ajaxAddToCart();
  countdownSpecificPricesMiniature();
  mobileSearchFilterToggle();
  createListingSpin();
  searchFiterFacets();
  setTimeout(function () {
    productCommentMiniature();
  }, 300);
});

/***/ }),

/***/ "./js/product.js":
/*!***********************!*\
  !*** ./js/product.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prestashop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prestashop */ "prestashop");
/* harmony import */ var prestashop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prestashop__WEBPACK_IMPORTED_MODULE_1__);



jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  createProductSpin();
  createInputFile();
  zoomImage();
  lightboxImage();
  coverImage();
  imageScrollBox();
  mobileImageScrollBox();
  moveProductAttributes();
  addAccordionActiveClass();

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('change', '.product-variants *[name]', function () {
    togglePendingRefreshIcon('in');
  });

  prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.on('updatedProduct', function (event) {
    createInputFile();
    zoomImage();
    coverImage();
    imageScrollBox();
    mobileImageScrollBox();
    moveProductAttributes();

    if (event && event.product_minimal_quantity) {
      const minimalProductQuantity = parseInt(event.product_minimal_quantity, 10);
      const quantityInputSelector = '#quantity_wanted';
      let quantityInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()(quantityInputSelector);

      quantityInput.trigger('touchspin.updatesettings', { min: minimalProductQuantity });
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#js_mfp_gallery').replaceWith(event.product_images_modal);
    lightboxImage();
    togglePendingRefreshIcon('out');

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-button-action="add-to-cart"]').is(':disabled')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.product-add-to-cart').addClass('add-to-cart-disabled');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.product-add-to-cart').removeClass('add-to-cart-disabled');
    }
  });

  if (typeof varCustomActionAddToCart !== 'undefined' && varCustomActionAddToCart) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').off('click', '[data-button-action="add-to-cart"]');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', '[data-button-action="add-to-cart"]', function (event) {
      event.preventDefault();
      var $btn = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
      var psAjaxCart = false;
      if (typeof varPSAjaxCart !== 'undefined' && varPSAjaxCart) {
        psAjaxCart = varPSAjaxCart;
      }

      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#quantity_wanted').val() > jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-stock]').data('stock') && jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-allow-oosp]').data('allow-oosp').length === 0) {
        $btn.attr('disabled', 'disabled');
      } else {
        var _ret = function () {
          let $form = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).closest('form');
          let query = $form.serialize() + '&add=1&action=update';
          let actionURL = $form.attr('action');

          let isQuantityInputValid = function ($input) {
            var validInput = true;

            $input.each(function (index, input) {
              let $input = jquery__WEBPACK_IMPORTED_MODULE_0___default()(input);
              let minimalValue = parseInt($input.attr('min'), 10);
              if (minimalValue && $input.val() < minimalValue) {
                onInvalidQuantity($input);
                validInput = false;
              }
            });

            return validInput;
          };

          let onInvalidQuantity = function ($input) {
            $input.parents('.product-add-to-cart').first().find('.product-minimal-quantity').addClass('error');
            $input.parent().find('label').addClass('error');
          };

          let $quantityInput = $form.find('input[min]');
          if (!isQuantityInputValid($quantityInput)) {
            onInvalidQuantity($quantityInput);

            return {
              v: undefined
            };
          }

          $btn.removeClass('added').addClass('disabled');

          jquery__WEBPACK_IMPORTED_MODULE_0___default.a.post(actionURL, query, null, 'json').then(function (resp) {
            prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.emit('updateCart', {
              reason: {
                idProduct: resp.id_product,
                idProductAttribute: resp.id_product_attribute,
                idCustomization: resp.id_customization,
                linkAction: 'add-to-cart',
                cart: resp.cart
              },
              resp: resp
            });

            if (resp.success) {
              $btn.addClass('added');
              if (!psAjaxCart) {
                window.location.href = prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.urls.pages.cart + '?action=show';
              }
            }
            if (resp.hasError) {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-modal-message-text').text(resp.errors[0]);
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-modal-message').modal('show');
            }
          }).fail(function (resp) {
            prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.emit('handleError', { eventType: 'addProductToCart', resp: resp });
          });
        }();

        if (typeof _ret === 'object') return _ret.v;
      }
    });
  }
});

var productResizeTimer;
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).resize(function () {
  clearTimeout(productResizeTimer);
  productResizeTimer = setTimeout(function () {
    zoomImage();
  }, 250);
});

function togglePendingRefreshIcon(fade_status) {
  if (typeof varProductPendingRefreshIcon !== 'undefined' && varProductPendingRefreshIcon) {
    if (fade_status == 'in') {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-product-refresh-pending-query').fadeIn();
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-product-refresh-pending-query').fadeOut();
    }
  }
}

function zoomImage() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.zoomWrapper .js-main-zoom').css('position', 'static').unwrap();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.zoomContainer').remove();

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-enable-zoom-image .js-main-zoom').elevateZoom({
    zoomType: 'inner',
    gallery: 'js-zoom-gallery',
    galleryActiveClass: 'selected',
    imageCrossfade: true,
    cursor: 'crosshair',
    easing: true,
    easingDuration: 500,
    zoomWindowFadeIn: 500,
    zoomWindowFadeOut: 300
  });
}

function lightboxImage() {
  var $gallery = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#js_mfp_gallery');
  if ($gallery.length) {
    var zClose = $gallery.data('text-close'),
        zPrev = $gallery.data('text-prev'),
        zNext = $gallery.data('text-next');

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js_mfp_gallery_item').magnificPopup({
      type: 'image',
      tClose: zClose,
      tLoading: '<div class="uil-spin-css"><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div>',
      removalDelay: 500,
      mainClass: 'mfp-fade',
      closeOnBgClick: true,
      gallery: {
        enabled: true,
        tPrev: zPrev,
        tNext: zNext,
        tCounter: '%curr% / %total%'
      },
      image: {
        verticalFit: false
      }
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-mfp-button').bind('click', function () {
      var imageId = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#js-zoom-gallery .js-thumb.selected').data('id-image');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js_mfp_gallery_item').filter('[data-id-image="' + imageId + '"]').trigger('click');
    });
  }
}

function coverImage() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-cover-image .js-thumb').on('click', function (event) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-thumb.selected').removeClass('selected');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget).addClass('selected');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-qv-product-cover').prop('src', jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget).data('image'));
  });
}

function imageScrollBox() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-product-thumbs-scrollbox').makeFlexScrollBox();
}
function mobileImageScrollBox() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-mobile-images-scrollbox').makeFlexScrollBox();
}

/*function showHideScrollBoxArrows() {
  var thumbsWidth = 0;
  $('.js-qv-product-images .js-thumb-container').each(function() {
    thumbsWidth = thumbsWidth + $(this).outerWidth();
  });

  if (($('.js-qv-product-images').width() + 5) < thumbsWidth) {
    $('.scroll-box-arrows').addClass('scroll');
  } else {
    $('.scroll-box-arrows').removeClass('scroll');
  }
}*/

function createInputFile() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-file-input').on('change', function (event) {
    let target, file;

    if ((target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget)[0]) && (file = target.files[0])) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).prev().text(file.name);
    }
  });
}

function createProductSpin() {
  const $quantityInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#quantity_wanted');
  $quantityInput.makeTouchSpin();

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('change keyup', '#quantity_wanted', function (e) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).trigger('touchspin.stopspin');
    prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.emit('updateProduct', {
      eventType: 'updatedProductQuantity',
      event: e
    });
  });
}

function moveProductAttributes() {
  let $src = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-product-attributes-source'),
      $dest = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-product-attributes-destination'),
      $src2 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-product-availability-source'),
      $dest2 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-product-availability-destination');
  $dest.empty();
  if ($src.length) {
    $dest.html($src.html()); //$src.remove();
  }
  $dest2.empty();
  if ($src2.length) {
    $dest2.html($src2.html()); //$src2.remove();
  }
}

function addAccordionActiveClass() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-product-accordions [data-toggle="collapse"]').click(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.panel').toggleClass('active');
  });
}

/***/ }),

/***/ "./js/responsive.js":
/*!**************************!*\
  !*** ./js/responsive.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prestashop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prestashop */ "prestashop");
/* harmony import */ var prestashop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prestashop__WEBPACK_IMPORTED_MODULE_1__);



prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.responsive = prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.responsive || {};
prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.responsive.min_width = 768;
prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.responsive.tablet_min_width = 992;
prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.responsive.scrollbar_width = scrollCompensate();
prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.responsive.current_width = window.innerWidth;

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
    prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.responsive.mobile = prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.responsive.current_width < prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.responsive.min_width;
    prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.responsive.tablet = prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.responsive.current_width < prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.responsive.tablet_min_width;

    if (prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.responsive.mobile) {
        toggleMobileStyles(prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.responsive.mobile);
        toggleBlockOnMobile(prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.responsive.mobile);
    }
    if (prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.responsive.tablet) {
        toggleTabletStyles(prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.responsive.tablet);
        toggleLinkListOnMobile(prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.responsive.tablet);
    }
});

function scrollCompensate() {
    var inner = document.createElement('p');
    inner.style.width = "100%";
    inner.style.height = "200px";

    var outer = document.createElement('div');
    outer.style.position = "absolute";
    outer.style.top = "0px";
    outer.style.left = "0px";
    outer.style.visibility = "hidden";
    outer.style.width = "200px";
    outer.style.height = "150px";
    outer.style.overflow = "hidden";
    outer.appendChild(inner);

    document.body.appendChild(outer);
    var w1 = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var w2 = inner.offsetWidth;
    if (w1 == w2) w2 = outer.clientWidth;

    document.body.removeChild(outer);

    return w1 - w2;
}

function swapChildren(obj1, obj2) {
    var temp = obj2.children().detach();
    obj2.empty().append(obj1.children().detach());
    obj1.append(temp);
}

function toggleMobileStyles(is_mobile) {
    if (is_mobile) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("*[id^='_desktop_']").each(function (idx, el) {
            var target = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + el.id.replace('_desktop_', '_mobile_'));
            if (target.length) {
                swapChildren(jquery__WEBPACK_IMPORTED_MODULE_0___default()(el), target);
            }
        });
    } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("*[id^='_mobile_']").each(function (idx, el) {
            var target = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + el.id.replace('_mobile_', '_desktop_'));
            if (target.length) {
                swapChildren(jquery__WEBPACK_IMPORTED_MODULE_0___default()(el), target);
            }
        });
    }
    prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.emit('responsive update', {
        mobile: is_mobile
    });
}

function toggleTabletStyles(is_tablet) {
    if (is_tablet) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("*[id^='_desktop_']").each(function (idx, el) {
            var target = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + el.id.replace('_desktop_', '_tablet_'));
            if (target.length) {
                swapChildren(jquery__WEBPACK_IMPORTED_MODULE_0___default()(el), target);
            }
        });
    } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("*[id^='_tablet_']").each(function (idx, el) {
            var target = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + el.id.replace('_tablet_', '_desktop_'));
            if (target.length) {
                swapChildren(jquery__WEBPACK_IMPORTED_MODULE_0___default()(el), target);
            }
        });
    }
}

function toggleLinkListOnMobile(is_tablet) {
    var $objs = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-toggle-linklist-mobile'),
        $title = $objs.find('h3, h4, .h4');

    if (is_tablet) {
        $title.each(function (idx, el) {
            var $content = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).next();
            if ($content.length) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).addClass('toggle-linklist-title');
                $content.hide();
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).click(function () {
                    $content.stop().slideToggle();
                });
            }
        });
    } else {
        $title.each(function (idx, el) {
            var $content = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).next();
            if ($content.length) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).unbind('click');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).removeClass('toggle-linklist-title');
                $content.show();
            }
        });
    }
}

function toggleBlockOnMobile(is_mobile) {
    var $objs = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-toggle-block-mobile');

    if (is_mobile) {
        $objs.each(function (idx, el) {
            var $content = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).next();
            if ($content.length) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).addClass('toggle-block-title is-hide');
                $content.hide();
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).click(function () {
                    $content.stop().slideToggle();
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).toggleClass('is-hide');
                });
            }
        });
    } else {
        $objs.each(function (idx, el) {
            var $content = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).next();
            if ($content.length) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).unbind('click');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).removeClass('toggle-block-title is-hide');
                $content.show();
            }
        });
    }
}

jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', function () {
    var _cw = prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.responsive.current_width;
    var _mw = prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.responsive.min_width;
    var _tmw = prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.responsive.tablet_min_width;
    var _w = window.innerWidth;

    var _toggle = _cw >= _mw && _w < _mw || _cw < _mw && _w >= _mw;
    var _tablet_toggle = _cw >= _tmw && _w < _tmw || _cw < _tmw && _w >= _tmw;

    prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.responsive.current_width = _w;

    prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.responsive.mobile = prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.responsive.current_width < prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.responsive.min_width;
    prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.responsive.tablet = prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.responsive.current_width < prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.responsive.tablet_min_width;

    if (_toggle) {
        toggleMobileStyles(prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.responsive.mobile);
        toggleBlockOnMobile(prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.responsive.mobile);
    }
    if (_tablet_toggle) {
        toggleTabletStyles(prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.responsive.tablet);
        toggleLinkListOnMobile(prestashop__WEBPACK_IMPORTED_MODULE_1___default.a.responsive.tablet);
    }
});

/***/ }),

/***/ "./js/theme.js":
/*!*********************!*\
  !*** ./js/theme.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var expose_loader_Tether_tether__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! expose-loader?Tether!tether */ "./node_modules/expose-loader/index.js?Tether!./node_modules/tether/dist/js/tether.js-exposed");
/* harmony import */ var expose_loader_Tether_tether__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(expose_loader_Tether_tether__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_js_bootstrap_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.min */ "./node_modules/bootstrap/dist/js/bootstrap.min.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flexibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flexibility */ "./node_modules/flexibility/flexibility.js");
/* harmony import */ var flexibility__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flexibility__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_touchspin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-touchspin */ "./node_modules/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.js");
/* harmony import */ var bootstrap_touchspin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_touchspin__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery_uniform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery.uniform */ "./node_modules/jquery.uniform/dist/js/jquery.uniform.standalone.js");
/* harmony import */ var jquery_uniform__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery_uniform__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _aone_shared_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aone/shared-functions */ "./js/aone/shared-functions.js");
/* harmony import */ var _aone_shared_functions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_aone_shared_functions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./responsive */ "./js/responsive.js");
/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkout */ "./js/checkout.js");
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customer */ "./js/customer.js");
/* harmony import */ var _listing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./listing */ "./js/listing.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product */ "./js/product.js");
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cart */ "./js/cart.js");
/* harmony import */ var prestashop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prestashop */ "prestashop");
/* harmony import */ var prestashop__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prestashop__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _lib_bootstrap_filestyle_min__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/bootstrap-filestyle.min */ "./js/lib/bootstrap-filestyle.min.js");
/* harmony import */ var _lib_bootstrap_filestyle_min__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_lib_bootstrap_filestyle_min__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _lib_jquery_scrollbox_min__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lib/jquery.scrollbox.min */ "./js/lib/jquery.scrollbox.min.js");
/* harmony import */ var _lib_jquery_scrollbox_min__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_lib_jquery_scrollbox_min__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _lib_slick__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/slick */ "./js/lib/slick.js");
/* harmony import */ var _lib_slick__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_lib_slick__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _lib_jquery_smooth_scroll_min__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lib/jquery.smooth-scroll.min */ "./js/lib/jquery.smooth-scroll.min.js");
/* harmony import */ var _lib_jquery_smooth_scroll_min__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_lib_jquery_smooth_scroll_min__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _lib_pace__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lib/pace */ "./js/lib/pace.js");
/* harmony import */ var _lib_pace__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_lib_pace__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _lib_jquery_sticky__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lib/jquery.sticky */ "./js/lib/jquery.sticky.js");
/* harmony import */ var _lib_jquery_sticky__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_lib_jquery_sticky__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _lib_jquery_nivo_slider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lib/jquery.nivo.slider */ "./js/lib/jquery.nivo.slider.js");
/* harmony import */ var _lib_jquery_nivo_slider__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_lib_jquery_nivo_slider__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _lib_colpick__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./lib/colpick */ "./js/lib/colpick.js");
/* harmony import */ var _lib_colpick__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_lib_colpick__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _lib_jquery_elevateZoom_min__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./lib/jquery.elevateZoom.min */ "./js/lib/jquery.elevateZoom.min.js");
/* harmony import */ var _lib_jquery_elevateZoom_min__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_lib_jquery_elevateZoom_min__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _lib_jquery_magnific_popup_min__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./lib/jquery.magnific-popup.min */ "./js/lib/jquery.magnific-popup.min.js");
/* harmony import */ var _lib_jquery_magnific_popup_min__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_lib_jquery_magnific_popup_min__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _lib_jquery_cookieBar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./lib/jquery.cookieBar */ "./js/lib/jquery.cookieBar.js");
/* harmony import */ var _lib_jquery_cookieBar__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_lib_jquery_cookieBar__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _lib_jquery_lazyload__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./lib/jquery.lazyload */ "./js/lib/jquery.lazyload.js");
/* harmony import */ var _lib_jquery_lazyload__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_lib_jquery_lazyload__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _lib_jquery_mobile_events_min__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./lib/jquery.mobile-events.min */ "./js/lib/jquery.mobile-events.min.js");
/* harmony import */ var _lib_jquery_mobile_events_min__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_lib_jquery_mobile_events_min__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _lib_jquery_countdown_min__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./lib/jquery.countdown.min */ "./js/lib/jquery.countdown.min.js");
/* harmony import */ var _lib_jquery_countdown_min__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_lib_jquery_countdown_min__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _components_block_cart__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/block-cart */ "./js/components/block-cart.js");
/* harmony import */ var _components_ps_modules__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/ps-modules */ "./js/components/ps-modules.js");
/* harmony import */ var _components_drop_down__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/drop-down */ "./js/components/drop-down.js");
/* harmony import */ var _components_drop_down__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_components_drop_down__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/form */ "./js/components/form.js");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_components_form__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _aone_aone_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./aone/aone-module */ "./js/aone/aone-module.js");















//import DropDown from './components/drop-down';
//import Form from './components/form';
//import ProductMinitature from './components/product-miniature';
//import ProductSelect from './components/product-select';
//import TopMenu from './components/top-menu';


















//import './lib/SmoothScroll';








// "inherit" EventEmitter
for (var i in events__WEBPACK_IMPORTED_MODULE_13___default.a.prototype) {
  prestashop__WEBPACK_IMPORTED_MODULE_12___default.a[i] = events__WEBPACK_IMPORTED_MODULE_13___default.a.prototype[i];
}

//$(document).ready(function() {
//let dropDownEl = $('.js-dropdown');
//const form = new Form();
//let dropDown = new DropDown(dropDownEl);
//let productSelect  = new ProductSelect();
//let topMenuEl = $('.js-top-menu ul[data-depth="0"]');
//let topMenu = new TopMenu(topMenuEl);
//let productMinitature = new ProductMinitature();

//dropDown.init();
//form.init();
//productSelect.init();
//});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/tether/dist/js/tether.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/tether/dist/js/tether.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! tether 1.4.3 */

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (require, exports, module) {

  'use strict';

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  var TetherBase = undefined;
  if (typeof TetherBase === 'undefined') {
    TetherBase = { modules: [] };
  }

  var zeroElement = null;

  // Same as native getBoundingClientRect, except it takes into account parent <frame> offsets
  // if the element lies within a nested document (<frame> or <iframe>-like).
  function getActualBoundingClientRect(node) {
    var boundingRect = node.getBoundingClientRect();

    // The original object returned by getBoundingClientRect is immutable, so we clone it
    // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
    var rect = {};
    for (var k in boundingRect) {
      rect[k] = boundingRect[k];
    }

    if (node.ownerDocument !== document) {
      var _frameElement = node.ownerDocument.defaultView.frameElement;
      if (_frameElement) {
        var frameRect = getActualBoundingClientRect(_frameElement);
        rect.top += frameRect.top;
        rect.bottom += frameRect.top;
        rect.left += frameRect.left;
        rect.right += frameRect.left;
      }
    }

    return rect;
  }

  function getScrollParents(el) {
    // In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
    // https://bugzilla.mozilla.org/show_bug.cgi?id=548397
    var computedStyle = getComputedStyle(el) || {};
    var position = computedStyle.position;
    var parents = [];

    if (position === 'fixed') {
      return [el];
    }

    var parent = el;
    while ((parent = parent.parentNode) && parent && parent.nodeType === 1) {
      var style = undefined;
      try {
        style = getComputedStyle(parent);
      } catch (err) {}

      if (typeof style === 'undefined' || style === null) {
        parents.push(parent);
        return parents;
      }

      var _style = style;
      var overflow = _style.overflow;
      var overflowX = _style.overflowX;
      var overflowY = _style.overflowY;

      if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
        if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
          parents.push(parent);
        }
      }
    }

    parents.push(el.ownerDocument.body);

    // If the node is within a frame, account for the parent window scroll
    if (el.ownerDocument !== document) {
      parents.push(el.ownerDocument.defaultView);
    }

    return parents;
  }

  var uniqueId = function () {
    var id = 0;
    return function () {
      return ++id;
    };
  }();

  var zeroPosCache = {};
  var getOrigin = function getOrigin() {
    // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
    // jitter as the user scrolls that messes with our ability to detect if two positions
    // are equivilant or not.  We place an element at the top left of the page that will
    // get the same jitter, so we can cancel the two out.
    var node = zeroElement;
    if (!node || !document.body.contains(node)) {
      node = document.createElement('div');
      node.setAttribute('data-tether-id', uniqueId());
      extend(node.style, {
        top: 0,
        left: 0,
        position: 'absolute'
      });

      document.body.appendChild(node);

      zeroElement = node;
    }

    var id = node.getAttribute('data-tether-id');
    if (typeof zeroPosCache[id] === 'undefined') {
      zeroPosCache[id] = getActualBoundingClientRect(node);

      // Clear the cache when this position call is done
      defer(function () {
        delete zeroPosCache[id];
      });
    }

    return zeroPosCache[id];
  };

  function removeUtilElements() {
    if (zeroElement) {
      document.body.removeChild(zeroElement);
    }
    zeroElement = null;
  };

  function getBounds(el) {
    var doc = undefined;
    if (el === document) {
      doc = document;
      el = document.documentElement;
    } else {
      doc = el.ownerDocument;
    }

    var docEl = doc.documentElement;

    var box = getActualBoundingClientRect(el);

    var origin = getOrigin();

    box.top -= origin.top;
    box.left -= origin.left;

    if (typeof box.width === 'undefined') {
      box.width = document.body.scrollWidth - box.left - box.right;
    }
    if (typeof box.height === 'undefined') {
      box.height = document.body.scrollHeight - box.top - box.bottom;
    }

    box.top = box.top - docEl.clientTop;
    box.left = box.left - docEl.clientLeft;
    box.right = doc.body.clientWidth - box.width - box.left;
    box.bottom = doc.body.clientHeight - box.height - box.top;

    return box;
  }

  function getOffsetParent(el) {
    return el.offsetParent || document.documentElement;
  }

  var _scrollBarSize = null;
  function getScrollBarSize() {
    if (_scrollBarSize) {
      return _scrollBarSize;
    }
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';

    var outer = document.createElement('div');
    extend(outer.style, {
      position: 'absolute',
      top: 0,
      left: 0,
      pointerEvents: 'none',
      visibility: 'hidden',
      width: '200px',
      height: '150px',
      overflow: 'hidden'
    });

    outer.appendChild(inner);

    document.body.appendChild(outer);

    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }

    document.body.removeChild(outer);

    var width = widthContained - widthScroll;

    _scrollBarSize = { width: width, height: width };
    return _scrollBarSize;
  }

  function extend() {
    var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var args = [];

    Array.prototype.push.apply(args, arguments);

    args.slice(1).forEach(function (obj) {
      if (obj) {
        for (var key in obj) {
          if ({}.hasOwnProperty.call(obj, key)) {
            out[key] = obj[key];
          }
        }
      }
    });

    return out;
  }

  function removeClass(el, name) {
    if (typeof el.classList !== 'undefined') {
      name.split(' ').forEach(function (cls) {
        if (cls.trim()) {
          el.classList.remove(cls);
        }
      });
    } else {
      var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
      var className = getClassName(el).replace(regex, ' ');
      setClassName(el, className);
    }
  }

  function addClass(el, name) {
    if (typeof el.classList !== 'undefined') {
      name.split(' ').forEach(function (cls) {
        if (cls.trim()) {
          el.classList.add(cls);
        }
      });
    } else {
      removeClass(el, name);
      var cls = getClassName(el) + (' ' + name);
      setClassName(el, cls);
    }
  }

  function hasClass(el, name) {
    if (typeof el.classList !== 'undefined') {
      return el.classList.contains(name);
    }
    var className = getClassName(el);
    return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
  }

  function getClassName(el) {
    // Can't use just SVGAnimatedString here since nodes within a Frame in IE have
    // completely separately SVGAnimatedString base classes
    if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
      return el.className.baseVal;
    }
    return el.className;
  }

  function setClassName(el, className) {
    el.setAttribute('class', className);
  }

  function updateClasses(el, add, all) {
    // Of the set of 'all' classes, we need the 'add' classes, and only the
    // 'add' classes to be set.
    all.forEach(function (cls) {
      if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
        removeClass(el, cls);
      }
    });

    add.forEach(function (cls) {
      if (!hasClass(el, cls)) {
        addClass(el, cls);
      }
    });
  }

  var deferred = [];

  var defer = function defer(fn) {
    deferred.push(fn);
  };

  var flush = function flush() {
    var fn = undefined;
    while (fn = deferred.pop()) {
      fn();
    }
  };

  var Evented = function () {
    function Evented() {
      _classCallCheck(this, Evented);
    }

    _createClass(Evented, [{
      key: 'on',
      value: function on(event, handler, ctx) {
        var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

        if (typeof this.bindings === 'undefined') {
          this.bindings = {};
        }
        if (typeof this.bindings[event] === 'undefined') {
          this.bindings[event] = [];
        }
        this.bindings[event].push({ handler: handler, ctx: ctx, once: once });
      }
    }, {
      key: 'once',
      value: function once(event, handler, ctx) {
        this.on(event, handler, ctx, true);
      }
    }, {
      key: 'off',
      value: function off(event, handler) {
        if (typeof this.bindings === 'undefined' || typeof this.bindings[event] === 'undefined') {
          return;
        }

        if (typeof handler === 'undefined') {
          delete this.bindings[event];
        } else {
          var i = 0;
          while (i < this.bindings[event].length) {
            if (this.bindings[event][i].handler === handler) {
              this.bindings[event].splice(i, 1);
            } else {
              ++i;
            }
          }
        }
      }
    }, {
      key: 'trigger',
      value: function trigger(event) {
        if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
          var i = 0;

          for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          while (i < this.bindings[event].length) {
            var _bindings$event$i = this.bindings[event][i];
            var handler = _bindings$event$i.handler;
            var ctx = _bindings$event$i.ctx;
            var once = _bindings$event$i.once;

            var context = ctx;
            if (typeof context === 'undefined') {
              context = this;
            }

            handler.apply(context, args);

            if (once) {
              this.bindings[event].splice(i, 1);
            } else {
              ++i;
            }
          }
        }
      }
    }]);

    return Evented;
  }();

  TetherBase.Utils = {
    getActualBoundingClientRect: getActualBoundingClientRect,
    getScrollParents: getScrollParents,
    getBounds: getBounds,
    getOffsetParent: getOffsetParent,
    extend: extend,
    addClass: addClass,
    removeClass: removeClass,
    hasClass: hasClass,
    updateClasses: updateClasses,
    defer: defer,
    flush: flush,
    uniqueId: uniqueId,
    Evented: Evented,
    getScrollBarSize: getScrollBarSize,
    removeUtilElements: removeUtilElements
  };
  /* globals TetherBase, performance */

  'use strict';

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;_e = err;
      } finally {
        try {
          if (!_n && _i['return']) _i['return']();
        } finally {
          if (_d) throw _e;
        }
      }return _arr;
    }return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError('Invalid attempt to destructure non-iterable instance');
      }
    };
  }();

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  var _get = function get(_x6, _x7, _x8) {
    var _again = true;_function: while (_again) {
      var object = _x6,
          property = _x7,
          receiver = _x8;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);if (parent === null) {
          return undefined;
        } else {
          _x6 = parent;_x7 = property;_x8 = receiver;_again = true;desc = parent = undefined;continue _function;
        }
      } else if ('value' in desc) {
        return desc.value;
      } else {
        var getter = desc.get;if (getter === undefined) {
          return undefined;
        }return getter.call(receiver);
      }
    }
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  if (typeof TetherBase === 'undefined') {
    throw new Error('You must include the utils.js file before tether.js');
  }

  var _TetherBase$Utils = TetherBase.Utils;
  var getScrollParents = _TetherBase$Utils.getScrollParents;
  var getBounds = _TetherBase$Utils.getBounds;
  var getOffsetParent = _TetherBase$Utils.getOffsetParent;
  var extend = _TetherBase$Utils.extend;
  var addClass = _TetherBase$Utils.addClass;
  var removeClass = _TetherBase$Utils.removeClass;
  var updateClasses = _TetherBase$Utils.updateClasses;
  var defer = _TetherBase$Utils.defer;
  var flush = _TetherBase$Utils.flush;
  var getScrollBarSize = _TetherBase$Utils.getScrollBarSize;
  var removeUtilElements = _TetherBase$Utils.removeUtilElements;

  function within(a, b) {
    var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

    return a + diff >= b && b >= a - diff;
  }

  var transformKey = function () {
    if (typeof document === 'undefined') {
      return '';
    }
    var el = document.createElement('div');

    var transforms = ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
    for (var i = 0; i < transforms.length; ++i) {
      var key = transforms[i];
      if (el.style[key] !== undefined) {
        return key;
      }
    }
  }();

  var tethers = [];

  var position = function position() {
    tethers.forEach(function (tether) {
      tether.position(false);
    });
    flush();
  };

  function now() {
    if (typeof performance === 'object' && typeof performance.now === 'function') {
      return performance.now();
    }
    return +new Date();
  }

  (function () {
    var lastCall = null;
    var lastDuration = null;
    var pendingTimeout = null;

    var tick = function tick() {
      if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
        // We voluntarily throttle ourselves if we can't manage 60fps
        lastDuration = Math.min(lastDuration - 16, 250);

        // Just in case this is the last event, remember to position just once more
        pendingTimeout = setTimeout(tick, 250);
        return;
      }

      if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
        // Some browsers call events a little too frequently, refuse to run more than is reasonable
        return;
      }

      if (pendingTimeout != null) {
        clearTimeout(pendingTimeout);
        pendingTimeout = null;
      }

      lastCall = now();
      position();
      lastDuration = now() - lastCall;
    };

    if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
      ['resize', 'scroll', 'touchmove'].forEach(function (event) {
        window.addEventListener(event, tick);
      });
    }
  })();

  var MIRROR_LR = {
    center: 'center',
    left: 'right',
    right: 'left'
  };

  var MIRROR_TB = {
    middle: 'middle',
    top: 'bottom',
    bottom: 'top'
  };

  var OFFSET_MAP = {
    top: 0,
    left: 0,
    middle: '50%',
    center: '50%',
    bottom: '100%',
    right: '100%'
  };

  var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
    var left = attachment.left;
    var top = attachment.top;

    if (left === 'auto') {
      left = MIRROR_LR[relativeToAttachment.left];
    }

    if (top === 'auto') {
      top = MIRROR_TB[relativeToAttachment.top];
    }

    return { left: left, top: top };
  };

  var attachmentToOffset = function attachmentToOffset(attachment) {
    var left = attachment.left;
    var top = attachment.top;

    if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
      left = OFFSET_MAP[attachment.left];
    }

    if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
      top = OFFSET_MAP[attachment.top];
    }

    return { left: left, top: top };
  };

  function addOffset() {
    var out = { top: 0, left: 0 };

    for (var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++) {
      offsets[_key] = arguments[_key];
    }

    offsets.forEach(function (_ref) {
      var top = _ref.top;
      var left = _ref.left;

      if (typeof top === 'string') {
        top = parseFloat(top, 10);
      }
      if (typeof left === 'string') {
        left = parseFloat(left, 10);
      }

      out.top += top;
      out.left += left;
    });

    return out;
  }

  function offsetToPx(offset, size) {
    if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
      offset.left = parseFloat(offset.left, 10) / 100 * size.width;
    }
    if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
      offset.top = parseFloat(offset.top, 10) / 100 * size.height;
    }

    return offset;
  }

  var parseOffset = function parseOffset(value) {
    var _value$split = value.split(' ');

    var _value$split2 = _slicedToArray(_value$split, 2);

    var top = _value$split2[0];
    var left = _value$split2[1];

    return { top: top, left: left };
  };
  var parseAttachment = parseOffset;

  var TetherClass = function (_Evented) {
    _inherits(TetherClass, _Evented);

    function TetherClass(options) {
      var _this = this;

      _classCallCheck(this, TetherClass);

      _get(Object.getPrototypeOf(TetherClass.prototype), 'constructor', this).call(this);
      this.position = this.position.bind(this);

      tethers.push(this);

      this.history = [];

      this.setOptions(options, false);

      TetherBase.modules.forEach(function (module) {
        if (typeof module.initialize !== 'undefined') {
          module.initialize.call(_this);
        }
      });

      this.position();
    }

    _createClass(TetherClass, [{
      key: 'getClass',
      value: function getClass() {
        var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
        var classes = this.options.classes;

        if (typeof classes !== 'undefined' && classes[key]) {
          return this.options.classes[key];
        } else if (this.options.classPrefix) {
          return this.options.classPrefix + '-' + key;
        } else {
          return key;
        }
      }
    }, {
      key: 'setOptions',
      value: function setOptions(options) {
        var _this2 = this;

        var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

        var defaults = {
          offset: '0 0',
          targetOffset: '0 0',
          targetAttachment: 'auto auto',
          classPrefix: 'tether'
        };

        this.options = extend(defaults, options);

        var _options = this.options;
        var element = _options.element;
        var target = _options.target;
        var targetModifier = _options.targetModifier;

        this.element = element;
        this.target = target;
        this.targetModifier = targetModifier;

        if (this.target === 'viewport') {
          this.target = document.body;
          this.targetModifier = 'visible';
        } else if (this.target === 'scroll-handle') {
          this.target = document.body;
          this.targetModifier = 'scroll-handle';
        }

        ['element', 'target'].forEach(function (key) {
          if (typeof _this2[key] === 'undefined') {
            throw new Error('Tether Error: Both element and target must be defined');
          }

          if (typeof _this2[key].jquery !== 'undefined') {
            _this2[key] = _this2[key][0];
          } else if (typeof _this2[key] === 'string') {
            _this2[key] = document.querySelector(_this2[key]);
          }
        });

        addClass(this.element, this.getClass('element'));
        if (!(this.options.addTargetClasses === false)) {
          addClass(this.target, this.getClass('target'));
        }

        if (!this.options.attachment) {
          throw new Error('Tether Error: You must provide an attachment');
        }

        this.targetAttachment = parseAttachment(this.options.targetAttachment);
        this.attachment = parseAttachment(this.options.attachment);
        this.offset = parseOffset(this.options.offset);
        this.targetOffset = parseOffset(this.options.targetOffset);

        if (typeof this.scrollParents !== 'undefined') {
          this.disable();
        }

        if (this.targetModifier === 'scroll-handle') {
          this.scrollParents = [this.target];
        } else {
          this.scrollParents = getScrollParents(this.target);
        }

        if (!(this.options.enabled === false)) {
          this.enable(pos);
        }
      }
    }, {
      key: 'getTargetBounds',
      value: function getTargetBounds() {
        if (typeof this.targetModifier !== 'undefined') {
          if (this.targetModifier === 'visible') {
            if (this.target === document.body) {
              return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
            } else {
              var bounds = getBounds(this.target);

              var out = {
                height: bounds.height,
                width: bounds.width,
                top: bounds.top,
                left: bounds.left
              };

              out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
              out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
              out.height = Math.min(innerHeight, out.height);
              out.height -= 2;

              out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
              out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
              out.width = Math.min(innerWidth, out.width);
              out.width -= 2;

              if (out.top < pageYOffset) {
                out.top = pageYOffset;
              }
              if (out.left < pageXOffset) {
                out.left = pageXOffset;
              }

              return out;
            }
          } else if (this.targetModifier === 'scroll-handle') {
            var bounds = undefined;
            var target = this.target;
            if (target === document.body) {
              target = document.documentElement;

              bounds = {
                left: pageXOffset,
                top: pageYOffset,
                height: innerHeight,
                width: innerWidth
              };
            } else {
              bounds = getBounds(target);
            }

            var style = getComputedStyle(target);

            var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;

            var scrollBottom = 0;
            if (hasBottomScroll) {
              scrollBottom = 15;
            }

            var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;

            var out = {
              width: 15,
              height: height * 0.975 * (height / target.scrollHeight),
              left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
            };

            var fitAdj = 0;
            if (height < 408 && this.target === document.body) {
              fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
            }

            if (this.target !== document.body) {
              out.height = Math.max(out.height, 24);
            }

            var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
            out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);

            if (this.target === document.body) {
              out.height = Math.max(out.height, 24);
            }

            return out;
          }
        } else {
          return getBounds(this.target);
        }
      }
    }, {
      key: 'clearCache',
      value: function clearCache() {
        this._cache = {};
      }
    }, {
      key: 'cache',
      value: function cache(k, getter) {
        // More than one module will often need the same DOM info, so
        // we keep a cache which is cleared on each position call
        if (typeof this._cache === 'undefined') {
          this._cache = {};
        }

        if (typeof this._cache[k] === 'undefined') {
          this._cache[k] = getter.call(this);
        }

        return this._cache[k];
      }
    }, {
      key: 'enable',
      value: function enable() {
        var _this3 = this;

        var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

        if (!(this.options.addTargetClasses === false)) {
          addClass(this.target, this.getClass('enabled'));
        }
        addClass(this.element, this.getClass('enabled'));
        this.enabled = true;

        this.scrollParents.forEach(function (parent) {
          if (parent !== _this3.target.ownerDocument) {
            parent.addEventListener('scroll', _this3.position);
          }
        });

        if (pos) {
          this.position();
        }
      }
    }, {
      key: 'disable',
      value: function disable() {
        var _this4 = this;

        removeClass(this.target, this.getClass('enabled'));
        removeClass(this.element, this.getClass('enabled'));
        this.enabled = false;

        if (typeof this.scrollParents !== 'undefined') {
          this.scrollParents.forEach(function (parent) {
            parent.removeEventListener('scroll', _this4.position);
          });
        }
      }
    }, {
      key: 'destroy',
      value: function destroy() {
        var _this5 = this;

        this.disable();

        tethers.forEach(function (tether, i) {
          if (tether === _this5) {
            tethers.splice(i, 1);
          }
        });

        // Remove any elements we were using for convenience from the DOM
        if (tethers.length === 0) {
          removeUtilElements();
        }
      }
    }, {
      key: 'updateAttachClasses',
      value: function updateAttachClasses(elementAttach, targetAttach) {
        var _this6 = this;

        elementAttach = elementAttach || this.attachment;
        targetAttach = targetAttach || this.targetAttachment;
        var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];

        if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
          // updateAttachClasses can be called more than once in a position call, so
          // we need to clean up after ourselves such that when the last defer gets
          // ran it doesn't add any extra classes from previous calls.
          this._addAttachClasses.splice(0, this._addAttachClasses.length);
        }

        if (typeof this._addAttachClasses === 'undefined') {
          this._addAttachClasses = [];
        }
        var add = this._addAttachClasses;

        if (elementAttach.top) {
          add.push(this.getClass('element-attached') + '-' + elementAttach.top);
        }
        if (elementAttach.left) {
          add.push(this.getClass('element-attached') + '-' + elementAttach.left);
        }
        if (targetAttach.top) {
          add.push(this.getClass('target-attached') + '-' + targetAttach.top);
        }
        if (targetAttach.left) {
          add.push(this.getClass('target-attached') + '-' + targetAttach.left);
        }

        var all = [];
        sides.forEach(function (side) {
          all.push(_this6.getClass('element-attached') + '-' + side);
          all.push(_this6.getClass('target-attached') + '-' + side);
        });

        defer(function () {
          if (!(typeof _this6._addAttachClasses !== 'undefined')) {
            return;
          }

          updateClasses(_this6.element, _this6._addAttachClasses, all);
          if (!(_this6.options.addTargetClasses === false)) {
            updateClasses(_this6.target, _this6._addAttachClasses, all);
          }

          delete _this6._addAttachClasses;
        });
      }
    }, {
      key: 'position',
      value: function position() {
        var _this7 = this;

        var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

        // flushChanges commits the changes immediately, leave true unless you are positioning multiple
        // tethers (in which case call Tether.Utils.flush yourself when you're done)

        if (!this.enabled) {
          return;
        }

        this.clearCache();

        // Turn 'auto' attachments into the appropriate corner or edge
        var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);

        this.updateAttachClasses(this.attachment, targetAttachment);

        var elementPos = this.cache('element-bounds', function () {
          return getBounds(_this7.element);
        });

        var width = elementPos.width;
        var height = elementPos.height;

        if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
          var _lastSize = this.lastSize;

          // We cache the height and width to make it possible to position elements that are
          // getting hidden.
          width = _lastSize.width;
          height = _lastSize.height;
        } else {
          this.lastSize = { width: width, height: height };
        }

        var targetPos = this.cache('target-bounds', function () {
          return _this7.getTargetBounds();
        });
        var targetSize = targetPos;

        // Get an actual px offset from the attachment
        var offset = offsetToPx(attachmentToOffset(this.attachment), { width: width, height: height });
        var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);

        var manualOffset = offsetToPx(this.offset, { width: width, height: height });
        var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);

        // Add the manually provided offset
        offset = addOffset(offset, manualOffset);
        targetOffset = addOffset(targetOffset, manualTargetOffset);

        // It's now our goal to make (element position + offset) == (target position + target offset)
        var left = targetPos.left + targetOffset.left - offset.left;
        var top = targetPos.top + targetOffset.top - offset.top;

        for (var i = 0; i < TetherBase.modules.length; ++i) {
          var _module2 = TetherBase.modules[i];
          var ret = _module2.position.call(this, {
            left: left,
            top: top,
            targetAttachment: targetAttachment,
            targetPos: targetPos,
            elementPos: elementPos,
            offset: offset,
            targetOffset: targetOffset,
            manualOffset: manualOffset,
            manualTargetOffset: manualTargetOffset,
            scrollbarSize: scrollbarSize,
            attachment: this.attachment
          });

          if (ret === false) {
            return false;
          } else if (typeof ret === 'undefined' || typeof ret !== 'object') {
            continue;
          } else {
            top = ret.top;
            left = ret.left;
          }
        }

        // We describe the position three different ways to give the optimizer
        // a chance to decide the best possible way to position the element
        // with the fewest repaints.
        var next = {
          // It's position relative to the page (absolute positioning when
          // the element is a child of the body)
          page: {
            top: top,
            left: left
          },

          // It's position relative to the viewport (fixed positioning)
          viewport: {
            top: top - pageYOffset,
            bottom: pageYOffset - top - height + innerHeight,
            left: left - pageXOffset,
            right: pageXOffset - left - width + innerWidth
          }
        };

        var doc = this.target.ownerDocument;
        var win = doc.defaultView;

        var scrollbarSize = undefined;
        if (win.innerHeight > doc.documentElement.clientHeight) {
          scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
          next.viewport.bottom -= scrollbarSize.height;
        }

        if (win.innerWidth > doc.documentElement.clientWidth) {
          scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
          next.viewport.right -= scrollbarSize.width;
        }

        if (['', 'static'].indexOf(doc.body.style.position) === -1 || ['', 'static'].indexOf(doc.body.parentElement.style.position) === -1) {
          // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
          next.page.bottom = doc.body.scrollHeight - top - height;
          next.page.right = doc.body.scrollWidth - left - width;
        }

        if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
          (function () {
            var offsetParent = _this7.cache('target-offsetparent', function () {
              return getOffsetParent(_this7.target);
            });
            var offsetPosition = _this7.cache('target-offsetparent-bounds', function () {
              return getBounds(offsetParent);
            });
            var offsetParentStyle = getComputedStyle(offsetParent);
            var offsetParentSize = offsetPosition;

            var offsetBorder = {};
            ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
              offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
            });

            offsetPosition.right = doc.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
            offsetPosition.bottom = doc.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;

            if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
              if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
                // We're within the visible part of the target's scroll parent
                var scrollTop = offsetParent.scrollTop;
                var scrollLeft = offsetParent.scrollLeft;

                // It's position relative to the target's offset parent (absolute positioning when
                // the element is moved to be a child of the target's offset parent).
                next.offset = {
                  top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
                  left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
                };
              }
            }
          })();
        }

        // We could also travel up the DOM and try each containing context, rather than only
        // looking at the body, but we're gonna get diminishing returns.

        this.move(next);

        this.history.unshift(next);

        if (this.history.length > 3) {
          this.history.pop();
        }

        if (flushChanges) {
          flush();
        }

        return true;
      }

      // THE ISSUE
    }, {
      key: 'move',
      value: function move(pos) {
        var _this8 = this;

        if (!(typeof this.element.parentNode !== 'undefined')) {
          return;
        }

        var same = {};

        for (var type in pos) {
          same[type] = {};

          for (var key in pos[type]) {
            var found = false;

            for (var i = 0; i < this.history.length; ++i) {
              var point = this.history[i];
              if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
                found = true;
                break;
              }
            }

            if (!found) {
              same[type][key] = true;
            }
          }
        }

        var css = { top: '', left: '', right: '', bottom: '' };

        var transcribe = function transcribe(_same, _pos) {
          var hasOptimizations = typeof _this8.options.optimizations !== 'undefined';
          var gpu = hasOptimizations ? _this8.options.optimizations.gpu : null;
          if (gpu !== false) {
            var yPos = undefined,
                xPos = undefined;
            if (_same.top) {
              css.top = 0;
              yPos = _pos.top;
            } else {
              css.bottom = 0;
              yPos = -_pos.bottom;
            }

            if (_same.left) {
              css.left = 0;
              xPos = _pos.left;
            } else {
              css.right = 0;
              xPos = -_pos.right;
            }

            if (window.matchMedia) {
              // HubSpot/tether#207
              var retina = window.matchMedia('only screen and (min-resolution: 1.3dppx)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3)').matches;
              if (!retina) {
                xPos = Math.round(xPos);
                yPos = Math.round(yPos);
              }
            }

            css[transformKey] = 'translateX(' + xPos + 'px) translateY(' + yPos + 'px)';

            if (transformKey !== 'msTransform') {
              // The Z transform will keep this in the GPU (faster, and prevents artifacts),
              // but IE9 doesn't support 3d transforms and will choke.
              css[transformKey] += " translateZ(0)";
            }
          } else {
            if (_same.top) {
              css.top = _pos.top + 'px';
            } else {
              css.bottom = _pos.bottom + 'px';
            }

            if (_same.left) {
              css.left = _pos.left + 'px';
            } else {
              css.right = _pos.right + 'px';
            }
          }
        };

        var moved = false;
        if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
          css.position = 'absolute';
          transcribe(same.page, pos.page);
        } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
          css.position = 'fixed';
          transcribe(same.viewport, pos.viewport);
        } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
          (function () {
            css.position = 'absolute';
            var offsetParent = _this8.cache('target-offsetparent', function () {
              return getOffsetParent(_this8.target);
            });

            if (getOffsetParent(_this8.element) !== offsetParent) {
              defer(function () {
                _this8.element.parentNode.removeChild(_this8.element);
                offsetParent.appendChild(_this8.element);
              });
            }

            transcribe(same.offset, pos.offset);
            moved = true;
          })();
        } else {
          css.position = 'absolute';
          transcribe({ top: true, left: true }, pos.page);
        }

        if (!moved) {
          if (this.options.bodyElement) {
            if (this.element.parentNode !== this.options.bodyElement) {
              this.options.bodyElement.appendChild(this.element);
            }
          } else {
            var offsetParentIsBody = true;
            var currentNode = this.element.parentNode;
            while (currentNode && currentNode.nodeType === 1 && currentNode.tagName !== 'BODY') {
              if (getComputedStyle(currentNode).position !== 'static') {
                offsetParentIsBody = false;
                break;
              }

              currentNode = currentNode.parentNode;
            }

            if (!offsetParentIsBody) {
              this.element.parentNode.removeChild(this.element);
              this.element.ownerDocument.body.appendChild(this.element);
            }
          }
        }

        // Any css change will trigger a repaint, so let's avoid one if nothing changed
        var writeCSS = {};
        var write = false;
        for (var key in css) {
          var val = css[key];
          var elVal = this.element.style[key];

          if (elVal !== val) {
            write = true;
            writeCSS[key] = val;
          }
        }

        if (write) {
          defer(function () {
            extend(_this8.element.style, writeCSS);
            _this8.trigger('repositioned');
          });
        }
      }
    }]);

    return TetherClass;
  }(Evented);

  TetherClass.modules = [];

  TetherBase.position = position;

  var Tether = extend(TetherClass, TetherBase);
  /* globals TetherBase */

  'use strict';

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;_e = err;
      } finally {
        try {
          if (!_n && _i['return']) _i['return']();
        } finally {
          if (_d) throw _e;
        }
      }return _arr;
    }return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError('Invalid attempt to destructure non-iterable instance');
      }
    };
  }();

  var _TetherBase$Utils = TetherBase.Utils;
  var getBounds = _TetherBase$Utils.getBounds;
  var extend = _TetherBase$Utils.extend;
  var updateClasses = _TetherBase$Utils.updateClasses;
  var defer = _TetherBase$Utils.defer;

  var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];

  function getBoundingRect(tether, to) {
    if (to === 'scrollParent') {
      to = tether.scrollParents[0];
    } else if (to === 'window') {
      to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
    }

    if (to === document) {
      to = to.documentElement;
    }

    if (typeof to.nodeType !== 'undefined') {
      (function () {
        var node = to;
        var size = getBounds(to);
        var pos = size;
        var style = getComputedStyle(to);

        to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];

        // Account any parent Frames scroll offset
        if (node.ownerDocument !== document) {
          var win = node.ownerDocument.defaultView;
          to[0] += win.pageXOffset;
          to[1] += win.pageYOffset;
          to[2] += win.pageXOffset;
          to[3] += win.pageYOffset;
        }

        BOUNDS_FORMAT.forEach(function (side, i) {
          side = side[0].toUpperCase() + side.substr(1);
          if (side === 'Top' || side === 'Left') {
            to[i] += parseFloat(style['border' + side + 'Width']);
          } else {
            to[i] -= parseFloat(style['border' + side + 'Width']);
          }
        });
      })();
    }

    return to;
  }

  TetherBase.modules.push({
    position: function position(_ref) {
      var _this = this;

      var top = _ref.top;
      var left = _ref.left;
      var targetAttachment = _ref.targetAttachment;

      if (!this.options.constraints) {
        return true;
      }

      var _cache = this.cache('element-bounds', function () {
        return getBounds(_this.element);
      });

      var height = _cache.height;
      var width = _cache.width;

      if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
        var _lastSize = this.lastSize;

        // Handle the item getting hidden as a result of our positioning without glitching
        // the classes in and out
        width = _lastSize.width;
        height = _lastSize.height;
      }

      var targetSize = this.cache('target-bounds', function () {
        return _this.getTargetBounds();
      });

      var targetHeight = targetSize.height;
      var targetWidth = targetSize.width;

      var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];

      this.options.constraints.forEach(function (constraint) {
        var outOfBoundsClass = constraint.outOfBoundsClass;
        var pinnedClass = constraint.pinnedClass;

        if (outOfBoundsClass) {
          allClasses.push(outOfBoundsClass);
        }
        if (pinnedClass) {
          allClasses.push(pinnedClass);
        }
      });

      allClasses.forEach(function (cls) {
        ['left', 'top', 'right', 'bottom'].forEach(function (side) {
          allClasses.push(cls + '-' + side);
        });
      });

      var addClasses = [];

      var tAttachment = extend({}, targetAttachment);
      var eAttachment = extend({}, this.attachment);

      this.options.constraints.forEach(function (constraint) {
        var to = constraint.to;
        var attachment = constraint.attachment;
        var pin = constraint.pin;

        if (typeof attachment === 'undefined') {
          attachment = '';
        }

        var changeAttachX = undefined,
            changeAttachY = undefined;
        if (attachment.indexOf(' ') >= 0) {
          var _attachment$split = attachment.split(' ');

          var _attachment$split2 = _slicedToArray(_attachment$split, 2);

          changeAttachY = _attachment$split2[0];
          changeAttachX = _attachment$split2[1];
        } else {
          changeAttachX = changeAttachY = attachment;
        }

        var bounds = getBoundingRect(_this, to);

        if (changeAttachY === 'target' || changeAttachY === 'both') {
          if (top < bounds[1] && tAttachment.top === 'top') {
            top += targetHeight;
            tAttachment.top = 'bottom';
          }

          if (top + height > bounds[3] && tAttachment.top === 'bottom') {
            top -= targetHeight;
            tAttachment.top = 'top';
          }
        }

        if (changeAttachY === 'together') {
          if (tAttachment.top === 'top') {
            if (eAttachment.top === 'bottom' && top < bounds[1]) {
              top += targetHeight;
              tAttachment.top = 'bottom';

              top += height;
              eAttachment.top = 'top';
            } else if (eAttachment.top === 'top' && top + height > bounds[3] && top - (height - targetHeight) >= bounds[1]) {
              top -= height - targetHeight;
              tAttachment.top = 'bottom';

              eAttachment.top = 'bottom';
            }
          }

          if (tAttachment.top === 'bottom') {
            if (eAttachment.top === 'top' && top + height > bounds[3]) {
              top -= targetHeight;
              tAttachment.top = 'top';

              top -= height;
              eAttachment.top = 'bottom';
            } else if (eAttachment.top === 'bottom' && top < bounds[1] && top + (height * 2 - targetHeight) <= bounds[3]) {
              top += height - targetHeight;
              tAttachment.top = 'top';

              eAttachment.top = 'top';
            }
          }

          if (tAttachment.top === 'middle') {
            if (top + height > bounds[3] && eAttachment.top === 'top') {
              top -= height;
              eAttachment.top = 'bottom';
            } else if (top < bounds[1] && eAttachment.top === 'bottom') {
              top += height;
              eAttachment.top = 'top';
            }
          }
        }

        if (changeAttachX === 'target' || changeAttachX === 'both') {
          if (left < bounds[0] && tAttachment.left === 'left') {
            left += targetWidth;
            tAttachment.left = 'right';
          }

          if (left + width > bounds[2] && tAttachment.left === 'right') {
            left -= targetWidth;
            tAttachment.left = 'left';
          }
        }

        if (changeAttachX === 'together') {
          if (left < bounds[0] && tAttachment.left === 'left') {
            if (eAttachment.left === 'right') {
              left += targetWidth;
              tAttachment.left = 'right';

              left += width;
              eAttachment.left = 'left';
            } else if (eAttachment.left === 'left') {
              left += targetWidth;
              tAttachment.left = 'right';

              left -= width;
              eAttachment.left = 'right';
            }
          } else if (left + width > bounds[2] && tAttachment.left === 'right') {
            if (eAttachment.left === 'left') {
              left -= targetWidth;
              tAttachment.left = 'left';

              left -= width;
              eAttachment.left = 'right';
            } else if (eAttachment.left === 'right') {
              left -= targetWidth;
              tAttachment.left = 'left';

              left += width;
              eAttachment.left = 'left';
            }
          } else if (tAttachment.left === 'center') {
            if (left + width > bounds[2] && eAttachment.left === 'left') {
              left -= width;
              eAttachment.left = 'right';
            } else if (left < bounds[0] && eAttachment.left === 'right') {
              left += width;
              eAttachment.left = 'left';
            }
          }
        }

        if (changeAttachY === 'element' || changeAttachY === 'both') {
          if (top < bounds[1] && eAttachment.top === 'bottom') {
            top += height;
            eAttachment.top = 'top';
          }

          if (top + height > bounds[3] && eAttachment.top === 'top') {
            top -= height;
            eAttachment.top = 'bottom';
          }
        }

        if (changeAttachX === 'element' || changeAttachX === 'both') {
          if (left < bounds[0]) {
            if (eAttachment.left === 'right') {
              left += width;
              eAttachment.left = 'left';
            } else if (eAttachment.left === 'center') {
              left += width / 2;
              eAttachment.left = 'left';
            }
          }

          if (left + width > bounds[2]) {
            if (eAttachment.left === 'left') {
              left -= width;
              eAttachment.left = 'right';
            } else if (eAttachment.left === 'center') {
              left -= width / 2;
              eAttachment.left = 'right';
            }
          }
        }

        if (typeof pin === 'string') {
          pin = pin.split(',').map(function (p) {
            return p.trim();
          });
        } else if (pin === true) {
          pin = ['top', 'left', 'right', 'bottom'];
        }

        pin = pin || [];

        var pinned = [];
        var oob = [];

        if (top < bounds[1]) {
          if (pin.indexOf('top') >= 0) {
            top = bounds[1];
            pinned.push('top');
          } else {
            oob.push('top');
          }
        }

        if (top + height > bounds[3]) {
          if (pin.indexOf('bottom') >= 0) {
            top = bounds[3] - height;
            pinned.push('bottom');
          } else {
            oob.push('bottom');
          }
        }

        if (left < bounds[0]) {
          if (pin.indexOf('left') >= 0) {
            left = bounds[0];
            pinned.push('left');
          } else {
            oob.push('left');
          }
        }

        if (left + width > bounds[2]) {
          if (pin.indexOf('right') >= 0) {
            left = bounds[2] - width;
            pinned.push('right');
          } else {
            oob.push('right');
          }
        }

        if (pinned.length) {
          (function () {
            var pinnedClass = undefined;
            if (typeof _this.options.pinnedClass !== 'undefined') {
              pinnedClass = _this.options.pinnedClass;
            } else {
              pinnedClass = _this.getClass('pinned');
            }

            addClasses.push(pinnedClass);
            pinned.forEach(function (side) {
              addClasses.push(pinnedClass + '-' + side);
            });
          })();
        }

        if (oob.length) {
          (function () {
            var oobClass = undefined;
            if (typeof _this.options.outOfBoundsClass !== 'undefined') {
              oobClass = _this.options.outOfBoundsClass;
            } else {
              oobClass = _this.getClass('out-of-bounds');
            }

            addClasses.push(oobClass);
            oob.forEach(function (side) {
              addClasses.push(oobClass + '-' + side);
            });
          })();
        }

        if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
          eAttachment.left = tAttachment.left = false;
        }
        if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
          eAttachment.top = tAttachment.top = false;
        }

        if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
          _this.updateAttachClasses(eAttachment, tAttachment);
          _this.trigger('update', {
            attachment: eAttachment,
            targetAttachment: tAttachment
          });
        }
      });

      defer(function () {
        if (!(_this.options.addTargetClasses === false)) {
          updateClasses(_this.target, addClasses, allClasses);
        }
        updateClasses(_this.element, addClasses, allClasses);
      });

      return { top: top, left: left };
    }
  });
  /* globals TetherBase */

  'use strict';

  var _TetherBase$Utils = TetherBase.Utils;
  var getBounds = _TetherBase$Utils.getBounds;
  var updateClasses = _TetherBase$Utils.updateClasses;
  var defer = _TetherBase$Utils.defer;

  TetherBase.modules.push({
    position: function position(_ref) {
      var _this = this;

      var top = _ref.top;
      var left = _ref.left;

      var _cache = this.cache('element-bounds', function () {
        return getBounds(_this.element);
      });

      var height = _cache.height;
      var width = _cache.width;

      var targetPos = this.getTargetBounds();

      var bottom = top + height;
      var right = left + width;

      var abutted = [];
      if (top <= targetPos.bottom && bottom >= targetPos.top) {
        ['left', 'right'].forEach(function (side) {
          var targetPosSide = targetPos[side];
          if (targetPosSide === left || targetPosSide === right) {
            abutted.push(side);
          }
        });
      }

      if (left <= targetPos.right && right >= targetPos.left) {
        ['top', 'bottom'].forEach(function (side) {
          var targetPosSide = targetPos[side];
          if (targetPosSide === top || targetPosSide === bottom) {
            abutted.push(side);
          }
        });
      }

      var allClasses = [];
      var addClasses = [];

      var sides = ['left', 'top', 'right', 'bottom'];
      allClasses.push(this.getClass('abutted'));
      sides.forEach(function (side) {
        allClasses.push(_this.getClass('abutted') + '-' + side);
      });

      if (abutted.length) {
        addClasses.push(this.getClass('abutted'));
      }

      abutted.forEach(function (side) {
        addClasses.push(_this.getClass('abutted') + '-' + side);
      });

      defer(function () {
        if (!(_this.options.addTargetClasses === false)) {
          updateClasses(_this.target, addClasses, allClasses);
        }
        updateClasses(_this.element, addClasses, allClasses);
      });

      return true;
    }
  });
  /* globals TetherBase */

  'use strict';

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;_e = err;
      } finally {
        try {
          if (!_n && _i['return']) _i['return']();
        } finally {
          if (_d) throw _e;
        }
      }return _arr;
    }return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError('Invalid attempt to destructure non-iterable instance');
      }
    };
  }();

  TetherBase.modules.push({
    position: function position(_ref) {
      var top = _ref.top;
      var left = _ref.left;

      if (!this.options.shift) {
        return;
      }

      var shift = this.options.shift;
      if (typeof this.options.shift === 'function') {
        shift = this.options.shift.call(this, { top: top, left: left });
      }

      var shiftTop = undefined,
          shiftLeft = undefined;
      if (typeof shift === 'string') {
        shift = shift.split(' ');
        shift[1] = shift[1] || shift[0];

        var _shift = shift;

        var _shift2 = _slicedToArray(_shift, 2);

        shiftTop = _shift2[0];
        shiftLeft = _shift2[1];

        shiftTop = parseFloat(shiftTop, 10);
        shiftLeft = parseFloat(shiftLeft, 10);
      } else {
        shiftTop = shift.top;
        shiftLeft = shift.left;
      }

      top += shiftTop;
      left += shiftLeft;

      return { top: top, left: left };
    }
  });
  return Tether;
});

/***/ }),

/***/ "./node_modules/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 *  Bootstrap TouchSpin - v3.1.1
 *  A mobile and touch friendly input spinner component for Bootstrap 3.
 *  http://www.virtuosoft.eu/code/bootstrap-touchspin/
 *
 *  Made by István Ujj-Mészáros
 *  Under Apache License v2.0 License
 */
(function ($) {
  'use strict';

  var _currentSpinnerId = 0;

  function _scopedEventName(name, id) {
    return name + '.touchspin_' + id;
  }

  function _scopeEventNames(names, id) {
    return $.map(names, function (name) {
      return _scopedEventName(name, id);
    });
  }

  $.fn.TouchSpin = function (options) {

    if (options === 'destroy') {
      this.each(function () {
        var originalinput = $(this),
            originalinput_data = originalinput.data();
        $(document).off(_scopeEventNames(['mouseup', 'touchend', 'touchcancel', 'mousemove', 'touchmove', 'scroll', 'scrollstart'], originalinput_data.spinnerid).join(' '));
      });
      return;
    }

    var defaults = {
      min: 0,
      max: 100,
      initval: '',
      replacementval: '',
      step: 1,
      decimals: 0,
      stepinterval: 100,
      forcestepdivisibility: 'round', // none | floor | round | ceil
      stepintervaldelay: 500,
      verticalbuttons: false,
      verticalupclass: 'glyphicon glyphicon-chevron-up',
      verticaldownclass: 'glyphicon glyphicon-chevron-down',
      prefix: '',
      postfix: '',
      prefix_extraclass: '',
      postfix_extraclass: '',
      booster: true,
      boostat: 10,
      maxboostedstep: false,
      mousewheel: true,
      buttondown_class: 'btn btn-default',
      buttonup_class: 'btn btn-default',
      buttondown_txt: '-',
      buttonup_txt: '+'
    };

    var attributeMap = {
      min: 'min',
      max: 'max',
      initval: 'init-val',
      replacementval: 'replacement-val',
      step: 'step',
      decimals: 'decimals',
      stepinterval: 'step-interval',
      verticalbuttons: 'vertical-buttons',
      verticalupclass: 'vertical-up-class',
      verticaldownclass: 'vertical-down-class',
      forcestepdivisibility: 'force-step-divisibility',
      stepintervaldelay: 'step-interval-delay',
      prefix: 'prefix',
      postfix: 'postfix',
      prefix_extraclass: 'prefix-extra-class',
      postfix_extraclass: 'postfix-extra-class',
      booster: 'booster',
      boostat: 'boostat',
      maxboostedstep: 'max-boosted-step',
      mousewheel: 'mouse-wheel',
      buttondown_class: 'button-down-class',
      buttonup_class: 'button-up-class',
      buttondown_txt: 'button-down-txt',
      buttonup_txt: 'button-up-txt'
    };

    return this.each(function () {

      var settings,
          originalinput = $(this),
          originalinput_data = originalinput.data(),
          container,
          elements,
          value,
          downSpinTimer,
          upSpinTimer,
          downDelayTimeout,
          upDelayTimeout,
          spincount = 0,
          spinning = false;

      init();

      function init() {
        if (originalinput.data('alreadyinitialized')) {
          return;
        }

        originalinput.data('alreadyinitialized', true);
        _currentSpinnerId += 1;
        originalinput.data('spinnerid', _currentSpinnerId);

        if (!originalinput.is('input')) {
          console.log('Must be an input.');
          return;
        }

        _initSettings();
        _setInitval();
        _checkValue();
        _buildHtml();
        _initElements();
        _hideEmptyPrefixPostfix();
        _bindEvents();
        _bindEventsInterface();
        elements.input.css('display', 'block');
      }

      function _setInitval() {
        if (settings.initval !== '' && originalinput.val() === '') {
          originalinput.val(settings.initval);
        }
      }

      function changeSettings(newsettings) {
        _updateSettings(newsettings);
        _checkValue();

        var value = elements.input.val();

        if (value !== '') {
          value = Number(elements.input.val());
          elements.input.val(value.toFixed(settings.decimals));
        }
      }

      function _initSettings() {
        settings = $.extend({}, defaults, originalinput_data, _parseAttributes(), options);
      }

      function _parseAttributes() {
        var data = {};
        $.each(attributeMap, function (key, value) {
          var attrName = 'bts-' + value + '';
          if (originalinput.is('[data-' + attrName + ']')) {
            data[key] = originalinput.data(attrName);
          }
        });
        return data;
      }

      function _updateSettings(newsettings) {
        settings = $.extend({}, settings, newsettings);
      }

      function _buildHtml() {
        var initval = originalinput.val(),
            parentelement = originalinput.parent();

        if (initval !== '') {
          initval = Number(initval).toFixed(settings.decimals);
        }

        originalinput.data('initvalue', initval).val(initval);
        originalinput.addClass('form-control');

        if (parentelement.hasClass('input-group')) {
          _advanceInputGroup(parentelement);
        } else {
          _buildInputGroup();
        }
      }

      function _advanceInputGroup(parentelement) {
        parentelement.addClass('bootstrap-touchspin');

        var prev = originalinput.prev(),
            next = originalinput.next();

        var downhtml,
            uphtml,
            prefixhtml = '<span class="input-group-addon bootstrap-touchspin-prefix">' + settings.prefix + '</span>',
            postfixhtml = '<span class="input-group-addon bootstrap-touchspin-postfix">' + settings.postfix + '</span>';

        if (prev.hasClass('input-group-btn')) {
          downhtml = '<button class="' + settings.buttondown_class + ' bootstrap-touchspin-down" type="button">' + settings.buttondown_txt + '</button>';
          prev.append(downhtml);
        } else {
          downhtml = '<span class="input-group-btn"><button class="' + settings.buttondown_class + ' bootstrap-touchspin-down" type="button">' + settings.buttondown_txt + '</button></span>';
          $(downhtml).insertBefore(originalinput);
        }

        if (next.hasClass('input-group-btn')) {
          uphtml = '<button class="' + settings.buttonup_class + ' bootstrap-touchspin-up" type="button">' + settings.buttonup_txt + '</button>';
          next.prepend(uphtml);
        } else {
          uphtml = '<span class="input-group-btn"><button class="' + settings.buttonup_class + ' bootstrap-touchspin-up" type="button">' + settings.buttonup_txt + '</button></span>';
          $(uphtml).insertAfter(originalinput);
        }

        $(prefixhtml).insertBefore(originalinput);
        $(postfixhtml).insertAfter(originalinput);

        container = parentelement;
      }

      function _buildInputGroup() {
        var html;

        if (settings.verticalbuttons) {
          html = '<div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix">' + settings.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + settings.postfix + '</span><span class="input-group-btn-vertical"><button class="' + settings.buttondown_class + ' bootstrap-touchspin-up" type="button"><i class="' + settings.verticalupclass + '"></i></button><button class="' + settings.buttonup_class + ' bootstrap-touchspin-down" type="button"><i class="' + settings.verticaldownclass + '"></i></button></span></div>';
        } else {
          html = '<div class="input-group bootstrap-touchspin"><span class="input-group-btn"><button class="' + settings.buttondown_class + ' bootstrap-touchspin-down" type="button">' + settings.buttondown_txt + '</button></span><span class="input-group-addon bootstrap-touchspin-prefix">' + settings.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + settings.postfix + '</span><span class="input-group-btn"><button class="' + settings.buttonup_class + ' bootstrap-touchspin-up" type="button">' + settings.buttonup_txt + '</button></span></div>';
        }

        container = $(html).insertBefore(originalinput);

        $('.bootstrap-touchspin-prefix', container).after(originalinput);

        if (originalinput.hasClass('input-sm')) {
          container.addClass('input-group-sm');
        } else if (originalinput.hasClass('input-lg')) {
          container.addClass('input-group-lg');
        }
      }

      function _initElements() {
        elements = {
          down: $('.bootstrap-touchspin-down', container),
          up: $('.bootstrap-touchspin-up', container),
          input: $('input', container),
          prefix: $('.bootstrap-touchspin-prefix', container).addClass(settings.prefix_extraclass),
          postfix: $('.bootstrap-touchspin-postfix', container).addClass(settings.postfix_extraclass)
        };
      }

      function _hideEmptyPrefixPostfix() {
        if (settings.prefix === '') {
          elements.prefix.hide();
        }

        if (settings.postfix === '') {
          elements.postfix.hide();
        }
      }

      function _bindEvents() {
        originalinput.on('keydown', function (ev) {
          var code = ev.keyCode || ev.which;

          if (code === 38) {
            if (spinning !== 'up') {
              upOnce();
              startUpSpin();
            }
            ev.preventDefault();
          } else if (code === 40) {
            if (spinning !== 'down') {
              downOnce();
              startDownSpin();
            }
            ev.preventDefault();
          }
        });

        originalinput.on('keyup', function (ev) {
          var code = ev.keyCode || ev.which;

          if (code === 38) {
            stopSpin();
          } else if (code === 40) {
            stopSpin();
          }
        });

        originalinput.on('blur', function () {
          _checkValue();
        });

        elements.down.on('keydown', function (ev) {
          var code = ev.keyCode || ev.which;

          if (code === 32 || code === 13) {
            if (spinning !== 'down') {
              downOnce();
              startDownSpin();
            }
            ev.preventDefault();
          }
        });

        elements.down.on('keyup', function (ev) {
          var code = ev.keyCode || ev.which;

          if (code === 32 || code === 13) {
            stopSpin();
          }
        });

        elements.up.on('keydown', function (ev) {
          var code = ev.keyCode || ev.which;

          if (code === 32 || code === 13) {
            if (spinning !== 'up') {
              upOnce();
              startUpSpin();
            }
            ev.preventDefault();
          }
        });

        elements.up.on('keyup', function (ev) {
          var code = ev.keyCode || ev.which;

          if (code === 32 || code === 13) {
            stopSpin();
          }
        });

        elements.down.on('mousedown.touchspin', function (ev) {
          elements.down.off('touchstart.touchspin'); // android 4 workaround

          if (originalinput.is(':disabled')) {
            return;
          }

          downOnce();
          startDownSpin();

          ev.preventDefault();
          ev.stopPropagation();
        });

        elements.down.on('touchstart.touchspin', function (ev) {
          elements.down.off('mousedown.touchspin'); // android 4 workaround

          if (originalinput.is(':disabled')) {
            return;
          }

          downOnce();
          startDownSpin();

          ev.preventDefault();
          ev.stopPropagation();
        });

        elements.up.on('mousedown.touchspin', function (ev) {
          elements.up.off('touchstart.touchspin'); // android 4 workaround

          if (originalinput.is(':disabled')) {
            return;
          }

          upOnce();
          startUpSpin();

          ev.preventDefault();
          ev.stopPropagation();
        });

        elements.up.on('touchstart.touchspin', function (ev) {
          elements.up.off('mousedown.touchspin'); // android 4 workaround

          if (originalinput.is(':disabled')) {
            return;
          }

          upOnce();
          startUpSpin();

          ev.preventDefault();
          ev.stopPropagation();
        });

        elements.up.on('mouseout touchleave touchend touchcancel', function (ev) {
          if (!spinning) {
            return;
          }

          ev.stopPropagation();
          stopSpin();
        });

        elements.down.on('mouseout touchleave touchend touchcancel', function (ev) {
          if (!spinning) {
            return;
          }

          ev.stopPropagation();
          stopSpin();
        });

        elements.down.on('mousemove touchmove', function (ev) {
          if (!spinning) {
            return;
          }

          ev.stopPropagation();
          ev.preventDefault();
        });

        elements.up.on('mousemove touchmove', function (ev) {
          if (!spinning) {
            return;
          }

          ev.stopPropagation();
          ev.preventDefault();
        });

        $(document).on(_scopeEventNames(['mouseup', 'touchend', 'touchcancel'], _currentSpinnerId).join(' '), function (ev) {
          if (!spinning) {
            return;
          }

          ev.preventDefault();
          stopSpin();
        });

        $(document).on(_scopeEventNames(['mousemove', 'touchmove', 'scroll', 'scrollstart'], _currentSpinnerId).join(' '), function (ev) {
          if (!spinning) {
            return;
          }

          ev.preventDefault();
          stopSpin();
        });

        originalinput.on('mousewheel DOMMouseScroll', function (ev) {
          if (!settings.mousewheel || !originalinput.is(':focus')) {
            return;
          }

          var delta = ev.originalEvent.wheelDelta || -ev.originalEvent.deltaY || -ev.originalEvent.detail;

          ev.stopPropagation();
          ev.preventDefault();

          if (delta < 0) {
            downOnce();
          } else {
            upOnce();
          }
        });
      }

      function _bindEventsInterface() {
        originalinput.on('touchspin.uponce', function () {
          stopSpin();
          upOnce();
        });

        originalinput.on('touchspin.downonce', function () {
          stopSpin();
          downOnce();
        });

        originalinput.on('touchspin.startupspin', function () {
          startUpSpin();
        });

        originalinput.on('touchspin.startdownspin', function () {
          startDownSpin();
        });

        originalinput.on('touchspin.stopspin', function () {
          stopSpin();
        });

        originalinput.on('touchspin.updatesettings', function (e, newsettings) {
          changeSettings(newsettings);
        });
      }

      function _forcestepdivisibility(value) {
        switch (settings.forcestepdivisibility) {
          case 'round':
            return (Math.round(value / settings.step) * settings.step).toFixed(settings.decimals);
          case 'floor':
            return (Math.floor(value / settings.step) * settings.step).toFixed(settings.decimals);
          case 'ceil':
            return (Math.ceil(value / settings.step) * settings.step).toFixed(settings.decimals);
          default:
            return value;
        }
      }

      function _checkValue() {
        var val, parsedval, returnval;

        val = originalinput.val();

        if (val === '') {
          if (settings.replacementval !== '') {
            originalinput.val(settings.replacementval);
            originalinput.trigger('change');
          }
          return;
        }

        if (settings.decimals > 0 && val === '.') {
          return;
        }

        parsedval = parseFloat(val);

        if (isNaN(parsedval)) {
          if (settings.replacementval !== '') {
            parsedval = settings.replacementval;
          } else {
            parsedval = 0;
          }
        }

        returnval = parsedval;

        if (parsedval.toString() !== val) {
          returnval = parsedval;
        }

        if (parsedval < settings.min) {
          returnval = settings.min;
        }

        if (parsedval > settings.max) {
          returnval = settings.max;
        }

        returnval = _forcestepdivisibility(returnval);

        if (Number(val).toString() !== returnval.toString()) {
          originalinput.val(returnval);
          originalinput.trigger('change');
        }
      }

      function _getBoostedStep() {
        if (!settings.booster) {
          return settings.step;
        } else {
          var boosted = Math.pow(2, Math.floor(spincount / settings.boostat)) * settings.step;

          if (settings.maxboostedstep) {
            if (boosted > settings.maxboostedstep) {
              boosted = settings.maxboostedstep;
              value = Math.round(value / boosted) * boosted;
            }
          }

          return Math.max(settings.step, boosted);
        }
      }

      function upOnce() {
        _checkValue();

        value = parseFloat(elements.input.val());
        if (isNaN(value)) {
          value = 0;
        }

        var initvalue = value,
            boostedstep = _getBoostedStep();

        value = value + boostedstep;

        if (value > settings.max) {
          value = settings.max;
          originalinput.trigger('touchspin.on.max');
          stopSpin();
        }

        elements.input.val(Number(value).toFixed(settings.decimals));

        if (initvalue !== value) {
          originalinput.trigger('change');
        }
      }

      function downOnce() {
        _checkValue();

        value = parseFloat(elements.input.val());
        if (isNaN(value)) {
          value = 0;
        }

        var initvalue = value,
            boostedstep = _getBoostedStep();

        value = value - boostedstep;

        if (value < settings.min) {
          value = settings.min;
          originalinput.trigger('touchspin.on.min');
          stopSpin();
        }

        elements.input.val(value.toFixed(settings.decimals));

        if (initvalue !== value) {
          originalinput.trigger('change');
        }
      }

      function startDownSpin() {
        stopSpin();

        spincount = 0;
        spinning = 'down';

        originalinput.trigger('touchspin.on.startspin');
        originalinput.trigger('touchspin.on.startdownspin');

        downDelayTimeout = setTimeout(function () {
          downSpinTimer = setInterval(function () {
            spincount++;
            downOnce();
          }, settings.stepinterval);
        }, settings.stepintervaldelay);
      }

      function startUpSpin() {
        stopSpin();

        spincount = 0;
        spinning = 'up';

        originalinput.trigger('touchspin.on.startspin');
        originalinput.trigger('touchspin.on.startupspin');

        upDelayTimeout = setTimeout(function () {
          upSpinTimer = setInterval(function () {
            spincount++;
            upOnce();
          }, settings.stepinterval);
        }, settings.stepintervaldelay);
      }

      function stopSpin() {
        clearTimeout(downDelayTimeout);
        clearTimeout(upDelayTimeout);
        clearInterval(downSpinTimer);
        clearInterval(upSpinTimer);

        switch (spinning) {
          case 'up':
            originalinput.trigger('touchspin.on.stopupspin');
            originalinput.trigger('touchspin.on.stopspin');
            break;
          case 'down':
            originalinput.trigger('touchspin.on.stopdownspin');
            originalinput.trigger('touchspin.on.stopspin');
            break;
        }

        spincount = 0;
        spinning = false;
      }
    });
  };
})(jQuery);

/***/ }),

/***/ "./node_modules/bootstrap/dist/js/bootstrap.min.js":
/*!*********************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.min.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function (t, e) {
   true ? e(exports, __webpack_require__(/*! jquery */ "jquery"), __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")) : undefined;
}(this, function (t, g, u) {
  "use strict";
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }function s(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }function l(o) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
          e = Object.keys(r);"function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(r).filter(function (t) {
        return Object.getOwnPropertyDescriptor(r, t).enumerable;
      }))), e.forEach(function (t) {
        var e, n, i;e = o, i = r[n = t], n in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = i;
      });
    }return o;
  }g = g && g.hasOwnProperty("default") ? g.default : g, u = u && u.hasOwnProperty("default") ? u.default : u;var e = "transitionend";function n(t) {
    var e = this,
        n = !1;return g(this).one(_.TRANSITION_END, function () {
      n = !0;
    }), setTimeout(function () {
      n || _.triggerTransitionEnd(e);
    }, t), this;
  }var _ = { TRANSITION_END: "bsTransitionEnd", getUID: function (t) {
      for (; t += ~~(1e6 * Math.random()), document.getElementById(t););return t;
    }, getSelectorFromElement: function (t) {
      var e = t.getAttribute("data-target");if (!e || "#" === e) {
        var n = t.getAttribute("href");e = n && "#" !== n ? n.trim() : "";
      }try {
        return document.querySelector(e) ? e : null;
      } catch (t) {
        return null;
      }
    }, getTransitionDurationFromElement: function (t) {
      if (!t) return 0;var e = g(t).css("transition-duration"),
          n = g(t).css("transition-delay"),
          i = parseFloat(e),
          o = parseFloat(n);return i || o ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0;
    }, reflow: function (t) {
      return t.offsetHeight;
    }, triggerTransitionEnd: function (t) {
      g(t).trigger(e);
    }, supportsTransitionEnd: function () {
      return Boolean(e);
    }, isElement: function (t) {
      return (t[0] || t).nodeType;
    }, typeCheckConfig: function (t, e, n) {
      for (var i in n) if (Object.prototype.hasOwnProperty.call(n, i)) {
        var o = n[i],
            r = e[i],
            s = r && _.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".');
      }var a;
    }, findShadowRoot: function (t) {
      if (!document.documentElement.attachShadow) return null;if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? _.findShadowRoot(t.parentNode) : null;var e = t.getRootNode();return e instanceof ShadowRoot ? e : null;
    } };g.fn.emulateTransitionEnd = n, g.event.special[_.TRANSITION_END] = { bindType: e, delegateType: e, handle: function (t) {
      if (g(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
    } };var o = "alert",
      r = "bs.alert",
      a = "." + r,
      c = g.fn[o],
      h = { CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + ".data-api" },
      f = "alert",
      d = "fade",
      m = "show",
      p = function () {
    function i(t) {
      this._element = t;
    }var t = i.prototype;return t.close = function (t) {
      var e = this._element;t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
    }, t.dispose = function () {
      g.removeData(this._element, r), this._element = null;
    }, t._getRootElement = function (t) {
      var e = _.getSelectorFromElement(t),
          n = !1;return e && (n = document.querySelector(e)), n || (n = g(t).closest("." + f)[0]), n;
    }, t._triggerCloseEvent = function (t) {
      var e = g.Event(h.CLOSE);return g(t).trigger(e), e;
    }, t._removeElement = function (e) {
      var n = this;if (g(e).removeClass(m), g(e).hasClass(d)) {
        var t = _.getTransitionDurationFromElement(e);g(e).one(_.TRANSITION_END, function (t) {
          return n._destroyElement(e, t);
        }).emulateTransitionEnd(t);
      } else this._destroyElement(e);
    }, t._destroyElement = function (t) {
      g(t).detach().trigger(h.CLOSED).remove();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this),
            e = t.data(r);e || (e = new i(this), t.data(r, e)), "close" === n && e[n](this);
      });
    }, i._handleDismiss = function (e) {
      return function (t) {
        t && t.preventDefault(), e.close(this);
      };
    }, s(i, null, [{ key: "VERSION", get: function () {
        return "4.3.1";
      } }]), i;
  }();g(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p())), g.fn[o] = p._jQueryInterface, g.fn[o].Constructor = p, g.fn[o].noConflict = function () {
    return g.fn[o] = c, p._jQueryInterface;
  };var v = "button",
      y = "bs.button",
      E = "." + y,
      C = ".data-api",
      T = g.fn[v],
      S = "active",
      b = "btn",
      I = "focus",
      D = '[data-toggle^="button"]',
      w = '[data-toggle="buttons"]',
      A = 'input:not([type="hidden"])',
      N = ".active",
      O = ".btn",
      k = { CLICK_DATA_API: "click" + E + C, FOCUS_BLUR_DATA_API: "focus" + E + C + " blur" + E + C },
      P = function () {
    function n(t) {
      this._element = t;
    }var t = n.prototype;return t.toggle = function () {
      var t = !0,
          e = !0,
          n = g(this._element).closest(w)[0];if (n) {
        var i = this._element.querySelector(A);if (i) {
          if ("radio" === i.type) if (i.checked && this._element.classList.contains(S)) t = !1;else {
            var o = n.querySelector(N);o && g(o).removeClass(S);
          }if (t) {
            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;i.checked = !this._element.classList.contains(S), g(i).trigger("change");
          }i.focus(), e = !1;
        }
      }e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(S)), t && g(this._element).toggleClass(S);
    }, t.dispose = function () {
      g.removeData(this._element, y), this._element = null;
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = g(this).data(y);t || (t = new n(this), g(this).data(y, t)), "toggle" === e && t[e]();
      });
    }, s(n, null, [{ key: "VERSION", get: function () {
        return "4.3.1";
      } }]), n;
  }();g(document).on(k.CLICK_DATA_API, D, function (t) {
    t.preventDefault();var e = t.target;g(e).hasClass(b) || (e = g(e).closest(O)), P._jQueryInterface.call(g(e), "toggle");
  }).on(k.FOCUS_BLUR_DATA_API, D, function (t) {
    var e = g(t.target).closest(O)[0];g(e).toggleClass(I, /^focus(in)?$/.test(t.type));
  }), g.fn[v] = P._jQueryInterface, g.fn[v].Constructor = P, g.fn[v].noConflict = function () {
    return g.fn[v] = T, P._jQueryInterface;
  };var L = "carousel",
      j = "bs.carousel",
      H = "." + j,
      R = ".data-api",
      x = g.fn[L],
      F = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
      U = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
      W = "next",
      q = "prev",
      M = "left",
      K = "right",
      Q = { SLIDE: "slide" + H, SLID: "slid" + H, KEYDOWN: "keydown" + H, MOUSEENTER: "mouseenter" + H, MOUSELEAVE: "mouseleave" + H, TOUCHSTART: "touchstart" + H, TOUCHMOVE: "touchmove" + H, TOUCHEND: "touchend" + H, POINTERDOWN: "pointerdown" + H, POINTERUP: "pointerup" + H, DRAG_START: "dragstart" + H, LOAD_DATA_API: "load" + H + R, CLICK_DATA_API: "click" + H + R },
      B = "carousel",
      V = "active",
      Y = "slide",
      z = "carousel-item-right",
      X = "carousel-item-left",
      $ = "carousel-item-next",
      G = "carousel-item-prev",
      J = "pointer-event",
      Z = ".active",
      tt = ".active.carousel-item",
      et = ".carousel-item",
      nt = ".carousel-item img",
      it = ".carousel-item-next, .carousel-item-prev",
      ot = ".carousel-indicators",
      rt = "[data-slide], [data-slide-to]",
      st = '[data-ride="carousel"]',
      at = { TOUCH: "touch", PEN: "pen" },
      lt = function () {
    function r(t, e) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(ot), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
    }var t = r.prototype;return t.next = function () {
      this._isSliding || this._slide(W);
    }, t.nextWhenVisible = function () {
      !document.hidden && g(this._element).is(":visible") && "hidden" !== g(this._element).css("visibility") && this.next();
    }, t.prev = function () {
      this._isSliding || this._slide(q);
    }, t.pause = function (t) {
      t || (this._isPaused = !0), this._element.querySelector(it) && (_.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, t.cycle = function (t) {
      t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, t.to = function (t) {
      var e = this;this._activeElement = this._element.querySelector(tt);var n = this._getItemIndex(this._activeElement);if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) g(this._element).one(Q.SLID, function () {
        return e.to(t);
      });else {
        if (n === t) return this.pause(), void this.cycle();var i = n < t ? W : q;this._slide(i, this._items[t]);
      }
    }, t.dispose = function () {
      g(this._element).off(H), g.removeData(this._element, j), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, t._getConfig = function (t) {
      return t = l({}, F, t), _.typeCheckConfig(L, t, U), t;
    }, t._handleSwipe = function () {
      var t = Math.abs(this.touchDeltaX);if (!(t <= 40)) {
        var e = t / this.touchDeltaX;0 < e && this.prev(), e < 0 && this.next();
      }
    }, t._addEventListeners = function () {
      var e = this;this._config.keyboard && g(this._element).on(Q.KEYDOWN, function (t) {
        return e._keydown(t);
      }), "hover" === this._config.pause && g(this._element).on(Q.MOUSEENTER, function (t) {
        return e.pause(t);
      }).on(Q.MOUSELEAVE, function (t) {
        return e.cycle(t);
      }), this._config.touch && this._addTouchEventListeners();
    }, t._addTouchEventListeners = function () {
      var n = this;if (this._touchSupported) {
        var e = function (t) {
          n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX);
        },
            i = function (t) {
          n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX), n._handleSwipe(), "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function (t) {
            return n.cycle(t);
          }, 500 + n._config.interval));
        };g(this._element.querySelectorAll(nt)).on(Q.DRAG_START, function (t) {
          return t.preventDefault();
        }), this._pointerEvent ? (g(this._element).on(Q.POINTERDOWN, function (t) {
          return e(t);
        }), g(this._element).on(Q.POINTERUP, function (t) {
          return i(t);
        }), this._element.classList.add(J)) : (g(this._element).on(Q.TOUCHSTART, function (t) {
          return e(t);
        }), g(this._element).on(Q.TOUCHMOVE, function (t) {
          var e;(e = t).originalEvent.touches && 1 < e.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = e.originalEvent.touches[0].clientX - n.touchStartX;
        }), g(this._element).on(Q.TOUCHEND, function (t) {
          return i(t);
        }));
      }
    }, t._keydown = function (t) {
      if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {case 37:
          t.preventDefault(), this.prev();break;case 39:
          t.preventDefault(), this.next();}
    }, t._getItemIndex = function (t) {
      return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(et)) : [], this._items.indexOf(t);
    }, t._getItemByDirection = function (t, e) {
      var n = t === W,
          i = t === q,
          o = this._getItemIndex(e),
          r = this._items.length - 1;if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;var s = (o + (t === q ? -1 : 1)) % this._items.length;return -1 === s ? this._items[this._items.length - 1] : this._items[s];
    }, t._triggerSlideEvent = function (t, e) {
      var n = this._getItemIndex(t),
          i = this._getItemIndex(this._element.querySelector(tt)),
          o = g.Event(Q.SLIDE, { relatedTarget: t, direction: e, from: i, to: n });return g(this._element).trigger(o), o;
    }, t._setActiveIndicatorElement = function (t) {
      if (this._indicatorsElement) {
        var e = [].slice.call(this._indicatorsElement.querySelectorAll(Z));g(e).removeClass(V);var n = this._indicatorsElement.children[this._getItemIndex(t)];n && g(n).addClass(V);
      }
    }, t._slide = function (t, e) {
      var n,
          i,
          o,
          r = this,
          s = this._element.querySelector(tt),
          a = this._getItemIndex(s),
          l = e || s && this._getItemByDirection(t, s),
          c = this._getItemIndex(l),
          h = Boolean(this._interval);if (o = t === W ? (n = X, i = $, M) : (n = z, i = G, K), l && g(l).hasClass(V)) this._isSliding = !1;else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
        this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l);var u = g.Event(Q.SLID, { relatedTarget: l, direction: o, from: a, to: c });if (g(this._element).hasClass(Y)) {
          g(l).addClass(i), _.reflow(l), g(s).addClass(n), g(l).addClass(n);var f = parseInt(l.getAttribute("data-interval"), 10);this._config.interval = f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, f) : this._config.defaultInterval || this._config.interval;var d = _.getTransitionDurationFromElement(s);g(s).one(_.TRANSITION_END, function () {
            g(l).removeClass(n + " " + i).addClass(V), g(s).removeClass(V + " " + i + " " + n), r._isSliding = !1, setTimeout(function () {
              return g(r._element).trigger(u);
            }, 0);
          }).emulateTransitionEnd(d);
        } else g(s).removeClass(V), g(l).addClass(V), this._isSliding = !1, g(this._element).trigger(u);h && this.cycle();
      }
    }, r._jQueryInterface = function (i) {
      return this.each(function () {
        var t = g(this).data(j),
            e = l({}, F, g(this).data());"object" == typeof i && (e = l({}, e, i));var n = "string" == typeof i ? i : e.slide;if (t || (t = new r(this, e), g(this).data(j, t)), "number" == typeof i) t.to(i);else if ("string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');t[n]();
        } else e.interval && e.ride && (t.pause(), t.cycle());
      });
    }, r._dataApiClickHandler = function (t) {
      var e = _.getSelectorFromElement(this);if (e) {
        var n = g(e)[0];if (n && g(n).hasClass(B)) {
          var i = l({}, g(n).data(), g(this).data()),
              o = this.getAttribute("data-slide-to");o && (i.interval = !1), r._jQueryInterface.call(g(n), i), o && g(n).data(j).to(o), t.preventDefault();
        }
      }
    }, s(r, null, [{ key: "VERSION", get: function () {
        return "4.3.1";
      } }, { key: "Default", get: function () {
        return F;
      } }]), r;
  }();g(document).on(Q.CLICK_DATA_API, rt, lt._dataApiClickHandler), g(window).on(Q.LOAD_DATA_API, function () {
    for (var t = [].slice.call(document.querySelectorAll(st)), e = 0, n = t.length; e < n; e++) {
      var i = g(t[e]);lt._jQueryInterface.call(i, i.data());
    }
  }), g.fn[L] = lt._jQueryInterface, g.fn[L].Constructor = lt, g.fn[L].noConflict = function () {
    return g.fn[L] = x, lt._jQueryInterface;
  };var ct = "collapse",
      ht = "bs.collapse",
      ut = "." + ht,
      ft = g.fn[ct],
      dt = { toggle: !0, parent: "" },
      gt = { toggle: "boolean", parent: "(string|element)" },
      _t = { SHOW: "show" + ut, SHOWN: "shown" + ut, HIDE: "hide" + ut, HIDDEN: "hidden" + ut, CLICK_DATA_API: "click" + ut + ".data-api" },
      mt = "show",
      pt = "collapse",
      vt = "collapsing",
      yt = "collapsed",
      Et = "width",
      Ct = "height",
      Tt = ".show, .collapsing",
      St = '[data-toggle="collapse"]',
      bt = function () {
    function a(e, t) {
      this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));for (var n = [].slice.call(document.querySelectorAll(St)), i = 0, o = n.length; i < o; i++) {
        var r = n[i],
            s = _.getSelectorFromElement(r),
            a = [].slice.call(document.querySelectorAll(s)).filter(function (t) {
          return t === e;
        });null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(r));
      }this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }var t = a.prototype;return t.toggle = function () {
      g(this._element).hasClass(mt) ? this.hide() : this.show();
    }, t.show = function () {
      var t,
          e,
          n = this;if (!this._isTransitioning && !g(this._element).hasClass(mt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(Tt)).filter(function (t) {
        return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(pt);
      })).length && (t = null), !(t && (e = g(t).not(this._selector).data(ht)) && e._isTransitioning))) {
        var i = g.Event(_t.SHOW);if (g(this._element).trigger(i), !i.isDefaultPrevented()) {
          t && (a._jQueryInterface.call(g(t).not(this._selector), "hide"), e || g(t).data(ht, null));var o = this._getDimension();g(this._element).removeClass(pt).addClass(vt), this._element.style[o] = 0, this._triggerArray.length && g(this._triggerArray).removeClass(yt).attr("aria-expanded", !0), this.setTransitioning(!0);var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
              s = _.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END, function () {
            g(n._element).removeClass(vt).addClass(pt).addClass(mt), n._element.style[o] = "", n.setTransitioning(!1), g(n._element).trigger(_t.SHOWN);
          }).emulateTransitionEnd(s), this._element.style[o] = this._element[r] + "px";
        }
      }
    }, t.hide = function () {
      var t = this;if (!this._isTransitioning && g(this._element).hasClass(mt)) {
        var e = g.Event(_t.HIDE);if (g(this._element).trigger(e), !e.isDefaultPrevented()) {
          var n = this._getDimension();this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", _.reflow(this._element), g(this._element).addClass(vt).removeClass(pt).removeClass(mt);var i = this._triggerArray.length;if (0 < i) for (var o = 0; o < i; o++) {
            var r = this._triggerArray[o],
                s = _.getSelectorFromElement(r);if (null !== s) g([].slice.call(document.querySelectorAll(s))).hasClass(mt) || g(r).addClass(yt).attr("aria-expanded", !1);
          }this.setTransitioning(!0);this._element.style[n] = "";var a = _.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END, function () {
            t.setTransitioning(!1), g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN);
          }).emulateTransitionEnd(a);
        }
      }
    }, t.setTransitioning = function (t) {
      this._isTransitioning = t;
    }, t.dispose = function () {
      g.removeData(this._element, ht), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, t._getConfig = function (t) {
      return (t = l({}, dt, t)).toggle = Boolean(t.toggle), _.typeCheckConfig(ct, t, gt), t;
    }, t._getDimension = function () {
      return g(this._element).hasClass(Et) ? Et : Ct;
    }, t._getParent = function () {
      var t,
          n = this;_.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
          i = [].slice.call(t.querySelectorAll(e));return g(i).each(function (t, e) {
        n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
      }), t;
    }, t._addAriaAndCollapsedClass = function (t, e) {
      var n = g(t).hasClass(mt);e.length && g(e).toggleClass(yt, !n).attr("aria-expanded", n);
    }, a._getTargetFromElement = function (t) {
      var e = _.getSelectorFromElement(t);return e ? document.querySelector(e) : null;
    }, a._jQueryInterface = function (i) {
      return this.each(function () {
        var t = g(this),
            e = t.data(ht),
            n = l({}, dt, t.data(), "object" == typeof i && i ? i : {});if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(ht, e)), "string" == typeof i) {
          if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');e[i]();
        }
      });
    }, s(a, null, [{ key: "VERSION", get: function () {
        return "4.3.1";
      } }, { key: "Default", get: function () {
        return dt;
      } }]), a;
  }();g(document).on(_t.CLICK_DATA_API, St, function (t) {
    "A" === t.currentTarget.tagName && t.preventDefault();var n = g(this),
        e = _.getSelectorFromElement(this),
        i = [].slice.call(document.querySelectorAll(e));g(i).each(function () {
      var t = g(this),
          e = t.data(ht) ? "toggle" : n.data();bt._jQueryInterface.call(t, e);
    });
  }), g.fn[ct] = bt._jQueryInterface, g.fn[ct].Constructor = bt, g.fn[ct].noConflict = function () {
    return g.fn[ct] = ft, bt._jQueryInterface;
  };var It = "dropdown",
      Dt = "bs.dropdown",
      wt = "." + Dt,
      At = ".data-api",
      Nt = g.fn[It],
      Ot = new RegExp("38|40|27"),
      kt = { HIDE: "hide" + wt, HIDDEN: "hidden" + wt, SHOW: "show" + wt, SHOWN: "shown" + wt, CLICK: "click" + wt, CLICK_DATA_API: "click" + wt + At, KEYDOWN_DATA_API: "keydown" + wt + At, KEYUP_DATA_API: "keyup" + wt + At },
      Pt = "disabled",
      Lt = "show",
      jt = "dropup",
      Ht = "dropright",
      Rt = "dropleft",
      xt = "dropdown-menu-right",
      Ft = "position-static",
      Ut = '[data-toggle="dropdown"]',
      Wt = ".dropdown form",
      qt = ".dropdown-menu",
      Mt = ".navbar-nav",
      Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
      Qt = "top-start",
      Bt = "top-end",
      Vt = "bottom-start",
      Yt = "bottom-end",
      zt = "right-start",
      Xt = "left-start",
      $t = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" },
      Gt = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" },
      Jt = function () {
    function c(t, e) {
      this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }var t = c.prototype;return t.toggle = function () {
      if (!this._element.disabled && !g(this._element).hasClass(Pt)) {
        var t = c._getParentFromElement(this._element),
            e = g(this._menu).hasClass(Lt);if (c._clearMenus(), !e) {
          var n = { relatedTarget: this._element },
              i = g.Event(kt.SHOW, n);if (g(t).trigger(i), !i.isDefaultPrevented()) {
            if (!this._inNavbar) {
              if ("undefined" == typeof u) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o = this._element;"parent" === this._config.reference ? o = t : _.isElement(this._config.reference) && (o = this._config.reference, "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && g(t).addClass(Ft), this._popper = new u(o, this._menu, this._getPopperConfig());
            }"ontouchstart" in document.documentElement && 0 === g(t).closest(Mt).length && g(document.body).children().on("mouseover", null, g.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), g(this._menu).toggleClass(Lt), g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN, n));
          }
        }
      }
    }, t.show = function () {
      if (!(this._element.disabled || g(this._element).hasClass(Pt) || g(this._menu).hasClass(Lt))) {
        var t = { relatedTarget: this._element },
            e = g.Event(kt.SHOW, t),
            n = c._getParentFromElement(this._element);g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN, t)));
      }
    }, t.hide = function () {
      if (!this._element.disabled && !g(this._element).hasClass(Pt) && g(this._menu).hasClass(Lt)) {
        var t = { relatedTarget: this._element },
            e = g.Event(kt.HIDE, t),
            n = c._getParentFromElement(this._element);g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN, t)));
      }
    }, t.dispose = function () {
      g.removeData(this._element, Dt), g(this._element).off(wt), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null);
    }, t.update = function () {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, t._addEventListeners = function () {
      var e = this;g(this._element).on(kt.CLICK, function (t) {
        t.preventDefault(), t.stopPropagation(), e.toggle();
      });
    }, t._getConfig = function (t) {
      return t = l({}, this.constructor.Default, g(this._element).data(), t), _.typeCheckConfig(It, t, this.constructor.DefaultType), t;
    }, t._getMenuElement = function () {
      if (!this._menu) {
        var t = c._getParentFromElement(this._element);t && (this._menu = t.querySelector(qt));
      }return this._menu;
    }, t._getPlacement = function () {
      var t = g(this._element.parentNode),
          e = Vt;return t.hasClass(jt) ? (e = Qt, g(this._menu).hasClass(xt) && (e = Bt)) : t.hasClass(Ht) ? e = zt : t.hasClass(Rt) ? e = Xt : g(this._menu).hasClass(xt) && (e = Yt), e;
    }, t._detectNavbar = function () {
      return 0 < g(this._element).closest(".navbar").length;
    }, t._getOffset = function () {
      var e = this,
          t = {};return "function" == typeof this._config.offset ? t.fn = function (t) {
        return t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t;
      } : t.offset = this._config.offset, t;
    }, t._getPopperConfig = function () {
      var t = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };return "static" === this._config.display && (t.modifiers.applyStyle = { enabled: !1 }), t;
    }, c._jQueryInterface = function (e) {
      return this.each(function () {
        var t = g(this).data(Dt);if (t || (t = new c(this, "object" == typeof e ? e : null), g(this).data(Dt, t)), "string" == typeof e) {
          if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');t[e]();
        }
      });
    }, c._clearMenus = function (t) {
      if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var e = [].slice.call(document.querySelectorAll(Ut)), n = 0, i = e.length; n < i; n++) {
        var o = c._getParentFromElement(e[n]),
            r = g(e[n]).data(Dt),
            s = { relatedTarget: e[n] };if (t && "click" === t.type && (s.clickEvent = t), r) {
          var a = r._menu;if (g(o).hasClass(Lt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && g.contains(o, t.target))) {
            var l = g.Event(kt.HIDE, s);g(o).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), e[n].setAttribute("aria-expanded", "false"), g(a).removeClass(Lt), g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN, s)));
          }
        }
      }
    }, c._getParentFromElement = function (t) {
      var e,
          n = _.getSelectorFromElement(t);return n && (e = document.querySelector(n)), e || t.parentNode;
    }, c._dataApiKeydownHandler = function (t) {
      if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || g(t.target).closest(qt).length)) : Ot.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !g(this).hasClass(Pt))) {
        var e = c._getParentFromElement(this),
            n = g(e).hasClass(Lt);if (n && (!n || 27 !== t.which && 32 !== t.which)) {
          var i = [].slice.call(e.querySelectorAll(Kt));if (0 !== i.length) {
            var o = i.indexOf(t.target);38 === t.which && 0 < o && o--, 40 === t.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus();
          }
        } else {
          if (27 === t.which) {
            var r = e.querySelector(Ut);g(r).trigger("focus");
          }g(this).trigger("click");
        }
      }
    }, s(c, null, [{ key: "VERSION", get: function () {
        return "4.3.1";
      } }, { key: "Default", get: function () {
        return $t;
      } }, { key: "DefaultType", get: function () {
        return Gt;
      } }]), c;
  }();g(document).on(kt.KEYDOWN_DATA_API, Ut, Jt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API, qt, Jt._dataApiKeydownHandler).on(kt.CLICK_DATA_API + " " + kt.KEYUP_DATA_API, Jt._clearMenus).on(kt.CLICK_DATA_API, Ut, function (t) {
    t.preventDefault(), t.stopPropagation(), Jt._jQueryInterface.call(g(this), "toggle");
  }).on(kt.CLICK_DATA_API, Wt, function (t) {
    t.stopPropagation();
  }), g.fn[It] = Jt._jQueryInterface, g.fn[It].Constructor = Jt, g.fn[It].noConflict = function () {
    return g.fn[It] = Nt, Jt._jQueryInterface;
  };var Zt = "modal",
      te = "bs.modal",
      ee = "." + te,
      ne = g.fn[Zt],
      ie = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
      oe = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
      re = { HIDE: "hide" + ee, HIDDEN: "hidden" + ee, SHOW: "show" + ee, SHOWN: "shown" + ee, FOCUSIN: "focusin" + ee, RESIZE: "resize" + ee, CLICK_DISMISS: "click.dismiss" + ee, KEYDOWN_DISMISS: "keydown.dismiss" + ee, MOUSEUP_DISMISS: "mouseup.dismiss" + ee, MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee, CLICK_DATA_API: "click" + ee + ".data-api" },
      se = "modal-dialog-scrollable",
      ae = "modal-scrollbar-measure",
      le = "modal-backdrop",
      ce = "modal-open",
      he = "fade",
      ue = "show",
      fe = ".modal-dialog",
      de = ".modal-body",
      ge = '[data-toggle="modal"]',
      _e = '[data-dismiss="modal"]',
      me = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      pe = ".sticky-top",
      ve = function () {
    function o(t, e) {
      this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(fe), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0;
    }var t = o.prototype;return t.toggle = function (t) {
      return this._isShown ? this.hide() : this.show(t);
    }, t.show = function (t) {
      var e = this;if (!this._isShown && !this._isTransitioning) {
        g(this._element).hasClass(he) && (this._isTransitioning = !0);var n = g.Event(re.SHOW, { relatedTarget: t });g(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), g(this._element).on(re.CLICK_DISMISS, _e, function (t) {
          return e.hide(t);
        }), g(this._dialog).on(re.MOUSEDOWN_DISMISS, function () {
          g(e._element).one(re.MOUSEUP_DISMISS, function (t) {
            g(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return e._showElement(t);
        }));
      }
    }, t.hide = function (t) {
      var e = this;if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
        var n = g.Event(re.HIDE);if (g(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
          this._isShown = !1;var i = g(this._element).hasClass(he);if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), g(document).off(re.FOCUSIN), g(this._element).removeClass(ue), g(this._element).off(re.CLICK_DISMISS), g(this._dialog).off(re.MOUSEDOWN_DISMISS), i) {
            var o = _.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END, function (t) {
              return e._hideModal(t);
            }).emulateTransitionEnd(o);
          } else this._hideModal();
        }
      }
    }, t.dispose = function () {
      [window, this._element, this._dialog].forEach(function (t) {
        return g(t).off(ee);
      }), g(document).off(re.FOCUSIN), g.removeData(this._element, te), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
    }, t.handleUpdate = function () {
      this._adjustDialog();
    }, t._getConfig = function (t) {
      return t = l({}, ie, t), _.typeCheckConfig(Zt, t, oe), t;
    }, t._showElement = function (t) {
      var e = this,
          n = g(this._element).hasClass(he);this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), g(this._dialog).hasClass(se) ? this._dialog.querySelector(de).scrollTop = 0 : this._element.scrollTop = 0, n && _.reflow(this._element), g(this._element).addClass(ue), this._config.focus && this._enforceFocus();var i = g.Event(re.SHOWN, { relatedTarget: t }),
          o = function () {
        e._config.focus && e._element.focus(), e._isTransitioning = !1, g(e._element).trigger(i);
      };if (n) {
        var r = _.getTransitionDurationFromElement(this._dialog);g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(r);
      } else o();
    }, t._enforceFocus = function () {
      var e = this;g(document).off(re.FOCUSIN).on(re.FOCUSIN, function (t) {
        document !== t.target && e._element !== t.target && 0 === g(e._element).has(t.target).length && e._element.focus();
      });
    }, t._setEscapeEvent = function () {
      var e = this;this._isShown && this._config.keyboard ? g(this._element).on(re.KEYDOWN_DISMISS, function (t) {
        27 === t.which && (t.preventDefault(), e.hide());
      }) : this._isShown || g(this._element).off(re.KEYDOWN_DISMISS);
    }, t._setResizeEvent = function () {
      var e = this;this._isShown ? g(window).on(re.RESIZE, function (t) {
        return e.handleUpdate(t);
      }) : g(window).off(re.RESIZE);
    }, t._hideModal = function () {
      var t = this;this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function () {
        g(document.body).removeClass(ce), t._resetAdjustments(), t._resetScrollbar(), g(t._element).trigger(re.HIDDEN);
      });
    }, t._removeBackdrop = function () {
      this._backdrop && (g(this._backdrop).remove(), this._backdrop = null);
    }, t._showBackdrop = function (t) {
      var e = this,
          n = g(this._element).hasClass(he) ? he : "";if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = le, n && this._backdrop.classList.add(n), g(this._backdrop).appendTo(document.body), g(this._element).on(re.CLICK_DISMISS, function (t) {
          e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide());
        }), n && _.reflow(this._backdrop), g(this._backdrop).addClass(ue), !t) return;if (!n) return void t();var i = _.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i);
      } else if (!this._isShown && this._backdrop) {
        g(this._backdrop).removeClass(ue);var o = function () {
          e._removeBackdrop(), t && t();
        };if (g(this._element).hasClass(he)) {
          var r = _.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END, o).emulateTransitionEnd(r);
        } else o();
      } else t && t();
    }, t._adjustDialog = function () {
      var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, t._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, t._checkScrollbar = function () {
      var t = document.body.getBoundingClientRect();this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, t._setScrollbar = function () {
      var o = this;if (this._isBodyOverflowing) {
        var t = [].slice.call(document.querySelectorAll(me)),
            e = [].slice.call(document.querySelectorAll(pe));g(t).each(function (t, e) {
          var n = e.style.paddingRight,
              i = g(e).css("padding-right");g(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px");
        }), g(e).each(function (t, e) {
          var n = e.style.marginRight,
              i = g(e).css("margin-right");g(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px");
        });var n = document.body.style.paddingRight,
            i = g(document.body).css("padding-right");g(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
      }g(document.body).addClass(ce);
    }, t._resetScrollbar = function () {
      var t = [].slice.call(document.querySelectorAll(me));g(t).each(function (t, e) {
        var n = g(e).data("padding-right");g(e).removeData("padding-right"), e.style.paddingRight = n || "";
      });var e = [].slice.call(document.querySelectorAll("" + pe));g(e).each(function (t, e) {
        var n = g(e).data("margin-right");"undefined" != typeof n && g(e).css("margin-right", n).removeData("margin-right");
      });var n = g(document.body).data("padding-right");g(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "";
    }, t._getScrollbarWidth = function () {
      var t = document.createElement("div");t.className = ae, document.body.appendChild(t);var e = t.getBoundingClientRect().width - t.clientWidth;return document.body.removeChild(t), e;
    }, o._jQueryInterface = function (n, i) {
      return this.each(function () {
        var t = g(this).data(te),
            e = l({}, ie, g(this).data(), "object" == typeof n && n ? n : {});if (t || (t = new o(this, e), g(this).data(te, t)), "string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');t[n](i);
        } else e.show && t.show(i);
      });
    }, s(o, null, [{ key: "VERSION", get: function () {
        return "4.3.1";
      } }, { key: "Default", get: function () {
        return ie;
      } }]), o;
  }();g(document).on(re.CLICK_DATA_API, ge, function (t) {
    var e,
        n = this,
        i = _.getSelectorFromElement(this);i && (e = document.querySelector(i));var o = g(e).data(te) ? "toggle" : l({}, g(e).data(), g(this).data());"A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();var r = g(e).one(re.SHOW, function (t) {
      t.isDefaultPrevented() || r.one(re.HIDDEN, function () {
        g(n).is(":visible") && n.focus();
      });
    });ve._jQueryInterface.call(g(e), o, this);
  }), g.fn[Zt] = ve._jQueryInterface, g.fn[Zt].Constructor = ve, g.fn[Zt].noConflict = function () {
    return g.fn[Zt] = ne, ve._jQueryInterface;
  };var ye = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
      Ee = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] },
      Ce = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
      Te = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function Se(t, s, e) {
    if (0 === t.length) return t;if (e && "function" == typeof e) return e(t);for (var n = new window.DOMParser().parseFromString(t, "text/html"), a = Object.keys(s), l = [].slice.call(n.body.querySelectorAll("*")), i = function (t, e) {
      var n = l[t],
          i = n.nodeName.toLowerCase();if (-1 === a.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue";var o = [].slice.call(n.attributes),
          r = [].concat(s["*"] || [], s[i] || []);o.forEach(function (t) {
        (function (t, e) {
          var n = t.nodeName.toLowerCase();if (-1 !== e.indexOf(n)) return -1 === ye.indexOf(n) || Boolean(t.nodeValue.match(Ce) || t.nodeValue.match(Te));for (var i = e.filter(function (t) {
            return t instanceof RegExp;
          }), o = 0, r = i.length; o < r; o++) if (n.match(i[o])) return !0;return !1;
        })(t, r) || n.removeAttribute(t.nodeName);
      });
    }, o = 0, r = l.length; o < r; o++) i(o);return n.body.innerHTML;
  }var be = "tooltip",
      Ie = "bs.tooltip",
      De = "." + Ie,
      we = g.fn[be],
      Ae = "bs-tooltip",
      Ne = new RegExp("(^|\\s)" + Ae + "\\S+", "g"),
      Oe = ["sanitize", "whiteList", "sanitizeFn"],
      ke = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string|function)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)", sanitize: "boolean", sanitizeFn: "(null|function)", whiteList: "object" },
      Pe = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
      Le = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent", sanitize: !0, sanitizeFn: null, whiteList: Ee },
      je = "show",
      He = "out",
      Re = { HIDE: "hide" + De, HIDDEN: "hidden" + De, SHOW: "show" + De, SHOWN: "shown" + De, INSERTED: "inserted" + De, CLICK: "click" + De, FOCUSIN: "focusin" + De, FOCUSOUT: "focusout" + De, MOUSEENTER: "mouseenter" + De, MOUSELEAVE: "mouseleave" + De },
      xe = "fade",
      Fe = "show",
      Ue = ".tooltip-inner",
      We = ".arrow",
      qe = "hover",
      Me = "focus",
      Ke = "click",
      Qe = "manual",
      Be = function () {
    function i(t, e) {
      if ("undefined" == typeof u) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
    }var t = i.prototype;return t.enable = function () {
      this._isEnabled = !0;
    }, t.disable = function () {
      this._isEnabled = !1;
    }, t.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, t.toggle = function (t) {
      if (this._isEnabled) if (t) {
        var e = this.constructor.DATA_KEY,
            n = g(t.currentTarget).data(e);n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
      } else {
        if (g(this.getTipElement()).hasClass(Fe)) return void this._leave(null, this);this._enter(null, this);
      }
    }, t.dispose = function () {
      clearTimeout(this._timeout), g.removeData(this.element, this.constructor.DATA_KEY), g(this.element).off(this.constructor.EVENT_KEY), g(this.element).closest(".modal").off("hide.bs.modal"), this.tip && g(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, t.show = function () {
      var e = this;if ("none" === g(this.element).css("display")) throw new Error("Please use show on visible elements");var t = g.Event(this.constructor.Event.SHOW);if (this.isWithContent() && this._isEnabled) {
        g(this.element).trigger(t);var n = _.findShadowRoot(this.element),
            i = g.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);if (t.isDefaultPrevented() || !i) return;var o = this.getTipElement(),
            r = _.getUID(this.constructor.NAME);o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && g(o).addClass(xe);var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
            a = this._getAttachment(s);this.addAttachmentClass(a);var l = this._getContainer();g(o).data(this.constructor.DATA_KEY, this), g.contains(this.element.ownerDocument.documentElement, this.tip) || g(o).appendTo(l), g(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new u(this.element, o, { placement: a, modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: We }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function (t) {
            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
          }, onUpdate: function (t) {
            return e._handlePopperPlacementChange(t);
          } }), g(o).addClass(Fe), "ontouchstart" in document.documentElement && g(document.body).children().on("mouseover", null, g.noop);var c = function () {
          e.config.animation && e._fixTransition();var t = e._hoverState;e._hoverState = null, g(e.element).trigger(e.constructor.Event.SHOWN), t === He && e._leave(null, e);
        };if (g(this.tip).hasClass(xe)) {
          var h = _.getTransitionDurationFromElement(this.tip);g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h);
        } else c();
      }
    }, t.hide = function (t) {
      var e = this,
          n = this.getTipElement(),
          i = g.Event(this.constructor.Event.HIDE),
          o = function () {
        e._hoverState !== je && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), g(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t();
      };if (g(this.element).trigger(i), !i.isDefaultPrevented()) {
        if (g(n).removeClass(Fe), "ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), this._activeTrigger[Ke] = !1, this._activeTrigger[Me] = !1, this._activeTrigger[qe] = !1, g(this.tip).hasClass(xe)) {
          var r = _.getTransitionDurationFromElement(n);g(n).one(_.TRANSITION_END, o).emulateTransitionEnd(r);
        } else o();this._hoverState = "";
      }
    }, t.update = function () {
      null !== this._popper && this._popper.scheduleUpdate();
    }, t.isWithContent = function () {
      return Boolean(this.getTitle());
    }, t.addAttachmentClass = function (t) {
      g(this.getTipElement()).addClass(Ae + "-" + t);
    }, t.getTipElement = function () {
      return this.tip = this.tip || g(this.config.template)[0], this.tip;
    }, t.setContent = function () {
      var t = this.getTipElement();this.setElementContent(g(t.querySelectorAll(Ue)), this.getTitle()), g(t).removeClass(xe + " " + Fe);
    }, t.setElementContent = function (t, e) {
      "object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = Se(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? g(e).parent().is(t) || t.empty().append(e) : t.text(g(e).text());
    }, t.getTitle = function () {
      var t = this.element.getAttribute("data-original-title");return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
    }, t._getOffset = function () {
      var e = this,
          t = {};return "function" == typeof this.config.offset ? t.fn = function (t) {
        return t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t;
      } : t.offset = this.config.offset, t;
    }, t._getContainer = function () {
      return !1 === this.config.container ? document.body : _.isElement(this.config.container) ? g(this.config.container) : g(document).find(this.config.container);
    }, t._getAttachment = function (t) {
      return Pe[t.toUpperCase()];
    }, t._setListeners = function () {
      var i = this;this.config.trigger.split(" ").forEach(function (t) {
        if ("click" === t) g(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
          return i.toggle(t);
        });else if (t !== Qe) {
          var e = t === qe ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
              n = t === qe ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;g(i.element).on(e, i.config.selector, function (t) {
            return i._enter(t);
          }).on(n, i.config.selector, function (t) {
            return i._leave(t);
          });
        }
      }), g(this.element).closest(".modal").on("hide.bs.modal", function () {
        i.element && i.hide();
      }), this.config.selector ? this.config = l({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
    }, t._fixTitle = function () {
      var t = typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, t._enter = function (t, e) {
      var n = this.constructor.DATA_KEY;(e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Me : qe] = !0), g(e.getTipElement()).hasClass(Fe) || e._hoverState === je ? e._hoverState = je : (clearTimeout(e._timeout), e._hoverState = je, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
        e._hoverState === je && e.show();
      }, e.config.delay.show) : e.show());
    }, t._leave = function (t, e) {
      var n = this.constructor.DATA_KEY;(e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Me : qe] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = He, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
        e._hoverState === He && e.hide();
      }, e.config.delay.hide) : e.hide());
    }, t._isWithActiveTrigger = function () {
      for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;return !1;
    }, t._getConfig = function (t) {
      var e = g(this.element).data();return Object.keys(e).forEach(function (t) {
        -1 !== Oe.indexOf(t) && delete e[t];
      }), "number" == typeof (t = l({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), _.typeCheckConfig(be, t, this.constructor.DefaultType), t.sanitize && (t.template = Se(t.template, t.whiteList, t.sanitizeFn)), t;
    }, t._getDelegateConfig = function () {
      var t = {};if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);return t;
    }, t._cleanTipClass = function () {
      var t = g(this.getTipElement()),
          e = t.attr("class").match(Ne);null !== e && e.length && t.removeClass(e.join(""));
    }, t._handlePopperPlacementChange = function (t) {
      var e = t.instance;this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
    }, t._fixTransition = function () {
      var t = this.getTipElement(),
          e = this.config.animation;null === t.getAttribute("x-placement") && (g(t).removeClass(xe), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e);
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this).data(Ie),
            e = "object" == typeof n && n;if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ie, t)), "string" == typeof n)) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');t[n]();
        }
      });
    }, s(i, null, [{ key: "VERSION", get: function () {
        return "4.3.1";
      } }, { key: "Default", get: function () {
        return Le;
      } }, { key: "NAME", get: function () {
        return be;
      } }, { key: "DATA_KEY", get: function () {
        return Ie;
      } }, { key: "Event", get: function () {
        return Re;
      } }, { key: "EVENT_KEY", get: function () {
        return De;
      } }, { key: "DefaultType", get: function () {
        return ke;
      } }]), i;
  }();g.fn[be] = Be._jQueryInterface, g.fn[be].Constructor = Be, g.fn[be].noConflict = function () {
    return g.fn[be] = we, Be._jQueryInterface;
  };var Ve = "popover",
      Ye = "bs.popover",
      ze = "." + Ye,
      Xe = g.fn[Ve],
      $e = "bs-popover",
      Ge = new RegExp("(^|\\s)" + $e + "\\S+", "g"),
      Je = l({}, Be.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
      Ze = l({}, Be.DefaultType, { content: "(string|element|function)" }),
      tn = "fade",
      en = "show",
      nn = ".popover-header",
      on = ".popover-body",
      rn = { HIDE: "hide" + ze, HIDDEN: "hidden" + ze, SHOW: "show" + ze, SHOWN: "shown" + ze, INSERTED: "inserted" + ze, CLICK: "click" + ze, FOCUSIN: "focusin" + ze, FOCUSOUT: "focusout" + ze, MOUSEENTER: "mouseenter" + ze, MOUSELEAVE: "mouseleave" + ze },
      sn = function (t) {
    var e, n;function i() {
      return t.apply(this, arguments) || this;
    }n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;var o = i.prototype;return o.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, o.addAttachmentClass = function (t) {
      g(this.getTipElement()).addClass($e + "-" + t);
    }, o.getTipElement = function () {
      return this.tip = this.tip || g(this.config.template)[0], this.tip;
    }, o.setContent = function () {
      var t = g(this.getTipElement());this.setElementContent(t.find(nn), this.getTitle());var e = this._getContent();"function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(on), e), t.removeClass(tn + " " + en);
    }, o._getContent = function () {
      return this.element.getAttribute("data-content") || this.config.content;
    }, o._cleanTipClass = function () {
      var t = g(this.getTipElement()),
          e = t.attr("class").match(Ge);null !== e && 0 < e.length && t.removeClass(e.join(""));
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this).data(Ye),
            e = "object" == typeof n ? n : null;if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ye, t)), "string" == typeof n)) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');t[n]();
        }
      });
    }, s(i, null, [{ key: "VERSION", get: function () {
        return "4.3.1";
      } }, { key: "Default", get: function () {
        return Je;
      } }, { key: "NAME", get: function () {
        return Ve;
      } }, { key: "DATA_KEY", get: function () {
        return Ye;
      } }, { key: "Event", get: function () {
        return rn;
      } }, { key: "EVENT_KEY", get: function () {
        return ze;
      } }, { key: "DefaultType", get: function () {
        return Ze;
      } }]), i;
  }(Be);g.fn[Ve] = sn._jQueryInterface, g.fn[Ve].Constructor = sn, g.fn[Ve].noConflict = function () {
    return g.fn[Ve] = Xe, sn._jQueryInterface;
  };var an = "scrollspy",
      ln = "bs.scrollspy",
      cn = "." + ln,
      hn = g.fn[an],
      un = { offset: 10, method: "auto", target: "" },
      fn = { offset: "number", method: "string", target: "(string|element)" },
      dn = { ACTIVATE: "activate" + cn, SCROLL: "scroll" + cn, LOAD_DATA_API: "load" + cn + ".data-api" },
      gn = "dropdown-item",
      _n = "active",
      mn = '[data-spy="scroll"]',
      pn = ".nav, .list-group",
      vn = ".nav-link",
      yn = ".nav-item",
      En = ".list-group-item",
      Cn = ".dropdown",
      Tn = ".dropdown-item",
      Sn = ".dropdown-toggle",
      bn = "offset",
      In = "position",
      Dn = function () {
    function n(t, e) {
      var n = this;this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + vn + "," + this._config.target + " " + En + "," + this._config.target + " " + Tn, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, g(this._scrollElement).on(dn.SCROLL, function (t) {
        return n._process(t);
      }), this.refresh(), this._process();
    }var t = n.prototype;return t.refresh = function () {
      var e = this,
          t = this._scrollElement === this._scrollElement.window ? bn : In,
          o = "auto" === this._config.method ? t : this._config.method,
          r = o === In ? this._getScrollTop() : 0;this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t) {
        var e,
            n = _.getSelectorFromElement(t);if (n && (e = document.querySelector(n)), e) {
          var i = e.getBoundingClientRect();if (i.width || i.height) return [g(e)[o]().top + r, n];
        }return null;
      }).filter(function (t) {
        return t;
      }).sort(function (t, e) {
        return t[0] - e[0];
      }).forEach(function (t) {
        e._offsets.push(t[0]), e._targets.push(t[1]);
      });
    }, t.dispose = function () {
      g.removeData(this._element, ln), g(this._scrollElement).off(cn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, t._getConfig = function (t) {
      if ("string" != typeof (t = l({}, un, "object" == typeof t && t ? t : {})).target) {
        var e = g(t.target).attr("id");e || (e = _.getUID(an), g(t.target).attr("id", e)), t.target = "#" + e;
      }return _.typeCheckConfig(an, t, fn), t;
    }, t._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, t._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, t._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, t._process = function () {
      var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          n = this._config.offset + e - this._getOffsetHeight();if (this._scrollHeight !== e && this.refresh(), n <= t) {
        var i = this._targets[this._targets.length - 1];this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();for (var o = this._offsets.length; o--;) {
          this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]);
        }
      }
    }, t._activate = function (e) {
      this._activeTarget = e, this._clear();var t = this._selector.split(",").map(function (t) {
        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
      }),
          n = g([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(gn) ? (n.closest(Cn).find(Sn).addClass(_n), n.addClass(_n)) : (n.addClass(_n), n.parents(pn).prev(vn + ", " + En).addClass(_n), n.parents(pn).prev(yn).children(vn).addClass(_n)), g(this._scrollElement).trigger(dn.ACTIVATE, { relatedTarget: e });
    }, t._clear = function () {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (t) {
        return t.classList.contains(_n);
      }).forEach(function (t) {
        return t.classList.remove(_n);
      });
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = g(this).data(ln);if (t || (t = new n(this, "object" == typeof e && e), g(this).data(ln, t)), "string" == typeof e) {
          if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');t[e]();
        }
      });
    }, s(n, null, [{ key: "VERSION", get: function () {
        return "4.3.1";
      } }, { key: "Default", get: function () {
        return un;
      } }]), n;
  }();g(window).on(dn.LOAD_DATA_API, function () {
    for (var t = [].slice.call(document.querySelectorAll(mn)), e = t.length; e--;) {
      var n = g(t[e]);Dn._jQueryInterface.call(n, n.data());
    }
  }), g.fn[an] = Dn._jQueryInterface, g.fn[an].Constructor = Dn, g.fn[an].noConflict = function () {
    return g.fn[an] = hn, Dn._jQueryInterface;
  };var wn = "bs.tab",
      An = "." + wn,
      Nn = g.fn.tab,
      On = { HIDE: "hide" + An, HIDDEN: "hidden" + An, SHOW: "show" + An, SHOWN: "shown" + An, CLICK_DATA_API: "click" + An + ".data-api" },
      kn = "dropdown-menu",
      Pn = "active",
      Ln = "disabled",
      jn = "fade",
      Hn = "show",
      Rn = ".dropdown",
      xn = ".nav, .list-group",
      Fn = ".active",
      Un = "> li > .active",
      Wn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      qn = ".dropdown-toggle",
      Mn = "> .dropdown-menu .active",
      Kn = function () {
    function i(t) {
      this._element = t;
    }var t = i.prototype;return t.show = function () {
      var n = this;if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && g(this._element).hasClass(Pn) || g(this._element).hasClass(Ln))) {
        var t,
            i,
            e = g(this._element).closest(xn)[0],
            o = _.getSelectorFromElement(this._element);if (e) {
          var r = "UL" === e.nodeName || "OL" === e.nodeName ? Un : Fn;i = (i = g.makeArray(g(e).find(r)))[i.length - 1];
        }var s = g.Event(On.HIDE, { relatedTarget: this._element }),
            a = g.Event(On.SHOW, { relatedTarget: i });if (i && g(i).trigger(s), g(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
          o && (t = document.querySelector(o)), this._activate(this._element, e);var l = function () {
            var t = g.Event(On.HIDDEN, { relatedTarget: n._element }),
                e = g.Event(On.SHOWN, { relatedTarget: i });g(i).trigger(t), g(n._element).trigger(e);
          };t ? this._activate(t, t.parentNode, l) : l();
        }
      }
    }, t.dispose = function () {
      g.removeData(this._element, wn), this._element = null;
    }, t._activate = function (t, e, n) {
      var i = this,
          o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? g(e).children(Fn) : g(e).find(Un))[0],
          r = n && o && g(o).hasClass(jn),
          s = function () {
        return i._transitionComplete(t, o, n);
      };if (o && r) {
        var a = _.getTransitionDurationFromElement(o);g(o).removeClass(Hn).one(_.TRANSITION_END, s).emulateTransitionEnd(a);
      } else s();
    }, t._transitionComplete = function (t, e, n) {
      if (e) {
        g(e).removeClass(Pn);var i = g(e.parentNode).find(Mn)[0];i && g(i).removeClass(Pn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
      }if (g(t).addClass(Pn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), _.reflow(t), t.classList.contains(jn) && t.classList.add(Hn), t.parentNode && g(t.parentNode).hasClass(kn)) {
        var o = g(t).closest(Rn)[0];if (o) {
          var r = [].slice.call(o.querySelectorAll(qn));g(r).addClass(Pn);
        }t.setAttribute("aria-expanded", !0);
      }n && n();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this),
            e = t.data(wn);if (e || (e = new i(this), t.data(wn, e)), "string" == typeof n) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');e[n]();
        }
      });
    }, s(i, null, [{ key: "VERSION", get: function () {
        return "4.3.1";
      } }]), i;
  }();g(document).on(On.CLICK_DATA_API, Wn, function (t) {
    t.preventDefault(), Kn._jQueryInterface.call(g(this), "show");
  }), g.fn.tab = Kn._jQueryInterface, g.fn.tab.Constructor = Kn, g.fn.tab.noConflict = function () {
    return g.fn.tab = Nn, Kn._jQueryInterface;
  };var Qn = "toast",
      Bn = "bs.toast",
      Vn = "." + Bn,
      Yn = g.fn[Qn],
      zn = { CLICK_DISMISS: "click.dismiss" + Vn, HIDE: "hide" + Vn, HIDDEN: "hidden" + Vn, SHOW: "show" + Vn, SHOWN: "shown" + Vn },
      Xn = "fade",
      $n = "hide",
      Gn = "show",
      Jn = "showing",
      Zn = { animation: "boolean", autohide: "boolean", delay: "number" },
      ti = { animation: !0, autohide: !0, delay: 500 },
      ei = '[data-dismiss="toast"]',
      ni = function () {
    function i(t, e) {
      this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners();
    }var t = i.prototype;return t.show = function () {
      var t = this;g(this._element).trigger(zn.SHOW), this._config.animation && this._element.classList.add(Xn);var e = function () {
        t._element.classList.remove(Jn), t._element.classList.add(Gn), g(t._element).trigger(zn.SHOWN), t._config.autohide && t.hide();
      };if (this._element.classList.remove($n), this._element.classList.add(Jn), this._config.animation) {
        var n = _.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n);
      } else e();
    }, t.hide = function (t) {
      var e = this;this._element.classList.contains(Gn) && (g(this._element).trigger(zn.HIDE), t ? this._close() : this._timeout = setTimeout(function () {
        e._close();
      }, this._config.delay));
    }, t.dispose = function () {
      clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Gn) && this._element.classList.remove(Gn), g(this._element).off(zn.CLICK_DISMISS), g.removeData(this._element, Bn), this._element = null, this._config = null;
    }, t._getConfig = function (t) {
      return t = l({}, ti, g(this._element).data(), "object" == typeof t && t ? t : {}), _.typeCheckConfig(Qn, t, this.constructor.DefaultType), t;
    }, t._setListeners = function () {
      var t = this;g(this._element).on(zn.CLICK_DISMISS, ei, function () {
        return t.hide(!0);
      });
    }, t._close = function () {
      var t = this,
          e = function () {
        t._element.classList.add($n), g(t._element).trigger(zn.HIDDEN);
      };if (this._element.classList.remove(Gn), this._config.animation) {
        var n = _.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n);
      } else e();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this),
            e = t.data(Bn);if (e || (e = new i(this, "object" == typeof n && n), t.data(Bn, e)), "string" == typeof n) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');e[n](this);
        }
      });
    }, s(i, null, [{ key: "VERSION", get: function () {
        return "4.3.1";
      } }, { key: "DefaultType", get: function () {
        return Zn;
      } }, { key: "Default", get: function () {
        return ti;
      } }]), i;
  }();g.fn[Qn] = ni._jQueryInterface, g.fn[Qn].Constructor = ni, g.fn[Qn].noConflict = function () {
    return g.fn[Qn] = Yn, ni._jQueryInterface;
  }, function () {
    if ("undefined" == typeof g) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t = g.fn.jquery.split(" ")[0].split(".");if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }(), t.Util = _, t.Alert = p, t.Button = P, t.Carousel = lt, t.Collapse = bt, t.Dropdown = Jt, t.Modal = ve, t.Popover = sn, t.Scrollspy = Dn, t.Tab = Kn, t.Toast = ni, t.Tooltip = Be, Object.defineProperty(t, "__esModule", { value: !0 });
});
//# sourceMappingURL=bootstrap.min.js.map

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function (n) {
  if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function (type) {
  var er, handler, len, args, i, listeners;

  if (!this._events) this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler)) return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++) listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function (type, listener) {
  var m;

  if (!isFunction(listener)) throw TypeError('listener must be a function');

  if (!this._events) this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function (type, listener) {
  if (!isFunction(listener)) throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function (type, listener) {
  var list, position, length, i;

  if (!isFunction(listener)) throw TypeError('listener must be a function');

  if (!this._events || !this._events[type]) return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener || isFunction(list.listener) && list.listener === listener) {
    delete this._events[type];
    if (this._events.removeListener) this.emit('removeListener', type, listener);
  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener || list[i].listener && list[i].listener === listener) {
        position = i;
        break;
      }
    }

    if (position < 0) return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener) this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function (type) {
  var key, listeners;

  if (!this._events) return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0) this._events = {};else if (this._events[type]) delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length) this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function (type) {
  var ret;
  if (!this._events || !this._events[type]) ret = [];else if (isFunction(this._events[type])) ret = [this._events[type]];else ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function (type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener)) return 1;else if (evlistener) return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function (emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

/***/ }),

/***/ "./node_modules/expose-loader/index.js?Tether!./node_modules/tether/dist/js/tether.js-exposed":
/*!*******************************************************************************************!*\
  !*** ./node_modules/expose-loader?Tether!./node_modules/tether/dist/js/tether.js-exposed ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Tether"] = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./tether.js */ "./node_modules/babel-loader/lib/index.js!./node_modules/tether/dist/js/tether.js");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/flexibility/flexibility.js":
/*!*************************************************!*\
  !*** ./node_modules/flexibility/flexibility.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;!function (e) {
  if (true) module.exports = e();else { var t; }
}(function () {
  return function e(t, r, l) {
    function n(f, i) {
      if (!r[f]) {
        if (!t[f]) {
          var s = "function" == typeof require && require;if (!i && s) return require(f, !0);if (o) return o(f, !0);var a = new Error("Cannot find module '" + f + "'");throw a.code = "MODULE_NOT_FOUND", a;
        }var c = r[f] = { exports: {} };t[f][0].call(c.exports, function (e) {
          var r = t[f][1][e];return n(r ? r : e);
        }, c, c.exports, e, t, r, l);
      }return r[f].exports;
    }for (var o = "function" == typeof require && require, f = 0; f < l.length; f++) n(l[f]);return n;
  }({ 1: [function (e, t, r) {
      t.exports = function (e) {
        var t,
            r,
            l,
            n = -1;if (e.lines.length > 1 && "flex-start" === e.style.alignContent) for (t = 0; l = e.lines[++n];) l.crossStart = t, t += l.cross;else if (e.lines.length > 1 && "flex-end" === e.style.alignContent) for (t = e.flexStyle.crossSpace; l = e.lines[++n];) l.crossStart = t, t += l.cross;else if (e.lines.length > 1 && "center" === e.style.alignContent) for (t = e.flexStyle.crossSpace / 2; l = e.lines[++n];) l.crossStart = t, t += l.cross;else if (e.lines.length > 1 && "space-between" === e.style.alignContent) for (r = e.flexStyle.crossSpace / (e.lines.length - 1), t = 0; l = e.lines[++n];) l.crossStart = t, t += l.cross + r;else if (e.lines.length > 1 && "space-around" === e.style.alignContent) for (r = 2 * e.flexStyle.crossSpace / (2 * e.lines.length), t = r / 2; l = e.lines[++n];) l.crossStart = t, t += l.cross + r;else for (r = e.flexStyle.crossSpace / e.lines.length, t = e.flexStyle.crossInnerBefore; l = e.lines[++n];) l.crossStart = t, l.cross += r, t += l.cross;
      };
    }, {}], 2: [function (e, t, r) {
      t.exports = function (e) {
        for (var t, r = -1; line = e.lines[++r];) for (t = -1; child = line.children[++t];) {
          var l = child.style.alignSelf;"auto" === l && (l = e.style.alignItems), "flex-start" === l ? child.flexStyle.crossStart = line.crossStart : "flex-end" === l ? child.flexStyle.crossStart = line.crossStart + line.cross - child.flexStyle.crossOuter : "center" === l ? child.flexStyle.crossStart = line.crossStart + (line.cross - child.flexStyle.crossOuter) / 2 : (child.flexStyle.crossStart = line.crossStart, child.flexStyle.crossOuter = line.cross, child.flexStyle.cross = child.flexStyle.crossOuter - child.flexStyle.crossBefore - child.flexStyle.crossAfter);
        }
      };
    }, {}], 3: [function (e, t, r) {
      t.exports = function l(e, l) {
        var t = "row" === l || "row-reverse" === l,
            r = e.mainAxis;if (r) {
          var n = t && "inline" === r || !t && "block" === r;n || (e.flexStyle = { main: e.flexStyle.cross, cross: e.flexStyle.main, mainOffset: e.flexStyle.crossOffset, crossOffset: e.flexStyle.mainOffset, mainBefore: e.flexStyle.crossBefore, mainAfter: e.flexStyle.crossAfter, crossBefore: e.flexStyle.mainBefore, crossAfter: e.flexStyle.mainAfter, mainInnerBefore: e.flexStyle.crossInnerBefore, mainInnerAfter: e.flexStyle.crossInnerAfter, crossInnerBefore: e.flexStyle.mainInnerBefore, crossInnerAfter: e.flexStyle.mainInnerAfter, mainBorderBefore: e.flexStyle.crossBorderBefore, mainBorderAfter: e.flexStyle.crossBorderAfter, crossBorderBefore: e.flexStyle.mainBorderBefore, crossBorderAfter: e.flexStyle.mainBorderAfter });
        } else t ? e.flexStyle = { main: e.style.width, cross: e.style.height, mainOffset: e.style.offsetWidth, crossOffset: e.style.offsetHeight, mainBefore: e.style.marginLeft, mainAfter: e.style.marginRight, crossBefore: e.style.marginTop, crossAfter: e.style.marginBottom, mainInnerBefore: e.style.paddingLeft, mainInnerAfter: e.style.paddingRight, crossInnerBefore: e.style.paddingTop, crossInnerAfter: e.style.paddingBottom, mainBorderBefore: e.style.borderLeftWidth, mainBorderAfter: e.style.borderRightWidth, crossBorderBefore: e.style.borderTopWidth, crossBorderAfter: e.style.borderBottomWidth } : e.flexStyle = { main: e.style.height, cross: e.style.width, mainOffset: e.style.offsetHeight, crossOffset: e.style.offsetWidth, mainBefore: e.style.marginTop, mainAfter: e.style.marginBottom, crossBefore: e.style.marginLeft, crossAfter: e.style.marginRight, mainInnerBefore: e.style.paddingTop, mainInnerAfter: e.style.paddingBottom, crossInnerBefore: e.style.paddingLeft, crossInnerAfter: e.style.paddingRight, mainBorderBefore: e.style.borderTopWidth, mainBorderAfter: e.style.borderBottomWidth, crossBorderBefore: e.style.borderLeftWidth, crossBorderAfter: e.style.borderRightWidth }, "content-box" === e.style.boxSizing && ("number" == typeof e.flexStyle.main && (e.flexStyle.main += e.flexStyle.mainInnerBefore + e.flexStyle.mainInnerAfter + e.flexStyle.mainBorderBefore + e.flexStyle.mainBorderAfter), "number" == typeof e.flexStyle.cross && (e.flexStyle.cross += e.flexStyle.crossInnerBefore + e.flexStyle.crossInnerAfter + e.flexStyle.crossBorderBefore + e.flexStyle.crossBorderAfter));e.mainAxis = t ? "inline" : "block", e.crossAxis = t ? "block" : "inline", "number" == typeof e.style.flexBasis && (e.flexStyle.main = e.style.flexBasis + e.flexStyle.mainInnerBefore + e.flexStyle.mainInnerAfter + e.flexStyle.mainBorderBefore + e.flexStyle.mainBorderAfter), e.flexStyle.mainOuter = e.flexStyle.main, e.flexStyle.crossOuter = e.flexStyle.cross, "auto" === e.flexStyle.mainOuter && (e.flexStyle.mainOuter = e.flexStyle.mainOffset), "auto" === e.flexStyle.crossOuter && (e.flexStyle.crossOuter = e.flexStyle.crossOffset), "number" == typeof e.flexStyle.mainBefore && (e.flexStyle.mainOuter += e.flexStyle.mainBefore), "number" == typeof e.flexStyle.mainAfter && (e.flexStyle.mainOuter += e.flexStyle.mainAfter), "number" == typeof e.flexStyle.crossBefore && (e.flexStyle.crossOuter += e.flexStyle.crossBefore), "number" == typeof e.flexStyle.crossAfter && (e.flexStyle.crossOuter += e.flexStyle.crossAfter);
      };
    }, {}], 4: [function (e, t, r) {
      var l = e("../reduce");t.exports = function (e) {
        if (e.mainSpace > 0) {
          var t = l(e.children, function (e, t) {
            return e + parseFloat(t.style.flexGrow);
          }, 0);t > 0 && (e.main = l(e.children, function (r, l) {
            return "auto" === l.flexStyle.main ? l.flexStyle.main = l.flexStyle.mainOffset + parseFloat(l.style.flexGrow) / t * e.mainSpace : l.flexStyle.main += parseFloat(l.style.flexGrow) / t * e.mainSpace, l.flexStyle.mainOuter = l.flexStyle.main + l.flexStyle.mainBefore + l.flexStyle.mainAfter, r + l.flexStyle.mainOuter;
          }, 0), e.mainSpace = 0);
        }
      };
    }, { "../reduce": 12 }], 5: [function (e, t, r) {
      var l = e("../reduce");t.exports = function (e) {
        if (e.mainSpace < 0) {
          var t = l(e.children, function (e, t) {
            return e + parseFloat(t.style.flexShrink);
          }, 0);t > 0 && (e.main = l(e.children, function (r, l) {
            return l.flexStyle.main += parseFloat(l.style.flexShrink) / t * e.mainSpace, l.flexStyle.mainOuter = l.flexStyle.main + l.flexStyle.mainBefore + l.flexStyle.mainAfter, r + l.flexStyle.mainOuter;
          }, 0), e.mainSpace = 0);
        }
      };
    }, { "../reduce": 12 }], 6: [function (e, t, r) {
      var l = e("../reduce");t.exports = function (e) {
        var t;e.lines = [t = { main: 0, cross: 0, children: [] }];for (var r, n = -1; r = e.children[++n];) "nowrap" === e.style.flexWrap || 0 === t.children.length || "auto" === e.flexStyle.main || e.flexStyle.main - e.flexStyle.mainInnerBefore - e.flexStyle.mainInnerAfter - e.flexStyle.mainBorderBefore - e.flexStyle.mainBorderAfter >= t.main + r.flexStyle.mainOuter ? (t.main += r.flexStyle.mainOuter, t.cross = Math.max(t.cross, r.flexStyle.crossOuter)) : e.lines.push(t = { main: r.flexStyle.mainOuter, cross: r.flexStyle.crossOuter, children: [] }), t.children.push(r);e.flexStyle.mainLines = l(e.lines, function (e, t) {
          return Math.max(e, t.main);
        }, 0), e.flexStyle.crossLines = l(e.lines, function (e, t) {
          return e + t.cross;
        }, 0), "auto" === e.flexStyle.main && (e.flexStyle.main = Math.max(e.flexStyle.mainOffset, e.flexStyle.mainLines + e.flexStyle.mainInnerBefore + e.flexStyle.mainInnerAfter + e.flexStyle.mainBorderBefore + e.flexStyle.mainBorderAfter)), "auto" === e.flexStyle.cross && (e.flexStyle.cross = Math.max(e.flexStyle.crossOffset, e.flexStyle.crossLines + e.flexStyle.crossInnerBefore + e.flexStyle.crossInnerAfter + e.flexStyle.crossBorderBefore + e.flexStyle.crossBorderAfter)), e.flexStyle.crossSpace = e.flexStyle.cross - e.flexStyle.crossInnerBefore - e.flexStyle.crossInnerAfter - e.flexStyle.crossBorderBefore - e.flexStyle.crossBorderAfter - e.flexStyle.crossLines, e.flexStyle.mainOuter = e.flexStyle.main + e.flexStyle.mainBefore + e.flexStyle.mainAfter, e.flexStyle.crossOuter = e.flexStyle.cross + e.flexStyle.crossBefore + e.flexStyle.crossAfter;
      };
    }, { "../reduce": 12 }], 7: [function (e, t, r) {
      function l(t) {
        for (var r, l = -1; r = t.children[++l];) e("./flex-direction")(r, t.style.flexDirection);e("./flex-direction")(t, t.style.flexDirection), e("./order")(t), e("./flexbox-lines")(t), e("./align-content")(t), l = -1;for (var n; n = t.lines[++l];) n.mainSpace = t.flexStyle.main - t.flexStyle.mainInnerBefore - t.flexStyle.mainInnerAfter - t.flexStyle.mainBorderBefore - t.flexStyle.mainBorderAfter - n.main, e("./flex-grow")(n), e("./flex-shrink")(n), e("./margin-main")(n), e("./margin-cross")(n), e("./justify-content")(n, t.style.justifyContent, t);e("./align-items")(t);
      }t.exports = l;
    }, { "./align-content": 1, "./align-items": 2, "./flex-direction": 3, "./flex-grow": 4, "./flex-shrink": 5, "./flexbox-lines": 6, "./justify-content": 8, "./margin-cross": 9, "./margin-main": 10, "./order": 11 }], 8: [function (e, t, r) {
      t.exports = function (e, t, r) {
        var l,
            n,
            o,
            f = r.flexStyle.mainInnerBefore,
            i = -1;if ("flex-end" === t) for (l = e.mainSpace, l += f; o = e.children[++i];) o.flexStyle.mainStart = l, l += o.flexStyle.mainOuter;else if ("center" === t) for (l = e.mainSpace / 2, l += f; o = e.children[++i];) o.flexStyle.mainStart = l, l += o.flexStyle.mainOuter;else if ("space-between" === t) for (n = e.mainSpace / (e.children.length - 1), l = 0, l += f; o = e.children[++i];) o.flexStyle.mainStart = l, l += o.flexStyle.mainOuter + n;else if ("space-around" === t) for (n = 2 * e.mainSpace / (2 * e.children.length), l = n / 2, l += f; o = e.children[++i];) o.flexStyle.mainStart = l, l += o.flexStyle.mainOuter + n;else for (l = 0, l += f; o = e.children[++i];) o.flexStyle.mainStart = l, l += o.flexStyle.mainOuter;
      };
    }, {}], 9: [function (e, t, r) {
      t.exports = function (e) {
        for (var t, r = -1; t = e.children[++r];) {
          var l = 0;"auto" === t.flexStyle.crossBefore && ++l, "auto" === t.flexStyle.crossAfter && ++l;var n = e.cross - t.flexStyle.crossOuter;"auto" === t.flexStyle.crossBefore && (t.flexStyle.crossBefore = n / l), "auto" === t.flexStyle.crossAfter && (t.flexStyle.crossAfter = n / l), "auto" === t.flexStyle.cross ? t.flexStyle.crossOuter = t.flexStyle.crossOffset + t.flexStyle.crossBefore + t.flexStyle.crossAfter : t.flexStyle.crossOuter = t.flexStyle.cross + t.flexStyle.crossBefore + t.flexStyle.crossAfter;
        }
      };
    }, {}], 10: [function (e, t, r) {
      t.exports = function (e) {
        for (var t, r = 0, l = -1; t = e.children[++l];) "auto" === t.flexStyle.mainBefore && ++r, "auto" === t.flexStyle.mainAfter && ++r;if (r > 0) {
          for (l = -1; t = e.children[++l];) "auto" === t.flexStyle.mainBefore && (t.flexStyle.mainBefore = e.mainSpace / r), "auto" === t.flexStyle.mainAfter && (t.flexStyle.mainAfter = e.mainSpace / r), "auto" === t.flexStyle.main ? t.flexStyle.mainOuter = t.flexStyle.mainOffset + t.flexStyle.mainBefore + t.flexStyle.mainAfter : t.flexStyle.mainOuter = t.flexStyle.main + t.flexStyle.mainBefore + t.flexStyle.mainAfter;e.mainSpace = 0;
        }
      };
    }, {}], 11: [function (e, t, r) {
      var l = /^(column|row)-reverse$/;t.exports = function (e) {
        e.children.sort(function (e, t) {
          return e.style.order - t.style.order || e.index - t.index;
        }), l.test(e.style.flexDirection) && e.children.reverse();
      };
    }, {}], 12: [function (e, t, r) {
      function l(e, t, r) {
        for (var l = e.length, n = -1; ++n < l;) n in e && (r = t(r, e[n], n));return r;
      }t.exports = l;
    }, {}], 13: [function (e, t, r) {
      function l(e) {
        i(f(e));
      }var n = e("./read"),
          o = e("./write"),
          f = e("./readAll"),
          i = e("./writeAll");t.exports = l, t.exports.read = n, t.exports.write = o, t.exports.readAll = f, t.exports.writeAll = i;
    }, { "./read": 15, "./readAll": 16, "./write": 17, "./writeAll": 18 }], 14: [function (e, t, r) {
      function l(e, t, r) {
        var l = e[t],
            f = String(l).match(o);if (!f) {
          var a = t.match(s);if (a) {
            var c = e["border" + a[1] + "Style"];return "none" === c ? 0 : i[l] || 0;
          }return l;
        }var y = f[1],
            x = f[2];return "px" === x ? 1 * y : "cm" === x ? .3937 * y * 96 : "in" === x ? 96 * y : "mm" === x ? .3937 * y * 96 / 10 : "pc" === x ? 12 * y * 96 / 72 : "pt" === x ? 96 * y / 72 : "rem" === x ? 16 * y : n(l, r);
      }function n(e, t) {
        f.style.cssText = "border:none!important;clip:rect(0 0 0 0)!important;display:block!important;font-size:1em!important;height:0!important;margin:0!important;padding:0!important;position:relative!important;width:" + e + "!important", t.parentNode.insertBefore(f, t.nextSibling);var r = f.offsetWidth;return t.parentNode.removeChild(f), r;
      }t.exports = l;var o = /^([-+]?\d*\.?\d+)(%|[a-z]+)$/,
          f = document.createElement("div"),
          i = { medium: 4, none: 0, thick: 6, thin: 2 },
          s = /^border(Bottom|Left|Right|Top)Width$/;
    }, {}], 15: [function (e, t, r) {
      function l(e) {
        var t = { alignContent: "stretch", alignItems: "stretch", alignSelf: "auto", borderBottomStyle: "none", borderBottomWidth: 0, borderLeftStyle: "none", borderLeftWidth: 0, borderRightStyle: "none", borderRightWidth: 0, borderTopStyle: "none", borderTopWidth: 0, boxSizing: "content-box", display: "inline", flexBasis: "auto", flexDirection: "row", flexGrow: 0, flexShrink: 1, flexWrap: "nowrap", justifyContent: "flex-start", height: "auto", marginTop: 0, marginRight: 0, marginLeft: 0, marginBottom: 0, paddingTop: 0, paddingRight: 0, paddingLeft: 0, paddingBottom: 0, maxHeight: "none", maxWidth: "none", minHeight: 0, minWidth: 0, order: 0, position: "static", width: "auto" },
            r = e instanceof Element;if (r) {
          var l = e.hasAttribute("data-style"),
              i = l ? e.getAttribute("data-style") : e.getAttribute("style") || "";l || e.setAttribute("data-style", i);var s = window.getComputedStyle && getComputedStyle(e) || {};f(t, s);var c = e.currentStyle || {};n(t, c), o(t, i);for (var y in t) t[y] = a(t, y, e);var x = e.getBoundingClientRect();t.offsetHeight = x.height || e.offsetHeight, t.offsetWidth = x.width || e.offsetWidth;
        }var S = { element: e, style: t };return S;
      }function n(e, t) {
        for (var r in e) {
          var l = r in t;if (l) e[r] = t[r];else {
            var n = r.replace(/[A-Z]/g, "-$&").toLowerCase(),
                o = n in t;o && (e[r] = t[n]);
          }
        }var f = "-js-display" in t;f && (e.display = t["-js-display"]);
      }function o(e, t) {
        for (var r; r = i.exec(t);) {
          var l = r[1].toLowerCase().replace(/-[a-z]/g, function (e) {
            return e.slice(1).toUpperCase();
          });e[l] = r[2];
        }
      }function f(e, t) {
        for (var r in e) {
          var l = r in t;l && !s.test(r) && (e[r] = t[r]);
        }
      }t.exports = l;var i = /([^\s:;]+)\s*:\s*([^;]+?)\s*(;|$)/g,
          s = /^(alignSelf|height|width)$/,
          a = e("./getComputedLength");
    }, { "./getComputedLength": 14 }], 16: [function (e, t, r) {
      function l(e) {
        var t = [];return n(e, t), t;
      }function n(e, t) {
        for (var r, l = o(e), i = [], s = -1; r = e.childNodes[++s];) {
          var a = 3 === r.nodeType && !/^\s*$/.test(r.nodeValue);if (l && a) {
            var c = r;r = e.insertBefore(document.createElement("flex-item"), c), r.appendChild(c);
          }var y = r instanceof Element;if (y) {
            var x = n(r, t);if (l) {
              var S = r.style;S.display = "inline-block", S.position = "absolute", x.style = f(r).style, i.push(x);
            }
          }
        }var m = { element: e, children: i };return l && (m.style = f(e).style, t.push(m)), m;
      }function o(e) {
        var t = e instanceof Element,
            r = t && e.getAttribute("data-style"),
            l = t && e.currentStyle && e.currentStyle["-js-display"],
            n = i.test(r) || s.test(l);return n;
      }t.exports = l;var f = e("../read"),
          i = /(^|;)\s*display\s*:\s*(inline-)?flex\s*(;|$)/i,
          s = /^(inline-)?flex$/i;
    }, { "../read": 15 }], 17: [function (e, t, r) {
      function l(e) {
        o(e);var t = e.element.style,
            r = "inline" === e.mainAxis ? ["main", "cross"] : ["cross", "main"];t.boxSizing = "content-box", t.display = "block", t.position = "relative", t.width = n(e.flexStyle[r[0]] - e.flexStyle[r[0] + "InnerBefore"] - e.flexStyle[r[0] + "InnerAfter"] - e.flexStyle[r[0] + "BorderBefore"] - e.flexStyle[r[0] + "BorderAfter"]), t.height = n(e.flexStyle[r[1]] - e.flexStyle[r[1] + "InnerBefore"] - e.flexStyle[r[1] + "InnerAfter"] - e.flexStyle[r[1] + "BorderBefore"] - e.flexStyle[r[1] + "BorderAfter"]);for (var l, f = -1; l = e.children[++f];) {
          var i = l.element.style,
              s = "inline" === l.mainAxis ? ["main", "cross"] : ["cross", "main"];i.boxSizing = "content-box", i.display = "block", i.position = "absolute", "auto" !== l.flexStyle[s[0]] && (i.width = n(l.flexStyle[s[0]] - l.flexStyle[s[0] + "InnerBefore"] - l.flexStyle[s[0] + "InnerAfter"] - l.flexStyle[s[0] + "BorderBefore"] - l.flexStyle[s[0] + "BorderAfter"])), "auto" !== l.flexStyle[s[1]] && (i.height = n(l.flexStyle[s[1]] - l.flexStyle[s[1] + "InnerBefore"] - l.flexStyle[s[1] + "InnerAfter"] - l.flexStyle[s[1] + "BorderBefore"] - l.flexStyle[s[1] + "BorderAfter"])), i.top = n(l.flexStyle[s[1] + "Start"]), i.left = n(l.flexStyle[s[0] + "Start"]), i.marginTop = n(l.flexStyle[s[1] + "Before"]), i.marginRight = n(l.flexStyle[s[0] + "After"]), i.marginBottom = n(l.flexStyle[s[1] + "After"]), i.marginLeft = n(l.flexStyle[s[0] + "Before"]);
        }
      }function n(e) {
        return "string" == typeof e ? e : Math.max(e, 0) + "px";
      }t.exports = l;var o = e("../flexbox");
    }, { "../flexbox": 7 }], 18: [function (e, t, r) {
      function l(e) {
        for (var t, r = -1; t = e[++r];) n(t);
      }t.exports = l;var n = e("../write");
    }, { "../write": 17 }] }, {}, [13])(13);
});

/***/ }),

/***/ "./node_modules/jquery.uniform/dist/js/jquery.uniform.standalone.js":
/*!**************************************************************************!*\
  !*** ./node_modules/jquery.uniform/dist/js/jquery.uniform.standalone.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function (e, t, n) {
  "use strict";
  function s(e) {
    var t = Array.prototype.slice.call(arguments, 1);return e.prop ? e.prop.apply(e, t) : e.attr.apply(e, t);
  }function a(e, t, n) {
    var s, a;for (s in n) n.hasOwnProperty(s) && (a = s.replace(/ |$/g, t.eventNamespace), e.bind(a, n[s]));
  }function i(e, t, n) {
    a(e, n, { focus: function () {
        t.addClass(n.focusClass);
      }, blur: function () {
        t.removeClass(n.focusClass), t.removeClass(n.activeClass);
      }, mouseenter: function () {
        t.addClass(n.hoverClass);
      }, mouseleave: function () {
        t.removeClass(n.hoverClass), t.removeClass(n.activeClass);
      }, "mousedown touchbegin": function () {
        e.is(":disabled") || t.addClass(n.activeClass);
      }, "mouseup touchend": function () {
        t.removeClass(n.activeClass);
      } });
  }function r(e, t) {
    e.removeClass(t.hoverClass + " " + t.focusClass + " " + t.activeClass);
  }function l(e, t, n) {
    n ? e.addClass(t) : e.removeClass(t);
  }function u(e, t, n) {
    setTimeout(function () {
      var s = "checked",
          a = t.is(":" + s);t.prop ? t.prop(s, a) : a ? t.attr(s, s) : t.removeAttr(s), l(e, n.checkedClass, a);
    }, 1);
  }function o(e, t, n) {
    l(e, n.disabledClass, t.is(":disabled"));
  }function c(e, t, n) {
    switch (n) {case "after":
        return e.after(t), e.next();case "before":
        return e.before(t), e.prev();case "wrap":
        return e.wrap(t), e.parent();}return null;
  }function d(e, n, a) {
    var i, r, l;return a || (a = {}), a = t.extend({ bind: {}, divClass: null, divWrap: "wrap", spanClass: null, spanHtml: null, spanWrap: "wrap" }, a), i = t("<div />"), r = t("<span />"), n.autoHide && e.is(":hidden") && "none" === e.css("display") && i.hide(), a.divClass && i.addClass(a.divClass), n.wrapperClass && i.addClass(n.wrapperClass), a.spanClass && r.addClass(a.spanClass), l = s(e, "id"), n.useID && l && s(i, "id", n.idPrefix + "-" + l), a.spanHtml && r.html(a.spanHtml), i = c(e, i, a.divWrap), r = c(e, r, a.spanWrap), o(i, e, n), { div: i, span: r };
  }function f(e, n) {
    var s;return n.wrapperClass ? (s = t("<span />").addClass(n.wrapperClass), s = c(e, s, "wrap")) : null;
  }function p() {
    var n, s, a, i;return i = "rgb(120,2,153)", s = t('<div style="width:0;height:0;color:' + i + '">'), t("body").append(s), a = s.get(0), n = e.getComputedStyle ? e.getComputedStyle(a, "").color : (a.currentStyle || a.style || {}).color, s.remove(), n.replace(/ /g, "") !== i;
  }function m(e) {
    return e ? t("<span />").text(e).html() : "";
  }function v() {
    return navigator.cpuClass && !navigator.product;
  }function h() {
    return void 0 !== e.XMLHttpRequest;
  }function C(e) {
    var t;return !!e[0].multiple || (t = s(e, "size"), !(!t || t <= 1));
  }function b() {
    return !1;
  }function y(e, t) {
    var n = "none";a(e, t, { "selectstart dragstart mousedown": b }), e.css({ MozUserSelect: n, msUserSelect: n, webkitUserSelect: n, userSelect: n });
  }function w(e, n, s) {
    var a = t.map(e[0].files, function (e) {
      return e.name;
    }).join(", ");"" === a ? a = s.fileDefaultHtml : (a = a.split(/[\/\\]+/), a = a[a.length - 1]), n.text(a);
  }function g(e, t, n) {
    var s, a;for (s = [], e.each(function () {
      var e;for (e in t) Object.prototype.hasOwnProperty.call(t, e) && (s.push({ el: this, name: e, old: this.style[e] }), this.style[e] = t[e]);
    }), n(); s.length;) a = s.pop(), a.el.style[a.name] = a.old;
  }function k(e, t) {
    var n;n = e.parents(), n.push(e[0]), n = n.not(":visible"), g(n, { visibility: "hidden", display: "block", position: "absolute" }, t);
  }function H(e, t) {
    return function () {
      e.unwrap().unwrap().unbind(t.eventNamespace);
    };
  }var x = !0,
      A = !1,
      W = [{ match: function (e) {
      return e.is("a, button, :submit, :reset, input[type='button']");
    }, apply: function (t, n) {
      var l, u, c, f, p;return u = n.submitDefaultHtml, t.is(":reset") && (u = n.resetDefaultHtml), f = t.is("a, button") ? function () {
        return t.html() || u;
      } : function () {
        return m(s(t, "value")) || u;
      }, c = d(t, n, { divClass: n.buttonClass, spanHtml: f() }), l = c.div, i(t, l, n), p = !1, a(l, n, { "click touchend": function () {
          var n, a, i, r;return !p && !t.is(":disabled") && (p = !0, t[0].dispatchEvent ? (n = document.createEvent("MouseEvents"), n.initEvent("click", !0, !0), a = t[0].dispatchEvent(n), t.is("a") && a && (i = s(t, "target"), r = s(t, "href"), i && "_self" !== i ? e.open(r, i) : document.location.href = r)) : t.click(), void (p = !1));
        } }), y(l, n), { remove: function () {
          return l.after(t), l.remove(), t.unbind(n.eventNamespace), t;
        }, update: function () {
          r(l, n), o(l, t, n), t.detach(), c.span.html(f()).append(t);
        } };
    } }, { match: function (e) {
      return e.is(":checkbox");
    }, apply: function (e, t) {
      var n, s, l;return n = d(e, t, { divClass: t.checkboxClass }), s = n.div, l = n.span, i(e, s, t), a(e, t, { "click touchend": function () {
          u(l, e, t);
        } }), u(l, e, t), { remove: H(e, t), update: function () {
          r(s, t), l.removeClass(t.checkedClass), u(l, e, t), o(s, e, t);
        } };
    } }, { match: function (e) {
      return e.is(":file");
    }, apply: function (e, n) {
      function l() {
        w(e, p, n);
      }var u,
          f,
          p,
          m,
          h = "undefined" != typeof e.attr("multiple");return u = d(e, n, { divClass: n.fileClass, spanClass: n.fileButtonClass, spanHtml: h ? n.filesButtonHtml : n.fileButtonHtml, spanWrap: "after" }), f = u.div, m = u.span, p = t("<span />").html(n.fileDefaultHtml), p.addClass(n.filenameClass), p = c(e, p, "after"), s(e, "size") || s(e, "size", f.width() / 10), i(e, f, n), l(), v() ? a(e, n, { click: function () {
          e.trigger("change"), setTimeout(l, 0);
        } }) : a(e, n, { change: l }), y(p, n), y(m, n), { remove: function () {
          return p.remove(), m.remove(), e.unwrap().unbind(n.eventNamespace);
        }, update: function () {
          r(f, n), w(e, p, n), o(f, e, n);
        } };
    } }, { match: function (e) {
      if (e.is("input")) {
        var t = (" " + s(e, "type") + " ").toLowerCase(),
            n = " color date datetime datetime-local email month number password search tel text time url week ";return n.indexOf(t) >= 0;
      }return !1;
    }, apply: function (e, t) {
      var n, a;return n = s(e, "type"), e.addClass(t.inputClass), a = f(e, t), i(e, e, t), t.inputAddTypeAsClass && e.addClass(n), { remove: function () {
          e.removeClass(t.inputClass), t.inputAddTypeAsClass && e.removeClass(n), a && e.unwrap();
        }, update: b };
    } }, { match: function (e) {
      return e.is(":radio");
    }, apply: function (e, n) {
      var l, c, f;return l = d(e, n, { divClass: n.radioClass }), c = l.div, f = l.span, i(e, c, n), a(e, n, { "click touchend": function () {
          void 0 !== e.attr("name") ? t.uniform.update(t(':radio[name="' + s(e, "name") + '"]')) : t.uniform.update(e);
        } }), u(f, e, n), { remove: H(e, n), update: function () {
          r(c, n), u(f, e, n), o(c, e, n);
        } };
    } }, { match: function (e) {
      return !(!e.is("select") || C(e));
    }, apply: function (e, n) {
      var s, l, u, c;return n.selectAutoWidth && k(e, function () {
        c = e.width();
      }), s = d(e, n, { divClass: n.selectClass, spanHtml: (e.find(":selected:first") || e.find("option:first")).html(), spanWrap: "before" }), l = s.div, u = s.span, n.selectAutoWidth ? k(e, function () {
        g(t([u[0], l[0]]), { display: "block" }, function () {
          var e;e = u.outerWidth() - u.width(), l.width(c + e), u.width(c);
        });
      }) : l.addClass("fixedWidth"), i(e, l, n), a(e, n, { change: function () {
          u.html(e.find(":selected").html()), l.removeClass(n.activeClass);
        }, "click touchend": function () {
          var t = e.find(":selected").html();u.html() !== t && e.trigger("change");
        }, keyup: function () {
          u.html(e.find(":selected").html());
        } }), y(u, n), { remove: function () {
          return u.remove(), e.unwrap().unbind(n.eventNamespace), e;
        }, update: function () {
          n.selectAutoWidth ? (t.uniform.restore(e), e.uniform(n)) : (r(l, n), e[0].selectedIndex = e[0].selectedIndex, u.html(e.find(":selected").html()), o(l, e, n));
        } };
    } }, { match: function (e) {
      return !(!e.is("select") || !C(e));
    }, apply: function (e, t) {
      var n;return e.addClass(t.selectMultiClass), n = f(e, t), i(e, e, t), { remove: function () {
          e.removeClass(t.selectMultiClass), n && e.unwrap();
        }, update: b };
    } }, { match: function (e) {
      return e.is("textarea");
    }, apply: function (e, t) {
      var n;return e.addClass(t.textareaClass), n = f(e, t), i(e, e, t), { remove: function () {
          e.removeClass(t.textareaClass), n && e.unwrap();
        }, update: b };
    } }];v() && !h() && (x = !1), t.uniform = { defaults: { activeClass: "active", autoHide: !0, buttonClass: "button", checkboxClass: "checker", checkedClass: "checked", disabledClass: "disabled", eventNamespace: ".uniform", fileButtonClass: "action", fileButtonHtml: "Choose File", filesButtonHtml: "Choose Files", fileClass: "uploader", fileDefaultHtml: "No file selected", filenameClass: "filename", focusClass: "focus", hoverClass: "hover", idPrefix: "uniform", inputAddTypeAsClass: !0, inputClass: "uniform-input", radioClass: "radio", resetDefaultHtml: "Reset", resetSelector: !1, selectAutoWidth: !0, selectClass: "selector", selectMultiClass: "uniform-multiselect", submitDefaultHtml: "Submit", textareaClass: "uniform", useID: !0, wrapperClass: null }, elements: [] }, t.fn.uniform = function (n) {
    var s = this;return n = t.extend({}, t.uniform.defaults, n), A || (A = !0, p() && (x = !1)), x ? (n.resetSelector && t(n.resetSelector).mouseup(function () {
      e.setTimeout(function () {
        t.uniform.update(s);
      }, 10);
    }), this.each(function () {
      var e,
          s,
          a,
          i = t(this);if (i.data("uniformed")) return void t.uniform.update(i);for (e = 0; e < W.length; e += 1) if (s = W[e], s.match(i, n)) return a = s.apply(i, n), i.data("uniformed", a), void t.uniform.elements.push(i.get(0));
    })) : this;
  }, t.uniform.restore = t.fn.uniform.restore = function (e) {
    e === n && (e = t.uniform.elements), t(e).each(function () {
      var e,
          n,
          s = t(this);n = s.data("uniformed"), n && (n.remove(), e = t.inArray(this, t.uniform.elements), e >= 0 && t.uniform.elements.splice(e, 1), s.removeData("uniformed"));
    });
  }, t.uniform.update = t.fn.uniform.update = function (e) {
    e === n && (e = t.uniform.elements), t(e).each(function () {
      var e,
          n = t(this);e = n.data("uniformed"), e && e.update(n, e.options);
    });
  };
}(this, jQuery);

/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.12.9
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser=typeof window!=='undefined'&&typeof document!=='undefined';var longerTimeoutBrowsers=['Edge','Trident','Firefox'];var timeoutDuration=0;for(var i=0;i<longerTimeoutBrowsers.length;i+=1){if(isBrowser&&navigator.userAgent.indexOf(longerTimeoutBrowsers[i])>=0){timeoutDuration=1;break}}
function microtaskDebounce(fn){var called=!1;return function(){if(called){return}
called=!0;window.Promise.resolve().then(function(){called=!1;fn()})}}
function taskDebounce(fn){var scheduled=!1;return function(){if(!scheduled){scheduled=!0;setTimeout(function(){scheduled=!1;fn()},timeoutDuration)}}}
var supportsMicroTasks=isBrowser&&window.Promise;
/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  // NOTE: 1 DOM access here
  var offsetParent = element && element.offsetParent;
  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    if (element) {
      return element.ownerDocument.documentElement;
    }

    return document.documentElement;
  }

  // .offsetParent will return the closest TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

/**
 * Tells if you are running Internet Explorer 10
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean} isIE10
 */
var isIE10 = undefined;

var isIE10$1 = function () {
  if (isIE10 === undefined) {
    isIE10 = navigator.appVersion.indexOf('MSIE 10') !== -1;
  }
  return isIE10;
};

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE10$1() ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}

function getWindowSizes() {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE10$1() && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  if (isIE10$1()) {
    try {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } catch (err) {}
  } else {
    rect = element.getBoundingClientRect();
  }

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var isIE10 = isIE10$1();
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = getScroll(html);
  var scrollLeft = getScroll(html, 'left');

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  // NOTE: 1 DOM access here
  var boundaries = { top: 0, left: 0 };
  var offsetParent = findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var commonOffsetParent = findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length - 1; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.left = '';
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper.
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  // floor sides to avoid blurry text
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.floor(popper.top),
    bottom: Math.floor(popper.bottom),
    right: Math.floor(popper.right)
  };

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    top = -offsetParentRect.height + offsets.bottom;
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    left = -offsetParentRect.width + offsets.right;
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjuction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement);
  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Create a new Popper.js instance
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedule an update, it will run on the next UI update available
     * @method scheduleUpdate
     * @memberof Popper
     */

    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */

Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/velocity-animate/velocity.js":
/*!***************************************************!*\
  !*** ./node_modules/velocity-animate/velocity.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! VelocityJS.org (1.5.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */

/*************************
 Velocity jQuery Shim
 *************************/

/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
(function(window){"use strict";if(window.jQuery){return}
var $=function(selector,context){return new $.fn.init(selector,context)};$.isWindow=function(obj){return obj&&obj===obj.window};$.type=function(obj){if(!obj){return obj+""}
return typeof obj==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj};$.isArray=Array.isArray||function(obj){return $.type(obj)==="array"};function isArraylike(obj){var length=obj.length,type=$.type(obj);if(type==="function"||$.isWindow(obj)){return!1}
if(obj.nodeType===1&&length){return!0}
return type==="array"||length===0||typeof length==="number"&&length>0&&length-1 in obj}
$.isPlainObject=function(obj){var key;if(!obj||$.type(obj)!=="object"||obj.nodeType||$.isWindow(obj)){return!1}
try{if(obj.constructor&&!hasOwn.call(obj,"constructor")&&!hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){return!1}}catch(e){return!1}
for(key in obj){}
return key===undefined||hasOwn.call(obj,key)};$.each=function(obj,callback,args){var value,i=0,length=obj.length,isArray=isArraylike(obj);if(args){if(isArray){for(;i<length;i++){value=callback.apply(obj[i],args);if(value===!1){break}}}else{for(i in obj){if(!obj.hasOwnProperty(i)){continue}
value=callback.apply(obj[i],args);if(value===!1){break}}}}else{if(isArray){for(;i<length;i++){value=callback.call(obj[i],i,obj[i]);if(value===!1){break}}}else{for(i in obj){if(!obj.hasOwnProperty(i)){continue}
value=callback.call(obj[i],i,obj[i]);if(value===!1){break}}}}
return obj};$.data=function(node,key,value){if(value===undefined){var getId=node[$.expando],store=getId&&cache[getId];if(key===undefined){return store}else if(store){if(key in store){return store[key]}}}else if(key!==undefined){var setId=node[$.expando]||(node[$.expando]=++$.uuid);cache[setId]=cache[setId]||{};cache[setId][key]=value;return value}};$.removeData=function(node,keys){var id=node[$.expando],store=id&&cache[id];if(store){if(!keys){delete cache[id]}else{$.each(keys,function(_,key){delete store[key]})}}};$.extend=function(){var src,copyIsArray,copy,name,options,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=!1;if(typeof target==="boolean"){deep=target;target=arguments[i]||{};i++}
if(typeof target!=="object"&&$.type(target)!=="function"){target={}}
if(i===length){target=this;i--}
for(;i<length;i++){if(options=arguments[i]){for(name in options){if(!options.hasOwnProperty(name)){continue}
src=target[name];copy=options[name];if(target===copy){continue}
if(deep&&copy&&($.isPlainObject(copy)||(copyIsArray=$.isArray(copy)))){if(copyIsArray){copyIsArray=!1;clone=src&&$.isArray(src)?src:[]}else{clone=src&&$.isPlainObject(src)?src:{}}
target[name]=$.extend(deep,clone,copy)}else if(copy!==undefined){target[name]=copy}}}}
return target};$.queue=function(elem,type,data){function $makeArray(arr,results){var ret=results||[];if(arr){if(isArraylike(Object(arr))){(function(first,second){var len=+second.length,j=0,i=first.length;while(j<len){first[i++]=second[j++]}
if(len!==len){while(second[j]!==undefined){first[i++]=second[j++]}}
first.length=i;return first})(ret,typeof arr==="string"?[arr]:arr)}else{[].push.call(ret,arr)}}
return ret}
if(!elem){return}
type=(type||"fx")+"queue";var q=$.data(elem,type);if(!data){return q||[]}
if(!q||$.isArray(data)){q=$.data(elem,type,$makeArray(data))}else{q.push(data)}
return q};$.dequeue=function(elems,type){$.each(elems.nodeType?[elems]:elems,function(i,elem){type=type||"fx";var queue=$.queue(elem,type),fn=queue.shift();if(fn==="inprogress"){fn=queue.shift()}
if(fn){if(type==="fx"){queue.unshift("inprogress")}
fn.call(elem,function(){$.dequeue(elem,type)})}})};$.fn=$.prototype={init:function(selector){if(selector.nodeType){this[0]=selector;return this}else{throw new Error("Not a DOM node.")}},offset:function(){var box=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:box.top+(window.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:box.left+(window.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function offsetParentFn(elem){var offsetParent=elem.offsetParent;while(offsetParent&&offsetParent.nodeName.toLowerCase()!=="html"&&offsetParent.style&&offsetParent.style.position.toLowerCase()==="static"){offsetParent=offsetParent.offsetParent}
return offsetParent||document}
var elem=this[0],offsetParent=offsetParentFn(elem),offset=this.offset(),parentOffset=/^(?:body|html)$/i.test(offsetParent.nodeName)?{top:0,left:0}:$(offsetParent).offset();offset.top-=parseFloat(elem.style.marginTop)||0;offset.left-=parseFloat(elem.style.marginLeft)||0;if(offsetParent.style){parentOffset.top+=parseFloat(offsetParent.style.borderTopWidth)||0;parentOffset.left+=parseFloat(offsetParent.style.borderLeftWidth)||0}
return{top:offset.top-parentOffset.top,left:offset.left-parentOffset.left}}};var cache={};$.expando="velocity"+new Date().getTime();$.uuid=0;var class2type={},hasOwn=class2type.hasOwnProperty,toString=class2type.toString;var types="Boolean Number String Function Array Date RegExp Object Error".split(" ");for(var i=0;i<types.length;i++){class2type["[object "+types[i]+"]"]=types[i].toLowerCase()}
$.fn.init.prototype=$.fn;window.Velocity={Utilities:$}})(window);(function(factory){"use strict";if(typeof module==="object"&&typeof module.exports==="object"){module.exports=factory()}else if(!0){!(__WEBPACK_AMD_DEFINE_FACTORY__=(factory),__WEBPACK_AMD_DEFINE_RESULT__=(typeof __WEBPACK_AMD_DEFINE_FACTORY__==='function'?(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports,__webpack_require__,exports,module)):__WEBPACK_AMD_DEFINE_FACTORY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))}else{}})(function(){"use strict";return function(global,window,document,undefined){var IE=function(){if(document.documentMode){return document.documentMode}else{for(var i=7;i>4;i--){var div=document.createElement("div");div.innerHTML="<!--[if IE "+i+"]><span></span><![endif]-->";if(div.getElementsByTagName("span").length){div=null;return i}}}
return undefined}();var rAFShim=function(){var timeLast=0;return window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(callback){var timeCurrent=new Date().getTime(),timeDelta;timeDelta=Math.max(0,16-(timeCurrent-timeLast));timeLast=timeCurrent+timeDelta;return setTimeout(function(){callback(timeCurrent+timeDelta)},timeDelta)}}();var performance=function(){var perf=window.performance||{};if(typeof perf.now!=="function"){var nowOffset=perf.timing&&perf.timing.navigationStart?perf.timing.navigationStart:new Date().getTime();perf.now=function(){return new Date().getTime()-nowOffset}}
return perf}();function compactSparseArray(array){var index=-1,length=array?array.length:0,result=[];while(++index<length){var value=array[index];if(value){result.push(value)}}
return result}
var _slice=function(){var slice=Array.prototype.slice;try{slice.call(document.documentElement);return slice}catch(e){return function(begin,end){var len=this.length;if(typeof begin!=="number"){begin=0}
if(typeof end!=="number"){end=len}
if(this.slice){return slice.call(this,begin,end)}
var i,cloned=[],start=begin>=0?begin:Math.max(0,len+begin),upTo=end<0?len+end:Math.min(end,len),size=upTo-start;if(size>0){cloned=new Array(size);if(this.charAt){for(i=0;i<size;i++){cloned[i]=this.charAt(start+i)}}else{for(i=0;i<size;i++){cloned[i]=this[start+i]}}}
return cloned}}}();var _inArray=function(){if(Array.prototype.includes){return function(arr,val){return arr.includes(val)}}
if(Array.prototype.indexOf){return function(arr,val){return arr.indexOf(val)>=0}}
return function(arr,val){for(var i=0;i<arr.length;i++){if(arr[i]===val){return!0}}
return!1}};function sanitizeElements(elements){if(Type.isWrapped(elements)){elements=_slice.call(elements)}else if(Type.isNode(elements)){elements=[elements]}
return elements}
var Type={isNumber:function(variable){return typeof variable==="number"},isString:function(variable){return typeof variable==="string"},isArray:Array.isArray||function(variable){return Object.prototype.toString.call(variable)==="[object Array]"},isFunction:function(variable){return Object.prototype.toString.call(variable)==="[object Function]"},isNode:function(variable){return variable&&variable.nodeType},isWrapped:function(variable){return variable&&variable!==window&&Type.isNumber(variable.length)&&!Type.isString(variable)&&!Type.isFunction(variable)&&!Type.isNode(variable)&&(variable.length===0||Type.isNode(variable[0]))},isSVG:function(variable){return window.SVGElement&&variable instanceof window.SVGElement},isEmptyObject:function(variable){for(var name in variable){if(variable.hasOwnProperty(name)){return!1}}
return!0}};var $,isJQuery=!1;if(global.fn&&global.fn.jquery){$=global;isJQuery=!0}else{$=window.Velocity.Utilities}
if(IE<=8&&!isJQuery){throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.")}else if(IE<=7){jQuery.fn.velocity=jQuery.fn.animate;return}
var DURATION_DEFAULT=400,EASING_DEFAULT="swing";var Velocity={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent),isAndroid:/Android/i.test(window.navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(window.navigator.userAgent),isChrome:window.chrome,isFirefox:/Firefox/i.test(window.navigator.userAgent),prefixElement:document.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[],delayedElements:{count:0}},CSS:{},Utilities:$,Redirects:{},Easings:{},Promise:window.Promise,defaults:{queue:"",duration:DURATION_DEFAULT,easing:EASING_DEFAULT,begin:undefined,complete:undefined,progress:undefined,display:undefined,visibility:undefined,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0,promiseRejectEmpty:!0},init:function(element){$.data(element,"velocity",{isSVG:Type.isSVG(element),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:5,patch:1},debug:!1,timestamp:!0,pauseAll:function(queueName){var currentTime=new Date().getTime();$.each(Velocity.State.calls,function(i,activeCall){if(activeCall){if(queueName!==undefined&&(activeCall[2].queue!==queueName||activeCall[2].queue===!1)){return!0}
activeCall[5]={resume:!1}}});$.each(Velocity.State.delayedElements,function(k,element){if(!element){return}
pauseDelayOnElement(element,currentTime)})},resumeAll:function(queueName){var currentTime=new Date().getTime();$.each(Velocity.State.calls,function(i,activeCall){if(activeCall){if(queueName!==undefined&&(activeCall[2].queue!==queueName||activeCall[2].queue===!1)){return!0}
if(activeCall[5]){activeCall[5].resume=!0}}});$.each(Velocity.State.delayedElements,function(k,element){if(!element){return}
resumeDelayOnElement(element,currentTime)})}};if(window.pageYOffset!==undefined){Velocity.State.scrollAnchor=window;Velocity.State.scrollPropertyLeft="pageXOffset";Velocity.State.scrollPropertyTop="pageYOffset"}else{Velocity.State.scrollAnchor=document.documentElement||document.body.parentNode||document.body;Velocity.State.scrollPropertyLeft="scrollLeft";Velocity.State.scrollPropertyTop="scrollTop"}
function Data(element){var response=$.data(element,"velocity");return response===null?undefined:response}
function pauseDelayOnElement(element,currentTime){var data=Data(element);if(data&&data.delayTimer&&!data.delayPaused){data.delayRemaining=data.delay-currentTime+data.delayBegin;data.delayPaused=!0;clearTimeout(data.delayTimer.setTimeout)}}
function resumeDelayOnElement(element,currentTime){var data=Data(element);if(data&&data.delayTimer&&data.delayPaused){data.delayPaused=!1;data.delayTimer.setTimeout=setTimeout(data.delayTimer.next,data.delayRemaining)}}
function generateStep(steps){return function(p){return Math.round(p*steps)*(1/steps)}}
function generateBezier(mX1,mY1,mX2,mY2){var NEWTON_ITERATIONS=4,NEWTON_MIN_SLOPE=0.001,SUBDIVISION_PRECISION=0.0000001,SUBDIVISION_MAX_ITERATIONS=10,kSplineTableSize=11,kSampleStepSize=1.0/(kSplineTableSize-1.0),float32ArraySupported="Float32Array" in window;if(arguments.length!==4){return!1}
for(var i=0;i<4;++i){if(typeof arguments[i]!=="number"||isNaN(arguments[i])||!isFinite(arguments[i])){return!1}}
mX1=Math.min(mX1,1);mX2=Math.min(mX2,1);mX1=Math.max(mX1,0);mX2=Math.max(mX2,0);var mSampleValues=float32ArraySupported?new Float32Array(kSplineTableSize):new Array(kSplineTableSize);function A(aA1,aA2){return 1.0-3.0*aA2+3.0*aA1}
function B(aA1,aA2){return 3.0*aA2-6.0*aA1}
function C(aA1){return 3.0*aA1}
function calcBezier(aT,aA1,aA2){return((A(aA1,aA2)*aT+B(aA1,aA2))*aT+C(aA1))*aT}
function getSlope(aT,aA1,aA2){return 3.0*A(aA1,aA2)*aT*aT+2.0*B(aA1,aA2)*aT+C(aA1)}
function newtonRaphsonIterate(aX,aGuessT){for(var i=0;i<NEWTON_ITERATIONS;++i){var currentSlope=getSlope(aGuessT,mX1,mX2);if(currentSlope===0.0){return aGuessT}
var currentX=calcBezier(aGuessT,mX1,mX2)-aX;aGuessT-=currentX/currentSlope}
return aGuessT}
function calcSampleValues(){for(var i=0;i<kSplineTableSize;++i){mSampleValues[i]=calcBezier(i*kSampleStepSize,mX1,mX2)}}
function binarySubdivide(aX,aA,aB){var currentX,currentT,i=0;do{currentT=aA+(aB-aA)/2.0;currentX=calcBezier(currentT,mX1,mX2)-aX;if(currentX>0.0){aB=currentT}else{aA=currentT}}while(Math.abs(currentX)>SUBDIVISION_PRECISION&&++i<SUBDIVISION_MAX_ITERATIONS);return currentT}
function getTForX(aX){var intervalStart=0.0,currentSample=1,lastSample=kSplineTableSize-1;for(;currentSample!==lastSample&&mSampleValues[currentSample]<=aX;++currentSample){intervalStart+=kSampleStepSize}
--currentSample;var dist=(aX-mSampleValues[currentSample])/(mSampleValues[currentSample+1]-mSampleValues[currentSample]),guessForT=intervalStart+dist*kSampleStepSize,initialSlope=getSlope(guessForT,mX1,mX2);if(initialSlope>=NEWTON_MIN_SLOPE){return newtonRaphsonIterate(aX,guessForT)}else if(initialSlope===0.0){return guessForT}else{return binarySubdivide(aX,intervalStart,intervalStart+kSampleStepSize)}}
var _precomputed=!1;function precompute(){_precomputed=!0;if(mX1!==mY1||mX2!==mY2){calcSampleValues()}}
var f=function(aX){if(!_precomputed){precompute()}
if(mX1===mY1&&mX2===mY2){return aX}
if(aX===0){return 0}
if(aX===1){return 1}
return calcBezier(getTForX(aX),mY1,mY2)};f.getControlPoints=function(){return[{x:mX1,y:mY1},{x:mX2,y:mY2}]};var str="generateBezier("+[mX1,mY1,mX2,mY2]+")";f.toString=function(){return str};return f}
var generateSpringRK4=function(){function springAccelerationForState(state){return-state.tension*state.x-state.friction*state.v}
function springEvaluateStateWithDerivative(initialState,dt,derivative){var state={x:initialState.x+derivative.dx*dt,v:initialState.v+derivative.dv*dt,tension:initialState.tension,friction:initialState.friction};return{dx:state.v,dv:springAccelerationForState(state)}}
function springIntegrateState(state,dt){var a={dx:state.v,dv:springAccelerationForState(state)},b=springEvaluateStateWithDerivative(state,dt*0.5,a),c=springEvaluateStateWithDerivative(state,dt*0.5,b),d=springEvaluateStateWithDerivative(state,dt,c),dxdt=1.0/6.0*(a.dx+2.0*(b.dx+c.dx)+d.dx),dvdt=1.0/6.0*(a.dv+2.0*(b.dv+c.dv)+d.dv);state.x=state.x+dxdt*dt;state.v=state.v+dvdt*dt;return state}
return function springRK4Factory(tension,friction,duration){var initState={x:-1,v:0,tension:null,friction:null},path=[0],time_lapsed=0,tolerance=1/10000,DT=16/1000,have_duration,dt,last_state;tension=parseFloat(tension)||500;friction=parseFloat(friction)||20;duration=duration||null;initState.tension=tension;initState.friction=friction;have_duration=duration!==null;if(have_duration){time_lapsed=springRK4Factory(tension,friction);dt=time_lapsed/duration*DT}else{dt=DT}
while(!0){last_state=springIntegrateState(last_state||initState,dt);path.push(1+last_state.x);time_lapsed+=16;if(!(Math.abs(last_state.x)>tolerance&&Math.abs(last_state.v)>tolerance)){break}}
return!have_duration?time_lapsed:function(percentComplete){return path[percentComplete*(path.length-1)|0]}}}();Velocity.Easings={linear:function(p){return p},swing:function(p){return 0.5-Math.cos(p*Math.PI)/2},spring:function(p){return 1-Math.cos(p*4.5*Math.PI)*Math.exp(-p*6)}};$.each([["ease",[0.25,0.1,0.25,1.0]],["ease-in",[0.42,0.0,1.00,1.0]],["ease-out",[0.00,0.0,0.58,1.0]],["ease-in-out",[0.42,0.0,0.58,1.0]],["easeInSine",[0.47,0,0.745,0.715]],["easeOutSine",[0.39,0.575,0.565,1]],["easeInOutSine",[0.445,0.05,0.55,0.95]],["easeInQuad",[0.55,0.085,0.68,0.53]],["easeOutQuad",[0.25,0.46,0.45,0.94]],["easeInOutQuad",[0.455,0.03,0.515,0.955]],["easeInCubic",[0.55,0.055,0.675,0.19]],["easeOutCubic",[0.215,0.61,0.355,1]],["easeInOutCubic",[0.645,0.045,0.355,1]],["easeInQuart",[0.895,0.03,0.685,0.22]],["easeOutQuart",[0.165,0.84,0.44,1]],["easeInOutQuart",[0.77,0,0.175,1]],["easeInQuint",[0.755,0.05,0.855,0.06]],["easeOutQuint",[0.23,1,0.32,1]],["easeInOutQuint",[0.86,0,0.07,1]],["easeInExpo",[0.95,0.05,0.795,0.035]],["easeOutExpo",[0.19,1,0.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[0.6,0.04,0.98,0.335]],["easeOutCirc",[0.075,0.82,0.165,1]],["easeInOutCirc",[0.785,0.135,0.15,0.86]]],function(i,easingArray){Velocity.Easings[easingArray[0]]=generateBezier.apply(null,easingArray[1])});function getEasing(value,duration){var easing=value;if(Type.isString(value)){if(!Velocity.Easings[value]){easing=!1}}else if(Type.isArray(value)&&value.length===1){easing=generateStep.apply(null,value)}else if(Type.isArray(value)&&value.length===2){easing=generateSpringRK4.apply(null,value.concat([duration]))}else if(Type.isArray(value)&&value.length===4){easing=generateBezier.apply(null,value)}else{easing=!1}
if(easing===!1){if(Velocity.Easings[Velocity.defaults.easing]){easing=Velocity.defaults.easing}else{easing=EASING_DEFAULT}}
return easing}
var CSS=Velocity.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/ig},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"],units:["%","em","ex","ch","rem","vw","vh","vmin","vmax","cm","mm","Q","in","pc","pt","px","deg","grad","rad","turn","s","ms"],colorNames:{"aliceblue":"240,248,255","antiquewhite":"250,235,215","aquamarine":"127,255,212","aqua":"0,255,255","azure":"240,255,255","beige":"245,245,220","bisque":"255,228,196","black":"0,0,0","blanchedalmond":"255,235,205","blueviolet":"138,43,226","blue":"0,0,255","brown":"165,42,42","burlywood":"222,184,135","cadetblue":"95,158,160","chartreuse":"127,255,0","chocolate":"210,105,30","coral":"255,127,80","cornflowerblue":"100,149,237","cornsilk":"255,248,220","crimson":"220,20,60","cyan":"0,255,255","darkblue":"0,0,139","darkcyan":"0,139,139","darkgoldenrod":"184,134,11","darkgray":"169,169,169","darkgrey":"169,169,169","darkgreen":"0,100,0","darkkhaki":"189,183,107","darkmagenta":"139,0,139","darkolivegreen":"85,107,47","darkorange":"255,140,0","darkorchid":"153,50,204","darkred":"139,0,0","darksalmon":"233,150,122","darkseagreen":"143,188,143","darkslateblue":"72,61,139","darkslategray":"47,79,79","darkturquoise":"0,206,209","darkviolet":"148,0,211","deeppink":"255,20,147","deepskyblue":"0,191,255","dimgray":"105,105,105","dimgrey":"105,105,105","dodgerblue":"30,144,255","firebrick":"178,34,34","floralwhite":"255,250,240","forestgreen":"34,139,34","fuchsia":"255,0,255","gainsboro":"220,220,220","ghostwhite":"248,248,255","gold":"255,215,0","goldenrod":"218,165,32","gray":"128,128,128","grey":"128,128,128","greenyellow":"173,255,47","green":"0,128,0","honeydew":"240,255,240","hotpink":"255,105,180","indianred":"205,92,92","indigo":"75,0,130","ivory":"255,255,240","khaki":"240,230,140","lavenderblush":"255,240,245","lavender":"230,230,250","lawngreen":"124,252,0","lemonchiffon":"255,250,205","lightblue":"173,216,230","lightcoral":"240,128,128","lightcyan":"224,255,255","lightgoldenrodyellow":"250,250,210","lightgray":"211,211,211","lightgrey":"211,211,211","lightgreen":"144,238,144","lightpink":"255,182,193","lightsalmon":"255,160,122","lightseagreen":"32,178,170","lightskyblue":"135,206,250","lightslategray":"119,136,153","lightsteelblue":"176,196,222","lightyellow":"255,255,224","limegreen":"50,205,50","lime":"0,255,0","linen":"250,240,230","magenta":"255,0,255","maroon":"128,0,0","mediumaquamarine":"102,205,170","mediumblue":"0,0,205","mediumorchid":"186,85,211","mediumpurple":"147,112,219","mediumseagreen":"60,179,113","mediumslateblue":"123,104,238","mediumspringgreen":"0,250,154","mediumturquoise":"72,209,204","mediumvioletred":"199,21,133","midnightblue":"25,25,112","mintcream":"245,255,250","mistyrose":"255,228,225","moccasin":"255,228,181","navajowhite":"255,222,173","navy":"0,0,128","oldlace":"253,245,230","olivedrab":"107,142,35","olive":"128,128,0","orangered":"255,69,0","orange":"255,165,0","orchid":"218,112,214","palegoldenrod":"238,232,170","palegreen":"152,251,152","paleturquoise":"175,238,238","palevioletred":"219,112,147","papayawhip":"255,239,213","peachpuff":"255,218,185","peru":"205,133,63","pink":"255,192,203","plum":"221,160,221","powderblue":"176,224,230","purple":"128,0,128","red":"255,0,0","rosybrown":"188,143,143","royalblue":"65,105,225","saddlebrown":"139,69,19","salmon":"250,128,114","sandybrown":"244,164,96","seagreen":"46,139,87","seashell":"255,245,238","sienna":"160,82,45","silver":"192,192,192","skyblue":"135,206,235","slateblue":"106,90,205","slategray":"112,128,144","snow":"255,250,250","springgreen":"0,255,127","steelblue":"70,130,180","tan":"210,180,140","teal":"0,128,128","thistle":"216,191,216","tomato":"255,99,71","turquoise":"64,224,208","violet":"238,130,238","wheat":"245,222,179","whitesmoke":"245,245,245","white":"255,255,255","yellowgreen":"154,205,50","yellow":"255,255,0"}},Hooks:{templates:{"textShadow":["Color X Y Blur","black 0px 0px 0px"],"boxShadow":["Color X Y Blur Spread","black 0px 0px 0px 0px"],"clip":["Top Right Bottom Left","0px 0px 0px 0px"],"backgroundPosition":["X Y","0% 0%"],"transformOrigin":["X Y Z","50% 50% 0px"],"perspectiveOrigin":["X Y","50% 50%"]},registered:{},register:function(){for(var i=0;i<CSS.Lists.colors.length;i++){var rgbComponents=CSS.Lists.colors[i]==="color"?"0 0 0 1":"255 255 255 1";CSS.Hooks.templates[CSS.Lists.colors[i]]=["Red Green Blue Alpha",rgbComponents]}
var rootProperty,hookTemplate,hookNames;if(IE){for(rootProperty in CSS.Hooks.templates){if(!CSS.Hooks.templates.hasOwnProperty(rootProperty)){continue}
hookTemplate=CSS.Hooks.templates[rootProperty];hookNames=hookTemplate[0].split(" ");var defaultValues=hookTemplate[1].match(CSS.RegEx.valueSplit);if(hookNames[0]==="Color"){hookNames.push(hookNames.shift());defaultValues.push(defaultValues.shift());CSS.Hooks.templates[rootProperty]=[hookNames.join(" "),defaultValues.join(" ")]}}}
for(rootProperty in CSS.Hooks.templates){if(!CSS.Hooks.templates.hasOwnProperty(rootProperty)){continue}
hookTemplate=CSS.Hooks.templates[rootProperty];hookNames=hookTemplate[0].split(" ");for(var j in hookNames){if(!hookNames.hasOwnProperty(j)){continue}
var fullHookName=rootProperty+hookNames[j],hookPosition=j;CSS.Hooks.registered[fullHookName]=[rootProperty,hookPosition]}}},getRoot:function(property){var hookData=CSS.Hooks.registered[property];if(hookData){return hookData[0]}else{return property}},getUnit:function(str,start){var unit=(str.substr(start||0,5).match(/^[a-z%]+/)||[])[0]||"";if(unit&&_inArray(CSS.Lists.units,unit)){return unit}
return""},fixColors:function(str){return str.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g,function($0,$1,$2){if(CSS.Lists.colorNames.hasOwnProperty($2)){return($1?$1:"rgba(")+CSS.Lists.colorNames[$2]+($1?"":",1)")}
return $1+$2})},cleanRootPropertyValue:function(rootProperty,rootPropertyValue){if(CSS.RegEx.valueUnwrap.test(rootPropertyValue)){rootPropertyValue=rootPropertyValue.match(CSS.RegEx.valueUnwrap)[1]}
if(CSS.Values.isCSSNullValue(rootPropertyValue)){rootPropertyValue=CSS.Hooks.templates[rootProperty][1]}
return rootPropertyValue},extractValue:function(fullHookName,rootPropertyValue){var hookData=CSS.Hooks.registered[fullHookName];if(hookData){var hookRoot=hookData[0],hookPosition=hookData[1];rootPropertyValue=CSS.Hooks.cleanRootPropertyValue(hookRoot,rootPropertyValue);return rootPropertyValue.toString().match(CSS.RegEx.valueSplit)[hookPosition]}else{return rootPropertyValue}},injectValue:function(fullHookName,hookValue,rootPropertyValue){var hookData=CSS.Hooks.registered[fullHookName];if(hookData){var hookRoot=hookData[0],hookPosition=hookData[1],rootPropertyValueParts,rootPropertyValueUpdated;rootPropertyValue=CSS.Hooks.cleanRootPropertyValue(hookRoot,rootPropertyValue);rootPropertyValueParts=rootPropertyValue.toString().match(CSS.RegEx.valueSplit);rootPropertyValueParts[hookPosition]=hookValue;rootPropertyValueUpdated=rootPropertyValueParts.join(" ");return rootPropertyValueUpdated}else{return rootPropertyValue}}},Normalizations:{registered:{clip:function(type,element,propertyValue){switch(type){case "name":return"clip";case "extract":var extracted;if(CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)){extracted=propertyValue}else{extracted=propertyValue.toString().match(CSS.RegEx.valueUnwrap);extracted=extracted?extracted[1].replace(/,(\s+)?/g," "):propertyValue}
return extracted;case "inject":return"rect("+propertyValue+")"}},blur:function(type,element,propertyValue){switch(type){case "name":return Velocity.State.isFirefox?"filter":"-webkit-filter";case "extract":var extracted=parseFloat(propertyValue);if(!(extracted||extracted===0)){var blurComponent=propertyValue.toString().match(/blur\(([0-9]+[A-z]+)\)/i);if(blurComponent){extracted=blurComponent[1]}else{extracted=0}}
return extracted;case "inject":if(!parseFloat(propertyValue)){return"none"}else{return"blur("+propertyValue+")"}}},opacity:function(type,element,propertyValue){if(IE<=8){switch(type){case "name":return"filter";case "extract":var extracted=propertyValue.toString().match(/alpha\(opacity=(.*)\)/i);if(extracted){propertyValue=extracted[1]/100}else{propertyValue=1}
return propertyValue;case "inject":element.style.zoom=1;if(parseFloat(propertyValue)>=1){return""}else{return"alpha(opacity="+parseInt(parseFloat(propertyValue)*100,10)+")"}}}else{switch(type){case "name":return"opacity";case "extract":return propertyValue;case "inject":return propertyValue}}}},register:function(){if((!IE||IE>9)&&!Velocity.State.isGingerbread){CSS.Lists.transformsBase=CSS.Lists.transformsBase.concat(CSS.Lists.transforms3D)}
for(var i=0;i<CSS.Lists.transformsBase.length;i++){(function(){var transformName=CSS.Lists.transformsBase[i];CSS.Normalizations.registered[transformName]=function(type,element,propertyValue){switch(type){case "name":return"transform";case "extract":if(Data(element)===undefined||Data(element).transformCache[transformName]===undefined){return(/^scale/i.test(transformName)?1:0)}
return Data(element).transformCache[transformName].replace(/[()]/g,"");case "inject":var invalid=!1;switch(transformName.substr(0,transformName.length-1)){case "translate":invalid=!/(%|px|em|rem|vw|vh|\d)$/i.test(propertyValue);break;case "scal":case "scale":if(Velocity.State.isAndroid&&Data(element).transformCache[transformName]===undefined&&propertyValue<1){propertyValue=1}
invalid=!/(\d)$/i.test(propertyValue);break;case "skew":invalid=!/(deg|\d)$/i.test(propertyValue);break;case "rotate":invalid=!/(deg|\d)$/i.test(propertyValue);break}
if(!invalid){Data(element).transformCache[transformName]="("+propertyValue+")"}
return Data(element).transformCache[transformName]}}})()}
for(var j=0;j<CSS.Lists.colors.length;j++){(function(){var colorName=CSS.Lists.colors[j];CSS.Normalizations.registered[colorName]=function(type,element,propertyValue){switch(type){case "name":return colorName;case "extract":var extracted;if(CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)){extracted=propertyValue}else{var converted,colorNames={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};if(/^[A-z]+$/i.test(propertyValue)){if(colorNames[propertyValue]!==undefined){converted=colorNames[propertyValue]}else{converted=colorNames.black}}else if(CSS.RegEx.isHex.test(propertyValue)){converted="rgb("+CSS.Values.hexToRgb(propertyValue).join(" ")+")"}else if(!/^rgba?\(/i.test(propertyValue)){converted=colorNames.black}
extracted=(converted||propertyValue).toString().match(CSS.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}
if((!IE||IE>8)&&extracted.split(" ").length===3){extracted+=" 1"}
return extracted;case "inject":if(/^rgb/.test(propertyValue)){return propertyValue}
if(IE<=8){if(propertyValue.split(" ").length===4){propertyValue=propertyValue.split(/\s+/).slice(0,3).join(" ")}}else if(propertyValue.split(" ").length===3){propertyValue+=" 1"}
return(IE<=8?"rgb":"rgba")+"("+propertyValue.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}})()}
function augmentDimension(name,element,wantInner){var isBorderBox=CSS.getPropertyValue(element,"boxSizing").toString().toLowerCase()==="border-box";if(isBorderBox===(wantInner||!1)){var i,value,augment=0,sides=name==="width"?["Left","Right"]:["Top","Bottom"],fields=["padding"+sides[0],"padding"+sides[1],"border"+sides[0]+"Width","border"+sides[1]+"Width"];for(i=0;i<fields.length;i++){value=parseFloat(CSS.getPropertyValue(element,fields[i]));if(!isNaN(value)){augment+=value}}
return wantInner?-augment:augment}
return 0}
function getDimension(name,wantInner){return function(type,element,propertyValue){switch(type){case "name":return name;case "extract":return parseFloat(propertyValue)+augmentDimension(name,element,wantInner);case "inject":return parseFloat(propertyValue)-augmentDimension(name,element,wantInner)+"px"}}}
CSS.Normalizations.registered.innerWidth=getDimension("width",!0);CSS.Normalizations.registered.innerHeight=getDimension("height",!0);CSS.Normalizations.registered.outerWidth=getDimension("width");CSS.Normalizations.registered.outerHeight=getDimension("height")}},Names:{camelCase:function(property){return property.replace(/-(\w)/g,function(match,subMatch){return subMatch.toUpperCase()})},SVGAttribute:function(property){var SVGAttributes="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";if(IE||Velocity.State.isAndroid&&!Velocity.State.isChrome){SVGAttributes+="|transform"}
return new RegExp("^("+SVGAttributes+")$","i").test(property)},prefixCheck:function(property){if(Velocity.State.prefixMatches[property]){return[Velocity.State.prefixMatches[property],!0]}else{var vendors=["","Webkit","Moz","ms","O"];for(var i=0,vendorsLength=vendors.length;i<vendorsLength;i++){var propertyPrefixed;if(i===0){propertyPrefixed=property}else{propertyPrefixed=vendors[i]+property.replace(/^\w/,function(match){return match.toUpperCase()})}
if(Type.isString(Velocity.State.prefixElement.style[propertyPrefixed])){Velocity.State.prefixMatches[property]=propertyPrefixed;return[propertyPrefixed,!0]}}
return[property,!1]}}},Values:{hexToRgb:function(hex){var shortformRegex=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,longformRegex=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,rgbParts;hex=hex.replace(shortformRegex,function(m,r,g,b){return r+r+g+g+b+b});rgbParts=longformRegex.exec(hex);return rgbParts?[parseInt(rgbParts[1],16),parseInt(rgbParts[2],16),parseInt(rgbParts[3],16)]:[0,0,0]},isCSSNullValue:function(value){return!value||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(value)},getUnitType:function(property){if(/^(rotate|skew)/i.test(property)){return"deg"}else if(/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(property)){return""}else{return"px"}},getDisplayType:function(element){var tagName=element&&element.tagName.toString().toLowerCase();if(/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(tagName)){return"inline"}else if(/^(li)$/i.test(tagName)){return"list-item"}else if(/^(tr)$/i.test(tagName)){return"table-row"}else if(/^(table)$/i.test(tagName)){return"table"}else if(/^(tbody)$/i.test(tagName)){return"table-row-group"}else{return"block"}},addClass:function(element,className){if(element){if(element.classList){element.classList.add(className)}else if(Type.isString(element.className)){element.className+=(element.className.length?" ":"")+className}else{var currentClass=element.getAttribute(IE<=7?"className":"class")||"";element.setAttribute("class",currentClass+(currentClass?" ":"")+className)}}},removeClass:function(element,className){if(element){if(element.classList){element.classList.remove(className)}else if(Type.isString(element.className)){element.className=element.className.toString().replace(new RegExp("(^|\\s)"+className.split(" ").join("|")+"(\\s|$)","gi")," ")}else{var currentClass=element.getAttribute(IE<=7?"className":"class")||"";element.setAttribute("class",currentClass.replace(new RegExp("(^|\s)"+className.split(" ").join("|")+"(\s|$)","gi")," "))}}}},getPropertyValue:function(element,property,rootPropertyValue,forceStyleLookup){function computePropertyValue(element,property){var computedValue=0;if(IE<=8){computedValue=$.css(element,property)}else{var toggleDisplay=!1;if(/^(width|height)$/.test(property)&&CSS.getPropertyValue(element,"display")===0){toggleDisplay=!0;CSS.setPropertyValue(element,"display",CSS.Values.getDisplayType(element))}
var revertDisplay=function(){if(toggleDisplay){CSS.setPropertyValue(element,"display","none")}};if(!forceStyleLookup){if(property==="height"&&CSS.getPropertyValue(element,"boxSizing").toString().toLowerCase()!=="border-box"){var contentBoxHeight=element.offsetHeight-(parseFloat(CSS.getPropertyValue(element,"borderTopWidth"))||0)-(parseFloat(CSS.getPropertyValue(element,"borderBottomWidth"))||0)-(parseFloat(CSS.getPropertyValue(element,"paddingTop"))||0)-(parseFloat(CSS.getPropertyValue(element,"paddingBottom"))||0);revertDisplay();return contentBoxHeight}else if(property==="width"&&CSS.getPropertyValue(element,"boxSizing").toString().toLowerCase()!=="border-box"){var contentBoxWidth=element.offsetWidth-(parseFloat(CSS.getPropertyValue(element,"borderLeftWidth"))||0)-(parseFloat(CSS.getPropertyValue(element,"borderRightWidth"))||0)-(parseFloat(CSS.getPropertyValue(element,"paddingLeft"))||0)-(parseFloat(CSS.getPropertyValue(element,"paddingRight"))||0);revertDisplay();return contentBoxWidth}}
var computedStyle;if(Data(element)===undefined){computedStyle=window.getComputedStyle(element,null)}else if(!Data(element).computedStyle){computedStyle=Data(element).computedStyle=window.getComputedStyle(element,null)}else{computedStyle=Data(element).computedStyle}
if(property==="borderColor"){property="borderTopColor"}
if(IE===9&&property==="filter"){computedValue=computedStyle.getPropertyValue(property)}else{computedValue=computedStyle[property]}
if(computedValue===""||computedValue===null){computedValue=element.style[property]}
revertDisplay()}
if(computedValue==="auto"&&/^(top|right|bottom|left)$/i.test(property)){var position=computePropertyValue(element,"position");if(position==="fixed"||position==="absolute"&&/top|left/i.test(property)){computedValue=$(element).position()[property]+"px"}}
return computedValue}
var propertyValue;if(CSS.Hooks.registered[property]){var hook=property,hookRoot=CSS.Hooks.getRoot(hook);if(rootPropertyValue===undefined){rootPropertyValue=CSS.getPropertyValue(element,CSS.Names.prefixCheck(hookRoot)[0])}
if(CSS.Normalizations.registered[hookRoot]){rootPropertyValue=CSS.Normalizations.registered[hookRoot]("extract",element,rootPropertyValue)}
propertyValue=CSS.Hooks.extractValue(hook,rootPropertyValue)}else if(CSS.Normalizations.registered[property]){var normalizedPropertyName,normalizedPropertyValue;normalizedPropertyName=CSS.Normalizations.registered[property]("name",element);if(normalizedPropertyName!=="transform"){normalizedPropertyValue=computePropertyValue(element,CSS.Names.prefixCheck(normalizedPropertyName)[0]);if(CSS.Values.isCSSNullValue(normalizedPropertyValue)&&CSS.Hooks.templates[property]){normalizedPropertyValue=CSS.Hooks.templates[property][1]}}
propertyValue=CSS.Normalizations.registered[property]("extract",element,normalizedPropertyValue)}
if(!/^[\d-]/.test(propertyValue)){var data=Data(element);if(data&&data.isSVG&&CSS.Names.SVGAttribute(property)){if(/^(height|width)$/i.test(property)){try{propertyValue=element.getBBox()[property]}catch(error){propertyValue=0}}else{propertyValue=element.getAttribute(property)}}else{propertyValue=computePropertyValue(element,CSS.Names.prefixCheck(property)[0])}}
if(CSS.Values.isCSSNullValue(propertyValue)){propertyValue=0}
if(Velocity.debug>=2){console.log("Get "+property+": "+propertyValue)}
return propertyValue},setPropertyValue:function(element,property,propertyValue,rootPropertyValue,scrollData){var propertyName=property;if(property==="scroll"){if(scrollData.container){scrollData.container["scroll"+scrollData.direction]=propertyValue}else{if(scrollData.direction==="Left"){window.scrollTo(propertyValue,scrollData.alternateValue)}else{window.scrollTo(scrollData.alternateValue,propertyValue)}}}else{if(CSS.Normalizations.registered[property]&&CSS.Normalizations.registered[property]("name",element)==="transform"){CSS.Normalizations.registered[property]("inject",element,propertyValue);propertyName="transform";propertyValue=Data(element).transformCache[property]}else{if(CSS.Hooks.registered[property]){var hookName=property,hookRoot=CSS.Hooks.getRoot(property);rootPropertyValue=rootPropertyValue||CSS.getPropertyValue(element,hookRoot);propertyValue=CSS.Hooks.injectValue(hookName,propertyValue,rootPropertyValue);property=hookRoot}
if(CSS.Normalizations.registered[property]){propertyValue=CSS.Normalizations.registered[property]("inject",element,propertyValue);property=CSS.Normalizations.registered[property]("name",element)}
propertyName=CSS.Names.prefixCheck(property)[0];if(IE<=8){try{element.style[propertyName]=propertyValue}catch(error){if(Velocity.debug){console.log("Browser does not support ["+propertyValue+"] for ["+propertyName+"]")}}}else{var data=Data(element);if(data&&data.isSVG&&CSS.Names.SVGAttribute(property)){element.setAttribute(property,propertyValue)}else{element.style[propertyName]=propertyValue}}
if(Velocity.debug>=2){console.log("Set "+property+" ("+propertyName+"): "+propertyValue)}}}
return[propertyName,propertyValue]},flushTransformCache:function(element){var transformString="",data=Data(element);if((IE||Velocity.State.isAndroid&&!Velocity.State.isChrome)&&data&&data.isSVG){var getTransformFloat=function(transformProperty){return parseFloat(CSS.getPropertyValue(element,transformProperty))};var SVGTransforms={translate:[getTransformFloat("translateX"),getTransformFloat("translateY")],skewX:[getTransformFloat("skewX")],skewY:[getTransformFloat("skewY")],scale:getTransformFloat("scale")!==1?[getTransformFloat("scale"),getTransformFloat("scale")]:[getTransformFloat("scaleX"),getTransformFloat("scaleY")],rotate:[getTransformFloat("rotateZ"),0,0]};$.each(Data(element).transformCache,function(transformName){if(/^translate/i.test(transformName)){transformName="translate"}else if(/^scale/i.test(transformName)){transformName="scale"}else if(/^rotate/i.test(transformName)){transformName="rotate"}
if(SVGTransforms[transformName]){transformString+=transformName+"("+SVGTransforms[transformName].join(" ")+")"+" ";delete SVGTransforms[transformName]}})}else{var transformValue,perspective;$.each(Data(element).transformCache,function(transformName){transformValue=Data(element).transformCache[transformName];if(transformName==="transformPerspective"){perspective=transformValue;return!0}
if(IE===9&&transformName==="rotateZ"){transformName="rotate"}
transformString+=transformName+transformValue+" "});if(perspective){transformString="perspective"+perspective+" "+transformString}}
CSS.setPropertyValue(element,"transform",transformString)}};CSS.Hooks.register();CSS.Normalizations.register();Velocity.hook=function(elements,arg2,arg3){var value;elements=sanitizeElements(elements);$.each(elements,function(i,element){if(Data(element)===undefined){Velocity.init(element)}
if(arg3===undefined){if(value===undefined){value=CSS.getPropertyValue(element,arg2)}}else{var adjustedSet=CSS.setPropertyValue(element,arg2,arg3);if(adjustedSet[0]==="transform"){Velocity.CSS.flushTransformCache(element)}
value=adjustedSet}});return value};var animate=function(){var opts;function getChain(){if(isUtility){return promiseData.promise||null}else{return elementsWrapped}}
var syntacticSugar=arguments[0]&&(arguments[0].p||$.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||Type.isString(arguments[0].properties)),isUtility,elementsWrapped,argumentIndex;var elements,propertiesMap,options;if(Type.isWrapped(this)){isUtility=!1;argumentIndex=0;elements=this;elementsWrapped=this}else{isUtility=!0;argumentIndex=1;elements=syntacticSugar?arguments[0].elements||arguments[0].e:arguments[0]}
var promiseData={promise:null,resolver:null,rejecter:null};if(isUtility&&Velocity.Promise){promiseData.promise=new Velocity.Promise(function(resolve,reject){promiseData.resolver=resolve;promiseData.rejecter=reject})}
if(syntacticSugar){propertiesMap=arguments[0].properties||arguments[0].p;options=arguments[0].options||arguments[0].o}else{propertiesMap=arguments[argumentIndex];options=arguments[argumentIndex+1]}
elements=sanitizeElements(elements);if(!elements){if(promiseData.promise){if(!propertiesMap||!options||options.promiseRejectEmpty!==!1){promiseData.rejecter()}else{promiseData.resolver()}}
return}
var elementsLength=elements.length,elementsIndex=0;if(!/^(stop|finish|finishAll|pause|resume)$/i.test(propertiesMap)&&!$.isPlainObject(options)){var startingArgumentPosition=argumentIndex+1;options={};for(var i=startingArgumentPosition;i<arguments.length;i++){if(!Type.isArray(arguments[i])&&(/^(fast|normal|slow)$/i.test(arguments[i])||/^\d/.test(arguments[i]))){options.duration=arguments[i]}else if(Type.isString(arguments[i])||Type.isArray(arguments[i])){options.easing=arguments[i]}else if(Type.isFunction(arguments[i])){options.complete=arguments[i]}}}
var action;switch(propertiesMap){case "scroll":action="scroll";break;case "reverse":action="reverse";break;case "pause":var currentTime=new Date().getTime();$.each(elements,function(i,element){pauseDelayOnElement(element,currentTime)});$.each(Velocity.State.calls,function(i,activeCall){var found=!1;if(activeCall){$.each(activeCall[1],function(k,activeElement){var queueName=options===undefined?"":options;if(queueName!==!0&&activeCall[2].queue!==queueName&&!(options===undefined&&activeCall[2].queue===!1)){return!0}
$.each(elements,function(l,element){if(element===activeElement){activeCall[5]={resume:!1};found=!0;return!1}});if(found){return!1}})}});return getChain();case "resume":$.each(elements,function(i,element){resumeDelayOnElement(element,currentTime)});$.each(Velocity.State.calls,function(i,activeCall){var found=!1;if(activeCall){$.each(activeCall[1],function(k,activeElement){var queueName=options===undefined?"":options;if(queueName!==!0&&activeCall[2].queue!==queueName&&!(options===undefined&&activeCall[2].queue===!1)){return!0}
if(!activeCall[5]){return!0}
$.each(elements,function(l,element){if(element===activeElement){activeCall[5].resume=!0;found=!0;return!1}});if(found){return!1}})}});return getChain();case "finish":case "finishAll":case "stop":$.each(elements,function(i,element){if(Data(element)&&Data(element).delayTimer){clearTimeout(Data(element).delayTimer.setTimeout);if(Data(element).delayTimer.next){Data(element).delayTimer.next()}
delete Data(element).delayTimer}
if(propertiesMap==="finishAll"&&(options===!0||Type.isString(options))){$.each($.queue(element,Type.isString(options)?options:""),function(_,item){if(Type.isFunction(item)){item()}});$.queue(element,Type.isString(options)?options:"",[])}});var callsToStop=[];$.each(Velocity.State.calls,function(i,activeCall){if(activeCall){$.each(activeCall[1],function(k,activeElement){var queueName=options===undefined?"":options;if(queueName!==!0&&activeCall[2].queue!==queueName&&!(options===undefined&&activeCall[2].queue===!1)){return!0}
$.each(elements,function(l,element){if(element===activeElement){if(options===!0||Type.isString(options)){$.each($.queue(element,Type.isString(options)?options:""),function(_,item){if(Type.isFunction(item)){item(null,!0)}});$.queue(element,Type.isString(options)?options:"",[])}
if(propertiesMap==="stop"){var data=Data(element);if(data&&data.tweensContainer&&queueName!==!1){$.each(data.tweensContainer,function(m,activeTween){activeTween.endValue=activeTween.currentValue})}
callsToStop.push(i)}else if(propertiesMap==="finish"||propertiesMap==="finishAll"){activeCall[2].duration=1}}})})}});if(propertiesMap==="stop"){$.each(callsToStop,function(i,j){completeCall(j,!0)});if(promiseData.promise){promiseData.resolver(elements)}}
return getChain();default:if($.isPlainObject(propertiesMap)&&!Type.isEmptyObject(propertiesMap)){action="start"}else if(Type.isString(propertiesMap)&&Velocity.Redirects[propertiesMap]){opts=$.extend({},options);var durationOriginal=opts.duration,delayOriginal=opts.delay||0;if(opts.backwards===!0){elements=$.extend(!0,[],elements).reverse()}
$.each(elements,function(elementIndex,element){if(parseFloat(opts.stagger)){opts.delay=delayOriginal+parseFloat(opts.stagger)*elementIndex}else if(Type.isFunction(opts.stagger)){opts.delay=delayOriginal+opts.stagger.call(element,elementIndex,elementsLength)}
if(opts.drag){opts.duration=parseFloat(durationOriginal)||(/^(callout|transition)/.test(propertiesMap)?1000:DURATION_DEFAULT);opts.duration=Math.max(opts.duration*(opts.backwards?1-elementIndex/elementsLength:(elementIndex+1)/elementsLength),opts.duration*0.75,200)}
Velocity.Redirects[propertiesMap].call(element,element,opts||{},elementIndex,elementsLength,elements,promiseData.promise?promiseData:undefined)});return getChain()}else{var abortError="Velocity: First argument ("+propertiesMap+") was not a property map, a known action, or a registered redirect. Aborting.";if(promiseData.promise){promiseData.rejecter(new Error(abortError))}else if(window.console){console.log(abortError)}
return getChain()}}
var callUnitConversionData={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null};var call=[];function processElement(element,elementArrayIndex){var
opts=$.extend({},Velocity.defaults,options),tweensContainer={},elementUnitConversionData;if(Data(element)===undefined){Velocity.init(element)}
if(parseFloat(opts.delay)&&opts.queue!==!1){$.queue(element,opts.queue,function(next,clearQueue){if(clearQueue===!0){return!0}
Velocity.velocityQueueEntryFlag=!0;var callIndex=Velocity.State.delayedElements.count++;Velocity.State.delayedElements[callIndex]=element;var delayComplete=function(index){return function(){Velocity.State.delayedElements[index]=!1;next()}}(callIndex);Data(element).delayBegin=new Date().getTime();Data(element).delay=parseFloat(opts.delay);Data(element).delayTimer={setTimeout:setTimeout(next,parseFloat(opts.delay)),next:delayComplete}})}
switch(opts.duration.toString().toLowerCase()){case "fast":opts.duration=200;break;case "normal":opts.duration=DURATION_DEFAULT;break;case "slow":opts.duration=600;break;default:opts.duration=parseFloat(opts.duration)||1}
if(Velocity.mock!==!1){if(Velocity.mock===!0){opts.duration=opts.delay=1}else{opts.duration*=parseFloat(Velocity.mock)||1;opts.delay*=parseFloat(Velocity.mock)||1}}
opts.easing=getEasing(opts.easing,opts.duration);if(opts.begin&&!Type.isFunction(opts.begin)){opts.begin=null}
if(opts.progress&&!Type.isFunction(opts.progress)){opts.progress=null}
if(opts.complete&&!Type.isFunction(opts.complete)){opts.complete=null}
if(opts.display!==undefined&&opts.display!==null){opts.display=opts.display.toString().toLowerCase();if(opts.display==="auto"){opts.display=Velocity.CSS.Values.getDisplayType(element)}}
if(opts.visibility!==undefined&&opts.visibility!==null){opts.visibility=opts.visibility.toString().toLowerCase()}
opts.mobileHA=opts.mobileHA&&Velocity.State.isMobile&&!Velocity.State.isGingerbread;function buildQueue(next){var data,lastTweensContainer;if(opts.begin&&elementsIndex===0){try{opts.begin.call(elements,elements)}catch(error){setTimeout(function(){throw error},1)}}
if(action==="scroll"){var scrollDirection=/^x$/i.test(opts.axis)?"Left":"Top",scrollOffset=parseFloat(opts.offset)||0,scrollPositionCurrent,scrollPositionCurrentAlternate,scrollPositionEnd;if(opts.container){if(Type.isWrapped(opts.container)||Type.isNode(opts.container)){opts.container=opts.container[0]||opts.container;scrollPositionCurrent=opts.container["scroll"+scrollDirection];scrollPositionEnd=scrollPositionCurrent+$(element).position()[scrollDirection.toLowerCase()]+scrollOffset}else{opts.container=null}}else{scrollPositionCurrent=Velocity.State.scrollAnchor[Velocity.State["scrollProperty"+scrollDirection]];scrollPositionCurrentAlternate=Velocity.State.scrollAnchor[Velocity.State["scrollProperty"+(scrollDirection==="Left"?"Top":"Left")]];scrollPositionEnd=$(element).offset()[scrollDirection.toLowerCase()]+scrollOffset}
tweensContainer={scroll:{rootPropertyValue:!1,startValue:scrollPositionCurrent,currentValue:scrollPositionCurrent,endValue:scrollPositionEnd,unitType:"",easing:opts.easing,scrollData:{container:opts.container,direction:scrollDirection,alternateValue:scrollPositionCurrentAlternate}},element:element};if(Velocity.debug){console.log("tweensContainer (scroll): ",tweensContainer.scroll,element)}}else if(action==="reverse"){data=Data(element);if(!data){return}
if(!data.tweensContainer){$.dequeue(element,opts.queue);return}else{if(data.opts.display==="none"){data.opts.display="auto"}
if(data.opts.visibility==="hidden"){data.opts.visibility="visible"}
data.opts.loop=!1;data.opts.begin=null;data.opts.complete=null;if(!options.easing){delete opts.easing}
if(!options.duration){delete opts.duration}
opts=$.extend({},data.opts,opts);lastTweensContainer=$.extend(!0,{},data?data.tweensContainer:null);for(var lastTween in lastTweensContainer){if(lastTweensContainer.hasOwnProperty(lastTween)&&lastTween!=="element"){var lastStartValue=lastTweensContainer[lastTween].startValue;lastTweensContainer[lastTween].startValue=lastTweensContainer[lastTween].currentValue=lastTweensContainer[lastTween].endValue;lastTweensContainer[lastTween].endValue=lastStartValue;if(!Type.isEmptyObject(options)){lastTweensContainer[lastTween].easing=opts.easing}
if(Velocity.debug){console.log("reverse tweensContainer ("+lastTween+"): "+JSON.stringify(lastTweensContainer[lastTween]),element)}}}
tweensContainer=lastTweensContainer}}else if(action==="start"){data=Data(element);if(data&&data.tweensContainer&&data.isAnimating===!0){lastTweensContainer=data.tweensContainer}
var parsePropertyValue=function(valueData,skipResolvingEasing){var endValue,easing,startValue;if(Type.isFunction(valueData)){valueData=valueData.call(element,elementArrayIndex,elementsLength)}
if(Type.isArray(valueData)){endValue=valueData[0];if(!Type.isArray(valueData[1])&&/^[\d-]/.test(valueData[1])||Type.isFunction(valueData[1])||CSS.RegEx.isHex.test(valueData[1])){startValue=valueData[1]}else if(Type.isString(valueData[1])&&!CSS.RegEx.isHex.test(valueData[1])&&Velocity.Easings[valueData[1]]||Type.isArray(valueData[1])){easing=skipResolvingEasing?valueData[1]:getEasing(valueData[1],opts.duration);startValue=valueData[2]}else{startValue=valueData[1]||valueData[2]}}else{endValue=valueData}
if(!skipResolvingEasing){easing=easing||opts.easing}
if(Type.isFunction(endValue)){endValue=endValue.call(element,elementArrayIndex,elementsLength)}
if(Type.isFunction(startValue)){startValue=startValue.call(element,elementArrayIndex,elementsLength)}
return[endValue||0,easing,startValue]};var fixPropertyValue=function(property,valueData){var rootProperty=CSS.Hooks.getRoot(property),rootPropertyValue=!1,endValue=valueData[0],easing=valueData[1],startValue=valueData[2],pattern;if((!data||!data.isSVG)&&rootProperty!=="tween"&&CSS.Names.prefixCheck(rootProperty)[1]===!1&&CSS.Normalizations.registered[rootProperty]===undefined){if(Velocity.debug){console.log("Skipping ["+rootProperty+"] due to a lack of browser support.")}
return}
if((opts.display!==undefined&&opts.display!==null&&opts.display!=="none"||opts.visibility!==undefined&&opts.visibility!=="hidden")&&/opacity|filter/.test(property)&&!startValue&&endValue!==0){startValue=0}
if(opts._cacheValues&&lastTweensContainer&&lastTweensContainer[property]){if(startValue===undefined){startValue=lastTweensContainer[property].endValue+lastTweensContainer[property].unitType}
rootPropertyValue=data.rootPropertyValueCache[rootProperty]}else{if(CSS.Hooks.registered[property]){if(startValue===undefined){rootPropertyValue=CSS.getPropertyValue(element,rootProperty);startValue=CSS.getPropertyValue(element,property,rootPropertyValue)}else{rootPropertyValue=CSS.Hooks.templates[rootProperty][1]}}else if(startValue===undefined){startValue=CSS.getPropertyValue(element,property)}}
var separatedValue,endValueUnitType,startValueUnitType,operator=!1;var separateValue=function(property,value){var unitType,numericValue;numericValue=(value||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(match){unitType=match;return""});if(!unitType){unitType=CSS.Values.getUnitType(property)}
return[numericValue,unitType]};if(startValue!==endValue&&Type.isString(startValue)&&Type.isString(endValue)){pattern="";var iStart=0,iEnd=0,aStart=[],aEnd=[],inCalc=0,inRGB=0,inRGBA=0;startValue=CSS.Hooks.fixColors(startValue);endValue=CSS.Hooks.fixColors(endValue);while(iStart<startValue.length&&iEnd<endValue.length){var cStart=startValue[iStart],cEnd=endValue[iEnd];if(/[\d\.-]/.test(cStart)&&/[\d\.-]/.test(cEnd)){var tStart=cStart,tEnd=cEnd,dotStart=".",dotEnd=".";while(++iStart<startValue.length){cStart=startValue[iStart];if(cStart===dotStart){dotStart=".."}else if(!/\d/.test(cStart)){break}
tStart+=cStart}
while(++iEnd<endValue.length){cEnd=endValue[iEnd];if(cEnd===dotEnd){dotEnd=".."}else if(!/\d/.test(cEnd)){break}
tEnd+=cEnd}
var uStart=CSS.Hooks.getUnit(startValue,iStart),uEnd=CSS.Hooks.getUnit(endValue,iEnd);iStart+=uStart.length;iEnd+=uEnd.length;if(uStart===uEnd){if(tStart===tEnd){pattern+=tStart+uStart}else{pattern+="{"+aStart.length+(inRGB?"!":"")+"}"+uStart;aStart.push(parseFloat(tStart));aEnd.push(parseFloat(tEnd))}}else{var nStart=parseFloat(tStart),nEnd=parseFloat(tEnd);pattern+=(inCalc<5?"calc":"")+"("+(nStart?"{"+aStart.length+(inRGB?"!":"")+"}":"0")+uStart+" + "+(nEnd?"{"+(aStart.length+(nStart?1:0))+(inRGB?"!":"")+"}":"0")+uEnd+")";if(nStart){aStart.push(nStart);aEnd.push(0)}
if(nEnd){aStart.push(0);aEnd.push(nEnd)}}}else if(cStart===cEnd){pattern+=cStart;iStart++;iEnd++;if(inCalc===0&&cStart==="c"||inCalc===1&&cStart==="a"||inCalc===2&&cStart==="l"||inCalc===3&&cStart==="c"||inCalc>=4&&cStart==="("){inCalc++}else if(inCalc&&inCalc<5||inCalc>=4&&cStart===")"&&--inCalc<5){inCalc=0}
if(inRGB===0&&cStart==="r"||inRGB===1&&cStart==="g"||inRGB===2&&cStart==="b"||inRGB===3&&cStart==="a"||inRGB>=3&&cStart==="("){if(inRGB===3&&cStart==="a"){inRGBA=1}
inRGB++}else if(inRGBA&&cStart===","){if(++inRGBA>3){inRGB=inRGBA=0}}else if(inRGBA&&inRGB<(inRGBA?5:4)||inRGB>=(inRGBA?4:3)&&cStart===")"&&--inRGB<(inRGBA?5:4)){inRGB=inRGBA=0}}else{inCalc=0;break}}
if(iStart!==startValue.length||iEnd!==endValue.length){if(Velocity.debug){console.error("Trying to pattern match mis-matched strings [\""+endValue+"\", \""+startValue+"\"]")}
pattern=undefined}
if(pattern){if(aStart.length){if(Velocity.debug){console.log("Pattern found \""+pattern+"\" -> ",aStart,aEnd,"["+startValue+","+endValue+"]")}
startValue=aStart;endValue=aEnd;endValueUnitType=startValueUnitType=""}else{pattern=undefined}}}
if(!pattern){separatedValue=separateValue(property,startValue);startValue=separatedValue[0];startValueUnitType=separatedValue[1];separatedValue=separateValue(property,endValue);endValue=separatedValue[0].replace(/^([+-\/*])=/,function(match,subMatch){operator=subMatch;return""});endValueUnitType=separatedValue[1];startValue=parseFloat(startValue)||0;endValue=parseFloat(endValue)||0;if(endValueUnitType==="%"){if(/^(fontSize|lineHeight)$/.test(property)){endValue=endValue/100;endValueUnitType="em"}else if(/^scale/.test(property)){endValue=endValue/100;endValueUnitType=""}else if(/(Red|Green|Blue)$/i.test(property)){endValue=endValue/100*255;endValueUnitType=""}}}
var calculateUnitRatios=function(){var sameRatioIndicators={myParent:element.parentNode||document.body,position:CSS.getPropertyValue(element,"position"),fontSize:CSS.getPropertyValue(element,"fontSize")},samePercentRatio=sameRatioIndicators.position===callUnitConversionData.lastPosition&&sameRatioIndicators.myParent===callUnitConversionData.lastParent,sameEmRatio=sameRatioIndicators.fontSize===callUnitConversionData.lastFontSize;callUnitConversionData.lastParent=sameRatioIndicators.myParent;callUnitConversionData.lastPosition=sameRatioIndicators.position;callUnitConversionData.lastFontSize=sameRatioIndicators.fontSize;var measurement=100,unitRatios={};if(!sameEmRatio||!samePercentRatio){var dummy=data&&data.isSVG?document.createElementNS("http://www.w3.org/2000/svg","rect"):document.createElement("div");Velocity.init(dummy);sameRatioIndicators.myParent.appendChild(dummy);$.each(["overflow","overflowX","overflowY"],function(i,property){Velocity.CSS.setPropertyValue(dummy,property,"hidden")});Velocity.CSS.setPropertyValue(dummy,"position",sameRatioIndicators.position);Velocity.CSS.setPropertyValue(dummy,"fontSize",sameRatioIndicators.fontSize);Velocity.CSS.setPropertyValue(dummy,"boxSizing","content-box");$.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(i,property){Velocity.CSS.setPropertyValue(dummy,property,measurement+"%")});Velocity.CSS.setPropertyValue(dummy,"paddingLeft",measurement+"em");unitRatios.percentToPxWidth=callUnitConversionData.lastPercentToPxWidth=(parseFloat(CSS.getPropertyValue(dummy,"width",null,!0))||1)/measurement;unitRatios.percentToPxHeight=callUnitConversionData.lastPercentToPxHeight=(parseFloat(CSS.getPropertyValue(dummy,"height",null,!0))||1)/measurement;unitRatios.emToPx=callUnitConversionData.lastEmToPx=(parseFloat(CSS.getPropertyValue(dummy,"paddingLeft"))||1)/measurement;sameRatioIndicators.myParent.removeChild(dummy)}else{unitRatios.emToPx=callUnitConversionData.lastEmToPx;unitRatios.percentToPxWidth=callUnitConversionData.lastPercentToPxWidth;unitRatios.percentToPxHeight=callUnitConversionData.lastPercentToPxHeight}
if(callUnitConversionData.remToPx===null){callUnitConversionData.remToPx=parseFloat(CSS.getPropertyValue(document.body,"fontSize"))||16}
if(callUnitConversionData.vwToPx===null){callUnitConversionData.vwToPx=parseFloat(window.innerWidth)/100;callUnitConversionData.vhToPx=parseFloat(window.innerHeight)/100}
unitRatios.remToPx=callUnitConversionData.remToPx;unitRatios.vwToPx=callUnitConversionData.vwToPx;unitRatios.vhToPx=callUnitConversionData.vhToPx;if(Velocity.debug>=1){console.log("Unit ratios: "+JSON.stringify(unitRatios),element)}
return unitRatios};if(/[\/*]/.test(operator)){endValueUnitType=startValueUnitType}else if(startValueUnitType!==endValueUnitType&&startValue!==0){if(endValue===0){endValueUnitType=startValueUnitType}else{elementUnitConversionData=elementUnitConversionData||calculateUnitRatios();var axis=/margin|padding|left|right|width|text|word|letter/i.test(property)||/X$/.test(property)||property==="x"?"x":"y";switch(startValueUnitType){case "%":startValue*=axis==="x"?elementUnitConversionData.percentToPxWidth:elementUnitConversionData.percentToPxHeight;break;case "px":break;default:startValue*=elementUnitConversionData[startValueUnitType+"ToPx"]}
switch(endValueUnitType){case "%":startValue*=1/(axis==="x"?elementUnitConversionData.percentToPxWidth:elementUnitConversionData.percentToPxHeight);break;case "px":break;default:startValue*=1/elementUnitConversionData[endValueUnitType+"ToPx"]}}}
switch(operator){case "+":endValue=startValue+endValue;break;case "-":endValue=startValue-endValue;break;case "*":endValue=startValue*endValue;break;case "/":endValue=startValue/endValue;break}
tweensContainer[property]={rootPropertyValue:rootPropertyValue,startValue:startValue,currentValue:startValue,endValue:endValue,unitType:endValueUnitType,easing:easing};if(pattern){tweensContainer[property].pattern=pattern}
if(Velocity.debug){console.log("tweensContainer ("+property+"): "+JSON.stringify(tweensContainer[property]),element)}};for(var property in propertiesMap){if(!propertiesMap.hasOwnProperty(property)){continue}
var propertyName=CSS.Names.camelCase(property),valueData=parsePropertyValue(propertiesMap[property]);if(_inArray(CSS.Lists.colors,propertyName)){var endValue=valueData[0],easing=valueData[1],startValue=valueData[2];if(CSS.RegEx.isHex.test(endValue)){var colorComponents=["Red","Green","Blue"],endValueRGB=CSS.Values.hexToRgb(endValue),startValueRGB=startValue?CSS.Values.hexToRgb(startValue):undefined;for(var i=0;i<colorComponents.length;i++){var dataArray=[endValueRGB[i]];if(easing){dataArray.push(easing)}
if(startValueRGB!==undefined){dataArray.push(startValueRGB[i])}
fixPropertyValue(propertyName+colorComponents[i],dataArray)}
continue}}
fixPropertyValue(propertyName,valueData)}
tweensContainer.element=element}
if(tweensContainer.element){CSS.Values.addClass(element,"velocity-animating");call.push(tweensContainer);data=Data(element);if(data){if(opts.queue===""){data.tweensContainer=tweensContainer;data.opts=opts}
data.isAnimating=!0}
if(elementsIndex===elementsLength-1){Velocity.State.calls.push([call,elements,opts,null,promiseData.resolver,null,0]);if(Velocity.State.isTicking===!1){Velocity.State.isTicking=!0;tick()}}else{elementsIndex++}}}
if(opts.queue===!1){if(opts.delay){var callIndex=Velocity.State.delayedElements.count++;Velocity.State.delayedElements[callIndex]=element;var delayComplete=function(index){return function(){Velocity.State.delayedElements[index]=!1;buildQueue()}}(callIndex);Data(element).delayBegin=new Date().getTime();Data(element).delay=parseFloat(opts.delay);Data(element).delayTimer={setTimeout:setTimeout(buildQueue,parseFloat(opts.delay)),next:delayComplete}}else{buildQueue()}}else{$.queue(element,opts.queue,function(next,clearQueue){if(clearQueue===!0){if(promiseData.promise){promiseData.resolver(elements)}
return!0}
Velocity.velocityQueueEntryFlag=!0;buildQueue(next)})}
if((opts.queue===""||opts.queue==="fx")&&$.queue(element)[0]!=="inprogress"){$.dequeue(element)}}
$.each(elements,function(i,element){if(Type.isNode(element)){processElement(element,i)}});opts=$.extend({},Velocity.defaults,options);opts.loop=parseInt(opts.loop,10);var reverseCallsCount=opts.loop*2-1;if(opts.loop){for(var x=0;x<reverseCallsCount;x++){var reverseOptions={delay:opts.delay,progress:opts.progress};if(x===reverseCallsCount-1){reverseOptions.display=opts.display;reverseOptions.visibility=opts.visibility;reverseOptions.complete=opts.complete}
animate(elements,"reverse",reverseOptions)}}
return getChain()};Velocity=$.extend(animate,Velocity);Velocity.animate=animate;var ticker=window.requestAnimationFrame||rAFShim;if(!Velocity.State.isMobile&&document.hidden!==undefined){var updateTicker=function(){if(document.hidden){ticker=function(callback){return setTimeout(function(){callback(!0)},16)};tick()}else{ticker=window.requestAnimationFrame||rAFShim}};updateTicker();document.addEventListener("visibilitychange",updateTicker)}
function tick(timestamp){if(timestamp){var timeCurrent=Velocity.timestamp&&timestamp!==!0?timestamp:performance.now();var callsLength=Velocity.State.calls.length;if(callsLength>10000){Velocity.State.calls=compactSparseArray(Velocity.State.calls);callsLength=Velocity.State.calls.length}
for(var i=0;i<callsLength;i++){if(!Velocity.State.calls[i]){continue}
var callContainer=Velocity.State.calls[i],call=callContainer[0],opts=callContainer[2],timeStart=callContainer[3],firstTick=!timeStart,tweenDummyValue=null,pauseObject=callContainer[5],millisecondsEllapsed=callContainer[6];if(!timeStart){timeStart=Velocity.State.calls[i][3]=timeCurrent-16}
if(pauseObject){if(pauseObject.resume===!0){timeStart=callContainer[3]=Math.round(timeCurrent-millisecondsEllapsed-16);callContainer[5]=null}else{continue}}
millisecondsEllapsed=callContainer[6]=timeCurrent-timeStart;var percentComplete=Math.min(millisecondsEllapsed/opts.duration,1);for(var j=0,callLength=call.length;j<callLength;j++){var tweensContainer=call[j],element=tweensContainer.element;if(!Data(element)){continue}
var transformPropertyExists=!1;if(opts.display!==undefined&&opts.display!==null&&opts.display!=="none"){if(opts.display==="flex"){var flexValues=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];$.each(flexValues,function(i,flexValue){CSS.setPropertyValue(element,"display",flexValue)})}
CSS.setPropertyValue(element,"display",opts.display)}
if(opts.visibility!==undefined&&opts.visibility!=="hidden"){CSS.setPropertyValue(element,"visibility",opts.visibility)}
for(var property in tweensContainer){if(tweensContainer.hasOwnProperty(property)&&property!=="element"){var tween=tweensContainer[property],currentValue,easing=Type.isString(tween.easing)?Velocity.Easings[tween.easing]:tween.easing;if(Type.isString(tween.pattern)){var patternReplace=percentComplete===1?function($0,index,round){var result=tween.endValue[index];return round?Math.round(result):result}:function($0,index,round){var startValue=tween.startValue[index],tweenDelta=tween.endValue[index]-startValue,result=startValue+tweenDelta*easing(percentComplete,opts,tweenDelta);return round?Math.round(result):result};currentValue=tween.pattern.replace(/{(\d+)(!)?}/g,patternReplace)}else if(percentComplete===1){currentValue=tween.endValue}else{var tweenDelta=tween.endValue-tween.startValue;currentValue=tween.startValue+tweenDelta*easing(percentComplete,opts,tweenDelta)}
if(!firstTick&&currentValue===tween.currentValue){continue}
tween.currentValue=currentValue;if(property==="tween"){tweenDummyValue=currentValue}else{var hookRoot;if(CSS.Hooks.registered[property]){hookRoot=CSS.Hooks.getRoot(property);var rootPropertyValueCache=Data(element).rootPropertyValueCache[hookRoot];if(rootPropertyValueCache){tween.rootPropertyValue=rootPropertyValueCache}}
var adjustedSetData=CSS.setPropertyValue(element,property,tween.currentValue+(IE<9&&parseFloat(currentValue)===0?"":tween.unitType),tween.rootPropertyValue,tween.scrollData);if(CSS.Hooks.registered[property]){if(CSS.Normalizations.registered[hookRoot]){Data(element).rootPropertyValueCache[hookRoot]=CSS.Normalizations.registered[hookRoot]("extract",null,adjustedSetData[1])}else{Data(element).rootPropertyValueCache[hookRoot]=adjustedSetData[1]}}
if(adjustedSetData[0]==="transform"){transformPropertyExists=!0}}}}
if(opts.mobileHA){if(Data(element).transformCache.translate3d===undefined){Data(element).transformCache.translate3d="(0px, 0px, 0px)";transformPropertyExists=!0}}
if(transformPropertyExists){CSS.flushTransformCache(element)}}
if(opts.display!==undefined&&opts.display!=="none"){Velocity.State.calls[i][2].display=!1}
if(opts.visibility!==undefined&&opts.visibility!=="hidden"){Velocity.State.calls[i][2].visibility=!1}
if(opts.progress){opts.progress.call(callContainer[1],callContainer[1],percentComplete,Math.max(0,timeStart+opts.duration-timeCurrent),timeStart,tweenDummyValue)}
if(percentComplete===1){completeCall(i)}}}
if(Velocity.State.isTicking){ticker(tick)}}
function completeCall(callIndex,isStopped){if(!Velocity.State.calls[callIndex]){return!1}
var call=Velocity.State.calls[callIndex][0],elements=Velocity.State.calls[callIndex][1],opts=Velocity.State.calls[callIndex][2],resolver=Velocity.State.calls[callIndex][4];var remainingCallsExist=!1;for(var i=0,callLength=call.length;i<callLength;i++){var element=call[i].element;if(!isStopped&&!opts.loop){if(opts.display==="none"){CSS.setPropertyValue(element,"display",opts.display)}
if(opts.visibility==="hidden"){CSS.setPropertyValue(element,"visibility",opts.visibility)}}
var data=Data(element);if(opts.loop!==!0&&($.queue(element)[1]===undefined||!/\.velocityQueueEntryFlag/i.test($.queue(element)[1]))){if(data){data.isAnimating=!1;data.rootPropertyValueCache={};var transformHAPropertyExists=!1;$.each(CSS.Lists.transforms3D,function(i,transformName){var defaultValue=/^scale/.test(transformName)?1:0,currentValue=data.transformCache[transformName];if(data.transformCache[transformName]!==undefined&&new RegExp("^\\("+defaultValue+"[^.]").test(currentValue)){transformHAPropertyExists=!0;delete data.transformCache[transformName]}});if(opts.mobileHA){transformHAPropertyExists=!0;delete data.transformCache.translate3d}
if(transformHAPropertyExists){CSS.flushTransformCache(element)}
CSS.Values.removeClass(element,"velocity-animating")}}
if(!isStopped&&opts.complete&&!opts.loop&&i===callLength-1){try{opts.complete.call(elements,elements)}catch(error){setTimeout(function(){throw error},1)}}
if(resolver&&opts.loop!==!0){resolver(elements)}
if(data&&opts.loop===!0&&!isStopped){$.each(data.tweensContainer,function(propertyName,tweenContainer){if(/^rotate/.test(propertyName)&&(parseFloat(tweenContainer.startValue)-parseFloat(tweenContainer.endValue))%360===0){var oldStartValue=tweenContainer.startValue;tweenContainer.startValue=tweenContainer.endValue;tweenContainer.endValue=oldStartValue}
if(/^backgroundPosition/.test(propertyName)&&parseFloat(tweenContainer.endValue)===100&&tweenContainer.unitType==="%"){tweenContainer.endValue=0;tweenContainer.startValue=100}});Velocity(element,"reverse",{loop:!0,delay:opts.delay})}
if(opts.queue!==!1){$.dequeue(element,opts.queue)}}
Velocity.State.calls[callIndex]=!1;for(var j=0,callsLength=Velocity.State.calls.length;j<callsLength;j++){if(Velocity.State.calls[j]!==!1){remainingCallsExist=!0;break}}
if(remainingCallsExist===!1){Velocity.State.isTicking=!1;delete Velocity.State.calls;Velocity.State.calls=[]}}
global.Velocity=Velocity;if(global!==window){global.fn.velocity=animate;global.fn.velocity.defaults=Velocity.defaults}
$.each(["Down","Up"],function(i,direction){Velocity.Redirects["slide"+direction]=function(element,options,elementsIndex,elementsSize,elements,promiseData){var opts=$.extend({},options),begin=opts.begin,complete=opts.complete,inlineValues={},computedValues={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""};if(opts.display===undefined){opts.display=direction==="Down"?Velocity.CSS.Values.getDisplayType(element)==="inline"?"inline-block":"block":"none"}
opts.begin=function(){if(elementsIndex===0&&begin){begin.call(elements,elements)}
for(var property in computedValues){if(!computedValues.hasOwnProperty(property)){continue}
inlineValues[property]=element.style[property];var propertyValue=CSS.getPropertyValue(element,property);computedValues[property]=direction==="Down"?[propertyValue,0]:[0,propertyValue]}
inlineValues.overflow=element.style.overflow;element.style.overflow="hidden"};opts.complete=function(){for(var property in inlineValues){if(inlineValues.hasOwnProperty(property)){element.style[property]=inlineValues[property]}}
if(elementsIndex===elementsSize-1){if(complete){complete.call(elements,elements)}
if(promiseData){promiseData.resolver(elements)}}};Velocity(element,computedValues,opts)}});$.each(["In","Out"],function(i,direction){Velocity.Redirects["fade"+direction]=function(element,options,elementsIndex,elementsSize,elements,promiseData){var opts=$.extend({},options),complete=opts.complete,propertiesMap={opacity:direction==="In"?1:0};if(elementsIndex!==0){opts.begin=null}
if(elementsIndex!==elementsSize-1){opts.complete=null}else{opts.complete=function(){if(complete){complete.call(elements,elements)}
if(promiseData){promiseData.resolver(elements)}}}
if(opts.display===undefined){opts.display=direction==="In"?"auto":"none"}
Velocity(this,propertiesMap,opts)}});return Velocity}(window.jQuery||window.Zepto||window,window,window?window.document:undefined)})}),"./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
(function(module,exports){var g;g=function(){return this}();try{g=g||Function("return this")()||(1,eval)("this")}catch(e){if(typeof window==="object")g=window}
module.exports=g}),0:
/*!********************************************!*\
  !*** multi ./js/theme.js ./css/theme.scss ***!
  \********************************************/
/*! no static exports found */
(function(module,exports,__webpack_require__){__webpack_require__(/*! ./js/theme.js */"./js/theme.js");module.exports=__webpack_require__(/*! ./css/theme.scss */"./css/theme.scss")}),"jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
(function(module,exports){module.exports=jQuery}),"prestashop":
/*!*****************************!*\
  !*** external "prestashop" ***!
  \*****************************/
/*! no static exports found */
(function(module,exports){module.exports=prestashop})});/*! jQuery UI - v1.10.3 - 2013-05-03
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.effect.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
if(product.reference&&product.reference!=''){ref=$('<span>').addClass('pref').html(' (Ref: '+product.reference+')')}
return $('<li>').addClass('search-menu-item').append($('<a>').addClass('search-item').append(cover).append($('<span>').addClass('info').append($('<span>').html(product.name).addClass('product')).append($('<span>').html(product.price).addClass('pprice')).append(ref))).appendTo(ul)}});$searchBox.psBlockSearchAutocomplete({source:function(query,response){$.post(searchURL,{s:query.term,resultsPerPage:10},null,'json').then(function(resp){response(resp.products)}).fail(response)},select:function(event,ui){var url=ui.item.url;window.location.href=url},})});$(window).load(function(){prestashop.blockcart=prestashop.blockcart||{};var showModal=prestashop.blockcart.showModal||function(modal){var $body=$('body');$body.append(modal);$body.one('click','#blockcart-modal',function(event){if(event.target.id==='blockcart-modal'){$(event.target).remove()}})};var psAjaxCart=!1;if(typeof(varPSAjaxCart)!=='undefined'&&varPSAjaxCart){psAjaxCart=varPSAjaxCart}
prestashop.on('updateCart',function(event){var refreshURL=$('.blockcart').data('refresh-url');var requestData={};if(event&&event.reason&&event.reason.idProduct){requestData={id_product_attribute:event.reason.idProductAttribute,id_product:event.reason.idProduct,action:event.reason.linkAction}}
$.post(refreshURL,requestData).then(function(resp){$('.blockcart .cart-header').replaceWith($(resp.preview).find('.blockcart .cart-header'));$('.blockcart .cart-dropdown-wrapper').replaceWith($(resp.preview).find('.blockcart .cart-dropdown-wrapper'));$('[data-sticky-cart]').html($('[data-sticky-cart-source]').html());if(typeof(varSidebarCart)!=='undefined'&&varSidebarCart&&psAjaxCart){$('#js-cart-sidebar').html($('[data-shopping-cart-source]').html());$.each($('#js-cart-sidebar input[name="product-sidebar-quantity-spin"]'),function(index,spinner){$(spinner).makeTouchSpin();$(spinner).on('change',function(){$(spinner).trigger('focusout')})});if(resp.modal){$('html').addClass('st-effect-right st-menu-open');setTimeout(function(){if(prestashop.page.page_name=='product'){prestashop.emit('updateProduct',{})}},500)}}else{if(psAjaxCart&&resp.modal){showModal(resp.modal)}}
$('.js-ajax-add-to-cart').removeClass('disabled');$('[data-button-action="add-to-cart"]').removeClass('disabled');$('.js-cart-update-voucher, .js-cart-update-quantity').fadeOut()}).fail(function(resp){prestashop.emit('handleError',{eventType:'updateShoppingCart',resp:resp})})})});