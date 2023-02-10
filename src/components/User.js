const User = () => {
  return (
      <UserItems
        img="assets/img/catanacomics.svg"
        info="imagem de perfil"
        text="catanacomics"
      />
  );
};
const UserItems = (props) => {
  return (
    <div class="usuario">
      <img src={props.img} alt={props.info} />
      <div class="texto">
        <span>
          <strong>{props.text}</strong>
          <ion-icon name="pencil"></ion-icon>
        </span>
      </div>
      </div>
  );
};
export default User;
