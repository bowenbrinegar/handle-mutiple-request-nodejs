import Requester from './requests'

app.get('/articles/:searchQuery', function(req, res) {
    const searchQuery = req.params.searchQuery;
    const requested = new Requester(searchQuery);
    requested.then((articles) => {
        res.send(articles);
    })
});