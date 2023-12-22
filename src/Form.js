import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


export const Form = () => {
    const schema = yup.object().shape({
        fullName : yup.string().required('your full name is required'),
        email : yup.string().email().required(),
        age : yup.number().positive().integer().min(18).required(),
        password : yup.string().min(4).max(20).required(),
        confirmPassword : yup.string().oneOf([yup.ref('password'),null],"passwords dont match").required()
    });

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver : yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="full name" {...register("fullName")} />
            <span>{errors.fullName?.message}</span>

            <input type="email" placeholder="Your email" {...register("email")} />
            <span>{errors.email?.message}</span>

            <input type="number" placeholder="Your age" {...register("age")} />
            <span>{errors.age?.message}</span>

            <input type="password" placeholder="Your password" {...register("password")} />
            <span>{errors.password?.message}</span>

            <input type="password" placeholder="Confirm password" {...register("confirmPassword")} />
            <span>{errors.confirmPassword?.message}</span>

            <button type="submit">Submit</button>


        </form>
    )
}