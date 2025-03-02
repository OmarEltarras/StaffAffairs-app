import Input from "../../../../components/Input";
import InputSelect from "../../../../components/InputSelect";
import FormSubmit from "../../../../components/FormSubmit";
import { useState } from "react";
import { postData } from "../../../../api";
import { useNavigate } from "react-router";

function CreateScientificJob(){
    const [scientificData,setScientificData] = useState({
        nationalId:"",
        degree:'',
        university:'',
        collage:'',
        department:'',
        subspecialty:'',
        hiringStartDate:'',
        promotion:'',
        decisionNumber:'',
        decisionDate:''
    })
    let navigate = useNavigate()
    return(
        <form onSubmit={(e)=>{
            e.preventDefault()
            postData('http://localhost:3000/jobs/scientific',scientificData)
            navigate('/jobs/scientific')
        }}>
            <div className='row'>
                <div className="col-md-12 col-lg-6">
                    <Input type="text" label="الرقم الكودي" id="nationaID" handleChange={e=>setScientificData({...scientificData,degree:e.target.value})}/>
                    <InputSelect  label="الدرجة" id="degree" handleChange={e=>setScientificData({...scientificData,degree:e.target.value})}/>
                    <InputSelect  label="الجامعة" id="university" handleChange={e=>setScientificData({...scientificData,university:e.target.value})}/>
                    <InputSelect  label="الكلية" id="collage" handleChange={e=>setScientificData({...scientificData,collage:e.target.value})}/>
                    <InputSelect  label="القسم" id="department" handleChange={e=>setScientificData({...scientificData,department:e.target.value})}/>
                </div>
                <div className="col-md-12 col-lg-6">
                    <Input type="text" label="التخصص الدقيق" id="subspecialty" handleChange={e=>setScientificData({...scientificData,subspecialty:e.target.value})}/>
                    <Input type="date" label="تاريخ التعيين" id="hiringStartDate" handleChange={e=>setScientificData({...scientificData,hiringStartDate:e.target.value})}/>
                    <InputSelect  label="تم الرقية" id="promotion" handleChange={e=>setScientificData({...scientificData,promotion:e.target.value})}/>
                    <Input type="text" label="رقم القرار" id="decisionNumber" handleChange={e=>setScientificData({...scientificData,decisionNumber:e.target.value})}/>
                    <Input type="date" label="تاريخ القرار" id="decisionDate" handleChange={e=>setScientificData({...scientificData,decisionDate:e.target.value})}/>
                </div>
            </div>
            <FormSubmit href="/jobs/scientific" />
        </form>
    );
}
export default CreateScientificJob;