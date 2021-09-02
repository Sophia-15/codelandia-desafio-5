import React from 'react';
import './styles.scss';
import illustration from '../../assets/img/image.png';
import Button from '../Button/index';
import play from '../../assets/img/play.svg';

function Main() {
  return (
    <main>
      <section className="info">
        <span>HAYAO MIYAZAKI</span>
        <h1>A VIAGEM DE CHIHIRO</h1>
        <p>
          Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a
          desobedecem são transformados em animais.
        </p>

        <div className="buttons">
          <Button
            name="ASSISTIR AGORA"
            source={play}
            className="watch-now"
            link="https://www.netflix.com/br/title/60023642?source=35"
          />
          <Button
            name="ASSISTA O TRAILER"
            className="watch-trailer"
            link="https://www.youtube.com/watch?v=ByXuk9QqQkk&t=9s"
          />
        </div>
      </section>

      <img src={illustration} alt="Illustration" className="illustration" />
    </main>
  );
}

export default Main;
