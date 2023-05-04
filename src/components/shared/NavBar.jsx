import React from "react";
import { logousfqUrl } from "../../assets/logo_usfq_url";

export const NavBar = () => {
  return (
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
  );
};
