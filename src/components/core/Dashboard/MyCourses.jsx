import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { fetchInstructorCourses } from '../../../services/operations/courseDetailsAPI';
import IconnBtn from '../../common/IconnBtn';
import { FaPlus } from 'react-icons/fa'
import CoursesTable from './InstructorCourses/CoursesTable';


const MyCourses = () => {

    const { token } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            const result = await fetchInstructorCourses(token);
            if (result) {
                setCourses(result);
            }
        }
        fetchCourses();
    }, [])


    return (
        <div className='text-white'>
            <div className='flex justify-between items-center'>
                <h1 className='text-white'>My Courses</h1>
                <IconnBtn
                    text="Add Course"
                    onClick={() => navigate("/dashboard/add-course")}
                >   <FaPlus /> </IconnBtn>
            </div>
        
            {courses && <CoursesTable courses={courses} setCourses={setCourses} /> }

        </div>
    )
}

export default MyCourses
