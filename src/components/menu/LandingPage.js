import ball_data from '../../../src/assets/ball_data.png'
import ball_data2 from '../../../src/assets/ball_data2.png'
import { LEAGUES } from '../../data/Api'

export default function LandingPage() {



    return (
        <div className=" flex flex-col">
            <div className="h-screen border border-1 border-tiffanyBlue rounded-3xl ">
                <div className="h-3/5 max-md:h-5/6 flex flex-row max-sm:flex-col border border-1 border-tiffanyBlue rounded-3xl">
                    <div className="relative basis-1/2">
                        <div className="absolute top-1/2 -translate-y-1/2 w-full h-4/5">
                            <div className='flex flex-col justify-evenly h-full px-5'>
                                <div>
                                    <p className='text-white text-md font-content italic pb-2'>Données de football : Raconter l'histoire du football !</p>
                                    <p className='text-tiffanyBlue text-5xl uppercase font-title'>FootStat</p>
                                </div>
                                <div>
                                    <span className='text-white text-2xl font-content'>Les 5 plus grandes ligues européennes <br/> (2002 ~ 2022) : </span>
                                </div>
                                <div className='flex w-full justify-evenly'>
                                    <div className='basis-1/5'>
                                        <img className='w-3/4' src={LEAGUES.IMG+'/Ligue 1'} alt="logo_ligue1"/>
                                    </div>
                                    <div className='basis-1/5'>
                                        <img className='w-3/4' src={LEAGUES.IMG+'/Premier League'} alt="logo_premier_league"/>
                                    </div>
                                    <div className='basis-1/5'>
                                        <img className='w-3/4' src={LEAGUES.IMG+'/Bundes Liga'} alt="logo_bundesliga"/>
                                    </div> 
                                    <div className='basis-1/5'>
                                        <img className='w-3/4' src={LEAGUES.IMG+'/Serie A'} alt="logo_serie_a"/>                        
                                    </div> 
                                    <div className='basis-1/5'>
                                        <img className='w-3/4' src={LEAGUES.IMG+'/La Liga'} alt="logo_la_liga"/>
                                    </div>                                                                                                          
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative basis-1/2">
                        <div className="absolute top-1/2 -translate-y-1/2 w-full h-5/6">
                            <div className='flex h-full justify-center items-center'>
                                <div className='w-1/2'>
                                    <img src={ball_data2} alt="ball_data"/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="h-2/5 max-md:h-1/6 flex flex-row max-sm:flex-col border border-1 border-tiffanyBlue rounded-3xl">
                    <div className='flex py-3 justify-center w-full'>
                        <div className='basis-1/3 border border-1 border-tiffanyBlue rounded-3xl'>
                            HI
                        </div>
                        <div className='basis-1/3 border border-1 border-tiffanyBlue rounded-3xl'>
                            HI
                        </div>
                        <div className='basis-1/3  border border-1 border-tiffanyBlue rounded-3xl'>
                            HI
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}