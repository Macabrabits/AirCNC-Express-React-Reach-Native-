const Spot = require('../models/Spot')
module.exports = {
    async index(req, res){
        const { user_id } = req.headers          
        let spot = await Spot.find({user: user_id})    
        return res.json(spot);
    },
    async show(req, res){
        const { user_id } = req.headers          
        let spot = await Spot.findOne({user: user_id})    
        return res.json(spot);
    },
    store(req, res){
        
    },
    update(){

    },
    destroy(){

    },
}

