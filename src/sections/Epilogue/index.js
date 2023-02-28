import SubHeader from "../../components/Subheader"
import MenuCard from "../../components/MenuCard"
import styles from "./styles.module.css"
import { useSelector } from "react-redux";

const Epilogue = () => {
    const cards = useSelector((state) => state.menuCard.epilogue);
    return (
        <div>
            <SubHeader title="Епілог" postTitle="Десерти" id="epilogue" />
            <div className={styles.cards_wrapper}>
                {cards.map((menuItem) => (
                    <MenuCard {...menuItem} />
                ))}
            </div>
        </div>
    )
}

export default Epilogue