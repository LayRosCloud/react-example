import {useEffect, useState} from "react";
import Card from "../../Card";
import PersonRepository from "../../api/person-repository";

function Home() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const repo = new PersonRepository();
        repo.getAll().then(result => setPeople(result))
    }, [])
    return (
        <div>
            { people.length
                ? people.map(person => <Card key={person.id} item={person}/>)
                : ""

            }
        </div>
    );
}

export default Home;
