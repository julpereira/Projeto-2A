import styles from "../app/page.module.css";   

export default function Home() {
  return (
    <div>
      <h1 className={styles.bemvindo}>Olá</h1>
      <p className={styles.paragrafo}>Seja bem vindo(a)!</p>
    </div>   
  );
}

