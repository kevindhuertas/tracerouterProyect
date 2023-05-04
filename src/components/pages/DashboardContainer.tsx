import React from "react";
import { logousfqUrl } from "../../assets/logo_usfq_url";

export default function DashboardContainer() {
  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      {/* Sección del encabezado */}
      <header className="bg-white border-b-2 border-gray-300 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={logousfqUrl}
              alt="Logo del proyecto"
              className="h-12 mr-4"
            />
          </div>
          <div className="flex items-center">
            <p className="mr-4">Redes - 4005</p>
          </div>
        </div>
      </header>

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
        <h2 className="text-3xl font-bold mb-8">Bienvenido al proyecto</h2>
        <p className="text-lg">
          Texto del proyecto Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Itaque earum animi incidunt ipsa corporis repellat porro, hic
          veniam velit voluptatum. Illo vero exercitationem dignissimos iste,
          modi sapiente labore totam quisquam?
        </p>
      </main>
    </div>
  );
}
