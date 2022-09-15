import React from 'react';

const AddEmp = () => {
    return (
        <div id='newfields'>
        <h3>Add aide to Vasanth [TODO]</h3>
        <p>
          <label htmlFor='neweid'>Id :</label>
          <input
            type='text'
            size='25'
            id='neweid'
            placeholder='FNPXXXXX'
            pattern='FNP[0-9]{3}'
            title='Please enter id in the format FNPXXXXX'
          />
        </p>
        <p>
          <label htmlFor='newename'>Name : </label>
          <input type='text' size='100' id='newename' />
        </p>
        <p>
          <label htmlFor='newedesig'>Designation : </label>
          <select id='newedesig'>
            <option value='Intern'>Intern</option>
            <option value='Associate Software Engineer'>
              Associate Software Engineer
            </option>
            <option value='Software Engineer'>Software Engineer</option>
            <option value='Senior Software Engineer'>Senior Software Engineer</option>
            <option value='Module Lead'>Module Lead</option>
            <option value='Associate Technical Lead'>Associate Technical Lead</option>
            <option value='Technical Lead'>Technical Lead</option>
            <option value='Senior Technical Lead'>Senior Technical Lead</option>
            <option value='Associate Technical Architect'>
              Associate Technical Architect
            </option>
            <option value='Technical Architect'>Technical Architect</option>
            <option value='Senior Technical Architect'>
              Senior Technical Architect
            </option>
            <option value='Associate Project Manager'>
              Associate Project Manager
            </option>
            <option value='Project Manager'>Project Manager</option>
            <option value='Senior Project Manager'>Senior Project Manager</option>
            <option value='Project Coordinator'>Project Coordinator</option>
            <option value='Program Manager'>Program Manager</option>
            <option value='Associate Vice President'>Associate Vice President</option>
            <option value='Vice President'>Vice President</option>
            <option value='Chief Technical Officer'>Chief Technical Officer</option>
            <option value='HR Manager'>HR Manager</option>
            <option value='Assistant HR Manager'>Assistant HR Manager</option>
            <option value='HR Executive'>HR Executive</option>
            <option value=''></option>
          </select>
        </p>
        <p>
          <label htmlFor='neweadminman'>Adminitrative Manager : </label>
          <select id='neweadminman'>
            <option value='FNP00179'>Vasanth Kamatgi</option>
          </select>
        </p>
        <p>
          <label htmlFor='newefuncman'>Functional Manager : </label>
          <select id='newefuncman'>
            <option value='FNP00179'>Vasanth Kamatgi</option>
          </select>
        </p>
        <label htmlFor='neweprojects'>Projects : </label>
        <div id='projects'>
          <p>
            <input type='checkbox' id='Red Roses' name='neweprojects' />
            <label htmlFor='Red Roses'>Red Roses</label>
          </p>
          <p>
            <input type='checkbox' id='Kitchen' name='neweprojects' />
            <label htmlFor='Kitchen'>Kitchen</label>
          </p>
          <p>
            <input type='checkbox' id='Galleria' name='neweprojects' />
            <label htmlFor='Galleria'>Galleria</label>
          </p>
          <p>
            <input type='checkbox' id='Golliath' name='neweprojects' />
            <label htmlFor='Golliath'>Golliath</label>
          </p>
      
          <p>
            <input type='checkbox' id='p5' name='neweprojects' />
            <label htmlFor='p5'>Project 5</label>
          </p>
          <p>
            <input type='checkbox' id='p6' name='neweprojects' />
            <label htmlFor='p6'>Project 6</label>
          </p>
          <p>
            <input type='checkbox' id='p7' name='neweprojects' />
            <label htmlFor='p7'>Project 7</label>
          </p>
          <p>
            <input type='checkbox' id='p8' name='neweprojects' />
            <label htmlFor='p8'>Project 8</label>
          </p>
        </div>
        <p id='addnewp'>
          <input type='submit' value='Add' id='addnew' name='addnew' />
        </p>
      </div>
      
    );
};

export default AddEmp;