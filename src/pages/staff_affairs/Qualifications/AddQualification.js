import InputSelect from "../../../components/InputSelect";
import Input from "../../../components/Input";
import FormSubmit from "../../../components/FormSubmit";
import { useState } from "react";
import { postData } from "../../../api";
import { useNavigate } from "react-router";
function AddQualification(){
    const [qualificationData,setQualificationData] = useState({
        nationalId:'',
        qualification:'',
        university:'',
        college:'',
        department:'',
        subspecialty:''
    })
    let navigate = useNavigate()
    return(
            <form onSubmit={(e)=>{
                            e.preventDefault()
                            postData('http://localhost:3000/qualification',qualificationData)
                            navigate('/qualification')
                        }}>
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <Input type="text" label="الرقم الكودي" id="nationalId" handleChange={(e)=>setQualificationData({...qualificationData,nationalId:e.target.value})}/>
                        <InputSelect label="المؤهل" id="qualification" handleChange={(e)=>setQualificationData({...qualificationData,qualification:e.target.value})}/>
                        <InputSelect label="الجامعة"  id="university" handleChange={(e)=>setQualificationData({...qualificationData,university:e.target.value})}/>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <InputSelect label="الكلية" id="college" handleChange={(e)=>setQualificationData({...qualificationData,college:e.target.value})}/>
                        <InputSelect label="القسم" id="department" handleChange={(e)=>setQualificationData({...qualificationData,department:e.target.value})}/>
                        <Input label="التخصص الدقيق" type="text"  id="subspecialty" handleChange={(e)=>setQualificationData({...qualificationData,subspecialty:e.target.value})}/>
                    </div>
                </div>
                <FormSubmit href="/staffaffairs/qualification" />
            </form>
    );
}
export default AddQualification;