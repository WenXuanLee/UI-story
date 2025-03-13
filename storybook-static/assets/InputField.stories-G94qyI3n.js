import{j as T}from"./jsx-runtime-CkxqCPlQ.js";import{I as A}from"./InputField-CadPg-1P.js";import{r as c}from"./index-DJO9vBfz.js";/**
 * @license hugeicons-react v0.2.0
 *
 * See the LICENSE file in the root directory of this source tree.
 */var H={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license hugeicons-react v0.2.0
 *
 * See the LICENSE file in the root directory of this source tree.
 */const R=(v,n)=>{const d=c.forwardRef(({color:D="currentColor",size:l=24,strokeWidth:F=1.5,className:L="",children:i,...N},O)=>{const P={ref:O,...H,width:l,height:l,strokeWidth:F,color:D,className:L,...N};return c.createElement("svg",P,(n==null?void 0:n.map(([q,p])=>c.createElement(q,{key:p.id,...p})))??[],...Array.isArray(i)?i:[i])});return d.displayName=`${v}Icon`,d};/**
 * @license hugeicons-react v0.2.0
 *
 * See the LICENSE file in the root directory of this source tree.
 */const _=R("Search01Icon",[["path",{d:"M17.5 17.5L22 22",stroke:"currentColor",key:"k0"}],["path",{d:"M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z",stroke:"currentColor",key:"k1"}]]),B={title:"Components/InputField",component:A,argTypes:{size:{control:"select",options:["sm","md","lg"]},state:{control:"select",options:["default","error","success","disabled"]}}},e={args:{placeholder:"Enter text...",size:"md",state:"default"}},r={args:{placeholder:"Search...",size:"md",prefixIcon:T.jsx(_,{})}},s={args:{placeholder:"Enter text...",size:"md",suffixIcon:T.jsx(_,{})}},t={args:{placeholder:"Enter text...",size:"md",hintMessage:"This is a hint message."}},a={args:{placeholder:"Enter text...",size:"md",label:"error input",state:"error",hintMessage:"This field is required."}},o={args:{label:"disabled",placeholder:"Enter text...",size:"md",state:"disabled"}};var m,u,h;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text...",
    size: "md",
    state: "default"
  }
}`,...(h=(u=e.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,f,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placeholder: "Search...",
    size: "md",
    prefixIcon: <Search01Icon />
  }
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var E,S,I;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text...",
    size: "md",
    suffixIcon: <Search01Icon />
  }
}`,...(I=(S=s.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var b,z,k;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text...",
    size: "md",
    hintMessage: "This is a hint message."
  }
}`,...(k=(z=t.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var y,W,M;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text...",
    size: "md",
    label: 'error input',
    state: "error",
    hintMessage: "This field is required."
  }
}`,...(M=(W=a.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var w,C,j;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'disabled',
    placeholder: "Enter text...",
    size: "md",
    state: "disabled"
  }
}`,...(j=(C=o.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};const Z=["Default","WithPrefixIcon","WithSuffixIcon","WithHintMessage","ErrorState","Disabled"],Q=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Disabled:o,ErrorState:a,WithHintMessage:t,WithPrefixIcon:r,WithSuffixIcon:s,__namedExportsOrder:Z,default:B},Symbol.toStringTag,{value:"Module"}));export{e as D,a as E,Q as I,r as W,o as a,s as b,t as c};
