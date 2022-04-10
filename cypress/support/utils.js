export const format = (value) => {
    let formattedValue

    formattedValue = value.replace(',', '.')
    formattedValue = Number(formattedValue.split('$')[1].trim())

    formattedValue = String(value).includes('-') ? -formattedValue : formattedValue

    return formattedValue
}

export const randomNumber = () => {
    return Math.floor(Math.random() * 101)
}