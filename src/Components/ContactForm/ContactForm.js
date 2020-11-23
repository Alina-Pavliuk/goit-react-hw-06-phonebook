import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import styles from './ContactForm.module.css';

import { addContact } from '../../redux/action/contacts';

const initialState = {
  number: "",
  name: "",
}

const ContactForm = () => {
  const dispatch = useDispatch()

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
    setStateForm(initialState);
    dispatch(addContact(singleContact))
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

ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  // addContact: PropTypes.func.isRequired
}