import { openLink } from "./methods"

const certifications = {
    heading:  `Licenses & certifications`,
    list: [
        {
            size: 1,
            title: 'DevOps on AWS Specialization',
            platform: 'Coursera',
            link: '',
            date: 'Issued Sep 2022 · No Expiration Date',
            logo: '/assets/aws.png',
            aos: 'zoom-out-left'
        },
        {
            size: 1,
            title: 'Docker for absolute beginners',
            platform: 'Coursera',
            link: '',
            date: 'Issued Sep 2022 · No Expiration Date',
            logo: '/assets/docker.png',
            aos: 'zoom-out-right'
        },
        {
            size: 1,
            title: 'AWS Cloud Technical Essentials',
            platform: 'Coursera',
            link: '',
            date: 'Issued Aug 2022 · No Expiration Date',
            logo: '/assets/aws.png',
            aos: 'zoom-out-left'
        },
        {
            size: 1,
            title: 'Certified Mobile and Web App Developer',
            platform: 'SMIT | Saylani Mass IT Training',
            link: '',
            date: 'Issued Feb 2019 · No Expiration DateIssued',
            logo: '/assets/smit.png',
            aos: 'zoom-out-right'
        },
        {
            size: 2,
            title: 'Hackathon on creating OLX App using PWA Development',
            platform: 'SMIT | Saylani Mass IT Training',
            link: '',
            date: 'Issued Jul 2018 · No Expiration Date',
            logo: '/assets/smit.png',
            aos: 'zoom-out-left'
        },
    ],
    handleIconClick: openLink
}

export default certifications