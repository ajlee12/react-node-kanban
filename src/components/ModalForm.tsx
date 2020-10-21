import React, { CSSProperties, FormEvent } from 'react';

interface ModalFormProps {
  submitApp: (e: FormEvent) => void,
};

const ModalForm = (props: ModalFormProps) => {
  return (
    <div >
      <form style={styles}>
        <input id='modal-form-name' placeholder='Applicant Name'/>
        <input id='modal-form-comments' placeholder='Comments'/>
        {/* <input id='modal-form-name' placeholder='Applicant Name'/> */}
        <button onClick={props.submitApp}>Submit</button>
        {/* <button>Cancel</button> */}
      </form>  
    </div>
  )
};

const styles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
};

export default ModalForm;