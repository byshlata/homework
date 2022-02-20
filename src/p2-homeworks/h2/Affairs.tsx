import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.sass'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        return props.setFilter('all')
    }
    const setHigh = () => {
        return props.setFilter('high')
    }
    const setMiddle = () => {
        return props.setFilter('middle')
    }
    const setLow = () => {
        return props.setFilter('low')
    }

    return (
        <div className={s.someClass}>
            <div className={s.affairsBox}>
                {mappedAffairs}
            </div>
            <div className={s.buttonBox}>
                <button className={s.button} onClick={setAll}>All</button>
                <button className={s.button} onClick={setHigh}>High</button>
                <button className={s.button} onClick={setMiddle}>Middle</button>
                <button className={s.button} onClick={setLow}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
