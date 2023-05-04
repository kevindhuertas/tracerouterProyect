import React, { useEffect, useState } from "react";

interface props {
  htmlTrace: string;
  IpTitle: string;
  description: string;
}

export default function TracerouteTestCard({
  htmlTrace,
  IpTitle,
  description,
}: props) {
  const [htmlContent, setHtmlContent] = useState("");
  useEffect(() => {
    fetch(htmlTrace)
      .then((response) => response.text())
      .then((data) => {
        return setHtmlContent(data);
      });
  }, [htmlTrace]);

  return (
    <div className="  mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-8">
        <div className="text-xl uppercase tracking-wide  text-blue-800 font-semibold">
          {IpTitle}
        </div>
        <p className="mt-2 text-gray-500">{description}</p>
        <div className="mt-4">
          <iframe
            srcDoc={htmlContent}
            className="w-full h-64 border-gray-300 border rounded-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
