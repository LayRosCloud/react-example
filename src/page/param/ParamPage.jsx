import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import QRCode from "react-qr-code";
import PersonRepository from "../../api/person-repository";
import {domain} from "../../api";

function ParamPage() {
    const {id} = useParams()
    const [person, setPerson] = useState({
        id: 0,
        firstName: "",
        lastName: "",
        patronymic: "",
        photo: ""
    });
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const repo = new PersonRepository();
        setLoading(true)
        repo.getById(id).then(result => setPerson(result))
        setLoading(false)
    }, [])

    if(loading) {
        return <div>
            Страница все ещё грузится
        </div>
    }

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <QRCode value={person.id.toString()}/>
            <img src={`${domain}/v1/people/images/${person.photo}`} style={{width: "125px"}} alt='фото человека'/>
            <h3>{person.lastName} {person.firstName} {person.patronymic}</h3>
        </div>
    );
}

export default ParamPage;
