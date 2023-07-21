import styles from "../../../styles/style.module.css";

function RenderTechnologies({ cardsList }) {
  return (
    <>
      <div className={styles.div__main}>
        <div className={styles.div__cards}>
          <div>
            <h2>Tecnologias</h2>
          </div>
          <div className={styles.div__render}>
            <ul className={styles.cards__tecnologie}>
              {cardsList.map((technologie) => {
                return (
                  <li key={technologie.id} className={styles.li__cards}>
                    <img src={technologie.img} alt="" />
                    <h2>{technologie.name}</h2>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default RenderTechnologies;
