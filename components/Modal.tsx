import React, { useState } from "react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-black p-6 rounded-lg w-full max-w-lg">
        <button className="text-black float-right mb-3" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
