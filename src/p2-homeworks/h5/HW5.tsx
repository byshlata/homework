import React from 'react'
import {Header} from './Conponents/Header/Header'
import {RoutesComponent} from './Routes'
import {HashRouter} from "react-router-dom";
import s from "./HW5.module.sass"

function HW5() {
    return (
        <div className={s.hw5}>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                <Header/>
                <RoutesComponent/>
            </HashRouter>
        </div>
    )
}

export default HW5
