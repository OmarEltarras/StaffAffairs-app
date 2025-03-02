import Input from "../../../../components/Input";
import InputCheckbox from "../../../../components/InputCheckbox";
import InputSelect from "../../../../components/InputSelect";
import FormEdit from "../../../../components/FormEdit";
import { useEffect, useState } from "react";
import { getSpeicificData, putData } from "../../../../api";
import { useNavigate, useParams } from "react-router";

function EditSupervisoryJob(){
    const {mid} = useParams()
    const [supervisoryData,setSupervisoryData] = useState({
        nationalId:'',
        supervisoryJob:'',
        currentJob:'',
        onWork:'',
        jobDescription:'',
        university:'',
        college:''
})
useEffect(()=>{
            getSpeicificData('http://localhost:3000/jobs/supervisory',mid).then(data=>setSupervisoryData(data))
        },[mid])
let navigate = useNavigate()
return(
    <form onSubmit={(e)=>{
                        e.preventDefault()
                        putData('http://localhost:3000/jobs/supervisory',mid,supervisoryData)
                        navigate('/jobs/supervisory')   
                    }}>
        <div className='row'>
            <div className="col-md-12 col-lg-6">
                <Input type="text" label="الرقم الكودي" id="nationalId"  handleChange={e=>setSupervisoryData({...supervisoryData,supervisoryJob:e.target.value})}/>
                <InputSelect  label="الوظيفة" id="supervisoryJob" handleChange={e=>setSupervisoryData({...supervisoryData,supervisoryJob:e.target.value})} value={supervisoryData.supervisoryJob}/>
                <InputCheckbox label="الوظيفة الحالية" id="currentJob" handleChange={e=>setSupervisoryData({...supervisoryData,currentJob:e.target.value})} value={supervisoryData.currentJob}/>
                <InputCheckbox label="قائم بعمل" id="onWork" handleChange={e=>setSupervisoryData({...supervisoryData,onWork:e.target.value})} value={supervisoryData.onWork}/>
            </div>
            <div className="col-md-12 col-lg-6">
                <Input type="text" label="بيان الوظيفة" id="jobDescription" handleChange={e=>setSupervisoryData({...supervisoryData,jobDescription:e.target.value})} value={supervisoryData.jobDescription}/>
                <InputSelect  label="الجامعة" id="university" handleChange={e=>setSupervisoryData({...supervisoryData,university:e.target.value})} value={supervisoryData.university}/>
                <InputSelect  label="الكلية" id="college" handleChange={e=>setSupervisoryData({...supervisoryData,college:e.target.value})} value={supervisoryData.college}/>
            </div>
        </div>
        <FormEdit href='/staffaffairs/jobs/supervisory' />
    </form>
);
}
export default EditSupervisoryJob;