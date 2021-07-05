import Style from './../styles/Home.module.css'
import Image from 'next/image'

import PrimeiraImage from './../img/limpeza.jpg'
import SegundaImage from './../img/carga.jpg'
import TerceiraImage from './../img/auto-eletrico.jpg'

import Button from './button'


export default function Vantagens() {

    return (
        <section className={Style.threeSection}>
            <h3> SERVIÇOS DE AUTO ELÉTRICO E HIGIENIZAÇÃO AUTOMOTIVO</h3>
            <p>Realize a manutenção ou instalação de seu ar condicionado automotivo. Troca de filtro, higienização, carga de gás, limpeza e parte elétrico</p>
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