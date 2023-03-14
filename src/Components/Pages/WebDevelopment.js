import React from "react";
import "./Style.scss";
import webImg from "../Images/weddevelopment/web-development-image.png";
import frontImg from "../Images/weddevelopment/frontend-design-roadmap.jpeg";
import backImg from "../Images/weddevelopment/Backend-design-roadmap.jpeg";

const WebDevelopement = () => {
  return (
    <div className="web-Main">
      <div className="Conatiner">
        <div className="OutletDiv">
          <div className="Nav">Web Development</div>
          <p>
            &nbsp; refers to the creating, building, and maintaining of
            websites. It includes aspects such as web design, web publishing,
            web programming, and database management. It is the creation of an
            application that works over the internet i.e. websites.
          </p>
          <img src={webImg} />
          <p>
            &nbsp; The word Web Development is made up of two words, that is:
          </p>

          <li>
            <b> Web:</b>
            It refers to websites, web pages or anything that works over the
            internet.
          </li>
          <li>
            <b>Development:</b>
            It refers to building the application from scratch.
          </li>
          <h4>Web Development can be classified into two ways:</h4>
          <ul>
            <li>
              <a href="#frontend">Front Development</a>
            </li>
            <li>
              <a href="#backend">Backend Development</a>
            </li>
          </ul>
          <h4 id="frontend">Frontend Development</h4>
          <p>
            &nbsp;The part of a website where the user interacts directly is
            termed as front end. It is also referred to as the ‘client side’ of
            the application.
          </p>
          <li>
            <b>Frontend Roadmap:</b>
          </li>
          <img src={frontImg} />
          <li>
            <b>HTML:</b> HTML stands for HyperText Markup Language. It is used
            to design the front end portion of web pages using markup language.
            It acts as a skeleton for a website since it is used to make the
            structure of a website.
          </li>
          <li>
            <b>CSS:</b> Cascading Style Sheets fondly referred to as CSS is a
            simply designed language intended to simplify the process of making
            web pages presentable. It is used to style our website.
          </li>
          <li>
            <b>JavaScript:</b>JavaScript is a scripting language used to provide
            a dynamic behavior to our website.
          </li>
          <li>
            <b>Bootstrap:</b> Bootstrap is a free and open-source tool
            collection for creating responsive websites and web applications. It
            is the most popular CSS framework for developing responsive,
            mobile-first websites. Nowadays, the websites are perfect for all
            browsers (IE, Firefox, and Chrome) and for all sizes of screens
            (Desktop, Tablets, Phablets, and Phones).
          </li>
          <ul>
            <li>&nbsp;&nbsp; Bootstrap4</li>
            <li>&nbsp;&nbsp; Bootstrap5</li>
          </ul>
          <h3>Frontend Frameworks and libraries:</h3>
          <ul>
            <li>
              <a href="#">AngularJS</a>
            </li>
            <li>
              <a href="#">React.js</a>
            </li>
            <li>
              <a href="#">VueJS</a>
            </li>
            <li>
              <a href="#">jQuery</a>
            </li>
            <li>
              <a href="#">Bootstrap</a>
            </li>
            <li>
              <a href="#">Material UI</a>
            </li>
            <li>
              <a href="#">Tailwind CSS</a>
            </li>
            <li>
              <a href="#">jQuery UI</a>
            </li>
            <li>
              <a href="#">
                Some other libraries and frameworks are: Handlebar.js
                Backbone.js, Ember.js etc.
              </a>
            </li>
          </ul>
          <h4 id="backend">Backend Development</h4>
          <p>
            &nbsp; Backend is the server side of a website. It is part of the
            website that users cannot see and interact with. It is the portion
            of software that does not come in direct contact with the users. It
            is used to store and arrange data.
          </p>
          <ul>
            <li>Backend Roadmap</li>
            <img src={backImg} />
            <li>
              <b>PHP:</b> PHP is a server-side scripting language designed
              specifically for web development.
            </li>
            <li>
              <b>Java:</b> Java is one of the most popular and widely use d
              programming languages. It is highly scalable.
            </li>
            <li>
              <b>Python:</b>
              Python is a programming language that lets you work quickly and
              integrate systems more efficiently.
            </li>
            <li>
              <b>Node.js:</b> Node.js is an open source and cross-platform
              runtime environment for executing JavaScript code outside a
              browser.
            </li>
            <li>
              <b>Back End Frameworks:</b> The list of back end frameworks are:
              Express, Django, Rails, Laravel, Spring, etc.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopement;

// export const div = styled.div`
//   font-weight: 500;
//   background-color: white;
//   text-align:justify ;

// `;

// export const Nav = styled.div`
//   height: 10vh;
//   text-align: center;
//   font-size: 30px;
//   font-weight: 800;
//   color: white;
//   background-color: green;
//   padding: 5px;
//   letter-spacing: 0.1rem;
// `;
// export const Conatiner = styled.div`
//   width: 80%;
//   display: flex;
//   margin:0 auto ;

// `;
// export const div = styled.div`
//   padding: 10px;
//   background-color:whitesmoke ;
// `;
// export const SideBar = styled.div`

//   background-color: Green;
//   width: 20%;
//   position:static ;
//   left:0 ;
//   top:10vh ;

// `;
// export const Img =styled.img`
// width:100%
// `
// export const P =styled.p`
// color:black ;
// `
// export const A =styled.a`
// color:blue ;
// &:hover{
//     color:green ;
// }
// `
// export const B =styled.b`
// color:red ;
// `
