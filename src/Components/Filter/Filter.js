import React from 'react';
import PropTypes from "prop-types";

import styles from './Filter.module.css'

const Filter = ({ filter, filterHandler }) => (
  <>
    <div className={styles.wrapperSearch}>
      <label>
        <span className={styles.filterLabel_span}> Find contacts by name</span>
        <input
          className={styles.filterInput}
          type="text"
          name="filter"
          value={filter}
          onChange={filterHandler}
          placeholder="Search"
        />
      </label>
    </div>
  </>
);


export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterHandler: PropTypes.func.isRequired
}