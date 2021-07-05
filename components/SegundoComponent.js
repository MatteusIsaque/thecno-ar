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
                    OFICINA ESPECIALIZADA EM <span>AR CONDICIONADO</span> AUTOMOTIVO - LOCALIZADA NO <span>IPIRANGA</span>
                </h1>
                    <p>AR CONDICIONADO AUTOMOTIVO</p>
                    <p>INSTALAÇÃO E REPARO</p>
                    <p>CARGA DE GÁS</p>
                    <p>HIGIENIZAÇÃO</p>
                    <p>AUTO ELÉTRICO</p>
                    <Button textoButton="Chamar Agora" />
            </div>
        </section>
    )
}