import portfolioImg from "../../../assets/portfolio.png"

function HeaderContentApp() {

    return(
        <>
        <img src={portfolioImg} alt="Portfolio imagem" />
        <span>Sobre</span>
        <span>Stack</span>
        <span>Projetos</span>
        <button className="button__style">Contato</button>
        </>
    )
}

export default HeaderContentApp;