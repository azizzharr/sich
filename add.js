import React, {Component} from 'react';
import { Form} from "react-bootstrap";
import './add.css'

class Add extends Component {

    // state = {
    //     title: '',
    //     price: '',
    //     image: '',
    // }
    //
    // onSubmit = (e) => {
    //     e.preventDefault()
    //     this.props.addProduct(this.state)
    //     this.setState({title: '', price: ''})
    // }
    //
    // onChange = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }
    // onChangeImage = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.files[0]
    //     })
    // }


    render() {
        return (
            <div className="m-auto" style={{width: "600px"}}>
                <h2>Add Product</h2>
                <Form className="container">

                    <div className="anketa">
                        <br/>
                        <div className="form-group form-row mb-4">
                            
                            <h4 className="ml-5">
                                название :
                            </h4>
                            <input type="text" className="form-control offset-md-1 col-md-8 " name=""/>
                        </div>
                        <h4 className="ml-5">
                            фото :
                        </h4>
                        <br/>
                        <div className="form-group form-row mb-4">

                            <input type="file" className="form-control offset-md-1  col-md-8" name=""/>
                        </div>
                        <h4 className="ml-5">
                            цена :
                        </h4>
                        <br/>
                        <div className="form-group form-row mb-4">


                            <input type="number" className="offset-md-1 form-control col-md-8"
                                   name=""/>
                        </div>
                        <button type="submit" className="btn-success offset-2 col-md-5 form-control-file">
                            submit
                        </button>
                    </div>


                </Form>
            </div>
        );
    }
}


export default Add;