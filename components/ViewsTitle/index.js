import React from 'react'
import PropTypes from 'prop-types'


const ViewsTitle = ({ text = '', textClassName, lineClassName, containerClassName }) => {
    return (
        <div
        data-aos={`zoom-in-right`}
         className={`mk-views-title-container ${containerClassName || ''}`} >
            <div className={`mk-views-title-text ${textClassName || ''}`}>
                {text}
            </div>
            <div className={`mk-views-title-line-container`}>
                <div className={`mk-views-title-line ${lineClassName || ''}`} />
            </div>
        </div>
    )
}

ViewsTitle.propTypes = {}

export default ViewsTitle