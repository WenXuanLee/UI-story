import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{B as e}from"./Button-DwN9x6rR.js";import{F as k}from"./index-5meGG_eV.js";const w={component:e,title:"Components/Button",argTypes:{variant:{control:!1},size:{control:"radio",options:["sm","md","lg"]},icon:{control:!1},iconPosition:{control:{type:"select",options:["left","right"]}},fullWidth:{control:"boolean"},disabled:{control:"boolean"}}},L=t=>r.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[r.jsx(e,{variant:"primary",...t,children:"Primary"}),r.jsx(e,{variant:"secondary",...t,children:"Secondary"}),r.jsx(e,{variant:"outline",...t,children:"Outline"}),r.jsx(e,{variant:"text",...t,children:"Text"}),r.jsx(e,{variant:"error",...t,children:"Error"})]}),a=L.bind({});a.parameters={docs:{hide:!0}};const n={args:{variant:"primary",size:"md",children:"Primary Button"}},o={args:{variant:"secondary",size:"md",children:"Secondary Button"}},s={args:{variant:"outline",size:"md",children:"Outline Button"}},i={args:{variant:"text",size:"md",children:"Text Button"}},c={args:{variant:"error",size:"md",disabled:!1,children:"Error Button"}},d={args:{variant:"primary",size:"md",icon:r.jsx(k,{}),iconPosition:"left",children:"Left Icon"}},l={args:{variant:"primary",size:"md",disabled:!0,children:"Disabled Button"}};var m,u,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  gap: '16px',
  flexWrap: 'wrap'
}}>
    <Button variant="primary" {...args}>Primary</Button>
    <Button variant="secondary" {...args}>Secondary</Button>
    <Button variant="outline" {...args}>Outline</Button>
    <Button variant="text" {...args}>Text</Button>
    <Button variant="error" {...args}>Error</Button>
  </div>`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var y,g,v;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    children: "Primary Button"
  }
}`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var h,x,B;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    size: "md",
    children: "Secondary Button"
  }
}`,...(B=(x=o.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var f,S,z;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    size: "md",
    children: "Outline Button"
  }
}`,...(z=(S=s.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var b,j,P;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: "text",
    size: "md",
    children: "Text Button"
  }
}`,...(P=(j=i.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var O,T,E;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: "error",
    size: "md",
    disabled: false,
    children: "Error Button"
  }
}`,...(E=(T=c.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var _,W,D;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    icon: <FiCheck />,
    iconPosition: "left",
    children: "Left Icon"
  }
}`,...(D=(W=d.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var I,C,F;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    disabled: true,
    children: "Disabled Button"
  }
}`,...(F=(C=l.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};const V=["Variants","Primary","Secondary","Outline","Text","Error","WithIcon","Disabled"],A=Object.freeze(Object.defineProperty({__proto__:null,Disabled:l,Error:c,Outline:s,Primary:n,Secondary:o,Text:i,Variants:a,WithIcon:d,__namedExportsOrder:V,default:w},Symbol.toStringTag,{value:"Module"}));export{A as B,c as E,s as O,n as P,o as S,i as T};
