import carolinacedro_pic from '../Assets/carolinacedro_pic.jpg';
import trats from '../Assets/trats.svg';
import './styles.css';

export function Mastermind() {
  return (
    <section className="masterMind">
      <div className="masterPic">
        <img src={carolinacedro_pic} alt="foto garota" />
      </div>
      <div className="masterAbout">
        <span>
          <img src={trats} />
          <h3>Hello buddy</h3>
        </span>
        <p>
          _Olá eu me chamo Carolina Cedro e sou idealizadora do Projeto
          hacktoberProject 2022!
        </p>
        <p>_Sinta-se a vontade para contribuir com o projeto.</p>
        <ul>
          <li>
            <a href="">Participar</a>
          </li>
          <li>
            <a href="">Colaborar com este Projeto</a>
          </li>
          <li>
            <a href="">Conheça-me</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
