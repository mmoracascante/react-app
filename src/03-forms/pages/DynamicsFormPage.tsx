import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import formJson from '../data/custom-form.json'
import { MySelect, MyTextInput } from '../components'


const initialValues: { [key: string]: any } = {}
const requiredFields: { [key: string]: any } = {}

for (const input of formJson) {
    initialValues[input.name] = input.value

    if (!input.validations) continue

    let schema = Yup.string()

    for (const rule of input.validations) {
        if (rule.type === 'required') {
            schema = schema.required(rule.description)
        }

        if (rule.type === 'min') {
            schema = schema.min((rule as any).value || 2, rule.description)
        }

        if (rule.type === 'email') {
            schema = schema.email(rule.description)
        }

        // otras reglas
    }

    requiredFields[input.name] = schema
}


const validationSchema = Yup.object({ ...requiredFields })


export const DynamicsFormPage = () => {



    return (
        <div>
            <h1>DynamicsFormPage</h1>

            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={validationSchema}
            >

                {
                    (formik) => (
                        <Form noValidate>
                            {formJson.map(({ type, name, placeholder, label, options }) => {



                                return type === 'select'
                                    ?
                                    (
                                        <MySelect
                                            key={name}
                                            label={label}
                                            name={name}
                                        >
                                            <option value=''>Select and option</option>
                                            {options?.map((option) => (
                                                <option key={option.id} value={option.id}>{option.label}</option>
                                            ))}
                                        </MySelect>
                                    )
                                    :
                                    <MyTextInput
                                        key={name}
                                        type={type as any}
                                        name={name}
                                        label={label}
                                        placeholder={placeholder}
                                    />
                            })}




                            <button type='submit'>Submit</button>
                        </Form>



                    )
                }
            </Formik>
        </div>
    )
}
