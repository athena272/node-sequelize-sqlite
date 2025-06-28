module.exports = (paramsObject) => {
    for (let property in paramsObject) {
        if (/Id|id/.test(property)) {
            paramsObject[property] = Number(paramsObject[property]);
        }
    }
    return paramsObject;
};
