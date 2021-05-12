import React, { Component } from 'react'
import axios from 'axios'

export default class Products extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
            perPage: 50,
            currentPage: 2,
            nPages: 1,
            sortBy: "price_asc",
            sortOrder: -1,
            filterData: {
                brands: [],
                minPrice: { price: 0 },
                maxPrice: { price: 0 },
            },
            selectedBrands:[],
            minPrice: 0,
            maxPrice: 1000000 

        }
    }

    fetchFilters = () => {
        axios.get(`http://127.0.0.1:3300/product/filters`).then(data => {


            this.setState({
                filterData: data.data,
                minPrice: data.data.minPrice.price,
                maxPrice: data.data.maxPrice.price

            })
        }).catch(err => {

        })
    }
    fetchData = (saveExisting = false) => {
        let { perPage, 
            currentPage, 
            sortBy, 
            sortOrder, 
            products, 
            minPrice, 
            maxPrice, 
        selectedBrands} = this.state
        let allBrands = [...this.state.filterData.brands]
        let reqBody = {
            limit: perPage,
            page: currentPage,
            sortby: sortBy,
            minPrice,
            maxPrice,
            brands:selectedBrands,
            allBrands
        }

        axios.post(`http://127.0.0.1:3300/product`, reqBody).then(data => {
            let newPoducts = [...data.data.data]
            if (saveExisting) {

                newPoducts.unshift(...products)
            }
            this.setState({
                products: newPoducts,
                nPages: data.data.nPages
            })
        }).catch(err => {

        })
    }

    handleBrandFilter = (brand)=>{
        console.log(brand)
        let prevSeleted = [...this.state.selectedBrands]
        let idx = prevSeleted.indexOf(brand)
        if(idx != -1 ){
            //item in array
            prevSeleted.splice(idx, 1)
        }else{
            //item not in array
            prevSeleted.push(brand)
        }

        this.setState({selectedBrands:prevSeleted}, ()=>{
            console.log(this.state.selectedBrands)
        })
        
    }
    async componentDidMount() {
        await this.fetchFilters()
        this.fetchData()
       
    }

    handlePerPage = (perPage) => {
        console.log(perPage)
        this.setState({ perPage: perPage }, () => this.fetchData())

    }

    handlePagination = (action) => {
        console.log(action)
        let { currentPage, nPages } = this.state
        if (action == "next") {
            if (currentPage < nPages) {
                currentPage++
            }
        }

        if (action == "prev") {
            if (currentPage > 1) {
                currentPage--
            }
        }

        this.setState({ currentPage: currentPage }, () => {
            this.fetchData(true)
        })
    }

    handleSort = (action) => {
        this.setState({ sortBy: action }, () => {
            this.fetchData()
        })
        console.log(action)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-2">
                        Show Per Page
                        <select className=""
                            value={this.state.perPage}
                            onChange={
                                (e) => this.handlePerPage(e.target.value)
                            }
                        >
                            <option value="50">50</option>
                            <option value="150">150</option>
                            <option value="200">200</option>
                        </select>
                    </div>

                    <div className="col-md-4 offset-md-2">
                        sort by
                        <select className=""
                            value={this.state.sortBy}
                            onChange={
                                (e) => this.handleSort(e.target.value)
                            }
                        >
                            <option value="price_asc">Price Low to High</option>
                            <option value="price_desc">Price High to Low</option>
                            <option value="name_asc">Name A-Z</option>
                            <option value="name_desc">Name Z-A</option>

                        </select>
                    </div>
                    <div className="col-md-2 mt-5">
                        <span className="h6">Filters</span>

                        <div className="mt-5">
                            <p >Brands</p>
                            <div className="brand-holder">

                                {this.state.filterData.brands.map(brand => {
                                    return (<div key={brand}>
                                        <input type="checkbox" value={brand} onChange={(e)=>this.handleBrandFilter(e.target.value)}></input> {brand}
                                    </div>)
                                })}


                            </div>


                        </div>



                        <div className="mt-5">
                            <p >Price</p>
                            <div>
                                from <input type="number" value={this.state.minPrice} onChange={(e)=>{this.setState({minPrice:e.target.value})}}></input>

                                to <input type="number" value={this.state.maxPrice} onChange={(e)=>{this.setState({maxPrice:e.target.value})}}></input>
                            </div>


                        </div>


                        <button className="mt-5 btn btn-outline-primary btn-block" onClick={()=>this.fetchData()}>Filter</button>


                    </div>
                    <div className="col-md-10 mt-5">
                        <div className="row">
                            {this.state.products.map((product) => {
                                return (<div className="col-md-3">
                                    <div className="card" >
                                        <img src={`https://z.nooncdn.com/products/tr:n-t_400/${product.image_key}.jpg`} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.name}</h5>
                                            <p className="card-text">{product.brand}</p>

                                            <small>{product.price}</small><br></br>


                                            <a href="#" className="btn btn-sm btn-outline-primary">add to cart</a>
                                        </div>
                                    </div>
                                </div>)
                            })}
                        </div>
                    </div>

                    <div className="col-md-12">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item"><a class="page-link"
                                    onClick={() => this.handlePagination("prev")}>Previous</a></li>

                                <li class="page-item"><a class="page-link"
                                    onClick={() => this.handlePagination("next")}
                                >Next</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}
