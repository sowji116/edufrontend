import React,{Component} from 'react';
import axios from 'axios';

const url = "https://edu-nov.herokuapp.com/rest?mealtype="

class CostFilter extends Component{
    Costfilter = (event) => {
        let mealId=sessionStorage.getItem('mealId')
        let cost = (event.target.value).split(',');
        let lcost = cost[0];
        let hcost = cost[1];
        let costUrl;
        if(cost==''){
            costUrl=`${url}${mealId}`
        }else{
            costUrl=`${url}${mealId}&lcost=${lcost}&hcost=${hcost}`
        }
        axios.get(costUrl)
            .then((response) => {this.props.restPerCost(response.data)})

    }
    render(){
        return(
            <React.Fragment>
                <center className='filter-heading'>Cost</center>
                <div onChange={this.Costfilter} className='cuisinefilter'>
                    <label >
                        <input type="radio" value="" name="cuisine"/>All
                    </label><br/>
                    <label>
                        <input type="radio" value="0,100" name="cuisine"/>0-100
                    </label><br/>
                    <label>
                        <input type="radio" value="101,200" name="cuisine"/>101-200
                    </label><br/>
                    <label>
                        <input type="radio" value="201,300" name="cuisine"/>201-300
                    </label><br/>
                    <label>
                        <input type="radio" value="301,400" name="cuisine"/>301-400
                    </label><br/>
                    <label>
                        <input type="radio" value="401,1000" name="cuisine"/>401-1000
                    </label>
                </div>
            </React.Fragment>
        )
    }
}

export default CostFilter