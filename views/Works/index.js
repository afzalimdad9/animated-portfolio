import React, { useState, useEffect, useRef } from 'react'
import ViewsTitle from '../../components/ViewsTitle'

// ── Animated bullet point ──────────────────────────────────────────
const BulletPoint = ({ text, delay = 0 }) => {
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        const t = setTimeout(() => setVisible(true), delay)
        return () => clearTimeout(t)
    }, [delay])

    return (
        <div className={`works-bullet ${visible ? 'works-bullet--visible' : ''}`}>
            <span className='works-bullet__icon'>▹</span>
            <span className='works-bullet__text'>{text}</span>
        </div>
    )
}

// ── Desktop tab list ───────────────────────────────────────────────
const TabSidebar = ({ list, selectedIndex, onSelect }) => (
    <div className='works-sidebar'>
        <div className='works-sidebar__track'>
            <div
                className='works-sidebar__cursor'
                style={{ transform: `translateY(${selectedIndex * 48}px)` }}
            />
        </div>
        <div className='works-sidebar__items'>
            {(list || []).map((item, i) => (
                <button
                    key={i}
                    onClick={() => onSelect(i)}
                    className={`works-sidebar__btn ${selectedIndex === i ? 'works-sidebar__btn--active' : ''}`}
                >
                    <span className='works-sidebar__index'>0{i + 1}</span>
                    <span className='works-sidebar__label'>{item.company}</span>
                </button>
            ))}
        </div>
    </div>
)

// ── Desktop job panel ──────────────────────────────────────────────
const JobPanel = ({ company, jobs, animKey }) => (
    <div className='works-panel' key={animKey}>
        {(jobs || []).map((job, i) => (
            <div className='works-panel__job' key={i}>
                <div className='works-panel__header'>
                    <h3 className='works-panel__role'>
                        {job.role}
                        <span className='works-panel__at'> @ </span>
                        <span className='works-panel__company'>{company}</span>
                    </h3>
                    <div className='works-panel__badge'>{job.duration}</div>
                </div>
                <div className='works-panel__divider' />
                <div className='works-panel__bullets'>
                    {(job.points || []).map((text, j) => (
                        <BulletPoint key={j} text={text} delay={j * 60} />
                    ))}
                </div>
            </div>
        ))}
    </div>
)

// ── Mobile animated bullet ─────────────────────────────────────────
const MobileBullet = ({ text, delay = 0 }) => {
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        const t = setTimeout(() => setVisible(true), delay)
        return () => clearTimeout(t)
    }, [delay])
    return (
        <li className={`mob-card__point ${visible ? 'mob-card__point--visible' : ''}`}>
            <span className='mob-card__point-icon'>▹</span>
            {text}
        </li>
    )
}

// ── Mobile job card ────────────────────────────────────────────────
const MobileJobCard = ({ job, company, cardIndex, animKey }) => {
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        const t = setTimeout(() => setMounted(true), cardIndex * 90)
        return () => clearTimeout(t)
    }, [animKey])

    useEffect(() => { setMounted(false) }, [animKey])

    return (
        <div className={`mob-card ${mounted ? 'mob-card--visible' : ''}`}>
            {/* Glow corner accent */}
            <div className='mob-card__glow' aria-hidden='true' />

            <div className='mob-card__header'>
                <div>
                    <div className='mob-card__role'>{job.role}</div>
                    <div className='mob-card__company'>@ {company}</div>
                </div>
                <div className='mob-card__badge'>{job.duration}</div>
            </div>

            <div className='mob-card__divider' />

            <ul className='mob-card__points'>
                {(job.points || []).map((pt, k) => (
                    <MobileBullet key={k} text={pt} delay={cardIndex * 90 + k * 65 + 150} />
                ))}
            </ul>
        </div>
    )
}

// ── Mobile company chips ───────────────────────────────────────────
const MobileView = ({ experiences }) => {
    const [selected, setSelected] = useState(0)
    const [animKey, setAnimKey] = useState(0)
    const chipsRef = useRef(null)

    const handleSelect = (i) => {
        if (i === selected) return
        setSelected(i)
        setAnimKey(k => k + 1)
        // ✅ Manual scroll — scrollIntoView shifts the whole page on mobile
        const track = chipsRef.current
        const chip = track?.children[i]
        if (track && chip) {
            const trackCenter = track.offsetWidth / 2
            const chipCenter = chip.offsetLeft + chip.offsetWidth / 2
            track.scrollTo({ left: chipCenter - trackCenter, behavior: 'smooth' })
        }
    }

    const exp = (experiences || [])[selected]

    return (
        <div className='mob-wrap'>
            {/* ── Chip row ── */}
            <div className='mob-chips__track'>
                <div className='mob-chips' ref={chipsRef}>
                    {(experiences || []).map((item, i) => (
                        <button
                            key={i}
                            onClick={() => handleSelect(i)}
                            className={`mob-chip ${selected === i ? 'mob-chip--active' : ''}`}
                        >
                            <span className='mob-chip__num'>0{i + 1}</span>
                            {item.company}
                        </button>
                    ))}
                </div>
            </div>

            {/* ── Progress dots ── */}
            <div className='mob-dots'>
                {(experiences || []).map((_, i) => (
                    <div
                        key={i}
                        className={`mob-dot ${selected === i ? 'mob-dot--active' : ''}`}
                        onClick={() => handleSelect(i)}
                    />
                ))}
            </div>

            {/* ── Cards ── */}
            <div className='mob-cards' key={animKey}>
                {exp && exp.jobs.map((job, j) => (
                    <MobileJobCard
                        key={j}
                        job={job}
                        company={exp.company}
                        cardIndex={j}
                        animKey={animKey}
                    />
                ))}
            </div>
        </div>
    )
}

// ── Main section ───────────────────────────────────────────────────
const Works = ({ data: { heading, experiences } }) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [animKey, setAnimKey] = useState(0)

    const handleSelect = (i) => {
        if (i === selectedIndex) return
        setSelectedIndex(i)
        setAnimKey(k => k + 1)
    }

    const selectedExp = (experiences || [])[selectedIndex]

    return (
        <section className='works'>
            {/* Background grid decoration */}
            <div className='works__grid-bg' aria-hidden='true' />

            <div className='works__container'>
                <ViewsTitle text={heading} />

                {/* ── DESKTOP ──────────────────────────────── */}
                <div className='works__desktop'>
                    <TabSidebar
                        list={experiences}
                        selectedIndex={selectedIndex}
                        onSelect={handleSelect}
                    />
                    {selectedExp && (
                        <JobPanel
                            company={selectedExp.company}
                            jobs={selectedExp.jobs}
                            animKey={animKey}
                        />
                    )}
                </div>

                {/* ── MOBILE ───────────────────────────────── */}
                <div className='works__mobile'>
                    <MobileView experiences={experiences} />
                </div>
            </div>
        </section>
    )
}

export default Works