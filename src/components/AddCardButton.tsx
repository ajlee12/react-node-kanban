import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const AddCardButton = () => {
  const [ modalIsOpen, setIsOpen ] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  }
 
  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }
 
  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    // <button
    //   id='add-card-btn'
    //   // onClick={}
    // >
    //   + Add Card
    // </button>

    <div>
      <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          // style={customStyles}
          contentLabel="Example Modal"
        >
          {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2> */}
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
    </div>
  );
};

export default AddCardButton;