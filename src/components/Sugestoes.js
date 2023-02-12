import Sugestao from "./Sugestao";

const Sugestoes = () => {
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
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {items.map((i) => (
        <Sugestao
          key={i.userImg}
          userImg={i.userImg}
          userName={i.userName}
          status={i.status}
        />
      ))}
    </div>
  );
};

export default Sugestoes;
