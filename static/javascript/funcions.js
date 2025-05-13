export const datosUser = (data) => {
  //console.log(data);
  console.log(
    "O dato que obteño é un array cun obxeto na posición 0 ",
    data.results
  ); // teño un array
  console.log("Posiciónome dentro do array : ", data.results[0]); // teño un obxeto
  console.log("Accedo a imaxe: ", data.results[0].picture.large); // teño un string
  console.log("Nome: ", data.results[0].name.first); // teño un string
  console.log("Email: ", data.results[0].email); // teño un string
  console.log("Usuario: ", data.results[0].login.username); // teño un string
  console.log("Número de teléfono: ", data.results[0].cell); // teño un string
  console.log("Dirección: ", data.results[0].location.street); // teño un string
  console.log("Ciudad: ", data.results[0].location.city); // teño un string
  console.log("País: ", data.results[0].location.country); // teño un string
};

export const pintoDatos = (data) => {
  let etiquetaDiv = document.createElement("div");
  etiquetaDiv.className = "estilo-div";
  let etiquetaImg = document.createElement("img");
  etiquetaImg.src = data.results[0].picture.large;
  console.log(
    "Comprobo que estou a crear a etiqueta img correctamente: ",
    etiquetaImg
  );
  etiquetaImg.className = "estilo-img";

  // CREAMOS A ETIQUETA DIV QUE ENVOLVE A img
  let etiquetaDivImg = document.createElement("div");
  etiquetaDivImg.append(etiquetaImg);
  // SEMPRE COMPROBAMOS SE ESTAMOS A CREAR A ETIQUETA CORRECTAMENTE MEDIANTE O console.log
  console.log(
    "Comprobo que dentro da etiquetaDiv está a etiquetaImg ",
    etiquetaDiv
  );
  etiquetaDiv.append(etiquetaDivImg);
  let etiquetaDivIrmaImg = document.createElement("div");
  etiquetaDivIrmaImg.className = "estilo-div-span";
  let etiquetaSpan0 = document.createElement("span");
  let etiquetaSpan1 = document.createElement("span");
  let etiquetaSpan2 = document.createElement("span");
  let etiquetaSpan3 = document.createElement("span");
  let etiquetaSpan4 = document.createElement("span");
  etiquetaSpan0.innerHTML = data.results[0].name.first;
  etiquetaSpan1.innerHTML = data.results[0].email;
  etiquetaSpan2.innerHTML = data.results[0].cell;
  etiquetaSpan3.innerHTML = data.results[0].location.country;
  etiquetaSpan4.innerHTML = data.results[0].location.city;
  etiquetaDivIrmaImg.append(etiquetaSpan0);
  etiquetaDivIrmaImg.append(etiquetaSpan1);
  etiquetaDivIrmaImg.append(etiquetaSpan2);
  etiquetaDivIrmaImg.append(etiquetaSpan3);
  etiquetaDivIrmaImg.append(etiquetaSpan4);
  etiquetaDiv.append(etiquetaDivIrmaImg);
  document.body.append(etiquetaDiv);
};

export const recorrendoDatos = (data) => {
  console.log("Posiciónome dentro do array : ", data.results[0]);

  // ACCEDEMOS OS VALORES A TRAVÉS DO bucle for .. in

  for (const propiedade in data.results[0]) {
    console.log(
      `Datos recibidos data.results[0][propiedade]`,
      data.results[0][propiedade]
    );
  }
};
