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


exports.delete = function (req, res, next) {

    const fId = req.params.id;
    Consoles.findByIdAndRemove(fId, (err, deletedConsole) => {
        if (err){
            console.log(err);
        }
        Consoles.find().exec(function (err, consoles) {
            if (err){
                console.log(err);
            }
            return res.status(200).json({consoles:consoles});
        });
    });
}


exports.update = function (req, res, next) {
    Consoles.findById(req.body._id, function (err, tData) {
        if (err){
            res.send(err);
        }

        tData.contentfulState = req.body.contentfulState;
        tData.title = req.body.title;
        tData.imageUrl = req.body.imageUrl;
        tData.priority = req.body.priority;
        tData.count = req.body.count;
        tData.tag = req.body.tag;
        tData.tagTitle = req.body.tagTitle;
        const consoleData = new Consoles(tData);

        consoleData.save((err, saveConsoles) => {
            if (err){
                res.send(err)
            }
            Consoles.find().exec(function (err, consoles) {
                if (err)
                    res.send(err);
                return res.status(200).json({consoles: consoles});
            });
        });
    });
}

