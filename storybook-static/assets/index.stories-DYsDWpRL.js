import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{r as p}from"./index-DJO9vBfz.js";import{a as ae,c as v}from"./style-utility-cn-DEvztKpT.js";import{G as ne}from"./iconBase-DNSKKw1X.js";const se=ae("inline-flex items-center rounded-full font-medium transition-all w-fit",{variants:{size:{sm:"h-6 text-sm px-2",md:"h-8 text-base px-3",lg:"h-10 text-lg px-4"},variant:{primary:"bg-primary-500 text-white hover:bg-primary-600","primary-outlined":"border border-primary-500 text-primary-500 hover:bg-primary-100",secondary:"bg-secondary-500 text-white hover:bg-secondary-600","secondary-outlined":"border border-secondary-500 text-secondary-500 hover:bg-secondary-100",success:"bg-success-500 text-white hover:bg-success-600","success-outlined":"border border-success-500 text-success-500 hover:bg-success-100",warning:"bg-warning-500 text-white hover:bg-warning-600","warning-outlined":"border border-warning-500 text-warning-500 hover:bg-warning-100",error:"bg-error-500 text-white hover:bg-error-600","error-outlined":"border border-error-500 text-error-500 hover:bg-error-100",disabled:"bg-neutral-400 text-white cursor-not-allowed opacity-50"},isDisabled:{true:"cursor-not-allowed opacity-50",false:""}},defaultVariants:{size:"md",variant:"primary",isDisabled:!1}});function te(m){return ne({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"},child:[]}]})(m)}const K=p.forwardRef(({label:m,size:e="md",variant:Q,isDisabled:U,icon:g,removable:X,onClick:Y,onRemove:y},$)=>{const b=p.useMemo(()=>e==="sm"?"text-sm":e==="lg"?"text-lg":"text-base",[e]),ee=p.useMemo(()=>e==="sm"?14:e==="lg"?20:16,[e]);return r.jsxs("div",{ref:$,className:v(se({size:e,variant:Q,isDisabled:U}),"gap-2 px-2 flex items-center cursor-pointer"),onClick:Y,children:[g&&r.jsx("span",{className:v("flex items-center",b),children:g}),r.jsx("span",{className:b,children:m}),X&&r.jsxs("button",{onClick:re=>{re.stopPropagation(),y&&y()},className:"rounded-full","aria-label":"Remove chip",children:[r.jsx(te,{size:ee})," "]})]})});K.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{label:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:`| "primary"
| "primary-outlined"
| "secondary"
| "secondary-outlined"
| "success"
| "success-outlined"
| "warning"
| "warning-outlined"
| "error"
| "error-outlined"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-outlined"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"secondary-outlined"'},{name:"literal",value:'"success"'},{name:"literal",value:'"success-outlined"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"warning-outlined"'},{name:"literal",value:'"error"'},{name:"literal",value:'"error-outlined"'}]},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},removable:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const ie={title:"Components/Chips",component:K,argTypes:{size:{control:"select",options:["sm","md","lg"]},variant:{control:"select",options:["primary","primary-outlined","secondary","secondary-outlined","success","success-outlined","warning","warning-outlined","error","error-outlined"]},state:{control:"select",options:["default","focus","disabled"]},removable:{control:"boolean"}}},a={args:{label:"Primary",size:"md",variant:"primary"}},n={args:{label:"Primary Outlined",size:"md",variant:"primary-outlined"}},s={args:{label:"Secondary",size:"md",variant:"secondary"}},t={args:{label:"Secondary Outlined",size:"md",variant:"secondary-outlined"}},i={args:{label:"Success",size:"md",variant:"success"}},o={args:{label:"Success Outlined",size:"md",variant:"success-outlined"}},l={args:{label:"Warning",size:"md",variant:"warning"}},c={args:{label:"Warning Outlined",size:"md",variant:"warning-outlined"}},d={args:{label:"Error",size:"md",variant:"error"}},u={args:{label:"Error Outlined",size:"md",variant:"error-outlined"}};var f,x,h;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Primary",
    size: "md",
    variant: "primary"
  }
}`,...(h=(x=a.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var w,S,O;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Primary Outlined",
    size: "md",
    variant: "primary-outlined"
  }
}`,...(O=(S=n.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var z,E,C;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: "Secondary",
    size: "md",
    variant: "secondary"
  }
}`,...(C=(E=s.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var F,P,T;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: "Secondary Outlined",
    size: "md",
    variant: "secondary-outlined"
  }
}`,...(T=(P=t.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var j,q,W;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: "Success",
    size: "md",
    variant: "success"
  }
}`,...(W=(q=i.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var _,N,R;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: "Success Outlined",
    size: "md",
    variant: "success-outlined"
  }
}`,...(R=(N=o.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var L,M,D;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: "Warning",
    size: "md",
    variant: "warning"
  }
}`,...(D=(M=l.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var k,G,I;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: "Warning Outlined",
    size: "md",
    variant: "warning-outlined"
  }
}`,...(I=(G=c.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var V,A,B;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: "Error",
    size: "md",
    variant: "error"
  }
}`,...(B=(A=d.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var Z,H,J;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    label: "Error Outlined",
    size: "md",
    variant: "error-outlined"
  }
}`,...(J=(H=u.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const oe=["PrimaryFilled","PrimaryOutlined","SecondaryFilled","SecondaryOutlined","SuccessFilled","SuccessOutlined","WarningFilled","WarningOutlined","ErrorFilled","ErrorOutlined"],me=Object.freeze(Object.defineProperty({__proto__:null,ErrorFilled:d,ErrorOutlined:u,PrimaryFilled:a,PrimaryOutlined:n,SecondaryFilled:s,SecondaryOutlined:t,SuccessFilled:i,SuccessOutlined:o,WarningFilled:l,WarningOutlined:c,__namedExportsOrder:oe,default:ie},Symbol.toStringTag,{value:"Module"}));export{me as C};
