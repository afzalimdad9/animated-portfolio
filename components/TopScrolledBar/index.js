import React, { useEffect, useState } from 'react'

const TopScrolledBar = () => {

    const [scrolled, setScrolled] = useState(0)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll()
    }, []);

    const handleScroll = () => {
        const innerHeight = window.innerHeight;
        const height = window?.document?.documentElement?.scrollHeight;
        const currentLocation = window.pageYOffset;
        const scrolled = (currentLocation / (height - innerHeight)) * 100 || 0;
        setScrolled(scrolled)
    }

    return (
        <div className='ai-top-scrolled'>
            <div className='ai-top-scrolled-highlight'
                style={{
                    transform: `translateX(${-100 + scrolled}%)`
                }}
            />
        </div>
    )
}

TopScrolledBar.propTypes = {}

export default TopScrolledBar