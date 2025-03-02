import InputSelect from "../../../components/InputSelect";
import Input from "../../../components/Input";
import FormEdit from "../../../components/FormEdit";
import { useEffect, useState } from "react";
import { getSpeicificData, putData } from "../../../api";
import { useNavigate, useParams } from "react-router";
function EditQualification(){
    const {mid} = useParams()
    const [qualificationData,setQualificationData] = useState({
        nationalId:'',
        qualification:'',
        university:'',
        college:'',
        department:'',
        subspecialty:''
    })
    useEffect(()=>{
                getSpeicificData('http://localhost:3000/qualification',mid).then(data=>setQualificationData(data))
            },[mid])
    let navigate = useNavigate()
    return(
            <form onSubmit={(e)=>{
                                e.preventDefault()
                                putData('http://localhost:3000/qualification',mid,qualificationData)
                                navigate('/qualification')   
                            }}>
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <Input type="text" label="الرقم الكودي" id="nationalId" handleChange={(e)=>setQualificationData({...qualificationData,nationalId:e.target.value})} value={qualificationData.qualification}/>
                        <InputSelect label="المؤهل" id="qualification" handleChange={(e)=>setQualificationData({...qualificationData,qualification:e.target.value})} value={qualificationData.qualification}/>
                        <InputSelect label="الجامعة"  id="university" handleChange={(e)=>setQualificationData({...qualificationData,university:e.target.value})} value={qualificationData.university}/>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <InputSelect label="الكلية" id="college" handleChange={(e)=>setQualificationData({...qualificationData,college:e.target.value})} value={qualificationData.college}/>
                        <InputSelect label="القسم" id="department" handleChange={(e)=>setQualificationData({...qualificationData,department:e.target.value})} value={qualificationData.department}/>
                        <Input label="التخصص الدقيق" type="text"  id="subspecialty" handleChange={(e)=>setQualificationData({...qualificationData,subspecialty:e.target.value})} value={qualificationData.subspecialty}/>
                    </div>
                </div>
                <FormEdit href="/staffaffairs/qualification" />
            </form>
    );
}
export default EditQualification;