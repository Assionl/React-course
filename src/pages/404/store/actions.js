function addAction(value) {
    return {
        type: "A",
        value: value
    }
}
function jianAction(value) {
    return {
        type: "B",
        value: value
    }
}
export { addAction, jianAction }