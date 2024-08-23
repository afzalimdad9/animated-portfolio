import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ViewsTitle from '../../components/ViewsTitle'

const MapsContribution = ({ data: {
    heading,
    logo,
    title,
    description,
    paragraph,
    iframe,
} }) => {
    return (
        <div className='mk-maps'>
            <div className='container h100per-min100vh d-flex'>
                <div className='mk-maps-container'>
                    <ViewsTitle
                        text={heading}
                    />
                    <div data-aos="fade-down-right">
                        <div className='mk-box'>
                            <div className='row'>
                                <div
                                    data-aos="zoom-in-left"
                                    className='col-3 d-flex flex-column justify-content-center px-sm-3 p-0'>
                                    <img src={logo} className="mk-gsv-logo" />
                                </div>
                                <div className='col-9 d-flex flex-column justify-content-center mt-2 mb-2'>
                                    <div data-aos="zoom-in-right" className='mk-box-heading'>
                                        {title}
                                    </div>
                                    <div data-aos="zoom-in-left" className='mk-box-subheading'>
                                        {description}
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in-right" className='mk-box-para'>
                                {paragraph}
                            </div>
                            <div
                                data-aos="zoom-in-left"
                                className='mk-box-iframe-wrapper mk-assets-hover-filter'>
                                <iframe
                                    width="560" height="315"
                                    className='mk-box-iframe'
                                    src={iframe} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

MapsContribution.propTypes = {}

export default MapsContribution