import { useEffect, useState } from 'react'
import styles from './Table.module.css'

const Table = ({imc}) => {
    const [id1, setId1] = useState(0);
    const [id2, setId2] = useState(0);
    const [id3, setId3] = useState(0);
    const [id4, setId4] = useState(0);
    const [id5, setId5] = useState(0);
    const [id6, setId6] = useState(0);

    useEffect(() =>{
        setId1(false);
        setId2(false);
        setId3(false);
        setId4(false);
        setId5(false);
        setId6(false);
        
        if(imc == 0){
            
        }
        else if(imc < 18.5){
           setId1(true)
           console.log('aasad')
        }
        else if(imc < 24.9){
            setId2(true)
         } 
         else if(imc < 29.9){
            setId3(true)
         } 
        else  if(imc < 34.9){
            setId4(true)
         } 
        else if(imc < 39.9){
            setId5(true)
         }
         else if(imc > 40){
            setId6(true)
         }   
    })
    return(
        <div>
            <hr />
            <h3 className={styles.Title}>Resultado:</h3>
            <div>
                <p>O IMC calculado foi de: {(imc).toFixed(2)}, que representa:</p>
            </div>
            <table className={styles.Table}>
                <thead>
                    <tr>
                        <th>
                            IMC
                        </th>
                        <th>
                            Classificação
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr id="1" className={id1 ? styles.active : styles.notActive}>
                        <td>
                            Abaixo de 18,5
                        </td>
                        <td>
                            Abaixo do peso
                        </td>
                    </tr>
                    <tr id="2" className={id2 ? styles.active : styles.notActive}>
                        <td>
                            Entre 18,6 e 24,9
                        </td>
                        <td>
                            Peso ideal
                        </td>
                    </tr>
                    <tr id="3" className={id3 ? styles.active : styles.notActive}> 
                        <td>
                            Entre 25,0 e 29,9
                        </td>
                        <td>
                            Sobrepeso
                        </td>
                    </tr>
                    <tr id="4" className={id4 ? styles.active : styles.notActive}>
                        <td>
                            Entre 30,0 e 34,9
                        </td>
                        <td>
                            Obesidade grau I
                        </td>
                    </tr>
                    <tr id="5" className={id5 ? styles.active : styles.notActive}>
                        <td>
                            Entre 35,0 e 39,9
                        </td>
                        <td>
                            Obesidade grau II
                        </td>
                    </tr>
                    <tr id="6" className={id6 ? styles.active : styles.notActive}>
                        <td>
                            Acima de 40
                        </td>
                        <td>
                            Obesidade grau III{'(Mórbida)'}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table