import React from 'react'

import { positions, gender } from '../dictionary'
import allUser from '../storeMobx/allUser.js'

import TextInput from '../components/TextInput.jsx'
import SelectList from '../components/SelectList.jsx'
import DateInput from '../components/DateInput.jsx'
import RadioInput from '../components/RadioInput.jsx'
import CheckInput from '../components/CheckInput.jsx'
import MultiSelectCheckbox from '../components/MultiSelectCheckbox.jsx'

class AddUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            infoUser: {
                surname: 'Кораблев',
                name: 'Алексей',
                patronymic: 'Васильевич',
                position: 3,
                dateOfBirth: '1997-02-22',
                gender: 1,
                dateEmployment: '2021-04-15',
                dateOfDismissal: '',
                drivingLicence: true,
                colleagues: []

            },
            infoUser2: {
                surname: '',
                name: '',
                patronymic: '',
                position: 0,
                dateOfBirth: '',
                gender: 1,
                dateEmployment: '',
                dateOfDismissal: '',
                drivingLicence: true,
                colleagues: []
            }
        }
    }

    createNewId(array) {
        let isGoodId = false
        let newId
        while (!isGoodId) {
            newId = Math.round(Math.random() * 1000000)
            let count = 0
            for (let i = 0; i < array.length; i++) {
                if (array[i].id === newId) count++
            }
            isGoodId = count === 0 ? true : false
        }
        return newId
    };

    insertUser = () => {
        document.querySelectorAll('.is-invalid').forEach(n => n.classList.remove('is-invalid'))
        if (!this.validateFields()) return

        allUser.insertUser(this.state.infoUser)
        this.props.history.push("/")
    }

    // Валидация полей
    validateFields() {
        let isGood = true
        isGood &= this.validateName("name")
        isGood &= this.validateSurname("surname")
        isGood &= this.validatePosition("position")
        isGood &= this.validateDateOfBirth("dateOfBirth")
        isGood &= this.validateGender("gender")
        isGood &= this.validateDateEmployment("dateEmployment")
        isGood &= this.validateDateOfDismissal("dateOfDismissal")
        return isGood
    }
    validateName(id) {
        if (!Boolean(this.state.infoUser.name)) {
            this.setIsInvalid(id)
            return false
        }
        return true
    }
    validateSurname(id) {
        if (!Boolean(this.state.infoUser.surname)) {
            this.setIsInvalid(id)
            return false
        }
        return true
    }
    validatePosition(id) {
        if (!Boolean(this.state.infoUser.position)) {
            this.setIsInvalid(id)
            return false
        }
        return true
    }
    validateDateOfBirth(id) {
        if (!Boolean(this.state.infoUser.dateOfBirth)) {
            this.setIsInvalid(id)
            return false
        }
        return true
    }
    validateGender(id) {
        if (!Boolean(this.state.infoUser.gender)) {
            this.setIsInvalid(id)
            return false
        }
        return true
    }
    validateDateEmployment(id) {
        if (!Boolean(this.state.infoUser.dateEmployment)) {
            this.setIsInvalid(id)
            return false
        }
        return true
    }
    validateDateOfDismissal(id) {
        if (!Boolean(this.state.infoUser.dateOfDismissal)) {
            return true
        }
        else if (this.state.infoUser.dateOfDismissal < this.state.infoUser.dateEmployment) {
            this.setIsInvalid(id)
            return false
        }
        return true
    }
    setIsInvalid(id) {
        document.getElementById(id).classList.add('is-invalid')
    }

    // Обновление state
    updateData = (name, value) => {
        this.setState(prevState => ({
            infoUser: {
                ...prevState.infoUser,
                [name]: value
            }
        }))
    }

    // Генерация уникального ID для пользователя
    setInfoUserId() {
        this.setState(prevState => ({
            infoUser: {
                ...prevState.infoUser,
                id: this.createNewId(allUser.users)
            }
        }))
    }

    componentDidMount() {
        this.setInfoUserId()
    }

    render() {
        const colleagues = allUser.getUserAsKeyLabel()

        return (
            <div className="container mt-2">
                <div className="h3 mb-3 text-center">Добавление нового пользователя</div>
                <TextInput id="name" nameField="Имя*" value={this.state.infoUser.name} updateData={this.updateData} invalid="Введите имя" />
                <TextInput id="surname" nameField="Фамилия*" value={this.state.infoUser.surname} updateData={this.updateData} invalid="Введите фимилию" />
                <TextInput id="patronymic" nameField="Отчество" value={this.state.infoUser.patronymic} updateData={this.updateData} />
                <SelectList id="position" nameField="Должность*" positions={positions} value={this.state.infoUser.position} updateData={this.updateData} invalid="Выберите должность" />
                <DateInput id="dateOfBirth" nameField="Дата рождения*" value={this.state.infoUser.dateOfBirth} updateData={this.updateData} invalid="Укажите дату рождения" />
                <RadioInput id="gender" nameField="Пол *" gender={gender} value={this.state.infoUser.gender} defaultValue={this.state.infoUser.gender} updateData={this.updateData} invalid="Укажите пол" />
                <DateInput id="dateEmployment" nameField="Дата приема на работу*" value={this.state.infoUser.dateEmployment} updateData={this.updateData} invalid="Укажите дату приема на работу" />
                <DateInput id="dateOfDismissal" nameField="Дата увольнения" value={this.state.infoUser.dateOfDismissal} updateData={this.updateData} invalid="Дата увольнения не может быть меньше даты приема на работу" />
                <CheckInput id="drivingLicence" nameField="Наличие водительских прав" value={this.state.infoUser.drivingLicence} defaultValue={this.state.infoUser.drivingLicence} updateData={this.updateData} />
                <MultiSelectCheckbox id="colleagues" nameField="Коллеги" options={colleagues} placeholder="Нет коллег" selectDeselectLabel="Выбрать/убрать всех сотрудников" selected={[]} name="сolleagues" updateData={this.updateData} />

                <button type="button" className="btn btn-success" onClick={this.insertUser}>Добавить</button>
                <button type="button" className="btn btn-secondary" onClick={() => this.props.history.push("/")}>Назад</button>
            </div>
        )
    }
}

export default AddUser
