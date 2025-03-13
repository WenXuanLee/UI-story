import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as n}from"./index-BrnU7xv7.js";import{af as t,aj as l,ai as d,ag as i}from"./index-D3Cc52FG.js";import{M as a}from"./Modal.stories-Dn9r5pVi.js";import"./index-DJO9vBfz.js";import"./iframe-BgZeDEW_.js";import"../sb-preview/runtime.js";import"./index-yXbRe-q4.js";import"./index-j_8AUxV0.js";import"./index-DrFu-skq.js";import"./style-utility-cn-CyXaMxn7.js";import"./index-Bg2lwjBB.js";import"./iconBase-DNSKKw1X.js";import"./Button-DwN9x6rR.js";function o(s){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:a}),`
`,e.jsx(r.h1,{id:"modal",children:"Modal"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.strong,{children:"Modal"})," component provides a flexible way to present information in a dialog overlay. It supports different sizes and a customizable header, body, and footer."]}),`
`,e.jsx(r.h2,{id:"best-practices",children:e.jsx(r.strong,{children:"Best Practices"})}),`
`,e.jsxs(r.ol,{children:[`
`,e.jsxs(r.li,{children:["Use ",e.jsx(r.strong,{children:"modals for focused actions"}),"—avoid stacking multiple modals."]}),`
`,e.jsxs(r.li,{children:["Ensure the ",e.jsx(r.strong,{children:"modal content remains concise"}),"."]}),`
`,e.jsxs(r.li,{children:["Add a ",e.jsx(r.strong,{children:"close button"})," and support ",e.jsx(r.strong,{children:"backdrop click to close"})," for better UX."]}),`
`]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(l,{}),`
`,e.jsx(r.h2,{id:"props",children:e.jsx(r.strong,{children:"Props"})}),`
`,e.jsx(d,{}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"modal-sizes",children:e.jsx(r.strong,{children:"Modal Sizes"})}),`
`,e.jsxs(r.p,{children:["The Modal component supports three sizes (",e.jsx(r.code,{children:"sm"}),", ",e.jsx(r.code,{children:"md"}),", ",e.jsx(r.code,{children:"lg"}),"), allowing flexibility for various content lengths."]}),`
`,e.jsx(i,{children:e.jsx("div",{class:"overflow-x-auto",children:e.jsxs("table",{class:"min-w-full table-auto border-collapse border border-gray-200",children:[e.jsx("thead",{children:e.jsxs("tr",{class:"bg-gray-100 text-gray-600 uppercase text-sm leading-normal",children:[e.jsx("th",{class:"border border-gray-200 px-4 py-2 text-left",children:"Size"}),e.jsx("th",{class:"border border-gray-200 px-4 py-2 text-left",children:"Width"}),e.jsx("th",{class:"border border-gray-200 px-4 py-2 text-left",children:"Usage"})]})}),e.jsxs("tbody",{class:"text-gray-700 text-sm",children:[e.jsxs("tr",{children:[e.jsx("td",{class:"border border-gray-200 px-4 py-2",children:e.jsx("code",{children:"sm"})}),e.jsx("td",{class:"border border-gray-200 px-4 py-2",children:"320px"}),e.jsx("td",{class:"border border-gray-200 px-4 py-2",children:"Short confirmation dialogs, simple forms"})]}),e.jsxs("tr",{class:"bg-gray-50",children:[e.jsx("td",{class:"border border-gray-200 px-4 py-2",children:e.jsx("code",{children:"md"})}),e.jsx("td",{class:"border border-gray-200 px-4 py-2",children:"480px"}),e.jsx("td",{class:"border border-gray-200 px-4 py-2",children:"Standard modal for most use cases"})]}),e.jsxs("tr",{children:[e.jsx("td",{class:"border border-gray-200 px-4 py-2",children:e.jsx("code",{children:"lg"})}),e.jsx("td",{class:"border border-gray-200 px-4 py-2",children:"640px"}),e.jsx("td",{class:"border border-gray-200 px-4 py-2",children:"Large modals for complex forms or detailed content"})]})]})]})})}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"modal-composition",children:e.jsx(r.strong,{children:"Modal Composition"})}),`
`,e.jsx(r.p,{children:"The Modal consists of the following parts:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"Modal.Header"})}),": Displays the modal title and a close button."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"Modal.Body"})}),": Contains the main content of the modal."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"Modal.Footer"})}),": Contains actions like confirmation or cancellation."]}),`
`]}),`
`,e.jsx(r.h3,{id:"usage-example",children:e.jsx(r.strong,{children:"Usage Example"})}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { Modal } from './Modal';
import { Button } from '../Button';
import { useState } from 'react';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="md">
        <Modal.Header title="Modal Title" onClose={() => setIsOpen(false)} />
        <Modal.Body>
          <p>This is the modal content. Add more text to make it scrollable and test the scroll behavior.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>Cancel</Button>
          <Button variant="primary">Confirm</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
`})})]})}function v(s={}){const{wrapper:r}={...n(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(o,{...s})}):o(s)}export{v as default};
