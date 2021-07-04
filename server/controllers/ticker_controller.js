import db from "../db.js";

class TickerController {
    async getCategories(req, res) {
        try {
            const response = await db.categories;
            return res.json(response);

        } catch(e) {
            console.log(e);
            res.status(500).json({message: "Can not get categories"});
        }
    }
}

export default new TickerController();