import React from 'react';
import s from "./Menu.module.sass"
import {MenuItem} from "../MenuItem/MenuItem";

export type MenuPropsType = {
    setMenuOnOff: (value: boolean) => void
    menuOnOff: boolean
}

const Menu: React.FC<MenuPropsType> = (
    {
        setMenuOnOff,
        menuOnOff
    }
) => {

    return (
        <>
            <div onClick={() => setMenuOnOff(!menuOnOff)} className={s.menu}>
                <div className={!menuOnOff ? `${s.hamburger}` : `${s.hamburger} ${s.hamburgerActive}`}></div>
            </div>
            <MenuItem menuOnOff={menuOnOff}
                      page={'pre-junior'}
            />
            <MenuItem menuOnOff={menuOnOff}
                      page={'junior'}
            />
            <MenuItem menuOnOff={menuOnOff}
                      page={'junior-plus'}
            />
        </>
    );
};

export default Menu;