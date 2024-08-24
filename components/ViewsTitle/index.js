import React from 'react'


const ViewsTitle = ({ text = '', textClassName, lineClassName, containerClassName }) => {
    return (
        <div
            data-aos={`zoom-in-right`}
            className={`ai-views-title-container ${containerClassName || ''}`} >
            <div className={`ai-views-title-text ${textClassName || ''}`}>
                {text}
            </div>
            <div className={`ai-views-title-line-container`}>
                <div className={`ai-views-title-line ${lineClassName || ''}`} />
            </div>
        </div>
    )
}

ViewsTitle.propTypes = {}

export default ViewsTitle