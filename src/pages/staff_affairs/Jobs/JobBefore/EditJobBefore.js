import Input from "../../../../components/Input";
import InputSelect from "../../../../components/InputSelect";
import FormEdit from "../../../../components/FormEdit";
import { useEffect, useState } from "react";
import { getSpeicificData, putData } from "../../../../api";
import { useNavigate, useParams } from "react-router";

function EditJobBefore(){
    const {mid} = useParams()
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
    useEffect(()=>{
                getSpeicificData('http://localhost:3000/jobs/jobbefore',mid).then(data=>setJobBeforeData(data))
            },[mid])
    let navigate = useNavigate()
    return(
        <form onSubmit={(e)=>{
                            e.preventDefault()
                            putData('http://localhost:3000/jobs/jobbefore',mid,jobBeforeData)
                            navigate('/jobs/jobbefore')   
                        }}>
            <div className='row'>
                <div className="col-md-12 col-lg-6">
                    <Input type="text" label="الرقم الكودي" id="nationalId" handleChange={(e)=>setJobBeforeData({...jobBeforeData,nationalId:e.target.value})}/>
                    <InputSelect  label="الوظيفة" id="jobType" handleChange={(e)=>setJobBeforeData({...jobBeforeData,jobType:e.target.value})} value={jobBeforeData.jobType}/>
                    <Input type="text" label="بيان الوظيفة" id="jobDescription" handleChange={(e)=>setJobBeforeData({...jobBeforeData,jobDescription:e.target.value})} value={jobBeforeData.jobDescription}/>
                    <Input type="text" label="الجهة" id="jobLocation" handleChange={(e)=>setJobBeforeData({...jobBeforeData,jobLocation:e.target.value})} value={jobBeforeData.jobLocation}/>
                </div>
                <div className="col-md-12 col-lg-6">
                    <Input type="date" label="تاريخ شغلها" id="jobStartDate" handleChange={(e)=>setJobBeforeData({...jobBeforeData,jobStartDate:e.target.value})} value={jobBeforeData.jobStartDate}/>
                    <Input type="date" label="تاريخ النهاية" id="jobEndDate" handleChange={(e)=>setJobBeforeData({...jobBeforeData,jobEndDate:e.target.value})} value={jobBeforeData.jobEndDate}/>
                    <Input type="text" label="رقم القرار" id="decisionNumber" handleChange={(e)=>setJobBeforeData({...jobBeforeData,decisionNumber:e.target.value})} value={jobBeforeData.decisionNumber}/>
                    <Input type="date" label="تاريخ القرار" id="decisionDate" handleChange={(e)=>setJobBeforeData({...jobBeforeData,decisionDate:e.target.value})} value={jobBeforeData.decisionDate}/>
                </div>
            </div>
            <FormEdit href="/jobs/jobbefore" />
        </form>
    );
}
export default EditJobBefore;