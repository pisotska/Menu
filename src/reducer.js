import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    menuCard: {
        exposition: [
            {
                id: 1,
                img: "https://klopotenko.com/wp-content/uploads/2018/02/Karpaccio-Yazyk_site.jpg",
                title: "Язиката Мотря",
                weight: "270г",
                author: "«Кайдашева сім'я» І.Нечуй-Левицький",
                description: "Варений яловичий язик в маринаді з лимоном , соєвим соусом та імбиром",
                price: 175,
                amount: 1,
            },
            {
                id: 2,
                img: "https://i.obozrevatel.com/food/recipemain/2019/2/5/screenshot1.jpg?size=300x200",
                title: "Цвіт яблуні ",
                weight: "170г",
                author: "«Цвіт яблуні» М.Коцюбинський",
                description: "Паштет з телячої печінки з яблуками і ароматом розмарину, коньяку та ялівцю.",
                price: 195,
                amount: 1,
            },
            {
                id: 3,
                img: "http://picantecooking.com/upload/iblock/ce1/krostini_z_kozyachim_sirom_gorikhami_ta_zhuravlinoyu.jpg",
                title: "Хлібні поля",
                weight: "350г",
                author: "«Intermezzo» М.Коцюбинський",
                description: "Кростіні(брускети) з козячим сиром,горіхами та журавлиною",
                price: 200,
                amount: 1,
            },
        ],
        prologue: [
            {
                id: 4,
                img: "https://klopotenko.com/wp-content/uploads/2023/02/vinegret-z-kozunum-surom_sitewebukr-1000x600.jpg?v=1675861016",
                title: "На буряки",
                weight: "350г",
                author: "«На буряки» Г.Косинка",
                description: "Вінегрет з запеченими овочами,солоними огірками,козячим сиром та спеціями",
                price: 210,
                amount: 1,
            },
            {
                id: 5,
                img: "https://klopotenko.com/wp-content/uploads/2023/01/salat-z-pshenuceu-ta-syrom_sitewebukr-1000x600.jpg?v=1673600981",
                title: "На панщині пшеницю жала",
                weight: "350г",
                author: "«На панщині пшеницю жала» Т.Шевченко",
                description: "Салат з пшеницею,горіховим сиром, м'ятою та оливками ",
                price: 195,
                amount: 1,
            },
            {
                id: 6,
                img: "https://klopotenko.com/wp-content/uploads/2018/03/salat-z-zymovyh-ovochiv_siteWeb-Ukr.jpg",
                title: "Сад Гетсиманський",
                weight: "370г",
                author: "«Сад Гетсиманський» І.Багряний",
                description: "Барвистий та корисний салат із запечених коренеплодів",
                price: 160,
                amount: 1,
            },
        ],
        culmination: [
            {
                id: 7,
                img: "https://klopotenko.com/wp-content/uploads/2018/09/Gribna-yushka-z-vishnyami_siteWebUkr.jpg",
                title: "Усмішки від Остапа Вишні",
                weight: "390г",
                author: "«Усмішка» Остап Вишня",
                description: "Грибна юшка на бульйоні з білими грибами і вишнями",
                price: 240,
                amount: 1,
            },
            {
                id: 8,
                img: "https://assets.dots.live/misteram-public/792bfae3-5f8f-4fca-bf1b-5b296931cdf5.png",
                title: "Чия грушка?",
                weight: "400г",
                author: "«Кайдашева сім'я» І.Нечуй-Левицький",
                description: "Червоний борщ на свинячих ребрах з копченою грушею",
                price: 150,
                amount: 1,
            },
            {
                id: 9,
                img: "https://cdn.pro-nails.ru/kuchnia/4644984/zupa_rybna_w_trzech_odsonach_przepis_rosyjska-_z_karpia-_z_dorsza.jpg.webp",
                title: "Сом",
                weight: "370г",
                author: " «Сом» Остап Вишня",
                description: "Рибний суп з овочами та свіжим кропом",
                price: 160,
                amount: 1,
            },
        ],
        end: [
            {
                id: 10,
                img: "https://novograd.city/upload/article/o_1f0ivg51fkut1mpg1gr81gm418672a.jpg",
                title: "Пироги від Франка",
                weight: "490г",
                author: "«Пироги з черницями» І.Франко",
                description: "Вареники з кропивою і сиром фета",
                price: 210,
                amount: 1,
            },
            {
                id: 11,
                img: "https://klopotenko.com/wp-content/uploads/2018/03/Pasta-z-gribami-v-garbuzi_siteWEb-Ukr.jpg",
                title: "Норовлива Наталка",
                weight: "400г",
                author: "«Наталка Полтавка» І.Котляревський",
                description: "Запашна паста з білими грибами і гливами в гарбузі",
                price: 150,
                amount: 1,
            },
            {
                id: 12,
                img: "https://static.apostrophe.ua/uploads/image/160e668d1b29f4eb5d7ba4d338890ac3.jpg",
                title: "Тіні забутих предків",
                weight: "470г",
                author: "«Тіні забутих предків» М.Коцюбинський",
                description: "Банош з бринзою і шкварками",
                price: 160,
                amount: 1,
            },
            {
                id: 13,
                img: "https://klopotenko.com/wp-content/uploads/2018/11/salat-z-kalmaramu_siteWebUkr.jpg",
                title: "",
                weight: "350г",
                author: "",
                description: "Крученики з курячим філе та в'яленими томатами",
                price: 260,
                amount: 1,
            },
            {
                id: 14,
                img: "https://cdn.segodnya.ua/i/original/media/image/5e2/0b5/b70/5e20b5b70f34e.jpg.webp",
                title: "",
                weight: "100г",
                author: "",
                description: "Бісквіт з грибами та цвітною капустою",
                price: 160,
                amount: 1,
            },
            {
                id: 15,
                img: "https://shuba.life/static/content/thumbs/1200x630/b/fa/lelvcp---c1200x630x50px50p-c1200x630x50px50p-up--5f2b2e6034fcf05bb91fa1698b4a6fab.jpg",
                title: "Трипудовий гарбуз",
                weight: "100г",
                author: "«Трипудовий гарбуз» М.Стельмах",
                description: "Гарбузовий пиріг",
                price: 130,
                amount: 1,
            },
        ],
        epilogue: [
            {
                id: 16,
                img: "https://cdn.segodnya.ua/i/image_1200x630/media/image/5e0/df3/210/5e0df3210924b.jpg",
                title: "Дуля з маком",
                weight: "300г",
                author: "«Дуля з маком» Т.Чорновіл",
                description: "Сирники з маком",
                price: 230,
                amount: 1,
            },
            {
                id: 17,
                img: "https://mlynci.com.ua/wp-content/uploads/2018/01/Korzhiki-2.jpg",
                title: "Вулик з медом",
                weight: "350г",
                author: "«Ласий до меду парубок» І.Нечуй-Левицький",
                description: "Млинці на молоці з медовою поливкою",
                price: 150,
                amount: 1,
            },
            {
                id: 20,
                img: "https://blog.metro.ua/wp-content/uploads/2019/05/1-min-19.jpg",
                title: "Пристрасть Чіпки",
                weight: "320г",
                author: "«Хіба ревуть воли,як ясла повні?» П.Мирний",
                description: "Желе на основі збитих вершків і алкоголю",
                price: 150,
                amount: 1,
            },
        ],

    },
    cart: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_DISH":
            toast.success("Додано в корзину", { theme: "colored", position: toast.POSITION.BOTTOM_RIGHT, });
            return {
                ...state,
                cart: [...state.cart, action.payload],

            };
        case "DELETE_DISH":
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };
        case "CLEAN_CART":
            return {
                ...state,
                cart: []
            }
        default:
            return state
    };
}

export default reducer;