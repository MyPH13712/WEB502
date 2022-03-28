import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { UserType } from "../types/user";

type LoginProps = {
    onAdd: (product: UserType) => void
}
type FormValues = {
    name: string,
    email: string,
    password: string,
    role: number
}

const Login = (props: LoginProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
        props.onAdd(data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Name"{...register('name', { required: true})} />
                {errors.name && errors.name.type === "required" && <span>Required</span>}
                <input type="email" placeholder="Email" {...register('email')} />
                <input type="text" placeholder="Password" {...register('password')} />
                <input type="number" placeholder="role" {...register('role')} />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login