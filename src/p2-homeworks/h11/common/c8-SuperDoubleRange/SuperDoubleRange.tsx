import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState} from 'react'
import s from "../c7-SuperRange/SuperDoubleRange.module.sass";
import {Slider, withStyles} from "@material-ui/core";


type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value: number[]) => void
    valueRange: [number, number]
   // min?: number
   // min?: number
    max?: number
    step?: number
    disable?: boolean
}

const AirbnbSlider = withStyles({
    root: {
        color: '#3a8589',
        height: 3,
        padding: '13px 0',
        width: '300px'
    },
    thumb: {
        height: 27,
        width: 27,
        backgroundColor: '#fff',
        border: '1px solid currentColor',
        marginTop: -12,
        marginLeft: -13,
        boxShadow: '#ebebeb 0 2px 2px',
        '&:focus, &:hover, &$active': {
            boxShadow: '#ccc 0 2px 3px 1px',
        },
        '& .bar': {
            // display: inline-block !important;
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
        },
    },
    active: {},
    track: {
        height: 3,
    },
    rail: {
        color: '#d8d8d8',
        opacity: 1,
        height: 3,
    },
})(Slider);

function AirbnbThumbComponent(props: any) {



    return (
        <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
    );
}


const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange,
        className,
        step,
        disable, min, valueRange, max,
        ...restProps// все остальные пропсы попадут в объект restProps.
    }
) => {







    const onChangeCallback = (event: any, newValue: number | number[]) => {
        onChange && onChange(event)
        onChangeRange && onChangeRange (newValue as number[])
    }

    const finalRangeClassNameFront = `${s.rangeFront} ${className ? className : ''}`
    const finalRangeClassName = `${s.range} ${className ? className : ''}`


    return (
        <div className={s.rangeWrapper}>
            <AirbnbSlider
                onChange={onChangeCallback}
                ThumbComponent={AirbnbThumbComponent}
                getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                defaultValue={valueRange}
            />

        </div>
    )
}

export default SuperDoubleRange
