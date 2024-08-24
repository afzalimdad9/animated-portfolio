import { openLink } from "./methods"

const handleIconClick = (icon) => {
    const links = {
        'github': 'https://github.com/afzalimdad9',
        'instagram': 'https://www.instagram.com/afzalimdad9/',
        'twitter': 'https://twitter.com/afzalimdad9',
        'linkedin': 'https://www.linkedin.com/in/afzalimdad9/',
    }
    openLink(links[icon])
}

const sideElements = {
    emailButton: {
        label: 'afzalimdad9@gmail.com',
        onClick: () => openLink('mailto:afzalimdad9@gmail.com?subject=Hello')
    },
    handleIconClick,
}

export default sideElements