import Head from 'next/head'


import PrimeiroComponent from './../components/TwoImagensInicio'
import ReferenciaNoTrabalho from './../components/SegundoComponent'
import Vantagem from './../components/Vantagem'
import ThreeComponent from '../components/threeComponent'
import Final from '../components/final'
import Creditos from './../components/Creditos'
import Whatsapp from './../components/buttonZap'

export default function Home() {



  return (
    <>
      <Head>

      </Head>
    
    <header>
      < PrimeiroComponent />
      < ReferenciaNoTrabalho />
      < Vantagem />
      <ThreeComponent />
      <Final />
      <Creditos />
      <Whatsapp />
    </header>
    </>
  )
}
