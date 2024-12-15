import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as h}from"./index-DJO9vBfz.js";import{a as y,c as b}from"./style-utility-cn-DEvztKpT.js";const H=y(["w-full","rounded-lg","focus:outline-none","transition-all","duration-200"],{variants:{state:{default:"border border-neutral-300 bg-white focus:ring-2 focus:ring-primary-300",error:"border border-error-500 bg-white focus:ring-2 focus:ring-error-300",success:"border border-success-500 bg-white focus:ring-2 focus:ring-success-300",disabled:"border border-neutral-200 bg-neutral-100 text-neutral-400 cursor-not-allowed"},size:{sm:"h-8 px-2 text-sm",md:"h-10 px-3 text-base",lg:"h-12 px-4 text-lg"},hasPrefixIcon:{true:"pl-10",false:""},hasSuffixIcon:{true:"pr-10",false:""}},defaultVariants:{state:"default",size:"md",hasPrefixIcon:!1,hasSuffixIcon:!1}}),B=y(["font-medium","block","mb-1"],{variants:{size:{sm:"text-xs",md:"text-sm",lg:"text-base"},state:{default:"text-neutral-600 group-focus-within:text-primary-600",error:"text-error-500",success:"text-success-500",disabled:"text-neutral-400"}},defaultVariants:{size:"md",state:"default"}}),Z=y(["text-xs","mt-1"],{variants:{state:{error:"text-error-500",success:"text-success-500",default:"text-neutral-500",disabled:"text-neutral-400"}},defaultVariants:{state:"default"}}),V=h.forwardRef(({size:u="md",state:r="default",placeholder:m,prefixIcon:a,suffixIcon:s,label:p,hintMessage:f,id:t,...x},g)=>e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsxs("div",{children:[p&&e.jsx("label",{htmlFor:t,className:b(B({size:u,state:r})),children:p}),e.jsxs("div",{className:"relative",children:[a&&e.jsx("span",{className:"absolute left-3 top-1/2 -translate-y-1/2",children:a}),e.jsx("input",{id:t,ref:g,placeholder:m,disabled:r==="disabled",className:b(H({size:u,state:r,hasPrefixIcon:!!a,hasSuffixIcon:!!s})),...x}),s&&e.jsx("span",{className:"absolute right-3 top-1/2 -translate-y-1/2",children:s})]})]}),f&&e.jsx("span",{className:b(Z({state:r})),children:f})]}));V.__docgenInfo={description:"",methods:[],displayName:"InputField",props:{size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"default" | "error" | "success" | "disabled"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'},{name:"literal",value:'"disabled"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},prefixIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},suffixIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},label:{required:!1,tsType:{name:"string"},description:""},hintMessage:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""}}};/**
 * @license hugeicons-react v0.2.0
 *
 * See the LICENSE file in the root directory of this source tree.
 */var G={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license hugeicons-react v0.2.0
 *
 * See the LICENSE file in the root directory of this source tree.
 */const J=(u,r)=>{const m=h.forwardRef(({color:a="currentColor",size:s=24,strokeWidth:p=1.5,className:f="",children:t,...x},g)=>{const O={ref:g,...G,width:s,height:s,strokeWidth:p,color:a,className:f,...x};return h.createElement("svg",O,(r==null?void 0:r.map(([A,S])=>h.createElement(A,{key:S.id,...S})))??[],...Array.isArray(t)?t:[t])});return m.displayName=`${u}Icon`,m};/**
 * @license hugeicons-react v0.2.0
 *
 * See the LICENSE file in the root directory of this source tree.
 */const L=J("Search01Icon",[["path",{d:"M17.5 17.5L22 22",stroke:"currentColor",key:"k0"}],["path",{d:"M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z",stroke:"currentColor",key:"k1"}]]),K={title:"Components/InputField",component:V,argTypes:{size:{control:"select",options:["sm","md","lg"]},state:{control:"select",options:["default","error","success","disabled"]}}},o={args:{placeholder:"Enter text...",size:"md",state:"default"}},l={args:{placeholder:"Search...",size:"md",prefixIcon:e.jsx(L,{})}},n={args:{placeholder:"Enter text...",size:"md",suffixIcon:e.jsx(L,{})}},i={args:{placeholder:"Enter text...",size:"md",hintMessage:"This is a hint message."}},d={args:{placeholder:"Enter text...",size:"md",label:"error input",state:"error",hintMessage:"This field is required."}},c={args:{label:"disabled",placeholder:"Enter text...",size:"md",state:"disabled"}};var v,I,w;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text...",
    size: "md",
    state: "default"
  }
}`,...(w=(I=o.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var z,E,j;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    placeholder: "Search...",
    size: "md",
    prefixIcon: <Search01Icon />
  }
}`,...(j=(E=l.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var N,T,k;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text...",
    size: "md",
    suffixIcon: <Search01Icon />
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var R,q,M;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text...",
    size: "md",
    hintMessage: "This is a hint message."
  }
}`,...(M=(q=i.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var W,C,_;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text...",
    size: "md",
    label: 'error input',
    state: "error",
    hintMessage: "This field is required."
  }
}`,...(_=(C=d.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var F,P,D;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'disabled',
    placeholder: "Enter text...",
    size: "md",
    state: "disabled"
  }
}`,...(D=(P=c.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};const Q=["Default","WithPrefixIcon","WithSuffixIcon","WithHintMessage","ErrorState","Disabled"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Disabled:c,ErrorState:d,WithHintMessage:i,WithPrefixIcon:l,WithSuffixIcon:n,__namedExportsOrder:Q,default:K},Symbol.toStringTag,{value:"Module"}));export{o as D,d as E,$ as I,l as W,c as a,n as b,i as c};
