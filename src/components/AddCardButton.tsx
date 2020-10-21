import React, { FormEvent } from 'react';
import Modal from 'react-modal';
import ModalForm from './ModalForm';

Modal.setAppElement('#root');


const AddCardButton = () => {
  const [ modalIsOpen, setIsOpen ] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
 
  let subtitle: HTMLHeadElement | null;

  const afterOpenModal = () => {
    subtitle!.style.color = '#1F618D';
  };
 
  const closeModal = () => {
    setIsOpen(false);
  };

  const submitApp = (e: FormEvent) => {
    // e.preventDefault();
  };

  return (
    <div>
      <button onClick={openModal} id='add-card-btn'>+ Add Applicant</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          // style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={_subtitle => (subtitle = _subtitle)}>
            Add a New Applicant
          </h2>
          <ModalForm submitApp={submitApp} />
          <button onClick={closeModal}>Cancel</button>
        </Modal>
    </div>
  );
};

export default AddCardButton;