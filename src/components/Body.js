import Storys from "./Storys";
import Sidebar from "./Sidebar";
import Posts from "./Posts";

const Body = () => {
  return (
    <div class="corpo">
      <div class="esquerda">
        <Storys />
        <Posts />
      </div>
      <Sidebar />
    </div>
  );
};
export default Body;
