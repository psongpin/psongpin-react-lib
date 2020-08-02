import React from 'react'
import clsx from 'clsx'
import { GridCols, GridRows } from './Grid.types'

type Props = {
  gridCols?: GridCols
  gridRows?: GridRows
  classname?: string
}

const colClassnames = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  7: 'grid-cols-7',
  8: 'grid-cols-8',
  9: 'grid-cols-9',
  10: 'grid-cols-10',
  11: 'grid-cols-11',
  12: 'grid-cols-12',
  none: 'grid-cols-none',
}

const rowClassnames = {
  1: 'grid-rows-1',
  2: 'grid-rows-2',
  3: 'grid-rows-3',
  4: 'grid-rows-4',
  5: 'grid-rows-5',
  6: 'grid-rows-6',
  none: 'grid-rows-none',
}

const Grid: React.FC<Props> = ({ children, gridCols, gridRows, classname }) => (
  <div
    className={clsx([
      'grid',
      colClassnames[gridCols],
      rowClassnames[gridRows],
      classname,
    ])}
  >
    {children}
  </div>
)

export default Grid
