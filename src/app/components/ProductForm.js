import React, {Component} from 'react';
import * as bs from 'react-bootstrap';

function ValidationError( props ) {
  //console.log(props);
  return !props.input.isValid
    ?
    <div className="inputName-error">
      {props.input.errorMessage}
    </div>
    : null;
}

class ProductForm extends Component {

  constructor(props) {
    super(props);

    this.state = this.getDefaultState();

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);

    // refs
    this.refForm = '';
    //this.inputName = '';
  }

  getDefaultState(){
    return {
      inputName: {
        value: "",
        isValid: false,
        required: true,
        errorMessage: "4-8 characters, only numbers and letters allowed."
      },
      checkboxColor: {
        value: "",
        isValid: false,
        errorMessage: "Choose color, pls."
      },
      showErrors: false
    };
  }

  handleNameChange(event) {
    const
      newInputName = this.state.inputName,
      nameRegExp = new RegExp(/^[a-z0-9]{0,8}/i),
      currentVal = event.target.value,
      checkedVal = nameRegExp.exec(currentVal) ? nameRegExp.exec(currentVal)[0] : '';

    if ( checkedVal.length >= 4 ){
      newInputName.value = checkedVal;
      newInputName.isValid = true;
    }else {
      newInputName.value = '';
      newInputName.isValid = false;
    }

    event.target.value = checkedVal;
    this.setState({inputName: newInputName});
  }

  handleColorChange(value) {
    if( !value ) return;
    const checkbox = this.state.checkboxColor;
    checkbox.value = value;
    if( !checkbox.isValid ) checkbox.isValid = true;
    this.setState({
      checkboxColor: checkbox
    });
  }

  handleAdd(event) {
    event.preventDefault();
    const state = this.state;

    state.inputName = simpleValidate( state.inputName );
    state.checkboxColor = simpleValidate( state.checkboxColor );

    function simpleValidate( input ) {
      if (!input.value){
        input.isValid = false;
      }
      return input;
    }

    if( state.inputName.isValid &&  state.checkboxColor.isValid ){
      const newProduct = {
        name: state.inputName.value,
        color: state.checkboxColor.value
      };
      //
      this.props.handleAddProduct(newProduct);
      //
      this.setState(this.getDefaultState());
      this.refForm.reset();
      return;
    }

    state.showErrors = true;
    this.setState({state});
  }

  render() {
    const inputName = this.state.inputName;
    const checkboxColor = this.state.checkboxColor;
    const showErrors = this.state.showErrors;

    return (
      <div className="FormAddProduct">
        <div className="FormAddProduct-header">
          <div className="container">
            <h2>Add product</h2>
          </div>
        </div>
        <bs.Grid>
          <bs.Row>
            <bs.Col md={6} mdOffset={1}>
              <form ref={ (form)=>{this.refForm = form} }
                    onSubmit={ this.handleAdd }>
                <bs.FormGroup
                  controlId="productName"
                  value={inputName.value}
                  onChange={ this.handleNameChange }>
                  <bs.ControlLabel>Name:</bs.ControlLabel>
                  <bs.FormControl name="inputName"  placeholder="Enter product name, please"
                               required={ (inputName.required) ? 'required' : '' }/>
                  {showErrors ? <ValidationError input={inputName}/> : ''}
                </bs.FormGroup>
                <bs.FormGroup>
                  <bs.ControlLabel>Color:</bs.ControlLabel>
                  <bs.ButtonToolbar>
                    <bs.ToggleButtonGroup type="radio" name="checkboxColor"
                                       value={checkboxColor.value}
                                       onChange={ this.handleColorChange } /*defaultValue={"#ff0000"}*/>
                      <bs.ToggleButton value={"#ff0000"}>
                        Red <span className="color-circle" style={{backgroundColor: '#f00'}}></span>
                      </bs.ToggleButton>
                      <bs.ToggleButton value={"#00ff00"}>
                        Green <span className="color-circle" style={{backgroundColor: '#0f0'}}></span>
                      </bs.ToggleButton>
                      <bs.ToggleButton value={"#0000ff"}>
                        Blue <span className="color-circle" style={{backgroundColor: '#00f'}}></span>
                      </bs.ToggleButton>
                    </bs.ToggleButtonGroup>
                  </bs.ButtonToolbar>
                  {showErrors ? <ValidationError input={checkboxColor}/> : ''}
                </bs.FormGroup>

                <div className="text-right">
                  <bs.Button bsStyle="primary"
                          bsSize="small"
                          type="submit"
                          /*onClick={ this.handleAdd }*/>
                    Add
                  </bs.Button>
                </div>

              </form>
            </bs.Col>
          </bs.Row>
        </bs.Grid>
      </div>
    );// return
  }// render
}

export default ProductForm;
