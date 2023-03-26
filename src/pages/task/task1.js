import * as React from "react";
import {useState} from "react";
import {motion,AnimatePresence} from "framer-motion";
import './kletka.css'
import parse from 'html-react-parser';

export const Task1 = () => {
    const parse = require('html-react-parser');
    let i=0;
    let text1='25 gr natriy oksidinin’(Na <sub>2</sub>O) mug’darin tabin’?';

    const [isVisible, setVisible] = useState(false);
    const [isVisible2, setVisible2] = useState(false);
    const [isVisible3, setVisible3] = useState(false);
    const [isVisible4, setVisible4] = useState(false);
    const [isVisible5, setVisible5] = useState(false);
    const [isVisible6, setVisible6] = useState(false);
    const [isVisible7, setVisible7] = useState(false);
    const [isVisible8, setVisible8] = useState(0);
    const [isVisible9, setVisible9] = useState(0);
    const handleVisibality = () =>{ setVisible(true)}
    const handleVisibality2 = () =>{ setVisible2(true)}
    const handleVisibality3 = () =>{ setVisible3(true)}
    const handleVisibality4 = () =>{ setVisible4(true)}
    const handleVisibality5 = () =>{ setVisible5(true)}
    const handleVisibality6 = () =>{ setVisible6(true)}
    const handleVisibality7 = () =>{ setVisible7(true)}
    const handleVisibality8 = () =>{ setVisible8(1)}
    const handleVisibality9 = () =>{ setVisible8(0); setVisible9(2)}
    setTimeout(handleVisibality,3000);
    setTimeout(handleVisibality2,5000);
    setTimeout(handleVisibality3,6000);
    setTimeout(handleVisibality4,9000);
    setTimeout(handleVisibality5,12000);
    setTimeout(handleVisibality6,15000);
    setTimeout(handleVisibality7,18000);
    setTimeout(handleVisibality8,21000);
    setTimeout(handleVisibality9,90000);



    return (<div className="container-xl flex flex w-[100%] h-[100vh] justify-center items-center kletka">
                <div className="flex flex-col items-center ">
                    <motion.div
                        initial={{marginBottom:'25px', opacity: 0, x: '-100vh' }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 4 }}

                    >
                        <p className="italic text-purple-800 text-3xl">
                            {parse(text1)}
                        </p>
                    </motion.div>
                           {
                            isVisible &&
                            <motion.div
                                initial={{ opacity: 0, x: '-100vh'}}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 3 }}

                            >
                                <p className="italic text-rose-600 text-3xl">
                                    Berilgen: Mr(Na<sub>2</sub>O) =2*23=16=62/mol
                                </p>
                            </motion.div>
                        }




                      <div className="flex flex-col justify-center items-center rounded-lg shadow-inner  w-[500px] h-[350px] p-[20px] m-[20px]">
                          <div className="flex flex-row justify-center items-center mb-[50px]">
                              <div className="flex-col justify-center items-center">
                                  <div className="h-[100px] w-[80px] flex justify-center items-center">
                                      <AnimatePresence>
                                          {
                                              isVisible2 && (<motion.div
                                                  initial={{opacity:0}}
                                                  animate={{opacity:1}}
                                                  transition={{duration:3}}
                                                  >
                                              <p className="italic text-purple-800 m-[25px] text-5xl">1mol</p>

                                              </motion.div>)
                                          }
                                      </AnimatePresence>

                                  </div>
                                  <div className="h-[100px] w-[80px] flex justify-center items-center">
                                      <AnimatePresence>
                                          {
                                              isVisible5 && (<motion.div
                                                  initial={{opacity:0}}
                                                  animate={{opacity:1}}
                                                  transition={{duration:3}}
                                              >
                                                  <p className="italic text-purple-800 m-[25px] text-5xl">X</p>

                                              </motion.div>)
                                          }
                                      </AnimatePresence>

                                  </div>
                              </div>
                              <div className="flex flex-col justify-center items-center ">
                                  <div className="h-[100px] w-[250px] flex justify-center items-center">
                                      <AnimatePresence>
                                          {
                                              isVisible3 && (<motion.div
                                                  initial={{opacity:0,width:0}}
                                                  animate={{opacity:1,width:"200px"}}
                                                  transition={{duration:3}}
                                                  className="h-[5px] bg-black"
                                              >
                                              </motion.div>)
                                          }
                                      </AnimatePresence>
                                  </div>
                                  <div className="h-[100px] w-[250px] flex justify-center items-center">
                                      <AnimatePresence>
                                          {
                                              isVisible6 && (<motion.div
                                                  initial={{opacity:0,width:0}}
                                                  animate={{opacity:1,width:"200px"}}
                                                  transition={{duration:3}}
                                                  className="h-[5px] bg-black"
                                              >
                                              </motion.div>)
                                          }
                                      </AnimatePresence>
                                  </div>
                              </div>
                              <div className="flex-col justify-center items-center">
                                  <div className="h-[100px] w-[80px] flex justify-center items-center">
                                      <AnimatePresence>
                                          {
                                              isVisible4 && (<motion.div
                                                  initial={{opacity:0}}
                                                  animate={{opacity:1}}
                                                  transition={{duration:3}}
                                              >
                                                  <p className="italic text-purple-800 m-[25px] text-5xl">62gr</p>

                                              </motion.div>)
                                          }
                                      </AnimatePresence>

                                  </div>
                                  <div className="h-[100px] w-[80px] flex justify-center items-center">
                                      <AnimatePresence>
                                          {
                                              isVisible7 && (<motion.div
                                                  initial={{opacity:0}}
                                                  animate={{opacity:1}}
                                                  transition={{duration:3}}
                                              >
                                                  <p className="italic text-purple-800 m-[25px] text-5xl">25</p>

                                              </motion.div>)
                                          }
                                      </AnimatePresence>
                                  </div>
                              </div>
                          </div>
                          <AnimatePresence>
                              {
                                  isVisible8===1 && (<motion.div
                                      initial={{opacity:0}}
                                      animate={{opacity:1,
                                      transitionEnd:{
                                          display:'block',
                                          opacity:1
                                      }}}
                                      transition={{duration:5}}
                                  >
                                      {isVisible9!==2 && <p className="italic text-purple-800 text-5xl  text-bold">X=?</p>}
                                      {isVisible9===2 &&
                                          <motion.p
                                              initial={{opacity:0}}
                                              animate={{opacity:1,
                                                  transitionEnd:{
                                                  display:"block"
                                                  }}}
                                              transition={{duration:3}}
                                              exit={{opacity:1}}
                                          className="italic text-rose-500 text-5xl text-bold">X=0.4mol
                                          </motion.p>}

                                  </motion.div>)

                              }
                          </AnimatePresence>
                          {/*<AnimatePresence>
                              {
                                  isVisible9===2 && (<motion.div
                                      initial={{opacity:0}}
                                      animate={{opacity:1}}
                                      transition={{duration:3}}

                                  >
                                      <p className="italic text-purple-800 text-3xl animate-bounce text-bold">X=25</p>

                                  </motion.div>)
                              }
                          </AnimatePresence>*/}

                      </div>


                </div>

            </div>)
}


/*
<div className="flex flex-row justify-center items-center mb-[50px]">
    <div className="flex flex-col ml-[50px] h-[120px] w-[50px]  justify-between">
        <AnimatePresence>
            {
                isVisible && (<motion.p
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:3}}
                    className="text-2xl ">
                    160
                </motion.p>)
            }
        </AnimatePresence>

        <p className="italic text-purple-800 text-2xl">112</p>
    </div>
    <div className="m-[10px]">
        <AnimatePresence>
            {
                isVisible2 &&(<motion.div
                    initial={{height:"5px",width:'0px', opacity:0}}
                    animate={{height:'5px',width:'200px',opacity:1}}
                    transition={{duration:5}}
                    className="bg-[black]"></motion.div>)
            }

        </AnimatePresence>
        <div className="absolute z-[100]  w-[200px] h-[5px] rotate-[-25deg] bg-[black]"></div>
    </div>
    <div className="flex flex-col mr-[50px] h-[120px] w-[50px] justify-between items-center">
        <p className="italic text-purple-800 text-2xl">100%</p>
        <p className="italic text-purple-800 text-2xl">X</p>
    </div>
</div>*/
