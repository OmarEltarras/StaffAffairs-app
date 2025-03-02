import { useEffect, useState } from "react";
import FormCreate from "../../../components/FormCreate";
import VEDbuttons from "../../../components/VEDbuttons";
import { getAllData } from "../../../api";

function CertificatesPage(){
    const [certificateData,setCertificateData] = useState([])
    useEffect(()=>{
        getAllData('http://localhost:3000/certificatesofoperation').then(data=>setCertificateData(data))
    })
    return(
        <>
            <FormCreate title="اضافة شهادة تقديرية" />
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody className="table-light">
                    
                {certificateData.length?(certificateData.map(e=>{
                        return(
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.certificateName}</td>
                                <td><VEDbuttons  memberId={e.id} url='http://localhost:3000/certificatesofoperation' /></td>
                            </tr>
                        )
                    })):(<tr><td colSpan={3}>Not Members FOund</td></tr>)}
                </tbody>
            </table>  
        </>
    );
}
export default CertificatesPage;