var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://richardgitonga:1Quality@cluster0.igm2h.mongodb.net/classwork?retryWrites=true&w=majority',
    development: 'mongodb+srv://richardgitonga:1Quality@cluster0.igm2h.mongodb.net/classwork?retryWrites=true&w=majority',
    test: 'mongodb+srv://richardgitonga:1Quality@cluster0.igm2h.mongodb.net/classwork?retryWrites=true&w=majority'
}
module.exports = config;
