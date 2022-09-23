// modulos
import { useNavigate } from "react-router-dom";

// paginas
// import Footer from './Footer';

//
import LogoChile from "../../components/assets/images/LogoChile.png";
import Libertad from "../../components/assets/images/Libertad.jpg";
import BanderaEscudo from "../../components/assets/images/banderaescudo.jpg";
import BotonVolver from "../../components/html/button/BotonVolver";
import BotonGuardar from "../../components/html/button/BotonGuardar";
import Temas from "./Temas";

// css
import "./style.css";

function Home() {
  let navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handlePresentacion = () => {
    navigate("/presentacion");
  };

  const handleExplicame = () => {
    navigate("/explicame");
  };

  return (
    <>
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 home">
              <div className="row">
                <div className="col-6 d-flex justify-content-start layer">
                  <div className="d-flex flex-column align-items-center">
                    <div className="row">
                      <div className="col-12">
                        <h2 className="titulo">Red Patriota</h2>
                      </div>
                      <div className="col-12">
                        <h2 className="h1 fc-white fw-bold text-center">
                          Una Sola voz
                        </h2>
                      </div>
                      <div className="col-12">
                        <h1 className="h1 fc-white fw-bold text-center">
                          por nuestra Patria
                        </h1>
                      </div>
                      <div className="col-12">
                        <BotonVolver
                          text="Entrar"
                          onClickHandler={handleLogin}
                        />
                        {/* 
                        <BotonGuardar
                          text="Enviar"
                          onClickHandler={handleLogin}
                        /> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3 offset-3 d-flex justify-content-end">
                  <span>
                    <img src={LogoChile} alt="" className="logo" />
                  </span>
                  <span>
                    <img src={Libertad} alt="" className="logo" />
                  </span>
                  <span>
                    <img src={BanderaEscudo} alt="" className="logo" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-sm btn-primary" onClick={handlePresentacion}>
          Presentacion
        </button>
        <button className="btn btn-sm btn-primary" onClick={handleExplicame}>
          Explicame
        </button>
        <Temas />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default Home;
