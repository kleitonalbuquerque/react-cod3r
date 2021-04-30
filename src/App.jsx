import "./App.css";

import Card from "./components/layout/Card";

import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basics/Familia";
import FamiliaMembro from "./components/basics/FamiliaMembro";
import Fragmento from "./components/basics/Fragmentos";
import Aleatorio from "./components/basics/Aleatorio";
import ComParametro from "./components/basics/ComParametro";
import Primeiro from "./components/basics/Primeiro";

const tag = <p>Conceitos</p>;
export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo={tag}>
        <strong>Olá React!</strong>
      </Card>

      <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
        <IndiretaPai />
      </Card>

      <Card titulo="#09 - Comunicação Direta" color="#59323C">
        <DiretaPai />
      </Card>

      <Card titulo="#08 - Condicional" color="#982395">
        <ParOuImpar numero={21} />
        <UsuarioInfo usuario={{ nome: "Fernando" }} />
        <UsuarioInfo usuario={{ email: "fer@nando.com" }} />
        <UsuarioInfo usuario={{}} />
        <UsuarioInfo />
      </Card>

      <Card titulo="#07 - Repetição" color="#3A9AD9">
        <TabelaProdutos />
      </Card>

      <Card titulo="#06 - Repetição" color="#FF4C65">
        <ListaAlunos />
      </Card>

      <Card titulo="#05 - Componente com Filhos" color="#0047AB">
        <Familia sobrenome="Ferreira">
          <FamiliaMembro nome="Gustavo" />
          {/* <FamiliaMembro nome="Juliana" />
          <FamiliaMembro nome="Carlos Alberto" /> */}
        </Familia>
      </Card>

      <Card titulo="#04 - Desafio Aleatório" color="#FF7F50">
        <Aleatorio min={1} max={60} />
      </Card>

      <Card titulo="#03 - Fragmento" color="#DE3163">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Com Parâmetro" color="#DFFF00">
        <ComParametro
          situacao="Situação do Aluno"
          aluno="Pedro"
          nota={9.3}
          status
        />
        <ComParametro
          situacao="Situação do Aluno"
          aluno="Mariana"
          nota={10}
          status
        />
      </Card>

      <Card titulo="#01 - Primeiro Componente" color="#40E0D0">
        <Primeiro />
      </Card>
    </div>
  </div>
);
