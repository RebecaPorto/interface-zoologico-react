import './App.css'
import Navegacao from './components/Navegacao/Navegacao'
import Atracao from './components/Atracao/Atracao'

function App() {
let componentes = [];
  for(let i = 0; i <= 2; i++) {
    componentes.push(<Atracao key={1} />)
  }

  return (
    <>
      <Navegacao></Navegacao>
      <div className="ctn-atracoes">
      {componentes}
      </div>
    
    </>
  )
}

export default App
