export const getGenre = (state: Genre[], idArray: number[]) => {
    return idArray.map((id) => {
        const genre = state.find((genre) => genre.id === id)
        return genre
    })
}