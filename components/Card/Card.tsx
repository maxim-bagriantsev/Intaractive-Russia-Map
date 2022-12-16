import classNames from 'classnames/bind';

import styles from './Card.module.scss';
const cx = classNames.bind(styles);

type CardProps = {
  children: JSX.Element;
  color?: 'main' | 'primary';
};

export const Card = ({ children, color }: CardProps): JSX.Element => {
  return (
    <div
      className={cx('card', {
        card_main: color === 'main',
      })}
    >
      {children}
    </div>
  );
};
