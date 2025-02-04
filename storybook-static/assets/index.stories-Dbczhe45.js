import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{r as x}from"./index-DJO9vBfz.js";import{a as L,c as y}from"./style-utility-cn-DEvztKpT.js";const A=L(["appearance-none rounded-full border transition-all focus:ring-2 focus:outline-none","checked:ring-opacity-20"],{variants:{size:{sm:"w-4 h-4",md:"w-5 h-5",lg:"w-6 h-6"},state:{default:"border-neutral-500 checked:bg-primary-500",error:"border-error-500 checked:bg-error-500",disabled:"border-neutral-300 bg-neutral-300 opacity-50 cursor-not-allowed"}},defaultVariants:{size:"md",state:"default"}}),o=x.forwardRef(({id:l,name:p,value:f,label:g,size:r,state:t,checked:v,onChange:n},b)=>{const e=x.useMemo(()=>t==="disabled",[t]);return a.jsxs("label",{htmlFor:l,className:y("flex items-center gap-2 cursor-pointer",e&&"opacity-50 cursor-not-allowed"),children:[a.jsx("input",{id:l,type:"radio",name:p,value:f,ref:b,checked:v,disabled:e,onChange:I=>n==null?void 0:n(I.target.value),className:y(A({size:r,state:t}),"relative flex items-center justify-center after:content-[''] after:absolute after:rounded-full after:transition-all",r==="sm"&&"after:w-2 after:h-2",r==="md"&&"after:w-2.5 after:h-2.5",r==="lg"&&"after:w-3 after:h-3","after:bg-white after:scale-0 checked:after:scale-100")}),g&&a.jsx("span",{className:y("text-neutral-900",r==="sm"&&"text-sm",r==="md"&&"text-base",r==="lg"&&"text-lg"),children:g})]})});o.__docgenInfo={description:"",methods:[],displayName:"RadioButton",props:{id:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""},state:{required:!1,tsType:{name:"union",raw:'"default" | "error" | "disabled"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"error"'},{name:"literal",value:'"disabled"'}]},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const M=({name:l,options:p,defaultValue:f,size:g="md",state:r="default",onChange:t})=>{const[v,n]=x.useState(f||p[0].value),b=e=>{n(e),t==null||t(e)};return a.jsx("div",{className:"flex flex-col gap-3",children:p.map(e=>a.jsx(o,{name:l,value:e.value,label:e.label,size:g,state:r,checked:v===e.value,onChange:b},e.value))})};M.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{name:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; value: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"{ label: string; value: string }[]"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"default" | "error" | "disabled"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"error"'},{name:"literal",value:'"disabled"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const F={title:"Components/RadioButton",component:o,argTypes:{size:{control:"select",options:["sm","md","lg"]},state:{control:"select",options:["default","error","disabled"]}}},i={args:{name:"radio-group",value:"default",label:"Default Radio",size:"md",state:"default"}},d={args:{name:"radio-group",value:"checked",label:"Checked Radio",size:"md",state:"default",checked:!0}},u={args:{name:"radio-group",value:"error",label:"Error Radio",size:"md",state:"error"}},m={args:{name:"radio-group",value:"disabled",label:"Disabled Radio",size:"md",state:"disabled"}},s=()=>a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsx(o,{name:"radio-group",value:"sm",label:"Small Size",size:"sm"}),a.jsx(o,{name:"radio-group",value:"md",label:"Medium Size",size:"md"}),a.jsx(o,{name:"radio-group",value:"lg",label:"Large Size",size:"lg"})]}),c={render:()=>a.jsx(M,{name:"example",options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"}],defaultValue:"option1",size:"md",state:"default",onChange:l=>console.log(l)})};s.__docgenInfo={description:"",methods:[],displayName:"Sizes"};var h,z,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    name: "radio-group",
    value: "default",
    label: "Default Radio",
    size: "md",
    state: "default"
  }
}`,...(S=(z=i.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var R,w,j;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    name: "radio-group",
    value: "checked",
    label: "Checked Radio",
    size: "md",
    state: "default",
    checked: true
  }
}`,...(j=(w=d.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var k,q,T;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    name: "radio-group",
    value: "error",
    label: "Error Radio",
    size: "md",
    state: "error"
  }
}`,...(T=(q=u.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var _,D,E;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    name: "radio-group",
    value: "disabled",
    label: "Disabled Radio",
    size: "md",
    state: "disabled"
  }
}`,...(E=(D=m.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var N,O,B;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`() => <div className="flex flex-col gap-4">
    <RadioButton name="radio-group" value="sm" label="Small Size" size="sm" />
    <RadioButton name="radio-group" value="md" label="Medium Size" size="md" />
    <RadioButton name="radio-group" value="lg" label="Large Size" size="lg" />
  </div>`,...(B=(O=s.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var V,G,C;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <RadioGroup name="example" options={[{
    label: "Option 1",
    value: "option1"
  }, {
    label: "Option 2",
    value: "option2"
  }, {
    label: "Option 3",
    value: "option3"
  }]} defaultValue="option1" size="md" state="default" onChange={value => console.log(value)} />
}`,...(C=(G=c.parameters)==null?void 0:G.docs)==null?void 0:C.source}}};const P=["Default","Checked","ErrorState","Disabled","Sizes","RadioGroupExample"],Q=Object.freeze(Object.defineProperty({__proto__:null,Checked:d,Default:i,Disabled:m,ErrorState:u,RadioGroupExample:c,Sizes:s,__namedExportsOrder:P,default:F},Symbol.toStringTag,{value:"Module"}));export{Q as R};
