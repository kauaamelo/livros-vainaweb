import s from './livrosDoados.module.scss'
import axios from 'axios'
import {useState,useEffect} from 'react'

export default function LivrosDoados(){

    const [livros,setLivros] = useState([])

    const getLivros = async() => {
       const resposta = await axios.get('https://api-livros-vnw-4x9j.onrender.com/livros') 
       setLivros(resposta.data)
    }

    useEffect(()=>{
        getLivros()
    },[])

    return(
        <section className={s.livrosDoadosSection}>
            <h2>Livros Doados</h2>
            <section className={s.containerCards}>
                {
                   livros.map((item)=>(
                    <section>
                        <img src={item.imagem_url} alt={`Titulo do livro ${item.titulo}`} />
                        <h3>{item.titulo}</h3>
                        <p>{item.autor}</p>
                        <p>{item.categoria}</p>
                    </section>
                   )) 
                }
            </section>
        </section>
    )
}