import React from 'react'
import PropTypes from 'prop-types'
import ViewsTitle from '../../components/ViewsTitle'
import Share from '../../components/SVGs/Share'

const SingleItem = ({ logo, title, link, date, platform, handleIconClick }) => (
    <div className='ai-item-body p-4'>
        <div className='ai-item-head'>
            <div
                style={{
                    backgroundImage: `url(${logo})`,
                }}
                className='ai-item-logo'>

            </div>
            <div className='ai-item-share'>
                {link && (
                    <Share onClick={() => handleIconClick(link)} key="share" width={22} height={22} />
                )}
            </div>
        </div>
        <div className='flex-1'>
            <div className='ai-item-title'>{title}</div>
            <div className='ai-item-platform'>{platform}</div>
        </div>
        <div className='ai-item-date'>{date}</div>
    </div>
)

const Items = ({ list, handleIconClick }) => (
    <div className='row'>
        {(list || []).map((item, i) => (
            <div data-aos={item.aos} key={i} className={`ai-certifications-item m-0 p-1
            col-12 col-lg-${item.size * 4}`}
            >
                <SingleItem {...item} handleIconClick={handleIconClick} />
            </div>
        ))}
    </div>
)

const Certifications = ({ data: {
    heading,
    list,
    handleIconClick
} }) => {
    return (
        <div className='ai-certifications'>
            <div className='container p-3'>
                <div className='ai-certifications-top-background' />
                <div className='ai-certifications-container'>
                    <ViewsTitle
                        text={heading}
                    />
                    <div>
                        <Items list={list} handleIconClick={handleIconClick} />
                    </div>
                </div>
            </div>
        </div>
    )
}

Certifications.propTypes = {}

export default Certifications