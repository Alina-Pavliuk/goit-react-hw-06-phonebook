import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import stylesApp from './App.module.css';
import styles from './ContactItem/ContactItem.module.css';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactItem from '../Components/ContactItem/ContactItem';

import * as actions from '../redux/action/contacts';


const filterContacts = (contacts, filter) => {
  return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
}

const App = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const [start, setStart] = useState(false);
  const [alert, setAlert] = useState(false);

  const firstRender = useRef(false);

  useEffect(() => {
    if (firstRender.current) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } else {
      firstRender.current = true;
    }
  }, [contacts]);

  useEffect(() => {
    const persistedContacts = localStorage.getItem('contacts');

    if (persistedContacts) {
      dispatch(actions.setContacts(JSON.parse(persistedContacts)));
    }
  }, [dispatch])

  useEffect(() => {
    setStart(true);
  }, [])

  // useEffect(() => {
  // if (filterContacts(contacts, filter).length === 0) {
  //   setFilter('')
  // }
  // }, [contacts])


  const filterHandler = (e) => {
    dispatch(actions.editInputFilter(e.target.value));
  }

  const removeContact = (id) => (e) => {
    dispatch(actions.removeContact(id));
  }

  const filteredContacts = filterContacts(contacts, filter);

  return (
    <div className={stylesApp.wrapper}>
      <CSSTransition classNames={{
        enterActive: stylesApp.alertBoxEnterActive,
        exitActive: stylesApp.alertBoxExitActive
      }}
        mountOnEnter
        unmountOnExit
        timeout={300}
        in={alert}>

        <div className={stylesApp.alertBox}>
          <h2>{`The name is already a contact`}</h2>
          <button
            onClick={() => setAlert(false)}
            className={styles.alertBtn}
            type="button"
          >X
          </button>
        </div>
      </CSSTransition>
      <CSSTransition classNames={{
        enterActive: stylesApp.titleEnterActive,
      }} timeout={800} in={start}>
        <h2 className={stylesApp.title}>Phonebook </h2>
      </CSSTransition>

      <ContactForm setAlert={setAlert} />
      <Filter filter={filter} filterHandler={filterHandler} />

      <TransitionGroup className={stylesApp.contactsList} component="ul">
        {filteredContacts.map(contact =>
          <CSSTransition
            key={contact.id}
            timeout={800}
            classNames={{
              enterActive: styles.listItemEnterActive,
              exitActive: styles.listItemExitActive,
            }}
          >
            <ContactItem {...contact} removeContact={removeContact} />
          </CSSTransition>
        )}

      </TransitionGroup>

    </div>
  );

}

export default App;
