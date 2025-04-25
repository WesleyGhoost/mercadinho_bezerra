import './Header.css';
import Reveal from '../Reveal';
import merc_img_1 from '../../assets/merc-bezerra_1.jpg'


function Header() {
    return (
        <header className='header-container'>
            <img className='header-img' src={merc_img_1} alt="Entrada do Mercadinho Bezerra" />
            <div className='header-content'>
                <Reveal delay={0.2}>
                    <h1 className='header-title'>Mercadinho Bezerra</h1>
                </Reveal>
                <Reveal delay={0.3}>
                    <h3 className='header-subtitle'>Venha conhecer a lojinha mais humilde do Capão!</h3>
                </Reveal>
            </div>
        </header>
    )
}

export default Header;
