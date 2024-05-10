import { data } from "./data";
import { FaBell, FaEdit } from 'react-icons/fa';
import { IoMdContact } from "react-icons/io";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { TbCertificate } from "react-icons/tb";

function App() {
  return (
    <>
      <div className="main-container">
        <div className="drawer">
          {/* sidenav halne thau */}
          <p>side nav</p>
        </div>
        <div className="main">
          <div className="nav" >
            <p></p>

            <div className="info">
              <div className="bell-icon">
                <FaBell size={25} />
              </div>
              <div>
                <IoMdContact size={70} />
              </div>

              <div>
                <p className="name">
                  Aashish Thapa
                  <IoIosArrowDown size={30} />
                </p>
                <p className="designation">Administrator</p>
              </div>
            </div>
          </div>
          <div className="headingContainer">
            <p>Dashboard</p>
            <IoIosArrowForward size={30} />
            <p>Profile</p>
          </div>

          {/* personal info */}
          <div className="container">
            <div className="head">
              <p className="title">Personal Information</p>
              <button className="button">
                edit
                <FaEdit />
              </button>
            </div>
            <div className="infoData">
              <div className="column">
                {data.personalInfoCol1.map((item) => (
                  <>
                    <div className="row">
                      <p className="label">{item.label}</p>
                      <p className="data">{item.value}</p>
                    </div>
                  </>
                ))}
              </div>

              <div className="column">
                {data.personalInfoCol2.map((item) => (
                  <>
                    <div className="row">
                      <p className="label">{item.label}</p>
                      <p className="data">{item.value}</p>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>

          {/* address */}
          <div className="container">
            <div className="head">
              <p className="title">Address Information</p>
              <button className="button">
                edit
                <FaEdit />
              </button>
            </div>

            <div className="infoData">
              <div className="column">
                {data.addressInfoCol1.map((item) => (
                  <>
                    <div className="row">
                      <p className="label">{item.label}</p>
                      <p className="data">{item.value}</p>
                    </div>
                  </>
                ))}
              </div>

              <div className="column">
                {data.addressInfoCol2.map((item) => (
                  <>
                    <div className="row">
                      <p className="label">{item.label}</p>
                      <p className="data">{item.value}</p>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>

          {/* education */}
          <div className="container">
            <div className="head">
              <p className="title">Education</p>
              <button className="button">
                edit
                <FaEdit />
              </button>
            </div>

            <div className="infoData">
              <div className="column">
                <div className="row">
                  <p className="label">2024</p>
                  <div className="educationCol">
                    <p className="data">BSc(Hons) in Computer Science</p>
                    <p className="college">Herald College of Management</p>
                    <p className="certificate">
                      <TbCertificate size={70} />
                      Certificate.pdf
                    </p>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="row">
                  <p className="label">2024</p>
                  <div className="educationCol">
                    <p className="data">BSc(Hons) in Computer Science</p>
                    <p className="college">Herald College of Management</p>
                    <p className="certificate">
                      <TbCertificate size={70} />
                      Certificate.pdf
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Office info */}
          <div className="container">
            <div className="head">
              <p className="title">Office Information</p>
              <button className="button">
                edit
                <FaEdit />
              </button>
            </div>

            <div className="infoData">
              <div className="column">
                {data.officeInfoCol1.map((item) => (
                  <>
                    <div className="row">
                      <p className="label">{item.label}</p>
                      <p className="data">{item.value}</p>
                    </div>
                  </>
                ))}
              </div>

              <div className="column">
                {data.officeInfoCol2.map((item) => (
                  <>
                    <div className="row">
                      <p className="label">{item.label}</p>
                      <p className="data">{item.value}</p>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>

          {/* Office info */}
          <div className="container">
            <div className="head">
              <p className="title">Family</p>
              <button className="button">
                edit
                <FaEdit />
              </button>
            </div>

            <div className="infoData">
              <div className="column">
                {data.familyInfoCol1.map((item) => (
                  <>
                    <div className="row">
                      <p className="label">{item.label}</p>
                      <p className="data">{item.value}</p>
                    </div>
                  </>
                ))}
              </div>

              <div className="column">
                {data.familyInfoCol2.map((item) => (
                  <>
                    <div className="row">
                      <p className="label">{item.label}</p>
                      <p className="data">{item.value}</p>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
