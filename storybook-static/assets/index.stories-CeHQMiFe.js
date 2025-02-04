import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as G}from"./index-DJO9vBfz.js";import{c as H,a as J}from"./style-utility-cn-DEvztKpT.js";import{F as K}from"./index-5meGG_eV.js";const Q=J(["w-full","rounded-lg","focus:outline-none","disabled:cursor-not-allowed","inline-flex","items-center","justify-center"],{variants:{variant:{primary:"text-neutral-50 bg-primary-500 hover:bg-primary-600 active:bg-primary-700",secondary:"border bg-neutral-50 text-primary-500 border-primary-500 hover:text-primary-600 hover:border-primary-600 active:border-primary-700 active:text-primary-700 hover:bg-neutral-100 active:bg-neutral-200",outline:"border bg-transparent border-primary-500 text-primary-500 hover:text-primary-600 hover:border-primary-600 active:border-primary-700 active:text-primary-700",text:"bg-transparent text-primary-500 hover:text-primary-600 active:text-primary-700",error:"text-white bg-error-500 hover:bg-error-600 active:bg-error-700"},size:{sm:"px-3 py-2 text-sm",md:"px-4 py-3 text-base",lg:"px-5 py-4 text-lg"},fullWidth:{true:"w-full",false:"w-auto"},disabled:{true:"",false:""}},compoundVariants:[{variant:"primary",disabled:!0,className:"text-neutral-300 bg-neutral-200 hover:bg-neutral-200 active:bg-neutral-200 hover:text-neutral-300 active:text-neutral-300"},{variant:"secondary",disabled:!0,className:"text-neutral-400 bg-neutral-100 border-neutral-200 hover:bg-neutral-100 hover:border-neutral-200 active:bg-neutral-100 active:border-neutral-200 hover:text-neutral-400 active:text-neutral-400"},{variant:"outline",disabled:!0,className:"text-neutral-400 bg-transparent border-neutral-200 hover:border-neutral-200 active:border-neutral-200 hover:text-neutral-400 active:text-neutral-400"},{variant:"text",disabled:!0,className:"text-neutral-400 bg-transparent hover:text-neutral-400 active:text-neutral-400"},{variant:"error",disabled:!0,className:"text-white bg-error-200 hover:bg-error-200 active:bg-error-200"}],defaultVariants:{variant:"primary",size:"md",fullWidth:!1,disabled:!1}}),t=G.forwardRef(({icon:r,iconPosition:u="left",variant:k,size:F,fullWidth:R,disabled:m,className:q,onClick:Z,children:L,...M},A)=>e.jsxs("button",{ref:A,className:H(Q({variant:k,size:F,fullWidth:R,disabled:m,className:q})),disabled:m,...M,children:[r&&u==="left"&&e.jsx("span",{className:"mr-1",children:r}),L,r&&u==="right"&&e.jsx("span",{className:"ml-1",children:r})]}));t.__docgenInfo={description:"",methods:[],displayName:"Button",props:{icon:{required:!1,tsType:{name:"ReactNode"},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}}}};const U={component:t,title:"Components/Button",argTypes:{variant:{control:!1},size:{control:"radio",options:["sm","md","lg"]},icon:{control:!1},iconPosition:{control:{type:"select",options:["left","right"]}},fullWidth:{control:"boolean"},disabled:{control:"boolean"}}},X=r=>e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx(t,{variant:"primary",...r,children:"Primary"}),e.jsx(t,{variant:"secondary",...r,children:"Secondary"}),e.jsx(t,{variant:"outline",...r,children:"Outline"}),e.jsx(t,{variant:"text",...r,children:"Text"}),e.jsx(t,{variant:"error",...r,children:"Error"})]}),a=X.bind({});a.parameters={docs:{hide:!0}};const n={args:{variant:"primary",size:"md",children:"Primary Button"}},o={args:{variant:"secondary",size:"md",children:"Secondary Button"}},s={args:{variant:"outline",size:"md",children:"Outline Button"}},i={args:{variant:"text",size:"md",children:"Text Button"}},l={args:{variant:"error",size:"md",disabled:!1,children:"Error Button"}},c={args:{variant:"primary",size:"md",icon:e.jsx(K,{}),iconPosition:"left",children:"Left Icon"}},d={args:{variant:"primary",size:"md",disabled:!0,children:"Disabled Button"}};var p,v,x;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  gap: '16px',
  flexWrap: 'wrap'
}}>
    <Button variant="primary" {...args}>Primary</Button>
    <Button variant="secondary" {...args}>Secondary</Button>
    <Button variant="outline" {...args}>Outline</Button>
    <Button variant="text" {...args}>Text</Button>
    <Button variant="error" {...args}>Error</Button>
  </div>`,...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var y,b,g;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    children: "Primary Button"
  }
}`,...(g=(b=n.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,f,B;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    size: "md",
    children: "Secondary Button"
  }
}`,...(B=(f=o.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var S,z,j;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    size: "md",
    children: "Outline Button"
  }
}`,...(j=(z=s.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var T,P,w;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: "text",
    size: "md",
    children: "Text Button"
  }
}`,...(w=(P=i.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var E,N,O;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: "error",
    size: "md",
    disabled: false,
    children: "Error Button"
  }
}`,...(O=(N=l.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var _,W,I;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    icon: <FiCheck />,
    iconPosition: "left",
    children: "Left Icon"
  }
}`,...(I=(W=c.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var V,C,D;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    disabled: true,
    children: "Disabled Button"
  }
}`,...(D=(C=d.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const Y=["Variants","Primary","Secondary","Outline","Text","Error","WithIcon","Disabled"],ar=Object.freeze(Object.defineProperty({__proto__:null,Disabled:d,Error:l,Outline:s,Primary:n,Secondary:o,Text:i,Variants:a,WithIcon:c,__namedExportsOrder:Y,default:U},Symbol.toStringTag,{value:"Module"}));export{ar as B,l as E,s as O,n as P,o as S,i as T};
