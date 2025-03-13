import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as M}from"./index-DJO9vBfz.js";import{e as O}from"./index-Bg2lwjBB.js";import{c as V,a as T}from"./style-utility-cn-CyXaMxn7.js";const B=V("relative flex items-center justify-center bg-neutral-200 overflow-hidden",{variants:{size:{sm:"w-8 h-8 text-xs",md:"w-12 h-12 text-sm",lg:"w-16 h-16 text-base"},shape:{circle:"rounded-full",square:"rounded-md"}},defaultVariants:{size:"md",shape:"circle"}}),U={sm:"w-2 h-2",md:"w-3 h-3",lg:"w-4 h-4"},C={circle:"bottom-0 right-0",square:"-bottom-1 -right-1"},E={online:"bg-success-500",offline:"bg-gray-400",busy:"bg-error-500",idle:"bg-warning-500"},_=({status:i,size:c="md",shape:a="circle"})=>e.jsx("span",{className:T("absolute rounded-full border-2 border-white",U[c],C[a],E[i]),"data-testid":"status-indicator"});_.__docgenInfo={description:"",methods:[],displayName:"StatusIndicator",props:{status:{required:!0,tsType:{name:"union",raw:'"online" | "offline" | "busy" | "idle"',elements:[{name:"literal",value:'"online"'},{name:"literal",value:'"offline"'},{name:"literal",value:'"busy"'},{name:"literal",value:'"idle"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},shape:{required:!1,tsType:{name:"union",raw:'"circle" | "square"',elements:[{name:"literal",value:'"circle"'},{name:"literal",value:'"square"'}]},description:"",defaultValue:{value:'"circle"',computed:!1}}}};const k={sm:16,md:24,lg:32},I=({src:i,alt:c="Avatar",initials:a,status:u,size:o="md",shape:m="circle"})=>{const N=M.useMemo(()=>a?a.trim().slice(0,2).toUpperCase():"",[a]),W=()=>i?e.jsx("img",{src:i,alt:c,className:"w-full h-full object-cover"}):a?e.jsx("span",{className:"font-medium text-neutral-700",children:N}):e.jsx(O,{"data-testid":"avatar-default-icon",size:k[o],className:"text-neutral-700"});return e.jsxs("div",{className:"relative w-fit h-fit",children:[e.jsx("div",{"data-testid":"avatar-wrapper",className:T(B({size:o,shape:m})),children:W()}),u&&e.jsx(_,{status:u,size:o,shape:m})]})};I.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Avatar"',computed:!1}},initials:{required:!1,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"union",raw:'"online" | "offline" | "idle" | "busy" | null',elements:[{name:"literal",value:'"online"'},{name:"literal",value:'"offline"'},{name:"literal",value:'"idle"'},{name:"literal",value:'"busy"'},{name:"null"}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},shape:{required:!1,tsType:{name:"union",raw:'"circle" | "square"',elements:[{name:"literal",value:'"circle"'},{name:"literal",value:'"square"'}]},description:"",defaultValue:{value:'"circle"',computed:!1}}}};const D={title:"Components/Avatar",component:I,argTypes:{size:{control:"select",options:["sm","md","lg"]},shape:{control:"select",options:["circle","square"]},status:{control:"select",options:["online","offline","busy","idle",null]}}},s={args:{src:"https://i.pravatar.cc/300",alt:"User Avatar",size:"md",shape:"circle"}},r={args:{initials:"BB",size:"md",shape:"circle"}},t={args:{src:"https://i.pravatar.cc/300",status:"online",size:"lg",shape:"circle"}},l={args:{src:"https://i.pravatar.cc/300",size:"lg",shape:"square"}},n={args:{size:"sm",shape:"circle"}};var d,p,f;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    src: "https://i.pravatar.cc/300",
    alt: "User Avatar",
    size: "md",
    shape: "circle"
  }
}`,...(f=(p=s.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var v,g,h;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    initials: "BB",
    size: "md",
    shape: "circle"
  }
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,y,q;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    src: "https://i.pravatar.cc/300",
    status: "online",
    size: "lg",
    shape: "circle"
  }
}`,...(q=(y=t.parameters)==null?void 0:y.docs)==null?void 0:q.source}}};var w,x,z;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    src: "https://i.pravatar.cc/300",
    size: "lg",
    shape: "square"
  }
}`,...(z=(x=l.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var S,j,A;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: "sm",
    shape: "circle"
  }
}`,...(A=(j=n.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};const F=["Default","WithInitials","WithStatusOnline","SquareAvatar","WithIconFallback"],K=Object.freeze(Object.defineProperty({__proto__:null,Default:s,SquareAvatar:l,WithIconFallback:n,WithInitials:r,WithStatusOnline:t,__namedExportsOrder:F,default:D},Symbol.toStringTag,{value:"Module"}));export{K as A,l as S,r as W,t as a,n as b};
