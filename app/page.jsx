import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Dafo APP</h1>
      <p>Crea tu DAFO personal facilmente.</p>
      <Link href="/acerca-de">Acerca de</Link>
      <Link href="/acerca-de">Mi perfil</Link>
    </main>
  );
}
