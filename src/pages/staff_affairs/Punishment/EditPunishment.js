import { useEffect, useState } from "react";
import FormEdit from "../../../components/FormEdit";
import Input from "../../../components/Input";
import InputCheckbox from "../../../components/InputCheckbox";
import InputSelect from "../../../components/InputSelect";
import { useNavigate, useParams } from "react-router";
import { getSpeicificData, putData } from "../../../api";

function EditPunishment(){
    const {mid} = useParams()
    const [punishmentData,setPunishmentData] = useState({
        nationalId:'',
        punishmentType:'',
        punishmentDescription:'',
        punishmentStartDate:'',
        punishmentEndDate:'',
        decisionNumber:'',
        decisionDate:'',
        removePunishment:'',
        removeReason:'',
        decisionNumber2:'',
        decisionDate2:''
    })
    useEffect(()=>{
                getSpeicificData('http://localhost:3000/punishment',mid).then(data=>setPunishmentData(data))
            },[mid])
    let navigate = useNavigate()
    return(
            <form onSubmit={(e)=>{
                                e.preventDefault()
                                putData('http://localhost:3000/punishment',mid,punishmentData)
                                navigate('/punishment')   
                            }}>
                <fieldset >
                    <legend>تطبيق الجزاء</legend>
                    <div className="row mb-5">
                        <div className="col-md-12 col-lg-6">
                            <Input type="text" label="الرقم الكودي" handleChange={(e)=>setPunishmentData({...punishmentData,nationalId:e.target.value})}/>
                            <InputSelect  label="نوع الجزاء" id="punishmentType" handleChange={(e)=>setPunishmentData({...punishmentData,punishmentType:e.target.value})} value={punishmentData.punishmentType}/>
                            <Input type="text" label="بيان الجزاء" id="punishmentDescription" handleChange={(e)=>setPunishmentData({...punishmentData,punishmentDescription:e.target.value})} value={punishmentData.punishmentDescription}/>
                            <Input type="date" label="ت. بداية الجزاء" id="punishmentStartDate" handleChange={(e)=>setPunishmentData({...punishmentData,punishmentStartDate:e.target.value})} value={punishmentData.punishmentStartDate}/>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <Input type="date" label="ت. نهاية الجزاء" id="punishmentEndDate" handleChange={(e)=>setPunishmentData({...punishmentData,punishmentEndDate:e.target.value})} value={punishmentData.punishmentEndDate}/>
                            <Input type="text" label="رقم القرار" id="decisionNumber" handleChange={(e)=>setPunishmentData({...punishmentData,decisionNumber:e.target.value})} value={punishmentData.decisionNumber}/>
                            <Input type="date" label="تاريخ القرار" id="decisionDate" handleChange={(e)=>setPunishmentData({...punishmentData,decisionDate:e.target.value})} value={punishmentData.decisionDate}/>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>محو الجزاء</legend>
                    <div className="row mb-5">
                        <div className="col-md-12 col-lg-6">
                            <InputCheckbox label="محو الجزاء" id="removePunishment" handleChange={(e)=>setPunishmentData({...punishmentData,removePunishment:e.target.value})} value={punishmentData.removePunishment}/>
                            <Input type="text" label="سبب محو الجزاء" id="removeReason" handleChange={(e)=>setPunishmentData({...punishmentData,removeReason:e.target.value})} value={punishmentData.removeReason}/>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <Input type="text" label="رقم القرار" id="decisionNumber2" handleChange={(e)=>setPunishmentData({...punishmentData,decisionNumber2:e.target.value})} value={punishmentData.decisionNumber2}/>
                            <Input type="date" label="تاريخ القرار" id="decisionDate2" handleChange={(e)=>setPunishmentData({...punishmentData,decisionDate2:e.target.value})} value={punishmentData.decisionDate2}/>
                        </div>
                    </div>
                </fieldset>
                <FormEdit href="/staffaffairs/punishment" />
            </form>
        );
}
export default EditPunishment;