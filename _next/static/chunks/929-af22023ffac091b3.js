(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[929],{3946:function(e,t,n){"use strict";n.d(t,{JX:function(){return w},W2:function(){return g},X2:function(){return y}});var o=n(3165),r=n(7294),i=n(5019);const c="@vitus-labs/coolgrid",l=["columns","size","gap","padding","gutter","colCss","colComponent","rowCss","rowComponent","contentAlignX"],s=e=>Number.isFinite(e),a=e=>s(e)&&e>0,u=e=>(0,i.CE)(e,l);var d=(0,r.createContext)({});const f=e=>{const{theme:t}=(0,r.useContext)(o.Do),n=((e,t)=>(0,i.ei)(e,t))(e,l);return{...((e={},t={})=>({columns:(0,i.U2)(e,"columns")||(0,i.U2)(t,"grid.columns")||(0,i.U2)(t,"coolgrid.columns"),containerWidth:(0,i.U2)(e,"width")||(0,i.U2)(t,"grid.container")||(0,i.U2)(t,"coolgrid.container")}))(n,t),...n}};var p=i.vc.styled(i.vc.component)`
  ${i.vc.css`
      box-sizing: border-box;
    `};

  display: flex;
  width: 100%;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;

  ${(0,o.EL)({key:"$coolgrid",styles:({theme:e,css:t,rootSize:n})=>t`
  max-width: ${(0,o.S3)([e.width],n)};
  ${(0,o.wV)(e.extraStyles)};
`,css:i.vc.css,normalize:!0})};
`;const g=({children:e,component:t,css:n,width:o,...i})=>{const{containerWidth:c={},...l}=f(i);let s=c;return o&&(s="function"===typeof o?o(c):o),r.createElement(p,{...u(i),as:t,$coolgrid:{width:s,extraStyles:n}},r.createElement(d.Provider,{value:l},e))},m=`${c}/Container`;g.displayName=m,g.pkgName=c,g.VITUS_LABS__COMPONENT=m;var v=(0,r.createContext)({});var h=i.vc.styled(i.vc.component)`
  ${i.vc.css`
      box-sizing: border-box;
    `};

  display: flex;
  flex-wrap: wrap;
  align-self: stretch;
  flex-direction: row;

  ${(0,o.EL)({key:"$coolgrid",styles:({theme:e,css:t,rootSize:n})=>{const{gap:r,gutter:c,contentAlignX:l,extraStyles:a}=e;return t`
    ${(({gap:e,gutter:t},{rootSize:n})=>{if(!s(e))return"";const r=e=>(0,o.S3)([e],n),c=e/2*-1,l=s(t)?t-e/2:e/2;return i.vc.css`
    margin: ${r(l)} ${r(c)};
  `})({gap:r,gutter:c},{rootSize:n})};
    ${u=l,u?i.vc.css`
    justify-content: ${o.cP[u]};
  `:""};
    ${(0,o.wV)(a)};
  `;var u},css:i.vc.css,normalize:!0})};
`;const y=({children:e,component:t,css:n,contentAlignX:o,...i})=>{const c=(0,r.useContext)(d),{columns:l,gap:s,gutter:a,rowComponent:p,rowCss:g,contentAlignX:m,...y}=f({...c,...i}),b=(0,r.useMemo)((()=>({...y,columns:l,gap:s,gutter:a})),[y,l,s,a]),E={...u(i),as:t||p,$coolgrid:{contentAlignX:o||m,columns:l,gap:s,gutter:a,extraStyles:n||g}};return r.createElement(h,{...E},r.createElement(v.Provider,{value:b},e))},b=`${c}/Row`;y.displayName=b,y.pkgName=c,y.VITUS_LABS__COMPONENT=b;const E=({size:e,columns:t,gap:n,RNparentWidth:r},{rootSize:c})=>{if(!((e,t)=>a(e)&&a(t))(e,t))return"";const l=e/t*100,s=a(n)?`calc(${l}% - ${n}px)`:`${l}%`;return i.vc.css`
      flex-grow: 0;
      flex-shrink: 0;
      max-width: ${(0,o.S3)([s],c)};
      flex-basis: ${(0,o.S3)([s],c)};
    `},k=(e,t,n)=>{if(!s(t))return"";const r=`${e}: ${(0,o.S3)([t/2],n)}`;return i.vc.css`
      ${r};
    `};var C=i.vc.styled(i.vc.component)`
  ${i.vc.css`
      box-sizing: border-box;
    `};

  position: relative;
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  flex-direction: column;
  justify-content: stretch;

  ${(0,o.EL)({key:"$coolgrid",styles:({theme:e,css:t,rootSize:n})=>{const{size:r,columns:i,gap:c,padding:l,extraStyles:a,RNparentWidth:u}=e;var d;return s(d=r)&&0!==d||void 0===d?t`
      left: initial;
      position: relative;
      ${E({size:r,columns:i,gap:c,RNparentWidth:u},{rootSize:n})};
      ${k("padding",l,n)};
      ${k("margin",c,n)};
      ${(0,o.wV)(a)};
    `:t`
    left: -9999px;
    position: fixed;
    margin: 0;
    padding: 0;
  `},css:i.vc.css,normalize:!0})};
`;const w=({children:e,component:t,css:n,...o})=>{const i=(0,r.useContext)(v),{colCss:c,colComponent:l,columns:s,gap:a,size:d,padding:p}=f({...i,...o});return r.createElement(C,{...u(o),as:t||l,$coolgrid:{columns:s,gap:a,size:d,padding:p,extraStyles:n||c}},e)},x=`${c}/Col`;w.displayName=x,w.pkgName=c,w.VITUS_LABS__COMPONENT=x},5957:function(e,t,n){"use strict";n.d(t,{W_:function(){return h},aV:function(){return k},C6:function(){return N},xv:function(){return P}});var o=n(3165),r=n(7294),i=n(5019),c=n(3935);const l="@vitus-labs/elements",s={button:!0,fieldset:!0,legend:!0},a=i.vc.css`
    box-sizing: border-box;
  `;var u=i.vc.styled(i.vc.component)`
  position: relative;
  ${a};

  ${({$childFix:e})=>e&&i.vc.css`
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
  `};

  ${(0,o.EL)({key:"$element",styles:({theme:e,css:t})=>t`
  ${t`
    ${({$childFix:n})=>!n&&t`
        display: ${e.block?"flex":"inline-flex"};
      `};

    ${({$parentFix:n})=>n&&e.block&&t`
        flex-direction: column;
        width: 100%;
      `};
  `};

  ${"block"===e.contentAlignY&&t`
    height: 100%;
  `};

  ${(0,o.Kv)({direction:e.direction,alignX:e.alignX,alignY:e.alignY})};

  ${e.block&&t`
    align-self: stretch;
  `}

  ${e.extraStyles&&(0,o.wV)(e.extraStyles)};
`,css:i.vc.css,normalize:!0})};
`;const d=(0,r.forwardRef)((({children:e,tag:t,block:n,extendCss:o,direction:i,alignX:c,alignY:l,equalCols:a,isInline:d,...f},p)=>{const g={},m={...f,...g,ref:p,as:t};return!f.dangerouslySetInnerHTML&&t&&(e=>s[e])(t)?r.createElement(u,{...m,$parentFix:!0,$element:{block:n,extraStyles:o}},r.createElement(u,{as:d?"span":"div",$childFix:!0,$element:{direction:i,alignX:c,alignY:l,equalCols:a}},e)):r.createElement(u,{...m,$element:{block:n,direction:i,alignX:c,alignY:l,equalCols:a,extraStyles:o}},e)}));var f=i.vc.styled(i.vc.component)`
  ${i.vc.css`
      box-sizing: border-box;
    `};

  display: flex;
  align-self: stretch;
  flex-wrap: wrap;

  ${({$contentType:e})=>"content"===e&&i.vc.css`
    flex: 1;
  `};

  ${(0,o.EL)({key:"$element",styles:({css:e,theme:t,rootSize:n})=>e`
  ${(0,o.Kv)({direction:t.direction,alignX:t.alignX,alignY:t.alignY})};

  ${t.equalCols&&e`
    flex: 1;
  `};

  ${t.gap&&e`
    ${({$contentType:r})=>(({direction:e,type:t,value:n,css:o})=>{if(!e||!t)return;return o`
    ${`${{inline:{before:"margin-right",after:"margin-left"},rows:{before:"margin-bottom",after:"margin-top"}}[e][t]}: ${n};`};
  `})({direction:t.parentDirection,type:r,value:(0,o.S3)([t.gap],n),css:e})}
  `};

  ${t.extraStyles&&(0,o.wV)(t.extraStyles)};
`,css:i.vc.css,normalize:!0})};
`;var p=(0,r.memo)((({contentType:e,tag:t,parentDirection:n,direction:o,alignX:i,alignY:c,equalCols:l,gap:s,extendCss:a,...u})=>{const d={};return r.createElement(f,{as:t,$contentType:e,$element:{parentDirection:n,direction:o,alignX:i,alignY:c,equalCols:l,gap:s,extraStyles:a},...d,...u})}));const g={span:!0,a:!0,button:!0,input:!0,label:!0,select:!0,textarea:!0,br:!0,img:!0,strong:!0,small:!0,code:!0,b:!0,big:!0,i:!0,tt:!0,abbr:!0,acronym:!0,cite:!0,dfn:!0,em:!0,kbd:!0,samp:!0,var:!0,bdo:!0,map:!0,object:!0,q:!0,script:!0,sub:!0,sup:!0},m={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,source:!0,track:!0,wbr:!0},v="inline",h=(0,r.forwardRef)((({innerRef:e,tag:t,label:n,content:o,children:c,beforeContent:l,afterContent:s,block:a,equalCols:u,gap:f,direction:h,alignX:y="left",alignY:b="center",css:E,contentCss:k,beforeContentCss:C,afterContentCss:w,contentDirection:x="rows",contentAlignX:$="left",contentAlignY:S="center",beforeContentDirection:O="inline",beforeContentAlignX:L="left",beforeContentAlignY:N="center",afterContentDirection:_="inline",afterContentAlignX:R="left",afterContentAlignY:P="center",...X},z)=>{const T=!!X.dangerouslySetInnerHTML||t&&(e=>!!e&&m[e])(t),U={ref:z||e,extendCss:E,tag:t,block:a,contentDirection:x,alignX:$,alignY:S,as:void 0};if(T)return r.createElement(d,{...U,...X});const M=!l&&!s,A=c||o||n,Y=(e=>!!e&&g[e])(t),D=Y?"span":void 0,I=(0,r.useMemo)((()=>{let e,t=y,n=b;return M?(x&&(e=x),$&&(t=$),S&&(n=S)):e=h||v,{wrapperDirection:e,wrapperAlignX:t,wrapperAlignY:n}}),[M,x,$,S,h]),{wrapperDirection:V,wrapperAlignX:B,wrapperAlignY:j}=I,q=(0,r.useMemo)((()=>(0,i.UE)(l)),[l]),W=(0,r.useMemo)((()=>(0,i.UE)(s)),[s]),H=(0,r.useMemo)((()=>(0,i.UE)(A)),[A]);return r.createElement(d,{...X,...U,isInline:Y,direction:V,alignX:B,alignY:j},l&&r.createElement(p,{tag:D,contentType:"before",parentDirection:V,extendCss:C,direction:O,alignX:L,alignY:N,equalCols:u,gap:f},q),M?H:r.createElement(p,{tag:D,contentType:"content",parentDirection:V,extendCss:k,direction:x,alignX:$,alignY:S,equalCols:u},H),s&&r.createElement(p,{tag:D,contentType:"after",parentDirection:V,extendCss:w,direction:_,alignX:R,alignY:P,equalCols:u,gap:f},W))})),y=`${l}/Element`;h.displayName=y,h.pkgName=l,h.VITUS_LABS__COMPONENT=y;const b=({i:e,length:t})=>{const n=e+1;return{index:e,first:1===n,last:n===t,odd:n%2===1,even:n%2===0,position:n}},E=e=>{const{itemKey:t,valueName:n,children:o,component:c,data:l,wrapComponent:s,wrapProps:a,itemProps:u}=e,d=(e,t)=>(0,i.UE)(e,t),f="function"===typeof u?(e,t)=>u(e,t):()=>u,p="function"===typeof a?(e,t)=>a(e,t):()=>a,g=e=>{const o=e.filter((e=>null!==e||void 0!==e)),{length:i}=o;if(0===o.length)return null;return o.map(((e,o)=>{const l=((e,n)=>"function"===typeof t?t(e,n):n)(e,o),g=n||"children",m=b({i:o,length:i}),v={...u?f({[g]:e},m):{},[g]:e},h=a?p({[g]:e},m):{};return s?r.createElement(s,{key:l,...h},d(c,v)):d(c,{key:l,...v})}))},m=e=>{const n=e.filter((e=>!(0,i.xb)(e))),{length:o}=n;if(0===n.length)return null;return n.map(((e,n)=>{const{component:i,...l}=e,g=i||c,m=((e,n)=>t?"function"===typeof t?t(e,n):"string"===typeof t?e[t]:n:e.key||e.id||e.itemId||n)(l,n),v=b({i:n,length:o}),h={...u?f(e,v):{},...l},y=a?p(e,v):{};return s&&!i?r.createElement(s,{key:m,...y},d(g,h)):d(g,{key:m,...h})}))};return(()=>{if(o)return(()=>{if(!o)return null;const{length:e}=o;return u||s?r.Children.map(o,((t,n)=>{const o=n,c=b({i:n,length:e}),l=u?f({},c):{},g=a?p({},c):{};return s?r.createElement(s,{key:o,...g},d(t,l)):(0,i.UE)(t,{key:n,...l})})):o})();if(c&&Array.isArray(l)){const e=l.filter((e=>null!==e&&void 0!==e));if(e.every((e=>"string"===typeof e||"number"===typeof e)))return g(e);return e.every((e=>"object"===typeof e))?m(e):null}return null})()};E.isIterator=!0,E.RESERVED_PROPS=["children","component","wrapComponent","data","itemKey","valueName","itemProps","wrapProps"];const k=(0,r.forwardRef)((({rootElement:e=!1,...t},n)=>{const o=r.createElement(E,{...(0,i.ei)(t,E.RESERVED_PROPS)});return e?r.createElement(h,{ref:n,...(0,i.CE)(t,E.RESERVED_PROPS)},o):o})),C=`${l}/List`;k.displayName=C,k.pkgName=l,k.VITUS_LABS__COMPONENT=C;const w=({position:e=document.body,tag:t="div",children:n})=>{const[o]=(0,r.useState)(document.createElement(t));return e&&o?((0,r.useEffect)((()=>(e.appendChild(o),()=>{e.removeChild(o)})),[]),c.createPortal(n,o)):null},x=`${l}/Portal`;w.displayName=x,w.pkgName=l,w.VITUS_LABS__COMPONENT=x;const $=(0,r.createContext)({}),{Provider:S}=$,O=({children:e,blocked:t,setBlocked:n,setUnblocked:o})=>r.createElement(S,{value:{blocked:t,setBlocked:n,setUnblocked:o}},e);var L=({isOpen:e=!1,openOn:t="click",closeOn:n="click",type:c="dropdown",align:l="bottom",position:s="fixed",alignX:a="left",alignY:u="bottom",offsetX:d=0,offsetY:f=0,throttleDelay:p=200,customScrollListener:g,closeOnEsc:m=!0})=>{const{rootSize:v}=(0,r.useContext)(i.Do),h=(0,r.useContext)($),[y,b]=(0,r.useState)(!1),[E,k]=(0,r.useState)(e),[C,w]=(0,r.useState)(l),[x,S]=(0,r.useState)(a),[O,L]=(0,r.useState)(u),N=(0,r.useRef)(),_=(0,r.useRef)(),R=(0,r.useCallback)((()=>b(!0)),[]),P=(0,r.useCallback)((()=>b(!1)),[]);(0,r.useEffect)((()=>{E&&h?.setBlocked?h.setBlocked():!E&&h?.setUnblocked&&h.setUnblocked()}),[E]),(0,r.useEffect)((()=>{E&&M()}),[E]),(0,r.useEffect)((()=>(E&&(document.addEventListener("resize",Y,!1),document.addEventListener("scroll",Y,!1),g&&g.addEventListener("scroll",Y,!1)),()=>{document.removeEventListener("resize",Y,!1),document.removeEventListener("scroll",Y,!1),g&&g.removeEventListener("scroll",Y,!1)})),[E,g]),(0,r.useEffect)((()=>(E&&(g?g.style.overflow="hidden":"modal"===c&&document.body&&(document.body.style.overflow="hidden")),()=>{g?g.style.overflow="":"modal"===c&&document.body&&(document.body.style.overflow="")})),[E,c,g]),(0,r.useEffect)((()=>(y||("click"!==t&&"click"!==n&&"clickOnTrigger"!==n&&"clickOutsideContent"!==n||document.addEventListener("click",A,!1),"hover"!==t&&"hover"!==n||document.addEventListener("mousemove",D,!1),E&&(g&&g.addEventListener("scroll",D,!1),document.addEventListener("scroll",D,!1),m&&document.addEventListener("keydown",I))),()=>{document.removeEventListener("scroll",D,!1),document.removeEventListener("click",A,!1),document.removeEventListener("mousemove",D,!1),m&&document.removeEventListener("keydown",I),g&&g.removeEventListener("scroll",D,!1)})),[t,n,E,y]);const X=e=>!!(e&&e.target&&N.current)&&(N.current.contains(e.target)||e.target===N.current),z=e=>!!(e&&e.target&&_.current)&&(_.current.contains(e.target)||e.target===_.current),T=(0,r.useCallback)((()=>{k(!0)}),[]),U=(0,r.useCallback)((()=>{k(!1)}),[]),M=()=>{if(!E)return;if(!N.current||!_.current)return;const e=N.current.getBoundingClientRect(),t=_.current.getBoundingClientRect(),n={position:s};if(["dropdown","tooltip","popover"].includes(c)){if(["top","bottom"].includes(l)){const o=e.top-f-t.height,r=e.bottom+f,i=e.left-d,c=e.right+d-t.width;if("top"===l){const e=o>=0;w(e?"top":"bottom"),n.top=e?o:r}else{const e=r+t.height<=window.innerHeight;w(e?"bottom":"top"),n.top=e?r:o}switch(a){case"right":{const e=c>=0;S(e?"right":"left"),n.left=e?c:i;break}case"center":n.left=e.left+(e.right-e.left)/2-t.width/2;break;case"left":default:{const e=i+t.width<=window.innerWidth;S(e?"left":"right"),n.left=e?i:c;break}}}else if(["left","right"].includes(l)){const o=e.left-d-t.width,r=e.right+d,i=e.top+f,c=e.bottom-f-t.height;if("left"===l){const e=o>=0;w(e?"left":"right"),n.left=e?o:r}else{const e=r+t.width<=window.innerWidth;w(e?"right":"left"),n.left=e?r:o}switch(u){case"top":{const e=i+t.height<=window.innerHeight;L(e?"top":"bottom"),n.top=e?i:c;break}case"center":n.top=e.top-f+(e.bottom-e.top)/2-t.height/2;break;case"bottom":default:{const e=c>=0;L(e?"bottom":"top"),n.top=e?c:i}}}}else if("modal"===c){switch(a){case"right":n.right=d;break;case"left":n.left=d;break;case"center":default:n.left=window.innerWidth/2-t.width/2}switch(u){case"top":n.top=f;break;case"center":n.top=window.innerHeight/2-t.height/2;break;case"bottom":default:n.bottom=f}}_.current.style.position=n.position,_.current.style.top=(0,o.S3)([n.top],v),_.current.style.bottom=(0,o.S3)([n.bottom],v),_.current.style.left=(0,o.S3)([n.left],v),_.current.style.right=(0,o.S3)([n.right],v)},A=e=>{E||("hover"===t&&"mousemove"===e.type&&X(e)&&T(),"click"===t&&"click"===e.type&&X(e)&&T()),E&&("hover"===n&&"mousemove"===e.type&&(X(e)||z(e)||U()),"hover"===n&&"scroll"===e.type&&U(),"click"===n&&"click"===e.type&&U(),"clickOnTrigger"===n&&"click"===e.type&&X(e)&&U(),"clickOutsideContent"===n&&"click"===e.type&&(z(e)||U()))},Y=(0,i.P2)(M,p),D=(0,i.P2)(A,p),I=e=>{"Escape"===e.key&&U()};return{triggerRef:N,contentRef:_,active:E,align:C,alignX:x,alignY:O,showContent:T,hideContent:U,blocked:y,setBlocked:R,setUnblocked:P}};const N=({children:e,trigger:t,DOMLocation:n,triggerRefName:o="ref",contentRefName:c="ref",...l})=>{const{active:s,triggerRef:a,contentRef:u,showContent:d,hideContent:f,align:p,alignX:g,alignY:m,...v}=L(l),h=(0,r.useMemo)((()=>"manual"===l.openOn||"manual"===l.closeOn||"clickOutsideContent"===l.closeOn),[l.openOn,l.closeOn]);return r.createElement(r.Fragment,null,(0,i.UE)(t,{[o]:a,active:s,...h?{showContent:d,hideContent:f}:{}}),s&&r.createElement(w,{position:n},r.createElement(O,{...v},(0,i.UE)(e,{[c]:u,active:s,align:p,alignX:g,alignY:m,...h?{showContent:d,hideContent:f}:{}}))))},_=`${l}/Ovelay`;N.displayName=_,N.pkgName=l,N.VITUS_LABS__COMPONENT=_;var R=i.vc.styled(i.vc.textComponent)`
  color: inherit;
  font-weight: normal;
  line-height: 1;

  ${(0,o.EL)({key:"$text",styles:({css:e,theme:t})=>e`
  ${t.extraStyles&&(0,o.wV)(t.extraStyles)};
`,css:i.vc.css,normalize:!1})};
`;const P=(0,r.forwardRef)((({paragraph:e,label:t,children:n,tag:o,extendCss:i,...c},l)=>{return s=e?"p":o,r.createElement(R,{ref:l,as:s,$text:{extraStyles:i},...c},n||t);var s})),X=`${l}/Text`;P.displayName=X,P.pkgName=l,P.VITUS_LABS__COMPONENT=X,P.isText=!0},7942:function(e,t,n){"use strict";var o=n(5696);t.default=void 0;var r,i=(r=n(7294))&&r.__esModule?r:{default:r},c=n(4957),l=n(9898),s=n(639);var a={};function u(e,t,n,o){if(e&&c.isLocalURL(t)){e.prefetch(t,n,o).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;a[t+"%"+n+(r?"%"+r:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=l.useRouter(),d=i.default.useMemo((function(){var t=c.resolveHref(r,e.href,!0),n=o(t,2),i=n[0],l=n[1];return{href:i,as:e.as?c.resolveHref(r,e.as):l||i}}),[r,e.href,e.as]),f=d.href,p=d.as,g=e.children,m=e.replace,v=e.shallow,h=e.scroll,y=e.locale;"string"===typeof g&&(g=i.default.createElement("a",null,g));var b=(t=i.default.Children.only(g))&&"object"===typeof t&&t.ref,E=s.useIntersection({rootMargin:"200px"}),k=o(E,2),C=k[0],w=k[1],x=i.default.useCallback((function(e){C(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,C]);i.default.useEffect((function(){var e=w&&n&&c.isLocalURL(f),t="undefined"!==typeof y?y:r&&r.locale,o=a[f+"%"+p+(t?"%"+t:"")];e&&!o&&u(r,f,p,{locale:t})}),[p,f,w,y,n,r]);var $={ref:x,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,i,l,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),null==l&&o.indexOf("#")>=0&&(l=!1),t[r?"replace":"push"](n,o,{shallow:i,locale:s,scroll:l}))}(e,r,f,p,m,v,h,y)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(f)&&u(r,f,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var S="undefined"!==typeof y?y:r&&r.locale,O=r&&r.isLocaleDomain&&c.getDomainLocale(p,S,r&&r.locales,r&&r.domainLocales);$.href=O||c.addBasePath(c.addLocale(p,S,r&&r.defaultLocale))}return i.default.cloneElement(t,$)};t.default=d},639:function(e,t,n){"use strict";var o=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,s=r.useRef(),a=r.useState(!1),u=o(a,2),d=u[0],f=u[1],p=r.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,n){var o=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var o=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:r,elements:o}),n}(n),r=o.id,i=o.observer,c=o.elements;return c.set(e,t),i.observe(e),function(){c.delete(e),i.unobserve(e),0===c.size&&(i.disconnect(),l.delete(r))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return r.useEffect((function(){if(!c&&!d){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),[p,d]};var r=n(7294),i=n(6286),c="undefined"!==typeof IntersectionObserver;var l=new Map},1664:function(e,t,n){e.exports=n(7942)},1163:function(e,t,n){e.exports=n(9898)},4730:function(e,t,n){"use strict";function o(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return o}})},1383:function(e,t,n){"use strict";function o(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{Z:function(){return o}})}}]);