import { useState } from "react";

function useForm<FieldsType>(fields: FieldsType): [FieldsType, (name: string, value: string) => void] {
    const [values, setValues] = useState<FieldsType>(fields);

    const change = (name: string, value: string): void => {
        setValues((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return [values, change];
};

export default useForm;
