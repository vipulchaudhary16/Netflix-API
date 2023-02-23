const router = require('express').Router();
const NetlixItem = require('../models/NetlixItem');

router.post('/seed', async (req, res) => {
    try {
        //if our collection has atleast one document that means data is already seeded
        const data = await NetlixItem.findOne({});
        if (data != null && data.length != 0) {
            res.status(409).json({ error: "Data already seeded" });
        } else {
            //if collection is empty then we will seed all data from data.json
            /*
            data.json is a file which I had converted to .json file from .csv
            */
            NetlixItem.insertMany(require('../seed//data.json'), (err, result) => {
                if (err) {
                    res.status(500).json({ error: err.message });
                };
                res.json({ message: "Data seeded successfully" });
            });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/reset', async (req, res) => {
    try {
        const data = await NetlixItem.findOne({});

        if (data == null || data.length == 0) {
            res.status(409).json({ error: "No Data" });
        } else {
            NetlixItem.deleteMany({}, (err, result) => {
                if (err) {
                    res.status(500).json({ error: err.message });
                };
                res.json({ message: "All data deleted successfully" });
            });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;