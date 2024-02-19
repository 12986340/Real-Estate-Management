// import * as Yup from 'yup'

// export const PaymentYuup = Yup.object({

//     nameoncard: Yup.string().min(2).max(35).matches(
//         /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
//         '  Name can only contain Latin letters.'
//     ).required("please enter name on card"),
//     cardno: Yup.number().integer()
//         .required("please enter card number")
//         .min(100000000000, '  Enter valid 12 Digit Number')
//         .max(999999999999, '  Enter valid 12 digit Number')
//         .label("   this"),
//     amount: Yup.number().integer()
//         .required("please enter booking amount")
//         .min(100, '  Minimun amount is 100 required ')
//         .label("   this"),


// })

import * as Yup from 'yup'

export const PaymentYuup = Yup.object({

    nameoncard: Yup.string().trim().min(2).max(35).matches(
        /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
        '  Name can only contain Latin letters.'
    ).required("please enter name on card"),
    cardno: Yup.number().integer()
        .required("please enter card number")
        .min(100000000000, '  Enter valid 12 Digit Number')
        .max(999999999999, '  Enter valid 12 digit Number')
        .label("   this"),
    amount: Yup.number().integer()
        .required("please enter booking amount")
        .min(100, '  Minimun amount is 100 required ')
        .label("   this"),


})