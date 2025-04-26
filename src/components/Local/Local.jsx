import Reveal from '../Reveal';
import './Local.css'
import { useEffect } from "react";

function Local() {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

    useEffect(() => {
        const script = document.createElement('script')
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`
        script.async = true
        window.initMap = function () {
            const map = new window.google.maps.Map(document.getElementById('map'), {
                center: { lat: -23.6719403, lng: -46.7851142 },
                zoom: 16
            });

            new window.google.maps.Marker({
                position: { lat: -23.6719403, lng: -46.7851142 },
                map: map,
                title: 'Mercadinho Bezerra'
            })
        };
        document.body.appendChild(script)
    }, [])

    return (
        <section className='local-container'>
            <Reveal delay={0.2}>
                <h2 className='local-title'>Localização</h2>
            </Reveal>
            <Reveal direction='left' delay={0.3}>
                <h3 className='local-localization'>
                    Rua Eurico Branco Ribeiro, 144 - Capão Redondo, SP
                </h3>
            </Reveal>
            <div id='map' style={{ height: '400px', width: '70%' }}></div>
        </section>
    )
}

export default Local