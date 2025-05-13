// https://randomuser.me/api/?results=2

import { datosUser, pintoDatos, recorrendoDatos } from "./funcions.js";

(async () => {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();

  // Funcións creadas
  datosUser(data);
  pintoDatos(data);
  recorrendoDatos(data);
})();
