import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectShowSidePanel } from './productPageSlice';
import { setShowSidePanel } from './productPageSlice';

import styles from './SidePanel.module.scss';

const { content, header, headerContent, headerContentWrapper, showPanel, wrapper, iChevronLeft, } = styles;


function SidePanel() {


  const dispatch = useDispatch();
  const isVisible = useSelector(selectShowSidePanel);

  const checkShowPanel = isVisible ? showPanel : null;


  const showSidePanel = () => {
    dispatch(setShowSidePanel());
  }

  return (
    <>
      <header className={`${header} ${checkShowPanel}`} >
        <svg id="i-chevron-left" className={iChevronLeft} onClick={showSidePanel} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path d="M20 30 L8 16 20 2" />
        </svg>
        <div className={headerContentWrapper}>
          <div className={headerContent} >
            aaaaaaaaaaaaa
          </div>
          <div className={headerContent}>
            bbbbbbbbbbbbb
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <div className={`${wrapper} ${checkShowPanel}`} >

        <div className={content}>

        </div>
      </div>
    </>
  );
}

export default SidePanel;