import React from 'react';
import { useForm } from "react-hook-form";
import TextField from "./TextField";
import TextInput from "./TextFields/TextInput";
import TextAreaInput from "./TextFields/TextAreaInput";
import styles from "./DeliveryForm.module.css";

function DeliveryForm() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField label="ФИО" error={errors.full_name}>
                <TextInput
                    name="full_name"
                    register={register({required: 'Поле должно быть заполнено'})}
                    className={styles['input']}
                    error={errors.full_name}
                    placeholder="Только кириллица"
                />
            </TextField>
            <TextField label="Телефон" error={errors.phone}>
                <TextInput
                    name="phone"
                    register={register({required: 'Поле должно быть заполнено'})}
                    className={styles['input']}
                    error={errors.phone}
                    placeholder="+7 (___) ___-__-__"
                />
            </TextField>
            <TextField label="Адрес доставки" error={errors.address}>
                <TextInput
                    name="address"
                    register={register({required: 'Поле должно быть заполнено'})}
                    className={styles['input']}
                    error={errors.address}
                    placeholder="Город, улица, дом"
                />
            </TextField>
            <TextField label="Комментарий" error={errors.comment}>
                <TextAreaInput
                    name="comment"
                    register={register({required: 'Поле должно быть заполнено'})}
                    className={`${styles['input']} ${styles['text-area']}`}
                    error={errors.comment}
                />
            </TextField>
            <input type="submit" />
        </form>
    );
}

export default DeliveryForm;
