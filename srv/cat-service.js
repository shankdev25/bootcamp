const cds = require('@sap/cds');

class CatalogService extends cds.ApplicationService {

    async init() {

        const { trainers } = this.entities;

        this.before("READ", "trainers", async (req) => {

            console.log(req.query);

        });

        this.after("READ", "trainers", async (res) => {

            console.log(res);

            for (let i = 0; i < res.length; i++) {
                res[i].trainer = "Shashanktest";
            }

        });

        this.on("activatetraining", async (req,res) => {
            let id = req.data.id;
            const db = await cds.connect.to("db");

            let tx = await db.tx(req);
            var resp = await tx.run([UPDATE(trainers).set({
                active : "X"
            }).where({ id: id })]);



            var message = 
               [ {
                "success": "update successful" }]
            ;

            console.log(message);

            return message;

        });
        await super.init();
    }


}

module.exports = { CatalogService };