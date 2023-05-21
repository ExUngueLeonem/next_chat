'use client';

import {useCallback, useState} from "react";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import Input from "@/app/components/inputs/Input";

const LOGIN = 'LOGIN'
const REGISTER = 'REGISTER'
type VariantType = typeof LOGIN | typeof REGISTER;
const AuthForm = () => {
    const [variant, setVariant] = useState<VariantType>("LOGIN");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const toggleVariant = useCallback(() => {
        if (variant === LOGIN) {
            setVariant(REGISTER);
        } else {
            setVariant(LOGIN);
        }
    }, [variant])

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        if (variant === REGISTER) {
            // Axios Register
        }

        if (variant === LOGIN) {
            //Next Auth SignIn
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true);
        //Next Auth social SignIn
    }

    return (
        <div
            className='
                mt-8
                sm:mx-auto
                sm:w-full
                sm:max-w-md
            '
        >
            <div
                className='
                    bg-white
                    px-4
                    py-6
                    shadow
                    sm:rounded
                    sm:px-10
                '
            >
                <form
                    className='space-y-6'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Input label={"Email"}/>

                </form>
            </div>
        </div>
    );
};

export default AuthForm;