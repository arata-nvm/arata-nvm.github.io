var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function l(t){t.forEach(e)}function o(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(t,e,n,l){return t[1]&&l?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](l(e))):n.ctx}function i(t,e,n,l,o,s,i){const c=function(t,e,n,l){if(t[2]&&l){const o=t[2](l(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let l=0;l<n;l+=1)t[l]=e.dirty[l]|o[l];return t}return e.dirty|o}return e.dirty}(e,l,o,s);if(c){const o=r(e,n,l,i);t.p(o,c)}}let c,a=!1;function d(t,e,n,l){for(;t<e;){const o=t+(e-t>>1);n(o)<=l?t=o+1:e=o}return t}function u(t,e){a?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,n=new Int32Array(e.length+1),l=new Int32Array(e.length);n[0]=-1;let o=0;for(let t=0;t<e.length;t++){const s=d(1,o+1,(t=>e[n[t]].claim_order),e[t].claim_order)-1;l[t]=n[s]+1;const r=s+1;n[r]=t,o=Math.max(r,o)}const s=[],r=[];let i=e.length-1;for(let t=n[o]+1;0!=t;t=l[t-1]){for(s.push(e[t-1]);i>=t;i--)r.push(e[i]);i--}for(;i>=0;i--)r.push(e[i]);s.reverse(),r.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<r.length;e++){for(;n<s.length&&r[e].claim_order>=s[n].claim_order;)n++;const l=n<s.length?s[n]:null;t.insertBefore(r[e],l)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function f(t,e,n){a&&!n?u(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function $(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function p(){return h(" ")}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t){c=t}const z=[],y=[],v=[],_=[],x=Promise.resolve();let w=!1;function A(t){v.push(t)}let k=!1;const L=new Set;function S(){if(!k){k=!0;do{for(let t=0;t<z.length;t+=1){const e=z[t];b(e),T(e.$$)}for(b(null),z.length=0;y.length;)y.pop()();for(let t=0;t<v.length;t+=1){const e=v[t];L.has(e)||(L.add(e),e())}v.length=0}while(z.length);for(;_.length;)_.pop()();w=!1,k=!1,L.clear()}}function T(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const E=new Set;function M(t,e){t&&t.i&&(E.delete(t),t.i(e))}function H(t,e,n,l){if(t&&t.o){if(E.has(t))return;E.add(t),undefined.c.push((()=>{E.delete(t),l&&(n&&t.d(1),l())})),t.o(e)}}function C(t){t&&t.c()}function N(t,n,s,r){const{fragment:i,on_mount:c,on_destroy:a,after_update:d}=t.$$;i&&i.m(n,s),r||A((()=>{const n=c.map(e).filter(o);a?a.push(...n):l(n),t.$$.on_mount=[]})),d.forEach(A)}function P(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function O(t,e){-1===t.$$.dirty[0]&&(z.push(t),w||(w=!0,x.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(e,o,s,r,i,d,u=[-1]){const f=c;b(e);const $=e.$$={fragment:null,ctx:null,props:d,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:o.context||[]),callbacks:n(),dirty:u,skip_bound:!1};let h=!1;if($.ctx=s?s(e,o.props||{},((t,n,...l)=>{const o=l.length?l[0]:n;return $.ctx&&i($.ctx[t],$.ctx[t]=o)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](o),h&&O(e,t)),n})):[],$.update(),h=!0,l($.before_update),$.fragment=!!r&&r($.ctx),o.target){if(o.hydrate){a=!0;const t=function(t){return Array.from(t.childNodes)}(o.target);$.fragment&&$.fragment.l(t),t.forEach(m)}else $.fragment&&$.fragment.c();o.intro&&M(e.$$.fragment),N(e,o.target,o.anchor,o.customElement),a=!1,S()}b(f)}class j{$destroy(){P(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function B(t){let e,n,l,o,s;const c=t[2].default,a=function(t,e,n,l){if(t){const o=r(t,e,n,l);return t[0](o)}}(c,t,t[1],null);return{c(){e=$("div"),n=$("h2"),l=h(t[0]),o=p(),a&&a.c(),g(n,"class","header")},m(t,r){f(t,e,r),u(e,n),u(n,l),u(e,o),a&&a.m(e,null),s=!0},p(t,[e]){(!s||1&e)&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(l,t[0]),a&&a.p&&(!s||2&e)&&i(a,c,t,t[1],s?e:-1,null,null)},i(t){s||(M(a,t),s=!0)},o(t){H(a,t),s=!1},d(t){t&&m(e),a&&a.d(t)}}}function R(t,e,n){let{$$slots:l={},$$scope:o}=e,{header:s}=e;return t.$$set=t=>{"header"in t&&n(0,s=t.header),"$$scope"in t&&n(1,o=t.$$scope)},[s,o,l]}class I extends j{constructor(t){super(),K(this,t,R,B,s,{header:0})}}function V(t){let e;return{c(){e=$("ul"),e.innerHTML='<li>Twitter: <a href="https://twitter.com/arata_nvm" class="svelte-11mzdzo">arata_nvm</a></li> \n\t\t\t<li>GitHub: <a href="https://github.com/arata-nvm" class="svelte-11mzdzo">arata-nvm</a></li> \n\t\t\t<li>Blog: <a href="https://arata-nvm.me/blog" class="svelte-11mzdzo">$ sleep infinity</a></li>',g(e,"class","svelte-11mzdzo")},m(t,n){f(t,e,n)},d(t){t&&m(e)}}}function G(t){let e;return{c(){e=$("ul"),e.innerHTML="<li>津山工業高等専門学校 - 総合理工学科 情報システム系 (2019/04-)</li>",g(e,"class","svelte-11mzdzo")},m(t,n){f(t,e,n)},d(t){t&&m(e)}}}function J(t){let e;return{c(){e=$("ul"),e.innerHTML='<li>Physics</li> \n\t\t\t<li>Mathematics</li> \n\t\t\t<li>Cyber Security</li> \n\t\t\t<li>Reverse Engineering</li> \n\t\t\t<li>Low-Level Programming</li> \n\t\t\t<li>CTF(Team: helix, <a href="https://ctftime.org/team/71813" class="svelte-11mzdzo">KUDoS</a>)</li>',g(e,"class","svelte-11mzdzo")},m(t,n){f(t,e,n)},d(t){t&&m(e)}}}function W(t){let e;return{c(){e=$("ul"),e.innerHTML="<li>Language: Rust, Go, Python</li> \n\t\t\t<li>Editor: Vim, Visual Studio Code</li> \n\t\t\t<li>OS: Arch Linux, Windows 10</li>",g(e,"class","svelte-11mzdzo")},m(t,n){f(t,e,n)},d(t){t&&m(e)}}}function X(t){let e;return{c(){e=$("ul"),e.innerHTML='<li>2019/08 <b class="svelte-11mzdzo">Hack U 2019 OSAKA</b></li> \n\t\t\t<li>2019/10 <b class="svelte-11mzdzo">KOSENセキュリティコンテスト2019</b> - helix 7th</li> \n\t\t\t<li>2019/12 <b class="svelte-11mzdzo">K-SECセキュリティウィンタースクール2019</b></li> \n\t\t\t<li>2020/03 <b class="svelte-11mzdzo">中国地区高専コンピュータフェスティバル</b> - アプリケーション部門 3rd</li> \n\t\t\t<li>2020/07 <b class="svelte-11mzdzo">SecHack365</b> - 学習駆動コース 坂井ゼミ</li> \n\t\t\t<li>2020/11 <b class="svelte-11mzdzo">KOSENセキュリティコンテスト2020</b> - helix 7th</li> \n\t\t\t<li>2020/11 <b class="svelte-11mzdzo">パソコン甲子園2020</b> - プログラミング部門 本選</li> \n\t\t\t<li>2021/03 <b class="svelte-11mzdzo">中国地区高専コンピュータフェスティバル</b> - アプリケーション部門 審査員賞</li> \n\t\t\t<li>2021/08 <b class="svelte-11mzdzo">セキュリティ・キャンプ全国大会2021</b></li> \n\t\t\t<li>2021/10 <b class="svelte-11mzdzo">第32回全国高専プログラミングコンテスト</b> - 競技部門</li>',g(e,"class","svelte-11mzdzo")},m(t,n){f(t,e,n)},d(t){t&&m(e)}}}function Z(t){let e;return{c(){e=$("ul"),e.innerHTML='<li><b class="svelte-11mzdzo">Visket</b> A toy programming language made with Go and LLVM</li> \n\t\t\t<li><b class="svelte-11mzdzo">ccc</b> A C compiler from scratch(self hosted)</li> \n\t\t\t<li><b class="svelte-11mzdzo">Poly</b> A software renderer from scratch</li> \n\t\t\t<li><b class="svelte-11mzdzo">tnct-info</b> An API that provides information on NITTC</li> \n\t\t\t<li><b class="svelte-11mzdzo">AutoProxy</b> An app that automatically changes the proxy settings in Windows 10</li>',g(e,"class","svelte-11mzdzo")},m(t,n){f(t,e,n)},d(t){t&&m(e)}}}function q(t){let e,n,l,o,s,r,i,c,a,d,h,b,z,y,v,_,x,w,A,k,L;return c=new I({props:{header:"Contacts",$$slots:{default:[V]},$$scope:{ctx:t}}}),d=new I({props:{header:"Affilations",$$slots:{default:[G]},$$scope:{ctx:t}}}),b=new I({props:{header:"Likes",$$slots:{default:[J]},$$scope:{ctx:t}}}),y=new I({props:{header:"Skills",$$slots:{default:[W]},$$scope:{ctx:t}}}),_=new I({props:{header:"Activities",$$slots:{default:[X]},$$scope:{ctx:t}}}),w=new I({props:{header:"Works",$$slots:{default:[Z]},$$scope:{ctx:t}}}),{c(){e=$("meta"),n=$("link"),l=$("link"),o=p(),s=$("header"),s.innerHTML="<h1>Arata</h1>",r=p(),i=$("main"),C(c.$$.fragment),a=p(),C(d.$$.fragment),h=p(),C(b.$$.fragment),z=p(),C(y.$$.fragment),v=p(),C(_.$$.fragment),x=p(),C(w.$$.fragment),A=p(),k=$("footer"),k.innerHTML="<small>© 2020 arata-nvm.</small>",document.title="Arata",g(e,"name","google-site-verification"),g(e,"content","Zvni4vmMa8E2Jt6X5tjAXXB-F02ZelcJqdupaEKRZR4"),g(n,"href","https://fonts.googleapis.com/css?family=Noto+Serif+JP:400,700&display=swap"),g(n,"rel","stylesheet"),g(l,"href","https://fonts.googleapis.com/css?family=Roboto&display=swap"),g(l,"rel","stylesheet"),g(s,"class","svelte-11mzdzo"),g(i,"class","svelte-11mzdzo"),g(k,"class","svelte-11mzdzo")},m(t,m){u(document.head,e),u(document.head,n),u(document.head,l),f(t,o,m),f(t,s,m),f(t,r,m),f(t,i,m),N(c,i,null),u(i,a),N(d,i,null),u(i,h),N(b,i,null),u(i,z),N(y,i,null),u(i,v),N(_,i,null),u(i,x),N(w,i,null),f(t,A,m),f(t,k,m),L=!0},p(t,[e]){const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),c.$set(n);const l={};1&e&&(l.$$scope={dirty:e,ctx:t}),d.$set(l);const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),b.$set(o);const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),y.$set(s);const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),_.$set(r);const i={};1&e&&(i.$$scope={dirty:e,ctx:t}),w.$set(i)},i(t){L||(M(c.$$.fragment,t),M(d.$$.fragment,t),M(b.$$.fragment,t),M(y.$$.fragment,t),M(_.$$.fragment,t),M(w.$$.fragment,t),L=!0)},o(t){H(c.$$.fragment,t),H(d.$$.fragment,t),H(b.$$.fragment,t),H(y.$$.fragment,t),H(_.$$.fragment,t),H(w.$$.fragment,t),L=!1},d(t){m(e),m(n),m(l),t&&m(o),t&&m(s),t&&m(r),t&&m(i),P(c),P(d),P(b),P(y),P(_),P(w),t&&m(A),t&&m(k)}}}return new class extends j{constructor(t){super(),K(this,t,null,q,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
