import "./ModalComponent.css";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement('#root');

const FirstModal = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);


    return(
        <div>
            <button onClick = {() => setModalIsOpen(true)}>Open Modal</button>
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
                <h2 className="title-modal" >This is the modal title</h2>
                <p>Omg I'm so happy, I though this gonna be harder</p>
                <div>
                    <button onClick= {() => setModalIsOpen(false)}>Close modal</button>
                </div>
                
            </Modal>
        </div>
    )
};

export default FirstModal;