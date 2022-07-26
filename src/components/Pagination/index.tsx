import { NextPage } from 'next';
import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

type PaginationProps = {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination: NextPage<PaginationProps> = ({ value, setValue }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(e) => setValue(e.selected)}
      pageCount={4}
      forcePage={value}
    />
  );
};

export default Pagination;
