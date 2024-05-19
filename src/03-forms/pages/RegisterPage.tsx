import { useForm } from '../hooks/useForm'
import '../styles/styles.css'


interface Register {
    name: string;
    email: string;
    password1: string;
    password2: string;
}

export const RegisterPage = () => {

    const {
        onChange,
        onSubmit,
        reset,
        isValidEmail,
        email,
        name,
        password1,
        password2
    } = useForm<Register>({
        name: '',
        email: '',
        password1: '',
        password2: '',
    })



    return (
        <div>
            <h1>Register page</h1>
            <form noValidate onSubmit={onSubmit}>

                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    name='name'
                    onChange={onChange}
                    className={`${name.trim().length <= 0 && 'has-error'}`}
                />
                {name.trim().length <= 0 && (<span>Este campo es necesario</span>)}

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    name='email'
                    onChange={onChange}
                    className={`${!isValidEmail(email) && 'has-error'}`}
                />
                {!isValidEmail(email) && (<span>Email no válido</span>)}

                <input
                    type="password"
                    placeholder="Password"
                    value={password1}
                    name='password1'
                    onChange={onChange}
                    className={`${password1.trim().length <= 0 && 'has-error'} ${password1.trim().length < 6 && password1.trim().length > 0 && 'has-error'}`}
                />
                {password1.trim().length <= 0 && (<span>Este campo es necesario</span>)}
                {password1.trim().length < 6 && password1.trim().length > 0 && (<span>La contraseña debe tener 6 caracteres</span>)}
                <input
                    type="password"
                    placeholder="Repeat password"
                    value={password2}
                    name='password2'
                    onChange={onChange}
                />
                {password2.trim().length <= 0 && (<span>Este campo es necesario</span>)}
                {password2.trim().length > 0 && password1 !== password2 && (<span>Las contraseñas deben coincidir</span>)}

                <button type="submit">Create</button>
                <button onClick={reset}>Reset</button>
            </form>
        </div>
    )
}
