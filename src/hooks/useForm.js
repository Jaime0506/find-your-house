import { useState } from "react"

export const useForm = () => {

    const [formValue, setFormValue] = useState({})

    const onChangeForm = ({ target }) => {
        setFormValue({
            ...formValue,
            [target.name]: target.value
        })
    }

    return {
        formValue,
        onChangeForm
    }
}