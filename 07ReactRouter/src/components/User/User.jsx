import { useParams } from "react-router-dom"
export default function User()
{
    const {userid} = useParams()
    return (
    <div className="text-center bg-gray-600 text-3xl text-white">
        User: {userid}
    </div>
    )
}