import styles from "../../../styles/style.module.css";

function SectionAboutMe() {
  return (
    <section className={styles.section__desc}>
      <div className={styles.container__aboutme}>
        <div>
          <h2>Sobre mim</h2>
        </div>

        <div className={styles.div__desc}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex
            magna, imperdiet sodales sem quis, sollicitudin lobortis purus.
            Etiam a ipsum finibus, dictum leo non, ultrices dui. Nunc id felis
            pharetra, vehicula enim in, suscipit nisi. Mauris eget sapien a
            velit facilisis ullamcorper feugiat nec orci. Duis ac iaculis
            turpis, at feugiat orci.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SectionAboutMe;
