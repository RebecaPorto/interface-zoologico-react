import './Home.css'
import Atracao from '../../components/Atracao/Atracao';
import Welcome from '../../components/Welcome/Welcome';
import Navegacao from '../../components/Navegacao/Navegacao';
import ImgCarrossel from '../../components/ImgCarrosel/imgCarrosel';
import FormAnimal from '../../components/FormAnimal/FormAnimal';

function Home() {
    const componentes = [];
    for (let i = 0; i <= 2; i++) {
        componentes.push(<Atracao key={i} />)
    }

    // Função para lidar com a mudança nos campos de entrada
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
};

// Função para lidar com o envio do formulário
const handleSubmit = (e) => {
    e.preventDefault(); // Evita o recarregamento da página
    // Envia os dados do formulário para o servidor
    //console.log(JSON.stringify(formData));
    fetch("http://localhost:3000/new/ave", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao enviar formulário');
            }
            // Trate a resposta do servidor conforme necessário
            console.log('Formulário enviado com sucesso');
        })
        .catch(error => {
            console.error('Erro:', error);
        });
};

    return (
        <>
            <Navegacao></Navegacao>
            {/*<Welcome />
            <div className="ctn-atracoes">
                {componentes}
            </div> */}
            {/* <ImgCarrossel /> */}
            <FormAnimal />
        </>
    );
}

export default Home;