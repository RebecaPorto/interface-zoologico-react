import './Navegacao.css'

function Navegacao(){
    return(
        <div className="barra-navegacao"> 
            <div className="logo-zoo">
                <h1>ZOOLÓGICO</h1>
            </div>

            <div className="navbar-opcoes">
                <ul>
                    <li>Início</li>
                    <li>Os animais</li>
                    <li>Fotos</li>
                    <li>Depoimentos</li>
                    <li>Login</li>
                </ul>
            </div>
        </div>
    )
}
 
export default Navegacao;