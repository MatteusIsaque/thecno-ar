import Image from 'next/image'
import Link from 'next/link'
import WhatsApp from './../img/zap.png'
import Style from './../styles/Home.module.css'

export default function buttonZap() {

    return (
        <div className={Style.btnZap}>
            <Link href="https://api.whatsapp.com/send?phone=5511994519628">
                <Image id="botao-flutuante-zap" src={WhatsApp} width={64} height={64} />
            </Link>
        </div>
    )
}