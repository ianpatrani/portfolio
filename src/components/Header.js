import '../index.css'
import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Header() {

    const [t, i18n] = useTranslation("global");//t es el texto traducido y i18n podemos generar el cambio de lenguaje

    return (
        <header>
            <h2 className="h1h2">{t("header.hello-world")}</h2>
            <button value="es" onClick={() => i18n.changeLanguage("es")}>Español</button>
            <button value="en" onClick={() => i18n.changeLanguage("en")}>English</button>
            <div className="line" />
            <br /><br />
            <h1 className="h1h2">C:/DOS</h1>
            <h1 className="h1h2">C:/DOS/RUN</h1>
            <h1 className="h1h2">RUN/DOS/RUN</h1>
        </header>

    )

}