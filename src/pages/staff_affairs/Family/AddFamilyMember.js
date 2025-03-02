import { useState } from "react";
import FormSubmit from "../../../components/FormSubmit";
import Input from "../../../components/Input";
import InputSelect from "../../../components/InputSelect";
import { useNavigate } from "react-router";
import { postData } from "../../../api";

function AddFamilyMember(){
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
    return(
        <form onSubmit={(e)=>{
                        e.preventDefault()
                        postData('http://localhost:3000/family',familyData)
                        navigate('/family')
                    }}>
            <div className='row'>
                <div className="col-md-12 col-lg-6">
                    <Input type="text" label="الرقم الكودي"/>
                    <Input type="text" label="المسلسل"/>
                    <Input type="text" label="الاسم" id="relationName" handleChange={(e)=>{setFamilyData({...familyData,relationName:e.target.value})}} />
                    <InputSelect  label="النوع" id="gender" handleChange={(e)=>setFamilyData({...familyData,gender:e.target.value})}/>
                    <InputSelect  label="درجة القرابة" id="relationDegree" handleChange={(e)=>setFamilyData({...familyData,relationDegree:e.target.value})}/>
                    <Input type="text" label="رقم البطاقة" id="cardNumber" handleChange={(e)=>setFamilyData({...familyData,cardNumber:e.target.value})}/>
                </div>
                <div className="col-md-12 col-lg-6">
                    <Input type="text" label="الرقم القومي" id="nationalId" handleChange={(e)=>setFamilyData({...familyData,nationalId:e.target.value})}/>
                    <Input type="date" label="تاريخ الميلاد" id="birthDate" handleChange={(e)=>setFamilyData({...familyData,birthDate:e.target.value})}/>
                    <Input type="text" label="محل الميلاد" id="birthLocation" handleChange={(e)=>setFamilyData({...familyData,birthLocation:e.target.value})}/>
                    <Input type="text" label="المؤهل" id="acadamicQualification" handleChange={(e)=>setFamilyData({...familyData,acadamicQualification:e.target.value})}/>
                    <Input type="text" label="الوظيفة" id="personJob" handleChange={(e)=>setFamilyData({...familyData,personJob:e.target.value})}/>
                </div>
            </div>
            <FormSubmit href="/family" />
        </form>
    );
}
export default AddFamilyMember;