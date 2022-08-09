import React, {useEffect, useState} from 'react';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './Request.module.sass'
import {Api} from "./Api";



export const Request = () => {

    const [checked, setChecked] = useState<boolean>(false);
    const [isRequest, setIsRequest] = useState<boolean>(false);
    const [message, setMessage] = useState<any>('');

    const onSendRequestHandle = () => {
        setIsRequest(true);
    }

    useEffect(() =>{
        if (isRequest) {
            Api.request(checked)
                .then( (res) => setMessage(res.errorText)
                )
                .catch((res) => setMessage(res.message))
                .finally(() => setIsRequest(false))
        }

    }, [isRequest])


    return (
        <div className={s.wrapper}>
            <SuperCheckbox
                checked={checked}
                onChangeChecked={setChecked}
            >{message}</SuperCheckbox>
            <SuperButton onClick={onSendRequestHandle}>send request</SuperButton>
        </div>
    );
};
