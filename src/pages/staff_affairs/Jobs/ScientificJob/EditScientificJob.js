import Input from "../../../../components/Input";
import InputSelect from "../../../../components/InputSelect";
import FormEdit from "../../../../components/FormEdit";

function EditScientificJob(){
    return(
        <form>
            <div className='row'>
                <div className="col-md-12 col-lg-6">
                    <Input type="text" label="الرقم الكودي"/>
                    <InputSelect  label="الدرجة" id="degree"/>
                    <InputSelect  label="الجامعة" id="university"/>
                    <InputSelect  label="الكلية" id="collage"/>
                    <InputSelect  label="القسم" id="department"/>
                </div>
                <div className="col-md-12 col-lg-6">
                    <Input type="text" label="التخصص الدقيق" id="subspecialty"/>
                    <Input type="date" label="تاريخ التعيين" id="hiringStartDate"/>
                    <InputSelect  label="تم الرقية" id="promotion"/>
                    <Input type="text" label="رقم القرار" id="decisionNumber"/>
                    <Input type="date" label="تاريخ القرار" id="decisionDate"/>
                </div>
            </div>
            <FormEdit href="/jobs/scientific" />
        </form>
    );
}
export default EditScientificJob;