export const getPoster = (path: string, backImg?: boolean, credits?: boolean) => {
    const url = !backImg ? credits ? 'https://image.tmdb.org/t/p/w300' : 'https://image.tmdb.org/t/p/w500' : 'https://image.tmdb.org/t/p/w1280';
    return `${url}${path}`;
}