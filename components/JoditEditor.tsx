import React, { useRef, useMemo, useEffect, useState } from "react"
import dynamic from "next/dynamic"

interface JoditTextEditorProps {
  value: string
  onChange: (content: string) => void
  placeholder?: string
  label?: string
  className?: string
}

const DynamicJoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
})

const JoditTextEditor: React.FC<JoditTextEditorProps> = ({
  value,
  label,
  onChange,
  placeholder = "",
  className = "",
}) => {
  const [isClient, setIsClient] = useState(false)
  const editor = useRef<any | null>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder,
      minHeight: 300,
      autoresize: true,
    }),
    [placeholder]
  )

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
`

  useEffect(() => {
    if (editor.current && isClient) {
      editor.current.setValue(value)
    }
  }, [value, isClient])

  const handleChange = (newContent: string) => {
    onChange(newContent)
  }

  return (
    <div>
      <style>{customStyle}</style>
      {label && <label className="font-semibold mt-3 mb-1.5">{label}</label>}
      {isClient && (
        <div className={className}>
          <DynamicJoditEditor
            value={value}
            config={config}
            ref={editor}
            onChange={handleChange}
            onBlur={() => {
              if (editor.current) {
                handleChange(editor.current.getValue())
              }
            }}
          />
        </div>
      )}
    </div>
  )
}

export default JoditTextEditor
