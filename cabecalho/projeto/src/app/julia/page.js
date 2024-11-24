import styles from "../julia/page.module.css";   

export default function Home() {
  return (
    <div>
      <h1 className={styles.ola}>Olá</h1>
      <p className={styles.paragrafo}>Seja bem vindo(a)!</p>
    </div>   
  );
}

