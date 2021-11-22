import React from 'react'
import Filters from '../common/filters'
import './delivery.css'
import {BsSliders} from 'react-icons/bs'
import {RiArrowUpDownFill} from 'react-icons/ri'
import {RiArrowDownSLine} from 'react-icons/ri'
import DeliveryCollection from './deliveryCollections'
import TopBrands from './topBrands'
import ExploreSec from '../common/exploreSection'
import { restaurants } from '../../data/restaurants'

const deliveryFiltersArr=[
    {
        id:1,
        icon:<BsSliders className='absolute-center'/>,
        title:'Filters'
    },
    {
        id:2,
        icon:<RiArrowUpDownFill className='absolute-center' />,
        title:'Delivery Time'
    },
    {
        id:3,
        title:'Rating: 4.0+',
    },
    {
        id:4,
        title:"Great Offers",
    },
    {
        id:5,
        icon:<RiArrowDownSLine className='absolute-center' />,
        title:'Cuisines',
    },
    {
        id:6,
        title:"Pure Veg"
    }
]

const Delivery = () => {
    return (
        <div>
            <div className='max-width'>                
                <Filters filtersArr={deliveryFiltersArr} />
            </div>

            <DeliveryCollection />
            <TopBrands/>
            <ExploreSec list={restaurants} collectionName='Delivery Restaurants in Delhi NCR' />
        </div>
    )
}

export default Delivery
