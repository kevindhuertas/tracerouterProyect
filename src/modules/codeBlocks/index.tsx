import React, { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaDownload } from "react-icons/fa";

interface propsCode {
  codigoSrc?: string;
  titulo?: string;
  description?: string;
  colabUrl?: string;
  img?: string;
  fileUrl?: string;
  fileName?: string;
}

const customStyle = `
bg-gray-800
rounded-lg
p-4
font-mono
text-sm
text-white
`;

export default function CodeBlocks({
  codigoSrc,
  titulo,
  description,
  colabUrl,
  img,
  fileName,
  fileUrl,
}: propsCode) {
  const [code, setCode] = useState(undefined!);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileUrl!;
    link.download = fileName!;
    link.click();
  };

  useEffect(() => {
    if (codigoSrc) {
      async function fetchCode() {
        const response = await fetch(codigoSrc!);
        const text = await response.text();
        setCode(text);
      }

      fetchCode();
    }
  }, []);

  return (
    <div className="  mx-auto  rounded-xl overflow-hidden">
      <div className="p-8">
        {titulo && (
          <div className="text-xl uppercase tracking-wide  text-gey-800 font-semibold">
            {titulo}
          </div>
        )}
        {description && <p className="mt-2 text-gray-500">{description}</p>}
        {colabUrl && (
          <a href={colabUrl} target="_blank" className="mt-2 text-blue-700">
            {colabUrl}
          </a>
        )}
        {code && (
          <div className="mt-4 max-h-96 overflow-auto">
            <SyntaxHighlighter language="python" style={atomDark}>
              {code}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
      {img && (
        <div className="flex flex-1 object-contain justify-center ">
          <img src={img} className="object-contain p-1 max-h-96" />
        </div>
      )}
      {fileUrl && (
        <div className="flex w-full justify-center ">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white flex items-center  py-2 px-4 rounded"
            onClick={handleDownload}
          >
            <FaDownload className="mr-2" />
            Descargar {fileName}
          </button>
        </div>
      )}
    </div>
  );
}
