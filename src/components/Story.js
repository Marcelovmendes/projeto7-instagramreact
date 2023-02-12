const Story = (props) => {
  return (
    <div className="story">
      <div className="imagem">
        <img src={props.img} alt={props.text} />
      </div>
      <div className="usuario">{props.text}</div>
    </div>
  );
};
export default Story;
