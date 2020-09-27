export default (interlinears, { text, sortBy }) => {
    return interlinears.filter((interlinear) => {
        const textMatch = interlinear.title.toLowerCase().includes(text.toLowerCase())
        return textMatch
    }).sort((a, b) => {
        return a.title < b.title ? 1 : -1
    })
}
