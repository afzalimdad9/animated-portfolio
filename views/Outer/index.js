import React from 'react'
import Gooery from '../../components/GooeryAnimation'
import DecryptText from '../../components/DecryptText'
import PropTypes from 'prop-types'


const Outer = ({ data: {
    title1,
    title2,
    decrypTexts,
    desciption,
    button
} }) => {
    return (
        <div className='mk-outer'>
            <div className='container'>
                <div className='mk-outer-container d-flex justify-content-between align-items-center'>
                    <div className='mk-outer-text'>
                        <div className='mk-outer-heading'>
                            {title1}
                        </div>
                        <div className='mk-outer-heading'>
                            {title2}
                        </div>
                        <div className='mk-outer-heading2'>
                            <DecryptText
                                values={decrypTexts}
                            />
                        </div>
                        <div className='mk-outer-description'>
                            {desciption}
                        </div>
                        <div className='mk-outer-contact'>
                            <button onClick={button?.onClick} className='mk-button'>
                                {button?.label}
                            </button>
                        </div>
                    </div>
                    <div className='mk-outer-gooery'>
                        <Gooery />
                    </div>
                </div>
            </div>
        </div>
    )
}

Outer.propTypes = {}

export default Outer