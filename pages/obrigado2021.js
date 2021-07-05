
import Link from 'next/link'
import Style from './../styles/Home.module.css'

export default function Obrigado() {

    return (
        <section className={Style.Obrigado}>
            <div>
                <h3>Obrigado por enviar sua mensagem!</h3>
                <Link href="/">
                    <button className={Style.ButtonCss}> Voltar Ao Inicio </button>
                </Link>
            </div>
        </section>
    )
}