const FilterFunc = (data) => {
    return new Promise((resolve) => {
        const arr = data.map(function(obj) {
            return {
                name: obj.name,
                headline: obj.headline,
                date: obj.date
            }
        });
        resolve(arr);
    });
}

module.exports = FilterFunc;