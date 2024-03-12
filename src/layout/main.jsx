import React from "react"
import {Movies} from "../components/Movies"
import {Search} from "../components/search"
import {Preloader} from "../components/preloader"

class Main extends React.Component {
    state = {
        movies: [],
    };
    componentDidMount(){
        fetch("http://www.omdbapi.com/?apikey=43f4cc62&s=matrix")
            .then((response) => response.json())
            .then((data) => this.setState({movies: data.Search}));
    }
    searchMovies = (str, type="all") => {
        fetch(`http://www.omdbapi.com/?apikey=43f4cc62&s=${str}${type !== "all" ? `&type=${type}` : ""}`
        )
        .then((response) => response.json())
        .then((data) => this.setState({movies: data.Search}));    
    };
    
    render(){
        const {movies, loading} = this.state
        
        return (<main className="container content">
            <Search searchMovies={this.searchMovies}/>
            {loading ? <Preloader/> : <Movies movies={this.state.movies}/>}
        </main>);
    }
}
export {Main};
