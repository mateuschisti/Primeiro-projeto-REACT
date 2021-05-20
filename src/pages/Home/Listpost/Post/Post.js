import { Cabecalho } from "./Cabecalho";
import { Image } from "./Image";
import { Interacao } from "./Interacao";
import { Titulo } from "./Titulo";
import { Legenda } from "./Legenda";
import { Comentarios } from "./Comentarios";

import './index.css'


export const Post = () => {
  return <div className='post' className='post'>
    <Cabecalho />
    <Image />
    <Interacao />
    <Titulo />
    <Legenda />
    <Comentarios />
  </div>
}