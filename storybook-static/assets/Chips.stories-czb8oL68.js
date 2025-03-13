import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{r as p}from"./index-DJO9vBfz.js";import{c as ne,a as x}from"./style-utility-cn-CyXaMxn7.js";import{A as se}from"./index-Bg2lwjBB.js";const te=ne("inline-flex items-center rounded-full font-medium transition-all w-fit",{variants:{size:{sm:"h-6 text-sm px-2",md:"h-8 text-base px-3",lg:"h-10 text-lg px-4"},variant:{primary:"bg-primary-500 text-white hover:bg-primary-600","primary-outlined":"border border-primary-500 text-primary-500 hover:bg-primary-100",secondary:"bg-secondary-500 text-white hover:bg-secondary-600","secondary-outlined":"border border-secondary-500 text-secondary-500 hover:bg-secondary-100",success:"bg-success-500 text-white hover:bg-success-600","success-outlined":"border border-success-500 text-success-500 hover:bg-success-100",warning:"bg-warning-500 text-white hover:bg-warning-600","warning-outlined":"border border-warning-500 text-warning-500 hover:bg-warning-100",error:"bg-error-500 text-white hover:bg-error-600","error-outlined":"border border-error-500 text-error-500 hover:bg-error-100",disabled:"bg-neutral-400 text-white cursor-not-allowed opacity-50"},isDisabled:{true:"cursor-not-allowed opacity-50",false:""}},defaultVariants:{size:"md",variant:"primary",isDisabled:!1}}),U=p.forwardRef(({label:X,size:e="md",variant:Y,isDisabled:g,icon:y,removable:Z,onClick:m,onRemove:b},$)=>{const ee=p.useCallback(()=>{g||m==null||m()},[g,m]),v=p.useMemo(()=>e==="sm"?"text-sm":e==="lg"?"text-lg":"text-base",[e]),re=p.useMemo(()=>e==="sm"?14:e==="lg"?20:16,[e]);return r.jsxs("div",{ref:$,className:x(te({size:e,variant:Y,isDisabled:g}),"gap-2 px-2 flex items-center cursor-pointer"),onClick:ee,children:[y&&r.jsx("span",{"data-testid":"chip-icon",className:x("flex items-center",v),children:y}),r.jsx("span",{className:v,children:X}),Z&&r.jsxs("button",{onClick:ae=>{ae.stopPropagation(),b&&b()},className:"rounded-full","aria-label":"Remove chip",children:[r.jsx(se,{size:re})," "]})]})});U.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{label:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:`| "primary"
| "primary-outlined"
| "secondary"
| "secondary-outlined"
| "success"
| "success-outlined"
| "warning"
| "warning-outlined"
| "error"
| "error-outlined"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"primary-outlined"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"secondary-outlined"'},{name:"literal",value:'"success"'},{name:"literal",value:'"success-outlined"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"warning-outlined"'},{name:"literal",value:'"error"'},{name:"literal",value:'"error-outlined"'}]},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},removable:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const ie={title:"Components/Chips",component:U,argTypes:{size:{control:"select",options:["sm","md","lg"]},variant:{control:"select",options:["primary","primary-outlined","secondary","secondary-outlined","success","success-outlined","warning","warning-outlined","error","error-outlined"]},removable:{control:"boolean"}}},a={args:{label:"Primary",size:"md",variant:"primary"}},n={args:{label:"Primary Outlined",size:"md",variant:"primary-outlined"}},s={args:{label:"Secondary",size:"md",variant:"secondary"}},t={args:{label:"Secondary Outlined",size:"md",variant:"secondary-outlined"}},i={args:{label:"Success",size:"md",variant:"success"}},o={args:{label:"Success Outlined",size:"md",variant:"success-outlined"}},l={args:{label:"Warning",size:"md",variant:"warning"}},d={args:{label:"Warning Outlined",size:"md",variant:"warning-outlined"}},c={args:{label:"Error",size:"md",variant:"error"}},u={args:{label:"Error Outlined",size:"md",variant:"error-outlined"}};var f,h,S;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Primary",
    size: "md",
    variant: "primary"
  }
}`,...(S=(h=a.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var w,O,z;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Primary Outlined",
    size: "md",
    variant: "primary-outlined"
  }
}`,...(z=(O=n.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var E,F,P;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: "Secondary",
    size: "md",
    variant: "secondary"
  }
}`,...(P=(F=s.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var T,j,q;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: "Secondary Outlined",
    size: "md",
    variant: "secondary-outlined"
  }
}`,...(q=(j=t.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var W,_,C;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: "Success",
    size: "md",
    variant: "success"
  }
}`,...(C=(_=i.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var N,R,M;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: "Success Outlined",
    size: "md",
    variant: "success-outlined"
  }
}`,...(M=(R=o.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var A,V,D;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: "Warning",
    size: "md",
    variant: "warning"
  }
}`,...(D=(V=l.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var I,k,B;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: "Warning Outlined",
    size: "md",
    variant: "warning-outlined"
  }
}`,...(B=(k=d.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var G,H,J;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: "Error",
    size: "md",
    variant: "error"
  }
}`,...(J=(H=c.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,L,Q;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    label: "Error Outlined",
    size: "md",
    variant: "error-outlined"
  }
}`,...(Q=(L=u.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};const oe=["PrimaryFilled","PrimaryOutlined","SecondaryFilled","SecondaryOutlined","SuccessFilled","SuccessOutlined","WarningFilled","WarningOutlined","ErrorFilled","ErrorOutlined"],me=Object.freeze(Object.defineProperty({__proto__:null,ErrorFilled:c,ErrorOutlined:u,PrimaryFilled:a,PrimaryOutlined:n,SecondaryFilled:s,SecondaryOutlined:t,SuccessFilled:i,SuccessOutlined:o,WarningFilled:l,WarningOutlined:d,__namedExportsOrder:oe,default:ie},Symbol.toStringTag,{value:"Module"}));export{me as C};
