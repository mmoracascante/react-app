import { useFormik } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'


export const FormikYupPage = () => {

    const initialValues = {
        firstName: '',
        lastName: '',
        emailAddress: '',
    }

    const handleSubmit = (values: typeof initialValues) => {

    }



    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(15, 'Debe tener un máximo de 15 caracteres').required('Requerido'),
            lastName: Yup.string().max(15, 'Debe tener un máximo de 15 caracteres').required('Requerido'),
            emailAddress: Yup.string().email('Debe ser un correo válido').required('Requerido'),
        })
    })








    return (
        <div>

            <h1>Formik Yup</h1>

            <form noValidate onSubmit={formik.handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    {...formik.getFieldProps('firstName')}
                />
                {formik.errors.firstName && formik.touched.firstName && <span>{formik.errors.firstName}</span>}

                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    {...formik.getFieldProps('lastName')}
                />
                {formik.errors.lastName && formik.touched.lastName && <span>{formik.errors.lastName}</span>}

                <label htmlFor="emailAddress">Email Address</label>
                <input
                    type="email"
                    {...formik.getFieldProps('emailAddress')}
                />
                {formik.errors.emailAddress && formik.touched.emailAddress && <span>{formik.errors.emailAddress}</span>}

                <button type='submit'>Submit</button>

            </form>

        </div >
    )
}
