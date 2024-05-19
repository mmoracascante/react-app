import { Form, Formik } from 'formik';
import * as Yup from 'yup'
import '../styles/styles.css'
import { MyTextInput } from '../components';


interface Register {
    name: string;
    email: string;
    password1: string;
    password2: string;
}

export const RegisterFormikPage = () => {


    // Nombre min(2) max(15) required()
    // email() required()
    // password min(6) 
    // repeat password same as password required()

    const initialValues = {
        name: '',
        email: '',
        password1: '',
        password2: '',
    }

    const validationSchemaCreate = Yup.object({
        name: Yup.string()
            .min(2, 'Debe tener un min de 2 caracteres')
            .max(15, 'Debe tener un max de 15 caracteres')
            .required('Requerido'),
        email: Yup.string().email('Debe ser un formato válido').required('Requerido'),
        password1: Yup.string().min(6, 'Debe tener un min de 6 caracteres').required('Requerido'),
        password2: Yup.string().oneOf([Yup.ref('password1'), 'Las contraseñas no coinciden'], 'Contraseñas deben conincidir').required('Requerido')
    })




    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={validationSchemaCreate}
            >
                {
                    (formik) => (

                        <Form>

                            <MyTextInput
                                name='name'
                                label='Nombre'
                                type='text'
                            />

                            <MyTextInput
                                name='email'
                                label='Email'
                                type='email'
                            />

                            <MyTextInput
                                name='password1'
                                label='Password'
                                type='password'
                            />

                            <MyTextInput
                                name='password2'
                                label='Repetir password'
                                type='password'
                            />


                            <button type="submit">Create</button>
                            <button type='button' onClick={() => formik.handleReset()}>Reset</button>

                        </Form>
                    )
                }

            </Formik>



        </div>
    )
}
