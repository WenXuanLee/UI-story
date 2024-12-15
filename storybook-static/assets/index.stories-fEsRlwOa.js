import{j as i}from"./jsx-runtime-CkxqCPlQ.js";import{r as Z,R as c}from"./index-DJO9vBfz.js";import{c as $,a as ee}from"./style-utility-cn-DEvztKpT.js";const re=ee(["w-full","rounded-lg","focus:outline-none","disabled:cursor-not-allowed","inline-flex","items-center","justify-center"],{variants:{variant:{primary:"text-neutral-50 bg-primary-500 hover:bg-primary-600 active:bg-primary-700",secondary:"border bg-neutral-50 text-primary-500 border-primary-500 hover:text-primary-600 hover:border-primary-600 active:border-primary-700 active:text-primary-700 hover:bg-neutral-100 active:bg-neutral-200",outline:"border bg-transparent border-primary-500 text-primary-500 hover:text-primary-600 hover:border-primary-600 active:border-primary-700 active:text-primary-700",text:"bg-transparent text-primary-500 hover:text-primary-600 active:text-primary-700",error:"text-white bg-error-500 hover:bg-error-600 active:bg-error-700"},size:{sm:"px-3 py-2 text-sm",md:"px-4 py-3 text-base",lg:"px-5 py-4 text-lg"},fullWidth:{true:"w-full",false:"w-auto"},disabled:{true:"",false:""}},compoundVariants:[{variant:"primary",disabled:!0,className:"text-neutral-300 bg-neutral-200 hover:bg-neutral-200 active:bg-neutral-200 hover:text-neutral-300 active:text-neutral-300"},{variant:"secondary",disabled:!0,className:"text-neutral-400 bg-neutral-100 border-neutral-200 hover:bg-neutral-100 hover:border-neutral-200 active:bg-neutral-100 active:border-neutral-200 hover:text-neutral-400 active:text-neutral-400"},{variant:"outline",disabled:!0,className:"text-neutral-400 bg-transparent border-neutral-200 hover:border-neutral-200 active:border-neutral-200 hover:text-neutral-400 active:text-neutral-400"},{variant:"text",disabled:!0,className:"text-neutral-400 bg-transparent hover:text-neutral-400 active:text-neutral-400"},{variant:"error",disabled:!0,className:"text-white bg-error-200 hover:bg-error-200 active:bg-error-200"}],defaultVariants:{variant:"primary",size:"md",fullWidth:!1,disabled:!1}}),l=Z.forwardRef(({icon:e,iconPosition:r="left",variant:t,size:a,fullWidth:n,disabled:o,className:x,onClick:O,children:s,...X},Y)=>i.jsxs("button",{ref:Y,className:$(re({variant:t,size:a,fullWidth:n,disabled:o,className:x})),disabled:o,...X,children:[e&&r==="left"&&i.jsx("span",{className:"mr-1",children:e}),s,e&&r==="right"&&i.jsx("span",{className:"ml-1",children:e})]}));l.__docgenInfo={description:"",methods:[],displayName:"Button",props:{icon:{required:!1,tsType:{name:"ReactNode"},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}}}};var Q={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},j=c.createContext&&c.createContext(Q),te=["attr","size","title"];function ae(e,r){if(e==null)return{};var t=ne(e,r),a,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],!(r.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}function ne(e,r){if(e==null)return{};var t={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(r.indexOf(a)>=0)continue;t[a]=e[a]}return t}function y(){return y=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},y.apply(this,arguments)}function P(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,a)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?P(Object(t),!0).forEach(function(a){ie(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function ie(e,r,t){return r=oe(r),r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function oe(e){var r=se(e,"string");return typeof r=="symbol"?r:r+""}function se(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var a=t.call(e,r||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function U(e){return e&&e.map((r,t)=>c.createElement(r.tag,h({key:t},r.attr),U(r.child)))}function le(e){return r=>c.createElement(ce,y({attr:h({},e.attr)},r),U(e.child))}function ce(e){var r=t=>{var{attr:a,size:n,title:o}=e,x=ae(e,te),O=n||t.size||"1em",s;return t.className&&(s=t.className),e.className&&(s=(s?s+" ":"")+e.className),c.createElement("svg",y({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,x,{className:s,style:h(h({color:e.color||t.color},t.style),e.style),height:O,width:O,xmlns:"http://www.w3.org/2000/svg"}),o&&c.createElement("title",null,o),e.children)};return j!==void 0?c.createElement(j.Consumer,null,t=>r(t)):r(Q)}function ue(e){return le({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"},child:[]}]})(e)}const de={component:l,title:"Components/Button",argTypes:{variant:{control:!1},size:{control:"radio",options:["sm","md","lg"]},icon:{control:!1},iconPosition:{control:{type:"select",options:["left","right"]}},fullWidth:{control:"boolean"},disabled:{control:"boolean"}}},me=e=>i.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[i.jsx(l,{variant:"primary",...e,children:"Primary"}),i.jsx(l,{variant:"secondary",...e,children:"Secondary"}),i.jsx(l,{variant:"outline",...e,children:"Outline"}),i.jsx(l,{variant:"text",...e,children:"Text"}),i.jsx(l,{variant:"error",...e,children:"Error"})]}),u=me.bind({});u.parameters={docs:{hide:!0}};const d={args:{variant:"primary",size:"md",children:"Primary Button"}},m={args:{variant:"secondary",size:"md",children:"Secondary Button"}},p={args:{variant:"outline",size:"md",children:"Outline Button"}},v={args:{variant:"text",size:"md",children:"Text Button"}},f={args:{variant:"error",size:"md",disabled:!1,children:"Error Button"}},b={args:{variant:"primary",size:"md",icon:i.jsx(ue,{}),iconPosition:"left",children:"Left Icon"}},g={args:{variant:"primary",size:"md",disabled:!0,children:"Disabled Button"}};var w,B,S;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  gap: '16px',
  flexWrap: 'wrap'
}}>
    <Button variant="primary" {...args}>Primary</Button>
    <Button variant="secondary" {...args}>Secondary</Button>
    <Button variant="outline" {...args}>Outline</Button>
    <Button variant="text" {...args}>Text</Button>
    <Button variant="error" {...args}>Error</Button>
  </div>`,...(S=(B=u.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var z,E,N;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    children: "Primary Button"
  }
}`,...(N=(E=d.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var _,T,C;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    size: "md",
    children: "Secondary Button"
  }
}`,...(C=(T=m.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var W,D,I;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    size: "md",
    children: "Outline Button"
  }
}`,...(I=(D=p.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var L,R,V;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: "text",
    size: "md",
    children: "Text Button"
  }
}`,...(V=(R=v.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var k,q,F;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: "error",
    size: "md",
    disabled: false,
    children: "Error Button"
  }
}`,...(F=(q=f.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var G,K,M;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    icon: <FiCheck />,
    iconPosition: "left",
    children: "Left Icon"
  }
}`,...(M=(K=b.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var A,H,J;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    disabled: true,
    children: "Disabled Button"
  }
}`,...(J=(H=g.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const pe=["Variants","Primary","Secondary","Outline","Text","Error","WithIcon","Disabled"],ge=Object.freeze(Object.defineProperty({__proto__:null,Disabled:g,Error:f,Outline:p,Primary:d,Secondary:m,Text:v,Variants:u,WithIcon:b,__namedExportsOrder:pe,default:de},Symbol.toStringTag,{value:"Module"}));export{ge as B,f as E,p as O,d as P,m as S,v as T};
