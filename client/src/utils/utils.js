// price devide helper
export const getPriceDevider = num => {
    return (
        num
        .replace('.', ',') // replace decimal point character with ,
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' $'
    ) // use " " as a separator
}