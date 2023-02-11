import  Stories from "./Stories";
import Sidebar from "./Sidebar";
import Posts from "./Posts";

const Corpo = () => {
  return (
    <div class="corpo">
      <div class="esquerda">
        <Stories />
        <Posts />
      </div>
      <Sidebar />
    </div>
  );
};
export default Corpo;
