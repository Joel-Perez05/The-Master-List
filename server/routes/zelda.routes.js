const PersonController = require('../controllers/zelda.controller');
module.exports = (app) => {
    app.get('/api', PersonController.index);
    app.post('/api/zelda', PersonController.createPerson);    
    app.get('/api/zelda', PersonController.getAllPeople); 
    app.get('/api/zelda/:id', PersonController.getPerson);
    app.put('/api/zelda/:id', PersonController.updatePerson);
    app.delete('/api/zelda/:id', PersonController.deletePerson);

}

