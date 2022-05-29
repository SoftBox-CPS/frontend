import React, {Component} from 'react';
import {Container, Form, FormControl, FormGroup} from "react-bootstrap";
import './newRoomForm.css';
import { FormErrors } from './newRoomFormErrors';
import UploadIcon from "../upload_icon/uploadIcon";

function NewRoomForm(){
    return(
        <RoomBlock />
    );
}

class RoomBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
            , description: ''
            , amount: ''
            , discount: ''
            , formErrorName: {name: ''}
            , formErrorDescr: {description: ''}
            , formErrorAmount: {amount: ''}
            , formErrorDiscount: {discount: ''}
            , nameValid: false
            , descrValid: false
            , amountValid: false
            , discountValid: false
            , formValid: false
        };
    }

    handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrorName = this.state.formErrorName;
        let fieldValidationErrorDescr = this.state.formErrorDescr;
        let fieldValidationErrorAmount = this.state.formErrorAmount;
        let fieldValidationErrorDiscount = this.state.formErrorDiscount;
        let nameValid = this.state.nameValid;
        let descrValid = this.state.descrValid;
        let amountValid = this.state.amountValid;
        let discountValid = this.state.discountValid;

        switch(fieldName) {
            case 'name':
                nameValid = value.length >= 6;
                fieldValidationErrorName.name = nameValid ? '': 'Название слишком короткое';
                break;
            case 'description':
                descrValid = value.length >= 6;
                fieldValidationErrorDescr.description = descrValid ? '': 'Описание слишком короткое';
                break;
            case 'amount':
                amountValid = value.match(/^\d*[.,]?\d+$/i);
                fieldValidationErrorAmount.amount = amountValid ? '' : 'Некорректный ввод стоимости';
                break;
            case 'discount':
                if(!(discountValid = value.match(/^\d*[.,]?\d+$/i))){
                    fieldValidationErrorDiscount.discount = 'Некорректный ввод скидки';
                }
                else if(parseInt(value) > 100){
                    fieldValidationErrorDiscount.discount = " не может быть больше 100";
                }else{
                    fieldValidationErrorDiscount.discount = '';
                }
                break;
            default:
                break;
        }
        this.setState({formErrorName: fieldValidationErrorName,
            formErrorDescr: fieldValidationErrorDescr,
            formErrorAmount: fieldValidationErrorAmount,
            formErrorDiscount: fieldValidationErrorDiscount,
            nameValid: nameValid,
            descrValid: descrValid,
            amountValid: amountValid,
            discountValid: discountValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({
            formValid:
                this.state.nameValid
                && this.state.descrValid
                && this.state.amountValid
                && this.state.discountValid
        });
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'border-danger');
    }

    render() {
        return(
            <Container>
                <h1>Новая заявка</h1>
                <Form>
                    <FormGroup>
                        <label htmlFor="product_name">Название</label>
                        <FormControl className={`${this.errorClass(this.state.formErrorName.name)}`}
                                     id="product_name"
                                     placeholder="Введите название продукта"
                                     name = "name"
                                     value={this.state.name}
                                     onChange={this.handleInput}></FormControl>
                        {this.state.name !== '' &&
                            <div className="panel panel-default">
                                <FormErrors formErrors={this.state.formErrorName} hidden="true"/>
                            </div>
                        }
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="product_descr">Описание</label>
                        <FormControl as="textarea" rows={3}
                                     id="product_descr"
                                     className={`${this.errorClass(this.state.formErrorDescr.description)}`}
                                     placeholder="Введите описание продукта"
                                     name = "description"
                                     value={this.state.description}
                                     onChange={this.handleInput} />
                        {this.state.description &&
                            <div className="panel panel-default">
                                <FormErrors  formErrors={this.state.formErrorDescr} hidden="true"/>
                            </div>
                        }
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="product_amount">Стоимость</label>
                        <FormControl className={`${this.errorClass(this.state.formErrorAmount.amount)}`}
                               id="product_amount"
                               placeholder="Введите стоимость"
                               name = "amount"
                               value={this.state.amount}
                               onChange={this.handleInput} />
                        {this.state.amount !== '' &&
                            <div className="panel panel-default">
                                <FormErrors formErrors={this.state.formErrorAmount} hidden="true"/>
                            </div>
                        }
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="product_discount">Скидка</label>
                        <FormControl className={`form-control ${this.errorClass(this.state.formErrorDiscount.discount)}`}
                               id="product_discount"
                               placeholder="Введите размер скидки в %"
                               name = "discount"
                               value={this.state.discount}
                               onChange={this.handleInput} />
                        {this.state.discount !== '' &&
                            <div className="panel panel-default">
                                <FormErrors formErrors={this.state.formErrorDiscount} hidden="true"/>
                            </div>
                        }
                    </FormGroup>
                    <UploadIcon />
                    <button type="submit" className="btn btn-info my-3" disabled={!this.state.formValid}>Отправить</button>
                </Form>
            </Container>
        );
    }
}

export default NewRoomForm;