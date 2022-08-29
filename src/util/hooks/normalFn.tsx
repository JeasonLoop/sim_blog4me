// TODO: 处理字数限制
const limitWords = (txt: string) => {
    let str = txt
    if (str.length > 25) {
        str = `${str.substring(0, 25)}...`
        return str
    }
    return str
}





export {
    limitWords
}