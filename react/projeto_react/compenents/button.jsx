import styles from '../src/button.module.css'

function TestButton(props){ //PROPS - parametro pra deixar o componente customizável
    
    return(
        <button className={styles.myButton}>{props.cta}</button>
    )
}
export default TestButton //comando para que o componente possa ser acessado por outros arquivos