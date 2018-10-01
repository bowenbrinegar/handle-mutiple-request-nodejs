import FilterFunc from './filter';

const Requester = (searchQuery) => {
    return new Promise((resolve) => {
        const request1 = new Promise((resolve, reject) => {
            $.ajax({
                type: 'GET',
                url: 'www.nytimes.com/api/articles/' + searchQuery,
                success: responseCatcher,
                error: errorCatcher
            })

            function responseCatcher(res) {
                new FilterFunc(res).then((parsed) => {
                    resolve(parsed)
                })
            }

            function errorCatcher(err) {
                reject(err)
            }
        })

        const request2 = new Promise((resolve, reject) => {
            $.ajax({
                type: 'GET',
                url: 'www.wallstreetjournal.com/api/articles/' + searchQuery,
                success: responseCatcher,
                error: errorCatcher
            })

            function responseCatcher(res) {
                new FilterFunc(res).then((parsed) => {
                    resolve(parsed)
                })
            }

            function errorCatcher(err) {
                reject(err)
            }
        })

        Promise.all([request1, request2]).then(function(results) {
            resolve(results);
        })   
    });
};

module.exports = Requester;