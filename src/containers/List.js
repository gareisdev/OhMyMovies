import React, { Fragment } from "react";

import Card from "../components/Card/Card";


const api = 'http://www.omdbapi.com/?apikey=[YOUR_API_KEY]'



class List extends React.Component {

    constructor() {
        super();

        this.state = {
            data: [],
            movieSearch: '',
            error: '',
            loading: true
        }
    }

    async componentDidMount() {
        const response = await fetch(`${api}&s=family`);
        const resJSON = await response.json();

        this.setState({ data: resJSON.Search, loading: false })
    }

    async handleSubmit(e) {
        e.preventDefault();

        if (!this.state.movieSearch) {
            return this.setState({ error: 'No has tipado nada por lo que no puedo ayudarte con tu busqueda' })
        }
        
        const response = await fetch(`${api}&s=${this.state.movieSearch}`);
        const resJSON = await response.json();

        
        if(!resJSON.Search){
            return this.setState({error:'No se han encontrado peliculas y/o series con ese nombre'})
        }
        
        this.setState({ data: resJSON.Search, error: '', movieSearch: ''})

    }

    render() {

        const {data, loading, error} = this.state
        if(loading){
            return (
                <div className="d-flex align-items-center mt-5">
                    <strong>Loading...</strong>
                    <div className="spinner-border ml-auto" role="status" aria-hidden="true" />
                </div>
            )
        }
        return (
            <Fragment>
                <div className='row'>
                    <div className='col-md-8 offset-md-2 p-4'>
                        <form onSubmit={(e) => this.handleSubmit(e)}>
                            <input type='text'
                                className='form-control'
                                placeholder='Busca tu pelicula o serie'
                                onChange={e => this.setState({ movieSearch: e.target.value })} 
                                value={this.state.movieSearch}
                            />
                        </form>
                        
                        <div className={error ? "alert alert-dismissible alert-danger mt-2" : "invisible"} >
                            <strong>Oops!</strong> {error}
                        </div>
                    </div>
                </div>
                <div className='row'>
                    {
                        data.map((movie, i) => {
                            return (
                                <Card movie={movie} key={i}/>
                            )
                        })
                    }
                </div>
            </Fragment>



        )
    }
}


export default List;
