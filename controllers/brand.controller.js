const Brand = require('../models/brand.model');
var ObjectId = require('mongodb').ObjectID;
//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.brand_create = function (req, res, next) {
    let brand = new Brand(
        {
            name: req.body.name,
            ethics: req.body.ethics,
            sustainability: req.body.sustainability,
            quality: req.body.quality,
            url: req.body.url,
        }
    );

    brand.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Brand Created successfully')
    })
};

exports.brand_details = function (req, res, next) {
    Brand.findById(ObjectId(req.params.id), function (err, brand) {
        if (err) return next(err);
        res.send(brand);
    })
};

exports.brand_update = function (req, res, next) {
    Brand.findByIdAndUpdate(ObjectId(req.params.id), {$set: req.body}, function (err, brand) {
        if (err) return next(err);
        res.send('Brand udpated');
    });
};

exports.brand_delete = function (req, res, next) {
    Brand.findByIdAndRemove(ObjectId(req.params.id), function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
