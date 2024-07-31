import { useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

// eslint-disable-next-line react/prop-types
const JoditTextEditor = ({ html, setHtml }) => {
  const editor = useRef(null);
  const options = [
    "bold",
    "italic",
    "underline",
    "fontsize",
    "|",
    "ul",
    "ol",
    "|",
    "outdent",
    "indent",
    "align",
    "|",
    "brush",
    "paragraph",
    "|",
    "|",
    "image",
    "table",
    "link",
    "hr",
    "|",
    "undo",
    "redo",
    "|",
    "eraser",
    "fullsize",
    "print",
  ];

  const config = useMemo(
    () => ({
      readonly: false,
      defaultActionOnPaste: "insert_as_html",
      defaultLineHeight: 1.5,
      enter: "div",
      buttons: options,
      statusbar: false,
      sizeLG: 900,
      sizeMD: 700,
      sizeSM: 400,
      toolbarAdaptive: false,
    }),
    []
  );

  return (
    <JoditEditor
      className="h-[300px] overflow-y-scroll mt-2 mb-4 max-w-full blog_content_div"
      ref={editor}
      value={html ? html : ""}
      config={config}
      tabIndex={1}
      onBlur={(newContent) => setHtml(newContent)}
      onChange={(newContent) => setHtml(newContent)}
    />
  );
};

export default JoditTextEditor;
