import { FormikErrors, useFormik } from 'formik'
import '../styles/styles.css'


interface FormValues {
    firstName: string;
    lastName: string;
    emailAddress: string;
}

export const FormikPage = () => {

    const initialValues = {
        firstName: '',
        lastName: '',
        emailAddress: '',
    }

    const handleSubmit = (values: typeof initialValues) => {

    }

    const validate = (values: FormValues) => {
        const errors: FormikErrors<FormValues> = {}

        if (!values.firstName) {
            errors.firstName = 'Required'
        } else if (values.firstName.length >= 15) {
            errors.firstName = 'Must be 15 characters or less'
        }

        if (!values.lastName) {
            errors.lastName = 'Required'
        } else if (values.lastName.length >= 10) {
            errors.lastName = 'Must be 10 characters or less'
        }

        if (!values.emailAddress) {
            errors.emailAddress = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailAddress)) {
            errors.emailAddress = 'Invalid email address';
        }

        return errors
    }

    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            console.log(values)
        },
        validate,
    })








    return (
        <div>

            <h1>Formik Page</h1>

            <form noValidate onSubmit={formik.handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    name='firstName'
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.firstName && formik.touched.firstName && <span>{formik.errors.firstName}</span>}

                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    name='lastName'
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.lastName && formik.touched.lastName && <span>{formik.errors.lastName}</span>}

                <label htmlFor="emailAddress">Email Address</label>
                <input
                    type="email"
                    name='emailAddress'
                    value={formik.values.emailAddress}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.emailAddress && formik.touched.emailAddress && <span>{formik.errors.emailAddress}</span>}

                <button type='submit'>Submit</button>

            </form>

        </div>
    )
}
