import Input from "../../../components/Input";
import InputSelect from "../../../components/InputSelect";
import FormEdit from "../../../components/FormEdit";

function EditCertificate(){
    return(
        <form>
            <div className='row'>
                <div className="col-md-12 col-lg-6">
                    <Input type="text" label="الرقم الكودي"/>
                    <Input type="text" label="المسلسل"/>
                    <Input type="text" label="اسم الشهادة" id="certificateName"/>
                    <Input type="text" label="بيان الشهادة" id="certificateReason"/>
                    <Input type="text" label="السنة" id="certificateYear"/>
                </div>
                <div className="col-md-12 col-lg-6">
                    <Input type="date" label="تاريخ نهاية الشهادة" id="certifiacteStartDate"/>
                    <Input type="date" label="تاريخ نهاية الشهادة" id="certificateEndDate"/>
                    <Input type="text" label="المكان" id="certificateLocation"/>
                    <InputSelect  label="داخلي/خارجي" id="certificateType"/>
                </div>
            </div>
            <FormEdit href="/certificatesofoperation" />
        </form>
    );
}
export default EditCertificate;