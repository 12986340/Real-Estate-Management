// import * as Yup from 'yup'

// export const  YupAdminLogin =Yup.object({

//     email :Yup.string().required("please enter email id."),  
//      password :Yup.string().max(20).required("please enter password."),    

// })

import * as Yup from 'yup'

export const  YupAdminLogin =Yup.object({

    email :Yup.string().trim().max(50).required("please enter email id."),  
     password :Yup.string().trim().max(20).required("please enter password."),    

})