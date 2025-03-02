import { useEffect, useState } from "react";
import FormCreate from "../../../components/FormCreate";
import VEDbuttons from "../../../components/VEDbuttons";
import { getAllData } from "../../../api";

function MainDataPage(){
    const [members,setMembers] = useState([])
    
    useEffect(()=>{
        getAllData('http://localhost:3000/staffmembers').then(data=>setMembers(data))
    },[])

    return(
        <>
            <FormCreate title="اضافة عضو جديد" />
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">NationaID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody className="table-light">
                    {members.length?(members.map(member=>{
                        return(
                            <tr key={member.id}>
                                <td>{member.id}</td>
                                <td>{member.memberName}</td>
                                <td><VEDbuttons  memberId={member.id} url='http://localhost:3000/staffmembers' routing="/maindata"/></td>
                            </tr>
                        )
                    })):(<tr><td colSpan={3}>Not Members FOund</td></tr>)}
                </tbody>
            </table>  
        </>
    );
}
export default MainDataPage;