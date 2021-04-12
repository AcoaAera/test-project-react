import React from 'react'

import { positions, gender } from '../dictionary'
import allUser from '../storeMobx/allUser.js'

import TextInput from '../components/TextInput.jsx'
import SelectList from '../components/SelectList.jsx'
import DateInput from '../components/DateInput.jsx'
import RadioInput from '../components/RadioInput.jsx'
import CheckInput from '../components/CheckInput.jsx'
import MultiSelectCheckbox from '../components/MultiSelectCheckbox.jsx'


class EditUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            infoUser: {
                surname: '',
                name: '',
                patronymic: '',
                position: 0,
                dateOfBirth: '',
                gender: 1,
                dateEmployment: '',
                dateOfDismissal: '',
                drivingLicence: true,
                colleagues: [],
                id: null
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

    componentDidMount() {
        if (!Boolean(this.props.location.state)) { this.props.history.push("/404"); return }
        this.setState({ infoUser: allUser.getUserById(this.props.location.state.id) })
    }

    updateUser = () => {
        document.querySelectorAll('.is-invalid').forEach(n => n.classList.remove('is-invalid'))
        if (!this.validateFields()) return

        allUser.updateUser(this.state.infoUser)
        this.props.history.push("/")
    }

    render() {
        let colleagues = allUser.getUserAsKeyLabelNotMyself(this.state.infoUser.id)
        let multiSelect = !Boolean(colleagues) ? 'tyt' : <MultiSelectCheckbox id="colleagues" nameField="Коллеги" options={colleagues} placeholder="Нет коллег" selectDeselectLabel="Выбрать/убрать всех сотрудников" selected={this.state.infoUser.colleagues} name="сolleaguess" updateData={this.updateData} />

        return (
            <div className="container mt-2" >
                <div className="h3 mb-3 text-center">Редактирование пользователя</div>
                <TextInput id="name" nameField="Имя*" value={this.state.infoUser.name} updateData={this.updateData} invalid="Введите имя" />
                <TextInput id="surname" nameField="Фамилия*" value={this.state.infoUser.surname} updateData={this.updateData} invalid="Введите фимилию" />
                <TextInput id="patronymic" nameField="Отчество" value={this.state.infoUser.patronymic} updateData={this.updateData} invalid="" />
                <SelectList id="position" nameField="Должность*" positions={positions} value={this.state.infoUser.position} updateData={this.updateData} invalid="Выберите должность" />
                <DateInput id="dateOfBirth" nameField="Дата рождения*" value={this.state.infoUser.dateOfBirth} updateData={this.updateData} invalid="Укажите дату рождения" />
                <RadioInput id="gender" nameField="Пол *" gender={gender} value={this.state.infoUser.gender} defaultValue={this.state.infoUser.gender} updateData={this.updateData} invalid="Укажите пол" />
                <DateInput id="dateEmployment" nameField="Дата приема на работу*" value={this.state.infoUser.dateEmployment} updateData={this.updateData} invalid="Укажите дату приема на работу" />
                <DateInput id="dateOfDismissal" nameField="Дата увольнения" value={this.state.infoUser.dateOfDismissal} updateData={this.updateData} invalid="Дата увольнения не может быть меньше даты приема на работу" />
                <CheckInput id="drivingLicence" nameField="Наличие водительских прав" value={this.state.infoUser.drivingLicence} defaultValue={this.state.infoUser.drivingLicence} updateData={this.updateData} invalid="" />
                { multiSelect}

                <button type="button" className="btn btn-success" onClick={this.updateUser} > Изменить</button>
                <button type="button" className="btn btn-secondary" onClick={() => this.props.history.push("/")}>Назад</button>
            </div >
        )
    }
}

export default EditUser

