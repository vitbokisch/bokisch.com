(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[929],{3946:function(e,t,n){"use strict";n.d(t,{JX:function(){return C},W2:function(){return g},X2:function(){return y}});var o=n(3165),r=n(7294),i=n(5019);const l="@vitus-labs/coolgrid",c=["columns","size","gap","padding","gutter","colCss","colComponent","rowCss","rowComponent","contentAlignX"],s=e=>Number.isFinite(e),a=e=>s(e)&&e>0,u=e=>(0,i.CE)(e,c);var d=(0,r.createContext)({});const f=e=>{const{theme:t}=(0,r.useContext)(o.Do),n=((e,t)=>(0,i.ei)(e,t))(e,c);return{...((e={},t={})=>({columns:(0,i.U2)(e,"columns")||(0,i.U2)(t,"grid.columns")||(0,i.U2)(t,"coolgrid.columns"),containerWidth:(0,i.U2)(e,"width")||(0,i.U2)(t,"grid.container")||(0,i.U2)(t,"coolgrid.container")}))(n,t),...n}};var p=i.vc.styled(i.vc.component)`
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
`;const g=({children:e,component:t,css:n,width:o,...i})=>{const{containerWidth:l={},...c}=f(i);let s=l;return o&&(s="function"===typeof o?o(l):o),r.createElement(p,{...u(i),as:t,$coolgrid:{width:s,extraStyles:n}},r.createElement(d.Provider,{value:c},e))},m=`${l}/Container`;g.displayName=m,g.pkgName=l,g.VITUS_LABS__COMPONENT=m;var v=(0,r.createContext)({});var h=i.vc.styled(i.vc.component)`
  ${i.vc.css`
      box-sizing: border-box;
    `};

  display: flex;
  flex-wrap: wrap;
  align-self: stretch;
  flex-direction: row;

  ${(0,o.EL)({key:"$coolgrid",styles:({theme:e,css:t,rootSize:n})=>{const{gap:r,gutter:l,contentAlignX:c,extraStyles:a}=e;return t`
    ${(({gap:e,gutter:t},{rootSize:n})=>{if(!s(e))return"";const r=e=>(0,o.S3)([e],n),l=e/2*-1,c=s(t)?t-e/2:e/2;return i.vc.css`
    margin: ${r(c)} ${r(l)};
  `})({gap:r,gutter:l},{rootSize:n})};
    ${u=c,u?i.vc.css`
    justify-content: ${o.cP[u]};
  `:""};
    ${(0,o.wV)(a)};
  `;var u},css:i.vc.css,normalize:!0})};
`;const y=({children:e,component:t,css:n,contentAlignX:o,...i})=>{const l=(0,r.useContext)(d),{columns:c,gap:s,gutter:a,rowComponent:p,rowCss:g,contentAlignX:m,...y}=f({...l,...i}),b=(0,r.useMemo)((()=>({...y,columns:c,gap:s,gutter:a})),[y,c,s,a]),w={...u(i),as:t||p,$coolgrid:{contentAlignX:o||m,columns:c,gap:s,gutter:a,extraStyles:n||g}};return r.createElement(h,{...w},r.createElement(v.Provider,{value:b},e))},b=`${l}/Row`;y.displayName=b,y.pkgName=l,y.VITUS_LABS__COMPONENT=b;const w=({size:e,columns:t,gap:n,RNparentWidth:r},{rootSize:l})=>{if(!((e,t)=>a(e)&&a(t))(e,t))return"";const c=e/t*100,s=a(n)?`calc(${c}% - ${n}px)`:`${c}%`;return i.vc.css`
      flex-grow: 0;
      flex-shrink: 0;
      max-width: ${(0,o.S3)([s],l)};
      flex-basis: ${(0,o.S3)([s],l)};
    `},E=(e,t,n)=>{if(!s(t))return"";const r=`${e}: ${(0,o.S3)([t/2],n)}`;return i.vc.css`
      ${r};
    `};var k=i.vc.styled(i.vc.component)`
  ${i.vc.css`
      box-sizing: border-box;
    `};

  position: relative;
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  flex-direction: column;
  justify-content: stretch;

  ${(0,o.EL)({key:"$coolgrid",styles:({theme:e,css:t,rootSize:n})=>{const{size:r,columns:i,gap:l,padding:c,extraStyles:a,RNparentWidth:u}=e;var d;return s(d=r)&&0!==d||void 0===d?t`
      left: initial;
      position: relative;
      ${w({size:r,columns:i,gap:l,RNparentWidth:u},{rootSize:n})};
      ${E("padding",c,n)};
      ${E("margin",l,n)};
      ${(0,o.wV)(a)};
    `:t`
    left: -9999px;
    position: fixed;
    margin: 0;
    padding: 0;
  `},css:i.vc.css,normalize:!0})};
`;const C=({children:e,component:t,css:n,...o})=>{const i=(0,r.useContext)(v),{colCss:l,colComponent:c,columns:s,gap:a,size:d,padding:p}=f({...i,...o});return r.createElement(k,{...u(o),as:t||c,$coolgrid:{columns:s,gap:a,size:d,padding:p,extraStyles:n||l}},e)},x=`${l}/Col`;C.displayName=x,C.pkgName=l,C.VITUS_LABS__COMPONENT=x},5957:function(e,t,n){"use strict";n.d(t,{W_:function(){return v},aV:function(){return w},C6:function(){return O},h_:function(){return k},xv:function(){return R}});var o=n(3165),r=n(7294),i=n(5019),l=n(3935);const c="@vitus-labs/elements",s={button:!0,fieldset:!0,legend:!0};var a=i.vc.styled(i.vc.component)`
  position: relative;
  ${"box-sizing: border-box;"};

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

  ${"block"===e.alignY&&t`
    height: 100%;
  `};

  ${(0,o.Kv)({direction:e.direction,alignX:e.alignX,alignY:e.alignY})};

  ${e.block&&t`
    align-self: stretch;
  `}

  ${e.extraStyles&&(0,o.wV)(e.extraStyles)};
`,css:i.vc.css,normalize:!0})};
`;const u=(0,r.forwardRef)((({children:e,tag:t,block:n,extendCss:o,direction:i,alignX:l,alignY:c,equalCols:u,isInline:d,...f},p)=>{const g={},m={...f,...g,ref:p,as:t},v=d?"span":"div";return!f.dangerouslySetInnerHTML&&t&&(e=>s[e])(t)?r.createElement(a,{...m,$parentFix:!0,$element:{block:n,extraStyles:o}},r.createElement(a,{as:v,$childFix:!0,$element:{direction:i,alignX:l,alignY:c,equalCols:u}},e)):r.createElement(a,{...m,$element:{block:n,direction:i,alignX:l,alignY:c,equalCols:u,extraStyles:o}},e)}));var d=i.vc.styled(i.vc.component)`
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
`;var f=(0,r.memo)((({contentType:e,tag:t,parentDirection:n,direction:o,alignX:i,alignY:l,equalCols:c,gap:s,extendCss:a,...u})=>{const f={};return r.createElement(d,{as:t,$contentType:e,$element:{parentDirection:n,direction:o,alignX:i,alignY:l,equalCols:c,gap:s,extraStyles:a},...f,...u})}));const p={span:!0,a:!0,button:!0,input:!0,label:!0,select:!0,textarea:!0,br:!0,img:!0,strong:!0,small:!0,code:!0,b:!0,big:!0,i:!0,tt:!0,abbr:!0,acronym:!0,cite:!0,dfn:!0,em:!0,kbd:!0,samp:!0,var:!0,bdo:!0,map:!0,object:!0,q:!0,script:!0,sub:!0,sup:!0},g={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,source:!0,track:!0,wbr:!0},m="inline",v=(0,r.forwardRef)((({innerRef:e,tag:t,label:n,content:o,children:l,beforeContent:c,afterContent:s,block:a,equalCols:d,gap:v,direction:h,alignX:y="left",alignY:b="center",css:w,contentCss:E,beforeContentCss:k,afterContentCss:C,contentDirection:x="rows",contentAlignX:$="left",contentAlignY:S="center",beforeContentDirection:L="inline",beforeContentAlignX:O="left",beforeContentAlignY:N="center",afterContentDirection:_="inline",afterContentAlignX:R="left",afterContentAlignY:P="center",...z},M)=>{const T=!!z.dangerouslySetInnerHTML||t&&(e=>!!e&&g[e])(t),X=!c&&!s,U=l||o||n,A=(e=>!!e&&p[e])(t),Y=A?"span":void 0,{wrapperDirection:I,wrapperAlignX:D,wrapperAlignY:V}=(0,r.useMemo)((()=>{let e=h,t=y,n=b;return X?(x&&(e=x),$&&(t=$),S&&(n=S)):e=h||m,{wrapperDirection:e,wrapperAlignX:t,wrapperAlignY:n}}),[X,x,$,S,y,b,h]),B={ref:M||e,extendCss:w,tag:t,block:a,direction:I,alignX:D,alignY:V,as:void 0};if(T)return r.createElement(u,{...z,...B});const j=(0,i.UE)(U);return r.createElement(u,{...z,...B,isInline:A},c&&r.createElement(f,{tag:Y,contentType:"before",parentDirection:I,extendCss:k,direction:L,alignX:O,alignY:N,equalCols:d,gap:v},(0,i.UE)(c)),X?j:r.createElement(f,{tag:Y,contentType:"content",parentDirection:I,extendCss:E,direction:x,alignX:$,alignY:S,equalCols:d},j),s&&r.createElement(f,{tag:Y,contentType:"after",parentDirection:I,extendCss:C,direction:_,alignX:R,alignY:P,equalCols:d,gap:v},(0,i.UE)(s)))})),h=`${c}/Element`;v.displayName=h,v.pkgName=c,v.VITUS_LABS__COMPONENT=h;const y=({i:e,length:t})=>{const n=e+1;return{index:e,first:1===n,last:n===t,odd:n%2===1,even:n%2===0,position:n}},b=e=>{const{itemKey:t,valueName:n,children:o,component:l,data:c,wrapComponent:s,wrapProps:a,itemProps:u}=e,d=i.UE,f=(0,r.useMemo)((()=>"function"===typeof u?u:()=>u),[u]),p=(0,r.useMemo)((()=>"function"===typeof a?a:()=>a),[a]),g=(0,r.useCallback)(((e,n)=>"function"===typeof t?t(e,n):n),[]),m=e=>{const n=e.filter((e=>!(0,i.xb)(e))),{length:o}=n;if(0===n.length)return null;return n.map(((e,n)=>{const{component:i,...c}=e,g=i||l,m=((e,n)=>t?"function"===typeof t?t(e,n):"string"===typeof t?e[t]:n:e.key||e.id||e.itemId||n)(c,n),v=y({i:n,length:o}),h={...u?f(e,v):{},...c},b=a?p(e,v):{};return s&&!i?r.createElement(s,{key:m,...b},d(g,h)):d(g,{key:m,...h})}))};return(()=>{if(o)return(()=>{if(!o)return null;const{length:e}=o;return u||s?r.Children.map(o,((t,n)=>{const o=n,l=y({i:n,length:e}),c=u?f({},l):{},g=a?p({},l):{};return s?r.createElement(s,{key:o,...g},d(t,c)):(0,i.UE)(t,{key:n,...c})})):o})();if(l&&Array.isArray(c)){const e=(0,r.useMemo)((()=>c.filter((e=>null!==e&&void 0!==e))),[c]);if((0,r.useMemo)((()=>e.every((e=>"string"===typeof e||"number"===typeof e))),[e]))return(e=>{const{length:t}=e;return 0===e.length?null:e.map(((e,o)=>{const i=g(e,o),c=n||"children",m=y({i:o,length:t}),v={...u?f({[c]:e},m):{},[c]:e},h=a?p({[c]:e},m):{};return s?r.createElement(s,{key:i,...h},d(l,v)):d(l,{key:i,...v})}))})(e);return(0,r.useMemo)((()=>e.every((e=>"object"===typeof e))),[e])?m(e):null}return null})()};b.isIterator=!0,b.RESERVED_PROPS=["children","component","wrapComponent","data","itemKey","valueName","itemProps","wrapProps"];const w=(0,r.forwardRef)((({rootElement:e=!1,...t},n)=>{const o=r.createElement(b,{...(0,i.ei)(t,b.RESERVED_PROPS)});return e?r.createElement(v,{ref:n,...(0,i.CE)(t,b.RESERVED_PROPS)},o):o})),E=`${c}/List`;w.displayName=E,w.pkgName=c,w.VITUS_LABS__COMPONENT=E;const k=({position:e=document.body,tag:t="div",children:n})=>{const[o]=(0,r.useState)(document.createElement(t));return e&&o?((0,r.useEffect)((()=>(e.appendChild(o),()=>{e.removeChild(o)})),[]),(0,l.createPortal)(n,o)):null},C=`${c}/Portal`;k.displayName=C,k.pkgName=c,k.VITUS_LABS__COMPONENT=C;const x=(0,r.createContext)({}),{Provider:$}=x,S=({children:e,blocked:t,setBlocked:n,setUnblocked:o})=>r.createElement($,{value:{blocked:t,setBlocked:n,setUnblocked:o}},e);var L=({isOpen:e=!1,openOn:t="click",closeOn:n="click",type:l="dropdown",align:c="bottom",position:s="fixed",alignX:a="left",alignY:u="bottom",offsetX:d=0,offsetY:f=0,throttleDelay:p=200,customScrollListener:g,closeOnEsc:m=!0,disabled:v,onOpen:h,onClose:y})=>{const{rootSize:b}=(0,r.useContext)(i.Do),w=(0,r.useContext)(x),[E,k]=(0,r.useState)(!1),[C,$]=(0,r.useState)(e),[S,L]=(0,r.useState)(c),[O,N]=(0,r.useState)(a),[_,R]=(0,r.useState)(u),P=(0,r.useRef)(),z=(0,r.useRef)(),M=(0,r.useCallback)((()=>k(!0)),[]),T=(0,r.useCallback)((()=>k(!1)),[]),X=(0,r.useCallback)((()=>{$(!0)}),[]),U=(0,r.useCallback)((()=>{$(!1)}),[]);(0,r.useEffect)((()=>{C?(D(),w?.setBlocked&&w.setBlocked(),h&&h()):(w?.setUnblocked&&w.setUnblocked(),y&&y())}),[C]),(0,r.useEffect)((()=>{if(C)return window.addEventListener("resize",B,!1),window.addEventListener("scroll",B,!1),g&&g.addEventListener("scroll",B,!1),()=>{window.removeEventListener("resize",B,!1),window.removeEventListener("scroll",B,!1),g&&g.removeEventListener("scroll",B,!1)}}),[C,g]),(0,r.useEffect)((()=>{const e="modal"===l&&document.body;return C?(g&&(g.style.overflow="hidden"),e&&(document.body.style.overflow="hidden")):(g&&(g.style.overflow=""),e&&(document.body.style.overflow="")),()=>{g&&(g.style.overflow=""),e&&(document.body.style.overflow="")}}),[C,l,g]),(0,r.useEffect)((()=>{if(C)return window.addEventListener("scroll",q,!1),g&&g.addEventListener("scroll",q,!1),m&&window.addEventListener("keydown",W,!1),()=>{window.removeEventListener("scroll",q,!1),g&&g.removeEventListener("scroll",q,!1),m&&window.removeEventListener("keydown",W,!1)}}),[C,g]),(0,r.useEffect)((()=>{if(!E&&!v)return"click"!==t&&"click"!==n&&"clickOnTrigger"!==n&&"clickOutsideContent"!==n||window.addEventListener("click",j,!1),"hover"!==t&&"hover"!==n||window.addEventListener("mousemove",q,!1),()=>{window.removeEventListener("click",j,!1),window.removeEventListener("mousemove",q,!1)}}),[t,n,E,v,C]);const A=e=>t=>!!(t&&t.target&&e.current)&&(e.current.contains(t.target)||t.target===e.current),Y=A(P),I=A(z),D=()=>{if(!C)return;if(!P.current||!z.current)return void 0;const e=P.current.getBoundingClientRect(),t=z.current.getBoundingClientRect(),n={position:s};if(["dropdown","tooltip","popover"].includes(l)){if(["top","bottom"].includes(c)){const o=e.top-f-t.height,r=e.bottom+f,i=e.left-d,l=e.right+d-t.width;if("top"===c){const e=o>=0;L(e?"top":"bottom"),n.top=e?o:r}else{const e=r+t.height<=window.innerHeight;L(e?"bottom":"top"),n.top=e?r:o}switch(a){case"right":{const e=l>=0;N(e?"right":"left"),n.left=e?l:i;break}case"center":n.left=e.left+(e.right-e.left)/2-t.width/2;break;case"left":default:{const e=i+t.width<=window.innerWidth;N(e?"left":"right"),n.left=e?i:l;break}}}else if(["left","right"].includes(c)){const o=e.left-d-t.width,r=e.right+d,i=e.top+f,l=e.bottom-f-t.height;if("left"===c){const e=o>=0;L(e?"left":"right"),n.left=e?o:r}else{const e=r+t.width<=window.innerWidth;L(e?"right":"left"),n.left=e?r:o}switch(u){case"top":{const e=i+t.height<=window.innerHeight;R(e?"top":"bottom"),n.top=e?i:l;break}case"center":n.top=e.top-f+(e.bottom-e.top)/2-t.height/2;break;case"bottom":default:{const e=l>=0;R(e?"bottom":"top"),n.top=e?l:i}}}}else if("modal"===l){switch(a){case"right":n.right=d;break;case"left":n.left=d;break;case"center":default:n.left=window.innerWidth/2-t.width/2}switch(u){case"top":n.top=f;break;case"center":n.top=window.innerHeight/2-t.height/2;break;case"bottom":default:n.bottom=f}}z.current.style.position=n.position,z.current.style.top=(0,o.S3)([n.top],b),z.current.style.bottom=(0,o.S3)([n.bottom],b),z.current.style.left=(0,o.S3)([n.left],b),z.current.style.right=(0,o.S3)([n.right],b)},V=e=>{C||("hover"===t&&"mousemove"===e.type||"click"===t&&"click"===e.type)&&Y(e)&&X(),C&&("hover"===n&&"mousemove"===e.type&&(Y(e)||I(e)||U()),"hover"===n&&"scroll"===e.type&&U(),"click"===n&&"click"===e.type&&U(),"clickOnTrigger"===n&&"click"===e.type&&Y(e)&&U(),"clickOutsideContent"===n&&"click"===e.type&&(I(e)||U()))},B=(0,i.P2)(D,p),j=V,q=(0,i.P2)(V,p),W=e=>{"Escape"===e.key&&U()};return{triggerRef:P,contentRef:z,active:C,align:S,alignX:O,alignY:_,showContent:X,hideContent:U,blocked:E,setBlocked:M,setUnblocked:T}};const O=({children:e,trigger:t,DOMLocation:n,triggerRefName:o="ref",contentRefName:l="ref",...c})=>{const{active:s,triggerRef:a,contentRef:u,showContent:d,hideContent:f,align:p,alignX:g,alignY:m,...v}=L(c),{openOn:h,closeOn:y}=c,b=(0,r.useMemo)((()=>"manual"===h||"manual"===y||"clickOutsideContent"===y),[h,y]);return r.createElement(r.Fragment,null,(0,i.UE)(t,{[o]:a,active:s,...b?{showContent:d,hideContent:f}:{}}),s&&r.createElement(k,{position:n},r.createElement(S,{...v},(0,i.UE)(e,{[l]:u,active:s,align:p,alignX:g,alignY:m,...b?{showContent:d,hideContent:f}:{}}))))},N=`${c}/Overlay`;O.displayName=N,O.pkgName=c,O.VITUS_LABS__COMPONENT=N;var _=i.vc.styled(i.vc.textComponent)`
  color: inherit;
  font-weight: normal;
  line-height: 1;

  ${(0,o.EL)({key:"$text",styles:({css:e,theme:t})=>e`
  ${t.extraStyles&&(0,o.wV)(t.extraStyles)};
`,css:i.vc.css,normalize:!1})};
`;const R=(0,r.forwardRef)((({paragraph:e,label:t,children:n,tag:o,extendCss:i,...l},c)=>{return s=e?"p":o,r.createElement(_,{ref:c,as:s,$text:{extraStyles:i},...l},n||t);var s})),P=`${c}/Text`;R.displayName=P,R.pkgName=c,R.VITUS_LABS__COMPONENT=P,R.isText=!0},7942:function(e,t,n){"use strict";var o=n(5696);t.default=void 0;var r,i=(r=n(7294))&&r.__esModule?r:{default:r},l=n(4957),c=n(9898),s=n(639);var a={};function u(e,t,n,o){if(e&&l.isLocalURL(t)){e.prefetch(t,n,o).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;a[t+"%"+n+(r?"%"+r:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=c.useRouter(),d=i.default.useMemo((function(){var t=l.resolveHref(r,e.href,!0),n=o(t,2),i=n[0],c=n[1];return{href:i,as:e.as?l.resolveHref(r,e.as):c||i}}),[r,e.href,e.as]),f=d.href,p=d.as,g=e.children,m=e.replace,v=e.shallow,h=e.scroll,y=e.locale;"string"===typeof g&&(g=i.default.createElement("a",null,g));var b=(t=i.default.Children.only(g))&&"object"===typeof t&&t.ref,w=s.useIntersection({rootMargin:"200px"}),E=o(w,2),k=E[0],C=E[1],x=i.default.useCallback((function(e){k(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,k]);i.default.useEffect((function(){var e=C&&n&&l.isLocalURL(f),t="undefined"!==typeof y?y:r&&r.locale,o=a[f+"%"+p+(t?"%"+t:"")];e&&!o&&u(r,f,p,{locale:t})}),[p,f,C,y,n,r]);var $={ref:x,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,i,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n))&&(e.preventDefault(),null==c&&o.indexOf("#")>=0&&(c=!1),t[r?"replace":"push"](n,o,{shallow:i,locale:s,scroll:c}))}(e,r,f,p,m,v,h,y)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(f)&&u(r,f,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var S="undefined"!==typeof y?y:r&&r.locale,L=r&&r.isLocaleDomain&&l.getDomainLocale(p,S,r&&r.locales,r&&r.domainLocales);$.href=L||l.addBasePath(l.addLocale(p,S,r&&r.defaultLocale))}return i.default.cloneElement(t,$)};t.default=d},639:function(e,t,n){"use strict";var o=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,s=e.disabled||!l,a=r.useRef(),u=r.useState(!1),d=o(u,2),f=d[0],p=d[1],g=r.useState(t?t.current:null),m=o(g,2),v=m[0],h=m[1],y=r.useCallback((function(e){a.current&&(a.current(),a.current=void 0),s||f||e&&e.tagName&&(a.current=function(e,t,n){var o=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var o=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:r,elements:o}),n}(n),r=o.id,i=o.observer,l=o.elements;return l.set(e,t),i.observe(e),function(){l.delete(e),i.unobserve(e),0===l.size&&(i.disconnect(),c.delete(r))}}(e,(function(e){return e&&p(e)}),{root:v,rootMargin:n}))}),[s,v,n,f]);return r.useEffect((function(){if(!l&&!f){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),r.useEffect((function(){t&&h(t.current)}),[t]),[y,f]};var r=n(7294),i=n(6286),l="undefined"!==typeof IntersectionObserver;var c=new Map},1664:function(e,t,n){e.exports=n(7942)},1163:function(e,t,n){e.exports=n(9898)},4730:function(e,t,n){"use strict";function o(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return o}})},1383:function(e,t,n){"use strict";function o(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{Z:function(){return o}})}}]);