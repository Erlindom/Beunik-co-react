import React, { Component } from 'react';
import './acordeon.css';

class Acordeon extends Component {
    constructor(props) {
        super(props);

        this.state = {
            setActive: "",
            setHeight: "0px"
        };

        this.componentRef = React.createRef();

    }

    openAccordion = () => {
        this.setState({
            setActive: this.state.setActive === "" ? "active" : "",
            setHeight: this.state.setActive === "active" ? "0px" : `${this.componentRef.current.scrollHeight}px`
        });
        console.log(this.componentRef.current.scrollHeight);
    }


    render() {
        return (
            <section className='acordeon_section' id='questions'>
                <div className="acordeon">
                        <p className={`acordeon_pregunta ${this.state.setActive}`} onClick={this.openAccordion}> {this.props.question}
                    <i className="bx bx-chevron-right acordeon_icon"></i>
                    </p>
                </div>
                
                <div ref={this.componentRef} style={{maxHeight: `${this.state.setHeight}`}} className="acordeon_content">
                    <div className="acordeon_respuesta"> {this.props.children} </div>
                </div>
            </section>
        )
    }
}



export default Acordeon;