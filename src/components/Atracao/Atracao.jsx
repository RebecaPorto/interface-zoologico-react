import imgNotFound from '../../assets/img-not-found.png'
import './Atracao.css'

function Atracao() {
    return (
        <>
          <div className="ctn-atracao">
            <img src={imgNotFound}/>
            <p>Livia bosta</p>   
        </div>  
        </>

    );
 }


export default Atracao;