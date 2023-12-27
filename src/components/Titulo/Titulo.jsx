import style from './Titulo.module.css'

function Titulo(){
    return(
        <div className={style.tituloContainer}>
            <h1>Organize as coisas!</h1>
            <img src='https://github.com/Nikolas14.png'></img>
        </div>
    )
}

export default Titulo