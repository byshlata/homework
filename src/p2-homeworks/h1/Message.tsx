import React from 'react'
import s from "./Message.module.sass"


type propsType = {
    avatar: string;
    name: string;
    message: string;
    time: string;
}

export const Message = (props: propsType) => {
    return (
        <div className={s.message}>
            <a className={s.link} href="#"> <img className={s.avatar} src={props.avatar}/> </a>
            <div className={s.wrapper}>
                <div className={s.name}>{props.name}</div>
                <div className={s.text}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}


