import Input from "../../../../components/Input";
import InputSelect from "../../../../components/InputSelect";
import FormEdit from "../../../../components/FormEdit";
import { useEffect, useState } from "react";
import { getSpeicificData, putData } from "../../../../api";
import { useNavigate, useParams } from "react-router";

function EditScientificJob(){
    const {mid} = useParams()
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
    useEffect(()=>{
                getSpeicificData('http://localhost:3000/jobs/scientific',mid).then(data=>setScientificData(data))
            },[mid])
    return(
        <form onSubmit={(e)=>{
                            e.preventDefault()
                            putData('http://localhost:3000/jobs/scientific',mid,scientificData)
                            navigate('/jobs/scientific')   
                        }}>
            <div className='row'>
                <div className="col-md-12 col-lg-6">
                    <Input type="text" label="الرقم الكودي" id="nationaID" handleChange={e=>setScientificData({...scientificData,degree:e.target.value})}/>
                    <InputSelect  label="الدرجة" id="degree" handleChange={e=>setScientificData({...scientificData,degree:e.target.value})} value={scientificData.degree}/>
                    <InputSelect  label="الجامعة" id="university" handleChange={e=>setScientificData({...scientificData,university:e.target.value})} value={scientificData.university}/>
                    <InputSelect  label="الكلية" id="collage" handleChange={e=>setScientificData({...scientificData,collage:e.target.value})} value={scientificData.collage}/>
                    <InputSelect  label="القسم" id="department" handleChange={e=>setScientificData({...scientificData,department:e.target.value})} value={scientificData.department}/>
                </div>
                <div className="col-md-12 col-lg-6">
                    <Input type="text" label="التخصص الدقيق" id="subspecialty" handleChange={e=>setScientificData({...scientificData,subspecialty:e.target.value})} value={scientificData.subspecialty}/>
                    <Input type="date" label="تاريخ التعيين" id="hiringStartDate" handleChange={e=>setScientificData({...scientificData,hiringStartDate:e.target.value})} value={scientificData.hiringStartDate}/>
                    <InputSelect  label="تم الرقية" id="promotion" handleChange={e=>setScientificData({...scientificData,promotion:e.target.value})} value={scientificData.promotion}/>
                    <Input type="text" label="رقم القرار" id="decisionNumber" handleChange={e=>setScientificData({...scientificData,decisionNumber:e.target.value})} value={scientificData.decisionNumber}/>
                    <Input type="date" label="تاريخ القرار" id="decisionDate" handleChange={e=>setScientificData({...scientificData,decisionDate:e.target.value})} value={scientificData.decisionDate}/>
                </div>
            </div>
            <FormEdit href="/jobs/scientific" />
        </form>
    );
}
export default EditScientificJob;