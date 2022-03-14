import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import {CircularProgress} from '@material-ui/core';

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading)
    const dispatch = useDispatch();

    const setLoading = () => {

        setTimeout(() => {
            dispatch(loadingAC());
        }, 2000);
        dispatch(loadingAC());
    };

    return (
        <div>
            <hr/>


            {/*should work (должно работать)*/}
            {loading
                ? (
                    <CircularProgress size={20} color='secondary'/>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
