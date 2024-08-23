import React, { useEffect, useState } from 'react'
import MuneebKhan from '../MuneebKhan';

const PreLoader = () => {
    const [loader, handleLoader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            const root = document.documentElement;
            root.style.setProperty('--scrollBarWidth', '8px');
            handleLoader(false)
        }, 3000)
    }, [])

    return (
        <div className={`mk-pre-loader ${loader ? 'mk-pre-loader-enabled' : 'mk-pre-loader-disabled'}`}>
            <div className='mk-pre-loader-boarder' />
            <div className='mk-pre-loader-container'>
                <MuneebKhan />
            </div>
        </div>
    )
}

PreLoader.propTypes = {}

export default PreLoader
