import React, { Component } from 'react';

const FilterItems = (props) => (
    <input type="text"
           onChange={props.onChangeFilterInput}
           value={props.filterInputValue}
           placeholder="Search..." />
)

export default FilterItems;