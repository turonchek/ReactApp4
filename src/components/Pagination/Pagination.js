import React, {Component} from 'react';
import ReactPaginate from 'react-paginate';

export class Pagination extends Component {
    
    render(){
        const {drinksPerPage, totalDrinks, paginate} = this.props;
        const pageCount=Math.ceil(totalDrinks/drinksPerPage);

        return (
            <div>
                <ReactPaginate
                    previousLabel={`<<`}
                    nextLabel={`>>`}
                    breakLabel={`...`}
                    pageCount={pageCount}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={2}
                    onPageChange={paginate}
                    containerClassName={`pagination justify-content-center`}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    activeClassName={`active`}
                    />
            </div>
        );
    }
}