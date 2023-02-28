import styles from "./styles.module.css"

const SubHeader = (props) => {
    return (
        <div className={styles.subHeader_container}>
            <div id={props.id} className={styles.title}>{props.title}</div>
            <div className={styles.postTitle}>{props.postTitle}</div>
        </div>
    )
}

export default SubHeader