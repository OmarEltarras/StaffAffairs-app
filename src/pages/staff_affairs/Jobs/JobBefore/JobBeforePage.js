import { useEffect, useState } from "react";
import FormCreate from "../../../../components/FormCreate";
import VEDbuttons from "../../../../components/VEDbuttons";
import { getAllData } from "../../../../api";

function JobBeforePage(){
    const [jobBeforeData,setJobBeforeData] = useState([])
        useEffect(()=>{
            getAllData('http://localhost:3000/jobs/jobbefore').then(data=>setJobBeforeData(data))
        })
    return(
        <>
            <FormCreate title="اضافة وظيفة سابقة" />
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody className="table-light">
                {jobBeforeData.length?(jobBeforeData.map(e=>{
                        return(
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.jobType}</td>
                                <td><VEDbuttons  memberId={e.id} url='http://localhost:3000/jobs/jobbefore' /></td>
                            </tr>
                        )
                    })):(<tr><td colSpan={3}>Not Members FOund</td></tr>)}
                </tbody>
            </table>  
        </>
    );
}
export default JobBeforePage;