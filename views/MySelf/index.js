import React from 'react'
import PropTypes from 'prop-types'
import HoverImage from '../../components/HoverImage'
import ViewsTitle from '../../components/ViewsTitle'
import Helm from '../../components/SVGs/Helm'
import { useParallax } from 'react-scroll-parallax'

const Paragraph = ({ text }) => (
    <div data-aos="zoom-in-left" className='ai-myself-paragraph'>
        {text}
    </div>
)

const List = ({ items }) => (
    <div className='col'>
        {(items || []).map(item => (
            <div data-aos="zoom-in-left" className='ai-myself-skill' key={item}>
                {item}
            </div>
        ))}
    </div>
)

const ListParent = ({ list1, list2 }) => (
    <div className='ai-myself-list-parent row'>
        <List items={list1} />
        <List items={list2} />
    </div>
)

const MySelf = ({ data: {
    heading,
    paragraphs,
    techList1,
    techList2,
    image,
} }) => {
    const { ref } = useParallax({
        speed: -20,
        easing: [1, 1.5, 0.5, 2],
        rotate: [0, (360 * 1)],
    });
    return (
        <div className='ai-myself'>
            <div
                ref={ref}
                className='ai-myself-settings-icon'>
                <Helm />
            </div>
            <div className='container'>
                <div
                    data-aos="fade-down-left"
                    className='ai-myself-container'>
                    <ViewsTitle
                        text={heading}
                    />
                    <div className='row justify-content-center'>
                        <div className='col-12 col-md-8'>
                            <div className=''>
                                {(paragraphs || []).map((text, i) => (
                                    <Paragraph
                                        key={i}
                                        text={text}
                                    />
                                ))}
                                <ListParent
                                    list1={techList1}
                                    list2={techList2}
                                />
                            </div>
                        </div>
                        <div className='col-12 col-md-4 mt-5 mt-md-0'>
                            <div
                                data-aos="zoom-in-right"
                                className='ai-myself-profile-wrapper d-flex justify-content-center'>
                                <HoverImage
                                    showFilter
                                    showBorder
                                    imageClassName='ai-myself-profile'
                                    parentClassName='ai-myself-profile-parent'
                                    src={image}
                                // layout="fill"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

MySelf.propTypes = {}

export default MySelf