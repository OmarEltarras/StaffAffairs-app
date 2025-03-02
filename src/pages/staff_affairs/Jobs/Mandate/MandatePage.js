import { useEffect, useState } from "react";
import FormCreate from "../../../../components/FormCreate";
import VEDbuttons from "../../../../components/VEDbuttons";
import { getAllData } from "../../../../api";

function MandatePage(){
        const [mandataData,setMandataData] = useState([])
        useEffect(()=>{
            getAllData('http://localhost:3000/jobs/mandata').then(data=>setMandataData(data))
        })
    return(
        <>
            <FormCreate title="اضافة انتداب" />
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody className="table-light">
                {mandataData.length?(mandataData.map(e=>{
                        return(
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.mandataType}</td>
                                <td><VEDbuttons  memberId={e.id} url='http://localhost:3000/jobs/mandata' /></td>
                            </tr>
                        )
                    })):(<tr><td colSpan={3}>Not Members FOund</td></tr>)}
                </tbody>
            </table>  
        </>
    );
}
export default MandatePage;