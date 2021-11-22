import React from 'react'
import FilterItem from './filterItem'
import './filters.css'

const Filters = ({filtersArr}) => {
    return (
        <div className='filters'>
            {filtersArr && filtersArr.map(filter=>{
                return(
                    <FilterItem filter={filter} key={filter.id} />
                )
            })}
        </div>
    )
}

export default Filters
