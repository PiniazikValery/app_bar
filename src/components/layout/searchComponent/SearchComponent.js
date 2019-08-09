import React, { useState, useEffect } from 'react';
import {
    SearchElement, SearchElementsWrapper, InputSearchIcon,
    SearchButton, SearchInput
} from './SearchComponentStyledComponents'
import { FilterComponent } from '../filterComponent'

function SearchComponent(props) {

    const [filterIsOpened, setFilterOpen] = useState(false);

    const handleInputFocus = () => {
        openFilter();
    }

    const closeFilter = () => {
        setFilterOpen(false);
    }

    const openFilter = () => {
        setFilterOpen(true);
    }

    useEffect(() => {
        if (!props.searchIsOpen) {
            closeFilter();
        }
    });

    return (
        <SearchElement open={props.searchIsOpen} >
            <SearchElementsWrapper ref={props.setWrapperRef} rightIndent={props.rightIndent}>
                {props.searchIsOpen && props.isDesktop && filterIsOpened ? <FilterComponent /> : null}
                <InputSearchIcon open={props.searchIsOpen} />
                <SearchInput onFocus={handleInputFocus} type="search" />
                <SearchButton>НАЙТИ</SearchButton>
            </SearchElementsWrapper>
        </SearchElement>
    );
}

export default SearchComponent;