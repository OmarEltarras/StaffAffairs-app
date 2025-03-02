import { useState } from "react";
import FormSubmit from "../../../components/FormSubmit";
import Input from "../../../components/Input";
import InputSelect from "../../../components/InputSelect";
import { postData } from "../../../api";
import { useNavigate } from "react-router";

function AddVacation(){
    const [vacationData,setVacationData] = useState({
        nationalId:'',
        vacationType:'',
        vacationLocation:'',
        vacationDescription:'',
        vacationStartDate:'',
        vacationEndDate:'',
        decisionNumber:'',
        decisionDate:''
    })
    let navigate = useNavigate()
    return(
        <form onSubmit={(e)=>{
                        e.preventDefault()
                        postData('http://localhost:3000/vacation',vacationData)
                        navigate('/vacation')
                    }}>
            <div className="row">
                <div className="col-md-12 col-lg-6">
                    <Input type="text" label="الرقم الكودي" id="nationalId" handleChange={(e)=>setVacationData({...vacationData,nationalId:e.target.value})}/>
                    <InputSelect  label="نوع الاجازة" id="vacationType" handleChange={(e)=>setVacationData({...vacationData,vacationType:e.target.value})}/>
                    <Input type="text" label="الجهة" id="vacationLocation" handleChange={(e)=>setVacationData({...vacationData,vacationLocation:e.target.value})}/>
                    <Input type="text" label="بيان الاجازة" id="vacationDescription" handleChange={(e)=>setVacationData({...vacationData,vacationDescription:e.target.value})}/>
                </div>
                <div className="col-md-12 col-lg-6">
                    <Input type="date" label="تاريخ بداية الاجازة" id="vacationStartDate" handleChange={(e)=>setVacationData({...vacationData,vacationStartDate:e.target.value})}/>
                    <Input type="date" label="تاريخ نهاية الاجازة" id="vacationEndDate" handleChange={(e)=>setVacationData({...vacationData,vacationEndDate:e.target.value})}/>
                    <Input type="text" label="رقم القرار" id="decisionNumber" handleChange={(e)=>setVacationData({...vacationData,decisionNumber:e.target.value})}/>
                    <Input type="date" label="تاريخ القرار" id="decisionDate" handleChange={(e)=>setVacationData({...vacationData,decisionDate:e.target.value})}/>
                </div>
            </div>
            <FormSubmit href="/staffaffairs/vacation" />
        </form>
    );
}
export default AddVacation;