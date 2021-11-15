(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[890],{3946:function(e,t,n){"use strict";n.d(t,{JX:function(){return C},W2:function(){return g},X2:function(){return y}});var r=n(3165),o=n(7294),i=n(5019);const c="@vitus-labs/coolgrid",l=["columns","size","gap","padding","gutter","colCss","colComponent","rowCss","rowComponent","contentAlignX"],s=e=>Number.isFinite(e),a=e=>s(e)&&e>0,u=e=>(0,i.CE)(e,l);var f=(0,o.createContext)({});const d=e=>{const{theme:t}=(0,o.useContext)(r.Do),n=((e,t)=>(0,i.ei)(e,t))(e,l);return{...((e={},t={})=>({columns:(0,i.U2)(e,"columns")||(0,i.U2)(t,"grid.columns")||(0,i.U2)(t,"coolgrid.columns"),containerWidth:(0,i.U2)(e,"width")||(0,i.U2)(t,"grid.container")||(0,i.U2)(t,"coolgrid.container")}))(n,t),...n}};var p=i.vc.styled(i.vc.component)`
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
`;const g=({children:e,component:t,css:n,width:r,...i})=>{const{containerWidth:c={},...l}=d(i);let s=c;return r&&(s="function"===typeof r?r(c):r),o.createElement(p,{...u(i),as:t,$coolgrid:{width:s,extraStyles:n}},o.createElement(f.Provider,{value:l},e))},m=`${c}/Container`;g.displayName=m,g.pkgName=c,g.VITUS_LABS__COMPONENT=m;var v=(0,o.createContext)({});var h=i.vc.styled(i.vc.component)`
  ${i.vc.css`
      box-sizing: border-box;
    `};

  display: flex;
  flex-wrap: wrap;
  align-self: stretch;
  flex-direction: row;

  ${(0,r.EL)({key:"$coolgrid",styles:({theme:e,css:t,rootSize:n})=>{const{gap:o,gutter:c,contentAlignX:l,extraStyles:a}=e;return t`
    ${(({gap:e,gutter:t},{rootSize:n})=>{if(!s(e))return"";const o=e=>(0,r.S3)([e],n),c=e/2*-1,l=s(t)?t-e/2:e/2;return i.vc.css`
    margin: ${o(l)} ${o(c)};
  `})({gap:o,gutter:c},{rootSize:n})};
    ${u=l,u?i.vc.css`
    justify-content: ${r.cP[u]};
  `:""};
    ${(0,r.wV)(a)};
  `;var u},css:i.vc.css,normalize:!0})};
`;const y=({children:e,component:t,css:n,contentAlignX:r,...i})=>{const c=(0,o.useContext)(f),{columns:l,gap:s,gutter:a,rowComponent:p,rowCss:g,contentAlignX:m,...y}=d({...c,...i}),b={...u(i),as:t||p,$coolgrid:{contentAlignX:r||m,columns:l,gap:s,gutter:a,extraStyles:n||g}};return o.createElement(h,{...b},o.createElement(v.Provider,{value:{...y,columns:l,gap:s,gutter:a}},e))},b=`${c}/Row`;y.displayName=b,y.pkgName=c,y.VITUS_LABS__COMPONENT=b;const w=({size:e,columns:t,gap:n,RNparentWidth:o},{rootSize:c})=>{if(!((e,t)=>a(e)&&a(t))(e,t))return"";const l=e/t*100,s=a(n)?`calc(${l}% - ${n}px)`:`${l}%`;return i.vc.css`
      flex-grow: 0;
      flex-shrink: 0;
      max-width: ${(0,r.S3)([s],c)};
      flex-basis: ${(0,r.S3)([s],c)};
    `},E=(e,t,n)=>{if(!s(t))return"";const o=`${e}: ${(0,r.S3)([t/2],n)}`;return i.vc.css`
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

  ${(0,r.EL)({key:"$coolgrid",styles:({theme:e,css:t,rootSize:n})=>{const{size:o,columns:i,gap:c,padding:l,extraStyles:a,RNparentWidth:u}=e;var f;return s(f=o)&&0!==f||void 0===f?t`
      left: initial;
      position: relative;
      ${w({size:o,columns:i,gap:c,RNparentWidth:u},{rootSize:n})};
      ${E("padding",l,n)};
      ${E("margin",c,n)};
      ${(0,r.wV)(a)};
    `:t`
    left: -9999px;
    position: fixed;
    margin: 0;
    padding: 0;
  `},css:i.vc.css,normalize:!0})};
`;const C=({children:e,component:t,css:n,...r})=>{const i=(0,o.useContext)(v),{colCss:c,colComponent:l,columns:s,gap:a,size:f,padding:p}=d({...i,...r});return o.createElement(x,{...u(r),as:t||l,$coolgrid:{columns:s,gap:a,size:f,padding:p,extraStyles:n||c}},e)},$=`${c}/Col`;C.displayName=$,C.pkgName=c,C.VITUS_LABS__COMPONENT=$},5957:function(e,t,n){"use strict";n.d(t,{W_:function(){return h},aV:function(){return E},C6:function(){return k},xv:function(){return L}});var r=n(3165),o=n(7294),i=n(5019),c=n(3935);const l="@vitus-labs/elements",s={button:!0,fieldset:!0,legend:!0},a=i.vc.css`
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
`;const f=(0,o.forwardRef)((({children:e,tag:t,block:n,extendCss:r,direction:i,alignX:c,alignY:l,equalCols:a,isInline:f,...d},p)=>{const g={},m={...d,...g,ref:p,as:t};return!d.dangerouslySetInnerHTML&&t&&(e=>s[e])(t)?o.createElement(u,{...m,$needsFix:!0,$element:{block:n,extraStyles:r}},o.createElement(u,{as:f?"span":"div",$isInner:!0,$element:{direction:i,alignX:c,alignY:l,equalCols:a}},e)):o.createElement(u,{...m,$element:{block:n,direction:i,alignX:c,alignY:l,equalCols:a,extraStyles:r}},e)}));var d=i.vc.styled(i.vc.component)`
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
`;var p=(0,o.memo)((({contentType:e,tag:t,parentDirection:n,direction:r,alignX:i,alignY:c,equalCols:l,gap:s,extendCss:a,...u})=>{const f={};return o.createElement(d,{as:t,$contentType:e,$element:{parentDirection:n,direction:r,alignX:i,alignY:c,equalCols:l,gap:s,extraStyles:a},...f,...u})}));const g={span:!0,a:!0,button:!0,input:!0,label:!0,select:!0,textarea:!0,br:!0,img:!0,strong:!0,small:!0,code:!0,b:!0,big:!0,i:!0,tt:!0,abbr:!0,acronym:!0,cite:!0,dfn:!0,em:!0,kbd:!0,samp:!0,var:!0,bdo:!0,map:!0,object:!0,q:!0,script:!0,sub:!0,sup:!0},m={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,source:!0,track:!0,wbr:!0},v="inline",h=(0,o.forwardRef)((({innerRef:e,tag:t,label:n,content:r,children:c,beforeContent:l,afterContent:s,block:a,equalCols:u,gap:d,vertical:h,direction:y,alignX:b="left",alignY:w="center",css:E,contentCss:x,beforeContentCss:C,afterContentCss:$,contentDirection:k="inline",contentAlignX:S="left",contentAlignY:N="center",beforeContentDirection:L="inline",beforeContentAlignX:O="left",beforeContentAlignY:_="center",afterContentDirection:z="inline",afterContentAlignX:P="left",afterContentAlignY:R="center",...U},A)=>{const X=!!U.dangerouslySetInnerHTML||t&&(e=>m[e])(t),T={ref:A||e,extendCss:E,tag:t,block:a,contentDirection:k,alignX:S,alignY:N,as:void 0};if(X)return o.createElement(f,{...T,...U});const I=!l&&!s,M=c||r||n,Y=(e=>g[e])(t),D=Y?"span":void 0,{wrapperDirection:V,wrapperAlignX:j,wrapperAlignY:q}=(()=>{let e,t=b,n=w;return I?(k&&(e=k),S&&(t=S),N&&(n=N)):e=y||(void 0!==h&&null!==h?(e=>{if(null==e)return;const t=typeof e;return"boolean"===t?e?"rows":"inline":Array.isArray(e)?e.map((e=>e?"rows":"inline")):"object"===t?Object.keys(e).reduce(((t,n)=>(t[n]=e[n]?"rows":"inline",t)),{}):void 0})(h):v),{wrapperDirection:e,wrapperAlignX:t,wrapperAlignY:n}})(),B=(0,o.useMemo)((()=>(0,i.UE)(l)),[l]),W=(0,o.useMemo)((()=>(0,i.UE)(s)),[s]);return o.createElement(f,{...U,...T,isInline:Y,direction:V,alignX:j,alignY:q},l&&o.createElement(p,{tag:D,contentType:"before",parentDirection:V,extendCss:C,direction:L,alignX:O,alignY:_,equalCols:u,gap:d},B),I?(0,i.UE)(M):o.createElement(p,{tag:D,contentType:"content",parentDirection:V,extendCss:x,direction:k,alignX:S,alignY:N,equalCols:u},(0,i.UE)(M)),s&&o.createElement(p,{tag:D,contentType:"after",parentDirection:V,extendCss:$,direction:z,alignX:P,alignY:R,equalCols:u,gap:d},(0,i.UE)(W)))})),y=`${l}/Element`;h.displayName=y,h.pkgName=l,h.VITUS_LABS__COMPONENT=y;const b=({i:e,length:t})=>{const n=e+1;return{index:e,first:1===n,last:n===t,odd:n%2===1,even:n%2===0,position:n}},w=e=>{const{itemKey:t,valueName:n,children:r,component:c,data:l,wrapComponent:s,wrapProps:a,itemProps:u}=e,f="function"===typeof u?(e,t)=>u(e,t):()=>u,d="function"===typeof a?(e,t)=>a(e,t):()=>a,p=e=>{const r=e.filter((e=>null!==e||void 0!==e)),{length:l}=r;if(0===r.length)return null;return r.map(((e,r)=>{const p=((e,n)=>"function"===typeof t?t(e,n):n)(e,r),g=n||"children",m=b({i:r,length:l}),v={...u?f({[g]:e},m):{},[g]:e},h=a?d({[g]:e},m):{};return s?o.createElement(s,{key:p,...h},(0,i.UE)(c,v)):(0,i.UE)(c,{key:p,...v})}))},g=e=>{const n=e.filter((e=>!(0,i.xb)(e))),{length:r}=n;if(0===n.length)return null;return n.map(((e,n)=>{const{component:l,...p}=e,g=l||c,m=((e,n)=>t?"function"===typeof t?t(e,n):"string"===typeof t?e[t]:n:e.key||e.id||e.itemId||n)(p,n),v=b({i:n,length:r}),h={...u?f(e,v):{},...p},y=a?d(e,v):{};return s&&!l?o.createElement(s,{key:m,...y},(0,i.UE)(g,h)):(0,i.UE)(g,{key:m,...h})}))};return(()=>{if(r)return(()=>{const{length:e}=r;return u||s?o.Children.map(r,((t,n)=>{const r=n,c=b({i:n,length:e}),l=u?f({},c):{},p=a?d({},c):{};return s?o.createElement(s,{key:r,...p},(0,i.UE)(t,l)):(0,i.UE)(t,{key:n,...l})})):r})();if(c&&Array.isArray(l)){const e=l.filter((e=>null!==e&&void 0!==e));if(e.every((e=>"string"===typeof e||"number"===typeof e)))return p(e);return e.every((e=>"object"===typeof e))?g(e):null}return null})()};w.isIterator=!0,w.RESERVED_PROPS=["children","component","wrapComponent","data","itemKey","valueName","itemProps","wrapProps"],w.displayName="vitus-labs/elements/Iterator";const E=(0,o.forwardRef)((({rootElement:e=!1,...t},n)=>{const r=o.createElement(w,{...(0,i.ei)(t,w.RESERVED_PROPS)});return e?o.createElement(h,{ref:n,...(0,i.CE)(t,w.RESERVED_PROPS)},r):r})),x=`${l}/List`;E.displayName=x,E.pkgName=l,E.VITUS_LABS__COMPONENT=x;const C=({position:e=document.body,tag:t="div",children:n})=>{const[r]=(0,o.useState)(document.createElement(t));return(0,o.useEffect)((()=>(e.appendChild(r),()=>{e.removeChild(r)})),[t,e]),c.createPortal(n,r)},$=`${l}/Portal`;C.displayName=$,C.pkgName=l,C.VITUS_LABS__COMPONENT=$;const k=({children:e,trigger:t,DOMLocation:n,refName:c="ref",triggerRefName:l,contentRefName:s,isOpen:a=!1,openOn:u="click",closeOn:f="click",type:d="dropdown",align:p="bottom",position:g="fixed",alignX:m="left",alignY:v="bottom",offsetX:h=0,offsetY:y=0,throttleDelay:b=200})=>{const{rootSize:w}=(0,o.useContext)(i.Do),[E,x]=(0,o.useState)(a),[$,k]=(0,o.useState)(p),[S,N]=(0,o.useState)(m),[L,O]=(0,o.useState)(v),_=(0,o.useRef)(),z=(0,o.useRef)();(0,o.useEffect)((()=>{E&&A()}),[E]),(0,o.useEffect)((()=>("click"!==u&&"click"!==f&&"triggerClick"!==f||window.addEventListener("click",X,!1),"hover"!==u&&"hover"!==f||window.addEventListener("mousemove",I,!1),window.addEventListener("resize",T,!1),window.addEventListener("scroll",T,!1),window.addEventListener("scroll",I,!1),()=>{window.removeEventListener("resize",T,!1),window.removeEventListener("scroll",T,!1),window.removeEventListener("scroll",I,!1),window.removeEventListener("click",X,!1),window.removeEventListener("mousemove",I,!1)})),[u,f,E]);const P=e=>!!(e&&e.target&&_.current)&&(_.current.contains(e.target)||e.target===_.current),R=()=>{x(!0),"modal"===d&&document.body&&(document.body.style.overflow="hidden")},U=()=>{x(!1),"modal"===d&&document.body&&(document.body.style.overflow="auto")},A=()=>{if(!E)return;if(!_.current||!z.current)return;const e=_.current.getBoundingClientRect(),t=z.current.getBoundingClientRect(),n={position:g};if(["dropdown","tooltip","popover"].includes(d)){if(["top","bottom"].includes(p)){const r=e.top-y-t.height,o=e.bottom+y,i=e.left-h,c=e.right+h-t.width;if("top"===p){const e=r>=0;k(e?"top":"bottom"),n.top=e?r:o}else{const e=o+t.height<=window.innerHeight;k(e?"bottom":"top"),n.top=e?o:r}switch(m){case"right":{const e=c>=0;N(e?"right":"left"),n.left=e?c:i;break}case"center":n.left=e.left+(e.right-e.left)/2-t.width/2;break;case"left":default:{const e=i+t.width<=window.innerWidth;N(e?"left":"right"),n.left=e?i:c;break}}}else if(["left","right"].includes(p)){const r=e.left-h-t.width,o=e.right+h,i=e.top+y,c=e.bottom-y-t.height;if("left"===p){const e=r>=0;k(e?"left":"right"),n.left=e?r:o}else{const e=o+t.width<=window.innerWidth;k(e?"right":"left"),n.left=e?o:r}switch(v){case"top":{const e=i+t.height<=window.innerHeight;O(e?"top":"bottom"),n.top=e?i:c;break}case"center":n.top=e.top-y+(e.bottom-e.top)/2-t.height/2;break;case"bottom":default:{const e=c>=0;O(e?"bottom":"top"),n.top=e?c:i}}}}else if("modal"===d){switch(m){case"right":n.right=h;break;case"left":n.left=h;break;case"center":default:n.left=window.innerWidth/2-t.width/2}switch(v){case"top":n.top=y;break;case"center":n.top=window.innerHeight/2-t.height/2;break;case"bottom":default:n.bottom=y}}z.current.style.position=n.position,z.current.style.top=(0,r.S3)([n.top],w),z.current.style.bottom=(0,r.S3)([n.bottom],w),z.current.style.left=(0,r.S3)([n.left],w),z.current.style.right=(0,r.S3)([n.right],w)},X=e=>{E||("hover"===u&&"mousemove"===e.type&&P(e)&&R(),"click"===u&&"click"===e.type&&P(e)&&R()),E&&("hover"===f&&"mousemove"===e.type&&(P(e)||(e=>!!(e&&e.target&&z.current)&&(z.current.contains(e.target)||e.target===z.current))(e)||U()),"hover"===f&&"scroll"===e.type&&U(),"click"===f&&"click"===e.type&&U(),"triggerClick"===f&&"click"===e.type&&P(e)&&U())},T=(0,i.P2)(A,b),I=(0,i.P2)(X,b),M="manual"===u||"manual"===f;return o.createElement(o.Fragment,null,(0,i.UE)(t,{[l||c]:_,active:E,...M?{showContent:R,hideContent:U}:{}}),E&&o.createElement(C,{position:n},(0,i.UE)(e,{[s||c]:z,active:E,align:$,alignX:S,alignY:L,...M?{showContent:R,hideContent:U}:{}})))},S=`${l}/Ovelay`;k.displayName=S,k.pkgName=l,k.VITUS_LABS__COMPONENT=S;var N=i.vc.styled(i.vc.textComponent)`
  color: inherit;
  font-weight: normal;
  line-height: 1;

  ${(0,r.EL)({key:"$text",styles:({css:e,theme:t})=>e`
  ${t.extraStyles&&(0,r.wV)(t.extraStyles)};
`,css:i.vc.css,normalize:!1})};
`;const L=(0,o.forwardRef)((({paragraph:e,label:t,children:n,tag:r,extendCss:i,...c},l)=>{return s=e?"p":r,o.createElement(N,{ref:l,as:s,$text:{extraStyles:i},...c},n||t);var s})),O=`${l}/Text`;L.displayName=O,L.pkgName=l,L.VITUS_LABS__COMPONENT=O,L.isText=!0},7942:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var o,i=(o=n(7294))&&o.__esModule?o:{default:o},c=n(4957),l=n(9898),s=n(639);var a={};function u(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;a[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=l.useRouter(),f=i.default.useMemo((function(){var t=c.resolveHref(o,e.href,!0),n=r(t,2),i=n[0],l=n[1];return{href:i,as:e.as?c.resolveHref(o,e.as):l||i}}),[o,e.href,e.as]),d=f.href,p=f.as,g=e.children,m=e.replace,v=e.shallow,h=e.scroll,y=e.locale;"string"===typeof g&&(g=i.default.createElement("a",null,g));var b=(t=i.default.Children.only(g))&&"object"===typeof t&&t.ref,w=s.useIntersection({rootMargin:"200px"}),E=r(w,2),x=E[0],C=E[1],$=i.default.useCallback((function(e){x(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,x]);i.default.useEffect((function(){var e=C&&n&&c.isLocalURL(d),t="undefined"!==typeof y?y:o&&o.locale,r=a[d+"%"+p+(t?"%"+t:"")];e&&!r&&u(o,d,p,{locale:t})}),[p,d,C,y,n,o]);var k={ref:$,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,l,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),null==l&&r.indexOf("#")>=0&&(l=!1),t[o?"replace":"push"](n,r,{shallow:i,locale:s,scroll:l}))}(e,o,d,p,m,v,h,y)},onMouseEnter:function(e){c.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var S="undefined"!==typeof y?y:o&&o.locale,N=o&&o.isLocaleDomain&&c.getDomainLocale(p,S,o&&o.locales,o&&o.domainLocales);k.href=N||c.addBasePath(c.addLocale(p,S,o&&o.defaultLocale))}return i.default.cloneElement(t,k)};t.default=f},639:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,s=o.useRef(),a=o.useState(!1),u=r(a,2),f=u[0],d=u[1],p=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,c=r.elements;return c.set(e,t),i.observe(e),function(){c.delete(e),i.unobserve(e),0===c.size&&(i.disconnect(),l.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return o.useEffect((function(){if(!c&&!f){var e=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=n(7294),i=n(6286),c="undefined"!==typeof IntersectionObserver;var l=new Map},1664:function(e,t,n){e.exports=n(7942)},1163:function(e,t,n){e.exports=n(9898)},1164:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})},2209:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{Z:function(){return r}})}}]);