import { useState } from "react";
import Table from "../Table";
import style from "./Form.module.css"

function Formulario() {

    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);

    function calculaImc() {
        const imc = peso / (altura * altura)
        return (
            imc
        )
    }
    
    return(
        <div>
            <h1 className={style.FormTitle}>Calculadora de IMC</h1>
            <form>
                <div>
                    <label className={style.FormLabel} htmlFor="altura">Digite a sua altura{'(em metros)'}:</label>
                    <input className={style.FormInput} placeholder="_.__" type="number" id="altura" onChange={evento => setAltura(evento.target.value)} />
                </div>
                <div>
                    <label className={style.FormLabel} htmlFor="peso">Digite o seu peso{'(em kg)'}:</label>
                    <input className={style.FormInput} placeholder="__.__" type="number" id="peso"   onChange={evento => setPeso(evento.target.value)}/>
                </div>
                <Table imc={calculaImc()}></Table>
            </form>
        </div>
    )

}

export default Formulario;