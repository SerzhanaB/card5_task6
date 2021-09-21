import React,{Component} from 'react';
import axios from 'axios'
import './App.css';

class  Users extends Component {
  constructor (props)
  {super(props);
  }

  componentDidMount(){

   axios.get("https://social-network.samuraijs.com/api/1.0/users")
   .then(response => console.log("response", response.data))
  }

  render (){
  return (
    <div className="App">
<pИспользование библиотеки axios </p>
    </div>
  );
}
}



export default Users;
