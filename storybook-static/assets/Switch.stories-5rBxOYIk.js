import{j as s}from"./jsx-runtime-CkxqCPlQ.js";import{r}from"./index-DJO9vBfz.js";import{c as M,a as p}from"./style-utility-cn-CyXaMxn7.js";import{T as B}from"./Typography-MbSKKJwD.js";const F=M("relative flex items-center rounded-full transition-all cursor-pointer",{variants:{size:{sm:"w-8 h-4 p-[2px]",md:"w-12 h-6 p-[3px]",lg:"w-16 h-8 p-1"},checked:{true:"bg-primary-600",false:"bg-gray-300"},disabled:{true:"opacity-50 cursor-not-allowed",false:""}},defaultVariants:{size:"md",checked:!1,disabled:!1}}),H=M("absolute rounded-full bg-white transition-transform",{variants:{size:{sm:"w-3 h-3",md:"w-5 h-5",lg:"w-7 h-7"},checked:{true:"translate-x-full",false:"translate-x-0"}},defaultVariants:{size:"md",checked:!1}}),g=r.forwardRef(({checked:i,onChange:a,size:e="md",disabled:m=!1,label:h,className:O},I)=>{const[u,R]=r.useState(i||!1),G=r.useMemo(()=>e==="lg"?"body":e==="md"?"caption":"small",[e]),P=r.useMemo(()=>e==="lg"?"gap-2":e==="md"?"gap-[6px]":"gap-1",[e]),A=()=>{if(m)return;const f=!u;R(f),a==null||a(f)};return s.jsxs("div",{className:p("flex items-center gap-2",P),children:[s.jsx("button",{ref:I,role:"switch","data-testid":"switch-button","aria-checked":u,"aria-disabled":m,onClick:A,className:p(F({size:e,checked:u,disabled:m}),O),children:s.jsx("span",{className:H({size:e,checked:u})})}),h&&s.jsx(B,{type:G,weight:"medium",className:p("text-neutral-600",m&&"text-neutral-400"),children:h})]})});g.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{checked:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const J={title:"Components/Switch",component:g,argTypes:{checked:{control:"boolean"},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},label:{control:"text"}}},t={args:{label:"Toggle Switch",size:"md"}},l={args:{label:"Controlled Switch",size:"md",checked:!0},render:i=>{const[a,e]=r.useState(i.checked);return s.jsx(g,{...i,checked:a,onChange:e})}},o={args:{label:"Small Switch",size:"sm"}},c={args:{label:"Large Switch",size:"lg"}},n={args:{label:"Disabled Switch",size:"md",disabled:!0}},d={args:{size:"md"}};var b,S,w;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Toggle Switch",
    size: "md"
  }
}`,...(w=(S=t.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var k,y,x;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: "Controlled Switch",
    size: "md",
    checked: true
  },
  render: args => {
    const [checked, setChecked] = useState(args.checked);
    return <Switch {...args} checked={checked} onChange={setChecked} />;
  }
}`,...(x=(y=l.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var v,T,z;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: "Small Switch",
    size: "sm"
  }
}`,...(z=(T=o.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var C,j,N;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: "Large Switch",
    size: "lg"
  }
}`,...(N=(j=c.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var _,q,D;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: "Disabled Switch",
    size: "md",
    disabled: true
  }
}`,...(D=(q=n.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var L,V,E;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    size: "md"
  }
}`,...(E=(V=d.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};const K=["Default","Controlled","Small","Large","Disabled","NoLabel"],Y=Object.freeze(Object.defineProperty({__proto__:null,Controlled:l,Default:t,Disabled:n,Large:c,NoLabel:d,Small:o,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{Y as S};
