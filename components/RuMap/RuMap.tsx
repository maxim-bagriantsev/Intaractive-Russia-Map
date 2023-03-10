import { useState } from 'react';
import classNames from 'classnames/bind';

import { RUSSIAN_MAP } from './coords';

//  ui
import { Card } from '../Card';
import { Typography } from '../Typography';
import { Box } from '../Box';

import styles from './RuMap.module.scss';
const cx = classNames.bind(styles);

export const RuMap = (): JSX.Element => {
  const [isTooltipShown, setIsTooltipShown] = useState(false);
  const [id, setId] = useState(0);
  const [coords, setCoords] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleMove = (
    e: React.MouseEvent<SVGPathElement>,
    regIdxId: number
  ): void => {
    // const scrollX = document.body.scrollLeft;
    // const scrollY = document.body.scrollTop;
    setId(regIdxId);
    setIsTooltipShown(true);
    setCoords({
      x: e.clientX + 10,
      y: e.clientY + 10,
    });
  };

  return (
    <div className={styles.map}>
      <div
        className={cx('popup', {
          popup_show: isTooltipShown,
        })}
        style={{ position: 'fixed', top: coords.y, left: coords.x }}
      >
        <Card>
          <>
            <Typography color="main" size="sm">
              {RUSSIAN_MAP[id].value}
            </Typography>
            <Box mt={7} />
            <Typography
              color="main"
              size="xl"
              fontWeight={600}
            >{`${id}00`}</Typography>
            <Box mt={2} />
            <Typography color="gray" size="s">
              респондентов
            </Typography>
          </>
        </Card>
      </div>

      <svg
        width="100%"
        height="689"
        className="russian-map"
        viewBox="-365 196 1188 689"
        x="0px"
        y="0px"
        version="1.1"
      >
        {RUSSIAN_MAP.map((item, id) => (
          <path
            key={id}
            id={`${item.code}`}
            className={'russian-map-region'}
            d={item.path}
            fill="#ABCEE7"
            stroke="#FFFFFF"
            onMouseMove={(e) => handleMove(e, id)}
            onMouseOut={() => setIsTooltipShown(false)}
          />
        ))}

        <g>
          <path
            id="vectormap1_lake-onega"
            className="russian-map-lake"
            d="M-170.6,430.5l2.4-1.2l1.2-3.6l-1.2-5.9l1.2-5.9v1.2h1.2l1.2-2.4l1.2-2.4v3.6h1.2 l1.2-3.6l1.2-2.4v1.2v1.2v1.2l0,0l1.2-2.4l1.2-1.2l-1.2,3.6l-2.4,4.8h1.2l0,0l1.2-2.4v1.2l2.4,1.2l2.4-4.8v-1.1h-1.2v1.2v-1.2v-1.2 l-1.2,1.2l0,0l1.2-3.6l1.2-3.6l1.2,10.7l-5.9,8.3l-1.2,3.6l-1.2,4.8v1.2l-3.6,1.2l-4.8,1.2l-1.2-1.2l-1.2-2.4h1.1V430.5z"
          />
          <path
            id="vectormap1_lake-ladoga"
            className="russian-map-lake"
            d="M-190.8,419.9l-1.2-1.2l-2.4,2.4l-3.6,1.2l-2.4-3.6h-3.6l-2.4-1.2l-1.2-1.2h1.2 l1.2-2.4l1.2-2.4l2.4-5.9l3.6-4.8v-2.4v-1.2V396v-1.2l1.2,1.2h1.2h3.6h3.6l1.2-1.2l0,0l1.2,11.9l-3.6,13.1h-1.2V419.9z"
          />
          <path
            id="vectormap1_lake-rybinsk"
            className="russian-map-lake"
            d="M-180.1,476.9l-1.2,3.6l-2.4,2.4v-1.2v-1.3v-1.2l-3.6,1.2l-1.2-1.2l1.2-1.2h1.2 l-1.2-7.1l1.2-7.1l0,0v1.2v1.2v1.2v3.6l1.2,1.2h2.4l1.2-1.2v-3.6l1.2-3.6l1.2,1.2l-1.2,2.4v4.8L-180.1,476.9L-180.1,476.9z"
          />
          <path
            id="vectormap1_lake-baykal"
            className="russian-map-lake"
            d="M349.7,721.5l2.4-4.8l3.6-1.2l-1.2,15.4l-2.4,16.6l-1.2,1.2l-1.2,1.2v-1.2v-2.4 l-1.2-1.2l-1.2,2.4l-1.2,2.4h1.2h2.4v2.4l-1.2,2.4h-1.2h-1.2l-2.4,3.6l-3.6,4.8l-14.3,5.9l-1.2,3.6l-1.2,3.6l-8.3,4.8l-4.8,1.2 l-1.2,1.2v-1.2l-8.3-2.4l3.6-1.2l5.9-2.4l-1.2-1.2l-2.4-1.2v-1.2l-1.2-1.2v-1.2l3.6,3.6l4.8,2.4l14.3-15.4l17.8-26.1L349.7,721.5z"
          />

          <circle
            cx="-212.1"
            cy="408.5"
            r="2.3"
            fill="red"
            className="russian-map-capital"
          />
          <circle
            cx="-364.3"
            cy="592.3"
            r="2.3"
            fill="red"
            className="russian-map-capital"
          />
          <circle
            cx="-216.1"
            cy="500.7"
            r="2.3"
            fill="red"
            className="russian-map-capital"
          />
        </g>
      </svg>
    </div>
  );
};
