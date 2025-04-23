import styles from './Local.module.css'
import { useEffect } from "react";

function Local() {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

    useEffect(() => {
        const script = document.createElement('script')
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`
        script.async = true
        window.initMap = function () {
            new window.google.maps.Map(document.getElementById('map'), {
                center: { lat: -23.6719403, lng: -46.7851142 },
                zoom: 16
            })
        };
        document.body.appendChild(script)
    }, [])

    return (
        <section>
            <h2>Localização</h2>
            <div id='map' style={{ height: '300px', width: '50%' }}></div>
        </section>
    )
}

export default Local