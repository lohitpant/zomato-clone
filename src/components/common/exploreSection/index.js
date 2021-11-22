import React from 'react'
import ExploreCard from './exploreCard'
import './exploreSection.css'

const ExploreSec = ({list, collectionName}) => {
    return (
        <div className='max-width explore-section'>
            <div className='collection-title'>{collectionName}</div>
            <div className='explore-grid'>
                {list.map(restaurant=>{
                    return <ExploreCard restaurant={restaurant} key={restaurant.info.resId} />
                })}
            </div>
        </div>
    )
}

export default ExploreSec
