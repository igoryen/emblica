export default (interlinears, { text, sortBy }) => {
    return interlinears.filter((interlinear) => {
        let textMatch = ''
        if(sortBy === 'title') {
            textMatch = interlinear.title.toLowerCase().includes(text.toLowerCase())
        } else if (sortBy === 'date') {
            textMatch = interlinear.date.toLowerCase().includes(text.toLowerCase())
        } else if (sortBy === 'mainlang') {
            textMatch = interlinear.mainlang.toLowerCase().includes(text.toLowerCase())
        } else if (sortBy === 'mainauthor') {
            textMatch = interlinear.mainauthor.toLowerCase().includes(text.toLowerCase())
        }
        return textMatch
    }).sort((a, b) => {
        if(sortBy === 'title') {
            return a.title < b.title ? -1 : 1
        } else if ( sortBy === 'date') {
            return a.date < b.date ? 1 : -1
        } else if ( sortBy === 'mainlang') {
            return a.mainlang < b.mainlang ? 1 : -1
        } else if ( sortBy === 'mainauthor') {
            return a.mainauthor < b.mainauthor ? 1 : -1
        }
    })
}
