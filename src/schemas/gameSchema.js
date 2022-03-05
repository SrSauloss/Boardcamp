import joi from "joi";

const gameSchema = joi.object({
    name: joi.string().required(),
    image: joi.string().pattern(new RegExp('^(http://)|(https://)')).required(),
    stockTotal: joi.number().greater(0).required(),
    categoryId: joi.number().required(),
    pricePerDay: joi.number().greater(0).required()
})

export default gameSchema;