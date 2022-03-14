//validation

const Joi = require('@hapi/joi')


//registerValidation 
const registerValidation = (data) =>{

    const schema = Joi.object({
        doctorid: Joi.string().length(6).required(),
        name: Joi.string(),
        username: Joi.string(),
        password: Joi.string().min(6).required()
    });
    
    return schema.validate(data)
}

//loginValidation 
const loginValidation = (data) =>{

    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required()
    });
    
    return schema.validate(data)
}

module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation
