// import * as Yup from 'yup'



// export const ForgetPasswordReset = Yup.object({

//     id: Yup.string().email().required("please enter your user id"),
//     password: Yup.string().min(6).max(20).required("enter  password"),
//     answer: Yup.string().required("enter answer provided by you"),
//     conformpassword: Yup.string().min(6).max(20).required(" password").oneOf([Yup.ref("password"), null], "  password must Match"),
//     question: Yup.string().required("select question provided by you")

// })

import * as Yup from 'yup'



export const ForgetPasswordReset = Yup.object({

    id: Yup.string().trim().max(50).email().required("please enter your user id"),
    password: Yup.string().trim().min(6).max(20).required("enter  password"),
    answer: Yup.string().trim().max(50).required("enter answer provided by you"),
    conformpassword: Yup.string().min(6).max(20).required(" password").oneOf([Yup.ref("password"), null], "  password must Match"),
    question: Yup.string().required("select question provided by you")

})