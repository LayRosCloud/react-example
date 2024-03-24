import api, {domain} from './index'

class PersonRepository {
    async getAll() {
        return (await api.get(domain + "/v1/people")).data
    }

    async getById(id) {
        return (await api.get(domain + `/v1/people/${id}`)).data
    }

    async create(person) {
        if(person == null) {
            throw new Error()
        }
        const data = new FormData();

        data.append("firstName", person.firstName)
        data.append("lastName", person.lastName)
        data.append("patronymic", person.lastName)
        data.append("photo", person.image)

        return (await api.post(domain + "/v1/people", data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })).data
    }
}

export default PersonRepository