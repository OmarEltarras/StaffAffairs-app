import { Outlet, Route, Routes } from "react-router";
import PageName from "../components/PageName";
import Sidebar from "../components/Sidebar/Sidebar";
import MainDataPage from "./staff_affairs/MainData/MainDataPage";
import SearchData from "./staff_affairs/SearchData";
import QualificationPage from "./staff_affairs/Qualifications/QualificationPage";
import CertificatesPage from "./staff_affairs/Certificates/CertificatesPage";
import FamilyPage from "./staff_affairs/Family/FamilyPage";
import CoursePage from "./staff_affairs/Courses/CoursePage";
import PunishmenPage from "./staff_affairs/Punishment/PunishmentPage";
import JobBeforePage from "./staff_affairs/Jobs/JobBefore/JobBeforePage";
import SupervisoryJobsPage from "./staff_affairs/Jobs/SupervisoryJob/SupervisoryJobsPage";
import ScientificJobPage from "./staff_affairs/Jobs/ScientificJob/ScientificJobPage";
import MandatePage from "./staff_affairs/Jobs/Mandate/MandatePage";
import { useState } from "react";
import AddMember from "./staff_affairs/MainData/AddMember";
import EditMember from "./staff_affairs/MainData/EditMember";
import CreateCourse from "./staff_affairs/Courses/CreateCourse";
import EditCourse from "./staff_affairs/Courses/EditCourse";
import CreateJobBefore from "./staff_affairs/Jobs/JobBefore/CreateJobBefore";
import EditJobBefore from "./staff_affairs/Jobs/JobBefore/EditJobBefore";
import CreateSupervisoryJob from "./staff_affairs/Jobs/SupervisoryJob/CreateSupervisoryjob";
import EditSupervisoryJob from "./staff_affairs/Jobs/SupervisoryJob/EditSupervisoryJob";
import CreateScientificJob from "./staff_affairs/Jobs/ScientificJob/CreateScientificjob";
import EditScientificJob from "./staff_affairs/Jobs/ScientificJob/EditScientificJob";
import CreateMandate from "./staff_affairs/Jobs/Mandate/CreateMandate";
import EditMandate from "./staff_affairs/Jobs/Mandate/EditMandate";
import AddFamilyMember from "./staff_affairs/Family/AddFamilyMember";
import EditFamilyMember from "./staff_affairs/Family/EditFamilyMember";
import AddQualification from "./staff_affairs/Qualifications/AddQualification";
import EditQualification from "./staff_affairs/Qualifications/EditQualification";
import AddCertificate from "./staff_affairs/Certificates/AddCertificate";
import EditCertificate from "./staff_affairs/Certificates/EditCertificate";
import AddPunishment from "./staff_affairs/Punishment/AddPunishment";
import EditPunishment from "./staff_affairs/Punishment/EditPunishment";
import VacationPage from "./staff_affairs/Vacation/VacationPage";
import EditVacation from "./staff_affairs/Vacation/EditVacation";
import AddVacation from "./staff_affairs/Vacation/AddVacation";
import './StaffPage.css';

function StaffPage(){
    const [pageName,setPageName]=useState('')
    const handlePageName=(name)=>{
        setPageName(name);
    }
    return(
        <div className="container-fluid">
            <Routes>
                <Route path="/staffaffairs" element={<>  
                    <div className="d-flex">
                        <div >
                            <Sidebar handlePageName={handlePageName}/>
                        </div>
                        <div className="flex-grow-1">
                            <PageName title={pageName} />
                            <SearchData />
                            <Outlet />
                        </div>    
                    </div></>}>
                    <Route path='maindata' element={<Outlet />} >
                        <Route index element={<MainDataPage />} />
                        <Route path="create" element={<AddMember />} />
                        <Route path=":mid/edit" element={<EditMember />} />
                    </Route>
                    <Route path='courses' element={<Outlet />} >
                        <Route index element={<CoursePage />} />
                        <Route path="create" element={<CreateCourse />} />
                        <Route path=":mid/edit" element={<EditCourse />} />
                    </Route>
                    <Route path="qualification" element={<Outlet />}>
                        <Route index element={<QualificationPage />} />
                        <Route path="create" element={<AddQualification />} />
                        <Route path=":mid/edit" element={<EditQualification />} />
                    </Route>
                    <Route path="punishment" element={<Outlet />}>
                        <Route index element={<PunishmenPage />} />
                        <Route path="create" element={<AddPunishment />} />
                        <Route path=":mid/edit" element={<EditPunishment />} />
                    </Route>
                    <Route path="vacation" element={<Outlet />}>
                        <Route index element={<VacationPage />} />
                        <Route path="create" element={<AddVacation />} />
                        <Route path=":mid/edit" element={<EditVacation />} />
                    </Route>
                    <Route path="certificatesofoperation" element={<Outlet />}>
                        <Route index element={<CertificatesPage />} />
                        <Route path="create" element={<AddCertificate />} />
                        <Route path=":mid/edit" element={<EditCertificate />} />
                    </Route>
                    <Route path="family" element={<Outlet />}>
                        <Route index element={<FamilyPage />} />
                        <Route path="create" element={<AddFamilyMember />} />
                        <Route path=":mid/edit" element={<EditFamilyMember />} />
                    </Route>
                    <Route path='jobs' element={<Outlet />} >
                        <Route path="jobbefore" element={<Outlet />}>
                            <Route index element={<JobBeforePage />} />
                            <Route path="create" element={<CreateJobBefore />} />
                            <Route path=":mid/edit" element={<EditJobBefore />} />
                        </Route>
                        <Route path="supervisory" element={<Outlet />}>
                            <Route index element={<SupervisoryJobsPage />} />
                            <Route path="create" element={<CreateSupervisoryJob />} />
                            <Route path=":mid/edit" element={<EditSupervisoryJob />} />
                        </Route>
                        <Route path="scientific" element={<Outlet />}>
                            <Route index element={<ScientificJobPage />} />
                            <Route path="create" element={<CreateScientificJob />} />
                            <Route path=":mid/edit" element={<EditScientificJob />} />
                        </Route>
                        <Route path="mandate" element={<Outlet />}>
                            <Route index element={<MandatePage />} />
                            <Route path="create" element={<CreateMandate />} />
                            <Route path=":mid/edit" element={<EditMandate />} />
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}
export default StaffPage;