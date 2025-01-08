export const getPoster = (path: string) => {
    const url = 'https://image.tmdb.org/t/p/original';
    return `${url}${path}`;
}