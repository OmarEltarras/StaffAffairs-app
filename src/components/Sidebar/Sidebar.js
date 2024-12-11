import { useEffect } from 'react';
import './sidebar.css'
import { NavLink } from "react-router";

function Sidebar({handlePageName}){
    useEffect(()=>{
        document.querySelector('#sidebar ul li a').click()
    },[])

    return(
        <div className='sidebarContainer'>
            <aside className="bg-white mt-4" id='sidebar'>
                <h6 className="text-center my-3 position-relative pb-4">شوؤن اعضاء هيئة التدريس</h6>
                <ul >
                    <li className="mt-2 mb-2 rounded">
                        <NavLink to="maindata" className="d-flex align-items-center gap-2 p-2"  onClick={()=>handlePageName('صفحة البيانات الاساسية')}>
                                <i class="fa-solid fa-id-card fa-fw" ></i>
                                <span>البيانات الاساسية</span>
                        </NavLink>
                    </li>
                    <li className="mt-2 mb-2 rounded" >
                        <NavLink to="courses" className="d-flex align-items-center gap-2 p-2" onClick={()=>handlePageName('صفحة الدوارات التدريبية')}>
                                <i class="fa-solid fa-graduation-cap fa-fw"></i>
                                <span>الدورات التدريبية</span>
                        </NavLink>
                    </li>
                    <li className="mt-2 mb-2 rounded" id='jobs'>
                        <NavLink to='jobs' className="d-flex align-items-center gap-2 p-2"  onClick={()=>handlePageName('صفحة الوظائف')}>
                                <i class="fa-solid fa-briefcase fa-fw"></i>
                                <span>الوظائف</span>
                        </NavLink>
                        <ul className="bg-white pt-1 pe-md-3">
                            <li className="mt-2 mb-2 rounded" >
                                <NavLink to='jobs/jobbefore' className="d-flex align-items-center gap-2 p-2" onClick={()=>handlePageName('صفحة الوظائف ما قبل التعيين')}>
                                        <i class="fa-solid fa-shuffle fa-fw"></i>
                                        <span > ما قبل التعيين</span>
                                </NavLink>
                            </li>
                            <li className="mt-2 mb-2 rounded" >
                                <NavLink to="jobs/supervisory" className="d-flex align-items-center gap-2 p-2" onClick={()=>handlePageName('صفحة الوظائف الاشرافية')}>
                                        <i class="fa-solid fa-user-tie fa-fw"></i>
                                        <span>وظائف إشرافية</span>
                                </NavLink>
                            </li>
                            <li className="mt-2 mb-2 rounded" >
                                <NavLink to='jobs/scientific' className="d-flex align-items-center gap-2 p-2" onClick={()=>handlePageName('صفحة الوظائف العلمية')}>
                                        <i class="fa-solid fa-microscope fa-fw"></i> 
                                        <span>وظائف علمية</span>
                                </NavLink>
                            </li>
                            <li className="mt-2 mb-2 rounded" >
                                <NavLink to='jobs/mandate' className="d-flex align-items-center gap-2 p-2" onClick={()=>handlePageName('صفحة الوظائف الانتدابية')}>
                                        <i class="fa-solid fa-handshake fa-fw"></i>
                                        <span>إنتدابات</span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="mt-2 mb-2 rounded" >
                        <NavLink to="family" className="d-flex align-items-center gap-2 p-2" onClick={()=>handlePageName('صفحة البيانات العائلية')}>
                                <i class="fa-solid fa-people-roof fa-fw"></i>
                                <span>بيانات الاسرة</span>
                        </NavLink>
                    </li>
                    <li className="mt-2 mb-2 rounded" >
                        <NavLink to="vacation" className="d-flex align-items-center gap-2 p-2" onClick={()=>handlePageName('صفحة الاجازات')}>
                                <i class="fa-solid fa-person-walking-luggage fa-fw"></i>
                                <span>الأجازات</span>
                        </NavLink>
                    </li>
                    <li className="mt-2 mb-2 rounded" >
                        <NavLink to="punishment" className="d-flex align-items-center gap-2 p-2" onClick={()=>handlePageName('صفحة الجزاءات')}>
                                <i class="fa-solid fa-scale-balanced fa-fw"></i>
                                <span>الجزاءات</span>
                        </NavLink>
                    </li>
                    <li className="mt-2 mb-2 rounded " >
                        <NavLink to="qualification" className="d-flex align-items-center gap-2 p-2" onClick={()=>handlePageName('صفحة المؤهلات العلمية')}>
                                <i class="fa-solid fa-ranking-star fa-fw"></i>
                                <span>المؤهلات العلمية</span>
                        </NavLink>
                    </li>
                    <li className="mt-2 mb-2 rounded" >
                        <NavLink to="certificatesofoperation" className="d-flex align-items-center gap-2 p-2" onClick={()=>handlePageName('صفحة الشهادات التقديرية')}>
                                <i class="fa-solid fa-award fa-fw"></i>
                                <span>الشهادات التقديرية</span>
                        </NavLink>
                    </li>
                </ul>
            </aside>
        </div>
    );
}
export default Sidebar;