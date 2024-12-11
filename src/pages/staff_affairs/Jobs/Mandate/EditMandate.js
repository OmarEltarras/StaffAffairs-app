import Input from "../../../../components/Input";
import InputSelect from "../../../../components/InputSelect";
import FormEdit from "../../../../components/FormEdit";

function EditMandate(){
    return(
        <form>
            <div className='row'>
                <div className="col-md-12 col-lg-6">
                    <Input type="text" label="الرقم الكودي"/>
                    <Input type="text" label="المسلسل"/>
                    <InputSelect  label="نوع الانتداب" id="mandateType"/>
                    <Input type="text" label="جهة الانتداب" id="mandateLocation"/>
                    <Input type="text" label="الجامعة المنتدب لها" id="mandateUniversity"/>
                </div>
                <div className="col-md-12 col-lg-6">
                    <Input type="text" label="بيان الانتدب" id="mandateDescription"/>
                    <Input type="date" label="تاريخ البداية" id="mandateStartDate"/>
                    <Input type="date" label="تاريخ النهاية" id="mandateEndDate"/>
                    <Input type="text" label="رقم القرار" id="decisionNumber"/>
                    <Input type="date" label="تاريخ القرار" id="decisionDate"/>
                </div>
            </div>
            <FormEdit href="/jobs/mandate" />
        </form>
    );
}
export default EditMandate;