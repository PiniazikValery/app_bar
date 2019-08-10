import React from 'react';
import { Select } from './FilterSelectStyledComponents';

function FilterSelect() {


    return (
        <Select>
            <option>Дате</option>
            <option>Звездам</option>
            <option>Цене</option>
            <option>Качеству</option>
        </Select>
    );
}

export default FilterSelect;