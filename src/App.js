import { colors } from "./colors.js"
import "./colors.css"


// import "./../node_modules/fontawesome-free-5.0.9/web-fonts-with-css/css/fontawesome.min.css"
// import "./../node_modules/fontawesome-free-5.0.9/web-fonts-with-css/css/fontawesome-all.min.css"
// import "./../node_modules/fontawesome-free-5.0.9/web-fonts-with-css/css/fa-solid.min.css"
// import "./../node_modules/fontawesome-free-5.0.9/web-fonts-with-css/css/fa-brands.min.css"
// import "./../node_modules/fontawesome-free-5.0.9/web-fonts-with-css/css/fa-regular.min.css"

import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.rtl.css'
import './../node_modules/bootstrap/dist/js/bootstrap.js'
import data from './data.json';
const { info, skills, softskills, projects, langs, intrests, experience, social, certificate } = data;

const { name, tahsil, job, email, image, phone, taahol, sarbazi, description, birthdate } = info;


// var fa = require("fontawesome");


function App() {
  return (
    <div className="App">
      <div className="height"></div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-sm-12 right order-md-2">
            <div className="cards c1 text-start">
              <img src={image} alt='pic' className="img-fluid img-prof" />
              <div className="infor">

                <h3>اطلاعات شخصی</h3>
                <h6>نام: {name}</h6>
                <h6>شغل: {job}</h6>
                <h6>{email} :ایمیل</h6>
                <h6>شماره تلفن: {phone}</h6>
                <h6>تاریخ تولد: {birthdate}</h6>
                <h6>وضعیت تحصیل: {tahsil}</h6>
                <h6>وضعیت تاهل: {taahol}</h6>
                <h6>وضعیت خدمت: {sarbazi}</h6>

                <h3>درباره من</h3>
                <h6>{description}</h6>


                <hr></hr>
                <h3>مهارت های فنی</h3>
                {Object.entries(skills).map(([skill, value]) => (
                  <div /*key={skill}*/ className="mb-3">
                    <label>{skill}</label>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: value + '%' }}>
                        {value}%
                      </div>
                    </div>
                  </div>
                ))}
                <hr></hr>
                <h3>مهارت های نرم</h3>
                {Object.entries(softskills).map(([skill, value]) => (
                  <div /*key={skill}*/ className="mb-3">
                    <label>{skill}</label>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: value + '%' }}>
                        {value}%
                      </div>
                    </div>
                  </div>
                ))}
                <hr></hr>
                <h3>زبان ها</h3>
                {Object.entries(langs).map(([lang, value]) => (
                  <div /*key={lang}*/ className="mb-3">
                    <h5>{lang}</h5>
                    <label>vocabulary</label>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: value.vocabulary + '%' }}>
                        {value.vocabulary}%
                      </div>
                    </div>
                    <label>grammer</label>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: value.grammer + '%' }}>
                        {value.grammer}%
                      </div>
                    </div>
                    <label>listening</label>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: value.listening + '%' }}>
                        {value.listening}%
                      </div>
                    </div>
                    <label>speaking</label>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: value.speaking + '%' }}>
                        {value.speaking}%
                      </div>
                    </div>
                  </div>
                ))}
                <hr></hr>
                <h3>علاقه مندی ها</h3>
                <div className='row'>
                  {Object.entries(intrests).map(([a, value]) => (
                    <div /*key={a}*/ className=" col-6">
                      <h6>{value}</h6>
                    </div>
                  ))}
                </div>

                <hr></hr>

                <h3>شبکه های اجتماعی</h3>
                <div className='row'>
                  {Object.keys(social).map(app => (
                    <a
                      href={social[app]}
                      className='col-4
                    link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>

                      <h6>{app}</h6>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="height"></div>
          </div>
          <div className="col-12 col-md-8 col-sm-12 left order-md-1">
            <div className="cards c2 text-start">

              <h3>پروژه ها</h3>
              <div className='height'></div>

              <div className="row">
                {Object.keys(projects).map(key => (
                  <div className="col-sm-6 col-md-6 mb-3 mb-sm-0">
                    <div className="card ca1">
                      <div className="card-body">
                        <h5 className="card-title">{projects[key].name} , {projects[key].date}</h5>
                        <p className="card-text">{projects[key].description}</p>
                        <div className="progress" >
                          {Object.keys(projects[key].langs).map(language => (
                            <div
                              // key={language}
                              className="progress-bar pr-p"
                              style={{ width: projects[key].langs[language] + '%' }}
                              role="progressbar"
                              aria-valuenow={projects[key].langs[language]}
                              aria-valuemin="0"
                              aria-valuemax="100"
                              className={colors[language]}
                            >
                              <p className="color-w pr-pp">
                                {language}
                                {/* {projects[key].langs[language]}% */}
                              </p>
                            </div>
                          ))}
                        </div>
                        <div className="height"></div>
                        <a href={projects[key].link} className="btn btn-primary">مشاهده پروژه</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
            <div className="height"></div>
            <div className="cards c3 text-start">
              <i class="fa fa-info" aria-hidden="true"></i>
              <h3>تجربیات</h3>

              <div className="row">
                {Object.keys(experience).map(key => (
                  <div className="col-sm-6 col-md-12 mb-3 mb-sm-0">
                    <div className="card ca1">
                      <div className="card-body">
                        <h5 className="card-title">{experience[key].lang} / {experience[key].name}</h5>
                        <p className="card-text text-primary">{experience[key].date}</p>
                        <p className="card-text">{experience[key].description}</p>
                        <a href={experience[key].link} className="btn btn-primary">مشاهده پروژه</a>
                      </div>
                    </div>
                    <div className="height"></div>
                  </div>
                ))}
              </div>

            </div>
            <div className="height"></div>
            <div className="cards c4 text-start">
              <h3>
                گواهینامه ها
              </h3>
              <div className="row">
                {Object.keys(certificate).map(key => (
                  <div className="col-sm-3 mb-3 mb-sm-0">
                    <div className="card ca1">
                      {/* {certificate[key].pic_link && <img src={certificate[key].pic_link } className="card-img-top" alt="..." />} */}
                      <img src={certificate[key].pic_link} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{certificate[key].source}</h5>
                        <p className="card-text">{certificate[key].lang}</p>
                        <a href={certificate[key].link} className="btn btn-primary">راستی ازمایی</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="height"></div>
            {/* <div className="cards c5 text-start"> */}
            {/* <h3>شبکه های اجتماعی</h3>
              {Object.keys(social).map(app => (
                <a href={app} className='link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
                  <h6>{app}</h6>
                </a>
              ))} */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;