/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import GridListItem from './GridListItem'

const GridListing = () => {
  const elections = useSelector(state => state.elections, shallowEqual)
  return (
    <div className="m-2 mt-6">

      <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {elections.map((election, key) => (
          <GridListItem key={key} id={key} election={election} />
        ))}
      </ul>

    </div>
  )
}

export default GridListing
