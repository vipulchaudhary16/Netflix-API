const NetlixItem = require("../models/NetlixItem");
const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        let query = {};
        /*
        Filter show by type
        possible value: Movie, TV Show
        */
        if (req.query.type) query.type = req.query.type;
        /*
        Search query: it will search in title, director and cast
        */
        if (req.query.search) {
            //here we are ignoring case sensitive query, eg. Jagga and jagGa is same
            //if title or director or cast contains search query parameter
            query.$or = [
                { title: { $regex: req.query.search, $options: 'i' } },
                { director: { $regex: req.query.search, $options: 'i' } },
                { cast: { $regex: req.query.search, $options: 'i' } }
            ];
        }
        /*
        country: filter by country
        */
        if (req.query.country) query.country = req.query.country;
        /*
        date_added: List items based on date added
        min_date_added: Lower bound
        default: infinite 
        */
        if (req.query.min_date_added) {
            min_date_added = new Date(req.query.min_date_added);
            query.date_added = { $gte: min_date_added };
        }
       /*
       for range query on date added
       max_date_added: Upper bound
       default : infinite 
       */
       if (req.query.max_date_added) {
            max_date_added = new Date(req.query.max_date_added);
            if (!query.date_added) query.date_added = {};
            query.date_added.$lte = max_date_added;
        }
        /*
        release_year: List items based on release year
        min_release_year: Lower bound
        */
        if (req.query.min_release_year) query.release_year = { $gte: parseInt(req.query.min_release_year) };
        /*
        range query for release_year
        max_release_year: Upper bound
        */
        if (req.query.max_release_year) {
            if (!query.release_year) query.release_year = {};
            query.release_year.$lte = parseInt(req.query.max_release_year);
        }
        /*
        filter by rating
        Add ratting name as parameter 
        */
        if (req.query.rating) query.rating = req.query.rating;
        let sort = {};
        /*
        Sort by 'date_added or release_year'
        */
        if (req.query.sort === 'date_added') sort.date_added = 1;
        if (req.query.sort === 'release_year') sort.release_year = 1;
        const data = await NetlixItem.find(query).sort(sort);
        res.json({ data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;