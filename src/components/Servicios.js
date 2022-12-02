import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const Servicios = () => {
    const [hora, setHora] = useState(0);
    const [state, setState] = useState(false);
    const [dias, setDias] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");

    let horario = {
        lunes: ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"],
        martes: ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"],
        miercoles: ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"],
        jueves: ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"],
        viernes: ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]
    }

    let dia = ["lunes", "martes", "miercoles", "jueves", "viernes"];

    const onChange = (e) => {
        if (e.target.name === "name") {
            setName(e.target.value);
            console.log(e.target.value);
        }
        else if (e.target.name === "email"){
            setEmail(e.target.value);
            console.log(e.target.value);

        }else if (e.target.name === "telefono"){
            setTel(e.target.value);
            console.log(e.target.value);
        }
        else if (e.target.name === "dia"){
            setDias(e.target.value);
            console.log(e.target.value);
        }

    };

    const onSubmit = (e) => {
        e.preventDefault();
        alert("Estos son tus datos: " +
            "Nombre: " + name+
        "\n Email: " + email+
        "\n telefono: " + tel+
        "\n Dia: " + "Mes ")
        setState(false)
    };

    return (
        <>
            {state === false ? (
                <div className='row align-content-center align-items-center'>
                    <div className="col-md-5 mb-5">
                        <div className="card">
                            <img
                                src='https://medlineplus.gov/images/BloodCountTests_Share.jpg'
                                alt="Analisis de Sangre"
                                className="card-img-top"
                            />
                            <div className="card-body text-primary">
                                <h1>Análisis de Sangre</h1>
                                <p>Se solicita que el cliente venga en ayunas y con ropa cómoda</p>
                                <button className={"btn btn-success"} onClick={() => setState(true)}
                                        name={"start"}>Seleccionar
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 mb-5">
                        <div className="card">
                            <div className={"img-square-wrapper"}>
                                <img
                                    src='https://como-funciona.co/wp-content/uploads/2022/04/Como-funciona-el-ultrasonido.jpg'
                                    alt="Ultrasonido"
                                    className="card-img-top"

                                />
                            </div>
                            <div className="card-body text-primary">
                                <h1>Ultrasonido</h1>
                                <p>Se solicita que el cliente venga con un acompañante y ropa cómoda</p>
                                <button className={"btn btn-success"} onClick={() => setState(true)}>Seleccionar
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 mb-5">
                        <div className="card">
                            <div className={"img-square-wrapper"}>
                                <img
                                    src='https://www.ergodinamica.com/wp-content/uploads/2019/05/electrodos.jpg'
                                    alt="reposo"
                                    className="card-img-top"

                                />
                            </div>
                            <div className="card-body text-primary">
                                <h1>Electrocardiograma en reposo</h1>
                                <p>Se solicita que el cliente venga ropa cómoda</p>
                                <button className={"btn btn-success"} onClick={() => setState(true)}>Seleccionar
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 mb-5">
                        <div className="card">
                            <div className={"img-square-wrapper"}>
                                <img
                                    src='https://www.sportlife.es/uploads/s1/10/97/88/21/prueba-de-esfuerzo-cua-l-hago-sin-ser-deportista-no-profesional.jpeg'
                                    alt="esfuerzo"
                                    className="card-img-top"
                                />
                            </div>
                            <div className="card-body text-primary">
                                <h1>Electrocardiograma en esfuerzo</h1>
                                <p>Se solicita que el cliente venga ropa cómoda</p>
                                <button className={"btn btn-success"} onClick={() => setState(true)}>Seleccionar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <form action={""} onSubmit={onSubmit}>
                    <div className="form-group text-white">
                        <label htmlFor="name"> Nombre </label>
                        <input name={"name"}
                               onChange={onChange}
                               className="form-control" id="name"/>
                    </div>
                    <div className="form-group text-white">
                        <label htmlFor="email">Email</label>
                        <input
                            name={"email"}
                            onChange={onChange}
                            type="email"
                            className="form-control"
                            placeholder="name@example.com"
                        />
                    </div>
                    <br/>
                    <div className="form-group text-white">
                        <select onChange={onChange}>
                            {dias.map((dia) => (
                                <option value={dia}> {dia} </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group text-white">
                        <label htmlFor="email">Telefono</label>
                        <input
                            type="text"
                            className="form-control"
                            name={"telefono"}
                            onChange={onChange}
                            placeholder="+52"
                        />
                    </div>
                    <br/>
                    <div className="form-group text-white">
                        <button className="form-control btn btn-primary" type="submit">
                            Terminar
                        </button>
                    </div>
                </form>
            )}
        </>
    );
}
export default Servicios;