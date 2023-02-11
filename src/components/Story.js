const Story = (props) => {
    return (
      <div class="story">
        <div class="imagem">
          <img src={props.img} alt={props.text} />
        </div>
        <div class="usuario">{props.text}</div>
      </div>
    );
  };
  export default Story