interface Options {
    ease?: string,
    duration?: number
}

declare module 'scrollto' {
    export default function scrollTo(x: number, y: number, options?: Options);
}