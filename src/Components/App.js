import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import stylesApp from './App.module.css';
import styles from './ContactItem/ContactItem.module.css';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactItem from '../Components/ContactItem/ContactItem';

const filterContacts = (contacts, filter) => {
  return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
}

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [start, setStart] = useState(false);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const persistedContacts = localStorage.getItem('contacts');
    if (persistedContacts) {
      setContacts(JSON.parse(persistedContacts))
    }
    setStart(true);
  }, [])

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  useEffect(() => {
    if (filterContacts(contacts, filter).length === 0) {
      setFilter('')
    }
  }, [contacts])

  const addContact = (contactObj) => {
    const existsContact = contacts.some(el => el.name === contactObj.name);
    if (existsContact) {
      setAlert(true);
      return;
    }

    setContacts([...contacts, { ...contactObj, id: uuidv4() }]);
  }

  const removeContact = (id) => {
    setContacts(contacts.filter(el => el.id !== id));
  }

  const filterHandler = (e) => {
    setFilter(e.target.value);
  }

  const deleteAlert = () => {
    setAlert(false);
  };

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
            onClick={deleteAlert}
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


      <ContactForm contacts={contacts} addContact={addContact} />
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
