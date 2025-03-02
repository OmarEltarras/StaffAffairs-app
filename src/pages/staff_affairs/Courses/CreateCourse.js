import Input from "../../../components/Input";
import InputSelect from "../../../components/InputSelect";
import FormSubmit from "../../../components/FormSubmit";
import { useState } from "react";
import { useNavigate } from "react-router";
import { postData } from "../../../api";

function CreateCourse(){
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
    return(
        <form onSubmit={(e)=>{
                        e.preventDefault()
                        postData('http://localhost:3000/courses',courseData)
                        navigate('/courses')
                    }}>
            <div className='row'>
                <div className="col-md-12 col-lg-6">
                    <Input type="text" label="الرقم الكودي" id="natinalId" />
                    <Input type="text" label="كود الدورة" id="courseId" handleChange={(e=>setCourseData({...courseData,courseId:e.target.value}))}/>
                    <Input type="text" label="اسم الدورة او مجال الخبرات" id="courseName" handleChange={(e=>setCourseData({...courseData,courseName:e.target.value}))}/>
                    <Input type="date" label="تاريخ بداية الدورة" id="courseStartDate" handleChange={(e=>setCourseData({...courseData,courseStartDate:e.target.value}))}/>
                </div>
                <div className="col-md-12 col-lg-6">
                    <Input type="date" label="تاريخ نهاية الدورة" id="courseEndDate" handleChange={(e=>setCourseData({...courseData,courseEndDate:e.target.value}))}/>
                    <InputSelect  label="نوع الجهة" id="entityType" handleChange={(e=>setCourseData({...courseData,entityType:e.target.value}))}/>
                    <Input type="text" label="جهة الدورة" id="courseLocation" handleChange={(e=>setCourseData({...courseData,courseLocation:e.target.value}))}/>
                    <InputSelect  label="التقدير" id="rate" handleChange={(e=>setCourseData({...courseData,rate:e.target.value}))}/>
                </div>
            </div>
            <FormSubmit href="/courses" />
        </form>
    );
}
export default CreateCourse;