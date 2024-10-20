"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { FC, useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  var cloudinary: any;
}

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload: FC<ImageUploadProps> = ({ onChange, value }) => {
  const handleUpload = useCallback(
    (result: any) => {
      console.log("Cloudinary result:", result); // Debug: Check the response
      if (result.info && result.info.secure_url) {
        onChange(result.info.secure_url); // Update the state with the uploaded image URL
      } else {
        console.error("Image URL not found in Cloudinary response");
      }
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onSuccess={handleUpload} // Using 'onSuccess' instead of 'onUpload'
      uploadPreset="jbxsdqh1"
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 border-neutral-200 flex flex-col justify-center items-center gap-4 text-neutral-600"
          >
            <TbPhotoPlus size={50} />
            <div className="text-lg font-semibold">Click to upload</div>
            {value && (
              <div className="absolute inset-0 w-full h-full">
                <Image
                  alt="Upload"
                  fill
                  style={{ objectFit: "cover" }}
                  src={value} // Display the uploaded image using the `value` prop
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
