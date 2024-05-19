import { ChangeEvent, FormEvent, useState } from "react"



// <T> este es tipo de dato y va ser el tipo de dato que tengo aquí initialState: T
export const useForm = <T>(initialState: T) => {


    const [formData, setFormData] = useState(initialState)



    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    const reset = () => {
        setFormData(initialState)
    }

    const isValidEmail = (email: string) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        console.log(formData)
    }
    return {
        formData,
        ...formData,
        setFormData,
        onChange,
        onSubmit,
        reset,
        isValidEmail,

    }
}
