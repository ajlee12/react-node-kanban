import React from 'react';
import Modal from 'react-modal';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import ModalForm from './ModalForm';
import actions from '../actions/actionCreators';

Modal.setAppElement('#root');

/*
 * This button component opens up a modal that contains a form
 * that needs to be filled out in order to add an applicant.
 */

interface AddCardButtonProps {
  // addCard: ReturnType<typeof mapDispatchToProps>,
  addCard: (name: string, comments: string) => void,
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addCard: (name: string, comments: string) => {
    dispatch(actions.addCard(name, comments))
  },
});

const AddCardButton = (props: AddCardButtonProps) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

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

  const submitApp = (name: string, comments: string) => {
    // console.log(`name: ${name}, comments: ${comments}`);
    props.addCard(name, comments);
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

export default connect(null, mapDispatchToProps)(AddCardButton);