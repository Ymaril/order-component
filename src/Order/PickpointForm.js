import React from 'react';
import { useForm } from "react-hook-form";
import styles from "./DeliveryForm.module.css";
import inputs_styles from "../styles/inputs.module.css";
import layout_styles from "../styles/layout.module.css";

const addresses = [
    {
        name: 'Пункт выдачи заказов Песчаная ул., д. 13',
        latitude: 55.982626,
        longitude: 37.140296
    },
    {
        name: 'Пункт выдачи заказов Подсосенский пер., д. 11',
        latitude: 55.977256,
        longitude: 37.152784
    },
    {
        name: 'Пункт выдачи заказов Подсосенский пер., д. 11',
        latitude: 55.977256,
        longitude: 37.152784
    }
];

function PickpointForm() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={layout_styles['row']}>
                {
                    addresses.map(({name}, id) => <div key={id} className={[layout_styles['column']]}>
                        <label>
                            <input
                                name="address"
                                type="radio"
                                ref={register}
                                className={inputs_styles['radio-button']}
                                value={id}
                            />
                            <span>{name}</span>
                        </label>
                    </div>)
                }
            </div>
            <input type="submit" className={`${styles['submit']} ${inputs_styles['button']}`} value="Оформить заказ"/>
        </form>
    );
}

export default PickpointForm;
