import { useCallback, useState } from "react";

type Form<T> = [T, (name: string, value: string) => void, () => void];

const useForm = <FieldsType,>(fields: FieldsType): Form<FieldsType> => {
    const [values, setValues] = useState<FieldsType>(fields);

    const change = useCallback((name: string, value: string): void => {
        setValues((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }, []);

    const reset = useCallback((): void => {
        setValues(fields);
    }, [])

    return [values, change, reset];
}

export default useForm;
