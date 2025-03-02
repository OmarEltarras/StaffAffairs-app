import Input from "../../../components/Input";
import InputSelect from "../../../components/InputSelect";
import FormEdit from "../../../components/FormEdit";
import { useEffect, useState } from "react";
import { getSpeicificData, putData } from "../../../api";
import { useNavigate, useParams } from "react-router";

function EditFamilyMember(){    
    const {mid} = useParams()
    const [familyData,setFamilyData] = useState({
    relationName:'',
    gender:'',
    relationDegree:'',
    cardNumber:'',
    nationalId:'',
    birthDate:"",
    birthLocation:'',
    acadamicQualification:'',
    personJob:''
})
let navigate = useNavigate()
useEffect(()=>{
            getSpeicificData('http://localhost:3000/family',mid).then(data=>familyData(data))
        },[mid])
return(
    <form onSubmit={(e)=>{
                        e.preventDefault()
                        putData('http://localhost:3000/family',mid,familyData)
                        navigate('/family')   
                    }}>
        <div className='row'>
            <div className="col-md-12 col-lg-6">
                <Input type="text" label="الرقم الكودي"/>
                <Input type="text" label="المسلسل"/>
                <Input type="text" label="الاسم" id="relationName" handleChange={(e)=>{setFamilyData({...familyData,relationName:e.target.value})}} />
                <InputSelect  label="النوع" id="gender" handleChange={(e)=>setFamilyData({...familyData,gender:e.target.value})} value={familyData.gender}/>
                <InputSelect  label="درجة القرابة" id="relationDegree" handleChange={(e)=>setFamilyData({...familyData,relationDegree:e.target.value})} value={familyData.gender}/>
                <Input type="text" label="رقم البطاقة" id="cardNumber" handleChange={(e)=>setFamilyData({...familyData,cardNumber:e.target.value})} value={familyData.relationDegree}/>
            </div>
            <div className="col-md-12 col-lg-6">
                <Input type="text" label="الرقم القومي" id="nationalId" handleChange={(e)=>setFamilyData({...familyData,nationalId:e.target.value})} value={familyData.nationalId}/>
                <Input type="date" label="تاريخ الميلاد" id="birthDate" handleChange={(e)=>setFamilyData({...familyData,birthDate:e.target.value})} value={familyData.birthDate}/>
                <Input type="text" label="محل الميلاد" id="birthLocation" handleChange={(e)=>setFamilyData({...familyData,birthLocation:e.target.value})} value={familyData.birthLocation}/>
                <Input type="text" label="المؤهل" id="acadamicQualification" handleChange={(e)=>setFamilyData({...familyData,acadamicQualification:e.target.value})} value={familyData.acadamicQualification}/>
                <Input type="text" label="الوظيفة" id="personJob" handleChange={(e)=>setFamilyData({...familyData,personJob:e.target.value})} value={familyData.personJob}/>
            </div>
        </div>
        <FormEdit href="/family" />
    </form>
);

}
export default EditFamilyMember;