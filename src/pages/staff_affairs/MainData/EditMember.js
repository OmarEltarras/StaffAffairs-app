import Input from "../../../components/Input";
import InputCheckbox from "../../../components/InputCheckbox";
import InputSelect from "../../../components/InputSelect";
import FormEdit from "../../../components/FormEdit";

function EditMember(){
    return(
        <div>
            <form>
                <fieldset>
                    <legend>بيانات شخصية</legend>
                    <div className='row mb-5'>
                        <div className="col-md-12 col-lg-6">
                            <Input type="text" label="الاسم" id="memberName" />
                            <Input type="text" label="الرقم القومي" id="nationalId" />
                            <Input type="text" label=" رقم الملف" id="fileNumber" />
                            <Input type="text" label="الرقم التأميني" id="issureNumber"/>
                            <InputSelect  label="النوع" id="gender"/>
                            <InputSelect  label="الديانة" id="religion"/>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <InputSelect  label="الموقف من التجنيد" id="militaryState"/>
                            <Input type="date" label="تاريخ الميلاد" id="birthDate" />
                            <InputSelect  label="الحالة الاجتماعية" id="socialState"/>
                            <Input type="text" label="محل الميلاد" id="birthPlace" />
                            <InputSelect  label="الجنسية" id="nationality"/>
                            <InputSelect  label="نوع التعيين" id="hiringType"/>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>بيانات وظيفية</legend>
                    <div className='row mb-5'>
                        <div className="col-md-12 col-lg-6">
                            <InputSelect  label="الجامعة" id="university"/>
                            <InputSelect  label="الكلية" id="college"/>
                            <InputSelect  label="القسم" id="department"/>
                            <Input type="date" label="تاريخ بداية التعيين" id="startHiringDate" />
                            <Input type="date" label="تاريخ اخر اقرار ذمه مالية" id="endHiringDate" />
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <InputCheckbox label="قائم باجازة ام لا" id="inHoliday"/>
                            <Input type="text" label="التخصص الدقيق" id="subspecialty" />
                            <InputSelect  label="الدرجة الحالية" id="currentDegree"/>
                            <InputCheckbox label="يعمل باكثر من وظيفة" id="workOnManyJobs" />
                            <Input type="text" label="عدد الوظائف" id="numberOfJobs"/>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>بيانات التجنيد</legend>
                    <div className='row mb-5'>
                        <div className="col-md-12 col-lg-6">
                            <InputCheckbox label="انهي خدمته" id="finishService"/>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <Input type="text" label="سبب انهاء الخدمة" id="terminationServiceReason" />
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>بيانات الاتصال</legend>
                    <div className='row mb-5'>
                        <div className="col-md-12 col-lg-6">
                            <Input type="text" label="تليفون المنزل" id="homeNumber" />
                            <Input type="text" label="تليفون المكتب" id="officeNumber" />
                            <Input type="text" label="الموبايل" id="mobileNumber" />
                            <Input type="text" label="الفاكس" id="faxNumber" />
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <Input type="email" label="البريد الالكتروني" id="email"/>
                            <Input type="text" label="محل الاقامة الحالي" id="currentAddress" />
                            <Input type="text" label="محل الاقامة السابق" id="previousAddress" />
                        </div>
                    </div>
                </fieldset>
                <FormEdit href="/maindata"/>
            </form>
        </div>
    );
}
export default EditMember;