import FormEdit from "../../../components/FormEdit";
import Input from "../../../components/Input";
import InputCheckbox from "../../../components/InputCheckbox";
import InputSelect from "../../../components/InputSelect";

function EditPunishment(){
    return(
            <form>
                <fieldset >
                    <legend>تطبيق الجزاء</legend>
                    <div className="row mb-5">
                        <div className="col-md-12 col-lg-6">
                            <Input type="text" label="الرقم الكودي"/>
                            <InputSelect  label="نوع الجزاء" id="punishmentType"/>
                            <Input type="text" label="بيان الجزاء" id="punishmentDescription"/>
                            <Input type="date" label="ت. بداية الجزاء" id="punishmentStartDate"/>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <Input type="date" label="ت. نهاية الجزاء" id="punishmentEndDate"/>
                            <Input type="text" label="رقم القرار" id="decisionNumber"/>
                            <Input type="date" label="تاريخ القرار" id="decisionDate"/>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>محو الجزاء</legend>
                    <div className="row mb-5">
                        <div className="col-md-12 col-lg-6">
                            <InputCheckbox label="محو الجزاء" id="removePunishment"/>
                            <Input type="text" label="سبب محو الجزاء" id="removeReason"/>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <Input type="text" label="رقم القرار" id="decisionNumber2"/>
                            <Input type="date" label="تاريخ القرار" id="decisionDate2"/>
                        </div>
                    </div>
                </fieldset>
                <FormEdit href="/punishment" />
            </form>
        );
}
export default EditPunishment;