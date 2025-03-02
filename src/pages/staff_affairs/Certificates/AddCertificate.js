import Input from "../../../components/Input";
import InputSelect from "../../../components/InputSelect";
import FormSubmit from "../../../components/FormSubmit";
import { useState } from "react";
import { useNavigate } from "react-router";
import { postData } from "../../../api";

function AddCertificate(){
    const [certificateData,setCertificateData] = useState({
        nationalId:'',
        certificateName:'',
        certificateReason:'',
        certificateYear:"",
        certifiacteStartDate:'',
        certificateEndDate:'',
        certificateLocation:'',
        certificateType:''
    })
    let navigate =useNavigate()
    
    return(
        <form onSubmit={(e)=>{
            e.preventDefault()
            postData('http://localhost:3000/certificatesofoperation',certificateData)
            navigate('/certificatesofoperation')
        }
        }>
            <div className='row'>
                <div className="col-md-12 col-lg-6">
                    <Input type="text" label="الرقم الكودي" id='nationalId' handleChange={e=>setCertificateData({...certificateData,nationalId:e.target.value})}/>
                    <Input type="text" label="المسلسل"/>
                    <Input type="text" label="اسم الشهادة" id="certificateName" handleChange={e=>setCertificateData({...certificateData,nationalId:e.target.value})}/>
                    <Input type="text" label="بيان الشهادة" id="certificateReason" handleChange={e=>setCertificateData({...certificateData,nationalId:e.target.value})}/>
                    <Input type="text" label="السنة" id="certificateYear" handleChange={e=>setCertificateData({...certificateData,nationalId:e.target.value})}/>
                </div>
                <div className="col-md-12 col-lg-6">
                    <Input type="date" label="تاريخ بداية الشهادة" id="certifiacteStartDate" handleChange={e=>setCertificateData({...certificateData,nationalId:e.target.value})}/>
                    <Input type="date" label="تاريخ نهاية الشهادة" id="certificateEndDate" handleChange={e=>setCertificateData({...certificateData,nationalId:e.target.value})}/>
                    <Input type="text" label="المكان" id="certificateLocation" handleChange={e=>setCertificateData({...certificateData,nationalId:e.target.value})}/>
                    <InputSelect  label="داخلي/خارجي" id="certificateType"/>
                </div>
            </div>
            <FormSubmit href="/staffaffairs/certificatesofoperation" />
        </form>
    );
}
export default AddCertificate;