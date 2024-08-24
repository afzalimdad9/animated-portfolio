import React from 'react'

const WindowScreen = ({ children, containerClassName }) => {
    return (
        <div className={`ai-window-screen ${containerClassName}`}>
            <div className='ai-taskbar'>
                <div className='ai-circles'>
                    <div className='ai-circle ai-circle1' />
                    <div className='ai-circle ai-circle2' />
                    <div className='ai-circle ai-circle3' />
                </div>
                <div className='ai-url'>
                    <div className='ai-url-box'>
                        {'http://localhost:1234'}
                    </div>
                </div>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

WindowScreen.propTypes = {}

export default WindowScreen