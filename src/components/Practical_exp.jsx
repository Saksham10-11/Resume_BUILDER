import React, { useState } from "react";

function PracticalExp(props) {
  const [company, setCompany] = useState("Unique Solutions Ltd.");
  const [startYear, setStartYear] = useState("2022-03-25");
  const [endYear, setEndYear] = useState("2022-03-25");
  const [role, setRole] = useState("Software Developer");
  const [companyAddress, setcompanyAddress] = useState("Mumbai, India");

  const onSubmitForm = (e) => {
    e.preventDefault();
    const info_practical = {
      company: company,
      startYear: new Date(startYear),
      endYear: new Date(endYear),
      role: role,
      companyAddress: companyAddress,
    };
    props.saveForm(info_practical);
    props.setSavedPractical(true);
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    switch (name) {
      case "startYear":
        setStartYear(value);
        break;
      case "endYear":
        setEndYear(value);
        break;
      case "role":
        setRole(value);
        break;
      case "companyAddress":
        setcompanyAddress(value);
        break;
      case "company":
        setCompany(value);
        break;
    }
  };

  function isFormValid() {
    if (
      company != "" &&
      role != "" &&
      companyAddress != "" &&
      startYear != null &&
      endYear != null
    ) {
      return true;
    }
    return false;
  }

  const editOption = () => {
    props.setSavedPractical(false);
  };

  return (
    <div className="general-info-container">
      <div className="form-header">
        <img src="/Images/work-info.png" alt="" />
        <h1>Work Information</h1>
        {props.isSaved && (
          <button onClick={editOption}>
            <img src="./Images/edit.png" />
          </button>
        )}
      </div>
      {props.isSaved && (
        <div className="saved-container">
          <h1>{company}</h1>
          <p>{startYear + "  --  " + endYear}</p>
          <p>{role}</p>
          <p>{companyAddress}</p>
        </div>
      )}
      {!props.isSaved && (
        <div>
          <form onSubmit={onSubmitForm}>
            <div className="input-container">
              <label htmlFor="fullName">Company</label>
              <input
                type="text"
                name="company"
                placeholder="Name of the company"
                id="company"
                value={company}
                onChange={handleChange}
              />
            </div>
            <div className="input-container">
              <label htmlFor="fullName">Role</label>
              <input
                type="text"
                name="role"
                placeholder="Enter the role"
                id="role"
                value={role}
                onChange={handleChange}
              />
            </div>
            <div className="input-container">
              <label htmlFor="fullName">Address</label>
              <input
                type="text"
                name="companyAddress"
                placeholder="City , Locality"
                id="companyAddress"
                value={companyAddress}
                onChange={handleChange}
              />
            </div>
            <div className="input-container">
              <div className="date-container">
                <div className="input-date-container">
                  <label htmlFor="fullName">Start Year</label>
                  <input
                    type="date"
                    name="startYear"
                    placeholder="Starting year"
                    id="startYear"
                    value={startYear}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-date-container">
                  <label htmlFor="fullName">End Year</label>
                  <input
                    type="date"
                    name="endYear"
                    placeholder="End/Current year"
                    id="endYear"
                    value={endYear}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="btn">
              <button disabled={!isFormValid()}>Save</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default PracticalExp;
