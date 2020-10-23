import React from 'react';
import Modal from 'react-modal';
import { Action } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import ModalForm from './ModalForm';
import actions from '../actions/actionCreators';
import { CardsState } from '../store/types';

Modal.setAppElement('#root');

/**
 * This button component opens up a modal that contains a form
 * that needs to be filled out in order to add an applicant.
 */
const mapDispatchToProps = (dispatch: ThunkDispatch<CardsState, null, Action>) => ({
  addCardThunk: (name: string, comments: string, status: string) => {
    dispatch(actions.addCardThunk(name, comments, status))
  },
  // bindActionCreators(actions.addCardThunk, dispatch);
});

const connector = connect(null, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

// type Props = ReduxProps & {
//   backgroundColor: string
// }

// interface AddCardButtonProps {
//   addCardThunk: (name: string, comments: string) => Promise<void>,
// };

const AddCardButton = (props: ReduxProps) => {
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
    props.addCardThunk(name, 'Applied', comments);
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
          <ModalForm submitApp={submitApp} closeModal={closeModal}/>
          <button onClick={closeModal}>Cancel</button>
        </Modal>
    </div>
  );
};

export default connector(AddCardButton);