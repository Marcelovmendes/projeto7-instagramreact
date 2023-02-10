const Posts = () => {
  let post = [
    {
      userImg: "assets/img/meowed.svg",
      userText: "meowed",
      postImg: "assets/img/gato-telefone.svg",
      posText: "gato-telefone",
      likeImg: "assets/img/respondeai.svg",
      likeTitle: "respondeai",
      likeText: "outras 101.523 pessoas",
    },
    {
      userImg: "assets/img/barked.svg",
      userText: "barked",
      postImg: "assets/img/dog.svg",
      posText: "dog",
      likeImg: "assets/img/adorable_animals.svg",
      likeTitle: "adorable_animals",
      likeText: "outras 99.159 pessoas",
    },
  ];
   return(
    <div class="posts">
      {post.map((p) => (
        <PostItem
          userImg={p.userImg}
          userText={p.userText}
          postImg={p.postImg}
          posText={p.posText}
          likeImg={p.likeImg}
          likeTitle={p.likeTitle}
          likeText={p.likeText}
        />
      ))}
    </div>
  );
};

const PostItem = (props) => {
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.userImg} alt={props.userText} />
          {props.userText}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.postImg} alt={props.posText} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.likeImg} alt={props.likeTitle} />
          <div class="texto">
            Curtido por <strong>{props.likeTitle}</strong> e
            <strong>{props.likeText}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Posts;
