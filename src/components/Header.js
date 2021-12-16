import '../index.css'
import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Header() {

    const [t, i18n] = useTranslation("global");//t es el texto traducido y i18n podemos generar el cambio de lenguaje

    return (
        <header className='lng'>
            <button className='btnLng' value="es" onClick={() => i18n.changeLanguage("es")}>Español</button>
            <button className='btnLng' value="en" onClick={() => i18n.changeLanguage("en")}>English</button>
            {/*  <h1 className="h1h2">C:/DOS</h1>
            <h1 className="h1h2">C:/DOS/RUN</h1>
            <h1 className="h1h2">RUN/DOS/RUN</h1> */}
        </header>

    )

}