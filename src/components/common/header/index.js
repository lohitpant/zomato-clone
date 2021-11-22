import React from 'react'
import './header.css'
import { GoLocation } from 'react-icons/go'
import { AiFillCaretDown } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import {RiArrowDownSLine} from 'react-icons/ri'

const Header = () => {
    return (
        <div className='max-width header'>
            <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' alt='Zomato'
                className='header-logo'
            />
            <div className='header-right'>
                <div className='header-location-search-container'>
                    <div className='location-wrapper'>
                        <div className='location-icon-name'>
                            <GoLocation className='absolute-center location-icon' />
                            <div >Delhi</div>
                        </div>
                        <AiFillCaretDown className='absolute-center' />
                    </div>
                    <div className='location-search-separator'></div>
                    <div className='header-searchbar'>
                        <BsSearch className='absolute-center search-icon' />
                        <input placeholder='Search for restaurant, cuisine or dish' className='search-input' />
                    </div>
                </div>
                <div className='profile-wrapper'>
                    <img src="https://b.zmtcdn.com/data/user_profile_pictures/8ef/5fadc81bbbd757571149518b61f188ef.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" alt='Profile'
                        className='header-profile-image'
                    />
                    <span className='header-username'>Lohit</span>
                    <RiArrowDownSLine className='absolute-center profile-options-icon' />
                </div>
            </div>
        </div>
    )
}

export default Header
