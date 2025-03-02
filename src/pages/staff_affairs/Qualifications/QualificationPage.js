import { useEffect, useState } from "react";
import FormCreate from "../../../components/FormCreate";
import VEDbuttons from "../../../components/VEDbuttons";
import { getAllData } from "../../../api";

function QualificationPage(){
    const [qualification,setQualificationData] = useState([])
        useEffect(()=>{
            getAllData('http://localhost:3000/qualification').then(data=>setQualificationData(data))
        })
    return(
        <>
            <FormCreate title="اضافة مؤهل علمي" />
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody className="table-light">
                {qualification.length?(qualification.map(e=>{
                        return(
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.qualification}</td>
                                <td><VEDbuttons  memberId={e.id} url='http://localhost:3000/qualification' /></td>
                            </tr>
                        )
                    })):(<tr><td colSpan={3}>Not Members FOund</td></tr>)}
                </tbody>
            </table>  
        </>
    );
}
export default QualificationPage;