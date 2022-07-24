import React from 'react';

import styles from './SearchInput.module.scss';

type SearchInputProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const SearchInput: React.FC<SearchInputProps> = ({ value, setValue }) => {
  return (
    <input
      className={styles.wrapper}
      placeholder="Search..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchInput;
