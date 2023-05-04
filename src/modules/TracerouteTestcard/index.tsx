import React, { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface props {
  htmlTrace: string;
  IpTitle: string;
  description: string;
  bandwidthImg: string;
}

export default function TracerouteTestCard({
  htmlTrace,
  IpTitle,
  description,
  bandwidthImg,
}: props) {
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [showDetails, setshowDetails] = useState<boolean>(false);

  useEffect(() => {
    fetch(htmlTrace)
      .then((response) => response.text())
      .then((data) => {
        return setHtmlContent(data);
      });
  }, [htmlTrace]);

  return (
    <div className=" w-full bg-white rounded-xl shadow-md">
      <div className="p-8">
        <div className="text-xl uppercase text-blue-800 font-semibold">
          {IpTitle}
        </div>
        <p className="mt-2 text-gray-500">{description}</p>
        <div className="mt-4">
          <iframe
            srcDoc={htmlContent}
            className="w-full h-64 border-gray-300 border rounded-md"
          ></iframe>
        </div>
        <div className="flex py-2 justify-end ">
          <button
            className={
              "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            }
            onClick={() => setshowDetails(!showDetails)}
          >
            <FiChevronDown className="inline-block mr-2" />
            {showDetails ? "Ocultar Bandwidth" : "Ver Bandwidth"}
          </button>
        </div>

        {showDetails && bandwidthImg && (
          <div className="flex justify-center">
            <img
              src={bandwidthImg}
              className="max-w-lg justify-center flex w-full max-h-64"
            />
          </div>
        )}
      </div>
    </div>
  );
}
