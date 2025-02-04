import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{r as t}from"./index-DJO9vBfz.js";import{c as _,a as j}from"./style-utility-cn-DEvztKpT.js";import{F as q}from"./index-Bv8D_8Jh.js";const E=j("border relative flex items-center justify-center rounded transition-all",{variants:{size:{sm:"h-4 w-4",md:"h-5 w-5",lg:"h-6 w-6"},checked:{true:"border-primary-500 bg-primary-500 hover:bg-primary-600 focus:ring-2 focus:ring-primary-500",false:"border-neutral-400 bg-transparent hover:border-primary-500 focus:ring-2 focus:ring-primary-500"},disabled:{true:"border-neutral-300 bg-neutral-100 cursor-not-allowed hover:border-neutral-300 focus:ring-0 hover:bg-neutral-100",false:""}},compoundVariants:[{checked:!0,disabled:!0,className:"border-neutral-100 bg-neutral-200 text-neutral-400 hover:border-neutral-100 hover:bg-neutral-200 focus:ring-0"}],defaultVariants:{size:"md",checked:!1,disabled:!1}}),T=j("ml-2 transition-colors",{variants:{size:{sm:"text-sm",md:"text-base",lg:"text-lg"},disabled:{true:"text-neutral-400",false:"text-neutral-600"}},defaultVariants:{size:"md",disabled:!1}}),u=t.forwardRef(({checked:r,onChange:o,size:c="md",disabled:e,label:m,className:N,...S},D)=>{const[p,V]=t.useState(!1),n=t.useMemo(()=>r!==void 0,[r]),s=t.useMemo(()=>n?r:p,[n,r,p]),f=t.useCallback(()=>{if(e)return;const b=!s;n||V(b),o==null||o(b)},[e,s,n,o]);return a.jsxs("label",{className:"flex items-center space-x-2",children:[a.jsxs("div",{className:_(E({size:c,checked:r,disabled:e}),N),onClick:f,role:"checkbox","aria-checked":s,"aria-disabled":e,children:[a.jsx("input",{ref:D,type:"checkbox",className:`absolute opacity-0 w-full h-full ${e?"cursor-not-allowed":"cursor-pointer"}`,checked:s,disabled:e,onChange:f,...S}),a.jsx(q,{className:`text-white ${s?"block":"hidden"} ${e?"cursor-not-allowed":"cursor-pointer"}`,size:c==="sm"?12:c==="md"?14:16})]}),m&&a.jsx("span",{className:T({size:c,disabled:e}),children:m})]})});u.displayName="Checkbox";u.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};const M={title:"Components/Checkbox",component:u,argTypes:{size:{control:"select",options:["sm","md","lg"]},label:{control:"text"}}},l={args:{size:"md",checked:!1,label:"Label text"}},i={args:{size:"sm",checked:!0,disabled:!1}},d={args:{size:"md",checked:!0,disabled:!0}};var h,x,g;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: "md",
    checked: false,
    label: "Label text"
  }
}`,...(g=(x=l.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var k,y,v;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    size: "sm",
    checked: true,
    disabled: false
  }
}`,...(v=(y=i.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var w,z,C;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    size: "md",
    checked: true,
    disabled: true
  }
}`,...(C=(z=d.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};const R=["Default","Checked","Disabled"];export{i as Checked,l as Default,d as Disabled,R as __namedExportsOrder,M as default};
