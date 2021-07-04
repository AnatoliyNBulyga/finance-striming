import db from "../db.js";
import SocketService from "../services/socket_service.js";

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

    async getFilteredByCategoriesTickers(req, res) {
        try {
            const {category} = req.query;

            return res.json({message: `Filtred by category ${category}`});

        } catch(e) {
            console.log(e);
            res.status(500).json({message: "Can not get filtred categories"});
        }
    }
}

export default new TickerController();