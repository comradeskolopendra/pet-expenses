import { useCallback, useState } from "react";

function useForm<FieldsType>(fields: FieldsType): [FieldsType, (name: string, value: string) => void, () => void] {
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
};

export default useForm;
