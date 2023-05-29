
//importando os componentes criados

import MinhaLista from "../compenents/MinhaLista";
import TestButton from "../compenents/button";;
import MeuContador from "../compenents/contador";
import FirstComponent from "../compenents/paragraph";

function App() {

  return (

    //devem ser encapsulados em tags
    <div className="container">
      <h1>Olá, mundo React!</h1>

      <FirstComponent />
      <TestButton cta="Clique aqui" />

      <MeuContador />

      <div>

        <h1>Listar no React</h1>
        <MinhaLista />

      </div>

    </div>

    
  )

}

export default App
