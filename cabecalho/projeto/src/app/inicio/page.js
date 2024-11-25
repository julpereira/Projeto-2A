import styles from "../inicio/inicio.module.css";

export default function Inicio() {
    return(
        <main>
            <h1 className={styles.inicio}>Início</h1>
            <img src="/image/imagem1.jpg" alt="Imagem da Home" className={styles.pageImage} />
            <p className={styles.paragrafo}>Imagem gerada por IA</p>
        </main>
    )
}