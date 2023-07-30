import React from 'react'
import './MovieCards.css'

const MovieCards = ({Title, Poster, Type, Year}) => {
    return (
        <div className='movieCards'>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <div class="hero-container">
                                <div class="main-container">
                                    <div class="poster-container">
                                        <a href="#"><img src={Poster} class="poster" /></a>
                                    </div>
                                    <div class="ticket-container">
                                        <div class="ticket__content">
                                            <h4 class="ticket__movie-title">{Title}</h4>
                                            <p class="ticket__movie-slogan">
                                                {Type}
                                            </p>
                                            <p class="ticket__current-price">{Year}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MovieCards