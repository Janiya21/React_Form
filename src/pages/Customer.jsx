import React, { Component } from 'react';

class Customer extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:'',
            name: '',
            email: '',
            tel:''
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name] : e.target.value});
    }

    render() {
        const {id,name,email,tel} = this.state;
        return (
            <div className="ui grid" style={{width:"70vw", margin:"5vh 0 0 35vw"}}>
                <div class="column">
                    <div class="ui card">
                        <div class="image">
                            <img src="https://cdn.imgbin.com/6/23/4/imgbin-customer-login-avatar-kReNnVeBR2B59s1tG78ZfRVS8.jpg"/>
                        </div>
                    </div>
                    <form style={{width:"30vw", marginLeft:"-5vw"}} class="ui form" onSubmit={this.submitHandler}>
                            <div class="field">
                                <label>ID</label>
                                <input name="id" value={id} onChange={this.changeHandler} placeholder="id no"/>
                            </div>
                            <div class="field">
                                <label>Full Name</label>
                                <input name="name" value={name} onChange={this.changeHandler} placeholder="full Name"/>
                            </div>
                            <div class="field">
                                <label>Email</label>
                                <input name="email" value={email} onChange={this.changeHandler} placeholder="email"/>
                            </div>
                            <div class="field">
                                <label>TelNo</label>
                                <input name="tel" value={tel} onChange={this.changeHandler} placeholder="telno"/>
                            </div>
                            <button className="ui secondary button" style={{margin: "20px 0 30px 10vw", width:"10vw"}}
                                    type="submit">Register Customer
                            </button>
                        </form>
                </div>
            </div>
        );
    }
}

export default Customer;