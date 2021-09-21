import "./ModalComponent.css";
import Modal from "react-modal";
import { useState } from "react";
import "animate.css";

Modal.setAppElement('#root');

const FirstModal = ({ textButton, title, text, img }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);


    return(
        <div>
            <button className="button-modal-open animate__animated" onClick = {() => setModalIsOpen(true)}> { textButton } </button>
            <Modal 
            isOpen={modalIsOpen} 
            onRequestClose={() => setModalIsOpen(false)}
            style={
                {
                    overlay: {
                        backgroundColor: 'rgb(240, 203, 243)'
                    },
                    content: {
                        color: 'black',
                        fontFamily: 'edosz'
                    }
                }
            }
            >
                <div className="title-container">
                    <h2 className="title-modal" > { title } </h2>
                    <div>
                        <button className="button-close" onClick= {() => setModalIsOpen(false)}>X</button>
                    </div>
                </div>
                <div className="content-container">
                    <img className="img-modal" src={img} alt="" />
                    <p className="text-modal"> { text } </p>
                </div>
                
            </Modal>
        </div>
    )
};

export default FirstModal;