import React from 'react';

import styles from './SidePanel.module.scss';

const { header, headerContent, headerContentWrapper, wrapper, iChevronLeft } = styles;


function SidePanel() {

  return (
    <div className={wrapper}>
      <header className={header}>
        <svg id="i-chevron-left" className={iChevronLeft} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
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
    </div>
  );
}

export default SidePanel;