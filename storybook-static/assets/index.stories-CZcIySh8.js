import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as C,R as M}from"./index-DJO9vBfz.js";import{c as R,a as O}from"./style-utility-cn-DEvztKpT.js";const D=O("transition-colors",{variants:{type:{h1:"text-3xl md:text-xl",h2:"text-2xl",h3:"text-lg",h4:"text-base leading-normal",subHeading:"text-base leading-normal",body:"text-base",caption:"text-sm text-neutral-700",small:"text-xs"},state:{default:"text-black",primary:"text-primary-600",error:"text-error-500",success:"text-success-500",warning:"text-warning-500"},weight:{regular:"font-normal",medium:"font-medium",semiBold:"font-semibold",bold:"font-bold",extraBold:"font-extrabold"}},defaultVariants:{type:"body",state:"default",weight:"regular"}}),t=({as:i,type:p,state:H,weight:B,className:v,children:N,..._})=>{const E=C.useMemo(()=>i||{h1:"h1",h2:"h2",h3:"h3",h4:"h4",subHeading:"h5",body:"p",caption:"span",small:"small"}[p||"body"],[i,p]);return M.createElement(E,{className:R(D({type:p,state:H,weight:B,className:v})),..._},N)};t.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{as:{required:!1,tsType:{name:"HTMLElement"},description:""}}};const L={title:"Components/Typography",component:t,argTypes:{as:{control:"text",description:"Custom HTML tag to render (e.g., h1, span, p)"},type:{control:"select",options:["h1","h2","h3","h4","subHeading","body","caption","small"],description:"Typography type"},state:{control:"select",options:["default","primary","error","success","warning"],description:"Text color state"},weight:{control:"select",options:["regular","medium","semiBold","bold","extraBold"],description:"Font weight"},children:{control:"text",description:"Text content to display"}},args:{as:"p",type:"body",state:"default",weight:"regular",children:"This is a sample text."}},a={},r={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{type:"h1",children:"This is an H1"}),e.jsx(t,{type:"h2",children:"This is an H2"}),e.jsx(t,{type:"h3",children:"This is an H3"}),e.jsx(t,{type:"h4",children:"This is an H4"})]})},s={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{type:"body",state:"primary",children:"This is a primary state"}),e.jsx(t,{type:"body",state:"error",children:"This is an error state"}),e.jsx(t,{type:"body",state:"success",children:"This is a success state"}),e.jsx(t,{type:"body",state:"warning",children:"This is a warning state"})]})},o={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{as:"h1",type:"body",children:"Body rendered as H1"}),e.jsx(t,{as:"span",type:"caption",state:"primary",children:"Caption rendered as Span"}),e.jsx(t,{as:"small",type:"small",state:"error",children:"Small text rendered as Small tag"})]})},n={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{type:"body",weight:"regular",children:"Regular weight"}),e.jsx(t,{type:"body",weight:"medium",children:"Medium weight"}),e.jsx(t,{type:"body",weight:"semiBold",children:"Semi-Bold weight"}),e.jsx(t,{type:"body",weight:"bold",children:"Bold weight"}),e.jsx(t,{type:"body",weight:"extraBold",children:"Extra-Bold weight"})]})};var y,d,h;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(h=(d=a.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var l,c,g;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Typography type="h1">This is an H1</Typography>
      <Typography type="h2">This is an H2</Typography>
      <Typography type="h3">This is an H3</Typography>
      <Typography type="h4">This is an H4</Typography>
    </div>
}`,...(g=(c=r.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var m,T,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Typography type="body" state="primary">
        This is a primary state
      </Typography>
      <Typography type="body" state="error">
        This is an error state
      </Typography>
      <Typography type="body" state="success">
        This is a success state
      </Typography>
      <Typography type="body" state="warning">
        This is a warning state
      </Typography>
    </div>
}`,...(u=(T=s.parameters)==null?void 0:T.docs)==null?void 0:u.source}}};var x,b,w;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Typography as="h1" type="body">
        Body rendered as H1
      </Typography>
      <Typography as="span" type="caption" state="primary">
        Caption rendered as Span
      </Typography>
      <Typography as="small" type="small" state="error">
        Small text rendered as Small tag
      </Typography>
    </div>
}`,...(w=(b=o.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var j,f,S;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Typography type="body" weight="regular">
        Regular weight
      </Typography>
      <Typography type="body" weight="medium">
        Medium weight
      </Typography>
      <Typography type="body" weight="semiBold">
        Semi-Bold weight
      </Typography>
      <Typography type="body" weight="bold">
        Bold weight
      </Typography>
      <Typography type="body" weight="extraBold">
        Extra-Bold weight
      </Typography>
    </div>
}`,...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const W=["Default","Headings","States","CustomTag","Weights"],F=Object.freeze(Object.defineProperty({__proto__:null,CustomTag:o,Default:a,Headings:r,States:s,Weights:n,__namedExportsOrder:W,default:L},Symbol.toStringTag,{value:"Module"}));export{F as T};
