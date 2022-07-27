import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import debounce from 'lodash.debounce';
import axios from 'axios';
import { Rings } from 'react-loader-spinner';

import styles from '../styles/Home.module.scss';

import { BeerCardProps } from '../src/types';
// Components
import BeerCard from '../src/components/BeerCard';
import SearchInput from '../src/components/SearchInput';
import Pagination from '../src/components/Pagination';

const Home: NextPage = () => {
  const [items, setItems] = React.useState<BeerCardProps[]>([]);
  const [value, setValue] = React.useState<string>('');
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  const [isLoading, setIsLoading] = React.useState<Boolean>(true);

  // handle request with params
  const fetchItems = async (value: string) => {
    const { data } = await axios.get(
      `https://api.punkapi.com/v2/beers?${value && 'beer_name=' + value}&per_page=8&page=${
        currentPage + 1
      }`,
    );
    setItems(data);
    setIsLoading(false);
  };

  // func to fetch items after 300s
  const getBeers = React.useCallback(
    debounce((str: string) => {
      setIsLoading(true);
      fetchItems(str);
    }, 300),
    [],
  );

  React.useEffect(() => {
    getBeers(value);
  }, [value]);

  // initial fetching
  React.useEffect(() => {
    fetchItems(value);
  }, []);

  React.useEffect(() => {
    setIsLoading(true);
    fetchItems(value);
  }, [currentPage]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Beer Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <SearchInput value={value} setValue={setValue} />
        {isLoading ? (
          <div className={styles.loading}>
            <Rings color="#c7c7c7" height={120} width={120} />
          </div>
        ) : (
          <>
            <div className={styles.content}>
              {items?.map((item) => (
                <BeerCard key={item.id} {...item} />
              ))}
            </div>
            {items.length > 0 ? (
              <div className={styles.pagination}>
                <Pagination value={currentPage} setValue={setCurrentPage} />
              </div>
            ) : (
              <div>
                <h1>Not found :(</h1>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
