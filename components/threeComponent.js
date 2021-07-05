import Style from './../styles/Home.module.css'
import Image from 'next/image'

import PrimeiraImage from './../img/Ameripan.jpg'
import SegundaImage from './../img/JoseNeves.jpg'
import TerceiraImage from './../img/MaisEstilo.jpg'
import QuartaImage from './../img/Mega.jpg'
import QuintaImage from './../img/phoneStart.jpg'
import SextaImage from './../img/Rei.jpg'

export default function threeComponent() {
    return (
        <section className={Style.threeComponent}>
            <h2>Alguns Trabalhos</h2>
            <div className={Style.DuasImagens}>
                <Image src={PrimeiraImage} width={300} height={300} />
                <Image src={SegundaImage} width={300} height={300} />
                <Image src={TerceiraImage} width={300} height={300} />
                <Image src={QuartaImage} width={300} height={300} />
                <Image src={QuintaImage} width={300} height={300} />
                <Image src={SextaImage} width={300} height={300} />
            </div>
        </section>
    )
}