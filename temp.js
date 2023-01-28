
let nav = document.getElementById('navbar');


nav.innerHTML = `<div class="container-fluid">
      <div class="row">
        <nav class="navbar bgcol_pri navbar-expand-sm nav-hide">
          <div class="container-fluid justify-content-center">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link top-nav-text" aria-current="page" href="https://dbit.in/">DBIT Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link top-nav-text" href="http://parent.dbit.in/"
                  >Parent Login</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link top-nav-text" href="https://alumni.dbit.in/">Alumni</a>
              </li>
              <li class="nav-item">
                <a class="nav-link top-nav-text" href="https://moodle.dbit.in/">Moodle</a>
              </li>
              <li class="nav-item">
                <a class="nav-link top-nav-text" href="https://elearn.dbit.in/">E-Learn</a>
              </li>
              <li class="nav-item">
                <a class="nav-link top-nav-text" href="http://dbitlrc.dbit.in/">Library</a>
              </li>
              <li class="nav-item">
                <a class="nav-link top-nav-text" href="https://dbcldrive.dbit.in/"
                  >DBCL Drive</a
                >
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div class="row">
        <img class="p-0" src="/assets/extc banner.PNG" alt="" srcset="" />
      </div>
    </div>

    <header class="sticky-top bgcol_pri" style="z-index: 10">
      <nav
        class="navbar navbar-expand-xl bg-light container-fluid justify-content-between"
      >
        <span class="navbar-brand mb-0 h1 ms-3">EXTC DBIT</span>
        <button
          class="navbar-toggler me-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header justify-content-end">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 offcanvas-nav">
              <li class="nav-item text-center">
                <a class="nav-link active" aria-current="page" href="/index.html">HOME</a>
              </li>
              <li class="nav-item text-center">
                <a class="nav-link" href="/aboutus/aboutus.html">ABOUT US</a>
              </li>
              <li class="nav-item dropdown text-center">
                <a
                  class="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ACADEMICS
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/academics/academic-calendar.html">Academic Calender</a>
                  </li>
                  <li><a class="dropdown-item" href="/academics/exam-calendar.html">Exam Timetable</a></li>
                  <li><a class="dropdown-item" href="/academics/timetable.html">Timetable</a></li>
                  <li class="dropend drop-down">
                    <a
                      class="dropdown-item dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Syllabus
                    </a>
                    <ul class="dropdown-menu sub-menu">
                      <li class="dropend drop-down">
                        <a
                          class="dropdown-item dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Second Year
                        </a>
                        <ul class="dropdown-menu sub-menu">
                          <li>
                            <a class="dropdown-item" href="/assets/pdf/SEEXTC_Rev2019_C-Scheme.pdf">SEIT-C Scheme</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="/assets/pdf/SEEXTC_Rev2019_C-Scheme.pdf">SEIT-CBCGS</a>
                          </li>
                        </ul>
                      </li>
                      <li class="dropend drop-down">
                        <a
                          class="dropdown-item dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Third Year
                        </a>
                        <ul class="dropdown-menu sub-menu">
                          <li>
                            <a class="dropdown-item" href="/assets/pdf/TE_EXTC_R2019_C-Scheme_Syllabus.pdf">TEIT-CBCS</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="/assets/pdf/TE_EXTC_R2019_C-Scheme_Syllabus.pdf">TEIT-C Scheme</a>
                          </li>
                        </ul>
                      </li>
                      <li class="dropend drop-down">
                        <a
                          class="dropdown-item dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Final Year
                        </a>
                        <ul class="dropdown-menu sub-menu">
                          <li>
                            <a class="dropdown-item" href="/assets/pdf/BE_Syllabus_rev_for_2019.pdf">BEIT-CBCS</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#"
                      >Academic Advisory Board</a
                    >
                  </li>
                  <!-- <li><a class="dropdown-item" href="#">Faculty Profile</a></li> -->
                </ul>
              </li>
              <li class="nav-item dropdown text-center">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  FACULTY
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li class="dropend drop-down">
                <a
                  class="dropdown-item dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                    Profile
                </a>
                <ul class="dropdown-menu sub-menu">
                  <li>
                    <a class="dropdown-item" href="/faculty/faculty_profile.html">Teaching</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/faculty/nonteaching.html">Non Teaching</a>
                  </li>
                      </ul>
                  </li>
                  <li><a class="dropdown-item" href="/faculty/faculty_recognition.html">Recognition</a></li>
                  <li class="dropend drop-down">
                    <a
                      class="dropdown-item dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Research
                    </a>
                    <ul class="dropdown-menu sub-menu">
                      <li>
                        <a class="dropdown-item" href="faculty/research/majorgrants.html">Minor Grants</a>
                      </li>
                      <li>
                      <a class="dropdown-item" href="faculty/research/minorgrants.html">Major Grants</a>
                    </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown text-center">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  STUDENTS
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="/assets/pdf/V3_EXTC_ClassTimeTable_AY2022-23_Odd_Semester.pdf">Time Table</a>
                  </li>
                  <li><a class="dropdown-item" href="/students/recognition.html">Recognition</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown text-center">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  EXAMINATION
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="students/undergraduate-project.html">Undergraduate Projects</a>
                  </li>
                  <li class="dropend drop-down">
                    <a
                      class="dropdown-item dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                        Rank Holders
                    </a>
                    <ul class="dropdown-menu sub-menu">
                      <li>
                        <a class="dropdown-item" href="">Internal Assesment</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="">MU Examination</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown text-center">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                CO-CURRICULAR ACTIVITIES
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/cocurricular/newsletter.html">Newsletter</a></li>
                <li><a class="dropdown-item" href="/cocurricular/industrial_training.html">Industrial Visit</a></li>
                <li class="dropend drop-down">
                  <a
                    class="dropdown-item dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Student Chapters
                  </a>
                  <ul class="dropdown-menu sub-menu">
                    <li>
                      <a class="dropdown-item" href="https://ieee.dbit.in/" target="blank">IEEE</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="https://iete.dbit.in/" target="blank">IETE</a>
                    </li>
                  </ul>
                </li>
                <li><a class="dropdown-item" href="/cocurricular/project.html">Project Exhibition</a></li>
               
              </ul>
            </li>
              <li class="nav-item dropdown text-center">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PLACEMENT & INTERNSHIP
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      class="dropdown-item"
                      href="/placement&internship/intenship.html"
                      >Internship Record</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="/placement&internship/placement2.html"
                      >Placement Record</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
            ////////////////
            <!-- <ul class="main-navigation">
              <li><a href="#">HOME</a></li>
              <li><a href="#">ABOUT US</a></li>
              <li><a href="#">ACADEMICS</a>
                <ul>
                  <li><a href="#">Academic Calender</a></li>
                  <li><a href="#">Exam Timetable</a></li>
                  <li><a href="#">Timetable</a></li>
                  <li><a href="#">Syllabus</a>
                    <ul>
                      <li><a href="#">Second Year</a>
                        <ul>
                          <li><a href="/assets/pdf/SEEXTC_Rev2019_C-Scheme.pdf">SEIT-C Scheme</a></li>
                          <li><a href="/assets/pdf/SEEXTC_Rev2019_C-Scheme.pdf">SEIT-CBCGS</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Third Year</a>
                        <ul>
                          <li><a href="/assets/pdf/TE_EXTC_R2019_C-Scheme_Syllabus.pdf">TEIT-C Scheme</a></li>
                          <li><a href="/assets/pdf/TE_EXTC_R2019_C-Scheme_Syllabus.pdf">TEIT-CBCGS</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Final Year</a>
                        <ul>
                          <li><a href="/assets/pdf/BE_Syllabus_rev_for_2019.pdf">SEIT-CBCS</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a href="#">Academic Advisory Board</a></li>
                  <li><a href="#">Faculty Profile</a></li>
                  <ul>
                  <li><a href="#">TEIT-C Scheme</a></li>
                  <li><a href="#">TEIT-CBCGS</a></li>
                </ul>
              </li>
              <li><a href="/students/recognition.html">RECOGNITION</a></li>
              <li><a href="#">STUDENTS</a>
                <ul>
                  <li><a href="#">Undergraduate Projects</a></li>
                  <li><a href="">Recognition</a></li>
                </ul>
              </li>
              <li><a href="#">CO-CURRICULAR ACTIVITIES</a>
                <ul>
                  <li><a href="./cocurricular/newsletter/newsletter.html">Newsletter</a></li>
                  <li><a href="#">Events</a>
                    <ul>
                      <li><a href="#">Game Of Codes</a></li>
                      <li><a href="#">Mumbai Hackathon</a></li>
                      <li><a href="#">Innovex</a></li>
                    </ul>
                  </li>
                  <li><a href="#">CSI</a></li>
                  <li><a href="#">Student Club</a>
                    <ul>
                      <li><a href="#">AI Club</a></li>
                      <li><a href="#">Web Development</a></li>
                    </ul>
                  </li>        
                </ul>
              </li>
              <li><a href="#">PLACEMENT & INTERNSHIP</a>
                <ul>
                  <li><a href="#">Internship Record</a></li>
                  <li><a href="#">Placement Record</a></li>
                </ul>
              </li>
            </ul> -->
          </div>
        </div>
      </nav>
    </header>`