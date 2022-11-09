const smsSender = require('../utils/smspanel');

module.exports = async (req, res, next) => {


    try {
        if (!req.body.number) throw { status: 204, message: "number Cannot Be Empty !" }
        if (!req.body.name) throw { status: 204, message: "name Cannot Be Empty" }
        const result = smsSender(req.body.number, req.body.name)

        return res.status(200).json({
            attemptCode: 200,
            sucess: true,
            data: {
                results: await result,
                name: req.body.name
            }
        })
    } catch (error) {
        next(error)
    }


}