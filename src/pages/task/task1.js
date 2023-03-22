import * as React from "react";
import {useState} from "react";

export const Task1 = () => {


    return (<div className="container-xl flex flex w-[100%] h-[100vh] justify-center items-center">
                <div className="flex flex-col items-center">
                    <p className="m-[50px] text-3xl">25 gr natriy oksidinin’  (Na<sub>2</sub>O)  mug’darin tabin’?</p>
                  <div className="flex flex-row">
                      <div className="flex justify-center flex-wrap items-center rounded-lg shadow-inner bg-slate-50 w-[500px] h-[350px] p-[20px] m-[20px]">
                          <p className="text-2xl ">
                              Berilgen: Mr(Na<sub>2</sub>O) =2*23=16=62/mol
                          </p>
                      </div>
                      <div className="flex flex-col justify-center items-center rounded-lg shadow-inner bg-slate-50 w-[500px] h-[350px] p-[20px] m-[20px]">
                          <div className="flex flex-row justify-center items-center mb-[50px]">
                              <div className="flex flex-col ml-[50px] h-[120px] w-[50px]  justify-between">
                                  <p className="text-2xl ">160</p>
                                  <p className="text-2xl">112</p>
                              </div>
                              <div className="m-[10px]">
                                  <div className="w-[200px] h-[5px] rotate-[25deg] bg-[black]"></div>
                                  <div className="absolute z-[100]  w-[200px] h-[5px] rotate-[-25deg] bg-[black]"></div>
                              </div>
                              <div className="flex flex-col mr-[50px] h-[120px] w-[50px] justify-between items-center">
                                  <p className="text-2xl">100%</p>
                                  <p className="text-2xl">X</p>
                              </div>
                          </div>
                          <p className="text-3xl animate-bounce text-bold">X=70%</p>
                      </div>
                  </div>

                </div>

            </div>)
}