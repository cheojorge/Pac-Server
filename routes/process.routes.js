const ProcessController = require("../controllers/process.controller");
module.exports = function(app){
    app.post("/api/process",  ProcessController.createProcess);
    app.get("/api/process/:id", ProcessController.getProcess);
    app.get("/api/process", ProcessController.getAllProcesss);
    app.put("/api/process/:id", ProcessController.updateProcess);
    app.delete("/api/process/:id",ProcessController.deleteProcess)

}