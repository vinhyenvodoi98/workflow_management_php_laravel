import React, { useState } from 'react';
import KPIGroup from '../components/KPI/KPIGroup';
import KPIPersonal from '../components/KPI/KPIPersonal';
import KPIStatistics from '../components/KPI/KPIStatistics';
import KPIEvaluation from '../components/KPI/KPIEvaluation';

export default function KPIPage() {
  const [tab, setTab] = useState(0);

  return (
    <div className='container'>
      <div className='underNav'></div>
      <div className='row'>
        <div className='col-3'>
          <div className='sidebar-item'>
            <div className='make-me-sticky'>
              <div className='item'>
                <p className='title'>
                  <strong>KPI</strong>
                </p>
                <ul className='nav nav-pills nav-stacked' role='tablist'>
                  <li
                    onClick={() => {
                      setTab(0);
                    }}
                  >
                    <a role='tab' data-toggle='pill' className='active'>
                      KPI Group
                    </a>
                  </li>
                  <li
                    onClick={() => {
                      setTab(1);
                    }}
                  >
                    <a role='tab' data-toggle='pill'>
                      KPI Personal
                    </a>
                  </li>
                  <li
                    onClick={() => {
                      setTab(2);
                    }}
                  >
                    <a role='tab' data-toggle='pill'>
                      KPI Evaluation
                    </a>
                  </li>
                  <li
                    onClick={() => {
                      setTab(3);
                    }}
                  >
                    <a role='tab' data-toggle='pill'>
                      KPI Statistics
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='col-9'>
          <div className='content-section'>
            <p className='title'></p>
            {tab === 0 ? (
              <KPIGroup />
            ) : tab === 1 ? (
              <KPIPersonal />
            ) : tab === 2 ? (
              <KPIEvaluation />
            ) : (
              <KPIStatistics />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
