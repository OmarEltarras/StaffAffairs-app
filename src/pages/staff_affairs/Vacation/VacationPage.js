import { useEffect, useState } from "react";
import FormCreate from "../../../components/FormCreate";
import VEDbuttons from "../../../components/VEDbuttons";
import { getAllData } from "../../../api";

function VacationPage(){
    const [vacationData,setVacationData] = useState([])
    useEffect(()=>{
            getAllData('http://localhost:3000/vacation').then(data=>setVacationData(data))
        })
    return(
        <>
            <FormCreate title="اضافة اجازة" />
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody className="table-light">
                {vacationData.length?(vacationData.map(e=>{
                        return(
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.vacationType}</td>
                                <td><VEDbuttons  memberId={e.id} url='http://localhost:3000/vacation' /></td>
                            </tr>
                        )
                    })):(<tr><td colSpan={3}>Not Members FOund</td></tr>)}
                </tbody>
            </table>  
        </>
    );
}
export default VacationPage;