
let nav = document.getElementById('navbar');
nav.innerHTML = `

<style>
 
/* Navbar link styling */
.navbar-nav .nav-link {
    color: black; /* Default text color */
    position: relative;
    text-decoration: none; /* Remove default underline */
    padding: 10px 15px;
    transition: color 0.3s ease-in-out;
}

/* Sliding line effect */
.navbar-nav .nav-link::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px; /* Position the line just below the text */
    width: 0%;
    height: 3px;
    background-color: #DC143C; /* Gold color */
    transition: width 0.3s ease-in-out;
    opacity: 0;
}

/* Hover effect */
.navbar-nav .nav-link:hover {
    color: #DC143C; /* Change text color on hover */
}

/* Expand the line on hover */
.navbar-nav .nav-link:hover::after {
    width: 100%;
    opacity: 1;
}


</style>

<div class="container-fluid ">
      <div class="row d-none d-lg-block d-md-block">
        <nav class="navbar bgcol_pri navbar-expand-sm nav-hide ">
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
        <img class="p-0" src="/assets/extc_banner.webp" alt="" srcset="" />
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
            <ul class="navbar-nav justify-content-end flex-grow-1">
              <li class="nav-item text-center">
                <a class="nav-link " aria-current="page" href="/index.html">Home</a>
              </li>
              <li class="nav-item text-center">
                <a class="nav-link" href="/aboutus/aboutus.html">About Us</a>
              </li>
              <li class="nav-item dropdown text-center">
                <a
                  class="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Academics <span class="badge bg-info">New</span>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/academics/academic-calendar.html">Academic Calender</a>
                  </li>
                  <li><a class="dropdown-item" href="/academics/exam-calendar.html">Exam Timetable</a></li>
                  <li><a class="dropdown-item" href="/academics/timetable.html">Timetable</a></li>
                  <li><a class="dropdown-item" href="/academics/syllabus.html">Syllabus <span class="badge bg-warning text-dark">NEP 2020</span></a></li>
                  <li><a class="dropdown-item" href="/academics/pubtech.html">PubTech</a></li>
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
                  Faculty
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
                        <a class="dropdown-item" href="/faculty/research/majorgrants.html">Minor Grants</a>
                      </li>
                      <li>
                      <a class="dropdown-item" href="/faculty/research/minorgrants.html">Major Grants</a>
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
                  Students
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="/assets/pdf/V3_EXTC_ClassTimeTable_AY2022-23_Odd_Semester.pdf">Time Table</a>
                  </li>
                  <li><a class="dropdown-item" href="/students/recognition2.html">Recognition</a></li>
                  <li><a class="dropdown-item" href="/student/sports.html">Sports</a></li>
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
                  Examination
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="/students/undergraduateproject.html">Undergraduate Projects</a>
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
                Co-Curricular Activities
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/cocurricular/activity_reports.html">Activity Reports (AY 2026-27) <span class="badge bg-danger">New</span></a></li>
                <li class="dropend drop-down">
                  <a
                    class="dropdown-item dropdown-toggle"
                    href="/cocurricular/sankalpana2026.html"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sankalpana 2026 <span class="badge bg-danger">New</span>
                  </a>
                  <ul class="dropdown-menu sub-menu">
                    <li><a class="dropdown-item" href="/cocurricular/sankalpana2026.html">Sankalpana 2026 <span class="badge bg-info">Latest</span></a></li>
                    <li><a class="dropdown-item" href="/cocurricular/sankalpana2026.html#sankalpana-2025">Sankalpana 2025 Archive</a></li>
                    <li><a class="dropdown-item" href="/assets/pdf/Sankalpana_Report_2026.pdf" target="_blank"><i class="bi bi-file-earmark-pdf text-danger me-1"></i>Report 2026 (PDF)</a></li>
                  </ul>
                </li>
                <li class="dropend drop-down">
                  <a
                    class="dropdown-item dropdown-toggle"
                    href="/cocurricular/innoquest.html"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    InnoQuest <span class="badge bg-danger">New</span>
                  </a>
                  <ul class="dropdown-menu sub-menu">
                    <li><a class="dropdown-item" href="/cocurricular/innoquest.html">InnoQuest Overview</a></li>
                    <li><a class="dropdown-item" href="/cocurricular/innoquest.html#innoquest-2025-26">InnoQuest 2025–26 <span class="badge bg-info">Latest</span></a></li>
                    <li><a class="dropdown-item" href="/cocurricular/innoquest.html#innoquest-2024-25">InnoQuest 2024–25</a></li>
                    <li><a class="dropdown-item" href="/cocurricular/innoquest.html#innoquest-2023-24">InnoQuest 2023–24</a></li>
                    <li><a class="dropdown-item" href="/assets/pdf/InnoQuest25-26_Report.pdf" target="_blank"><i class="bi bi-file-earmark-pdf text-danger me-1"></i>Report 2025–26 (PDF)</a></li>
                    <li><a class="dropdown-item" href="/assets/pdf/InnoQuest24-25_Report.pdf" target="_blank"><i class="bi bi-file-earmark-pdf text-danger me-1"></i>Report 2024–25 (PDF)</a></li>
                    <li><a class="dropdown-item" href="/assets/pdf/InnoQuest23-24_Report.pdf" target="_blank"><i class="bi bi-file-earmark-pdf text-danger me-1"></i>Report 2023–24 (PDF)</a></li>
                  </ul>
                </li>
                <li><a class="dropdown-item" href="/cocurricular/events.html">Events & Competitions</a></li>
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
                    Student Chapters & Club
                  </a>
                  <ul class="dropdown-menu sub-menu">
                    <li>
                      <a class="dropdown-item" href="https://ieee.dbit.in/" target="blank">IEEE</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="https://iete.dbit.in/" target="blank">IETE</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Robotics & Automation Club</a>
                    </li>
                  </ul>
                </li>
                <li><a class="dropdown-item" href="/cocurricular/project.html">Project Exhibition (Innovex)</a></li>
               
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
                  Placement & Internship <span class="badge bg-info">New</span>
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
                      >Placement Record <span class="badge bg-info">New</span></h1></a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     

    </header>`
