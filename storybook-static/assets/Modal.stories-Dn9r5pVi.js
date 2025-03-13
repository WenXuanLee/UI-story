import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{c as h}from"./style-utility-cn-CyXaMxn7.js";import{A as C}from"./index-Bg2lwjBB.js";import{B as i}from"./Button-DwN9x6rR.js";import{r as x}from"./index-DJO9vBfz.js";const b=h("p-4 relative bg-white rounded-lg shadow-lg transition-opacity duration-300 ease-out animate-[fadeIn_300ms_ease-out_forwards]",{variants:{size:{sm:"w-80",md:"w-96",lg:"w-[640px]"}},defaultVariants:{size:"md"}}),p=({title:o,onClose:n})=>e.jsxs("div",{className:"py-2 border-b border-gray-200 flex items-center justify-between",children:[e.jsx("h2",{className:"text-lg font-bold",children:o}),n&&e.jsx("button",{onClick:n,className:"text-gray-500 hover:text-gray-800 transition-colors","aria-label":"Close",children:e.jsx(C,{size:20})})]});p.__docgenInfo={description:"",methods:[],displayName:"ModalHeader",props:{title:{required:!0,tsType:{name:"string"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const u=({children:o})=>e.jsx("div",{className:"py-2 overflow-auto max-h-[80vh]",children:o});u.__docgenInfo={description:"",methods:[],displayName:"ModalBody"};const y=({children:o})=>e.jsx("div",{className:"py-2 border-t border-gray-200 flex justify-end space-x-2",children:o});y.__docgenInfo={description:"",methods:[],displayName:"ModalFooter"};const g=({isOpen:o,onClose:n,size:a="md",children:s})=>{if(!o)return null;const f=l=>{l.target===l.currentTarget&&n()};return e.jsx("div",{"data-testid":"dialog-wrapper",className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",onClick:f,children:e.jsx("div",{className:b({size:a})+" relative bg-white rounded-lg shadow-lg",children:s})})},t=g;t.Header=p;t.Body=u;t.Footer=y;g.__docgenInfo={description:"",methods:[],displayName:"ModalComponent",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},bodyContent:{required:!1,tsType:{name:"string"},description:""}}};const v={title:"Components/Modal",component:t,argTypes:{isOpen:{control:"boolean"},size:{control:"select",options:["sm","md","lg"]},bodyContent:{control:"text"},onClose:{action:"onClose"}}},r={args:{isOpen:!0,size:"md",bodyContent:"This is the default modal content. Add more text to make it scrollable and test the scroll behavior."},render:o=>{const[n,a]=x.useState(o.isOpen),s=()=>{a(!1),o.onClose()};return e.jsxs("div",{children:[e.jsx(i,{onClick:()=>a(!0),children:"Open Modal"}),e.jsxs(t,{isOpen:n,onClose:s,size:o.size,children:[e.jsx(t.Header,{title:"Modal Title",onClose:s}),e.jsx(t.Body,{children:e.jsx("p",{children:o.bodyContent})}),e.jsxs(t.Footer,{children:[e.jsx(i,{variant:"secondary",onClick:s,children:"Cancel"}),e.jsx(i,{variant:"primary",children:"Confirm"})]})]})]})}};var d,c,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    size: "md",
    bodyContent: "This is the default modal content. Add more text to make it scrollable and test the scroll behavior."
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    const handleClose = () => {
      setIsOpen(false);
      args.onClose(); // Trigger the Storybook action
    };
    return <div>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={handleClose} size={args.size}>
          <Modal.Header title="Modal Title" onClose={handleClose} />
          <Modal.Body>
            <p>{args.bodyContent}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary">Confirm</Button>
          </Modal.Footer>
        </Modal>
      </div>;
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const j=["Default"],w=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:j,default:v},Symbol.toStringTag,{value:"Module"}));export{w as M};
