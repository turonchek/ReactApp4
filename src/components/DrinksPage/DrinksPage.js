import React, {Component} from "react";
import { Pagination } from "../Pagination/Pagination";
import { DrinkList } from "../DrinkList/DrinkList";

export class DrinksPage extends Component{

    constructor(props){
        super(props);

        this.state = {
            status: 'initial',
            error:null,
            data:[],
            currentPage:1,
            drinksPerPage:5,
        };
    }

    fetchData = async () => {
        this.setState({
                status:'loading',
                error:null,
                data:[],
            });

        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`);
            const json = await response.json();
            this.setState({
                status: `success`,
                error: null,
                data:json.drinks,
            });
        } catch (error) {
            this.setState({
                status: `error`,
                error:error.message,
                data:null,
            })
        }
    }

    paginate = pageNumber => {
        let currentPage=pageNumber.selected+1;
        this.setState({
            currentPage,
        })
    }

    // fetchData = () => {
    //     this.setState({
    //         status:'loading',
    //         error:null,
    //         data:[],
    //     });

    //     fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`)
    //         .then((res) => {
    //             return res.json()
    //         })
    //         .then((result) => {
    //             this.setState({
    //                 status: `success`,
    //                 error: null,
    //                 data:result.drinks,
    //             });
    //         })
    //         .catch((error) => {
    //             this.setState({
    //                 status: `error`,
    //                 error:error.message,
    //                 data:null,
    //             });
    //         })
    // }

    render(){
        const { status, error, data, currentPage, drinksPerPage } = this.state;
        const lastDrinkIndex=currentPage*drinksPerPage;
        const firstDrinkIndex=lastDrinkIndex-drinksPerPage;
        const currentDrink = data.slice(firstDrinkIndex,lastDrinkIndex);
        
        return(
            <div>
                <DrinkList 
                    currentDrink={currentDrink}
                    status={status}
                    error={error}
                    />
                {status===`success` && <Pagination 
                                            drinksPerPage={drinksPerPage} 
                                            totalDrinks={data.length} 
                                            paginate={this.paginate}
                                        />
                }
            </div>
        );
    }

    componentDidMount() {
        this.fetchData();
    }
}

