import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class Header extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg justify-content-between navbar-light bg-light container px-5">
                <Link className="navbar-brand" to="/">UserList App </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <span className="navbar-text justify-content-end">
                    <Link to="/logout">LogOut</Link>
                </span>
            </nav>
        )
    }
}