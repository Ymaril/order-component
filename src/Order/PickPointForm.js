import React from 'react';
import { useForm } from "react-hook-form";
import styles from "./PickPointForm.module.css";
import inputs_styles from "../styles/inputs.module.css";
import layout_styles from "../styles/layout.module.css";
import Map from "./Map/Map";

const addresses = [
    {
        name: 'Пункт выдачи заказов Песчаная ул., д. 13',
        lat: 55.982626,
        lng: 37.140296
    },
    {
        name: 'Пункт выдачи заказов Подсосенский пер., д. 11',
        lat: 55.977256,
        lng: 37.152784
    }
];

function PickPointForm() {
    const { register, handleSubmit, getValues, setValue, watch } = useForm();
    const onSubmit = data => console.log(data);

    const address = watch("address");

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={layout_styles['row']}>
                {
                    addresses.map(({name}, id) => <div key={id} className={[layout_styles['column']]}>
                        <label>
                            <input
                                name="address"
                                type="radio"
                                ref={register({required: true})}
                                className={inputs_styles['radio-button']}
                                value={id}
                            />
                            <span>{name}</span>
                        </label>
                    </div>)
                }
            </div>
            <Map
                markers={addresses.map((e, id) => ({
                    position: {
                        lat: e.lat,
                        lng: e.lng
                    },
                    onClick: () => setValue("address", id.toString()),
                    is_selected: id.toString() === getValues("address")
                }))}
                className={styles['map']}
            />
            <input
                type="submit"
                disabled={!address}
                className={`${layout_styles['submit']} ${inputs_styles['button']}`}
                value="Оформить заказ"
            />
        </form>
    );
}

export default PickPointForm;
