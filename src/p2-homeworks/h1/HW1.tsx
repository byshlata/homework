import React from 'react'
import {Message} from "./Message"
import s from "./Message.module.sass"


const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Rudnitski',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae earum error esse incidunt iure iusto maxime natus nobis officia, officiis optio quaerat quia quibusdam similique sint, voluptate. A, exercitationem.',
    time: '21:00',
}


function HW1() {
    return (
        <div>

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
