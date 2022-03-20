import * as React  from 'react';
import {Button, ButtonDisabled} from "../components/Buttons"

import './App.scss';



class App extends React.Component{
    state={
        colors:[ ],
        value_red: "",
        value_green:"",
        value_blue: "",
        hex: "",
        rgb: "rgb",
        hsl:"hsl"
    }


    handleSubmit = e => {
       e.preventDefault();
        const { value_red, value_green, value_blue, colors, hex } = this.state;
        const newcolor = "#" +value_red + value_green + value_blue;

        this.setState (() => ({
            colors: [...this.state.colors, newcolor],
            hex:"#" + value_red + value_green + value_blue
        }));
        this.setState({
            value_red: "",
            value_green:"",
            value_blue: "",
        });
    }



  render() {
      const { value_red, value_green, value_blue, colors, hex} = this.state;
      const displayColors = colors.map((color_item, index) => (
         <div >
          <div
              className="item_color_added" style={{backgroundColor: `${color_item}`}}
              key={index}/>
         <div className="item_color_added_name">{color_item}</div>
         </div>
      ));


    return (
        <div className="wrapper_full_width">
          <div className="wrapper_short_width">
            <div className="wrapper_dashboard">
                {displayColors.length > 0 ? (
                    displayColors
                ) : (
                    <h2>Nie dodano jeszcze kolorów!</h2>
                )}
                </div>
            <div className="wrapper_form_add_color">
              <div>
                <div className="title">Dodaj nowy kolor</div>
                  <div>
                      <div className="wrapper_added_color">
                                  { value_red.length !== 0 || value_green.length !== 0 || value_blue.length !== 0? (
                                      <div className="wrapper_added_color_display" style={{backgroundColor: `${'#' + this.state.value_red + this.state.value_green + this.state.value_blue}`}}/>
                                  ) : (
                                      <div className="wrapper_added_color_display_message"> Podgląd koloru </div>)}
                       <div className="wrapper_added_color_name">
                                 <div>{ value_red.length !== 0 || value_green.length !== 0 || value_blue.length !== 0? ( "#" + value_red.toUpperCase() + value_green.toUpperCase() + value_blue.toUpperCase()) : ((this.state.hex).toUpperCase())}</div>
                                 <div>{this.state.rgb}</div>
                                 <div>{this.state.hsl}</div>
                             </div>
                      </div>
                      <form className="wrapper_added_color_form" onSubmit={this.handleSubmit}>
                          <div className="wrapper_input">
                              <div className="wrapper_input_sharp">#</div>
                          <input placeholder="Red"
                                 id="input"
                                 type="text"
                                 value={(value_red).toUpperCase()}
                                 onChange={(event) => this.setState({
                                     value_red: event.target.value})}
                                 minLength={2} maxLength={2}
                                 pattern="[a-fA-F0-9]+"
                                />
                          <input placeholder="Green"
                                 type="text"
                                 name="value_green"
                                 value={(value_green).toUpperCase()}
                                 onChange={(event) => this.setState({
                                     value_green: event.target.value})}
                                 minLength={2} maxLength={2}
                                 pattern="[a-fA-F0-9]+"
                                     />
                          <input placeholder="Blue"
                                 type="text"
                                 name={value_blue}
                                 value={(value_blue).toUpperCase()}
                                 onChange={(event) => this.setState({
                                     value_blue: event.target.value
                                 })}
                                 minLength={2} maxLength={2}
                                 pattern="[a-fA-F0-9]+"
                                        />
                          </div>
                          {value_red.length !== 0 && value_green.length !== 0 && value_blue.length !== 0 ? (<Button>Dodaj</Button>) : (<ButtonDisabled>Dodaj</ButtonDisabled>)}

                      </form>
                </div>
              </div>
              <div>
                <div className="title">Filtruj kolory</div>
                <div className="wrapper_buttons">
                      <Button>Czerwony &gt; 50%</Button>
                      <Button>Zielony &gt; 50%</Button>
                      <Button>Niebieski &gt; 50%</Button>
                      <Button>Nasycenie &gt; 50%</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }}

export default App;