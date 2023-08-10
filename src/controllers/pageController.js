//const PageModel = require('../models/page');


const index = async (req, res) => {
    res.send('GET ALL');
};

const create = async (req, res) => {
    res.send('POST');
};

const show = async (req, res) => {
    res.send('GET ONE');
};

const update = async (req, res) => {
    res.send('PUT');
};

const destroy = async (req, res) => {
    if (err) {
        res.status(500).json({ error: err.message });
    } else {
        res.status(200).json({ message: 'Page deleted successfully' });
    }
};

module.exports = {
    index,
    create,
    show,
    update,
    destroy
};