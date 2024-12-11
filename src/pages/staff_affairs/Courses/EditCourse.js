import FormEdit from "../../../components/FormEdit";
import Input from "../../../components/Input";
import InputSelect from "../../../components/InputSelect";

function EditCourse(){
    return(
        <form>
            <div className='row'>
                <div className="col-md-12 col-lg-6">
                    <Input type="text" label="الرقم الكودي"/>
                    <Input type="text" label="كود الدورة" id="courseId"/>
                    <Input type="text" label="اسم الدورة او مجال الخبرات" id="courseName"/>
                    <Input type="date" label="تاريخ بداية الدورة" id="courseStartDate"/>
                </div>
                <div className="col-md-12 col-lg-6">
                    <Input type="date" label="تاريخ نهاية الدورة" id="courseEndDate"/>
                    <InputSelect  label="نوع الجهة" id="entityType"/>
                    <Input type="text" label="جهة الدورة" id="courseLocation"/>
                    <InputSelect  label="التقدير" id="rate"/>
                </div>
            </div>
            <FormEdit href="/courses" />
        </form>
    );
}
export default EditCourse;