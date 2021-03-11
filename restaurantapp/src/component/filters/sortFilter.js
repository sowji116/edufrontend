import React,{Component} from 'react';
import axios from 'axios';

const url = "https://edu-nov.herokuapp.com/rest?mealtype="

class SortFilter extends Component{
    sortfilter = (event) => {
        let mealId=sessionStorage.getItem('mealId')
        let sort = event.target.value
        const costUrl=`${url}${mealId}&sort=${sort}`
        axios.get(costUrl)
            .then((response) => {this.props.restPerSort(response.data)})

    }
    render(){
        return(
            <React.Fragment>
                <center className='filter-heading'>Sort</center>
                <div onChange={this.sortfilter} className='cuisinefilter'>
                    <label className="radio">
                        <input type="radio" value="1" name="cuisine"/>Low - High
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="-1" name="cuisine"/>High - Low
                    </label><br/>
                </div>
            </React.Fragment>
        )
    }
}

export default SortFilter