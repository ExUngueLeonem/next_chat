'use client';

import {FieldErrors, FieldValues, UseFormRegister} from "react-hook-form";
import {FC} from "react";

interface InputProps {
    label: string;
    id: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    disabled?: boolean;
}

const Input: FC<InputProps> = (
    {
        label,
        id,
        type,
        required,
        register,
        errors,
        disabled,
    }
) => {
    return (
        <div>
            <label
                className='
                    block
                    text-sm
                    font-medium
                    leading-6
                    text-gray-900
                '
                htmlFor={id}
            >
                {label}
            </label>
        </div>
    );
};

export default Input;