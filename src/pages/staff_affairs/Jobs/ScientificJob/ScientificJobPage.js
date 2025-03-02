import { useEffect, useState } from "react";
import FormCreate from "../../../../components/FormCreate";
import VEDbuttons from "../../../../components/VEDbuttons";
import { getAllData } from "../../../../api";

function ScientificJobPage(){
        const [scientificData,setScientificData] = useState([])
        useEffect(()=>{
            getAllData('http://localhost:3000/jobs/scientific').then(data=>setScientificData(data))
        })
    return(
        <>
            <FormCreate title="اضافة وظيفة علمية" />
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody className="table-light">
                {scientificData.length?(scientificData.map(e=>{
                        return(
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.subspecialty}</td>
                                <td><VEDbuttons  memberId={e.id} url='http://localhost:3000/jobs/scientific' /></td>
                            </tr>
                        )
                    })):(<tr><td colSpan={3}>Not Members FOund</td></tr>)}
                </tbody>
            </table>  
        </>
    );
}
export default ScientificJobPage;