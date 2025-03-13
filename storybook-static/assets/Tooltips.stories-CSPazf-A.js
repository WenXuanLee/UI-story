import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{r as d}from"./index-DJO9vBfz.js";import{c as H,a as m}from"./style-utility-cn-CyXaMxn7.js";const E=H("absolute z-50 bg-neutral-800 text-white text-xs rounded-md px-3 py-2 shadow-md transition-opacity duration-200 w-max inline-flex flex-col break-all whitespace-pre-line",{variants:{position:{top:"bottom-full left-1/2 transform -translate-x-1/2 mb-3",bottom:"top-full left-1/2 transform -translate-x-1/2 mt-3",left:"right-full top-1/2 transform -translate-y-1/2 mr-3",right:"left-full top-1/2 transform -translate-y-1/2 ml-3"}},defaultVariants:{position:"top"}}),L=H("absolute w-3 h-3 bg-neutral-800 rotate-45",{variants:{position:{top:"left-1/2 transform -translate-x-1/2 bottom-[-3px]",bottom:"left-1/2 transform -translate-x-1/2 top-[-3px]",left:"top-1/2 transform -translate-y-1/2 right-[-3px]",right:"top-1/2 transform -translate-y-1/2 left-[-3px]"}},defaultVariants:{position:"top"}}),R=({content:_,position:n="top",maxWidth:i,children:W})=>{const[q,l]=d.useState(!1),C=d.useRef(null);return t.jsxs("div",{className:"relative inline-block",onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:[W,q&&t.jsxs("div",{"data-testid":"tooltip-wrapper",ref:C,className:m(E({position:n})),style:{maxWidth:i?`${i}px`:"200px"},children:[_,t.jsx("div",{className:m(L({position:n}))})]})]})};R.__docgenInfo={description:"",methods:[],displayName:"Tooltips",props:{content:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},position:{required:!1,tsType:{name:"union",raw:'"top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},maxWidth:{required:!1,tsType:{name:"number"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const V={title:"Components/Tooltips",component:R,argTypes:{content:{control:"text"},position:{control:"select",options:["top","bottom","left","right"]},maxWidth:{control:"number"}}},e={args:{content:"This is a tooltip asdfasdasdassadasdsaad",position:"top",children:t.jsx("button",{className:"p-2 border rounded-md",children:"Hover me"})}},o={args:{content:"Tooltip on bottom",position:"bottom",children:t.jsx("button",{className:"p-2 border rounded-md",children:"Hover me"})}},r={args:{content:"Tooltip on left",position:"left",children:t.jsx("button",{className:"p-2 border rounded-md",children:"Hover me"})}},s={args:{content:"Tooltip on right",position:"right",children:t.jsx("button",{className:"p-2 border rounded-md",children:"Hover me"})}},a={args:{content:"This is a tooltip with a longer text that should wrap correctly within the max width.",position:"bottom",maxWidth:250,children:t.jsx("button",{className:"p-2 border rounded-md",children:"Hover me"})}};var p,c,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    content: "This is a tooltip asdfasdasdassadasdsaad",
    position: "top",
    children: <button className="p-2 border rounded-md">Hover me</button>
  }
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var h,f,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    content: "Tooltip on bottom",
    position: "bottom",
    children: <button className="p-2 border rounded-md">Hover me</button>
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,g,v;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    content: "Tooltip on left",
    position: "left",
    children: <button className="p-2 border rounded-md">Hover me</button>
  }
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var T,y,w;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    content: "Tooltip on right",
    position: "right",
    children: <button className="p-2 border rounded-md">Hover me</button>
  }
}`,...(w=(y=s.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var N,j,S;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    content: "This is a tooltip with a longer text that should wrap correctly within the max width.",
    position: "bottom",
    maxWidth: 250,
    // ✅ User-defined width
    children: <button className="p-2 border rounded-md">Hover me</button>
  }
}`,...(S=(j=a.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const B=["Default","Bottom","Left","Right","CustomWidth"],z=Object.freeze(Object.defineProperty({__proto__:null,Bottom:o,CustomWidth:a,Default:e,Left:r,Right:s,__namedExportsOrder:B,default:V},Symbol.toStringTag,{value:"Module"}));export{o as B,a as C,r as L,s as R,z as T};
