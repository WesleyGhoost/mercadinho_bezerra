import './About.css'
import Reveal from '../Reveal'
import merc_img_2 from '../../assets/merc-bezerra_2.jpg'

function About() {
    return (
        <section className='about-container'>
            <Reveal delay={0.2}>
                <h2 className='about-title'>SOBRE</h2>
            </Reveal>
            <div className='about-subcontainer'>
                <p className='about-subcontainer-text-1'>
                    O Mercadinho Bezerra teve seu início em 2019, quando Luiz Teixeira, após ter conseguido
                    juntar a grana de diversos dos seus serviços já exercidos, começou a comprar item por
                    item para montar uma lojinha. Comprando primeiramente suas prateleiras, depois sua geladeira, alugando o local e assim foi...
                </p>
                <img className='about-subcontainer-img' src={merc_img_2} alt="Por dentro da loja do Sr Luiz" />
                <p className='about-subcontainer-text-2'>
                    E depois de 6 anos de trabalho, Sr Luiz e o Mercadinho Bezerra atraem diversos clientes pelas redondezas,
                    atraindo os mesmos pelo seu jeito humilde e espontâneo de lidar com as pessoas.
                </p>
            </div>
        </section>
    )
}

export default About