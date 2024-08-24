import React, { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import ViewsTitle from '../../components/ViewsTitle';
import { Parallax } from 'react-scroll-parallax'


const getAnimationData = ({
    index
}) => {
    const mod = index % 2;
    const translateX = {
        0: ['-0%', `${110}%`],
        1: ['0%', `-${110}%`]
    }
    const scale = {
        // 0: [0.5, 1],
        // 1: [0.5, 1]
    }
    const rotate = {
        0: [0, 4],
        1: [0, -4]
    }
    const alignSelf = {
        0: 'self-end',
        1: 'self-start'
    }
    const theme = {
        0: 'theme1',
        1: 'theme2'
    }
    return {
        translateX: translateX[mod],
        scale: scale[mod],
        // float: float[mod],
        alignSelf: alignSelf[mod],
        rotate: rotate[mod],
        theme: theme[mod],
    }
}

const Text = ({ text, index, clinet, via }) => {
    const parallaxRef = useRef()
    const [startScroll, setStartScroll] = useState(0)
    const [endScroll, setEndScroll] = useState(0)
    useEffect(() => {
        window.addEventListener("resize", setPositions);
        setTimeout(() => {
            setPositions()
        }, 3000);
    }, [])

    const setPositions = () => {
        const innerHeight = window.innerHeight;
        const currentRef = parallaxRef?.current;
        const startPossition = currentRef.getBoundingClientRect().top + window.scrollY + 150;
        setStartScroll(startPossition - innerHeight)
        setEndScroll(startPossition + innerHeight)
    }

    const { scale, translateX, alignSelf, rotate, theme } = getAnimationData({
        text,
        index
    })
    return (
        <Parallax
            translateX={translateX}
            scale={scale}
            rotate={rotate}
            easing="easeOutBack"
            {...(startScroll && ({ startScroll }))}
            {...(endScroll && ({ endScroll }))}
            style={{
                width: 'fit-content',
                alignSelf,
                transition: 'all 1000ms cubic-bezier(0.18, 0.89, 0.32, 1.28)'
            }}
        >
            <div
                ref={parallaxRef}
                className={`ai-review-item-info ai-reviwe-color-${theme}-invert`}>
                {clinet} via {via}
            </div>
            <div
                className={`ai-review-item ai-reviwe-color-${theme}`}>
                {`"${text}"`}
            </div>
        </Parallax>
    )
}

const Reviews = ({ data: {
    heading,
    list
} }) => {
    return (
        <div className='ai-reviews'>
            <div className='container'>
                <div className='ai-reviews-container'>
                    <ViewsTitle
                        text={heading}
                    />
                </div>
            </div>
            <div className='ai-reviews-list'>
                {(list || []).map((item, i) => (
                    <Text key={i}
                        index={i}
                        text={item.reivew}
                        clinet={item.clinet}
                        via={item.via}
                    />
                ))}
            </div>
        </div>
    )
}

Reviews.propTypes = {}

export default Reviews