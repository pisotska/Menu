import Image from "../header/img/bg2.jpg"
import styles from "./styles.module.css"

const Description = () => {
    return (
        <>
            <div className={styles.title}>Відчуй літературу на смак!</div>
            <div className={styles.container}>
                <div className={styles.text}><p>У меню представлені популярні страви української кухні в авторській інтерпретації нашого шеф-кухаря. Найменування страв є еквівалентними з назвами творів видатних поетів та письменників.
                    Смакуючи нашу їжу ви зможете уявити та відчути атмосферу того чи іншого літературного шедевру. </p>
                    <br />
                    <p>На завершення, хороші емоції запакуємо з собою. Задовільнивши смакові рецептори ви можете потішити внутрішнього книголюба,
                        адже отримаєте у подарунок примірник книги, назву якої ви обрали.</p>
                </div>
                <div className={styles.images}>
                    <img className={styles.image} src={Image} alt="" />
                </div>
            </div>
        </>
    );
}

export default Description;