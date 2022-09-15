import React from 'react';

const thead = () => {
    return (
        <thead>
            <tr>
                <th>Hierarchy</th>
                <th className="eid">Id</th>
                <th className="ename">Name</th>
                <th className="edesig">Designation</th>
                <th className="elevel">Level 
                <input className="filterbtn" id="filterlevel" type="radio" name="gridfilter" /></th>
                <th className="eadminman">Admin Manager
                 <input className="filterbtn" id="filteradminman" type="radio" name="gridfilter" /></th>
                <th className="efuncman">Functional Manager <input className="filterbtn" id="filterfuncman" type="radio" name="gridfilter" /></th>
                <th className="edreports">Direct <input className="filterbtn" id="filterdreports" type="radio" name="gridfilter" /></th>
                <th className="etreports">Total <input className="filterbtn" id="filtertreports" type="radio" name="gridfilter" /></th>
                <th className="eprojects">Projects <input className="filterbtn" id="filterprojects" type="radio" name="gridfilter" /></th>
            </tr>
        </thead>
    );
};

export default thead;