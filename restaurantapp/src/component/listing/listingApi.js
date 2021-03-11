import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './listingDisplay';
import Header from '../../Header';
import CuisineFilter from '../filters/cuisineFilter';
import CostFilter from '../filters/CostFilter';
import Sortfilter from '../filters/sortFilter'
import './listing.css';

const url = "https://edu-nov.herokuapp.com/rest?mealtype=";

class ListingApi extends Component{
    constructor(props){
        super(props)

        this.state={
            restlist:''
        }
    }
    setDataPerFilter=(sortedData)=>{
        this.setState({restlist:sortedData})
    }
    render(){
        console.log(">>>",this.state.restlist)
        return(
        //    <div className="row" >
        //         <Header/>
        //         <div style={{marginLeft:'5%'}}>
            <div>
                    <div className="filter">
                    <h1>Filters</h1>
                        <CuisineFilter restPerCuisine={(data) => {this.setDataPerFilter(data)}}/>
                        <CostFilter restPerCost={(data) => {this.setDataPerFilter(data)}}/>
                        <Sortfilter restPerSort={(data) => {this.setDataPerFilter(data)}}/>
                    </div>
                    <div className="item">
                        <ListingDisplay restaurentList={this.state.restlist}/>
                    </div>
                
           </div>
        )
    }

    componentDidMount(){
        var mealid = this.props.match.params.id
        sessionStorage.setItem('mealId',mealid)
        axios.get(`${url}${mealid}`)
        .then((response) => {this.setState({restlist:response.data})})
    }

    /*
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        //setting data in state
        .then((data)=> this.setState({city:data}))
    }*/
}


export default ListingApi;