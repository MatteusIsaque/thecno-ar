import Style from './../styles/Home.module.css'
import { useEffect, useState } from 'react'
import Image from 'next/image'

import PrimeiraImage from './../img/thecnoar-oficina.jpg'
import SegundaImage from './../img/troca-de-filtro.jpg'
import LogoImage from './../img/Logo.png'

export default function PrimeiroComponent() {

    const [input, setInput] = useState()
    const [Width, setWidth] = useState()


    useEffect(() => {
        const btnInput = document.getElementById("input")

        const Resolução = window.innerWidth;

        if (Resolução >= 1250) {
            setWidth(true)
        } else {
            setWidth(false)
        }



        if (input == false) {
            btnInput.checked = true
        } else {
            btnInput.checked = false
        }
    })

    return (
        <>
            <div className={Style.LogoDiv}>
                <Image src={LogoImage} width={278} height={40}  />
            </div>
            <section className={Style.PrimeiraSection}>
                {
                    Width === true ? <>
                        <input type="checkbox" id="input" className={Style.Input} />
                        <div className={Style.PrimeiroComponent} onClick={() => { setInput(true) }}>
                            <Image src={PrimeiraImage} width={500} height={500} />
                        </div>
                        <div className={Style.SegundoComponent} onClick={() => { setInput(false) }}>
                            <Image src={SegundaImage} width={500} height={500} />
                        </div>
                    </> : <> <input type="checkbox" id="input" className={Style.Input} />
                        <div className={Style.PrimeiroComponent} onClick={() => { setInput(true) }}>
                            <Image src={PrimeiraImage} width={260} height={260} />
                        </div>
                        <div className={Style.SegundoComponent} onClick={() => { setInput(false) }}>
                            <Image src={SegundaImage} width={280} height={280} />
                        </div>
                    </>
                }
            </section>
        </>
    )
}