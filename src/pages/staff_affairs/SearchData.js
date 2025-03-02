import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Input from "../../components/Input";
import { useEffect, useState } from "react";

function SearchData(){
    const [memberName, setMemberName] = useState('');
    const [nationalId, setNationalId] = useState('');
    const [fileNumber, setFileNumber] = useState('');
    const [data,setData] = useState('')

    const MySwal = withReactContent(Swal)
    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if at least one input is filled
        if(!memberName && !nationalId && !fileNumber){
            MySwal.fire({
                icon: 'error',
                titleText: 'الرجاء ملء احد حقول البحث',
            });
            return;
        }
        // Optional: Validate digit inputs to ensure they are digits
        const nationalIdPattern = /^\d{14}$/; // Matches only digits
        if (nationalId && !nationalIdPattern.test(nationalId)) {
            MySwal.fire({
                icon: 'error',
                text: 'الرقم القومي يجب ان يكون 14 رقم',
            });
            return;
        }
        const fileNumberPattern = /^\d{1,10}$/; // Matches only digits
        if (fileNumber && !fileNumberPattern.test(fileNumber)) {
            MySwal.fire({
                icon: 'error',
                text: 'رقم الملف يجب ان يكون رقم',
            });
            return;
        }

        // Clear error and process form submission
        console.log('Submitting:', { memberName, nationalId, fileNumber });
    };

    async function fetchData(url){
        try{
            const response = await fetch(url)
            setData(await response.json())
        }catch(error){
            console.log(Error("Fetching failed :",error))
        }
    }

    // useEffect(()=>{
    //     fetchData('url')
    // })

    sessionStorage.setItem('MemberData',data)
    return(
        <div className='mb-5'>
            <form method="GET" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>بحث عن العضو</legend>
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <Input type="text" label="اسم العضو" id="searchMemberName" value={memberName} onChange={(e)=>setMemberName(e.target.value)}/>
                            <Input type="text" label="الرقم القومي" id="searchNationalId" value={nationalId} onChange={(e)=>setNationalId(e.target.value)}/>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <Input type="text" label="رقم الملف" id="searchFileNmber" value={fileNumber} onChange={(e)=>setFileNumber(e.target.value)}/>
                            <button type="submit" className="btn btn-primary d-flex me-auto">بحث</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}
export default SearchData;