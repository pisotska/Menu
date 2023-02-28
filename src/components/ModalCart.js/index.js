import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useSelector } from "react-redux";
import Cart from '../Cart';
import styles from "./styles.module.css"
import ContactForm from '../ContactForm';
import FinishForm from '../FinishForm';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal({ isOpen, handleClose }) {

    const list = useSelector((state) => state.cart);
    const isEmptyCart = list.length === 0;
    console.log(isEmptyCart)

    const [step, setStep] = useState("cart");

    const handleChangeStep = (step) => {
        setStep(step);

    }

    const sum = list?.reduce((acc, current) => acc += current?.price, 0)

    return (
        <div>
            <Modal
                open={isOpen}
                onClose={() => {
                    handleClose();
                    handleChangeStep('cart')
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={style}>
                    {step === "cart" ?
                        (isEmptyCart ? <div className={styles.cart_text}>Ви ще нічого не обрали</div> :
                            <>
                                {list.map((item) => (

                                    <Cart {...item} list={list} />
                                ))}
                                <div className={styles.total}>
                                    <span>Загальна сума:</span>
                                    <span>{sum} грн</span>
                                </div>
                                <button className={styles.order} onClick={() => handleChangeStep("contactsForm")}>Оформити замовлення</button>
                            </>
                        )
                        : step === "contactsForm" ?
                            <div>
                                {<ContactForm changeStep={() => handleChangeStep("finishForm")} />}
                            </div> :
                            step === "finishForm" ?
                                <div>
                                    <FinishForm handleFinishStep={() => {
                                        handleClose();
                                        handleChangeStep('cart')
                                    }} />
                                </div>
                                :
                                null
                    }
                </Box>

            </Modal>
        </div>
    );
}