import { motion } from 'framer-motion';
import Backdrop from '../Backdrop';

const flip = {
    hidden: {
      transform: "scale(0) rotateX(-360deg)",
      opacity: 0,
      transition: {
        delay: 0.3,
      },
    },
    visible: {
      transform: " scale(1) rotateX(0deg)",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    close: {
      transform: "scale(0) rotateX(360deg)",
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

const Modal = ({handleClose}) => {
    return (
        <Backdrop onClick={handleClose}>
            <motion.div 
            onClick={(e) => e.stopPropagation()}
            className='modal'
            variants={flip}
            initial='hidden'
            animate='visible'
            exit='visible'
            >
            </motion.div>
        </Backdrop>
    )
}

export default Modal;