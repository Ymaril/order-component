import React from 'react';
import { useForm, Controller } from "react-hook-form";
import TextField from "../TextField";
import styles from "./DeliveryForm.module.css";
import inputs_styles from "../styles/inputs.module.css";
import buttons_styles from "../styles/buttons.module.css";
import PhoneInput from 'react-phone-number-input/input'

function DeliveryForm() {
    const { register, handleSubmit, errors, control } = useForm();
    const onSubmit = data => console.log(data);

    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField label="ФИО" error={errors.full_name}>
                <input
                    name="full_name"
                    ref={register({required: 'Поле должно быть заполнено'})}
                    type="text"
                    className={`${styles['input']} ${inputs_styles['text-input']} ${errors.full_name && inputs_styles['is-invalid']}`}
                    placeholder="Только кириллица"
                />
            </TextField>
            <TextField label="Телефон" error={errors.phone}>
                <Controller
                    as={PhoneInput}
                    name="phone"
                    control={control}
                    placeholder="+7 (___) ___-__-__"
                    rules={{required: 'Поле должно быть заполнено'}}
                    className={`${styles['input']} ${inputs_styles['text-input']} ${errors.phone && inputs_styles['is-invalid']}`}
                />
            </TextField>
            <TextField label="Адрес доставки" error={errors.address}>
                <input
                    name="address"
                    ref={register({required: 'Поле должно быть заполнено'})}
                    type="text"
                    className={`${styles['input']} ${inputs_styles['text-input']} ${errors.address && inputs_styles['is-invalid']}`}
                    placeholder="Город, улица, дом"
                />
            </TextField>
            <TextField label="Комментарий" error={errors.comment}>
                <textarea
                    name="comment"
                    ref={register({required: 'Поле должно быть заполнено'})}
                    className={`${styles['input']} ${styles['text-area']} ${inputs_styles['text-input']} ${errors.comment && inputs_styles['is-invalid']}`}
                />
            </TextField>
            <input type="submit" className={`${styles['submit']} ${buttons_styles['button']}`}/>
        </form>
    );
}

export default DeliveryForm;
