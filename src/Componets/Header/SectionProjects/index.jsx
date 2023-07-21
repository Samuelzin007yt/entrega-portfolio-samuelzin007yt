import styles from "../SectionProjects/style.module.css";

function RenderProjects({ listProjects }) {
  return (
    <>
      <div className={styles.div__title}>
        <h2>Projetos</h2>
      </div>

      <div className={styles.div_main}>
        <div className={styles.div__projects}>
          {listProjects.map((project) => {
            return (
              <>
                <div className={styles.div__allprojects}>
                  <div className={styles.div__content}>
                    <h2>{project.name}</h2>
                    <img src={project.img} alt="Icone gitHub" />
                  </div>

                  <div key={project.id} className={styles.container__title}>
                    <p>{project.description}</p>
                    <button className={styles.container__button}>Saiba mais</button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default RenderProjects;
