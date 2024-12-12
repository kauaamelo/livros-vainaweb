import style from './inicio.module.scss'
import communityCard1 from '../../../assets/communityCard1.png'
import readingCard2 from '../../../assets/readingCard2.png'
import transformCard3 from '../../../assets/transformCard3.png'
import balanceCard4 from '../../../assets/balanceCard4.png'

export default function Inicio() {
    return(
        <main>
            <section className={style.sessaoImg}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            <section className={style.porqueDoar}>
                <h2>Porque devo doar ?</h2>
                <div className={style.containerCards}>
                    <section>
                        <img src={communityCard1} alt="Ilustração de um circulo com 4 pessoas"/>
                        <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social</p>
                    </section>
                    <section>
                        <img src={readingCard2} alt="Ilustração de um boneco lendo livro"/>
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </section>
                        <section>
                        <img src={transformCard3} alt="Ilustração de 6 pessoas unindo forças"/>
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </section>
                    <section>
                        <img src={balanceCard4} alt="Ilustração de uma balança representando igualdade"/>
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </section>
                </div>
            </section>
            
        </main>
    )
}