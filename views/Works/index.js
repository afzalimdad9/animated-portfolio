import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ViewsTitle from '../../components/ViewsTitle'

const TabListItem = ({ text }) => (
    <div className='ai-works-tab-right-list-item'>{text}</div>
)

// const Tabs = ({ list }) => {
//     const [selectedItemIndex, handleSelectItemIndex] = useState(0);
//     const seletedItem = list[selectedItemIndex]
//     return (
//         <div>
//             <div className='ai-works-tab'>
//                 <div
//                     className='ai-works-left-border'>
//                     <div
//                         style={{
//                             transform: `translateY(${selectedItemIndex * 42}px)`
//                         }} className='ai-works-left-border-selection' />
//                 </div>
//                 <div className='ai-works-tab-left'>
//                     {(list || []).map((item, i) => (
//                         <div key={i} data-aos="zoom-in-left">
//                             <div onClick={() => handleSelectItemIndex(i)}
//                                 className={`ai-works-tab-left-button ${selectedItemIndex === i ? 'ai-works-tab-left-button-selected' : ''}`}
//                             >{item.company}</div>
//                         </div>
//                     ))}
//                 </div>
//                 <div className='ai-works-tab-right'>
//                     {seletedItem && seletedItem.jobs.map(selectedItem => (
//                         <>
//                             <div
//                                 data-aos="zoom-in-right"
//                                 className='ai-works-tab-right-title'>
//                                 {`${selectedItem.role} @ ${seletedItem.company}`}
//                             </div>
//                             <div
//                                 data-aos="zoom-in-right" className='ai-works-tab-right-duration'>{selectedItem.duration}</div>
//                             <div
//                                 data-aos="zoom-in-right" className='ai-works-tab-right-list'>
//                                 {(selectedItem.points || []).map((text, i) => (
//                                     <TabListItem key={i} text={text} />
//                                 ))}
//                             </div>
//                         </>
//                    ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

const Tabs = ({ list }) => {
    const [selectedItemIndex, handleSelectItemIndex] = useState(0);
    const [openIndex, setOpenIndex] = useState(0);
    const selectedItem = (list || [])[selectedItemIndex];

    return (
        <div>

            {/* DESKTOP VIEW */}
            <div className='ai-works-tab desktop-only'>
                <div className='ai-works-left-border'>
                    <div
                        style={{
                            transform: `translateY(${selectedItemIndex * 42}px)`
                        }}
                        className='ai-works-left-border-selection'
                    />
                </div>

                <div className='ai-works-tab-left'>
                    {(list || []).map((item, i) => (
                        <div key={i} data-aos="zoom-in-left">
                            <div
                                onClick={() => handleSelectItemIndex(i)}
                                className={`ai-works-tab-left-button ${selectedItemIndex === i ? 'ai-works-tab-left-button-selected' : ''}`}
                            >
                                {item.company}
                            </div>
                        </div>
                    ))}
                </div>

                <div className='ai-works-tab-right'>
                    {selectedItem && selectedItem.jobs.map((job, index) => (
                        <div key={index}>
                            <div className='ai-works-tab-right-title'>
                                {`${job.role} @ ${selectedItem.company}`}
                            </div>

                            <div className='ai-works-tab-right-duration'>
                                {job.duration}
                            </div>

                            <div className='ai-works-tab-right-list'>
                                {(job.points || []).map((text, i) => (
                                    <TabListItem key={i} text={text} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* MOBILE VIEW */}
            {/* <div className='mobile-only px-4'>
                {(list || []).map((exp, i) => (
                    <div key={i} className='mobile-card-group'>

                        <div className='mobile-company'>
                            {exp.company}
                        </div>

                        {exp.jobs.map((job, j) => (
                            <div key={j} className='mobile-card'>

                                <div className='mobile-role'>
                                    {job.role}
                                </div>

                                <div className='mobile-duration'>
                                    {job.duration}
                                </div>

                                <ul className='mobile-points'>
                                    {(job.points || []).slice(0, 3).map((point, k) => (
                                        <li key={k}>{point}</li>
                                    ))}
                                </ul>

                            </div>
                        ))}
                    </div>
                ))}
            </div> */}

            
            {/*Accordion*/}
            <div className='mobile-only px-4'>
                {(list || []).map((exp, i) => {
                const isOpen = openIndex === i;

                return (
      <div key={i} className='mobile-accordion-item'>

        {/* HEADER */}
        <div
          className='mobile-accordion-header'
          onClick={() => setOpenIndex(isOpen ? null : i)}
        >
          <span>{exp.company}</span>
          <span className={`arrow ${isOpen ? 'open' : ''}`}>
            ▾
          </span>
        </div>

        {/* CONTENT */}
        <div className={`mobile-accordion-content ${isOpen ? 'open' : ''}`}>
          {exp.jobs.map((job, j) => (
            <div key={j} className='mobile-card'>

              <div className='mobile-role'>
                {job.role}
              </div>

              <div className='mobile-duration'>
                {job.duration}
              </div>

              <ul className='mobile-points'>
                {(job.points || []).map((point, k) => (
                  <li key={k}>{point}</li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
                );
               })}
            </div>



        </div>
    );
};


const Works = ({ data: {
    heading,
    experiences,
} }) => {
    return (
        <div
            className='ai-works'>
            <div className='container h100per-min100vh d-flex justify-content-center'>
                <div

                    data-aos="fade-down-left"
                    className='ai-works-container'>
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