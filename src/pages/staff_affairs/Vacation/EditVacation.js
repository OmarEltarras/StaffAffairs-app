import FormEdit from "../../../components/FormEdit";
import Input from "../../../components/Input";
import InputSelect from "../../../components/InputSelect";

function EditVacation(){
    return(
        <form>
            <div className="row">
                <div className="col-md-12 col-lg-6">
                    <Input type="text" label="الرقم الكودي"/>
                    <InputSelect  label="نوع الاجازة" id="vactionType"/>
                    <Input type="text" label="الجهة" id="vactionLocation"/>
                    <Input type="text" label="بيان الاجازة" id="vacationDescription"/>
                </div>
                <div className="col-md-12 col-lg-6">
                    <Input type="date" label="تاريخ بداية الاجازة" id="vacationStartDate"/>
                    <Input type="date" label="تاريخ نهاية الاجازة" id="vacationEndDate"/>
                    <Input type="text" label="رقم القرار" id="decisionNumber"/>
                    <Input type="date" label="تاريخ القرار" id="decisionDate"/>
                </div>
            </div>
            <FormEdit href="/vacation" />
        </form>
    );
}
export default EditVacation;