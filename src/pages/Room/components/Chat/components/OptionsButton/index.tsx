import React from 'react';

import styles from './OptionsButton.module.scss';

type OptionsButtonProps = {
  onClick: (e: React.MouseEvent) => void;
};

const OptionsButton: React.FC<OptionsButtonProps> = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <svg
        width='4'
        height='22'
        viewBox='0 0 4 22'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='2' cy='2' r='2' fill='#050505' />
        <circle cx='2' cy='11' r='2' fill='#050505' />
        <circle cx='2' cy='20' r='2' fill='#050505' />
      </svg>
    </button>
  );
};

export default OptionsButton;
