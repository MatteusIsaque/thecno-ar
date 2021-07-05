import Link from 'next/link'
import Style from './../styles/Home.module.css'

import TagManager from "react-gtm-module"

export default function Button(props) {

    return (
        <Link href="https://api.whatsapp.com/send?phone=5511994519628">
            <button id="captura-click-zap" onClick={()=>{console.log("ae")}} className={Style.ButtonCss}> {props.textoButton} </button>
        </Link>
    )
}