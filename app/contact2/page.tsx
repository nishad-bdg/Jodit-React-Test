"use client"
import JoditEditor from "jodit-react"
import React, { useState } from "react"

const ContactPage = () => {
  const [value, setValue] = useState<string>("")
  const onSubmit = (e: any) => {
    e.preventDefault()
  }

  return (
    <form
      className="flex flex-col gap-5 bg-black"
      onSubmit={onSubmit}
      id="neutrixContactForm"
    >
      <input
        name="name"
        type="text"
        className="py-3 placeholder:px-3"
        placeholder="Name"
      />
      <JoditEditor value="" onChange={(val: string) => setValue(val)} />
      {/* <input
        name="email"
        className="py-3 placeholder:px-3"
        placeholder="Email"
      />
      <input
        name="address"
        className="py-3 placeholder:px-3"
        placeholder="Address"
      />
      <input name="city" className="py-3 placeholder:px-3" placeholder="City" />
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
      /> */}
      <button type="submit" className="py-3 px-2 bg-slate-700 rounded-lg">
        Submit
      </button>
    </form>
  )
}

export default ContactPage