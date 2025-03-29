"use client";

import React from "react";
import UploadFormInput from "./upload-form-input";
import { z } from "zod";
import { useUploadThing } from "@/utils/uploadthing";
import { toast } from "sonner";
import { generatePdfSummary } from "@/actions/upload-actions";

const schema = z.object({
  file: z
    .instanceof(File, { message: "Invalid file" })
    .refine(
      (file) => file.size <= 20 * 1024 * 1024,
      "File size must be less than 20MB"
    )
    .refine(
      (file) => file.type.startsWith("application/pdf"),
      "File must be a PDF"
    ),
});

const UploadForm = () => {
  const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
    onClientUploadComplete() {
      toast.success("Uploaded successfully",{
        description: "Your file has been uploaded successfully",
      });
    },
    onUploadError: (error: Error) => {
      toast.error("Upload failed",{
        description: "Your file has failed to upload",
      });
      console.error(`ERROR! ${error.message}`);
    },
    onUploadBegin: (file) => {
      toast.info("Uploading...",{
        description: "Your file is being uploaded",
      });
      console.log("Uploading...", file);
    },
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File;

    // validating the fields
    const validatedFields = schema.safeParse({ file });
    if (!validatedFields.success) {
      console.log(
        validatedFields.error.flatten().fieldErrors.file?.[0] ?? "Invalid File"
      );
      toast.error("Invalid File", {
        description:
          validatedFields.error.flatten().fieldErrors.file?.[0] ??
          "Please upload a valid PDF file",
      });
      return;
    }

    toast.info("📄 Uploading PDF...", {
      description: "We are upoloading your PDF!",
    });

    // upload the file to uploadThing
    const res = await startUpload([file]);
    // console.log(res);
    if (!res) {
      toast.error("Failed to upload file", {
        description: "Please use a different file",
      });
      return;
    }

    toast.success("✅ PDF Uploaded...", {
      description: "Voila! Your file is in, and our AI is diving in! 🎩✨",
    });

    // parse the PDF using langchain
    const summary = await generatePdfSummary(res)
    console.log({summary});

    // summarise the pdf using AI
    // save the parsed data to the database
    // redirect to the [id] summary page
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
      <UploadFormInput onSubmit={onSubmit} />
    </div>
  );
};

export default UploadForm;
