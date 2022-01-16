import React, {Component} from "react";
import PropTypes from 'prop-types';

export class DrinkItem extends Component{
    
    render(){
        const itemData = this.props;
        return(
            <li key={itemData.idDrink}
                className=""
                style={{listStyleType: "none", marginBottom:20}}>
                <div>{itemData.strDrink}</div>
                <img style={ {width:100, height:100}}
                    src={itemData.strDrinkThumb}
                    alt={itemData.strDrink}/>
            </li>
        );
    }
}

DrinkItem.propTypes = {
    itemData: PropTypes.shape({
            strDrink:PropTypes.string.isRequired,
            idDrink:PropTypes.string.isRequired,
        })
}
