import React from "react";
import TracerouteTestCard from "../../modules/TracerouteTestcard";

const htmlTracesBaseUrl = "../../data/Route_to_35.234.37.87.html"

export default function DashboardContainer() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sección del encabezado */}

      <header className=" ">
        <div className="container mx-auto grid grid-cols-2 p-4">
          {/* Columna izquierda */}
          <div className="flex items-center">
            <h1 className=" font-bold text-3xl">Nombre del Proyecto</h1>
          </div>

          {/* Columna derecha */}
          <div className="flex items-center justify-end">
            <div className="text-right">
              <p className="text-gray-500 text-lg font-medium mb-1">
                Integrante 1
              </p>
              <p className="text-gray-500 text-lg font-medium mb-1">
                Integrante 2
              </p>
              <p className="text-gray-500 text-lg font-medium mb-1">
                Integrante 3
              </p>
              <p className="text-gray-500 text-lg font-medium mb-1">
                Integrante 4
              </p>
              <p className="text-gray-500 text-lg font-medium mb-1">
                Integrante 5
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Sección del contenido */}
      <main className="container mx-auto p-8">
        {/* <h2 className="text-3xl font-bold mb-8">Bienvenido al proyecto</h2> */}
        <p className="text-lg">
          Texto del proyecto Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Itaque earum animi incidunt ipsa corporis repellat porro, hic
          veniam velit voluptatum. Illo vero exercitationem dignissimos iste,
          modi sapiente labore totam quisquam?
        </p>
      </main>
      <div className="">
        <TracerouteTestCard
          htmlTrace="./src/data/Route_to_35.234.37.87.html"
          IpTitle="Ruta a 35.234.37.87"
          description="Servidor en Japón"
        />
      </div>
    </div>
  );
}
