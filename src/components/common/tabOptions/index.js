import React from 'react'
import './tabOptions.css'

const tabsArr = [
    {
        id: 1,
        title: "Delivery",
        active_img: 'https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp',
        background: "rgb(252, 238, 192)",
        inactive_img: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
    },
    {
        id: 2,
        title: "Dining Out",
        active_img: 'https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png',
        background: "rgb(229, 243, 243)",
        inactive_img: "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
    },
    {
        id: 3,
        title: "Nightlife",
        active_img: 'https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png',
        background: "rgb(237, 244, 255)",
        inactive_img: "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
    },
]

const TabOptions = ({ activeScreen, setActiveScreen }) => {


    return (
        <div className='tab-options'>
            <div className='max-width options-wrapper'>
                {tabsArr.map(tab => {
                    return (
                        <div onClick={() => setActiveScreen(tab.title)} className={`tab-item absolute-center cur-po 
                            ${activeScreen === tab.title && "active-tab"}`} key={tab.id}>
                            <div className='tab-image-container absolute-center'
                                style={{ backgroundColor:`${activeScreen===tab.title ? tab.background : ''}` }}>
                                    <img className='tab-image' src={activeScreen===tab.title ?tab.active_img : tab.inactive_img }
                                    alt={tab.title} />
                                </div>                            
                            <div className='tab-name'>{tab.title}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TabOptions
