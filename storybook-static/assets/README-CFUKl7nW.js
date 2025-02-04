import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as i}from"./index-BrnU7xv7.js";import{ae as o,ag as t,ah as c,af as n,ai as l}from"./index-BbKWbYRo.js";import{C as a}from"./index.stories-DYsDWpRL.js";import"./index-DJO9vBfz.js";import"./iframe-Cob4A8hU.js";import"../sb-preview/runtime.js";import"./index-DJdX7xnk.js";import"./index-j_8AUxV0.js";import"./index-DrFu-skq.js";import"./style-utility-cn-DEvztKpT.js";import"./iconBase-DNSKKw1X.js";function d(s){const e={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return r.jsxs(r.Fragment,{children:[r.jsx(o,{of:a}),`
`,r.jsx(e.h1,{id:"chips",children:"Chips"}),`
`,r.jsxs(e.p,{children:["The ",r.jsx(e.strong,{children:"Chips"})," component is a compact, interactive UI element used for filtering, tagging, or indicating selections.",r.jsx(e.br,{}),`
`,"It supports ",r.jsx(e.strong,{children:"different styles, sizes, icons, and removable options"}),"."]}),`
`,r.jsx(e.hr,{}),`
`,r.jsx(e.h2,{id:"best-practices",children:r.jsx(e.strong,{children:"Best Practices"})}),`
`,r.jsxs(e.ol,{children:[`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"Use Chips to represent selections or filters."})," Avoid using them for critical actions."]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"Ensure sufficient padding and spacing"})," between multiple chips."]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"Clickable chips should have visual feedback"})," when hovered or focused."]}),`
`,r.jsx(e.li,{children:r.jsxs(e.strong,{children:["Removable chips should always have a clear close (",r.jsx(e.code,{children:"✖"}),") button."]})}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"Use outlined variants for a less prominent look"})," when appropriate."]}),`
`]}),`
`,r.jsx(e.hr,{}),`
`,r.jsx(t,{}),`
`,r.jsx(e.h2,{id:"props",children:r.jsx(e.strong,{children:"Props"})}),`
`,r.jsx(c,{}),`
`,r.jsx(e.hr,{}),`
`,r.jsx(e.h2,{id:"chips-variants--states",children:r.jsx(e.strong,{children:"Chips Variants & States"})}),`
`,r.jsx(n,{children:r.jsx("div",{class:"overflow-x-auto",children:r.jsxs("table",{class:"min-w-full table-auto border-collapse border border-gray-200",children:[r.jsx("thead",{children:r.jsxs("tr",{class:"bg-gray-100 text-gray-600 uppercase text-sm leading-normal",children:[r.jsx("th",{class:"border border-gray-200 px-4 py-2 text-left",children:"Variant"}),r.jsx("th",{class:"border border-gray-200 px-4 py-2 text-left",children:"Filled Style"}),r.jsx("th",{class:"border border-gray-200 px-4 py-2 text-left",children:"Outlined Style"})]})}),r.jsxs("tbody",{class:"text-gray-700 text-sm",children:[r.jsxs("tr",{children:[r.jsx("td",{class:"border border-gray-200 px-4 py-2 font-mono",children:r.jsx("code",{children:"primary"})}),r.jsx("td",{class:"border border-gray-200 px-4 py-2 bg-primary-500 text-white",children:"Primary Filled"}),r.jsx("td",{class:"border border-gray-200 px-4 py-2 border-primary-500 text-primary-500",children:"Primary Outlined"})]}),r.jsxs("tr",{class:"bg-gray-50",children:[r.jsx("td",{class:"border border-gray-200 px-4 py-2 font-mono",children:r.jsx("code",{children:"secondary"})}),r.jsx("td",{class:"border border-gray-200 px-4 py-2 bg-neutral-500 text-white",children:"Secondary Filled"}),r.jsx("td",{class:"border border-gray-200 px-4 py-2 border-neutral-500 text-neutral-500",children:"Secondary Outlined"})]}),r.jsxs("tr",{children:[r.jsx("td",{class:"border border-gray-200 px-4 py-2 font-mono",children:r.jsx("code",{children:"success"})}),r.jsx("td",{class:"border border-gray-200 px-4 py-2 bg-green-500 text-white",children:"Success Filled"}),r.jsx("td",{class:"border border-gray-200 px-4 py-2 border-green-500 text-green-500",children:"Success Outlined"})]}),r.jsxs("tr",{class:"bg-gray-50",children:[r.jsx("td",{class:"border border-gray-200 px-4 py-2 font-mono",children:r.jsx("code",{children:"warning"})}),r.jsx("td",{class:"border border-gray-200 px-4 py-2 bg-yellow-500 text-white",children:"Warning Filled"}),r.jsx("td",{class:"border border-gray-200 px-4 py-2 border-yellow-500 text-yellow-500",children:"Warning Outlined"})]}),r.jsxs("tr",{children:[r.jsx("td",{class:"border border-gray-200 px-4 py-2 font-mono",children:r.jsx("code",{children:"error"})}),r.jsx("td",{class:"border border-gray-200 px-4 py-2 bg-red-500 text-white",children:"Error Filled"}),r.jsx("td",{class:"border border-gray-200 px-4 py-2 border-red-500 text-red-500",children:"Error Outlined"})]})]})]})})}),`
`,r.jsx(e.hr,{}),`
`,r.jsx(e.h2,{id:"usage-example-clickable-chips",children:r.jsx(e.strong,{children:"Usage Example: Clickable Chips"})}),`
`,r.jsx(e.p,{children:"Clicking on a Chip can trigger an action, such as filtering a list."}),`
`,r.jsx(l,{name:"Clickable"}),`
`,r.jsx(e.h3,{id:"code-example",children:r.jsx(e.strong,{children:"Code Example"})}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-tsx",children:`<Chip label="Clickable Chip" variant="primary" onClick={() => alert("Chip clicked!")} />
`})}),`
`,r.jsx(e.hr,{}),`
`,r.jsx(e.h2,{id:"removable-chips",children:r.jsx(e.strong,{children:"Removable Chips"})}),`
`,r.jsxs(e.p,{children:["Chips can be removable by adding the ",r.jsx(e.code,{children:"removable"})," prop."]}),`
`,r.jsx(l,{name:"ClickableRemovable"}),`
`,r.jsx(e.h3,{id:"code-example-1",children:r.jsx(e.strong,{children:"Code Example"})}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-tsx",children:`<Chip label="Removable Chip" variant="primary" removable onRemove={() => alert("Chip removed!")} />
`})}),`
`,r.jsx(e.hr,{}),`
`,r.jsx(e.h2,{id:"chips-sizes",children:r.jsx(e.strong,{children:"Chips Sizes"})}),`
`,r.jsxs(e.p,{children:["The Chips component supports ",r.jsx(e.strong,{children:"three sizes"}),"."]}),`
`,r.jsx(n,{children:r.jsx("div",{class:"overflow-x-auto",children:r.jsxs("table",{class:"min-w-full table-auto border-collapse border border-gray-200",children:[r.jsx("thead",{children:r.jsxs("tr",{class:"bg-gray-100 text-gray-600 uppercase text-sm leading-normal",children:[r.jsx("th",{class:"border border-gray-200 px-4 py-2 text-left",children:"Size"}),r.jsx("th",{class:"border border-gray-200 px-4 py-2 text-left",children:"Height"}),r.jsx("th",{class:"border border-gray-200 px-4 py-2 text-left",children:"Text Size"})]})}),r.jsxs("tbody",{class:"text-gray-700 text-sm",children:[r.jsxs("tr",{children:[r.jsx("td",{class:"border border-gray-200 px-4 py-2 font-mono",children:r.jsx("code",{children:"sm"})}),r.jsx("td",{class:"border border-gray-200 px-4 py-2",children:"24px"}),r.jsx("td",{class:"border border-gray-200 px-4 py-2",children:"14px"})]}),r.jsxs("tr",{class:"bg-gray-50",children:[r.jsx("td",{class:"border border-gray-200 px-4 py-2 font-mono",children:r.jsx("code",{children:"md"})}),r.jsx("td",{class:"border border-gray-200 px-4 py-2",children:"32px"}),r.jsx("td",{class:"border border-gray-200 px-4 py-2",children:"16px"})]}),r.jsxs("tr",{children:[r.jsx("td",{class:"border border-gray-200 px-4 py-2 font-mono",children:r.jsx("code",{children:"lg"})}),r.jsx("td",{class:"border border-gray-200 px-4 py-2",children:"40px"}),r.jsx("td",{class:"border border-gray-200 px-4 py-2",children:"18px"})]})]})]})})}),`
`,r.jsx(e.hr,{}),`
`,r.jsx(e.h2,{id:"conclusion",children:r.jsx(e.strong,{children:"Conclusion"})}),`
`,r.jsxs(e.p,{children:["The ",r.jsx(e.strong,{children:"Chips component"})," is useful for tagging, filtering, and selection indicators.",r.jsx(e.br,{}),`
`,"For best results:"]}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"Use outlined variants for subtle UI elements"}),"."]}),`
`,r.jsxs(e.li,{children:[r.jsxs(e.strong,{children:["Ensure removable chips have an ",r.jsx(e.code,{children:"✖"})," button"]})," for easy deletion."]}),`
`,r.jsx(e.li,{children:r.jsx(e.strong,{children:"Make sure chips have enough spacing when used in groups."})}),`
`]})]})}function w(s={}){const{wrapper:e}={...i(),...s.components};return e?r.jsx(e,{...s,children:r.jsx(d,{...s})}):d(s)}export{w as default};
