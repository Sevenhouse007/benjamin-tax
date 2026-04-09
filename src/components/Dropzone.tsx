"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";
import { Upload, FileCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const MAX_BYTES = 10 * 1024 * 1024;

export default function Dropzone() {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((accepted: File[], rejected: unknown[]) => {
    if (rejected.length) {
      toast.error("Only PDF, JPG, or PNG files up to 10MB.");
      return;
    }
    setFiles((prev) => [...prev, ...accepted]);
    toast.success(
      `${accepted.length} file${accepted.length > 1 ? "s" : ""} ready to upload`
    );
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
    },
    maxSize: MAX_BYTES,
    multiple: true,
  });

  return (
    <div>
      <div
        {...getRootProps()}
        className={cn(
          "border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition",
          isDragActive
            ? "border-gold bg-gold/5"
            : "border-sage/40 hover:border-gold/60"
        )}
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto text-hunter" size={28} />
        <p className="font-instrument font-bold text-sm text-charcoal mt-2">
          {isDragActive ? "Drop to upload" : "Drop your W-2 or 1099 here"}
        </p>
        <p className="font-instrument text-[12px] text-charcoal/60">
          PDF · JPG · PNG · max 10MB · Processed in 24hrs
        </p>
      </div>

      {files.length > 0 && (
        <ul className="mt-3 space-y-1.5">
          {files.map((f, i) => (
            <li
              key={`${f.name}-${i}`}
              className="flex items-center gap-2 text-[12px] font-instrument text-charcoal/80"
            >
              <FileCheck size={14} className="text-sage" />
              <span className="truncate">{f.name}</span>
              <span className="text-charcoal/40 ml-auto">
                {(f.size / 1024).toFixed(0)} KB
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
