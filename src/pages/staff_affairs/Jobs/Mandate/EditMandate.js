import Input from "../../../../components/Input";
import InputSelect from "../../../../components/InputSelect";
import FormEdit from "../../../../components/FormEdit";
import { useEffect, useState } from "react";
import { getSpeicificData, putData } from "../../../../api";
import { useNavigate, useParams } from "react-router";

function EditMandate(){
    const {mid} = useParams()
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
    useEffect(()=>{
                getSpeicificData('http://localhost:3000/jobs/mandata',mid).then(data=>setMandateData(data))
            },[mid])
    let navigate = useNavigate()
    return(
        <form onSubmit={(e)=>{
            e.preventDefault()
            putData('http://localhost:3000/jobs/mandata',mid,mandateData)
            navigate('/jobs/mandata')   
        }}>
            <div className='row'>
                <div className="col-md-12 col-lg-6">
                    <Input type="text" label="الرقم الكودي" id="nationalId" handleChange={(e)=>setMandateData({...mandateData,nationalId:e.target.value})}/>
                    <Input type="text" label="المسلسل"/>
                    <InputSelect  label="نوع الانتداب" id="mandateType" handleChange={(e)=>setMandateData({...mandateData,mandateType:e.target.value})} value={mandateData.mandateType}/>
                    <Input type="text" label="جهة الانتداب" id="mandateLocation" handleChange={(e)=>setMandateData({...mandateData,mandateLocation:e.target.value})} value={mandateData.mandateLocation}/>
                    <Input type="text" label="الجامعة المنتدب لها" id="mandateUniversity" handleChange={(e)=>setMandateData({...mandateData,mandateUniversity:e.target.value})} value={mandateData.mandateUniversity}/>
                </div>
                <div className="col-md-12 col-lg-6">
                    <Input type="text" label="بيان الانتدب" id="mandateDescription" handleChange={(e)=>setMandateData({...mandateData,mandateDescription:e.target.value})} value={mandateData.mandateDescription}/>
                    <Input type="date" label="تاريخ البداية" id="mandateStartDate" handleChange={(e)=>setMandateData({...mandateData,mandateStartDate:e.target.value})} value={mandateData.mandateStartDate}/>
                    <Input type="date" label="تاريخ النهاية" id="mandateEndDate" handleChange={(e)=>setMandateData({...mandateData,mandateEndDate:e.target.value})} value={mandateData.mandateEndDate}/>
                    <Input type="text" label="رقم القرار" id="decisionNumber" handleChange={(e)=>setMandateData({...mandateData,decisionNumber:e.target.value})} value={mandateData.decisionNumber}/>
                    <Input type="date" label="تاريخ القرار" id="decisionDate" handleChange={(e)=>setMandateData({...mandateData,decisionDate:e.target.value})} value={mandateData.decisionDate}/>
                </div>
            </div>
            <FormEdit href="/jobs/mandate" />
        </form>
    );
}
export default EditMandate;