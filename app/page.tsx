import Image from "next/image";
import styles from "./page.module.css";
import TodoList from "./todoListApp/TodoList";

export default function Home() {
  return (
    <main className={styles.main}>
      <TodoList />
    </main>
  );
}