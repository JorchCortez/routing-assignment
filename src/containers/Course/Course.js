import React, { Component } from 'react';

class Course extends Component {

    state = {
        title: "",
        id: 0,
        loadedCourse: false
    }

    componentDidMount(){
        this.updateData()
    }

    componentDidUpdate(){
        this.updateData()
    }

    updateData() {
        if(this.props.match.params.id){
            console.log("1")
            if(!this.state.loadedCourse || this.state.id != this.props.match.params.id){        
                console.log("2")     
                this.setState({
                    loadedCourse: true,
                    id: this.props.match.params.id
                })

                const query = new URLSearchParams(this.props.location.search);
                for (let param of query.entries()) { 
                    if(param[1])
                    this.setState({
                        id: this.props.match.params.id,
                        title:param[1]
                    })
                }
            }
        }
    }



    render () {

        let title = this.state.title
        return (
            <div>
                <h1>{title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;