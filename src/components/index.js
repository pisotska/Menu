import { useState } from "react";
import Header from "./header";
import Description from "./description";
import Exposition from "../sections/Exposition";
import Prologue from "../sections/Prologue";
import Culmination from "../sections/Culmination";
import End from "../sections/End";
import Epilogue from "../sections/Epilogue";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import BasicModal from "./ModalCart.js";

import { ToastContainer } from 'react-toastify';

const Main = () => {
   const [isOpen, setIsOpen] = useState(false);
   const handleOpen = () => setIsOpen(true);
   const handleClose = () => setIsOpen(false);
   const list = useSelector((state) => state.cart);
   return (
      <>
         <div className="container">
            <Header list={list} handleOpenModal={handleOpen} />
            <Description />
         </div>
         <BasicModal handleClose={handleClose} isOpen={isOpen} />
         <Exposition />
         <Prologue />
         <Culmination />
         <End />
         <Epilogue />
         <Footer />
         <ToastContainer autoClose={1000} />
      </>
   )


}
export default Main