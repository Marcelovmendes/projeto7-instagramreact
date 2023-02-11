import { useState } from "react";

const Usuario = () => {
  const firstName = "catanacomics";
  const [name, setName] = useState(firstName);

  const firstIamge = "assets/img/catanacomics.svg";
  const [image, setImage] = useState(firstIamge);

  const clickUser = () => {
    let newName = prompt("Digite o nome do novo usuário");
    (newName !==undefined && newName!== null && newName !== "") ? setName(newName) : setName(firstName);
  };
  const clickUserImg = () => {
    let newImage = prompt("Digite o link da imagem");
    (newImage !== undefined && newImage !== null && newImage !== "") ? setImage(newImage) : setImage(firstIamge);
   console.log(newImage)
  };
  return (
    <div class="usuario">
      <img onClick={clickUserImg} src={image} alt="imagem de perfil" />
      <div class="texto">
        <span>
          <strong>{name}</strong>
          <ion-icon onClick={clickUser} name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );
};
export default Usuario;
