import Input from "../../../../components/Input";
import InputSelect from "../../../../components/InputSelect";
import FormSubmit from "../../../../components/FormSubmit";
import { useState } from "react";
import { postData } from "../../../../api";
import { useNavigate } from "react-router";

function CreateMandate(){
    const [mandateData,setMandateData] = useState({
        nationalId:'',
        mandateType:'',
        mandateLocation:"",
        mandateUniversity:"",
        mandateDescription:'',
        mandateStartDate:'',
        mandateEndDate:'',
        decisionNumber:'',
        decisionDate:''
    })
    let navigate = useNavigate()
    return(
        <form onSubmit={(e)=>{
            e.preventDefault()
            postData('http://localhost:3000/jobs/mandata',mandateData)
            navigate('/jobs/mandate')
        }}>
            <div className='row'>
                <div className="col-md-12 col-lg-6">
                    <Input type="text" label="الرقم الكودي" id="nationalId" handleChange={(e)=>setMandateData({...mandateData,nationalId:e.target.value})}/>
                    <Input type="text" label="المسلسل"/>
                    <InputSelect  label="نوع الانتداب" id="mandateType" handleChange={(e)=>setMandateData({...mandateData,mandateType:e.target.value})}/>
                    <Input type="text" label="جهة الانتداب" id="mandateLocation" handleChange={(e)=>setMandateData({...mandateData,mandateLocation:e.target.value})}/>
                    <Input type="text" label="الجامعة المنتدب لها" id="mandateUniversity" handleChange={(e)=>setMandateData({...mandateData,mandateUniversity:e.target.value})}/>
                </div>
                <div className="col-md-12 col-lg-6">
                    <Input type="text" label="بيان الانتدب" id="mandateDescription" handleChange={(e)=>setMandateData({...mandateData,mandateDescription:e.target.value})}/>
                    <Input type="date" label="تاريخ البداية" id="mandateStartDate" handleChange={(e)=>setMandateData({...mandateData,mandateStartDate:e.target.value})}/>
                    <Input type="date" label="تاريخ النهاية" id="mandateEndDate" handleChange={(e)=>setMandateData({...mandateData,mandateEndDate:e.target.value})}/>
                    <Input type="text" label="رقم القرار" id="decisionNumber" handleChange={(e)=>setMandateData({...mandateData,decisionNumber:e.target.value})}/>
                    <Input type="date" label="تاريخ القرار" id="decisionDate" handleChange={(e)=>setMandateData({...mandateData,decisionDate:e.target.value})}/>
                </div>
            </div>
            <FormSubmit href="/jobs/mandate" />
        </form>
    );
}
export default CreateMandate;