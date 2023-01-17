import './styles/global.css'
import { Habit } from "./components/Habit"

function App() { 

  return (

    <div>
      <Habit completed={3} />
      <Habit completed={10} />
      <Habit completed={20} />
      <Habit completed={30} />
    </div>
  )

}

export default App


//Componente: Pedaços de HTML que da pra reaproveitar / isolar na aplicação
//Propriedade: Informação enviada para modificação de um componente visual ou na parte comportamental dele

//Detalhe, acima, o componente criado Habits, para ficar aninhado (Um embaixo do outro) precisa ficar em volta de uma tag pai (uma div por exemplo)
//Caso contrário, a aplicação da erro