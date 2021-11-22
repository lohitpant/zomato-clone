import React from 'react'
import Slider from 'react-slick';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import './topBrands.css'

const brandsArr=[
    {
        id:1,
        time:"35 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252699.png",
    },
    {
        id:2,
        time:"35 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/bb30587d1148b6ab628a61945f64bf88_1625164768.png",
    },
    {
        id:3,
        time:"30 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png",
    },
    {
        id:4,
        time:"32 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/396a89cdb1f7a999717b01aa98da7017_1631990846.png",
    },
    {
        id:5,
        time:"38 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252699.png",
    },
    {
        id:6,
        time:"30 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/1356425eff0c9acd8ab6b0ad351759e4_1611253489.png",
    },
    {
        id:7,
        time:"34 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png",
    },
    {
        id:8,
        time:"34 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433692.png",
    },
]

const settings = {    
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};


const TopBrands = () => {
    return (
        <div className='top-brands max-width'>
            <div className='collection-title'>Top brands for you</div>
            <Slider {...settings} >
                {brandsArr.map(brand=>{
                    return(
                    <div key={brand.id}>
                        <div className='top-brands-cover'>
                            <img src={brand.cover} alt={brand.time} className='top-brands-image' />
                            <div className='absolute-center'>{brand.time}</div>
                        </div>
                        
                    </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default TopBrands
