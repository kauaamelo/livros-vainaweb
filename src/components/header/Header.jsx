import logoLivro from '../../assets/logoLivro.png'
import search from '../../assets/search.png'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Inicio from '../../assets/pages/inicio/Inicio'
import LivrosDoados from '../../assets/pages/livrosDoados/LivrosDoados'
import QueroDoar from '../../assets/pages/queroDoar/QueroDoar'
import style from './header.module.scss'   

export default function Header() {
    return(
        <BrowserRouter>
        <header className={style.header}>
            <section className={style.logoHeader}>
                <img src={logoLivro} alt="Logo do site, um livro aberto de capa azul nas laterais"/>
                <h1>Livro Vai na Web</h1>
            </section>
            <nav className={style.navLinks}>
                <ul>
                    <li><Link className={style.link} clasto='/'>Inicio</Link></li>
                    <li><Link className={style.link} to='/livros-doados'>Livros Doados</Link></li>
                    <li><Link className={style.link} to='/quero-doar'>Quero Doar</Link></li>
                </ul>
            </nav>
            <section className={style.barraPesquisa}>
                <input type="search" name="" id="" placeholder='O que você procura ?'/>
                <button><img src={search} alt="Imagem de lupa branca para pequisar livros"/></button>
            </section>
        </header>
        <Routes>
            <Route path='/' element={<Inicio/>} />
            <Route path='/livros-doados' element={<LivrosDoados/>} />
            <Route path='/quero-doar' element={<QueroDoar/>} />
        </Routes>
        </BrowserRouter>
    )
}