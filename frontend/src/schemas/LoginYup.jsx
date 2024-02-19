// import * as Yup from 'yup'



// export const  YupLogin =Yup.object({

//     email :Yup.string().email().required("              please enter email id."),
  
//      password :Yup.string().min(6).max(20).required("    please enter password."),
    

// })


import * as Yup from 'yup'



export const  YupLogin =Yup.object({

    email :Yup.string().trim().email().required("      please enter email id."),
  
     password :Yup.string().trim().min(6).max(20).required("    please enter password."),
    

})
