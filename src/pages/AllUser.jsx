import { observer } from 'mobx-react'
import React from 'react'
import { getPosinionById, getGenderById } from '../dictionary'
import allUser from '../storeMobx/allUser.js'

class AllUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    viewColleagues = (arr) => {
        return allUser.getUsersByIds(arr).map((el) => <div key={el.key}>{el.label}</div>)
    }

    render() {
        const listOisitions = allUser.users.map((el) =>
            <tr key={el.id}>
                <td>{el.surname}</td>
                <td>{el.name}</td>
                <td>{el.patronymic}</td>
                <td>{getPosinionById(el.position)}</td>
                <td>{el.dateOfBirth}</td>
                <td>{getGenderById(el.gender)}</td>
                <td>{el.dateEmployment}</td>
                <td>{el.dateOfDismissal}</td>
                <td>{this.viewColleagues(el.colleagues)}</td>
                <td>{(el.drivingLicence) ? "Есть" : "Нет"}</td>
                <td>
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-success" onClick={() => this.props.history.push("/editUser", { id: (el.id) })}>&#9998;</button>
                        <button type="button" className="btn btn-danger" onClick={() => allUser.delUser(el.id)} >&#128465;</button>
                    </div>
                </td>
            </tr>
        )

        return (
            <div className="mx-5 overflow-auto">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Фамилия</th>
                            <th scope="col">Отчество</th>
                            <th scope="col">Должность</th>
                            <th scope="col">Дата рождения</th>
                            <th scope="col">Пол</th>
                            <th scope="col">Дата приема на работу</th>
                            <th scope="col">Дата увольнения</th>
                            <th scope="col">Коллеги</th>
                            <th scope="col">Наличие водительских прав</th>
                            <th scope="col">Кнопки</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listOisitions}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default observer(AllUser)
