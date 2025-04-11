"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useState } from "react";

const DownloadPDF = () => {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    const html2pdf =  require("html2pdf.js")

    const element = document.getElementById("pdf-content");

    if (!element) {
      setLoading(false);
      return;
    }

    const opt = {
      margin: 0.5,
      filename: "chat.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save().finally(() => {
      setLoading(false);
    });
  };

  return (
    <Button onClick={handleDownload} disabled={loading} className="gap-2">
      <Download className="w-4 h-4" />
      {loading ? "Preparing..." : "Download PDF"}
    </Button>
  );
};

export default DownloadPDF;
