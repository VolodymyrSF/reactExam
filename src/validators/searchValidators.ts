import Joi from "joi";

const searchValidators=Joi.object({
    search:Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Only letters min 1 max 20 characters'
    }),
})

export {searchValidators}