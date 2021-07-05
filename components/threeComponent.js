import Style from './../styles/Home.module.css'
import Image from 'next/image'

import TerceiraImage from './../img/Camada1.png'
import SegundaImage from './../img/Camada2.png'
import QuartaImage from './../img/Camada3.png'
import QuintaImage from './../img/Camada4.png'
import SextaImage from './../img/Camada5.png'
import PrimeiraImage from './../img/Camada6.png'

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