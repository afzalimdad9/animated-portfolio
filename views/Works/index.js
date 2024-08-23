import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ViewsTitle from '../../components/ViewsTitle'

const TabListItem = ({ text }) => (
    <div className='mk-works-tab-right-list-item'>{text}</div>
)

const Tabs = ({ list }) => {
    const [selectedItemIndex, handleSelectItemIndex] = useState(0);
    const seletedItem = list[selectedItemIndex]
    return (
        <div>
            <div className='mk-works-tab'>
                <div
                    className='mk-works-left-border'>
                    <div
                        style={{
                            transform: `translateY(${selectedItemIndex * 42}px)`
                        }} className='mk-works-left-border-selection' />
                </div>
                <div className='mk-works-tab-left'>
                    {(list || []).map((item, i) => (
                        <div key={i} data-aos="zoom-in-left">
                            <div onClick={() => handleSelectItemIndex(i)}
                                className={`mk-works-tab-left-button ${selectedItemIndex === i ? 'mk-works-tab-left-button-selected' : ''}`}
                            >{item.company}</div>
                        </div>
                    ))}
                </div>
                <div className='mk-works-tab-right'>
                    {seletedItem && (
                        <>
                            <div
                                data-aos="zoom-in-right"
                                className='mk-works-tab-right-title'>
                                {`${seletedItem.role} @ ${seletedItem.company}`}
                            </div>
                            <div
                                data-aos="zoom-in-right" className='mk-works-tab-right-duration'>{seletedItem.duration}</div>
                            <div
                                data-aos="zoom-in-right" className='mk-works-tab-right-list'>
                                {(seletedItem.points || []).map((text, i) => (
                                    <TabListItem key={i} text={text} />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}


const Works = ({ data: {
    heading,
    experiences,
} }) => {
    return (
        <div
            className='mk-works'>
            <div className='container h100per-min100vh d-flex justify-content-center'>
                <div

                    data-aos="fade-down-left"
                    className='mk-works-container'>
                    <ViewsTitle
                        text={heading}
                    />
                    <Tabs
                        list={experiences}
                    />
                </div>
            </div>
        </div>
    )
}

Works.propTypes = {}

export default Works