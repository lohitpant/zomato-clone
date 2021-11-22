import React from 'react'
import { BsSliders } from 'react-icons/bs'
import { RiArrowDownSLine, RiArrowUpDownFill } from 'react-icons/ri'
import { restaurants } from '../../data/diningout'
import Collection from '../common/collection'
import ExploreSec from '../common/exploreSection'
import Filters from '../common/filters'
import './diningout.css'

const collectionList=[
    {
        id:1,
        title:"Live Sports Screenings",
        cover:"https://b.zmtcdn.com/data/collections/1b959f49d1a130f16edd619de439eaba_1634888082.png",
        place:"27 Places"
    },
    {
        id:2,
        title:"Newly Opened",
        cover:"https://b.zmtcdn.com/data/collections/b22194cb38ed18a5200b387ad8f243f0_1582015804.jpg",
        place:"13 Places"
    },
    {
        id:3,
        title:"Trending This Week",
        cover:"https://b.zmtcdn.com/data/collections/31ddb8269f55451682fae6e98f20c4cb_1631689069.jpg",
        place:"30 Places"
    },    
    {
        id:4,
        title:"Best of Delhi NCR",
        cover:"https://b.zmtcdn.com/data/collections/c392056cfd7c02befe8d53f94ad2a908_1581933619.jpg",
        place:"164 Places"
    },
    {
        id:5,
        title:"Taste of South",
        cover:"https://b.zmtcdn.com/data/collections/534d15b97ec6a18a13d41d92f7a3c4f4_1631615781.jpg",
        place:"16 Places"
    },
    {
        id:6,
        title:"Great Cafes",
        cover:"https://b.zmtcdn.com/data/collections/821a4a7a6a0f8c265f5bf804cf18dfa3_1631714127.jpg",
        place:"30 Places"
    },
    {
        id:7,
        title:"For the love of Chai",
        cover:"https://b.zmtcdn.com/data/collections/32d61d6a085b42314325b4bc148a761a_1616663414.jpg",
        place:"12 Places"
    },
]

const diningFiltersArr=[
    {
        id:1,
        icon:<BsSliders className='absolute-center'/>,
        title:'Filters'
    },
    {
        id:2,
        icon:<RiArrowUpDownFill className='absolute-center' />,
        title:'Distance'
    },
    {
        id:3,
        title:'Rating: 4.0+',
    },
    {
        id:4,
        title:"Online Bookings",
    },
    {
        id:5,
        icon:<RiArrowDownSLine className='absolute-center' />,
        title:'Cuisines',
    },
    {
        id:6,
        icon:<RiArrowDownSLine className='absolute-center' />,
        title:'Pro Offers',
    },
    {
        id:7,
        title:"Outdoor Seating"
    },
    {
        id:8,
        title:"Serves Alcohol"
    },
    {
        id:9,
        title:"Pure Veg"
    },
    {
        id:10,
        title:"Open Now"
    },
]

const Diningout = () => {
    return (
        <div>
            <Collection list={collectionList}/>
            <div className='max-width'>
                <Filters filtersArr={diningFiltersArr} />
                <ExploreSec list={restaurants} collectionName='Dine-Out Restaurants in Delhi NCR' />
            </div>
            
        </div>
    )
}

export default Diningout