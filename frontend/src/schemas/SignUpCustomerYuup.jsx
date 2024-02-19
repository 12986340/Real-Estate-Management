// import * as Yup from 'yup'



// export const  signUpUser =Yup.object({

//     name :Yup.string().min(2).max(15).matches(
//         /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
//             '  Name can only contain Latin letters.'
//         ).required("please enter your name."),
//     email :Yup.string().email().required("please enter your email id."),
//     gender :Yup.string().required("Gender Not selected"),
//     contactno :Yup.number()
//     .required()
//     .min(7000000000, '  Enter valid 10 Digit Number')
//     .max(9999999999, '  Enter valid 10 digit Number')
//     .label(" mobile no"),
//      password :Yup.string().min(6).max(20).required(" please enter password."),
//      address :Yup.string().required("please enter your address."),
//      uid :Yup.number().integer()
//      .required("please enter your adhar no.")
//      .min(100000000000, '  Enter valid 12 Digit Number')
//      .max(999999999999, '  Enter valid 12 digit Number')
//      .label("   this"),
//      question :Yup.string().required("  please select one of the field."),
//      answer :Yup.string().required("  please fill your answer."),

// })


import * as Yup from 'yup'



export const  signUpUser =Yup.object({

    name :Yup.string().trim().min(2).max(30).matches(
        /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
            '  Name can only contain Latin letters.'
        ).required("please enter your name."),
    email :Yup.string().trim().email().required("please enter your email id."),
    gender :Yup.string().required("Gender Not selected"),
    contactno :Yup.number()
    .required()
    .min(7000000000, '  Enter valid 10 Digit Number')
    .max(9999999999, '  Enter valid 10 digit Number')
    .label(" mobile no"),
     password :Yup.string().trim().min(6).max(20).required(" please enter password."),
     address :Yup.string().trim().max(200).required("please enter your address."),
     uid :Yup.number().integer()
     .required("please enter your adhar no.")
     .min(100000000000, '  Enter valid 12 Digit Number')
     .max(999999999999, '  Enter valid 12 digit Number')
     .label("   this"),
     question :Yup.string().required("  please select one of the field."),
     answer :Yup.string().trim().max(50).required("  please fill your answer."),

})