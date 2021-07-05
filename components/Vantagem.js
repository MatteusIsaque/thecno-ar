import Style from './../styles/Home.module.css'
import Image from 'next/image'

import PrimeiraImage from './../img/Camada1.jpg'
import SegundaImage from './../img/cada3.jpg'
import TerceiraImage from './../img/DNA.jpg'

import Button from './button'


export default function Vantagens() {

    return (
        <section className={Style.threeSection}>
            <h3> Paineis e letreiros para fachadas em ACM</h3>
            <p>Desenvolvemos logos, totens, letras e paineis, com ou sem iluminação. desenvolvimento em instalação com garantia e qualidade.</p>
            <div className={Style.Vantagens}>
                <Image src={PrimeiraImage} width={528} height={400} layout="responsive" />

                <Image src={SegundaImage} width={528} height={400} />

                <Image src={TerceiraImage} width={528} height={400} />
            </div>
            <p>Faça um orçamento sem compromisso do seu projeto através do nosso whatsapp.</p>
            <Button textoButton="Quero Saber Mais" />

        </section>
    )
}