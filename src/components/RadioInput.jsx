import React from 'react'

class RadioInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    myInput = (event) => {
        this.props.updateData(event.target.name, event.target.value)
    }

    render() {
        const listOisitions = this.props.gender.map((el) => {
            return (
                <div className="form-check" key={el.name}>
                    <input type="radio" className="form-check-input" id={el.nameEng} name="gender" checked={el.id === Number(this.props.defaultValue)} value={el.id} onChange={this.myInput} />
                    <label className="form-check-label" name="gender" htmlFor={el.nameEng} >{el.name}</label>
                </div >
            )
        })

        return (
            <div className="form-group row">
                <label className="col-sm-2 col-form-label"><b>{this.props.nameField}</b></label>
                <div className="col-sm-10" >
                    <div id={this.props.id}>
                        {listOisitions}
                    </div>
                    <div className="invalid-feedback">
                        {this.props.invalid}
                    </div>
                </div>
            </div>
        )
    }
}

export default RadioInput