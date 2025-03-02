import { useEffect, useState } from "react";
import FormCreate from "../../../components/FormCreate";
import VEDbuttons from "../../../components/VEDbuttons";
import { getAllData } from "../../../api";

function PunishmenPage(){
    const [punishmentData,setPunishmentData] = useState([])
    useEffect(()=>{
            getAllData('http://localhost:3000/punishment').then(data=>setPunishmentData(data))
        })
    return(
        <>
            <FormCreate title="اضافة جزاء" />
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody className="table-light">
                {punishmentData.length?(punishmentData.map(e=>{
                        return(
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.punishmentDescription}</td>
                                <td><VEDbuttons  memberId={e.id} url='http://localhost:3000/punishment' /></td>
                            </tr>
                        )
                    })):(<tr><td colSpan={3}>Not Members FOund</td></tr>)}
                </tbody>
            </table>  
        </>
    );
}
export default PunishmenPage;