import Input from "../../../components/Input";
import InputSelect from "../../../components/InputSelect";
import FormEdit from "../../../components/FormEdit";

function EditFamilyMember(){
    return(
        <form>
            <div className='row'>
                <div className="col-md-12 col-lg-6">
                    <Input type="text" label="الرقم الكودي"/>
                    <Input type="text" label="المسلسل"/>
                    <InputSelect  label="النوع"  id="gender"/>
                    <InputSelect  label="درجة القرابة" id="relationDegree"/>
                    <Input type="text" label="رقم البطاقة" id="cardNumber"/>
                </div>
                <div className="col-md-12 col-lg-6">
                    <Input type="text" label="الرقم القومي" id="nationalId"/>
                    <Input type="date" label="تاريخ الميلاد" id="birthDate"/>
                    <Input type="text" label="محل الميلاد" id="birthLocation"/>
                    <Input type="text" label="المؤهل" id="acadamicQualification"/>
                    <Input type="text" label="الوظيفة" id="personJob"/>
                </div>
            </div>
            <FormEdit href="/family" />
        </form>
    );
}
export default EditFamilyMember;