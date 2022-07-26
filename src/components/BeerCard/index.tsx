import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { BeerCardProps } from '../../types';

import styles from './BeerCard.module.scss';

const BeerCard: NextPage<BeerCardProps> = ({
  id,
  name,
  description,
  image_url,
  contributed_by,
}) => {
  return (
    <Link href={`beer/${id}`}>
      <div className={styles.wrapper}>
        <div className={styles.imageCon}>
          <img className={styles.img} src={image_url} />
        </div>
        <div className={styles.content}>
          <h2>{name}</h2>
          <h4>{contributed_by}</h4>
          <p>
            {description.length < 140 ? `${description}` : `${description.substring(0, 139)}...`}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BeerCard;
