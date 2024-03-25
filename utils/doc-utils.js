export const getDocumentsByCategories = (docs, categories) => {
    return docs.filter(doc => doc.categories === categories)
}

export const getDocumentsByAuthor = (docs, author) => {
    return docs.filter(doc => encodeURI(doc.author) === author)
}

export const getDocumentsByTags = (docs, tag) => {
    return docs.filter(doc => doc.tags.some(inputTag => inputTag === tag))
}
