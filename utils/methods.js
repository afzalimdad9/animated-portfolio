export function scrollTo(id) {
    global.document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
}

export function openLink(link, target = "_blank") {
    window.open(link, target)
}

