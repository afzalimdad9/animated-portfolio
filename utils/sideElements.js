import { openLink } from "./methods"

const handleIconClick = (icon) => {
    const links = {
        'github': 'https://github.com/muneebwasikhan',
        'instagram': 'https://www.instagram.com/muneebwasikhan6/',
        'twitter': 'https://twitter.com/muneebwasikhan',
        'linkedin': 'https://www.linkedin.com/in/muneebwasikhan/',
    }
    openLink(links[icon])
}

const sideElements = {
    emailButton: {
        label: 'muneebwasikhan@gmail.com',
        onClick: () => openLink('mailto:muneebwasikhan@gmail.com?subject=Hello')
    },
    handleIconClick,
}

export default sideElements