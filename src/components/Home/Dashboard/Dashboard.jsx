import React from 'react'
import './assets/style.css'
import FrequencyChart from './FrequencyChart.jsx'
import { DomainChart } from './DomainChart';
import LanguageChart from './LanguageChart';
export default function Dashboard() {
    return (
        <div class="main-content-inner">
            <div class="row" style={{margin : '0px'}}>
                <div class="col-lg-8">
                    <div class="row">
                        <div class="col-md-6 mt-5 mb-3">
                            <div class="card" style={{ backgroundColor: '#6082e6' }}>
                                <div class="seo-fact sbg1">
                                    <div class="p-4 d-flex justify-content-between align-items-center">
                                        <div class="seofct-icon"> Projects : </div>
                                        <h2 className="number">231</h2>
                                    </div>
                                    <canvas id="seolinechart1" height="50"></canvas>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mt-md-5 mb-3">
                            <div class="card" style={{ backgroundColor: '#44eb97' }}>
                                <div class="seo-fact sbg2">
                                    <div class="p-4 d-flex justify-content-between align-items-center">
                                        <div class="seofct-icon"> Students : </div>
                                        <h2 className="number">423</h2>
                                    </div>
                                    <canvas id="seolinechart2" height="50"></canvas>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3 mb-lg-0">
                            <div class="card" style={{ backgroundColor: '#f76072' }}>
                                <div class="seo-fact sbg2">
                                    <div class="p-4 d-flex justify-content-between align-items-center">
                                        <div class="seofct-icon"> Domains : </div>
                                        <h2 className="number">23</h2>
                                    </div>
                                    <canvas id="seolinechart2" height="50"></canvas>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card" style={{ backgroundColor: '#bdbd4f' }}>
                                <div class="seo-fact sbg2">
                                    <div class="p-4 d-flex justify-content-between align-items-center">
                                        <div class="seofct-icon" style={{ fontSize: '25px' }}> Average projects per year : </div>
                                        <h2 className="number">33</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 mt-5">
                    <div class="card">
                        <div class="card-body pb-0">
                            <h4 class="header-title">Programming Language & Techologies</h4>
                            <LanguageChart/>
                        </div>
                    </div>
                </div>

                <div class="col-lg-8 mt-5">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="header-title">Project Frequency</h4>
                            <FrequencyChart/>
                        </div>
                        
                    </div>
                </div>

                <div class="col-lg-4 mt-5">
                    <div class="card h-full">
                        <div class="card-body">
                            <h4 class="header-title">Project Domain</h4>
                            <DomainChart/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
