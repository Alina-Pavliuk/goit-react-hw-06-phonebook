import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import PropTypes from "prop-types";

const initialState = {
  number: "",
  name: "",
}

const ContactForm = ({ addContact }) => {

  // state = {
  //   number: "",
  //   name: "",
  // }
  const [stateForm, setStateForm] = useState(initialState);
  const { name, number } = stateForm;

  // handlerInput = ({ target }) => {
  //   const { name, value } = target;
  //   this.setState({
  //     [name]: value
  //   })
  // }
  const handlerInput = ({ target }) => {
    const { name, value } = target;
    setStateForm({ ...stateForm, [name]: value });
    console.log(stateForm);
  }

  // submitHandler = (e) => {
  //   const { name, number } = this.state
  //   e.preventDefault();
  //   const singleContact = {
  //     name,
  //     number,

  //   }
  //   this.props.addContact(singleContact)
  //   this.setState({ ...initialState })
  // }
  const submitHandler = (e) => {
    e.preventDefault();
    const { name, number } = e.target;
    const singleContact = {
      name: name.value,
      number: number.value,
    }
    addContact(singleContact);
    setStateForm(initialState);
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
  addContact: PropTypes.func.isRequired
}