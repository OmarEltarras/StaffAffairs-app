import Input from "../../../components/Input";
import InputSelect from "../../../components/InputSelect";
import FormEdit from "../../../components/FormEdit";
import { useEffect, useState } from "react";
import { getSpeicificData, putData } from "../../../api";
import { useNavigate, useParams } from "react-router";

function EditCertificate(){
    const {mid} = useParams()
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
    let navigate = useNavigate()
    useEffect(()=>{
        getSpeicificData('http://localhost:3000/certificatesofoperation',mid).then(data=>setCertificateData(data))
    },[mid])
    return(
        <form onSubmit={(e)=>{
            e.preventDefault()
            putData('http://localhost:3000/certificatesofoperation',mid,certificateData)
            navigate('/certificatesofoperation')   
        }}>
            <div className='row'>
                <div className="col-md-12 col-lg-6">
                    <Input type="text" label="الرقم الكودي" id='nationalId' handleChange={e=>setCertificateData({...certificateData,nationalId:e.target.value})} />
                    <Input type="text" label="المسلسل"/>
                    <Input type="text" label="اسم الشهادة" id="certificateName" handleChange={e=>setCertificateData({...certificateData,certificateName:e.target.value})} value={certificateData.certificateName}/>
                    <Input type="text" label="بيان الشهادة" id="certificateReason" handleChange={e=>setCertificateData({...certificateData,certificateReason:e.target.value})} value={certificateData.certificateName}/>
                    <Input type="text" label="السنة" id="certificateYear" handleChange={e=>setCertificateData({...certificateData,certificateYear:e.target.value})} value={certificateData.certificateName}/>
                </div>
                <div className="col-md-12 col-lg-6">
                    <Input type="date" label="تاريخ بداية الشهادة" id="certifiacteStartDate" handleChange={e=>setCertificateData({...certificateData,certifiacteStartDate:e.target.value})} value={certificateData.certificateName}/>
                    <Input type="date" label="تاريخ نهاية الشهادة" id="certificateEndDate" handleChange={e=>setCertificateData({...certificateData,certificateEndDate:e.target.value})} value={certificateData.certificateName}/>
                    <Input type="text" label="المكان" id="certificateLocation" handleChange={e=>setCertificateData({...certificateData,certificateLocation:e.target.value})} value={certificateData.certificateName}/>
                    <InputSelect  label="داخلي/خارجي" id="certificateType" handleChange={e=>setCertificateData({...certificateData,certificateType:e.target.value})} value={certificateData.certificateType}/>
                </div>
            </div>
            <FormEdit href="/certificatesofoperation" />
        </form>
    );

}
export default EditCertificate;