import React from 'react'
import Slider from 'react-slick';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import './deliveryCollection.css'
import DeliveryItem from './deliveryItem';

const deliveryItems = [
    {
        id: 1,
        title: "Pizza",
        cover: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    },
    {
        id: 2,
        title: "Burger",
        cover: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
    },
    {
        id: 3,
        title: "Rolls",
        cover: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
    },
    {
        id: 4,
        title: "Thali",
        cover: "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png"
    },
    {
        id: 5,
        title: "Chaat",
        cover: "https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png"
    },
    {
        id: 6,
        title: "Paneer",
        cover: "https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png"
    },
    {
        id: 7,
        title: "Biryani",
        cover: "https://b.zmtcdn.com/data/dish_images/2a24c5264606bd78622267d28a3726821634805216.png"
    },
]

const settings = {    
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};

const DeliveryCollection = () => {
    return (
        <div className='delivery-collection'>
            <div className='max-width'>
                <div className='collection-title'>Eat what makes you happy</div>
                <Slider {...settings}>
                    {deliveryItems.map(item=>{
                        return <DeliveryItem item={item} key={item.id} />
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default DeliveryCollection
