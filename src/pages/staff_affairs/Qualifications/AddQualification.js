import InputSelect from "../../../components/InputSelect";
import Input from "../../../components/Input";
import FormSubmit from "../../../components/FormSubmit";
function AddQualification(){
    return(
            <form>
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <Input type="text" label="الرقم الكودي" />
                        <InputSelect label="المؤهل" id="qualification"/>
                        <InputSelect label="الجامعة"  id="university"/>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <InputSelect label="الكلية" id="college"/>
                        <InputSelect label="القسم" id="department"/>
                        <Input label="التخصص الدقيق" type="text"  id="subspecialty"/>
                    </div>
                </div>
                <FormSubmit href="/qualification" />
            </form>
    );
}
export default AddQualification;