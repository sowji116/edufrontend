import React from 'react';
import {Link} from 'react-router-dom';
import './listing.css';

const ListingDisplay = (props) => {
    const renderList = ({restaurentList}) => {
        if(restaurentList){
            if(restaurentList.length>0){
                return restaurentList.map((item) => {
                    console.log("checking---->",item);
                    return(
                        
                        <div className="first1">
            <div>
                <img src={item.thumb}
                    className="myimg"/>
            </div>
            <div className="row-heading">
                <div className="heading">
				<Link to={`/details/${item._id}`}>
                                        {item.name}
                                    </Link>
									</div>
                <div className="locality">{item.locality}</div>
                <div className="address">{item.address}</div>
                <hr className="line"/>
                <div className="cost">
                    {/* <div>CUISINES:</div> */}
                    <div>COST FOR TWO:</div>
                </div>
                <div className="bakery">
                    {/* <div>{item.city_name}</div> */}
                    <div>Rs.{item.cost} Per Two</div>
                </div>
            </div>
        </div>
                    )
                })
            }else{
                return(
                    <div>
                        <center>
                            <h2>No Data On This Filter</h2>
                        </center>
                    </div>
                )
            }
            
        }else
        {
            return(
                <div>
                    <img src="/images/loader.gif"/>
                </div>
            )
        }
    }

    return(
        <>
        {renderList(props)}
        </>
    )
}

export default ListingDisplay