import React, { Component } from 'react'
import Landing from '../landing/landing.component'
import About from '../about/about.component'
import Products from '../products/products.component'
import Gallery from '../gallery/gallery.component'

export class Home extends Component {
    render() {
        return (
            <>
                <Landing/>
                <About/>
                <Products/>
                <Gallery limitit={8} />
            </>
        )
    }
}

export default Home
