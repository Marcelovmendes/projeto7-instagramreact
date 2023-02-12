import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Usuario/>
      <Sugestoes />
      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div className="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
};

export default Sidebar;
