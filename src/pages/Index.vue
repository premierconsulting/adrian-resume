<template>
  <div class="container">
    <header>
      <div class="me">
        <h1>Adrian Smallwood</h1>
        <h2>Software Engineer</h2>
        <h3>Las Vegas, NV</h3>
      </div>
      <div class="contact">
        <span class="email">AQSmallwood@gmail.com</span>
        <span class="phone">(702) 800-1588</span>
      </div>
    </header>
    <section class="about">
      <p>I am a skilled software engineer with experience building customer facing web clients and services. I believe computers are immensely powerful, and I find harnessing them to improve people’s lives rewarding. I enjoy building high quality services that are well-defined, highly available, appropriately monitored, and useful to internal and external customers.</p>
    </section>
    <section class="skills">
      <h3>Skills</h3>
      <ul>
        <li><span>Python</span> Django, REST Framework, Flask, SQLAlchemy, PyTest</li>
        <li><span>Java</span> Spring MVC, Spring Boot, JDBC, JPA, JUnit, Mockito</li>
        <li><span>JavaScript</span> Node, Express, Vue, React</li>
        <li><span>AWS</span> EC2, ECS, Beanstalk, Lambda, CloudFormation</li>
        <li><span>Cloud</span> Nginx, Redis, Memcached, Celery </li>
        <li><span>Databases</span> Postgres, DynamoDB, MongoDB, MySQL, Couchbase</li>
        <li>Docker, C#, C++, Kotlin, REST, SOAP, GRPC, TDD, Certified ScrumMaster</li>
      </ul>
    </section>
    <section class="experience">
      <h3>Experience</h3>
      <ul class="jobs">
        <li class="job">
          <h4>The Pokémon Company International</h4>
          <h5>Software Engineer</h5>
          <span class="range">October 2015 — August 2019</span>
          <ul class="responsibilities">
            <li>Deployed Java Spring services to support Pokémon GO Authentication</li>
            <li>Created and maintained Python Django APIs for account registration, edit, and recovery</li>
            <li>Created Django ORM libraries for Dynamo and Postgres JSONB storage</li>
            <li>Created Docker containers, development environments, and deploy pipelines</li>
            <li>Developed and redesigned services to support millions of users and thousands of concurrent users</li>
          </ul>
        </li>
        <li class="job">
          <h4>JT4 LLC</h4>
          <h5>Embedded Engineering Intern</h5>
          <span class="range">January 2014 — May 2015</span>
          <ul class="responsibilities">
            <li>Built web interface to monitor and configure FPGA based system with web sockets (UDP)</li>
            <li>Developed onboard server in C implementing HTTP to accept firmware</li>
            <li>Executed large functional test plan with automation and nightly reports</li>
          </ul>
        </li>
        <li class="job">
          <h4>Fandeavor Inc</h4>
          <h5>Software Developer</h5>
          <span class="range">August 2012 — December 2013</span>
          <ul class="responsibilities">
            <li>Created Django web pages to allow users to view and book full sports packages including event tickets, hotels, and flights.</li>
            <li>Implemented Python interfaces for external SOAP, and REST flight and payment APIs (SkyScanner, Stripe)</li>
            <li>Designed and built admin tools for content management in Amazon S3</li>
            <li>Schema and Data Model management; migrations</li>
          </ul>
        </li>
        <li class="job">
          <h4>Zappos Inc</h4>
          <h5>Software Engineering Intern</h5>
          <span class="range">July 2012 — August 2012</span>
          <ul class="responsibilities">
            <li>Created Java backend service to sanitize and filter profane reviews</li>
            <li>Lead interdisciplinary team to design service endpoints and consumption by frontend</li>
            <li>Worked on Ruby admin service to configure filter settings and review blocked reviews</li>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Adrian Smallwood Resume'
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}

body {
  background-color: #efefef;
}

.container {
  width: 80vw;
  height: 100vh;
  margin: 0 auto;
}


section {
  margin-bottom: 30px;

  h3 {
    display: inline-block;
    font-weight: 500;
    font-size: 22px;
    border-bottom: 2px black solid;
    margin-bottom: 15px;

  }
}

header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 3px black solid;
  margin-bottom: 30px;
  
  .me {
    flex: 1;
    text-align: center;
    margin-bottom: 15px;

    h1 {
      font-size: 28px;
      font-weight: 400;
    }

    h2 {
      font-size: 18px;
      font-weight: 400;
    }

    h3 {
      font-size: 16px;
      font-weight: 300;
    }
  }

  .contact {
    display: flex;
    justify-content: space-between;
    font-size: 12px;

    span {
      display: inline-block;
      margin: 0 10px;
    }
  }
}

.about {

  p {
    font-size: 14px;
    font-weight: 300;
  }
}

.skills {

  ul {
    list-style-type: none;

    li {
      font-size: 14px;
      font-weight: 300;
      margin-bottom: 10px;

      span {
        font-size: 16px;
        font-weight: 500;
        text-transform: uppercase;
        margin-right: 10px;
      }
    }
  }
}

.experience {
  ul {
    list-style-type: none;
  }

  .jobs {
    .job {
      margin-bottom: 30px;

      h4 {
        font-size: 18px;
        font-weight: 400;
        color: black;
        margin-bottom: 5px;
      }

      h5 {
        font-weight: 400;
        margin-bottom: 5px;
      }

      span {
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 5px;
        display: inline-block;
        margin-bottom: 5px;
      }

      .range {
        margin-bottom: 10px;
      }

      .responsibilities {
        width: 95%;
        margin-left: auto;

        font-size: 14px;
        font-weight: 300;
        
        li {
          margin-bottom: 15px;
        }
      }
    }
  }
}
</style>
