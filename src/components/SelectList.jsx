import React from 'react'

class SelectList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    listOisitions2 = this.props.positions.map((el) => <option key={el.id} value={el.id}>{el.name}</option>)

    myInput = (event) => {
        this.props.updateData(event.target.id, Number(event.target.value))
    }

    render() {
        return (
            <div className="form-group row">
                <label className="col-sm-2 col-form-label"><b>{this.props.nameField}</b></label>
                <div className="col-sm-10">
                    <select id={this.props.id} className="custom-select" value={this.props.value} onChange={this.myInput} >
                        <option value="0" disabled >Выберите один из вариантов</option>
                        {this.listOisitions2}
                    </select>
                    <div className="invalid-feedback">
                        {this.props.invalid}
                    </div>
                </div>

            </div >
        )
    }
}

export default SelectList