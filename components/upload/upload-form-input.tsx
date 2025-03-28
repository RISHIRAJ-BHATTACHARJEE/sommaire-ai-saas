"use client";

import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface UploadFormInputProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const UploadFormInput = ({ onSubmit }: UploadFormInputProps) => {
  return (
    <div>
      <form className="flex flex-col gap-6" onSubmit={onSubmit}>
        <div className="flex justify-end items-center gap-4">
          <Input
            id="file"
            type="file"
            name="file"
            accept="application/pdf"
            required
            className=""
          />

          <Button type="submit">Upload your PDF</Button>
        </div>
      </form>
    </div>
  );
};

export default UploadFormInput;
