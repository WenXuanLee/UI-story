import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{r as t}from"./index-DJO9vBfz.js";import{F as _}from"./index-5meGG_eV.js";import{c as j,a as q}from"./style-utility-cn-CyXaMxn7.js";import"./iconBase-DNSKKw1X.js";const E=j("border relative flex items-center justify-center rounded transition-all",{variants:{size:{sm:"h-4 w-4",md:"h-5 w-5",lg:"h-6 w-6"},checked:{true:"border-primary-500 bg-primary-500 hover:bg-primary-600 focus:ring-2 focus:ring-primary-500",false:"border-neutral-400 bg-transparent hover:border-primary-500 focus:ring-2 focus:ring-primary-500"},disabled:{true:"border-neutral-300 bg-neutral-100 cursor-not-allowed hover:border-neutral-300 focus:ring-0 hover:bg-neutral-100",false:""}},compoundVariants:[{checked:!0,disabled:!0,className:"border-neutral-100 bg-neutral-200 text-neutral-400 hover:border-neutral-100 hover:bg-neutral-200 focus:ring-0"}],defaultVariants:{size:"md",checked:!1,disabled:!1}}),T=j("ml-2 transition-colors",{variants:{size:{sm:"text-sm",md:"text-base",lg:"text-lg"},disabled:{true:"text-neutral-400",false:"text-neutral-600"}},defaultVariants:{size:"md",disabled:!1}}),m=t.forwardRef(({checked:r,onChange:o,size:c="md",disabled:e,label:p,className:N,...S},D)=>{const[b,V]=t.useState(!1),n=t.useMemo(()=>r!==void 0,[r]),s=t.useMemo(()=>n?r:b,[n,r,b]),f=t.useCallback(()=>{if(e)return;const l=!s;n||V(l),o==null||o(l)},[e,s,n,o]);return a.jsxs("label",{className:"flex items-center space-x-2",children:[a.jsxs("div",{className:q(E({size:c,checked:r,disabled:e}),N),onClick:f,children:[a.jsx("input",{ref:D,type:"checkbox",className:`absolute opacity-0 w-full h-full ${e?"cursor-not-allowed":"cursor-pointer"}`,role:"checkbox",checked:s,disabled:e,"aria-checked":s,"aria-disabled":e,onClick:l=>l.stopPropagation(),onChange:f,...S}),a.jsx(_,{className:`text-white ${s?"block":"hidden"} ${e?"cursor-not-allowed":"cursor-pointer"}`,size:c==="sm"?12:c==="md"?14:16})]}),p&&a.jsx("span",{"data-testid":"checkbox-label",className:T({size:c,disabled:e}),children:p})]})});m.displayName="Checkbox";m.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};const R={title:"Components/Checkbox",component:m,argTypes:{size:{control:"select",options:["sm","md","lg"]},label:{control:"text"}}},i={args:{size:"md",checked:!1,label:"Label text"}},d={args:{size:"sm",checked:!0,disabled:!1}},u={args:{size:"md",checked:!0,disabled:!0}};var h,k,x;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: "md",
    checked: false,
    label: "Label text"
  }
}`,...(x=(k=i.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var g,y,v;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: "sm",
    checked: true,
    disabled: false
  }
}`,...(v=(y=d.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var w,z,C;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    size: "md",
    checked: true,
    disabled: true
  }
}`,...(C=(z=u.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};const O=["Default","Checked","Disabled"];export{d as Checked,i as Default,u as Disabled,O as __namedExportsOrder,R as default};
