class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.incrementoPorcentaje = 0;
    this.preguntaInicio = 0;
    this.i = 0;
    this.state = {
      progreso: ['0%'] ,
      nro: 0,
      pregunta: props.cuestionario,
      respuestas: []
    }
  }
  handleClick(e) {
    e.preventDefault();
    let item = {
        rpta:e.target.textContent,
        nro: this.state.nro,
        pregunta : this.state.pregunta[this.state.nro].pregunta,
        progreso: this.state.progreso
    };
    let progreso = (this.incrementoPorcentaje + 20) + "%";
    (this.incrementoPorcentaje >= 100)? this.incrementoPorcentaje = 100 : this.incrementoPorcentaje += 20;
    this.setState({
        progreso: this.state.progreso.concat([progreso]),
        nro: this.state.nro + 1,
        pregunta: this.state.pregunta,
        respuestas:this.state.respuestas.concat([item]),
    });
    console.log(item);
  }
  render () {
    let i = this.state.nro;
   console.log( this.state.progreso[i]+"-"+i)
    const divStyle = {
        width: this.state.progreso[i]
      }
    if(i < this.state.pregunta.length){
    return (
      <div className="container text-center">
        <div className="row justify-content-xl-center ">
            <div className="col col-xl-12">
               <img src={this.state.pregunta[i].srcImg} className='img-fluid'/>
            </div>
        </div>
        <div className="cuestionario">
        <div className="progress">
            <div className="progress-bar" role="progressbar" style={divStyle} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div className="row justify-content-xl-center ">
            <div className="col-xl-12 col-sm-12">
                <h2>{this.state.pregunta[i].pregunta}</h2>
            </div>
        </div>
        <div className="row justify-content-xs-center ">
            <div className="col-xl-5 col-sm-5" onClick={e => this.handleClick(e)}>{this.state.pregunta[i].opciones[0]}</div>
            <div className="col-xl-5 col-sm-5" onClick={e => this.handleClick(e)}>{this.state.pregunta[i].opciones[1]}</div>
        </div>
        <div className="row justify-content-xs-center ">
            <div className="col-xl-5 col-sm-5" onClick={e => this.handleClick(e)}>{this.state.pregunta[i].opciones[2]}</div>
            <div className="col-xl-5 col-sm-5" onClick={e => this.handleClick(e)}>{this.state.pregunta[i].opciones[3]}</div>
        </div>
        </div>
    </div>
    );
    }else {
        console.log(this.state);
        const respuestas = this.state.respuestas.map((element, index) => {
            return ( <div key={index}><p>{index + 1}. {element.pregunta}:</p><p className='parrafoRespuesta'><strong> {element.rpta}</strong></p></div> )
        })
        return( <div className="container text-center">
                    <div className="row justify-content-xl-center ">
                        <div className="col col-xl-12">
                    <img src='assets/img/terminaste.gif' className='img-fluid'/>
            </div></div>
            <div className="cuestionario">
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={divStyle} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div><h2>Tus Respuestas son: </h2></div>
            <div className="selecciona">{respuestas}</div>
            <div><button >Resolver</button></div></div></div>);
    }
  }
}
const items = [{
                pregunta: "¿Cual fue el primer lenguaje de Programación?",
                opciones: ['tarjetas Perforadas / ADA', 'dev c++', 'FORTRAN ', 'Cobol'],
                srcImg: 'assets/img/lenguajeProgramacion.jpg',
                rptaCorrecta: 'tarjetas Perforadas / ADA'
            },
            {
                pregunta: "JQuery es: ",
                opciones: [
                    'Es un framework de javaScript',
                    'Es un IDE',
                    'Es una libreria de javascript',
                    'Es una API'
                ],
                srcImg: 'assets/img/jquery.gif',
                rptaCorrecta: 'Es una libreria de javascript'
            },
            {
                pregunta: "¿Quienes son Larry Page y Sergey Brin?",
                opciones: [
                    'Los creadores del motor de Google',
                    'Ganadores del premio novel de la paz',
                    'Compañeros Mark Zuckerberg',
                    'Fundadores de Amazon'
                ],
                srcImg: 'assets/img/fundadoresGoogle.jpg',
                rptaCorrecta: 'Los creadores del motor de Google'
            },
            {
                pregunta: "¿Qué año se creo facebook?",
                opciones: [
                    'En febrero de 2004',
                    'entre 2008 - 2010',
                    '10 marzo 2001',
                    '2005'
                ],
                srcImg: 'assets/img/facebook.png',
                rptaCorrecta: 'En febrero de 2004'
            },
            {
                pregunta: "Quien es Marissa Meyers",
                opciones: [
                    'CEO de Yahoo!, y quien logro triplicar su valor.',
                    'No fue la primera ingeniera mujer del equipo de GOOGLE',
                    'Es una atleta reconocida mundialmente',
                    'Es una modelo de la revista'
                ],
                srcImg: 'assets/img/marissa.jpg',
                rptaCorrecta: 'CEO de Yahoo!, y quien logro triplicar su valor.'
            }
        ];
ReactDOM.render(<Quiz cuestionario={items} />, document.getElementById("root"));