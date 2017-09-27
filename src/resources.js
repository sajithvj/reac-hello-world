var resources = [
    {
        id: 1,
        name: 'Foo'
    }
];
 
app.get('/resources', function(req, res) {
    res.send(resources);
});
 
app.get('/resources/:id', function(req, res) {
    var id = parseInt(req.params.id, 10);
    var result = resources.filter(r => r.id === id)[0];
 
    if (!result) {
        res.sendStatus(404);
    } else {
        res.send(result);
    }
});