import Storys from "./components/Storys"
import Sidebar from './components/Sidebar'
import Posts from "./components/Posts"

export default Body 

const Body = () =>{
    return(
        <div class="corpo">
        <div class="esquerda">
        <Storys />
        <Posts />
        </div>
       <Sidebar />
      </div>
    )
}