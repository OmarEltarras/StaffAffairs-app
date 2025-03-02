import Input from "../../../components/Input";
import InputCheckbox from "../../../components/InputCheckbox";
import InputSelect from "../../../components/InputSelect";
import FormSubmit from "../../../components/FormSubmit";
import { useState } from "react";
import { useNavigate } from "react-router";
import { postData } from "../../../api";

function AddMember(){
    const [personalData,setPersonalData] = useState({
        memberName:'',
        id:'',
        fileNumber:'',
        issureNumber:'',
        gender:'',
        religion:'',
        militaryState:'',
        birthDate:'',
        socialState:'',
        birthPlace:'',
        nationality:'',
        hiringType:'',
    })
    const [jobData,setJobData] = useState({
        university:'',
        college:'',
        department:'',
        startHiringDate:'',
        endHiringDate:'',
        inHoliday:'',
        subspecialty:'',
        currentDegree:'',
        workOnManyJobs:'',
        numberOfJobs:'',
    })
    const [militaryData,setMilitaryData] = useState({
        finishService:'',
        terminationServiceReason:''
    })
    const [contactData,setContactData] = useState({
        homeNumber:'',
        officeNumber:'',
        mobileNumber:'',
        faxNumber:'',
        email:'',
        currentAddress:'',
        previousAddress:''
    })

    let navigate = useNavigate()
    return(
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault()
                const data = {...personalData,...jobData,...militaryData,...contactData}
                postData('http://localhost:3000/staffmembers',data)
                navigate('/maindata')
            }}>
                <fieldset>
                    <legend>بيانات شخصية</legend>
                    <div className='row mb-5'>
                        <div className="col-md-12 col-lg-6">
                            <Input type="text" label="الاسم" id="memberName" handleChange={(e)=>{setPersonalData({...personalData,memberName:e.target.value})}} />
                            <Input type="text" label="الرقم القومي" id="id" handleChange={(e)=>{setPersonalData({...personalData,id:e.target.value})}} />
                            <Input type="text" label=" رقم الملف" id="fileNumber" handleChange={(e)=>{setPersonalData({...personalData,fileNumber:e.target.value})}}/>
                            <Input type="text" label="الرقم التأميني" id="issureNumber" handleChange={(e)=>{setPersonalData({...personalData,issureNumber:e.target.value})}}/>
                            <InputSelect  label="النوع" id="gender" handleChange={(e)=>{setPersonalData({...personalData,gender:e.target.value})}}/>
                            <InputSelect  label="الديانة" id="religion" handleChange={(e)=>{setPersonalData({...personalData,religion:e.target.value})}}/>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <InputSelect  label="الموقف من التجنيد" id="militaryState" handleChange={(e)=>{setPersonalData({...personalData,militaryState:e.target.value})}}/>
                            <Input type="date" label="تاريخ الميلاد" id="birthDate" handleChange={(e)=>{setPersonalData({...personalData,birthDate:e.target.value})}}/>
                            <InputSelect  label="الحالة الاجتماعية" id="socialState" handleChange={(e)=>{setPersonalData({...personalData,socialState:e.target.value})}}/>
                            <Input type="text" label="محل الميلاد" id="birthPlace" handleChange={(e)=>{setPersonalData({...personalData,birthPlace:e.target.value})}}/>
                            <InputSelect  label="الجنسية" id="nationality" handleChange={(e)=>{setPersonalData({...personalData,nationality:e.target.value})}}/>
                            <InputSelect  label="نوع التعيين" id="hiringType" handleChange={(e)=>{setPersonalData({...personalData,hiringType:e.target.value})}}/>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>بيانات وظيفية</legend>
                    <div className='row mb-5'>
                        <div className="col-md-12 col-lg-6">
                            <InputSelect  label="الجامعة" id="university" handleChange={(e)=>{setJobData({...jobData,university:e.target.value})}}/>
                            <InputSelect  label="الكلية" id="college" handleChange={(e)=>{setJobData({...jobData,college:e.target.value})}}/>
                            <InputSelect  label="القسم" id="department" handleChange={(e)=>{setJobData({...jobData,department:e.target.value})}}/>
                            <Input type="date" label="تاريخ بداية التعيين" id="startHiringDate" handleChange={(e)=>{setJobData({...jobData,startHiringDate:e.target.value})}}/>
                            <Input type="date" label="تاريخ اخر اقرار ذمه مالية" id="endHiringDate" handleChange={(e)=>{setJobData({...jobData,endHiringDate:e.target.value})}}/>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <InputCheckbox label="قائم باجازة ام لا" id="inHoliday" handleChange={(e)=>{setJobData({...jobData,inHoliday:e.target.value})}}/>
                            <Input type="text" label="التخصص الدقيق" id="subspecialty" handleChange={(e)=>{setJobData({...jobData,subspecialty:e.target.value})}}/>
                            <InputSelect  label="الدرجة الحالية" id="currentDegree" handleChange={(e)=>{setJobData({...jobData,currentDegree:e.target.value})}}/>
                            <InputCheckbox label="يعمل باكثر من وظيفة" id="workOnManyJobs" handleChange={(e)=>{setJobData({...jobData,workOnManyJobs:e.target.value})}}/>
                            <Input type="text" label="عدد الوظائف" id="numberOfJobs" handleChange={(e)=>{setJobData({...jobData,numberOfJobs:e.target.value})}}/>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>بيانات التجنيد</legend>
                    <div className='row mb-5'>
                        <div className="col-md-12 col-lg-6">
                            <InputCheckbox label="انهي خدمته" id="finishService" handleChange={(e)=>{setMilitaryData({...militaryData,finishService:e.target.value})}}/>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <Input type="text" label="سبب انهاء الخدمة" id="terminationServiceReason" handleChange={(e)=>{setMilitaryData({...militaryData,terminationServiceReason:e.target.value})}}/>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>بيانات الاتصال</legend>
                    <div className='row mb-5'>
                        <div className="col-md-12 col-lg-6">
                            <Input type="text" label="تليفون المنزل" id="homeNumber" handleChange={(e)=>{setContactData({...contactData,homeNumber:e.target.value})}}/>
                            <Input type="text" label="تليفون المكتب" id="officeNumber" handleChange={(e)=>{setContactData({...contactData,officeNumber:e.target.value})}}/>
                            <Input type="text" label="الموبايل" id="mobileNumber" handleChange={(e)=>{setContactData({...contactData,mobileNumber:e.target.value})}}/>
                            <Input type="text" label="الفاكس" id="faxNumber" handleChange={(e)=>{setContactData({...contactData,faxNumber:e.target.value})}}/>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <Input type="email" label="البريد الالكتروني" id="email" handleChange={(e)=>{setContactData({...contactData,email:e.target.value})}}/>
                            <Input type="text" label="محل الاقامة الحالي" id="currentAddress" handleChange={(e)=>{setContactData({...contactData,currentAddress:e.target.value})}}/>
                            <Input type="text" label="محل الاقامة السابق" id="previousAddress" handleChange={(e)=>{setContactData({...contactData,previousAddress:e.target.value})}}/>
                        </div>
                    </div>
                </fieldset>
                <FormSubmit href="/maindata"/>
            </form>
        </div>
    );
}
export default AddMember;