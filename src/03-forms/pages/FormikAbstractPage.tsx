import { Formik, Form, } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'
import { MyTextInput, MySelect, MyCheckbox, } from '../components'


export const FormikAbstractPage = () => {

    const initialValues = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        terms: false,
        jobType: '',
    }

    const handleSubmit = (values: typeof initialValues) => {

    }

    const validationSchemaRegister = Yup.object({
        firstName: Yup.string().max(15, 'Debe tener un máximo de 15 caracteres').required('Requerido'),
        lastName: Yup.string().max(15, 'Debe tener un máximo de 15 caracteres').required('Requerido'),
        emailAddress: Yup.string().email('Debe ser un correo válido').required('Requerido'),
        terms: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
        jobType: Yup.string()
            .notOneOf(['it-junior'], 'Esta opción no es permitida')
            .required('Requerido'),
    })


    return (
        <div>

            <h1>Formik Abstract</h1>


            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={validationSchemaRegister}
            >
                {
                    (formik: any) => (
                        <Form>

                            <MyTextInput
                                name='firstName'
                                label='First Name'
                            />

                            <MyTextInput
                                name='lastName'
                                label='Last Name'
                            />

                            <MyTextInput
                                name='emailAddress'
                                label='Email Addres'
                            />

                            <MySelect name='jobType' label='Job Type'>
                                <option value=''>Pick something</option>
                                <option value='developer'>Developer</option>
                                <option value='designer'>Designer</option>
                                <option value='it-senior'>IT Senior</option>
                                <option value='it-junior'>IT Junior</option>
                            </MySelect>


                            <MyCheckbox
                                name='terms'
                                label='Terms and conditions'
                            />


                            <button type='submit'>Submit</button>

                        </Form>
                    )
                }
            </Formik>



        </div >
    )
}
