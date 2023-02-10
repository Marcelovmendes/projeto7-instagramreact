const Storys = () => {
  let story = [
    { img: "assets/img/memeriagourmet.svg", text: "memeriagourmet" },
    { img: "assets/img/filomoderna.svg", text: "filomoderna" },
    { img: "assets/img/respondeai.svg", text: "respondeai" },
    { img: "assets/img/wawawicomics.svg", text: "wawaicomics" },
    {
      img: "assets/img/nathanwpylestrangeplanet.svg",
      text: "nathanwpylestrageplanet",
    },
    { img: "assets/img/barked.svg", text: "barked" },
    { img: "assets/img/meowed.svg", text: "meowed" },
    { img: "assets/img/9gag.svg", text: "9gag" },
  ];

  return (
    <div class="stories">
      {story.map((s) => (
        <StoryItem img={s.img} title={s.text} text={s.text} />
      ))}
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
};
const StoryItem = (props) => {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.img} alt={props.text} />
      </div>
      <div class="usuario">{props.text}</div>
    </div>
  );
};
export default Storys;
