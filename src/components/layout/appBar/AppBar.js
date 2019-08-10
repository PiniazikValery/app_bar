import React, { useState, useEffect, useRef } from 'react';
import { Default, Mobile } from '../../../responsiveDesignSwitch';
import MobileAppBar from './MobileAppBar';
import DesktopAppBar from './DesktopAppBar';

function AppBar() {

    const [searchIsOpen, setOpenSearch] = useState(false);
    const wrapperRef = useRef(0);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        window.addEventListener('resize', closeSearchInput);
    }, []);

    useEffect(() => {
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('resize', closeSearchInput);
        }
    }, []);

    const openSearchInput = () => setOpenSearch(true);

    const closeSearchInput = () => setOpenSearch(false);

    const setWrapperRef = (node) => {
        wrapperRef.current = node;
    };

    const handleClickOutside = (event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            closeSearchInput();
        }
    }

    return (
        <div>
            <Mobile>
                <MobileAppBar
                    openSearchInput={openSearchInput}
                    searchIsOpen={searchIsOpen}
                    setWrapperRef={setWrapperRef}
                />
            </Mobile>
            <Default>
                <DesktopAppBar
                    openSearchInput={openSearchInput}
                    searchIsOpen={searchIsOpen}
                    setWrapperRef={setWrapperRef}
                />
            </Default>
        </div>
    );
}

export default AppBar;