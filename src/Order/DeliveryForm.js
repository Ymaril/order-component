import React from 'react';
import { useForm, Controller } from "react-hook-form";
import TextField from "../TextField";
import styles from "./DeliveryForm.module.css";
import layout_styles from "../styles/layout.module.css";
import inputs_styles from "../styles/inputs.module.css";
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input/input'

function DeliveryForm() {
    const { register, handleSubmit, errors, control } = useForm();
    const onSubmit = data => console.log(data);

    const classNamesFor = field_name => [
        styles['input'],
        inputs_styles['text-input'],
        errors[field_name] && inputs_styles['is-invalid']
    ].join(' ');

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={layout_styles['row']}>
                <div className={layout_styles['column']}>
                    <TextField label="ФИО" error={errors.full_name}>
                        <input
                            name="full_name"
                            ref={register({
                                required: true,
                                pattern: /^[а-яА-ЯЁё -]+$/
                            })}
                            type="text"
                            className={classNamesFor('full_name')}
                            placeholder="Только кириллица"
                        />
                    </TextField>
                </div>
                <div className={layout_styles['column']}>
                    <TextField label="Телефон" error={errors.phone}>
                        <Controller
                            as={PhoneInput}
                            name="phone"
                            control={control}
                            placeholder="+7 (___) ___-__-__"
                            rules={{
                                required: true,
                                validate: {pattern: isValidPhoneNumber}
                            }}
                            className={classNamesFor('phone')}
                        />
                    </TextField>
                </div>
            </div>
            <TextField label="Адрес доставки" error={errors.address}>
                <input
                    name="address"
                    ref={register({required: true})}
                    type="text"
                    className={classNamesFor('address')}
                    placeholder="Город, улица, дом"
                />
            </TextField>
            <TextField label="Комментарий" error={errors.comment}>
                <textarea
                    name="comment"
                    ref={register({required: true})}
                    className={`${classNamesFor('comment')} ${styles['text-area']}`}
                />
            </TextField>
            <input type="submit" className={`${layout_styles['submit']} ${inputs_styles['button']}`} value="Оформить заказ"/>
        </form>
    );
}

export default DeliveryForm;
