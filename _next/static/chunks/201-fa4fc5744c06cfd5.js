(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[201],{3946:function(e,t,r){"use strict";r.d(t,{JX:function(){return P},W2:function(){return h},X2:function(){return S}});var n=r(3098),l=r(7294),o=r(5019);let i="@vitus-labs/coolgrid",c=["columns","size","gap","padding","gutter","colCss","colComponent","rowCss","rowComponent","contentAlignX"],s=e=>Number.isFinite(e),a=e=>s(e)&&e>0,u=e=>s(e)&&0!==e||void 0===e,f=e=>(0,o.CE)(e,c);var m=(0,l.createContext)({});let d=(e,t)=>(0,o.ei)(e,t),p=(e={},t={})=>({columns:(0,o.U2)(e,"columns")||(0,o.U2)(t,"grid.columns")||(0,o.U2)(t,"coolgrid.columns"),containerWidth:(0,o.U2)(e,"width")||(0,o.U2)(t,"grid.container")||(0,o.U2)(t,"coolgrid.container")}),g=e=>{let{theme:t}=(0,l.useContext)(n.Do),r=d(e,c),o=p(r,t);return{...o,...r}},y=({theme:e,css:t,rootSize:r})=>t`
  max-width: ${(0,n.S3)(e.width,r)};
  ${(0,n.wV)(e.extraStyles)};
`;var b=o.vc.styled(o.vc.component)`
  ${o.vc.css`
      box-sizing: border-box;
    `};

  display: flex;
  width: 100%;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;

  ${(0,n.EL)({key:"$coolgrid",styles:y,css:o.vc.css,normalize:!0})};
`;let h=({children:e,component:t,css:r,width:n,...o})=>{let{containerWidth:i={},...c}=g(o),s=(0,l.useMemo)(()=>c,[c]),a=i;n&&(a="function"==typeof n?n(i):n);let u=(0,l.useMemo)(()=>({$coolgrid:{width:a,extraStyles:r}}),[a,r]);return l.createElement(b,{...f(o),as:t,...u},l.createElement(m.Provider,{value:s},e))},v=`${i}/Container`;h.displayName=v,h.pkgName=i,h.VITUS_LABS__COMPONENT=v;var w=(0,l.createContext)({});let x=({gap:e,gutter:t},{rootSize:r})=>{if(!s(e))return"";let l=e=>(0,n.S3)(e,r),i=s(t)?t-e/2:e/2;return o.vc.css`
    margin: ${l(i)} ${l(-(e/2*1))};
  `},$=e=>e?o.vc.css`
    justify-content: ${n.cP[e]};
  `:"",E=({theme:e,css:t,rootSize:r})=>{let{gap:l,gutter:o,contentAlignX:i,extraStyles:c}=e;return t`
    ${x({gap:l,gutter:o},{rootSize:r})};
    ${$(i)};
    ${(0,n.wV)(c)};
  `};var k=o.vc.styled(o.vc.component)`
  ${o.vc.css`
      box-sizing: border-box;
    `};

  display: flex;
  flex-wrap: wrap;
  align-self: stretch;
  flex-direction: row;

  ${(0,n.EL)({key:"$coolgrid",styles:E,css:o.vc.css,normalize:!0})};
`;let S=({children:e,component:t,css:r,contentAlignX:n,...o})=>{let i=(0,l.useContext)(m),{columns:c,gap:s,gutter:a,rowComponent:u,rowCss:d,contentAlignX:p,...y}=g({...i,...o}),b=(0,l.useMemo)(()=>({...y,columns:c,gap:s,gutter:a}),[y,c,s,a]),h=(0,l.useMemo)(()=>t||u,[t,u]),v=(0,l.useMemo)(()=>({$coolgrid:{contentAlignX:n||p,columns:c,gap:s,gutter:a,extraStyles:r||d}}),[n,p,c,s,a,r,d]);return l.createElement(k,{...f(o),as:h,...v},l.createElement(w.Provider,{value:b},e))},C=`${i}/Row`;S.displayName=C,S.pkgName=i,S.VITUS_LABS__COMPONENT=C;let N=(e,t)=>a(e)&&a(t),_=({size:e,columns:t,gap:r,RNparentWidth:l},{rootSize:i})=>{if(!N(e,t))return"";let c=e/t*100,s=a(r),u=s?`calc(${c}% - ${r}px)`:`${c}%`;return o.vc.css`
      flex-grow: 0;
      flex-shrink: 0;
      max-width: ${(0,n.S3)(u,i)};
      flex-basis: ${(0,n.S3)(u,i)};
    `},L=(e,t,r)=>{if(!s(t))return"";let l=`${e}: ${(0,n.S3)(t/2,r)}`;return o.vc.css`
      ${l};
    `},T=({theme:e,css:t,rootSize:r})=>{let{size:l,columns:o,gap:i,padding:c,extraStyles:s,RNparentWidth:a}=e,f=u(l);return f?t`
      left: initial;
      position: relative;
      ${_({size:l,columns:o,gap:i,RNparentWidth:a},{rootSize:r})};
      ${L("padding",c,r)};
      ${L("margin",i,r)};
      ${(0,n.wV)(s)};
    `:t`
    left: -9999px;
    position: fixed;
    margin: 0;
    padding: 0;
  `};var O=o.vc.styled(o.vc.component)`
  ${o.vc.css`
      box-sizing: border-box;
    `};

  position: relative;
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  flex-direction: column;
  justify-content: stretch;

  ${(0,n.EL)({key:"$coolgrid",styles:T,css:o.vc.css,normalize:!0})};
`;let P=({children:e,component:t,css:r,...n})=>{let o=(0,l.useContext)(w),{colCss:i,colComponent:c,columns:s,gap:a,size:u,padding:m}=g({...o,...n}),d=(0,l.useMemo)(()=>t||c,[t,c]),p=(0,l.useMemo)(()=>({$coolgrid:{columns:s,gap:a,size:u,padding:m,extraStyles:r||i}}),[s,a,u,m,r,i]);return l.createElement(O,{...f(n),as:d,...p},e)},M=`${i}/Col`;P.displayName=M,P.pkgName=i,P.VITUS_LABS__COMPONENT=M},5957:function(e,t,r){"use strict";r.d(t,{C6:function(){return q},W_:function(){return R},aV:function(){return z},h_:function(){return X},xv:function(){return Q}});var n=r(3098),l=r(7294),o=r(5019),i=r(6708),c=r(3935);let s="@vitus-labs/elements",a={button:!0,fieldset:!0,legend:!0},u=e=>!!e&&e in a,f=`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
`,m=`
  flex-direction: column;
`,d=`
  width: 100%;
`,p=`
  height: 100%;
`,g=`
  align-self: stretch;
`,y=e=>`display: ${e?"flex":"inline-flex"};`,b=({theme:e,css:t})=>t`
  ${"block"===e.alignY&&p};

  ${(0,n.Kv)({direction:e.direction,alignX:e.alignX,alignY:e.alignY})};

  ${e.block&&g};

  ${!e.childFix&&y(e.block)};
  ${e.parentFix&&e.block&&d};
  ${e.parentFix&&m};

  ${e.extraStyles&&(0,n.wV)(e.extraStyles)};
`;var h=o.vc.styled(o.vc.component)`
  position: relative;
  ${"box-sizing: border-box;"};

  ${({$childFix:e})=>e&&f};

  ${(0,n.EL)({key:"$element",styles:b,css:o.vc.css,normalize:!0})};
`;let v=(0,l.forwardRef)(({children:e,tag:t,block:r,extendCss:n,direction:o,alignX:i,alignY:c,equalCols:s,isInline:a,...f},m)=>{let d={...f,ref:m,as:t},p=!f.dangerouslySetInnerHTML&&t&&u(t);return p?l.createElement(h,{...d,$element:{parentFix:!0,block:r,extraStyles:n}},l.createElement(h,{as:a?"span":"div",$childFix:!0,$element:{childFix:!0,direction:o,alignX:i,alignY:c,equalCols:s}},e)):l.createElement(h,{...d,$element:{block:r,direction:o,alignX:i,alignY:c,equalCols:s,extraStyles:n}},e)}),w=`
  flex: 1;
`,x=`
  flex: 1;
`,$={inline:{before:"margin-right",after:"margin-left"},rows:{before:"margin-bottom",after:"margin-top"}},E=({direction:e,type:t,value:r})=>{if(!e||!t)return;let n=`${$[e][t]}: ${r};`;return n},k=({css:e,theme:t,rootSize:r})=>e`
  ${(0,n.Kv)({direction:t.direction,alignX:t.alignX,alignY:t.alignY})};

  ${t.equalCols&&w};

  ${t.gap&&t.contentType&&E({direction:t.parentDirection,type:t.contentType,value:(0,n.S3)(t.gap,r)})};

  ${t.extraStyles&&(0,n.wV)(t.extraStyles)};
`;var S=o.vc.styled(o.vc.component)`
  ${"box-sizing: border-box;"};

  display: flex;
  align-self: stretch;
  flex-wrap: wrap;

  ${({$contentType:e})=>"content"===e&&x};

  ${(0,n.EL)({key:"$element",styles:k,css:o.vc.css,normalize:!0})};
`;let C=({contentType:e,tag:t,parentDirection:r,direction:n,alignX:o,alignY:i,equalCols:c,gap:s,extendCss:a,...u})=>l.createElement(S,{as:t,$contentType:e,$element:{contentType:e,parentDirection:r,direction:n,alignX:o,alignY:i,equalCols:c,gap:s,extraStyles:a},...u});var N=(0,l.memo)(C);let _={span:!0,a:!0,button:!0,input:!0,label:!0,select:!0,textarea:!0,br:!0,img:!0,strong:!0,small:!0,code:!0,b:!0,big:!0,i:!0,tt:!0,abbr:!0,acronym:!0,cite:!0,dfn:!0,em:!0,kbd:!0,samp:!0,var:!0,bdo:!0,map:!0,object:!0,q:!0,script:!0,sub:!0,sup:!0},L={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,source:!0,track:!0,wbr:!0},T=e=>!!e&&e in _,O=e=>!!e&&e in L,P="inline",M="left",Y="center",R=(0,l.forwardRef)(({innerRef:e,tag:t,label:r,content:n,children:i,beforeContent:c,afterContent:s,block:a,equalCols:u,gap:f,direction:m,alignX:d=M,alignY:p=Y,css:g,contentCss:y,beforeContentCss:b,afterContentCss:h,contentDirection:w="rows",contentAlignX:x=M,contentAlignY:$=Y,beforeContentDirection:E=P,beforeContentAlignX:k=M,beforeContentAlignY:S=Y,afterContentDirection:C=P,afterContentAlignX:_=M,afterContentAlignY:L=Y,...R},V)=>{let U=!!R.dangerouslySetInnerHTML||t&&O(t),A=!c&&!s,z=T(t),I=z?"span":void 0,{wrapperDirection:X,wrapperAlignX:B,wrapperAlignY:F}=(0,l.useMemo)(()=>{let e=m,t=d,r=p;return A?(w&&(e=w),x&&(t=x),$&&(r=$)):e=m||P,{wrapperDirection:e,wrapperAlignX:t,wrapperAlignY:r}},[A,w,x,$,d,p,m]),D={ref:V||e,extendCss:g,tag:t,block:a,direction:X,alignX:B,alignY:F,as:void 0};if(U)return l.createElement(v,{...R,...D});let W=(0,o.sY)(i||n||r);return l.createElement(v,{...R,...D,isInline:z},c&&l.createElement(N,{tag:I,contentType:"before",parentDirection:X,extendCss:b,direction:E,alignX:k,alignY:S,equalCols:u,gap:f},(0,o.sY)(c)),A?W:l.createElement(N,{tag:I,contentType:"content",parentDirection:X,extendCss:y,direction:w,alignX:x,alignY:$,equalCols:u},W),s&&l.createElement(N,{tag:I,contentType:"after",parentDirection:X,extendCss:h,direction:C,alignX:_,alignY:L,equalCols:u,gap:f},(0,o.sY)(s)))}),V=`${s}/Element`;R.displayName=V,R.pkgName=s,R.VITUS_LABS__COMPONENT=V;let U=({i:e,length:t})=>{let r=e+1;return{index:e,first:1===r,last:r===t,odd:r%2==1,even:r%2==0,position:r}},A=e=>{let{itemKey:t,valueName:r,children:n,component:c,data:s,wrapComponent:a,wrapProps:u,itemProps:f}=e,m=(0,l.useMemo)(()=>"function"==typeof f?f:()=>f,[f]),d=(0,l.useMemo)(()=>"function"==typeof u?u:()=>u,[u]),p=(0,l.useCallback)((e,r)=>"function"==typeof t?t(e,r):r,[t]),g=(e,t=1,r=0)=>{let n=U({i:r,length:t}),i=f?m({},n):{},c=u?d({},n):{};return f||a?a?l.createElement(a,{key:r,...c},(0,o.sY)(e,i)):(0,o.sY)(e,{key:r,...i}):e},y=()=>{if(!n)return null;if(Array.isArray(n))return l.Children.map(n,(e,t)=>g(e,n.length,t));if((0,i.isFragment)(n)){let e=n.props.children;return e.map((t,r)=>g(t,e.length,r))}return g(n)},b=e=>{let{length:t}=e;return 0===e.length?null:e.map((e,n)=>{let i=p(e,n),s=r||"children",g=U({i:n,length:t}),y={...f?m({[s]:e},g):{},[s]:e},b=u?d({[s]:e},g):{};return a?l.createElement(a,{key:i,...b},(0,o.sY)(c,y)):(0,o.sY)(c,{key:i,...y})})},h=e=>{let r=e.filter(e=>!(0,o.xb)(e)),{length:n}=r;if(0===r.length)return null;let i=(e,r)=>t?"function"==typeof t?t(e,r):"string"==typeof t?e[t]:r:e.key||e.id||e.itemId||r;return r.map((e,t)=>{let{component:r,...s}=e,p=r||c,g=i(s,t),y=U({i:t,length:n}),b={...f?m(e,y):{},...s},h=u?d(e,y):{};return a&&!r?l.createElement(a,{key:g,...h},(0,o.sY)(p,b)):(0,o.sY)(p,{key:g,...b})})};return(()=>{if(n)return y();if(c&&Array.isArray(s)){let e=s.filter(e=>null!=e),t=e.every(e=>"string"==typeof e||"number"==typeof e);if(t)return b(e);let r=e.every(e=>"object"==typeof e);if(r)return h(e)}return null})()};A.isIterator=!0,A.RESERVED_PROPS=["children","component","wrapComponent","data","itemKey","valueName","itemProps","wrapProps"];let z=(0,l.forwardRef)(({rootElement:e=!1,...t},r)=>{let n=l.createElement(A,{...(0,o.ei)(t,A.RESERVED_PROPS)});return e?l.createElement(R,{ref:r,...(0,o.CE)(t,A.RESERVED_PROPS)},n):n}),I=`${s}/List`;z.displayName=I,z.pkgName=s,z.VITUS_LABS__COMPONENT=I;let X=({DOMLocation:e,tag:t="div",children:r})=>{let[n,o]=(0,l.useState)();return((0,l.useEffect)(()=>{if(!t)return;let r=e||document.body,n=document.createElement(t);return o(n),r.appendChild(n),()=>{r.removeChild(n)}},[t,e]),t&&n)?(0,c.createPortal)(r,n):null},B=`${s}/Portal`;X.displayName=B,X.pkgName=s,X.VITUS_LABS__COMPONENT=B;let F=(0,l.createContext)({}),{Provider:D}=F,W=()=>(0,l.useContext)(F),H=({children:e,blocked:t,setBlocked:r,setUnblocked:n})=>{let o=(0,l.useMemo)(()=>({blocked:t,setBlocked:r,setUnblocked:n}),[t,r,n]);return l.createElement(D,{value:o},e)},j=({isOpen:e=!1,openOn:t="click",closeOn:r="click",type:i="dropdown",position:c="fixed",align:s="bottom",alignX:a="left",alignY:u="bottom",offsetX:f=0,offsetY:m=0,throttleDelay:d=200,parentContainer:p,closeOnEsc:g=!0,disabled:y,onOpen:b,onClose:h}={})=>{let{rootSize:v}=(0,l.useContext)(o.Do),w=W(),[x,$]=(0,l.useState)(!1),[E,k]=(0,l.useState)(a),[S,C]=(0,l.useState)(u),[N,_]=(0,l.useState)(!1),[L,T]=(0,l.useState)(e),O=(0,l.useRef)(),P=(0,l.useRef)(),M=(0,l.useCallback)(()=>_(!0),[]),Y=(0,l.useCallback)(()=>_(!1),[]),R=(0,l.useCallback)(()=>{T(!0)},[]),V=(0,l.useCallback)(()=>{T(!1)},[]),U=(0,l.useCallback)(()=>{let e={};if(!L||!x||!O.current||!P.current)return e;let t=O.current.getBoundingClientRect(),r=P.current.getBoundingClientRect();if(["dropdown","tooltip","popover"].includes(i)){if(["top","bottom"].includes(s)){let n=t.top-m-r.height,l=t.bottom+m,o=t.left+f,i=t.right-f-r.width,c=n>=0,u=l+r.height<=window.innerHeight,d=o+r.width<=window.innerWidth,p=i>=0;if("top"===s?(C(c?"top":"bottom"),e.top=c?n:l):"bottom"===s&&(C(u?"bottom":"top"),e.top=u?l:n),"left"===a)k(d?"left":"right"),e.left=d?o:i;else if("center"===a){let n=t.left+(t.right-t.left)/2-r.width/2,l=n>=0,c=n+r.width<=window.innerWidth;l&&c?(k("center"),e.left=n):l?(k("left"),e.left=o):c&&(k("right"),e.left=i)}else"right"===a&&(k(p?"right":"left"),e.left=p?i:o)}else if(["left","right"].includes(s)){let n=t.left-f-r.width,l=t.right+f,o=t.top+m,i=t.bottom-m-r.height,c=n>=0,a=l+r.width<=window.innerWidth,d=o+r.height<=window.innerHeight,p=i>=0;if("left"===s?(k(c?"left":"right"),e.left=c?n:l):"right"===s&&(k(a?"right":"left"),e.left=a?l:n),"top"===u)C(d?"top":"bottom"),e.top=d?o:i;else if("center"===u){let n=t.top+(t.bottom-t.top)/2-r.height/2,l=n>=0,c=n+r.height<=window.innerHeight;l&&c?(C("center"),e.top=n):l?(C("top"),e.top=o):c&&(C("bottom"),e.top=i)}else"bottom"===u&&(C(p?"bottom":"top"),e.top=p?i:o)}}else if("modal"===i){switch(a){case"right":e.right=f;break;case"left":e.left=f;break;case"center":e.left=window.innerWidth/2-r.width/2}switch(u){case"top":e.top=m;break;case"center":e.top=window.innerHeight/2-r.height/2;break;case"bottom":e.bottom=m}}return e},[x,L,s,a,u,f,m,i,O,P]),A=(0,l.useCallback)((e={})=>{if(!P.current)return;let t=e=>!!("number"==typeof e||Number.isFinite(e))||!!e,r=e=>(0,n.S3)(e,v);t(c)&&(P.current.style.position=c),t(e.top)&&(P.current.style.top=r(e.top)),t(e.bottom)&&(P.current.style.bottom=r(e.bottom)),t(e.left)&&(P.current.style.left=r(e.left)),t(e.right)&&(P.current.style.right=r(e.right))},[c,v,P]),z=(0,l.useCallback)(()=>{let e=U();A(e)},[A,U]),I=e=>t=>!!t&&!!t.target&&!!e.current&&(e.current.contains(t.target)||t.target===e.current),X=(0,l.useCallback)(e=>{if(N||y)return;let n=I(O),l=I(P);!L&&("hover"===t&&"mousemove"===e.type||"click"===t&&"click"===e.type)&&n(e)&&R(),L&&("hover"!==r||"mousemove"!==e.type||n(e)||l(e)||V(),"hover"===r&&"scroll"===e.type&&V(),"click"===r&&"click"===e.type&&V(),"clickOnTrigger"===r&&"click"===e.type&&n(e)&&V(),"clickOutsideContent"!==r||"click"!==e.type||l(e)||V())},[L,N,y,t,r,V,R,O,P]),B=(0,l.useCallback)((0,o.P2)(z,d),[A,U]),F=(0,l.useCallback)((0,o.P2)(X,d),[L,N,y,t,r,V,R,O,P]);(0,l.useEffect)(()=>{k(a),C(u),y&&V()},[y,a,u,V]),(0,l.useEffect)(()=>{L&&x&&(z(),z())},[L,x,z]),(0,l.useEffect)(()=>(L?(b&&b(),w.setBlocked&&w.setBlocked()):$(!1),()=>{h&&h(),w.setUnblocked&&w.setUnblocked()}),[L,b,h,R,w]),(0,l.useEffect)(()=>{if(!g||!L||N)return;let e=e=>{"Escape"===e.key&&V()};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[L,N,g,V]),(0,l.useEffect)(()=>{if(!L)return;let e="modal"===i,t=e=>{B(),F(e)};return e&&(document.body.style.overflow="hidden"),window.addEventListener("resize",B),window.addEventListener("scroll",t),()=>{e&&(document.body.style.overflow=""),window.removeEventListener("resize",B),window.removeEventListener("scroll",t)}},[L,i,F,B]),(0,l.useEffect)(()=>{if(!L||!p)return;"hover"!==r&&(p.style.overflow="hidden");let e=e=>{B(),F(e)};return p.addEventListener("scroll",e),()=>{p.style.overflow="",p.removeEventListener("scroll",e)}},[L,p,r,B,F]),(0,l.useEffect)(()=>{if(N||y)return;let e="click"===t||["click","clickOnTrigger","clickOutsideContent"].includes(r);return e&&window.addEventListener("click",X),("hover"===t||"hover"===r)&&window.addEventListener("mousemove",F),()=>{window.removeEventListener("click",X),window.removeEventListener("mousemove",F)}},[t,r,N,y,L,X,F]);let D=(0,l.useCallback)(e=>{e&&(P.current=e,$(!0))},[]);return{triggerRef:O,contentRef:D,active:L,align:s,alignX:E,alignY:S,showContent:R,hideContent:V,blocked:N,setBlocked:M,setUnblocked:Y,Provider:H}},q=({children:e,trigger:t,DOMLocation:r,triggerRefName:n="ref",contentRefName:i="ref",...c})=>{let{active:s,triggerRef:a,contentRef:u,showContent:f,hideContent:m,align:d,alignX:p,alignY:g,Provider:y,...b}=j(c),{openOn:h,closeOn:v}=c,w=(0,l.useMemo)(()=>"manual"===h||"manual"===v||"clickOutsideContent"===v,[h,v]);return l.createElement(l.Fragment,null,(0,o.sY)(t,{[n]:a,active:s,...w?{showContent:f,hideContent:m}:{}}),s&&l.createElement(X,{DOMLocation:r},l.createElement(y,{...b},(0,o.sY)(e,{[i]:u,active:s,align:d,alignX:p,alignY:g,...w?{showContent:f,hideContent:m}:{}}))))},K=`${s}/Overlay`;q.displayName=K,q.pkgName=s,q.VITUS_LABS__COMPONENT=K;let J=({css:e,theme:t})=>e`
  ${t.extraStyles&&(0,n.wV)(t.extraStyles)};
`;var G=o.vc.styled(o.vc.textComponent)`
  color: inherit;
  font-weight: normal;
  line-height: 1;

  ${(0,n.EL)({key:"$text",styles:J,css:o.vc.css,normalize:!1})};
`;let Q=(0,l.forwardRef)(({paragraph:e,label:t,children:r,tag:n,extendCss:o,...i},c)=>l.createElement(G,{ref:c,as:e?"p":n,$text:{extraStyles:o},...i},r||t)),Z=`${s}/Text`;Q.displayName=Z,Q.pkgName=s,Q.VITUS_LABS__COMPONENT=Z,Q.isText=!0;let ee=({children:e,className:t="",style:r})=>(0,o.sY)(e,{className:t,style:r}),et=`${s}/Util`;ee.displayName=et,ee.pkgName=s,ee.VITUS_LABS__COMPONENT=et},6475:function(e,t){"use strict";/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),s=Symbol.for("react.context"),a=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy");Symbol.for("react.offscreen"),Symbol.for("react.module.reference"),t.isFragment=function(e){return function(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case l:case i:case o:case f:case m:return e;default:switch(e=e&&e.$$typeof){case a:case s:case u:case p:case d:case c:return e;default:return t}}case n:return t}}}(e)===l}},6708:function(e,t,r){"use strict";e.exports=r(6475)},1163:function(e,t,r){e.exports=r(880)}}]);