(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[414],{3946:function(e,t,n){"use strict";n.d(t,{JX:function(){return C},W2:function(){return g},X2:function(){return y}});var r=n(3165),o=n(7294),i=n(5019);const c="@vitus-labs/coolgrid",s=["columns","size","gap","padding","gutter","colCss","colComponent","rowCss","rowComponent","contentAlignX"],l=e=>Number.isFinite(e),a=e=>l(e)&&e>0,u=e=>(0,i.CE)(e,s);var d=(0,o.createContext)({});const f=e=>{const{theme:t}=(0,o.useContext)(r.Do),n=((e,t)=>(0,i.ei)(e,t))(e,s);return{...((e={},t={})=>({columns:(0,i.U2)(e,"columns")||(0,i.U2)(t,"grid.columns")||(0,i.U2)(t,"coolgrid.columns"),containerWidth:(0,i.U2)(e,"width")||(0,i.U2)(t,"grid.container")||(0,i.U2)(t,"coolgrid.container")}))(n,t),...n}};var p=i.vc.styled(i.vc.component)`
  ${i.vc.css`
      box-sizing: border-box;
    `};

  display: flex;
  width: 100%;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;

  ${(0,r.EL)({key:"$coolgrid",styles:({theme:e,css:t,rootSize:n})=>t`
  max-width: ${(0,r.S3)([e.width],n)};
  ${(0,r.wV)(e.extraStyles)};
`,css:i.vc.css,normalize:!0})};
`;const g=({children:e,component:t,css:n,width:r,...i})=>{const{containerWidth:c={},...s}=f(i);let l=c;return r&&(l="function"===typeof r?r(c):r),o.createElement(p,Object.assign({},u(i),{as:t,$coolgrid:{width:l,extraStyles:n}}),o.createElement(d.Provider,{value:s},e))},m=`${c}/Container`;g.displayName=m,g.pkgName=c,g.VITUS_LABS__COMPONENT=m;var v=(0,o.createContext)({});var h=i.vc.styled(i.vc.component)`
  ${i.vc.css`
      box-sizing: border-box;
    `};

  display: flex;
  flex-wrap: wrap;
  align-self: stretch;
  flex-direction: row;

  ${(0,r.EL)({key:"$coolgrid",styles:({theme:e,css:t,rootSize:n})=>{const{gap:o,gutter:c,contentAlignX:s,extraStyles:a}=e;return t`
    ${(({gap:e,gutter:t},{rootSize:n})=>{if(!l(e))return"";const o=e=>(0,r.S3)([e],n),c=e/2*-1,s=l(t)?t-e/2:e/2;return i.vc.css`
    margin: ${o(s)} ${o(c)};
  `})({gap:o,gutter:c},{rootSize:n})};
    ${u=s,u?i.vc.css`
    justify-content: ${r.cP[u]};
  `:""};
    ${(0,r.wV)(a)};
  `;var u},css:i.vc.css,normalize:!0})};
`;const y=({children:e,component:t,css:n,contentAlignX:r,...i})=>{const c=(0,o.useContext)(d),{columns:s,gap:l,gutter:a,rowComponent:p,rowCss:g,contentAlignX:m,...y}=f({...c,...i}),b={...u(i),as:t||p,$coolgrid:{contentAlignX:r||m,columns:s,gap:l,gutter:a,extraStyles:n||g}};return o.createElement(h,Object.assign({},b),o.createElement(v.Provider,{value:{...y,columns:s,gap:l,gutter:a}},e))},b=`${c}/Row`;y.displayName=b,y.pkgName=c,y.VITUS_LABS__COMPONENT=b;const w=({size:e,columns:t,gap:n,RNparentWidth:o},{rootSize:c})=>{if(!((e,t)=>a(e)&&a(t))(e,t))return"";const s=e/t*100,l=a(n)?`calc(${s}% - ${n}px)`:`${s}%`;return i.vc.css`
      flex-grow: 0;
      flex-shrink: 0;
      max-width: ${(0,r.S3)([l],c)};
      flex-basis: ${(0,r.S3)([l],c)};
    `},E=(e,t,n)=>{if(!l(t))return"";const o=`${e}: ${(0,r.S3)([t/2],n)}`;return i.vc.css`
      ${o};
    `};var x=i.vc.styled(i.vc.component)`
  ${i.vc.css`
      box-sizing: border-box;
    `};

  position: relative;
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  flex-direction: column;
  justify-content: stretch;

  ${(0,r.EL)({key:"$coolgrid",styles:({theme:e,css:t,rootSize:n})=>{const{size:o,columns:i,gap:c,padding:s,extraStyles:a,RNparentWidth:u}=e;var d;return l(d=o)&&0!==d||void 0===d?t`
      left: initial;
      position: relative;
      ${w({size:o,columns:i,gap:c,RNparentWidth:u},{rootSize:n})};
      ${E("padding",s,n)};
      ${E("margin",c,n)};
      ${(0,r.wV)(a)};
    `:t`
    left: -9999px;
    position: fixed;
    margin: 0;
    padding: 0;
  `},css:i.vc.css,normalize:!0})};
`;const C=({children:e,component:t,css:n,...r})=>{const i=(0,o.useContext)(v),{colCss:c,colComponent:s,columns:l,gap:a,size:d,padding:p}=f({...i,...r});return o.createElement(x,Object.assign({},u(r),{as:t||s,$coolgrid:{columns:l,gap:a,size:d,padding:p,extraStyles:n||c}}),e)},$=`${c}/Col`;C.displayName=$,C.pkgName=c,C.VITUS_LABS__COMPONENT=$},5957:function(e,t,n){"use strict";n.d(t,{W_:function(){return h},aV:function(){return E},C6:function(){return k},xv:function(){return N}});var r=n(3165),o=n(7294),i=n(5019),c=n(3935);const s="@vitus-labs/elements",l={button:!0,fieldset:!0,legend:!0},a=i.vc.css`
    box-sizing: border-box;
  `;var u=i.vc.styled(i.vc.component)`
  position: relative;
  ${a};

  ${({$isInner:e})=>e&&i.vc.css`
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
  `};

  ${(0,r.EL)({key:"$element",styles:({theme:e,css:t})=>t`
    ${"block"===e.contentAlignY&&t`
      height: 100%;
    `};

    ${t`
      ${({$isInner:n})=>!n&&t`
          display: ${e.block?"flex":"inline-flex"};
        `};

      ${({$needsFix:n})=>n&&e.block&&t`
          flex-direction: column;
          width: 100%;
        `};
    `};

    ${"block"===e.contentAlignY&&t`
      height: 100%;
    `};

    ${(0,r.Kv)({direction:e.direction,alignX:e.alignX,alignY:e.alignY})};

    ${e.extraStyles&&(0,r.wV)(e.extraStyles)};
  `,css:i.vc.css,normalize:!0})};
`;const d=(0,o.forwardRef)((({children:e,tag:t,block:n,extendCss:r,direction:i,alignX:c,alignY:s,equalCols:a,isInline:d,...f},p)=>{const g={},m={...f,...g,ref:p,as:t};return!f.dangerouslySetInnerHTML&&t&&(e=>l[e])(t)?o.createElement(u,Object.assign({},m,{$needsFix:!0,$element:{block:n,extraStyles:r}}),o.createElement(u,{as:d?"span":"div",$isInner:!0,$element:{direction:i,alignX:c,alignY:s,equalCols:a}},e)):o.createElement(u,Object.assign({},m,{$element:{block:n,direction:i,alignX:c,alignY:s,equalCols:a,extraStyles:r}}),e)}));var f=i.vc.styled(i.vc.component)`
  ${i.vc.css`
      box-sizing: border-box;
    `};

  display: flex;
  align-self: stretch;
  flex-wrap: wrap;

  ${({$contentType:e})=>"content"===e&&i.vc.css`
    flex: 1;
  `};

  ${(0,r.EL)({key:"$element",styles:({css:e,theme:t,rootSize:n})=>e`
  ${(0,r.Kv)({direction:t.direction,alignX:t.alignX,alignY:t.alignY})};

  ${t.equalCols&&e`
    flex: 1;
  `};

  ${t.gap&&e`
    ${({$contentType:o})=>(({direction:e,type:t,value:n,css:r})=>{if(!e||!t)return;return r`
    ${`${{inline:{before:"margin-right",after:"margin-left"},rows:{before:"margin-bottom",after:"margin-top"}}[e][t]}: ${n};`};
  `})({direction:t.parentDirection,type:o,value:(0,r.S3)([t.gap],n),css:e})}
  `};

  ${t.extraStyles&&(0,r.wV)(t.extraStyles)};
`,css:i.vc.css,normalize:!0})};
`;var p=(0,o.memo)((({contentType:e,tag:t,parentDirection:n,direction:r,alignX:i,alignY:c,equalCols:s,gap:l,extendCss:a,...u})=>{const d={};return o.createElement(f,Object.assign({as:t,$contentType:e,$element:{parentDirection:n,direction:r,alignX:i,alignY:c,equalCols:s,gap:l,extraStyles:a}},d,u))}));const g={span:!0,a:!0,button:!0,input:!0,label:!0,select:!0,textarea:!0,br:!0,img:!0,strong:!0,small:!0,code:!0,b:!0,big:!0,i:!0,tt:!0,abbr:!0,acronym:!0,cite:!0,dfn:!0,em:!0,kbd:!0,samp:!0,var:!0,bdo:!0,map:!0,object:!0,q:!0,script:!0,sub:!0,sup:!0},m={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,source:!0,track:!0,wbr:!0},v="inline",h=(0,o.forwardRef)((({innerRef:e,tag:t,label:n,content:r,children:c,beforeContent:s,afterContent:l,block:a,equalCols:u,gap:f,vertical:h,direction:y,alignX:b="left",alignY:w="center",css:E,contentCss:x,beforeContentCss:C,afterContentCss:$,contentDirection:k="inline",contentAlignX:S="left",contentAlignY:O="center",beforeContentDirection:N="inline",beforeContentAlignX:L="left",beforeContentAlignY:_="center",afterContentDirection:R="inline",afterContentAlignX:A="left",afterContentAlignY:X="center",...z},P)=>{const T=!!z.dangerouslySetInnerHTML||t&&(e=>m[e])(t),U={ref:P||e,extendCss:E,tag:t,block:a,contentDirection:k,alignX:S,alignY:O,as:void 0};if(T)return o.createElement(d,Object.assign({},U,z));const j=!s&&!l,I=c||r||n,Y=(e=>g[e])(t),M=Y?"span":void 0,{wrapperDirection:D,wrapperAlignX:V,wrapperAlignY:q}=(()=>{let e,t=b,n=w;return j?(k&&(e=k),S&&(t=S),O&&(n=O)):e=y||(void 0!==h&&null!==h?(e=>{if(null==e)return;const t=typeof e;return"boolean"===t?e?"rows":"inline":Array.isArray(e)?e.map((e=>e?"rows":"inline")):"object"===t?Object.keys(e).reduce(((t,n)=>(t[n]=e[n]?"rows":"inline",t)),{}):void 0})(h):v),{wrapperDirection:e,wrapperAlignX:t,wrapperAlignY:n}})(),B=(0,o.useMemo)((()=>(0,i.UE)(s)),[s]),W=(0,o.useMemo)((()=>(0,i.UE)(l)),[l]);return o.createElement(d,Object.assign({},z,U,{isInline:Y,direction:D,alignX:V,alignY:q}),s&&o.createElement(p,{tag:M,contentType:"before",parentDirection:D,extendCss:C,direction:N,alignX:L,alignY:_,equalCols:u,gap:f},B),j?(0,i.UE)(I):o.createElement(p,{tag:M,contentType:"content",parentDirection:D,extendCss:x,direction:k,alignX:S,alignY:O,equalCols:u},(0,i.UE)(I)),l&&o.createElement(p,{tag:M,contentType:"after",parentDirection:D,extendCss:$,direction:R,alignX:A,alignY:X,equalCols:u,gap:f},(0,i.UE)(W)))})),y=`${s}/Element`;h.displayName=y,h.pkgName=s,h.VITUS_LABS__COMPONENT=y;const b=({i:e,length:t})=>{const n=e+1;return{index:e,first:1===n,last:n===t,odd:n%2===1,even:n%2===0,position:n}},w=e=>{const{itemKey:t,valueName:n,children:r,component:c,data:s,wrapComponent:l,wrapProps:a,itemProps:u}=e,d=(e,t)=>(0,i.UE)(e,t),f="function"===typeof u?(e,t)=>u(e,t):()=>u,p="function"===typeof a?(e,t)=>a(e,t):()=>a,g=e=>{const r=e.filter((e=>null!==e||void 0!==e)),{length:i}=r;if(0===r.length)return null;return r.map(((e,r)=>{const s=((e,n)=>"function"===typeof t?t(e,n):n)(e,r),g=n||"children",m=b({i:r,length:i}),v={...u?f({[g]:e},m):{},[g]:e},h=a?p({[g]:e},m):{};return l?o.createElement(l,Object.assign({key:s},h),d(c,v)):d(c,{key:s,...v})}))},m=e=>{const n=e.filter((e=>!(0,i.xb)(e))),{length:r}=n;if(0===n.length)return null;return n.map(((e,n)=>{const{component:i,...s}=e,g=i||c,m=((e,n)=>t?"function"===typeof t?t(e,n):"string"===typeof t?e[t]:n:e.key||e.id||e.itemId||n)(s,n),v=b({i:n,length:r}),h={...u?f(e,v):{},...s},y=a?p(e,v):{};return l&&!i?o.createElement(l,Object.assign({key:m},y),d(g,h)):d(g,{key:m,...h})}))};return(()=>{if(r)return(()=>{const{length:e}=r;return u||l?o.Children.map(r,((t,n)=>{const r=n,c=b({i:n,length:e}),s=u?f({},c):{},g=a?p({},c):{};return l?o.createElement(l,Object.assign({key:r},g),d(t,s)):(0,i.UE)(t,{key:n,...s})})):r})();if(c&&Array.isArray(s)){const e=s.filter((e=>null!==e&&void 0!==e));if(e.every((e=>"string"===typeof e||"number"===typeof e)))return g(e);return e.every((e=>"object"===typeof e))?m(e):null}return null})()};w.isIterator=!0,w.RESERVED_PROPS=["children","component","wrapComponent","data","itemKey","valueName","itemProps","wrapProps"],w.displayName="vitus-labs/elements/Iterator";const E=(0,o.forwardRef)((({rootElement:e=!1,...t},n)=>{const r=o.createElement(w,Object.assign({},(0,i.ei)(t,w.RESERVED_PROPS)));return e?o.createElement(h,Object.assign({ref:n},(0,i.CE)(t,w.RESERVED_PROPS)),r):r})),x=`${s}/List`;E.displayName=x,E.pkgName=s,E.VITUS_LABS__COMPONENT=x;const C=({position:e=document.body,tag:t="div",children:n})=>{const[r]=(0,o.useState)(document.createElement(t));return(0,o.useEffect)((()=>(e.appendChild(r),()=>{e.removeChild(r)})),[t,e]),c.createPortal(n,r)},$=`${s}/Portal`;C.displayName=$,C.pkgName=s,C.VITUS_LABS__COMPONENT=$;const k=({children:e,trigger:t,DOMLocation:n,refName:c="ref",triggerRefName:s,contentRefName:l,isOpen:a=!1,openOn:u="click",closeOn:d="click",type:f="dropdown",align:p="bottom",position:g="fixed",alignX:m="left",alignY:v="bottom",offsetX:h=0,offsetY:y=0,throttleDelay:b=200})=>{const{rootSize:w}=(0,o.useContext)(i.Do),[E,x]=(0,o.useState)(a),[$,k]=(0,o.useState)(p),[S,O]=(0,o.useState)(m),[N,L]=(0,o.useState)(v),_=(0,o.useRef)(),R=(0,o.useRef)();(0,o.useEffect)((()=>{E&&P()}),[E]),(0,o.useEffect)((()=>("click"!==u&&"click"!==d&&"triggerClick"!==d||window.addEventListener("click",T,!1),"hover"!==u&&"hover"!==d||window.addEventListener("mousemove",j,!1),window.addEventListener("resize",U,!1),window.addEventListener("scroll",U,!1),window.addEventListener("scroll",j,!1),()=>{window.removeEventListener("resize",U,!1),window.removeEventListener("scroll",U,!1),window.removeEventListener("scroll",j,!1),window.removeEventListener("click",T,!1),window.removeEventListener("mousemove",j,!1)})),[u,d,E]);const A=e=>!!(e&&e.target&&_.current)&&(_.current.contains(e.target)||e.target===_.current),X=()=>{x(!0),"modal"===f&&document.body&&(document.body.style.overflow="hidden")},z=()=>{x(!1),"modal"===f&&document.body&&(document.body.style.overflow="auto")},P=()=>{if(!E)return;if(!_.current||!R.current)return;const e=_.current.getBoundingClientRect(),t=R.current.getBoundingClientRect(),n={position:g};if(["dropdown","tooltip","popover"].includes(f)){if(["top","bottom"].includes(p)){const r=e.top-y-t.height,o=e.bottom+y,i=e.left-h,c=e.right+h-t.width;if("top"===p){const e=r>=0;k(e?"top":"bottom"),n.top=e?r:o}else{const e=o+t.height<=window.innerHeight;k(e?"bottom":"top"),n.top=e?o:r}switch(m){case"right":{const e=c>=0;O(e?"right":"left"),n.left=e?c:i;break}case"center":n.left=e.left+(e.right-e.left)/2-t.width/2;break;case"left":default:{const e=i+t.width<=window.innerWidth;O(e?"left":"right"),n.left=e?i:c;break}}}else if(["left","right"].includes(p)){const r=e.left-h-t.width,o=e.right+h,i=e.top+y,c=e.bottom-y-t.height;if("left"===p){const e=r>=0;k(e?"left":"right"),n.left=e?r:o}else{const e=o+t.width<=window.innerWidth;k(e?"right":"left"),n.left=e?o:r}switch(v){case"top":{const e=i+t.height<=window.innerHeight;L(e?"top":"bottom"),n.top=e?i:c;break}case"center":n.top=e.top-y+(e.bottom-e.top)/2-t.height/2;break;case"bottom":default:{const e=c>=0;L(e?"bottom":"top"),n.top=e?c:i}}}}else if("modal"===f){switch(m){case"right":n.right=h;break;case"left":n.left=h;break;case"center":default:n.left=window.innerWidth/2-t.width/2}switch(v){case"top":n.top=y;break;case"center":n.top=window.innerHeight/2-t.height/2;break;case"bottom":default:n.bottom=y}}R.current.style.position=n.position,R.current.style.top=(0,r.S3)([n.top],w),R.current.style.bottom=(0,r.S3)([n.bottom],w),R.current.style.left=(0,r.S3)([n.left],w),R.current.style.right=(0,r.S3)([n.right],w)},T=e=>{E||("hover"===u&&"mousemove"===e.type&&A(e)&&X(),"click"===u&&"click"===e.type&&A(e)&&X()),E&&("hover"===d&&"mousemove"===e.type&&(A(e)||(e=>!!(e&&e.target&&R.current)&&(R.current.contains(e.target)||e.target===R.current))(e)||z()),"hover"===d&&"scroll"===e.type&&z(),"click"===d&&"click"===e.type&&z(),"triggerClick"===d&&"click"===e.type&&A(e)&&z())},U=(0,i.P2)(P,b),j=(0,i.P2)(T,b),I="manual"===u||"manual"===d;return o.createElement(o.Fragment,null,(0,i.UE)(t,{[s||c]:_,active:E,...I?{showContent:X,hideContent:z}:{}}),E&&o.createElement(C,{position:n},(0,i.UE)(e,{[l||c]:R,active:E,align:$,alignX:S,alignY:N,...I?{showContent:X,hideContent:z}:{}})))},S=`${s}/Ovelay`;k.displayName=S,k.pkgName=s,k.VITUS_LABS__COMPONENT=S;var O=i.vc.styled(i.vc.textComponent)`
  color: inherit;
  font-weight: normal;
  line-height: 1;

  ${(0,r.EL)({key:"$text",styles:({css:e,theme:t})=>e`
  ${t.extraStyles&&(0,r.wV)(t.extraStyles)};
`,css:i.vc.css,normalize:!1})};
`;const N=(0,o.forwardRef)((({paragraph:e,label:t,children:n,tag:r,extendCss:i,...c},s)=>{return l=e?"p":r,o.createElement(O,Object.assign({ref:s,as:l,$text:{extraStyles:i}},c),n||t);var l})),L=`${s}/Text`;N.displayName=L,N.pkgName=s,N.VITUS_LABS__COMPONENT=L,N.isText=!0},6071:function(e,t,n){"use strict";var r=n(3848),o=n(9448);t.default=void 0;var i=o(n(7294)),c=n(1689),s=n(2441),l=n(5749),a={};function u(e,t,n,r){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;a[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),o=n&&n.pathname||"/",d=i.default.useMemo((function(){var t=(0,c.resolveHref)(o,e.href,!0),n=r(t,2),i=n[0],s=n[1];return{href:i,as:e.as?(0,c.resolveHref)(o,e.as):s||i}}),[o,e.href,e.as]),f=d.href,p=d.as,g=e.children,m=e.replace,v=e.shallow,h=e.scroll,y=e.locale;"string"===typeof g&&(g=i.default.createElement("a",null,g));var b=i.Children.only(g),w=b&&"object"===typeof b&&b.ref,E=(0,l.useIntersection)({rootMargin:"200px"}),x=r(E,2),C=x[0],$=x[1],k=i.default.useCallback((function(e){C(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,C]);(0,i.useEffect)((function(){var e=$&&t&&(0,c.isLocalURL)(f),r="undefined"!==typeof y?y:n&&n.locale,o=a[f+"%"+p+(r?"%"+r:"")];e&&!o&&u(n,f,p,{locale:r})}),[p,f,$,y,t,n]);var S={ref:k,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,s,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:i,locale:l,scroll:s}))}(e,n,f,p,m,v,h,y)},onMouseEnter:function(e){(0,c.isLocalURL)(f)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),u(n,f,p,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var O="undefined"!==typeof y?y:n&&n.locale,N=n&&n.isLocaleDomain&&(0,c.getDomainLocale)(p,O,n&&n.locales,n&&n.domainLocales);S.href=N||(0,c.addBasePath)((0,c.addLocale)(p,O,n&&n.defaultLocale))}return i.default.cloneElement(b,S)};t.default=d},5749:function(e,t,n){"use strict";var r=n(3848);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,l=(0,o.useRef)(),a=(0,o.useState)(!1),u=r(a,2),d=u[0],f=u[1],p=(0,o.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),n||d||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,c=r.elements;return c.set(e,t),i.observe(e),function(){c.delete(e),i.unobserve(e),0===c.size&&(i.disconnect(),s.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,o.useEffect)((function(){if(!c&&!d){var e=(0,i.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[d]),[p,d]};var o=n(7294),i=n(8391),c="undefined"!==typeof IntersectionObserver;var s=new Map},1664:function(e,t,n){e.exports=n(6071)},8347:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})},1163:function(e,t,n){e.exports=n(2441)}}]);