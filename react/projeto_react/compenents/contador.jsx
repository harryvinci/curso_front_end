import { useState } from "react"; //hook do React

export default function MeuContador(){

    const [contador, setContador] = useState(0);  //retorno do hook importado. array [vairável de estado, setVariavel]

    function aumentar(){

        setContador(contador +1);

    }

    return(

        <div>

            <h1>Meu Contador</h1>
            <h3>{contador}</h3>
            <button onClick={aumentar}>Aumentar</button>
            
            {contador > 9 ? <h3>Número muito grande.</h3> : null /* condicional -> { verificação ? verdadeiro : falso} */}

        </div>

    )
}