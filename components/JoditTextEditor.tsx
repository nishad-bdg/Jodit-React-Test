import React, { useRef, useMemo } from "react";
import dynamic from "next/dynamic";

// Dynamically import Jodit editor, disabling SSR to prevent server-side rendering issues
const DynamicJoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false, // Ensures this is loaded only on the client side
});

interface JoditTextEditorProps {
  value: string;
  onChange: (content: string) => void;
  placeholder?: string;
  label?: string;
  className?: string;
}

const JoditTextEditor: React.FC<JoditTextEditorProps> = ({
  value,
  label,
  onChange,
  placeholder = "",
  className = "",
}) => {
  const editorRef = useRef<any | null>(null);

  // Memoize editor configuration
  const config = useMemo(
    () => ({
      readonly: false,
      placeholder,
      minHeight: 300,
      autoresize: true,
    }),
    [placeholder]
  );

  // Custom styling for Jodit editor
  const customStyle = `
    .jodit-wysiwyg {
      color: #000 !important;
      caret-color: #000 !important;
      border: none !important;
      outline: none !important;
      box-shadow: none !important;
    }
    .jodit-toolbar {
      background-color: #333 !important;
      border: none !important;
    }
    .jodit-toolbar-button {
      color: #fff !important;
    }
  `;

  // Handle editor content change
  const handleChange = (newContent: string) => {
    onChange(newContent);
  };

  return (
    <div>
      <style>{customStyle}</style>
      {label && <label className="font-semibold mt-3 mb-1.5">{label}</label>}
      <div className={className}>
        <DynamicJoditEditor
          value={value}
          config={config}
          ref={editorRef}
          onChange={handleChange}
          onBlur={() => {
            if (editorRef.current) {
              handleChange(editorRef.current.value);
            }
          }}
        />
      </div>
    </div>
  );
};

export default JoditTextEditor;
