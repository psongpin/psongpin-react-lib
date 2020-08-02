import React from 'react'
import Grid from './Grid'
import { GridCols, GridRows } from './Grid.types'

export default {
  title: 'Grid',
}

const generateItems = (numOfItems: number) => {
  return Array.from(Array(numOfItems).keys())
}

export const GridTemplateColumns: React.FC = () => (
  <>
    {Array.from(Array(13).keys()).map(index => {
      const gridRowsVal = index === 0 ? 'none' : index
      const gridRowsHead = index === 0 ? 'grid-cols-none' : `grid-cols-${index}`
      return (
        <div className="mb-8">
          <p className="text-xl mb-4">{gridRowsHead}</p>
          <Grid gridCols={gridRowsVal as GridCols} classname="gap-4">
            {generateItems(index === 0 ? 2 : index).map(item => (
              <div
                className="border border-gray-300 bg-gray-100"
                key={item}
              >{`Item ${1 + item}`}</div>
            ))}
          </Grid>
        </div>
      )
    })}
  </>
)

export const GridTemplateRows: React.FC = () => (
  <>
    {Array.from(Array(7).keys()).map(index => {
      const gridRowsVal = index === 0 ? 'none' : index
      const gridRowsHead = index === 0 ? 'grid-rows-none' : `grid-rows-${index}`
      return (
        <div className="mb-8">
          <p className="text-xl mb-4">{gridRowsHead}</p>
          <Grid
            gridRows={gridRowsVal as GridRows}
            classname="grid-flow-col gap-4"
          >
            {generateItems(index === 0 ? 2 : index).map(item => (
              <div
                className="border border-gray-300 bg-gray-100"
                key={item}
              >{`Item ${1 + item}`}</div>
            ))}
            <div className="border border-gray-300 bg-gray-100">Extra Item</div>
            <div className="border border-gray-300 bg-gray-100">Extra Item</div>
          </Grid>
        </div>
      )
    })}
  </>
)
