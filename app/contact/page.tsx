"use client"
import React, { useEffect, useState } from "react"
import Modal from "@/components/Modal"

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.info("form submitted")
    // closeModal() // Close the modal on submit
  }

  return (
    <div className="p-2 min-h-screen bg-black">
      <div className="flex items-center justify-center">
        <button
          onClick={openModal}
          className="py-3 px-5 bg-slate-700 text-white rounded-lg"
        >
          Open Form
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <form
          className="flex flex-col gap-5"
          onSubmit={onSubmit}
          id="neutrixContactForm"
        >
          <input
            name="name"
            type="text"
            className="py-3 placeholder:px-3"
            placeholder="Name"
          />
          <input
            name="email"
            className="py-3 placeholder:px-3"
            placeholder="Email"
          />
          <input
            name="address"
            className="py-3 placeholder:px-3"
            placeholder="Address"
          />
          <input
            name="city"
            className="py-3 placeholder:px-3"
            placeholder="City"
          />
          <input
            name="zipCode"
            className="py-3 placeholder:px-3"
            placeholder="Zip Code"
          />
          <input
            name="phone"
            className="py-3 placeholder:px-3"
            placeholder="Phone"
          />
          <input
            name="queryType"
            className="py-3 placeholder:px-3"
            placeholder="Query Type"
          />
          <input
            name="message"
            className="py-3 placeholder:px-3"
            placeholder="Message"
          />
          <button type="submit" className="py-3 px-2 bg-slate-700 rounded-lg">
            Submit
          </button>
          <button onClick={() => setIsModalOpen(false)}> close</button>
        </form>
      </Modal>
    </div>
  )
}

export default Page
