import React, {Component} from "react";

class HomeThreeColumns extends Component {
    render() {
        return (
            <section className="threeCol">
           <div className="threeCol__column">
               <h2 className="threeCol__title">10</h2>
               <h3 className="threeCol__subtitle">ODDANYCH WORKÓW</h3>
               <p className="threeCol__text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
           </div>
                <div className="threeCol__column">
                    <h2 className="threeCol__title">5</h2>
                    <h3 className="threeCol__subtitle">WSPARTYCH ORGANIZACJI</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div className="threeCol__column">
                    <h2 className="threeCol__title">7</h2>
                    <h3 className="threeCol__subtitle">ZORGANIZOWANY ZBIÓREK</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
            </section>
        );
    }
}

export default HomeThreeColumns;