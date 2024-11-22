// @desc      Get all bootcamps
// @route     GET /api/v1/bootcamps
// @access    Public
exports.getBootCamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show all Bootcamps' });
}

// @desc      Get single bootcamp
// @route     GET /api/v1/bootcamps/:id
// @access    Public
exports.getBootCamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show all Bootcamps' });
}

// @desc      Create new bootcamp
// @route     POST /api/v1/bootcamps
// @access    Private
exports.createBootCamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Create Bootcamps' });
}

// @desc      Update bootcamp
// @route     PUT /api/v1/bootcamps/:id
// @access    Private
exports.updateBootCamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Update Bootcamps' });
}

// @desc      Delete bootcamp
// @route     DELETE /api/v1/bootcamps/:id
// @access    Private
exports.deleteBootCamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Delete Bootcamps' });
}