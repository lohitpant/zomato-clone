import React, { useState } from 'react'
import Footer from '../../components/common/footer'
import Header from '../../components/common/header'
import TabOptions from '../../components/common/tabOptions'
import Delivery from '../../components/delivery'
import Diningout from '../../components/diningout'
import Nightlife from '../../components/nightlife'

const getCorrectScreen = (tabName) => {
    switch (tabName) {
        case 'Delivery':
            return <Delivery />

        case 'Dining Out':
            return <Diningout />

        case 'Nightlife':
            return <Nightlife />
        
        default:
            return <Delivery/>
    }
}

const Home = () => {

    const [activeScreen, setActiveScreen] = useState('Delivery')

    return (
        <div>
            <Header />
            <TabOptions activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
            {getCorrectScreen(activeScreen)}
            <Footer />
        </div>
    )
}

export default Home
