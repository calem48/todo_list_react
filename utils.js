const getLocalStorge = () => {
    return JSON.parse(localStorage.getItem('items')) || []
}
export { getLocalStorge }