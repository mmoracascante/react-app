import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'


export const FormikComponentsPage = () => {

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

            <h1>Formik Components</h1>


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

                            <label htmlFor="firstName">First Name</label>
                            <Field name='firstName' type='text' />
                            <ErrorMessage name='firstName' component='span' />

                            <label htmlFor="lastName">Last Name</label>
                            <Field name='lastName' type='text' />
                            <ErrorMessage name='lastName' component='span' />

                            <label htmlFor="emailAddress">Email Address</label>
                            <Field name='emailAddress' type='email' />
                            <ErrorMessage name='emailAddress' component='span' />

                            <label htmlFor="jobType">Job Type</label>
                            <Field name='jobType' as='select'>
                                <option value=''>Pick something</option>
                                <option value='developer'>Developer</option>
                                <option value='designer'>Designer</option>
                                <option value='it-senior'>IT Senior</option>
                                <option value='it-junior'>IT Junior</option>
                            </Field>
                            <ErrorMessage name='jobType' component='span' />



                            <label htmlFor="terms">
                                <Field name='terms' type='checkbox' />
                                Terms and conditions
                            </label>
                            <ErrorMessage name='terms' component='span' />

                            <button type='submit'>Submit</button>

                        </Form>
                    )
                }
            </Formik>



        </div >
    )
}
