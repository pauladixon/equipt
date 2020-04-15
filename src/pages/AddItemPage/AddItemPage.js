import React, { Component } from 'react';
import Select from 'react-select';
import itemCategories from '../../data';

class AddItemPage extends Component {
    state = {
        invalidForm: true,
        formData: {
            name: '',
            categoryChoices: '',
            description: ''
        }
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddItem(this.state.formData);
    }

    handleChange = e => {
        console.log(e)
        const formData = { ...this.state.formData, [e.target.name]: e.target.value, };
        console.log(formData)
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    // handleChangeCategories = e => {
    //     console.log(e)
    //     const formData = { categoryChoices: e.target.value };
    //     console.log(formData)
    //     this.setState({
    //         formData,
    //         invalidForm: !this.formRef.current.checkValidity()
    //     });
    // };

    render() {
        return (
            <>
                <h1>Add Item</h1>
                <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input
                        name="name"
                        value={this.state.formData.name}
                        onChange={this.handleChange}
                        required
                    />
                    <label>Categories</label>
                    <Select
                        name="categoryChoices"
                        options={itemCategories}
                        value={this.state.formData.categoryChoices}
                        // onChange={this.handleChangeCategories}
                        required
                    />
                    <label>Description</label>
                    <input
                        name="description"
                        value={this.state.formData.description}
                        onChange={this.handleChange}
                        required
                    />
                    <button
                        type="submit"
                        disabled={this.state.invalidForm}
                    >
                        ADD ITEM
                    </button>
                </form>
            </>
        );
    }
}

export default AddItemPage;