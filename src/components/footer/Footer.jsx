import style from '../footer/footer.module.scss'
import logoFacebook from '../../assets/logoFacebook.png'
import logoLinkedin from '../../assets/logoLinkedin.png'
import logoInstagram from '../../assets/logoInstagram.png'

export default function Footer(){
    return (
        <footer className={style.footer}>
            <section className={style.contatosFooter}>
                <p>4002-8922</p>
                <nav>
                    <a href=""><img src={logoFacebook} alt="" /></a>
                    <a href=""><img src={logoLinkedin} alt="" /></a>
                    <a href=""><img src={logoInstagram} alt="" /></a>
                </nav>
            </section>
            <section className={style.copyright}>
                <p>Layout desenvolvido por Kauã Alves para projeto Vai Na Web para fins educativos - 2024</p>
            </section>
        </footer>    
    )
}