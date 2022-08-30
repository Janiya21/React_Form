import React, { Component } from 'react';

class Item extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:'',
            name: '',
            price: '',
            qty:''
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name] : e.target.value});
    }

    render() {
        const {code,name,price,qty} = this.state;
        return (
            <div className="ui  grid" style={{width:"70vw", margin:"15vh 0 0 35vw"}}>
                <div class="column">
                    <form style={{width:"30vw", marginLeft:"-5vw"}} class="ui form" onSubmit={this.submitHandler}>
                            <div class="field">
                                <label>Item Code</label>
                                <input name="code" value={code} onChange={this.changeHandler} placeholder="item code"/>
                            </div>
                            <div class="field">
                                <label>Item Name</label>
                                <input name="name" value={name} onChange={this.changeHandler} placeholder="item name"/>
                            </div>
                            <div class="field">
                                <label>Unit Price</label>
                                <input name="price" value={price} onChange={this.changeHandler} placeholder="email"/>
                            </div>
                            <div class="field">
                                <label>Quantity</label>
                                <input name="qty" value={qty} onChange={this.changeHandler} placeholder="quantity"/>
                            </div>
                            <button className="ui secondary button" style={{margin: "20px 0 30px 10vw", width:"10vw"}}
                                    type="submit">Register Item
                            </button>
                        </form>
                </div>
            </div>
        );
    }
}

export default Item;