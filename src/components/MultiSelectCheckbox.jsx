import React from 'react'
import DropdownMultiselect from 'react-multiselect-dropdown-bootstrap'

class MultiSelectCheckbox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    myInput = (event) => {
        this.props.updateData(this.props.id, event)
    }

    render() {
        return (
            <div className="form-group row">
                <label className="col-sm-2 col-form-label"><b>{this.props.nameField}</b></label>
                <div className="col-sm-10">

                    <DropdownMultiselect
                        placeholder={this.props.placeholder}
                        selectDeselectLabel={this.props.selectDeselectLabel}
                        options={this.props.options}
                        selected={this.props.selected}
                        name={this.props.name}
                        buttonClass="custom-select"
                        handleOnChange={this.myInput} />
                </div>
            </div>
        )
    }
}

export default MultiSelectCheckbox
