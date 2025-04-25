import './Products.css'
import merc_img_3 from '../../assets/merc-bezerra_3.jpg'
import merc_img_4 from '../../assets/merc-bezerra_4.jpg'
import Reveal from '../Reveal'

function Products() {
    return (
        <section className='products-container'>
            <Reveal delay={0.2}>
                <h2 className='products-title'>PRODUTOS</h2>
            </Reveal>
            <div className='products-fruits'>
                <div className='products-fruits-subcontainer-1'>
                    <Reveal direction='left' delay={0.3}>
                        <img className='products-fruits-subcontainer-1-img' src={merc_img_4} alt="Imagem das prateleiras de frutas" />
                    </Reveal>
                </div>
                <div className='products-fruits-subcontainer-2'>
                    <Reveal direction='right' delay={0.3}>
                        <h3 className='products-fruits-subcontainer-2-title'>Hortifruti</h3>
                    </Reveal>
                    <Reveal direction='right' delay={0.3}>
                        <p className='products-fruits-subcontainer-2-text'>
                            Escolha suas frutas dentro das nossas variadas opções! Temos laranja perâ, banana prata,
                            melancia, entre varias outras saindo no precinho! (o dono dá um descontinho extra se tiver um papo legal 😉)
                        </p> 
                    </Reveal>
                </div>
            </div>
            <div className='products-others'>
                <div className='products-others-subcontainer-1'>
                    <Reveal direction='left' delay={0.3}>
                        <h3 className='products-others-subcontainer-1-title'>Mercadoria Variada</h3>
                    </Reveal>
                    <Reveal direction='left' delay={0.3}>
                        <p className='products-others-subcontainer-1-text'>
                            Também temos mercadorias variadas! itens essências para a completar a sua mesa e sua receita!
                        </p>
                    </Reveal>
                </div>
                <div className='products-others-subcontainer-2'>
                    <Reveal direction='right' delay={0.3}>
                        <img className='products-others-subcontainer-2-img' src={merc_img_3} alt="Imagem das prateleiras de produtos variados" />
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

export default Products