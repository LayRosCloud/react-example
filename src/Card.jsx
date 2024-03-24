import {domain} from "./api";
import {useNavigate} from "react-router-dom";


function Card({item}) {

    const navigate = useNavigate();

    return <div className='card' onClick={() => navigate(`paramaters/${item.id}`)}>
        <img src={`${domain}/v1/people/images/${item.photo}`} style={{width: "125px"}} alt='фото человека'/>
        <h3>{item.lastName} {item.firstName} {item.patronymic}</h3>
    </div>
}

export default Card;