import React, {useState} from 'react'
import s from "./Header.module.sass"
import Menu from "../Menu/Menu";


export const Header = () => {
    let [menuOnOff, setMenuOnOff] = useState<boolean>(false)


    return (
        <div className={s.header}>
            <Menu setMenuOnOff={setMenuOnOff}
                  menuOnOff={menuOnOff}
            />
        </div>
    )
}

