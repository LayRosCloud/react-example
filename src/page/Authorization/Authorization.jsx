import {useState} from "react";
import PersonRepository from "../../api/person-repository";

function Authorization() {
    const [person, setPerson] = useState({
        firstName: "",
        lastName: "",
        patronymic: "",
        image: null
    })
    async function save() {
        const repo = new PersonRepository();
        await repo.create(person);
        setPerson({
            firstName: "",
            lastName: "",
            patronymic: "",
            image: null
        })
    }
    return (
        <div className="auth_form">
            <input type="text"
                   value={person.firstName}
                   placeholder="введите имя*"
                   onChange={(e) => setPerson({...person, firstName: e.target.value})}
            />
            <input type="text"
                   value={person.lastName}
                   placeholder="введите фамилию*"
                   onChange={(e) => setPerson({...person, lastName: e.target.value})}
            />
            <input type="text"
                   value={person.patronymic}
                   placeholder="введите отчество*"
                   onChange={(e) => setPerson({...person, patronymic: e.target.value})}
            />
            <input type="file"
                   accept="image/jpeg"
                   placeholder="введите отчество*"
                   onChange={(e) => setPerson({...person, image: e.target.files.item(0)})}
            />
            <button onClick={async ()=> await save()}>Сохранить</button>
        </div>
    );
}

export default Authorization;
