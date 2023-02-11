import { useState } from "react";

const Post = (props) => {
  console.log(props)
  const [isSave, setIsSave] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [numLike, setNumLike] = useState(props.numLike);
 
  const handleLikeClick = () => {
    setIsLike(!isLike);
    setNumLike((prevNumLike) => isLike ? prevNumLike - 1 : prevNumLike + 1);
  };

  const handleImageClick = () => {
    if (!isLike) {
      setIsLike(true);
      setNumLike((prevNumLike) => prevNumLike + 1);
    }
  };


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
        <div class="icon-post"><ion-icon name="heart"></ion-icon></div>
        <img
          onDoubleClick={handleImageClick}
          src={props.postImg}
          alt={props.posText}
        />  
        
      </div>
      <div class="fundo">
  <div class="acoes">
    <div>
      <ion-icon
        onClick={handleLikeClick}
        class={isLike ? "red" : "black"}
        name={isLike ? "heart" : "heart-outline"}
      ></ion-icon>
      <ion-icon name="chatbubble-outline"></ion-icon>
      <ion-icon name="paper-plane-outline"></ion-icon>
    </div>
    <div>
      <ion-icon
        onClick={() => setIsSave(!isSave)}
        name={isSave ? "bookmark" : "bookmark-outline"}
      ></ion-icon>
    </div>
  </div>
  <div class="curtidas">
    <img src={props.likeImg} alt={props.likeTitle} />
    <div class="texto"> 
      Curtido por <strong>{props.likeTitle}</strong> e{" "}
      <strong>{Intl.NumberFormat('pt-BR').format(numLike)}</strong> pessoas
    </div>
  </div>
</div>

    </div>
  );
};
export default Post