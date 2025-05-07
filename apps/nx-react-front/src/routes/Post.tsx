import React, { useState } from "react";
import { Upload, Button, notification } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";

const Post: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const props: UploadProps = {
    beforeUpload: (file) => {
      setFile(file);
      return false; // prevent auto-upload
    },
    maxCount: 1,
  };

  const handleUpload = async () => {
    if (!file) {
      notification.error({ message: "Please select a file first." });
      return;
    }

    const formData = new FormData();
    formData.append("image", file); // match backend field

    try {
      const res = await fetch("http://localhost:3000/api/minio/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
        },
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        notification.success({
          message: "Upload successful",
          description: data.message || "File uploaded.",
        });
        setFile(null); // reset file state
      } else {
        throw new Error("Upload failed");
      }
    } catch (err: any) {
      console.error(err);
      notification.error({
        message: "Upload failed",
        description: err.message || "An error occurred.",
      });
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Select File</Button>
      </Upload>
      <Button
        type="primary"
        onClick={handleUpload}
        disabled={!file}
        style={{ marginTop: 16 }}
      >
        Upload
      </Button>
    </div>
  );
};

export default Post;
