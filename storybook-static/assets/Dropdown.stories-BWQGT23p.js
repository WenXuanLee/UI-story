import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{r as n}from"./index-DJO9vBfz.js";import{c as g}from"./style-utility-cn-CyXaMxn7.js";import{A as P}from"./index-Bg2lwjBB.js";import{I as H}from"./InputField-CadPg-1P.js";const U=g("relative w-full flex items-center justify-between border rounded-md transition-all cursor-pointer",{variants:{size:{sm:"h-8 px-2 text-sm",md:"h-10 px-3 text-base",lg:"h-12 px-4 text-lg"},state:{default:"border-neutral-300 bg-white hover:border-primary-500",focus:"border-primary-500 ring-1 ring-primary-500",disabled:"border-neutral-200 bg-neutral-100 text-neutral-500 cursor-not-allowed"}},defaultVariants:{size:"md",state:"default"}}),G=g("absolute left-0 mt-1 w-full bg-white border border-neutral-300 rounded-md shadow-md max-h-60 overflow-auto z-50",{variants:{size:{sm:"text-sm py-1",md:"text-base py-2",lg:"text-lg py-3"}},defaultVariants:{size:"md"}}),J=g("px-3 py-2 cursor-pointer transition-all",{variants:{state:{default:"hover:bg-primary-100 text-neutral-900",selected:"bg-primary-500 text-white font-medium",disabled:"text-neutral-400 cursor-not-allowed bg-neutral-100"}},defaultVariants:{state:"default"}}),C="Dropdown option",V=({options:s,multiple:t=!1,searchable:f=!1,clearable:_=!0,renderOption:y,size:h="md",onChange:o})=>{var S;const[r,m]=n.useState(t?[]:null),[x,b]=n.useState(!1),[w,B]=n.useState(""),p=n.useRef(null);n.useEffect(()=>{const e=l=>{p.current&&!p.current.contains(l.target)&&b(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const I=n.useCallback(e=>{if(t){const l=r!=null&&r.includes(e.value)?r.filter(v=>v!==e.value):[...r,e.value];m(l),o(l)}else m(e.value),o(e.value),b(!1)},[t,r,o]),M=n.useCallback(()=>{m(t?[]:null),o(t?[]:"")},[t,o]),F=f?s.filter(e=>e.label.toLowerCase().includes(w.toLowerCase())):s;return a.jsxs("div",{className:"relative w-full",ref:p,children:[a.jsxs("div",{className:U({size:h}),onClick:()=>b(!x),children:[a.jsx("span",{children:t?r.map(e=>{var l;return(l=s.find(v=>v.value===e))==null?void 0:l.label}).join(", ")||C:((S=s.find(e=>e.value===r))==null?void 0:S.label)||C}),_&&r&&a.jsx("button",{onClick:M,className:"text-gray-500 hover:text-gray-800 transition-colors","aria-label":"Close",children:a.jsx(P,{size:20})})]}),x&&a.jsxs("div",{ref:p,className:G({size:h}),children:[f&&a.jsx(H,{size:"md",state:"default",placeholder:"Search...",value:w,className:"border-transparent focus:border-transparent",onChange:e=>B(e.target.value)}),F.map(e=>a.jsx("div",{className:J({state:e.disabled?"disabled":r===e.value?"selected":"default"}),onClick:()=>!e.disabled&&I(e),children:y?y(e):e.label},e.value))]})]})};V.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"OptionType[]"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},searchable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},clearable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: OptionType) => React.ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}},name:"option"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""}}};const K={title:"Components/Dropdown",component:V,argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},multiple:{control:{type:"boolean"}},searchable:{control:{type:"boolean"}},clearable:{control:{type:"boolean"}},renderOption:{control:!1},onChange:{action:"selected"}}},i={args:{options:[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry",disabled:!0}]}},u={args:{multiple:!0,options:[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"}]}},d={args:{searchable:!0,options:[{value:"lion",label:"Lion"},{value:"tiger",label:"Tiger"},{value:"bear",label:"Bear"}]}},c={args:{options:[{value:"dog",label:"Dog"},{value:"cat",label:"Cat"},{value:"rabbit",label:"Rabbit"}],renderOption:s=>a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{children:"🐾"}),a.jsx("span",{children:s.label})]})}};var j,R,D;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    options: [{
      value: "apple",
      label: "Apple"
    }, {
      value: "banana",
      label: "Banana"
    }, {
      value: "cherry",
      label: "Cherry",
      disabled: true
    }]
  }
}`,...(D=(R=i.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var O,T,q;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    multiple: true,
    options: [{
      value: "react",
      label: "React"
    }, {
      value: "vue",
      label: "Vue"
    }, {
      value: "angular",
      label: "Angular"
    }]
  }
}`,...(q=(T=u.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var k,N,A;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    searchable: true,
    options: [{
      value: "lion",
      label: "Lion"
    }, {
      value: "tiger",
      label: "Tiger"
    }, {
      value: "bear",
      label: "Bear"
    }]
  }
}`,...(A=(N=d.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var z,E,L;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    options: [{
      value: "dog",
      label: "Dog"
    }, {
      value: "cat",
      label: "Cat"
    }, {
      value: "rabbit",
      label: "Rabbit"
    }],
    renderOption: option => <div className="flex items-center gap-2">
        <span>🐾</span>
        <span>{option.label}</span>
      </div>
  }
}`,...(L=(E=c.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const Q=["Default","MultiDropdown","Searchable","CustomRender"],ee=Object.freeze(Object.defineProperty({__proto__:null,CustomRender:c,Default:i,MultiDropdown:u,Searchable:d,__namedExportsOrder:Q,default:K},Symbol.toStringTag,{value:"Module"}));export{c as C,ee as D,u as M,d as S,i as a};
