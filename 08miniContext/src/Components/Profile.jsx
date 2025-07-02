import React,{useContext} from 'react'
import UserContext from '../Context/UserContext'
export default function Profile() {
    const {user} = useContext(UserContext)
    console.log(user)
    if(!user || user.username=='') return <div>Please login</div>

    return <div>Welcome {user.username}</div>
}
