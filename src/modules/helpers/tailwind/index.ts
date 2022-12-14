const TailwindUtils = {

    sm: (text: string) => text.split(' ').map(value => `sm:${value}`).join(' '),
    md: (text: string) => text.split(' ').map(value => `md:${value}`).join(' '),
    lg: (text: string) => text.split(' ').map(value => `lg:${value}`).join(' '),
    xl: (text: string) => text.split(' ').map(value => `xl:${value}`).join(' '),
    doIt: (text: string) => text.split(' ').map(value => `doIt:${value}`).join(' '),



}

export default TailwindUtils;