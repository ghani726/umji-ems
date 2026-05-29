import { BriefcaseBusiness, Eye, EyeOff, UserRound } from 'lucide-react';

const CompanyRegister = ({data}) =>{

    
    return (
        <>
            <div className="flex flex-col gap-6 w-full bg-secondary-100">
                <div className='flex justify-between items-center gap-2'>
                    <div className='flex flex-col min-w-14 justify-center items-center shrink-0 text-secondary-600'>
                        <div className='h-10 w-10 rounded-full flex justify-center items-center bg-white'>
                            <UserRound></UserRound>
                        </div>
                        <p className='text-xs'>Personal Details</p>
                    </div>
                    <div className='w-[calc(100%-120px)] z-30 rounded-full flex-1 h-2 bg-white'></div>
                    <div className='flex flex-col min-w-14 justify-center shrink-0 items-center text-secondary-600'>
                        <div className='h-10 w-10 rounded-full flex justify-center items-center bg-white'>
                            <BriefcaseBusiness></BriefcaseBusiness>
                        </div>
                        <p className='text-xs'>Professional Details</p>
                    </div>
                </div>
                {/* <PersonalDetails data={data}></PersonalDetails> */}
            </div>
        </>
    )
}

export default CompanyRegister