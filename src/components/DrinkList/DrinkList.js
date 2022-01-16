import React, {Component} from "react";
import PropTypes from 'prop-types';
import { DrinkItem } from "../DrinkItem/DrinkItem";

export class DrinkList extends Component {
    render(){
        const {currentDrink,status, error}=this.props;
        return <div>
            {status === `loading` || status === `initial` ? (
                    <div>Loading...</div>
                ) : (
                    <div className="">
                        {error === null ? (

                            <ul className="">
                                {currentDrink.map((item) => (
                                    <DrinkItem key={item.idDrink} {...item}/>
                                ))}
                            </ul>
                        ) : (
                            <span style={{color:`red`}}>{error}</span>
                        )}
                    </div>
                )}
        </div>
    }
}

DrinkList.propTypes ={
    currentDrink:PropTypes.arrayOf(
        PropTypes.shape({
            idDrink:PropTypes.string,
            strDrink:PropTypes.string,
            strDrinkThumb:PropTypes.string,
        })
    ),
    status:PropTypes.string.isRequired,
    error:PropTypes.string,
}

