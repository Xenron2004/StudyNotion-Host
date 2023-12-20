import React, { useState } from 'react'
import { HomePageExplore } from "../../../data/homepage-explore";
import Highlighted from './Highlighted';
import CourseCard from './CourseCard';



const tabsName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skill paths",
    "Career paths",

];

const ExploreMore = () => {

    const [currentTab, setCurrentTab] = useState(tabsName[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);

    const setMyCards = (value) => {
        setCurrentTab(value);
        const result = HomePageExplore.filter((course) => course.tag === value);
        setCourses(result[0].courses[0].heading);
    }

    return (
        <div>
            <div className='text-4xl font-semibold text-center'>
                Unlock the
                <Highlighted text={"Power of Code"} />
            </div>

            <p className='text-center text-richblack-300 text-sm font-[16px] mt-3'>
                Learn to build anything you can imagine
            </p>

            <div className='flex flex-row rounded-full mb-5 px-1 py-1 bg-richblack-800 border-richblack-100 mt-5'>
                {
                    tabsName.map((element, index) => {
                        return (
                            <div
                                className={`text-[16px] flex flex-row items-center gap-2 ${currentTab === element ? "bg-richblack-900 text-richblack-5 font-medium" : "text-richblack-200"} rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 px-7 py-2 `} key={index}
                                onClick={() => setMyCards(element)}
                            >
                                {element}
                            </div>
                        )
                    })
                }
            </div>

            <div className='lg:h-[150px] flex flex-row justify-center mb-20 '>

                {/* course cards group */}
                <div className='absolute flex flex-row gap-10 justify-between w-full mt-5  '>
                    {
                        courses.map((element, index) => {
                            return (
                                <CourseCard
                                    key={index}
                                    cardData={element}
                                    currentCard={currentCard}
                                    setCurrentCard={setCurrentCard}
                                />

                            )
                        })
                    }
                </div>


            </div>

            {/* course cards group */}

            {/* <div className='absolute flex flex-row gap-10 justify-between
          w-full  '>
            {
                courses.map( (element, index) => {
                    return (
                        <CourseCard 
                        key={index}
                        cardData = {element}
                        currentCard = {currentCard}
                        setCurrentCard = {setCurrentCard}
                        />
                    
                    )
                } )
            }
          </div>  */}

        </div>
    )
}

export default ExploreMore
