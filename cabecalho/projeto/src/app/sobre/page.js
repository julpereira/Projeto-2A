import styles from "../sobre/sobre.module.css";

export default function Sobre() {
    return(
        <main>
            <h1 className={styles.sobre}>Sobre</h1>
            <img src="/image/imagem2.jpg" alt="Imagem da Home" className={styles.pageImage} />
            <p className={styles.paragrafo}>Imagem gerada por IA</p>
        </main>
    )
}