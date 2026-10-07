import { useState } from "react";
import "./App.css";

const mensagens = [
  "A paz que você procura também pode começar dentro de você.",
  "Respire fundo. Você não precisa resolver tudo de uma vez.",
  "Cuide da sua mente com a mesma atenção que você cuida do seu corpo.",
  "Cada novo dia é uma oportunidade para recomeçar.",
  "Conhecer a si mesmo é uma das maiores jornadas da vida.",
];

function App() {
  const [mensagem, setMensagem] = useState(mensagens[0]);

  function novaMensagem() {
    const indice = Math.floor(Math.random() * mensagens.length);
    setMensagem(mensagens[indice]);
  }

  return (
    <div className="site">
      <header className="cabecalho">
        <div className="logo">🌙 Guia Espiritual</div>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#meditacao">Meditação</a>
          <a href="#reflexao">Reflexão</a>
          <a href="#mensagem">Mensagem</a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-texto">
            <span className="etiqueta">UM MOMENTO PARA VOCÊ</span>

            <h1>
              Encontre paz,
              <br />
              equilíbrio e <span>luz.</span>
            </h1>

            <p>
              Um espaço para aprender sobre espiritualidade, meditação,
              autoconhecimento e pequenas atitudes que podem trazer mais
              tranquilidade para o dia a dia.
            </p>

            <a className="botao" href="#meditacao">
              Começar a jornada
            </a>
          </div>

          <div className="hero-lua">
            <div className="lua">☾</div>
            <span>Respire • Reflita • Evolua</span>
          </div>
        </section>

        <section id="meditacao" className="secao">
          <div className="titulo-secao">
            <span>01</span>
            <div>
              <h2>Meditação</h2>
              <p>
                Reserve alguns minutos para desacelerar e prestar atenção ao
                momento presente.
              </p>
            </div>
          </div>

          <div className="cartoes">
            <article className="cartao">
              <div className="icone">🧘</div>
              <h3>Encontre um lugar tranquilo</h3>
              <p>
                Escolha um lugar confortável onde você possa ficar alguns
                minutos sem muitas distrações.
              </p>
            </article>

            <article className="cartao">
              <div className="icone">🌬️</div>
              <h3>Preste atenção à respiração</h3>
              <p>
                Inspire lentamente pelo nariz e expire devagar. Observe o ar
                entrando e saindo.
              </p>
            </article>

            <article className="cartao">
              <div className="icone">✨</div>
              <h3>Observe seus pensamentos</h3>
              <p>
                Não é preciso impedir os pensamentos. Apenas observe-os e
                volte sua atenção para a respiração.
              </p>
            </article>
          </div>
        </section>

        <section id="reflexao" className="reflexao">
          <div>
            <span className="etiqueta">AUTOCONHECIMENTO</span>
            <h2>Conhecer a si mesmo também é uma forma de crescer.</h2>
            <p>
              A espiritualidade pode ser entendida de diferentes maneiras.
              Para algumas pessoas, ela está ligada à religião; para outras,
              pode estar relacionada à natureza, à reflexão, à meditação ou à
              busca por um sentido para a vida.
            </p>
          </div>

          <div className="lista-reflexao">
            <div>
              <span>01</span>
              <strong>Observe seus sentimentos</strong>
              <p>Tente entender como você está se sentindo.</p>
            </div>

            <div>
              <span>02</span>
              <strong>Valorize o presente</strong>
              <p>Evite viver apenas pensando no passado ou no futuro.</p>
            </div>

            <div>
              <span>03</span>
              <strong>Pratique a gratidão</strong>
              <p>Lembre-se de pequenas coisas boas que aconteceram.</p>
            </div>
          </div>
        </section>

        <section id="mensagem" className="mensagem">
          <span className="etiqueta">MENSAGEM DO DIA</span>

          <div className="aspas">“</div>

          <p>{mensagem}</p>

          <button onClick={novaMensagem}>Receber outra mensagem ✨</button>
        </section>
      </main>

      <footer>
        <div>
          <strong>🌙 Guia Espiritual</strong>
          <p>
            Um projeto educativo sobre reflexão, equilíbrio e autoconhecimento.
          </p>
        </div>

        <div className="footer-direitos">
          <p>Feito com curiosidade e criatividade • 2026</p>
        </div>
      </footer>
    </div>
  );
}

export default App;