

import React from 'react'
import GitHub from '../SVGs/GitHub'
import Instagram from '../SVGs/Instagram'
import LinkedIn from '../SVGs/LinkedIn'
import Twitter from '../SVGs/Twitter'

const SideElementsItem = ({ items, position }) => {
    return (
        <div className={`ai-side-elements-container ai-side-elements-${position}`} >
            {(items || []).map((item, i) => (
                <div key={i} className='ai-side-elements-item'>
                    {item}
                </div>
            ))}
            <div className='ai-side-elements-line' />
        </div>
    )
}


const SideElements = ({ data: {
    emailButton,
    handleIconClick,
} }) => {
    return (
        <div className='ai-side-elements'>
            {/* left side  */}
            <SideElementsItem
                position="left"
                items={[
                    <GitHub onClick={() => handleIconClick('github')} key="GitHub" width={20} height={20} />,
                    <Instagram onClick={() => handleIconClick('instagram')} key="Instagram" width={20} height={20} />,
                    <Twitter onClick={() => handleIconClick('twitter')} key="Twitter" width={20} height={20} />,
                    <LinkedIn onClick={() => handleIconClick('linkedin')} key="LinkedIn" width={20} height={20} />,
                ]}
            />

            {/* right side  */}
            <SideElementsItem
                position="right"
                items={[
                    <div
                        onClick={emailButton?.onClick}
                        key="website" className='ai-side-elements-text'>
                        {emailButton?.label}
                    </div>,
                ]}
            />
        </div>
    )
}

SideElements.propTypes = {}

export default SideElements