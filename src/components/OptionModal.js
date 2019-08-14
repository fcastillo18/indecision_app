import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return (
        <Modal
        // !! real boolean values
            isOpen={!!props.selectedOption}
            onRequestClose={props.handleClearSelectedOption} //to close the modal when user click ESC or click outside the modal.
            contentLabel="Select an option"
            closeTimeoutMS={200}
            className="modal"
        >
            <h3 className="modal__title">Select an option</h3>
            {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
            <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
        </Modal>
    )
}

export default OptionModal;