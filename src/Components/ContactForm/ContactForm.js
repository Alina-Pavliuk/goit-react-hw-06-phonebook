import React, { useState } from 'react';

import styles from './ContactForm.module.css';

const initialState = {
  number: "",
  name: "",
}

const ContactForm = ({ setAlert, addContact, contacts }) => {
  const [stateForm, setStateForm] = useState(initialState);
  const { name, number } = stateForm;

  const handlerInput = ({ target }) => {
    const { name, value } = target;
    setStateForm({ ...stateForm, [name]: value });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const { name, number } = e.target;
    const singleContact = {
      name: name.value,
      number: number.value,
    }
    if (contacts.some(contact => contact.name === name.value)) {
      setAlert(true)
    } else {
      addContact(singleContact)
      setStateForm({ ...initialState })
    }
  }

  return (
    <form className={styles.ContactForm} onSubmit={submitHandler}>
      <label>
        <span className={styles.titleLabel}>Name</span>
        <input
          className={styles.inputForm}
          type="text"
          value={name}
          name="name"
          placeholder="Name"
          onChange={handlerInput}
        />
      </label>
      <label>
        <span className={styles.titleLabel}> Number</span>
        <input
          className={styles.inputForm}
          type="text"
          value={number}
          name="number"
          placeholder="Number"
          onChange={handlerInput}
        />
      </label>
      <button className={styles.formButton} type="submit">Add contact</button>
    </form>
  );
}

export default ContactForm;
