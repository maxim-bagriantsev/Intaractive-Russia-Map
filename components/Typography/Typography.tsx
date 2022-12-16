import React from 'react';

import styles from './Typography.module.scss';

export type TypographyColors =
  | 'primary'
  | 'main'
  | 'action'
  | 'secondary'
  | 'lightGray'
  | 'gray'
  | 'black'
  | 'danger';

type TypographyProps = {
  align?: 'left' | 'center' | 'right';
  vMargin?: number;
  size?: 's' | 'xs' | 'sm' | 'm' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  children: React.ReactNode;
  color?: TypographyColors;
  upperCase?: boolean;
  className?: string;
  font?: 'SBSansText' | 'SFPRoDisplay';
  fontWeight?: 400 | 500 | 600 | 700;
  customLineHeight?: number;
};

export const Typography = ({
  align = 'left',
  size = 'm',
  vMargin,
  children,
  color = 'primary',
  upperCase = false,
  className,
  font = 'SBSansText',
  fontWeight = 400,
  customLineHeight,
}: TypographyProps): JSX.Element => {
  const calcSize = (s: string): number => {
    switch (s) {
      case 'xs':
        return 10;
      case 's':
        return 12;
      case 'sm':
        return 14;
      case 'm':
        return 16;
      case 'lg':
        return 18;
      case 'xl':
        return 20;
      case 'xxl':
        return 24;
      case 'xxxl':
        return 32;
      default:
        return 16;
    }
  };

  const calcLineHeight = (s: string): string => {
    switch (s) {
      case 'xs':
        return '12px';
      case 's':
        return '16px';
      case 'sm':
        return '22px';
      case 'm':
        return '24px';
      case 'lg':
        return '24px';
      case 'xl':
        return '24px';
      case 'xxl':
        return '32px';
      case 'xxxl':
        return '41px';
      default:
        return '24px';
    }
  };

  const getColor = (color: string) => {
    switch (color) {
      case 'primary':
        return styles.primary;
      case 'main':
        return styles.title;
      case 'action':
        return styles.action;
      case 'secondary':
        return styles.titleSecondary;
      case 'lightGray':
        return styles.darkGray;
      case 'gray':
        return styles.gray;
      case 'black':
        return styles.black;
      case 'danger':
        return styles.danger;
      default:
        return styles.title;
    }
  };

  return (
    <p
      style={{
        marginTop: vMargin,
        marginBottom: vMargin,
        textAlign: align,
        fontSize: calcSize(size),
        textTransform: upperCase ? 'uppercase' : 'none',
        fontFamily: font,
        lineHeight: customLineHeight
          ? customLineHeight + 'px'
          : calcLineHeight(size),
        fontWeight,
      }}
      className={`${getColor(color)} ${className} text-wrap`}
    >
      {children}
    </p>
  );
};
