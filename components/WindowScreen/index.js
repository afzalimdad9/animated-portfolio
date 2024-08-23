import React, { Children } from 'react'
import PropTypes from 'prop-types'

const WindowScreen = ({ children, containerClassName }) => {
    return (
        <div className={`mk-window-screen ${containerClassName}`}>
            <div className='mk-taskbar'>
                <div className='mk-circles'>
                    <div className='mk-circle mk-circle1' />
                    <div className='mk-circle mk-circle2' />
                    <div className='mk-circle mk-circle3' />
                </div>
                <div className='mk-url'>
                    <div className='mk-url-box'>
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