import React, { useState, CSSProperties, ChangeEvent, FormEvent } from 'react';

interface ModalFormProps {
  submitApp: (name: string, comments: string) => void,
};

const initialFormData = Object.freeze({
  name: '',
  comments: ''
});

const ModalForm = (props: ModalFormProps) => {
  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;

    updateFormData({
      ...formData,
      [target.name]: target.value.trim()
    });
  };

  const handleSubmit = (e: FormEvent) => {
    // console.log('updated formData state: ', formData);
    e.preventDefault();

    props.submitApp(formData.name, formData.comments);
  };

  return (
    <div >
      <form style={styles} onSubmit={handleSubmit}>
        <input
          name='name'
          placeholder='Applicant Name'
          onChange={handleChange}
        />
        <input
          name='comments'
          placeholder='Comments'
          onChange={handleChange}  
        />
        <button type='submit'>Submit</button>
      </form>  
    </div>
  )
};

const styles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
};

export default ModalForm;