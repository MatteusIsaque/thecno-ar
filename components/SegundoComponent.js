import Style from './../styles/Home.module.css'
import Button from './button'
import Image from 'next/image'

// import PrimeiraImg from './../img/letra-fundo.jpg'

export default function ReferenciaNoTrabalho() {

    return (
        <section className={Style.ReferenciaComponent}>
            <div>

            </div>
            <div>
                <h1>
                    <span>Destaque</span> sua marca, Invista na <span>sua empresa</span>,<br /> Mostre ao seu <span>publico</span> onde você está!
                </h1>
                    <p>FACHADAS EM <span>ACM</span></p>
                    <p>REVESTIMENTO EM <span>ACM</span></p>
                    <p>LETREIROS EM <span>LED</span></p>
                    <p>LUMINOSOS</p>
                    <p>LETRA CAIXA</p>
                    <Button textoButton="Chamar Agora" />
            </div>
        </section>
    )
}