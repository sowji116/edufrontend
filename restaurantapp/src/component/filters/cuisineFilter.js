import React,{Component} from 'react';
import axios from 'axios';
import './listing.css';

const url = "https://edu-nov.herokuapp.com/rest?mealtype="
class CuisineFilter extends Component{
    Cuisinefilter = (event) => {
        let mealId=sessionStorage.getItem('mealId')
        let cuisineId = event.target.value;
        let cuisineUrl;
        if(cuisineId==''){
            cuisineUrl=`${url}${mealId}`
        }else{
            cuisineUrl=`${url}${mealId}&cuisine=${cuisineId}`
        }
        axios.get(cuisineUrl)
            .then((response) => {this.props.restPerCuisine(response.data)})

    }
    render(){
        return(
            <React.Fragment>
                <center className='filter-heading'>Cuisine</center>
                <div onChange={this.Cuisinefilter} className='cuisinefilter'>
                    <label>
                        <input type="radio" value="" name="cuisine"/>All
                    </label><br/>
                    <label>
                        <input type="radio" value="1" name="cuisine"/>North Indian
                    </label><br/>
                    <label>
                        <input type="radio" value="2" name="cuisine"/>South Indian
                    </label><br/>
                    <label>
                        <input type="radio" value="3" name="cuisine"/>Chinese
                    </label><br/>
                    <label>
                        <input type="radio" value="4" name="cuisine"/>Fast Food
                    </label><br/>
                    <label>
                        <input type="radio" value="5" name="cuisine"/>Street Food
                    </label>
                </div>
            </React.Fragment>
        )
    }
}

export default CuisineFilter