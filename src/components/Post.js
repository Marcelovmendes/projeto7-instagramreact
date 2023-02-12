import { useState } from "react";

const Post = (props) => {
  console.log(props);
  const [isSave, setIsSave] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [numLike, setNumLike] = useState(props.numLike);

  const handleLikeClick = () => {
    setIsLike(!isLike);
    setNumLike((prevNumLike) => (isLike ? prevNumLike - 1 : prevNumLike + 1));
  };
  const handleImageClick = () => {
    if (!isLike) {
      setIsLike(true);
      setNumLike((prevNumLike) => prevNumLike + 1);
    }
  };

  return (
    <div className="post" data-test="post">
      <div className="topo">
        <div className="usuario">
          <img src={props.userImg} alt={props.userText} />
          {props.userText}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img
          data-test="post-image"
          onDoubleClick={handleImageClick}
          src={props.postImg}
          alt={props.posText}
        />
      </div>
      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon
              data-test="like-post"
              onClick={handleLikeClick}
              className={isLike ? "red" : "black"}
              name={isLike ? "heart" : "heart-outline"}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              data-test="save-post"
              onClick={() => setIsSave(!isSave)}
              name={isSave ? "bookmark" : "bookmark-outline"}
            ></ion-icon>
          </div>
        </div>
        <div className="curtidas">
          <img src={props.likeImg} alt={props.likeTitle} />
          <div className="texto" data-test="likes-number">
            Curtido por <strong>{props.likeTitle}</strong> e{" "}
            <strong>{Intl.NumberFormat("pt-BR").format(numLike)}</strong>{" "}
            pessoas
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
