import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{T as r}from"./Typography-MbSKKJwD.js";const S={title:"Components/Typography",component:r,argTypes:{as:{control:"text",description:"Custom HTML tag to render (e.g., h1, span, p)"},type:{control:"select",options:["h1","h2","h3","h4","subHeading","body","caption","small"],description:"Typography type"},state:{control:"select",options:["default","primary","error","success","warning"],description:"Text color state"},weight:{control:"select",options:["regular","medium","semiBold","bold","extraBold"],description:"Font weight"},children:{control:"text",description:"Text content to display"}},args:{as:"p",type:"body",state:"default",weight:"regular",children:"This is a sample text."}},s={},a={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{type:"h1",children:"This is an H1"}),e.jsx(r,{type:"h2",children:"This is an H2"}),e.jsx(r,{type:"h3",children:"This is an H3"}),e.jsx(r,{type:"h4",children:"This is an H4"})]})},t={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{type:"body",state:"primary",children:"This is a primary state"}),e.jsx(r,{type:"body",state:"error",children:"This is an error state"}),e.jsx(r,{type:"body",state:"success",children:"This is a success state"}),e.jsx(r,{type:"body",state:"warning",children:"This is a warning state"})]})},o={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{as:"h1",type:"body",children:"Body rendered as H1"}),e.jsx(r,{as:"span",type:"caption",state:"primary",children:"Caption rendered as Span"}),e.jsx(r,{as:"small",type:"small",state:"error",children:"Small text rendered as Small tag"})]})},p={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{type:"body",weight:"regular",children:"Regular weight"}),e.jsx(r,{type:"body",weight:"medium",children:"Medium weight"}),e.jsx(r,{type:"body",weight:"semiBold",children:"Semi-Bold weight"}),e.jsx(r,{type:"body",weight:"bold",children:"Bold weight"}),e.jsx(r,{type:"body",weight:"extraBold",children:"Extra-Bold weight"})]})};var n,i,y;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(y=(i=s.parameters)==null?void 0:i.docs)==null?void 0:y.source}}};var d,h,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Typography type="h1">This is an H1</Typography>
      <Typography type="h2">This is an H2</Typography>
      <Typography type="h3">This is an H3</Typography>
      <Typography type="h4">This is an H4</Typography>
    </div>
}`,...(c=(h=a.parameters)==null?void 0:h.docs)==null?void 0:c.source}}};var l,g,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(g=t.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var T,u,x;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(x=(u=o.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var b,w,j;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(j=(w=p.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};const B=["Default","Headings","States","CustomTag","Weights"],f=Object.freeze(Object.defineProperty({__proto__:null,CustomTag:o,Default:s,Headings:a,States:t,Weights:p,__namedExportsOrder:B,default:S},Symbol.toStringTag,{value:"Module"}));export{f as T};
