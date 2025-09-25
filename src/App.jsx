import ProfilePic from "./assets/Profile.jpg";

function Profile() {
  return (
    <>
      <div style={{ padding: "20px" }}>
        <img
          style={{ maxWidth: "210px", justifySelf: "center" }}
          src={ProfilePic}
        />
        <h1
          style={{
            maxWidth: "210px",
            margin: "0",
            textAlign: "start",
            color: "white",
            fontWeight: "600",
            fontSize: "35px",
            lineHeight: "1.3",
          }}
        >
          Bern Ricel Musngi
        </h1>
      </div>
    </>
  );
}

function ContactContent(props) {
  return (
    <>
      <h4
        style={{
          fontWeight: "600",
          color: "white",
          margin: "0",
        }}
      >
        {props.title}
      </h4>
      <p
        style={{
          margin: "5px 0",
          color: "white",
          fontWeight: "300",
        }}
      >
        {props.content}
      </p>
    </>
  );
}

function Contact() {
  return (
    <>
      <h2
        style={{
          margin: "10px 0",
          padding: "5px 20px",
          color: "white",
          fontWeight: "600",
          backgroundColor: "#073e5c",
        }}
      >
        Contact
      </h2>
      <div style={{ padding: "5px 20px" }}>
        <ContactContent
          title="Address"
          content="San Joaquin, Sta. Ana, Pampanga"
        ></ContactContent>
        <ContactContent title="Phone" content="+09690511554"></ContactContent>
        <ContactContent
          title="E-mail"
          content="brbmusngi.student@ua.edu.ph"
        ></ContactContent>
      </div>
    </>
  );
}

function SkillsContent(props) {
  return (
    <>
      <li
        style={{
          margin: "0 0 20px 10px",
          padding: "0 0 0 10px",
          color: "white",
          fontWeight: "300",
        }}
      >
        {props.content}
      </li>
    </>
  );
}

function Skills() {
  return (
    <>
      <div style={{ margin: "5px 0" }}>
        <h2
          style={{
            margin: "10px 0",
            padding: "5px 20px",
            color: "white",
            fontWeight: "600",
            backgroundColor: "#073e5c",
          }}
        >
          Skills
        </h2>

        <ul
          style={{
            margin: "0",
            padding: "5px 20px",
          }}
        >
          <SkillsContent content="Solid foundation in HTML and CSS"></SkillsContent>
          <SkillsContent content="Proficient in Javascript, Luau, and Python"></SkillsContent>
          <SkillsContent content="Strong problem-solving, communication, and collaboration skills."></SkillsContent>
        </ul>
      </div>
    </>
  );
}

function Header() {
  return (
    <>
      <p style={{ margin: "20px", fontSize: "17px", fontWeight: "300" }}>
        Detail-oriented and motivated IT student with a solid foundation in HTML
        and CSS, and proficiency in JavaScript, Luau, and Python. Strong
        problem-solving, communication, and collaboration skills, with a focus
        on building technical expertise and contributing effectively to team
        projects. Committed to continuous learning and growth.
      </p>
    </>
  );
}

function EducationContent(props) {
  return (
    <>
      <h3
        style={{
          fontSize: "21px",
          margin: "0",
          fontWeight: "600",
          color: "#292929",
        }}
      >
        {props.title}
      </h3>
      <p
        style={{
          margin: "10px 0",
          fontWeight: "400",
          color: "#515151",
          fontStyle: "italic",
        }}
      >
        {props.content}
      </p>
    </>
  );
}

function Education() {
  return (
    <>
      <h2
        style={{
          margin: "10px 20px",
          padding: "5px 0",
          color: "#01456d",
          fontWeight: "600",
          borderTop: "2px solid lightgray",
          borderBottom: "2px solid lightgray",
        }}
      >
        Education
      </h2>
      <div style={{ margin: "0 20px 5px 140px" }}>
        <EducationContent
          title="Bachelor of Science: Information Technology"
          content="University of the Assumption - Unisite Subdivision, Del Pilar, San Fernando, Philippines"
        ></EducationContent>
        <EducationContent
          title="Senior High School (STEM)"
          content="Saint Mary's Angels College of Pampanga - Jose Abad Santos Avenue, San Pedro, Santa Ana, 2021 Pampanga, Philippines"
        ></EducationContent>
      </div>
    </>
  );
}

function JobEntry(props) {
  return (
    <>
      <div style={{ display: "flex", margin: "0 20px 20px 20px" }}>
        <p
          style={{
            fontSize: "18px",
            margin: "0 20px 0 0",
            fontWeight: "400",
            color: "#515151",
            minWidth: "100px",
          }}
        >
          {props.date}
        </p>
        <div style={{ margin: "0" }}>
          <h3
            style={{
              fontSize: "20px",
              margin: "0",
              fontWeight: "600",
              color: "#292929",
            }}
          >
            {props.title}
          </h3>
          <p
            style={{
              margin: "10px 0 0 0",
              fontWeight: "400",
              color: "#515151",
              fontStyle: "italic",
            }}
          >
            {props.content}
          </p>
          <ul
            style={{
              padding: "0",
              margin: "0 0 0 15px",
              fontWeight: "400",
              color: "#515151",
            }}
          >
            <li style={{ padding: "2px 0 2px 5px" }}>{props.listContent1}</li>
            <li style={{ padding: "2px 0 2px 5px" }}>{props.listContent2}</li>
            <li style={{ padding: "2px 0 2px 5px" }}>{props.listContent3}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

function Experience() {
  return (
    <>
      <>
        <h2
          style={{
            margin: "10px 20px",
            padding: "5px 0",
            color: "#01456d",
            fontWeight: "600",
            borderTop: "2px solid lightgray",
            borderBottom: "2px solid lightgray",
          }}
        >
          Experience
        </h2>
        <div>
          <JobEntry
            date="2025"
            title="School Group Project - Web Developing"
            content="University of the Assumption - Unisite Subdivision, Del Pilar, San Fernando, Philippines"
            listContent1="Lead the development group."
            listContent2="Built a responsive 5 paged website using HTML and CSS."
            listContent3="Deployed the website using Hostinger."
          ></JobEntry>
          <JobEntry
            date="2025"
            title="Participant - First National AI Prompt Challenge (Capabara)"
            content="Angeles University Foundation - AUF Graduate School Building, MacArthur Highway, Angeles City, Pampanga"
            listContent1="Competed in a national-level AI Prompt Engineering Challenge."
            listContent2="Gained practical experience in creative problem-solving and successfully applying advanced AI tools to competition challenges."
            listContent3="Cultivated strong technical communication skills and enhanced adaptability through collaboration."
          ></JobEntry>
        </div>
      </>
    </>
  );
}

function MainContent() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingBottom: "20px",
        }}
      >
        <Header></Header>
        <Education></Education>
        <Experience></Experience>
      </div>
    </>
  );
}

function SideBar() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#094d73",
          alignContent: "center",
        }}
      >
        <Profile></Profile>
        <Contact></Contact>
        <Skills></Skills>
      </div>
    </>
  );
}

function Body() {
  return (
    <>
      <div style={{ width: "785px", display: "flex" }}>
        <SideBar></SideBar>
        <MainContent></MainContent>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Body></Body>
      </div>
    </>
  );
}

export default App;
