"use client";

import { FileIcon, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { UploadDropzone } from "@/lib/uploadthing";

interface FileUploadProps {
  endpoint: "messageFile" | "serverImage";
  value: string;
  onChange: (url?: string) => void;
}

const FileUpload = ({ onChange, value, endpoint }: FileUploadProps) => {
  const [fileType, setFileType] = useState<string | null>(null);

  // Tách type từ URL khi value thay đổi
  useEffect(() => {
    if (!value) {
      setFileType(null);
      return;
    }

    const urlParts = value.split("?");
    const queryParams = new URLSearchParams(urlParts[1]);
    const type = queryParams.get("type");
    setFileType(type);
  }, [value]);

  if (value && fileType?.startsWith("image/")) {
    return (
      <div className="relative h-20 w-20">
        <Image
          fill
          src={value.split("?")[0]}
          alt="upload"
          className="rounded-full"
        />
        <button
          onClick={() => onChange("")}
          className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  if (value && fileType === "application/pdf") {
    return (
      <div className="relative flex items-center p-2 mt-2 rounded-md bg-background/10 pr-8">
        <FileIcon className="h-10 w-10 flex-shrink-0 fill-indigo-200 stroke-indigo-400" />{" "}
        <div className="ml-2 flex-1 min-w-0">
          <a
            href={value.split("?")[0]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-indigo-500 dark:text-indigo-400 hover:underline break-all"
          >
            {value.split("/").pop()?.split("?")[0]}{" "}
          </a>
        </div>
        <button
          onClick={() => onChange("")}
          className="bg-rose-500 text-white p-1 rounded-full absolute -top-2 -right-2 shadow-sm"
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        if (res?.[0]) {
          // Thêm type vào URL dưới dạng query param
          const urlWithType = `${res[0].ufsUrl}?type=${encodeURIComponent(
            res[0].type
          )}`;
          onChange(urlWithType);
        }
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
};

export default FileUpload;
