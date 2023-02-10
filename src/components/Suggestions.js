const Suggestions = () => {
  let items = [
    {
      userImg: "assets/img/smallcutecats.svg",
      userName: "smallcutecats",
      status: "Segue você",
    },
    {
      userImg: "assets/img/adorable_animals.svg",
      userName: "adorable_animals",
      status: "Segue você",
    },
    {
      userImg: "assets/img/razoesparaacreditar.svg",
      userName: "azoesparaacreditar",
      status: "Novo no Instagram",
    },
    {
      userImg: "assets/img/chibirdart.svg",
      userName: "chibirdart",
      status: "Segue você",
    },
    {
      userImg: "assets/img/bad.vibes.memes.svg",
      userName: "bad.vibes.memes.svg",
      status: "Segue você",
    },
  ];

  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {items.map((i) => {
        <ItemsSuggestions
          userImg={i.userImg}
          userName={i.userName}
          status={i.status}
        />
      })}
    </div>
  );
};

const ItemsSuggestions = (props) => {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.userImg} alt={props.userName} />
        <div class="texto">
          <div class="nome">{props.userName}</div>
          <div class="razao">{props.status}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
};
export default Suggestions;
