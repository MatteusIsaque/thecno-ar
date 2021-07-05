import Style from './../styles/Home.module.css'
import Button from './button'
import { useEffect, useState } from 'react'
import Link from 'next/link'

import axios from 'axios'

export default function Final() {

    const [Nome, setNome] = useState("")
    const [Numero, setNumero] = useState("")
    const [Texto, setTexto] = useState("")

    const [direcionar, setDirecionar] = useState(0)

    const [validar, setValidar] = useState()




    async function enviarItem(event) {

        event.preventDefault()

        const data = {
            Nome,
            Numero,
            Texto
        }

        try {
            const resposta = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/nodemailer`, data)
        } catch (error) {
            alert(error)
        }
    }

    useEffect(()=>{

        if(Numero.length >= 4 && Nome.length >= 4){
            setValidar(true)
         } else {
             setValidar(false)
         }

        const btnForm = document.getElementById("buttonForm")

        if(validar === true) {
            btnForm.disabled = false
        } else  {
            btnForm.disabled = true
        }

        if(direcionar === 1) {
            window.location.replace(`${process.env.NEXT_PUBLIC_URL}/obrigado2021`)
        } else {
            return
        }

    })


    return (
        <section className={Style.FinalSection}>
            <div className={Style.DivTexto}>
                <h3>Entre em contato</h3>
                <br /><br />
                <p>Envie qualquer duvida, pergunta, ou pedido de orçamento<br /> no maximo em 24h retornaremos o contato por Whatsapp.<br />
                caso prefirir,<br /> acesse o link do whatsapp a baixo e fale diretamente<br /> com um de nossos Profissionais.</p>
                <br /><br />

                <p className={Style.InfoMoradia}>Estra. Do Campo Limpo, 4725 - Vila Pirajussara<br /> São Paulo - SP, 05757-060</p>
                <br/>
                <p className={Style.InfoMoradia}>telefone: 11 99451-9628</p>
                <Button textoButton="Falar com atendente" />

            </div>
            <div className={Style.DivForm}>
                <form onSubmit={enviarItem}>
                    {
                        Nome.length >= 4 ? <p></p>: <p>Preencha o campo *</p>
                        
                    }
                    
                    <input type="text" value={Nome} placeholder="Nome" onChange={(event) => { setNome(event.target.value) }}></input>
                    {
                        Numero.length >= 4 ? <p></p>: <p>Preencha o campo *</p>
                        
                    }
                    <input type="text" value={Numero} placeholder="Numero" onChange={(event) => { setNumero(event.target.value) }}></input>
                    <p></p>
                    <textarea type="message" value={Texto} placeholder="Mensagem" onChange={(event) => { setTexto(event.target.value) }}></textarea>
                    <button type="submit" id="buttonForm" onClick={() => {setDirecionar(direcionar+1)}}>Enviar</button>
                </form>
            </div>
        </section>
    )
}