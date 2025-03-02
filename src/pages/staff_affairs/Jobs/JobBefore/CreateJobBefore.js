import { useNavigate } from "react-router";
import { postData } from "../../../../api";
import FormSubmit from "../../../../components/FormSubmit";
import Input from "../../../../components/Input";
import InputSelect from "../../../../components/InputSelect";
import { useState } from "react";

function CreateJobBefore(){
    const [jobBeforeData,setJobBeforeData] = useState({
        nationalId:'',
        jobType:'',
        jobDescription:'',
        jobLocation:'',
        jobStartDate:'',
        jobEndDate:'',
        decisionNumber:'',
        decisionDate:''
    })
    let navigate = useNavigate()
    return(
        <form onSubmit={(e)=>{
                        e.preventDefault()
                        postData('http://localhost:3000/jobs/jobbefore',jobBeforeData)
                        navigate('/jobs/jobbefore')
                    }}>
            <div className='row'>
                <div className="col-md-12 col-lg-6">
                    <Input type="text" label="الرقم الكودي" id="nationalId" handleChange={(e)=>setJobBeforeData({...jobBeforeData,nationalId:e.target.value})}/>
                    <InputSelect  label="الوظيفة" id="jobType" handleChange={(e)=>setJobBeforeData({...jobBeforeData,jobType:e.target.value})}/>
                    <Input type="text" label="بيان الوظيفة" id="jobDescription" handleChange={(e)=>setJobBeforeData({...jobBeforeData,jobDescription:e.target.value})}/>
                    <Input type="text" label="الجهة" id="jobLocation" handleChange={(e)=>setJobBeforeData({...jobBeforeData,jobLocation:e.target.value})}/>
                </div>
                <div className="col-md-12 col-lg-6">
                    <Input type="date" label="تاريخ شغلها" id="jobStartDate" handleChange={(e)=>setJobBeforeData({...jobBeforeData,jobStartDate:e.target.value})}/>
                    <Input type="date" label="تاريخ النهاية" id="jobEndDate" handleChange={(e)=>setJobBeforeData({...jobBeforeData,jobEndDate:e.target.value})}/>
                    <Input type="text" label="رقم القرار" id="decisionNumber" handleChange={(e)=>setJobBeforeData({...jobBeforeData,decisionNumber:e.target.value})}/>
                    <Input type="date" label="تاريخ القرار" id="decisionDate" handleChange={(e)=>setJobBeforeData({...jobBeforeData,decisionDate:e.target.value})}/>
                </div>
            </div>
            <FormSubmit href="/jobs/jobbefore" />
        </form>
    );
}
export default CreateJobBefore;