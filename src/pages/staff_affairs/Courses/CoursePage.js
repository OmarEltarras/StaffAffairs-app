import { useEffect, useState } from "react";
import FormCreate from "../../../components/FormCreate";
import VEDbuttons from "../../../components/VEDbuttons";
import { getAllData } from "../../../api";

function CoursePage(){
    const [courseData,setCourseData] = useState([])

    useEffect(()=>{
            getAllData('http://localhost:3000/courses').then(data=>setCourseData(data))
        })
    return(
        <>
            <FormCreate title="اضافة دورة تدريبية" />
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody className="table-light">
                                        
                {courseData.length?(courseData.map(e=>{
                        return(
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.courseName}</td>
                                <td><VEDbuttons  memberId={e.id} url='http://localhost:3000/courses' /></td>
                            </tr>
                        )
                    })):(<tr><td colSpan={3}>Not Members FOund</td></tr>)}
                </tbody>
            </table>  
        </>
    );
}
export default CoursePage;