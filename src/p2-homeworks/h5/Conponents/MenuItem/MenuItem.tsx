import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./MenuItem.module.sass"


export type MenuItemPropsType = {
    menuOnOff: boolean
    page: string
}


export const MenuItem: React.FC<MenuItemPropsType> = ({
                                                          menuOnOff,
                                                          page
                                                      }) => {
    return (
        <>

            <NavLink to={page} className={!menuOnOff ? `${s.menuItem}` : `${s.menuItem} ${s.menuItemActive}`}>
                {page.toUpperCase()}
            </NavLink>
        </>
    );
};
