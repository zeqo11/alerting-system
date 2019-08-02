import React, {Component} from 'react';
import './MyComponents.css';

class MyComponents extends Component{

    state = {
        count: 15,
        myKey: "myValue"
    };
    increaseCount = () => {
        this.setState({count: this.state.count + 1});
    };
     resetCount = () => {
            this.setState({count: 15});
     };
     divStyle = {
        fontSize: "20px"
     };
    render(){
    let myVar = "my var";
        return <div>
        <br/>

        <br/>

        <br/>

        <br/>

            <form>
              <label>
                Name:
                <input type="text" name="name" />
              </label>
              <input type="submit" value="Submit" />
            </form>

            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>

             <select>
              <optgroup label="Swedish Cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
              </optgroup>
              <optgroup label="German Cars">
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </optgroup>
            </select>

            <form>
                <label>
                    Name:
                    <input type ="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>

        </div>
    }

}

export default MyComponents;