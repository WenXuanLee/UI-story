import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as n}from"./index-BrnU7xv7.js";import{af as o,aj as d,ai as c,ag as l,ah as i}from"./index-D3Cc52FG.js";import{S as a}from"./Switch.stories-5rBxOYIk.js";import"./index-DJO9vBfz.js";import"./iframe-BgZeDEW_.js";import"../sb-preview/runtime.js";import"./index-yXbRe-q4.js";import"./index-j_8AUxV0.js";import"./index-DrFu-skq.js";import"./style-utility-cn-CyXaMxn7.js";import"./Typography-MbSKKJwD.js";function t(s){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...n(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:a}),`
`,e.jsx(r.h1,{id:"switch-toggle",children:"Switch (Toggle)"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.strong,{children:"Switch component"})," allows users to toggle between two states, typically ",e.jsx(r.strong,{children:"ON"})," and ",e.jsx(r.strong,{children:"OFF"}),"."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"best-practices",children:e.jsx(r.strong,{children:"Best Practices"})}),`
`,e.jsxs(r.ol,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Use Switches for binary state changes"})," (e.g., Enable/Disable settings)."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Avoid using switches for actions"})," that require confirmation."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Use labels"})," to provide context for what the toggle controls."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Ensure accessibility"})," so users can toggle via ",e.jsx(r.strong,{children:"keyboard (Space / Enter)"}),"."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Use a disabled state"})," when the switch should not be interacted with."]}),`
`]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(d,{}),`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsx(c,{}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"switch-variants",children:e.jsx(r.strong,{children:"Switch Variants"})}),`
`,e.jsxs(r.p,{children:["The Switch component supports ",e.jsx(r.strong,{children:"different sizes"})," and states."]}),`
`,e.jsx(l,{children:e.jsx("div",{class:"overflow-x-auto",children:e.jsxs("table",{class:"min-w-full table-auto border-collapse border border-gray-200",children:[e.jsx("thead",{children:e.jsxs("tr",{class:"bg-gray-100 text-gray-600 uppercase text-sm leading-normal",children:[e.jsx("th",{class:"border border-gray-200 px-4 py-2 text-left",children:"Size"}),e.jsx("th",{class:"border border-gray-200 px-4 py-2 text-left",children:"Height"}),e.jsx("th",{class:"border border-gray-200 px-4 py-2 text-left",children:"Width"}),e.jsx("th",{class:"border border-gray-200 px-4 py-2 text-left",children:"Label Type"})]})}),e.jsxs("tbody",{class:"text-gray-700 text-sm",children:[e.jsxs("tr",{children:[e.jsx("td",{class:"border border-gray-200 px-4 py-2 font-mono",children:e.jsx("code",{children:"sm"})}),e.jsx("td",{class:"border border-gray-200 px-4 py-2",children:"16px"}),e.jsx("td",{class:"border border-gray-200 px-4 py-2",children:"32px"}),e.jsx("td",{class:"border border-gray-200 px-4 py-2",children:"small"})]}),e.jsxs("tr",{class:"bg-gray-50",children:[e.jsx("td",{class:"border border-gray-200 px-4 py-2 font-mono",children:e.jsx("code",{children:"md"})}),e.jsx("td",{class:"border border-gray-200 px-4 py-2",children:"24px"}),e.jsx("td",{class:"border border-gray-200 px-4 py-2",children:"48px"}),e.jsx("td",{class:"border border-gray-200 px-4 py-2",children:"caption"})]}),e.jsxs("tr",{children:[e.jsx("td",{class:"border border-gray-200 px-4 py-2 font-mono",children:e.jsx("code",{children:"lg"})}),e.jsx("td",{class:"border border-gray-200 px-4 py-2",children:"32px"}),e.jsx("td",{class:"border border-gray-200 px-4 py-2",children:"64px"}),e.jsx("td",{class:"border border-gray-200 px-4 py-2",children:"body"})]})]})]})})}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"usage-example-controlled-switch",children:e.jsx(r.strong,{children:"Usage Example: Controlled Switch"})}),`
`,e.jsxs(r.p,{children:["The switch state can be ",e.jsx(r.strong,{children:"controlled externally"})," by passing the ",e.jsx(r.code,{children:"checked"})," prop."]}),`
`,e.jsx(i,{name:"Controlled"}),`
`,e.jsx(r.h3,{id:"code-example",children:e.jsx(r.strong,{children:"Code Example"})}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`const [checked, setChecked] = React.useState(true);

<Switch label="Controlled Switch" checked={checked} onChange={setChecked} />;
`})})]})}function C(s={}){const{wrapper:r}={...n(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(t,{...s})}):t(s)}export{C as default};
