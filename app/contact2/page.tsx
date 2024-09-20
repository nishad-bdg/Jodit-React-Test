"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const JoditTextEditor = dynamic(() => import("@/components/JoditTextEditor"), {
  ssr: false, // Ensure this is only loaded on the client side
});

const ContactPage = () => {
  const [value, setValue] = useState<string>("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.info("value", value);
  }, [value]);

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
      <JoditTextEditor value={value} onChange={setValue} />
      <button type="submit" className="py-3 px-2 bg-slate-700 rounded-lg">
        Submit
      </button>
    </form>
  );
};

export default ContactPage;
