import React from 'react'


const HoverImage = ({ parentClassName, imageClassName, filterClassName, borderClassName, showFilter, showBorder, src }) => {
    return (
        <div className={`ai-hover-image ${parentClassName}`}>
            {showBorder && (
                <div className={`ai-hover-image-border ${borderClassName}`} />
            )}
            {showFilter && (
                <div className={`ai-hover-image-filter ${filterClassName}`} />
            )}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                alt={src}
                className={`ai-hover-profile ${imageClassName}`}
                src={src}
            />

        </div>
    )
}

HoverImage.propTypes = {}

export default HoverImage