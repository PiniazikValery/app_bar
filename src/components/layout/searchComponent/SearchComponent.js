import React from 'react';
import {
    SearchElement, SearchElementsWrapper, InputSearchIcon,
    SearchButton, SearchInput, Filter
} from './SearchComponentStyledComponents'

function SearchComponent(props) {
    return (
        <SearchElement open={props.searchIsOpen}>
            {props.searchIsOpen && props.isDesktop ? <Filter>12345</Filter> : null}
            <SearchElementsWrapper ref={props.setWrapperRef} rightIndent={props.rightIndent}>
                <InputSearchIcon open={props.searchIsOpen} />
                <SearchInput type="search" />
                <SearchButton>НАЙТИ</SearchButton>
            </SearchElementsWrapper>
        </SearchElement>
    );
}

export default SearchComponent;