import React from 'react'
import {AffairType} from "./HW2";
import s from './Affair.module.sass'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }
    return (
        <div className={s.affair}>
            <div className={s.inputBlock}>{props.affair.name}</div>
            <button className={s.affairButton} onClick={deleteCallback}></button>
        </div>
    )
}

export default Affair
