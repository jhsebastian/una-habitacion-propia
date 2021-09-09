import "./ModalComponent.css";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement('#root');

const FirstModal = ({ textButton, title, text }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);


    return(
        <div>
            <button className="button-modal-open" onClick = {() => setModalIsOpen(true)}> { textButton } </button>
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
                <h2 className="title-modal" > { title } </h2>
                <p className="text-modal"> { text } </p>
                <div>
                    <button onClick= {() => setModalIsOpen(false)}>Salir</button>
                </div>
                
            </Modal>
        </div>
    )
};

export default FirstModal;