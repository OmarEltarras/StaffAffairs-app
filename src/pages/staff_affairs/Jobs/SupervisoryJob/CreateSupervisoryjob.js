import Input from "../../../../components/Input";
import InputCheckbox from "../../../../components/InputCheckbox";
import InputSelect from "../../../../components/InputSelect";
import FormSubmit from "../../../../components/FormSubmit";

function CreateSupervisoryJob(){
    return(
        <form>
            <div className='row'>
                <div className="col-md-12 col-lg-6">
                    <Input type="text" label="الرقم الكودي"/>
                    <InputSelect  label="الوظيفة" id="supervisoryJob"/>
                    <InputCheckbox label="الوظيفة الحالية" id="currentJob"/>
                    <InputCheckbox label="قائم بعمل" id="onWork"/>
                </div>
                <div className="col-md-12 col-lg-6">
                    <Input type="text" label="بيان الوظيفة" id="jobDescription"/>
                    <InputSelect  label="الجامعة" id="university"/>
                    <InputSelect  label="الكلية" id="college"/>
                </div>
            </div>
            <FormSubmit href='/jobs/supervisory' />
        </form>
    );
}
export default CreateSupervisoryJob;