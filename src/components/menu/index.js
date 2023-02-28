import Tooltip from '@mui/material/Tooltip';
import styles from "./styles.module.css"


const Menu = () => {
    const menu = [
        { title: "Закуски", link: "#exposition", text: "Експозиція" },
        { title: "Салати", link: "#prologue", text: "Зав'язка " },
        { title: "Перші страви", link: "#culmination", text: "Кульмінація" },
        { title: "Основні страви", link: "#end", text: "Розв'язка" },
        { title: "Десерти", link: "#epilogue", text: "Епілог" },
    ]

    return (
        <div className={styles.menu}>
            {menu.map((item) => {
                return <Tooltip title={item.title} placement="bottom" arrow
                    componentsProps={{
                        tooltip: {
                            sx: {
                                fontSize: '18px',
                                backgroundColor: "black",
                            },
                        },
                    }}>
                    <a className={styles.menu_item} href={item.link}>{item.text}</a>
                </Tooltip>
            })}
        </div>

    );
}

export default Menu;