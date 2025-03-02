import Input from "../../../../components/Input";
import InputCheckbox from "../../../../components/InputCheckbox";
import InputSelect from "../../../../components/InputSelect";
import FormSubmit from "../../../../components/FormSubmit";
import { useState } from "react";
import { postData } from "../../../../api";
import { useNavigate } from "react-router";

function CreateSupervisoryJob(){
    const [supervisoryData,setSupervisoryData] = useState({
        nationalId:'',
        supervisoryJob:'',
        currentJob:'',
        onWork:'',
        jobDescription:'',
        university:'',
        college:''
    })
    let navigate = useNavigate()
    return(
        <form onSubmit={(e)=>{
            e.preventDefault()
            postData('http://localhost:3000/jobs/supervisory',supervisoryData)
            navigate('/jobs/supervisory')
        }}>
            <div className='row'>
                <div className="col-md-12 col-lg-6">
                    <Input type="text" label="الرقم الكودي" id="nationalId"  handleChange={e=>setSupervisoryData({...supervisoryData,supervisoryJob:e.target.value})}/>
                    <InputSelect  label="الوظيفة" id="supervisoryJob" handleChange={e=>setSupervisoryData({...supervisoryData,supervisoryJob:e.target.value})}/>
                    <InputCheckbox label="الوظيفة الحالية" id="currentJob" handleChange={e=>setSupervisoryData({...supervisoryData,currentJob:e.target.value})}/>
                    <InputCheckbox label="قائم بعمل" id="onWork" handleChange={e=>setSupervisoryData({...supervisoryData,onWork:e.target.value})}/>
                </div>
                <div className="col-md-12 col-lg-6">
                    <Input type="text" label="بيان الوظيفة" id="jobDescription" handleChange={e=>setSupervisoryData({...supervisoryData,jobDescription:e.target.value})}/>
                    <InputSelect  label="الجامعة" id="university" handleChange={e=>setSupervisoryData({...supervisoryData,university:e.target.value})}/>
                    <InputSelect  label="الكلية" id="college" handleChange={e=>setSupervisoryData({...supervisoryData,college:e.target.value})}/>
                </div>
            </div>
            <FormSubmit href='/staffaffairs/jobs/supervisory' />
        </form>
    );
}
export default CreateSupervisoryJob;