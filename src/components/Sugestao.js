
const Sugestao = (props) => {
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
export default Sugestao