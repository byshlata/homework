import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.sass'

export const HW11 = () => {
    const [value1, setValue1] = useState<number>(0)
    const [value2, setValue2] = useState<number>(100)

    const onChangeValue = (value: number[]) => {
        setValue1(value[0]);
        setValue2(value[1])
        console.log(value[0])
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={setValue1}
                    value={value1}
                />
            </div>

            <div className={s.wrapper}>
                <span>{value1}</span>
                <SuperDoubleRange
                    onChangeRange={onChangeValue}
                    valueRange={[value1, value2]}
                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

