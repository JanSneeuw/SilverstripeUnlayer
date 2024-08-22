import {useEffect, useRef, useState} from "react";
import EmailEditor from 'react-email-editor';

export default function UnlayerField({onAutofill, name, value}) {
  const emailEditorRef = useRef(null);
  const [templateJson, setTemplateJson] = useState(null);

  useEffect(() => {
    setTemplateJson(value);
  }, [value]);

  useEffect(() => {
    if (typeof onAutofill === 'function') {
      onAutofill(name, JSON.stringify(templateJson));
    }
  }, [templateJson]);

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      setTemplateJson(design);
    });
  };

  const onLoad = () => {
    // editor instance is created
    // you can load your template here;
    // const templateJson = {};
    emailEditorRef.current.editor.loadDesign(JSON.parse(templateJson));
  };

  const onReady = () => {
    // editor is ready
    console.log('onReady');
  };

  return (
    <div>
      <div>
        <button onClick={exportHtml}>Export HTML</button>
      </div>

      <EmailEditor
        ref={emailEditorRef}
        onLoad={onLoad}
        onReady={onReady}
      />
    </div>
  );
}
