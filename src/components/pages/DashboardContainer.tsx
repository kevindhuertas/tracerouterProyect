import React from "react";
import TracerouteTestCard from "../../modules/TracerouteTestcard";
import { GroupNames } from "../../data/integrantes";
import { servidores } from "../../data/servidores";
import { PacketSize, codigosArchivos } from "../../data/codigos";
import CodeBlocks from "../../modules/codeBlocks";

export default function DashboardContainer() {
  return (
    <div className="flex flex-col gap-3">
      {/* Sección del encabezado */}

      <div className="grid grid-cols-2 p-4">
        {/* Columna izquierda */}
        <div className="flex items-center">
          <h1 className=" font-bold text-3xl">
            Análisis de latencia y ancho de banda de red utilizando servidores
            de Google Cloud y Azure.
          </h1>
        </div>

        {/* Columna derecha */}
        <div className="flex items-center justify-end">
          <div className="text-right">
            {GroupNames.map((nombre, i) => (
              <p key={i} className="text-gray-500 text-lg font-medium mb-1">
                {nombre}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Sección del contenido */}
      <div className="flex flex-col py-4">
        {/* <h2 className="text-3xl font-bold mb-8">Bienvenido al proyecto</h2> */}
        <p className="text-lg text-gray-700">
          Nuestro proyecto consiste en configurar múltiples servidores en Google
          Cloud y Azure para alojar objetos de diferentes tamaños. El proyecto
          tiene como objetivo recopilar información sobre latencias, traceroutes
          (usando TCP ping y curl) para calcular el bandwidth y la latencia de
          varios enlaces entre nodos.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className=" font-bold text-3xl">
          Servidores de Google Cloud y Azure
        </h2>
        <p className="mt-2 text-gray-700">
          Instancias de maquinas vituales en varios países del mundo
        </p>
        <div className="grid grid-cols-2 w-full gap-2">
          <img
            className="flex  flex-1 object-contain"
            src="./InstanciaGoogle.png"
          />
          <img className="flex flex-1 object-fill" src="./InstanciaAzure.png" />
          <img
            className="flex flex-1 object-fill col-span-2 justify-center"
            src="./ArchivosServidor.png"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 py-4">
        <h2 className=" font-bold text-3xl">Traceroutes </h2>
        <p className="mt-2 text-gray-700">
          Rastreo de la ruta de los paquetes de datos a través de la red
        </p>
        <a
          href={
            "https://colab.research.google.com/drive/1oVua33lHgC_pH-6m_ox-7AxNTwd7FcWD#scrollTo=CtrV2lrw6xKz"
          }
          target="_blank"
          className="mt-2 text-blue-700"
        >
          https://colab.research.google.com/drive/1oVua33lHgC_pH-6m_ox-7AxNTwd7FcWD#scrollTo=CtrV2lrw6xKz
        </a>
        {servidores.map((servidor, i) => (
          <TracerouteTestCard
            key={i}
            htmlTrace={servidor.htmlName}
            IpTitle={"Ruta a " + servidor.ip}
            description={servidor.description}
            bandwidthImg={servidor.bandwidthImg}
          />
        ))}
      </div>
      <div className="py-4">
        <h2 className=" font-bold text-3xl">Códigos </h2>
        {codigosArchivos.map((code, i) => (
          <CodeBlocks
            codigoSrc={code.codigoSrc}
            titulo={code.titulo}
            description={code.description}
            colabUrl={code.colabUrl}
            img={code.img}
            key={i}
            fileName={code.fileName}
            fileUrl={code.fileUrl}
          ></CodeBlocks>
        ))}
      </div>

      <div className="py-4 grid grid-cols-1 lg:grid-cols-2">
        <div className="lg:col-span-2 col-span-1">
          <CodeBlocks
            codigoSrc={PacketSize[0].codigoSrc}
            titulo={PacketSize[0].titulo}
            description={PacketSize[0].description}
            colabUrl={PacketSize[0].colabUrl}
            img={PacketSize[0].img}
          ></CodeBlocks>
        </div>
        {PacketSize.slice(1).map((code, i) => (
          <CodeBlocks
            codigoSrc={code.codigoSrc}
            titulo={code.titulo}
            description={code.description}
            colabUrl={code.colabUrl}
            img={code.img}
            key={i}
          ></CodeBlocks>
        ))}
      </div>
    </div>
  );
}
