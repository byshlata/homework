import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {themeAC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme)

    const dispatch = useDispatch()

    const onChangeCallback = (value: string) => {
        dispatch(themeAC(value))
    }

    return (
        < >
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>


            <SuperSelect options={themes}
                         onChangeOption={onChangeCallback}
                         value = {theme}
            />

            <hr/>
        </>
    );
}

export default HW12;
