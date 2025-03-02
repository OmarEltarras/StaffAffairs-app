import { useEffect, useState } from "react";
import FormEdit from "../../../components/FormEdit";
import Input from "../../../components/Input";
import InputSelect from "../../../components/InputSelect";
import { useNavigate, useParams } from "react-router";
import { getSpeicificData, putData } from "../../../api";

function EditVacation(){
    const {mid} = useParams()
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
    useEffect(()=>{
                getSpeicificData('http://localhost:3000/vacation',mid).then(data=>setVacationData(data))
            },[mid])
    let navigate = useNavigate()
    return(
        <form onSubmit={(e)=>{
                            e.preventDefault()
                            putData('http://localhost:3000/vacation',mid,vacationData)
                            navigate('/vacation')   
                        }}>
            <div className="row">
                <div className="col-md-12 col-lg-6">
                    <Input type="text" label="الرقم الكودي" id="nationalId" handleChange={(e)=>setVacationData({...vacationData,nationalId:e.target.value})}/>
                    <InputSelect  label="نوع الاجازة" id="vactionType" handleChange={(e)=>setVacationData({...vacationData,vactionType:e.target.value})} value={vacationData.vactionType}/>
                    <Input type="text" label="الجهة" id="vactionLocation" handleChange={(e)=>setVacationData({...vacationData,vactionLocation:e.target.value})} value={vacationData.vactionLocation}/>
                    <Input type="text" label="بيان الاجازة" id="vacationDescription" handleChange={(e)=>setVacationData({...vacationData,vacationDescription:e.target.value})} value={vacationData.vacationDescription}/>
                </div>
                <div className="col-md-12 col-lg-6">
                    <Input type="date" label="تاريخ بداية الاجازة" id="vacationStartDate" handleChange={(e)=>setVacationData({...vacationData,vacationStartDate:e.target.value})} value={vacationData.vacationStartDate}/>
                    <Input type="date" label="تاريخ نهاية الاجازة" id="vacationEndDate" handleChange={(e)=>setVacationData({...vacationData,vacationEndDate:e.target.value})} value={vacationData.vacationEndDate}/>
                    <Input type="text" label="رقم القرار" id="decisionNumber" handleChange={(e)=>setVacationData({...vacationData,decisionNumber:e.target.value})} value={vacationData.decisionNumber}/>
                    <Input type="date" label="تاريخ القرار" id="decisionDate" handleChange={(e)=>setVacationData({...vacationData,decisionDate:e.target.value})} value={vacationData.decisionDate}/>
                </div>
            </div>
            <FormEdit href="/staffaffairs/vacation" />
        </form>
    );
}
export default EditVacation;