// import * as Yup from 'yup'



// export const  AddApartmentYuup =Yup.object({


//     name :Yup.string().min(2).max(35).matches(
//         /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
//             '  Name can only contain Latin letters.'
//         ).required("please enter apartment name"),
//     address :Yup.string().required("please enter appartment address"),    
   
//     city:Yup.string().min(2).matches(
//         /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
//             '  City can only contain Latin letters.'
//         ).required("please enter city"),
//     state:Yup.string().min(2).matches(
//             /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
//                 '  City can only contain Latin letters.'
//             ).required("please enter state"),    
//     rent :Yup.string().min(0).required("please provide monthly rent."),        
//     ebill :Yup.string().min(0).required("please provide electricity bill amount"),
//     extra :Yup.string().min(0).required("please provide extra features."),
//     gender :Yup.string().required("please specify gender requirement"),
//     atype :Yup.string().required("please select type"),
//     furnish :Yup.string().required(" please select one of the field"),      
//      totalbeds :Yup.string().min(1).required("please enter bed capacity")   
    
// })

import * as Yup from 'yup'



export const  AddApartmentYuup =Yup.object({


    name :Yup.string().trim().min(2).max(35).matches(
        /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
            '  Name can only contain Latin letters.'
        ).required("please enter apartment name"),
    address :Yup.string().trim().max(250).required("please enter appartment address"),    
   
    city:Yup.string().trim().max(30).min(2).matches(
        /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
            '  City can only contain Latin letters.'
        ).required("please enter city"),
    state:Yup.string().trim().max(30).min(2).matches(
            /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
                '  City can only contain Latin letters.'
            ).required("please enter state"),    
    rent :Yup.string().min(0).required("please provide amount."),        
    //ebill :Yup.string().min(0).required("please provide electricity bill amount"),
    extra :Yup.string().min(0).required("please provide extra features."),
   // gender :Yup.string().required("please specify gender requirement"),
    flattype :Yup.string().required("please select type"),
    propertyFor :Yup.string().required("please select type"),
    furnish :Yup.string().required(" please select one furnishing"),    
    parking :Yup.string().required(" please select one about parking"), 
    balcony :Yup.string().required(" please select one about balcony "),
    facing :Yup.string().required(" please select one facing"),
    buildingIs :Yup.string().required(" please select about building"),
    builtupArea :Yup.string().min(0).required("please enter builtup area")   
    
})