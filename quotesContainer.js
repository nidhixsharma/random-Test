import React,{Component} from 'react';
import axios from 'axios';

class QuotesContainer extends Component {

    constructor(props)
    {
        super(props);
        this.state =
        {
            quotes:[],
            isLoading:true,
            hasError:false,
        }
    }

    componentDidMount()
    {
        axios.get("https://talaikis.com/api/quotes")
              .then((response) =>
              {
                  this.setState(
                      {
                          quotes:response.data,
                          isLoading:false,
                      }
                  )
              }
              )

              .catch((error)=>
              {
                  this.setState({
                      isLoading:false,
                      hasError:true,
                  })
              })
    }

    render()
    {
        if(this.state.isLoading)
        {
            return(
                <p>Loading...</p>
            )
        }
        else
        {
        return(
            <div>
                <p>Quotes</p>
                {this.state.hasError &&
                <p>an error occured..</p>}
              {/* <p>{this.state.quotes.quote}</p>*/}
                 {this.state.quotes.map((e,i) =>{
                    return(<p key ={i}>{e.quote}</p>)})} 
                    
                </div>
        )
    }
}
}

export default QuotesContainer;