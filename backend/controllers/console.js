const Consoles = require("../models/console.model");


exports.getConsoles = function (req, res, next) {

    let filter = req.body.filter

    Consoles.find((err, consoles) => {
        if (err){
            return next(err)
        }

        if (filter !== undefined){

            var query = null;
            if(filter&&parseInt(filter)){
                query = {"$or": [{_id:{$regex: filter}}, {contentfulState:{$eq: parseInt(filter)}}, {tag:{$regex: filter}}, {tagTitle:{$regex: filter}},
                        {title:{$regex: filter}}, {imageUrl:{$regex: filter}}, {priority:{$eq: parseInt(filter)}}, {count:{$eq: parseInt(filter)}}]}
            }else{
                query = {"$or": [{_id:{$regex: filter}}, {tag:{$regex: filter}}, {tagTitle:{$regex: filter}},
                        {title:{$regex: filter}}, {imageUrl:{$regex: filter}}]}
            }
            Consoles.find(query, (err, filteredConsole) => {
                if (err){
                    return next(err);
                }
                res.status(200).json({consoles:filteredConsole});
            })
        }else {
            res.status(200).json({consoles:consoles})
        }
    })
}