import React from 'react';
import s from "./Error404.module.sass"


export const Error404 = () => {
    return (
        <div className={s.errorPage}>
            <div>404</div>
            <div>Ежик нашел лошадку в тумане, но мы не смогли найти страницу.</div>
        </div>
    )
}

