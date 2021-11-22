import React from 'react'
import { BsSliders } from 'react-icons/bs'
import { RiArrowDownSLine, RiArrowUpDownFill } from 'react-icons/ri'
import { restaurants } from '../../data/nightlife'
import Collection from '../common/collection'
import ExploreSec from '../common/exploreSection'
import Filters from '../common/filters'
import './nightlife.css'

const nightFilters=[
    {
        id:1,
        icon:<BsSliders className='absolute-center'/>,
        title:'Filters'
    },
    {
        id:2,
        icon:<RiArrowDownSLine className='absolute-center' />,
        title:'Pro Offers',
    },
    {
        id:3,
        icon:<RiArrowUpDownFill className='absolute-center' />,
        title:'Distance'
    },
    {
        id:4,
        title:'Rating: 4.0+',
    },
    {
        id:5,
        title:"Pubs & Bars",
    },
    
    
]

const collectionList=[
    {
        id:1,
        title:"Microbreweries",
        cover:"https://b.zmtcdn.com/data/collections/bb6a35086c983af31c536a3cfe886f1b_1631616165.jpg?output-format=webp",
        place:"19 Places"
    },
    {
        id:2,
        title:"Where's The Party?",
        cover:"https://b.zmtcdn.com/data/collections/b05dc8713287671124d8408fb6198bb3_1631608443.jpg?output-format=webp",
        place:"13 Places"
    },
    {
        id:3,
        title:"Trending This Week",
        cover:"https://b.zmtcdn.com/data/collections/31ddb8269f55451682fae6e98f20c4cb_1631689069.jpg",
        place:"28 Places"
    },    
    {
        id:4,
        title:"Bar-gain",
        cover:"https://b.zmtcdn.com/data/collections/4e1df9d915b25858fbc9acd2154d1dff_1631511179.jpg?output-format=webp",
        place:"17 Places"
    },
    {
        id:4,
        title:"Bar-gain",
        cover:"https://b.zmtcdn.com/data/collections/4e1df9d915b25858fbc9acd2154d1dff_1631511179.jpg?output-format=webp",
        place:"17 Places"
    },    
]

const Nightlife = () => {
    return (
        <div>
            <Collection list={collectionList}/>
            <div className='max-width'>
                <Filters filtersArr={nightFilters} />
                <ExploreSec list={restaurants} collectionName='Nightlife Restaurants in Delhi NCR' />
            </div>
        </div>
    )
}

export default Nightlife
