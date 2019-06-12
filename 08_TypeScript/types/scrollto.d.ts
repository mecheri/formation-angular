interface Options {
    ease?: string,
    duration?: number
}

declare module 'scroll-to' {
    export default function scrollTo(x: number, y: number, options?: Options);
}