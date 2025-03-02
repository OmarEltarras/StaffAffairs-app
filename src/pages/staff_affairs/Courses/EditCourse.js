import { useEffect, useState } from "react";
import FormEdit from "../../../components/FormEdit";
import Input from "../../../components/Input";
import InputSelect from "../../../components/InputSelect";
import { getSpeicificData, putData } from "../../../api";
import { useNavigate, useParams } from "react-router";

function EditCourse(){
    const {mid} = useParams()
    const [courseData,setCourseData] = useState({
        courseId:'',
        courseName:'',
        courseStartDate:'',
        courseEndDate:'',
        entityType:'',
        courseLocation:'',
        rate:''
    })
    let navigate = useNavigate()
    useEffect(()=>{
            getSpeicificData('http://localhost:3000/courses',mid).then(data=>setCourseData(data))
        },[mid])
    return(
        <form onSubmit={(e)=>{
                    e.preventDefault()
                    putData('http://localhost:3000/courses',mid,courseData)
                    navigate('/courses')   
                }}>
            <div className='row'>
                <div className="col-md-12 col-lg-6">
                    <Input type="text" label="الرقم الكودي"/>
                    <Input type="text" label="كود الدورة" id="courseId" handleChange={(e=>setCourseData({...courseData,courseId:e.target.value}))} value={courseData.courseId}/>
                    <Input type="text" label="اسم الدورة او مجال الخبرات" id="courseName" handleChange={(e=>setCourseData({...courseData,courseName:e.target.value}))} value={courseData.courseName}/>
                    <Input type="date" label="تاريخ بداية الدورة" id="courseStartDate" handleChange={(e=>setCourseData({...courseData,courseStartDate:e.target.value}))} value={courseData.courseStartDate}/>
                </div>
                <div className="col-md-12 col-lg-6">
                    <Input type="date" label="تاريخ نهاية الدورة" id="courseEndDate" handleChange={(e=>setCourseData({...courseData,courseEndDate:e.target.value}))} value={courseData.courseEndDate}/>
                    <InputSelect  label="نوع الجهة" id="entityType" handleChange={(e=>setCourseData({...courseData,entityType:e.target.value}))} value={courseData.entityType}/>
                    <Input type="text" label="جهة الدورة" id="courseLocation" handleChange={(e=>setCourseData({...courseData,courseLocation:e.target.value}))} value={courseData.courseLocation}/>
                    <InputSelect  label="التقدير" id="rate" handleChange={(e=>setCourseData({...courseData,rate:e.target.value}))} value={courseData.rate}/>
                </div>
            </div>
            <FormEdit href="/staffaffairs/courses" />
        </form>
    );
}
export default EditCourse;