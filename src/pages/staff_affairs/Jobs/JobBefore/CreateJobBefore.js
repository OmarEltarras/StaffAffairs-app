import FormSubmit from "../../../../components/FormSubmit";
import Input from "../../../../components/Input";
import InputSelect from "../../../../components/InputSelect";

function CreateJobBefore(){
    return(
        <form>
            <div className='row'>
                <div className="col-md-12 col-lg-6">
                    <Input type="text" label="الرقم الكودي"/>
                    <InputSelect  label="الوظيفة" id="jobType"/>
                    <Input type="text" label="بيان الوظيفة" id="jobDescription"/>
                    <Input type="text" label="الجهة" id="jobLocation"/>
                </div>
                <div className="col-md-12 col-lg-6">
                    <Input type="date" label="تاريخ شغلها" id="jobStartDate"/>
                    <Input type="date" label="تاريخ النهاية" id="jobEndDate"/>
                    <Input type="text" label="رقم القرار" id="decisionNumber"/>
                    <Input type="date" label="تاريخ القرار" id="decisionDate"/>
                </div>
            </div>
            <FormSubmit href="/jobs/jobbefore" />
        </form>
    );
}
export default CreateJobBefore;