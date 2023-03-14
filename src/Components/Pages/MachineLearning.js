import React from "react";
import "./Style.scss";
import Image from "../Images/ML/How-to-start-learning-ML1.png";
const MachineLearning = () => {
  return (
    <div className="ML-Main">
      <div className="Conatiner">
        <div className="OutletDiv">
        
          <div className="Nav">Machine Learning</div>
          <div className="content">
          <h2>How to Start Learning Machine Learning?</h2>
          {/* <p>Difficulty Level:Medium &nbsp; Last Updated:02 Feb,2023</p> */}
          <h3>Introduction:</h3>
          <div>
            <ol start="1">
              <li>
                Get familiar with the basic concepts and terminology: study
                linear algebra, statistics, and calculus.
              </li>
              <li>
                Choose a programming language: Python is a popular choice for
                ML.
              </li>
              <li>
                Get hands-on experience with ML algorithms and libraries:
                Scikit-learn and Tensorflow are popular options.
              </li>
              <li>
                Practice on real-world projects and ML competitions: Kaggle is a
                great platform for this.
              </li>
              <li>
                Stay up-to-date with the latest developments in the field: read
                research papers, blogs, and attend online courses or workshops.
              </li>
            </ol>
          </div>
          <h3>Here are some steps to start learning machine learning:</h3>
          <div>
            <ol start="1">
              <li>
                Get familiar with basic mathematics concepts such as linear
                algebra, calculus, and statistics.
              </li>
              <li>
                Choose a programming language for ML development, such as Python
                or R.
              </li>
              <li>
                Familiarize yourself with the basics of the chosen programming
                language and its libraries for data analysis and visualization.
              </li>
              <li>
                Start with simple ML algorithms such as linear regression or
                K-nearest neighbors and implement them from scratch.
              </li>
              <li>
                Get your hands dirty with real-world datasets and work on
                projects to get practical experience.
              </li>
              <li>
                Participate in online communities, such as Kaggle, and
                contribute to open-source ML projects to expand your knowledge
                and network with others in the field.
              </li>
              <li>
                Stay updated with the latest research and advancements in ML by
                reading papers and attending conferences.
              </li>
            </ol>
          </div>
          <p>
            Note: The most important aspect of learning ML is to have a b
            foundation in mathematics, statistics and a good understanding of
            programming.
          </p>
          <p>
            Arthur Samuel coined the term <strong>“Machine Learning”</strong> in
            1959 and defined it as a{" "}
            <strong>
              “Field of study that gives computers the capability to learn
              without being explicitly programmed”
            </strong>
            .
          </p>
          <p>
            And that was the beginning of Machine Learning! In modern times,
            Machine Learning is one of the most popular (if not the most!)
            career choices. According to a survey, Machine Learning Engineer Is
            The Best Job of the decade and{" "}
            <strong>is expected to grow YoY by 22%</strong> (between 2020-2030)
            and an average base salary of <strong> $122,000</strong> per year in
            USA and
            <strong> INR 8.5LPA </strong>in India.
          </p>
          <img src={Image} />
          <h3>What is Machine Learning?</h3>
          <p>
            <a href="" target="_blank">
              Machine Learning{" "}
            </a>{" "}
            involves the use of Artificial Intelligence to enable machines to
            learn a task from experience without programming them specifically
            about that task. (In short, Machines learn automatically without
            human hand holding!!!) This process starts with feeding them good
            quality data and then training the machines by building various
            machine learning models using the data and different algorithms. The
            choice of algorithms depends on what type of data do we have and
            what kind of task we are trying to automate.
          </p>
          <h3>Why Do We use Machine Learning?</h3>
          <p>
            As we’re moving forward in the digital world, a massive amount of
            data is being generated every single minute along with the
            accessibility of high-speed internet. This is the major factor to
            develop automated systems that can handle data at such a threshold
            by accurately using different algorithms for complex data sets.
            Today, companies of all scales are using this method to handle cost
            management, lower the risk, and also help in improving the quality
            of their product and services. This technology has been widely
            accepted in many industries today and soon it's going to be a major
            part of our lives. (which has already begun)
          </p>
          <h2>How to Start Learning ML?</h2>
          <p>
            This is a rough roadmap you can follow on your way to becoming an
            insanely talented Machine Learning Engineer. Of course, you can
            always modify the steps according to your needs to reach your
            desired end goal!
          </p>
          <h3>Step 1 – Understand the Prerequisites</h3>
          <p>
            In case you are a genius, you could start ML directly but normally,
            there are some prerequisites that you need to know which include{" "}
            <strong>
              {" "}
              Linear Algebra, Multivariate Calculus, Statistics, and Python.
            </strong>{" "}
            And if you don’t know these, never fear! You don’t need a Ph.D.
            degree in these topics to get started but you do need a basic
            understanding.
          </p>
          <h4>(a) Learn Linear Algebra and Multivariate Calculus</h4>
          <p>
            Both Linear Algebra and Multivariate Calculus are important in
            Machine Learning. However, the extent to which you need them depends
            on your role as a data scientist. If you are more focused on
            application-heavy machine learning, then you will not be that
            heavily focused on maths as there are many common libraries
            available. But if you want to focus on R&D in Machine Learning, then
            mastery of Linear Algebra and Multivariate Calculus is very
            important as you will have to implement many ML algorithms from
            scratch.
          </p>
          <h4>(b) Learn Statistics</h4>
          <p>
            Data plays a huge role in Machine Learning. In fact, around 80% of
            your time as an ML expert will be spent collecting and cleaning
            data. And statistics is a field that handles the collection,
            analysis, and presentation of data. So it is no surprise that you
            need to learn it!!! Some of the key concepts in statistics that are
            important are Statistical Significance, Probability Distributions,
            Hypothesis Testing, Regression, etc. Also, Bayesian Thinking is also
            a very important part of ML which deals with various concepts like
            Conditional Probability, Priors, and Posteriors, Maximum Likelihood,
            etc.
          </p>
          <h4>(c) Learn Python</h4>
          <p>
            Some people prefer to skip Linear Algebra, Multivariate Calculus,
            and Statistics and learn them as they go along with trial and error.
            But the one thing that you absolutely cannot skip is{" "}
            <a href="">python</a>! While there are other languages you can use
            for Machine Learning like<a href="">R</a>,<a href="">Scala</a>{" "}
            etc.Python is currently the most popular language for ML. In fact,
            there are many Python libraries that are specifically useful for
            Artificial Intelligence and Machine Learning such as Keras,
            <a href="">TensorFlow</a>,Scikit-learn, etc.
          </p>
          <h3>Step 2-Learn Various ML Concepts</h3>
          <p>
            Now that you are done with the prerequisites, you can move on to
            actually learning ML (where the fun begins!!!) It’s best to start
            with the basics and then move on to the more complicated stuff. Some
            of the basic concepts in ML are:
          </p>
          <div>
            <h4>(a) Terminologies of Machine Learning</h4>
            <ul>
              <li>
                <strong>Model –</strong> A model is a specific representation
                learned from data by applying some machine learning algorithm. A
                model is also called a hypothesis.
              </li>
              <li>
                <strong>Feature 2-</strong> A feature is an individual
                measurable property of the data. A set of numeric features can
                be conveniently described by a feature vector. Feature vectors
                are fed as input to the model. For example, in order to predict
                a fruit, there may be features like color, smell, taste, etc.
              </li>
              <li>
                <strong>Traget(Lab)-</strong>A target variable or label is the
                value to be predicted by our model. For the fruit example
                discussed in the feature section, the label with each set of
                input would be the name of the fruit like apple, orange, banana,
                etc.
              </li>
              <li>
                <strong>Training –</strong>The idea is to give a set of
                inputs(features) and its expected outputs(labels), so after
                training, we will have a model (hypothesis) that will then map
                new data to one of the categories trained on.
              </li>
              <li>
                <strong> Prediciton - </strong>Once our model is ready, it can
                be fed a set of inputs to which it will provide a predicted
                output(label).
              </li>
            </ul>
          </div>
          <div>
            <h4>(b) Types of Machine Learning</h4>
            <ul>
              <li>
                <strong>Supervised Learning – </strong>This involves learning
                from a training dataset with labeled data using classification
                and regression models. This learning process continues until the
                required level of performance is achieved.
              </li>
              <li>
                <strong>Unsupervised Learning –</strong>This involves using
                unlabeled data and then finding the underlying structure in the
                data in order to learn more and more about the data itself using
                factor and cluster analysis models.
              </li>
              <li>
                <strong>Semi-supervised Learning –</strong>This involves using
                unlabeled data like Unsupervised Learning with a small amount of
                labeled data. Using labeled data vastly increases the learning
                accuracy and is also more cost-effective than Supervised
                Learning.
              </li>
              <li>
                <strong>Reinforcement Learning – </strong>This involves learning
                optimal actions through trial and error. So the next action is
                decided by learning behaviors that are based on the current
                state and that will maximize the reward in the future.
              </li>
            </ul>
          </div>
          <div>
            <h4>(c) How to Practise Machine Learning?</h4>
            <ul>
              <li>
                The most time-consuming part of ML is actually{" "}
                <strong>
                  data collection, integration, cleaning, and preprocessing.
                </strong>{" "}
                So make sure to practice with this because you need high-quality
                data but large amounts of data are often dirty. So this is where
                most of your time will go!!!
              </li>
              <li>
                <strong>
                  Learn various models and practice on real datasets.
                </strong>{" "}
                This will help you in creating your intuition around which types
                of models are appropriate in different situations.
              </li>
              <li>
                Along with these steps, it is equally important to{" "}
                <strong>
                  understand how to interpret the results obtained by using
                  different models.
                </strong>{" "}
                This is easier to do if you understand various tuning parameters
                and regularization methods applied to different models.
              </li>
            </ul>
          </div>
          <div>
            <h4>(d) Resources for Learning Machine Learning:</h4>
            <p>
              There are various online and offline resources (both free and
              paid!) that can be used to learn Machine Learning. Some of these
              are provided here:
            </p>
            <ul>
              <li>
                For a broad introduction to Machine Learning, Stanford’s Machine
                Learning Course by Andrew Ng is quite popular. It focuses on
                machine learning, data mining, and statistical pattern
                recognition with explanation videos are very helpful in clearing
                up the theory and core concepts behind ML.
              </li>
              <li>
                If you want a self-study guide to Machine Learning, then
                Geeksforgeeks{" "}
                <a href="">Machine Learning Basic and Advanced - SelfPaced</a>
                course will be ideal for you. This course will teach you about
                various concepts of Machine Learning and also practical
                experience in implementing them in a classroom environment.
              </li>
            </ul>
          </div>
          <h3>Step 3 – Take Part in Competitions</h3>
          <p>
            After you have understood the basics of Machine Learning, you can
            move on to the crazy part!!! Competitions! These will basically make
            you even more proficient in ML by combining your mostly theoretical
            knowledge with practical implementation. Some of the basic
            competitions that you can start with on Kaggle that will help you
            build confidence are given here:
          </p>
          <div>
            <ul>
              <li>
                <strong>Titanic: Machine Learning from Disaster:</strong> The{" "}
                <a href="">Titanic:Machine Learning from Disaster</a>challenge
                is a very popular beginner project for ML as it has multiple
                tutorials available. So it is a great introduction to ML
                concepts like data exploration, feature engineering, and model
                tuning.
              </li>
              <li>
                <strong>Digit Recognizer: </strong>The
                <a href="">Digital Recorder</a>is a project after you have some
                knowledge of Python and ML basics. It is a great introduction to
                the exciting world of neural networks using a classic dataset
                that includes pre-extracted features.
              </li>
            </ul>
          </div>
          <p>
            After you have completed these competitions and other such simple
            challenges …Congratulations!!! You are well on your way to becoming
            a full-fledged Machine Learning Engineer and you can continue
            enhancing your skills by working on more and more challenges and
            eventually creating more and more creative and difficult Machine
            Learning projects.
          </p>
          <h3>
            Advantages or Disadvantages:
            <br />
            Advantages:
          </h3>
          <ol start="1">
            <li>High demand for ML experts in the job market.</li>
            <li>Can improve decision-making and automate repetitive tasks.</li>
            <li>
              Can be applied to a variety of fields and industries.Here are some
              of the advantages of machine learning:
            </li>
            <li>
              Automation: Machine learning algorithms can automate
              decision-making processes, reducing the need for human
              intervention.
            </li>
            <li>
              Improved accuracy: Machine learning algorithms can be trained on
              large datasets to identify patterns and make predictions with
              higher accuracy compared to traditional methods.
            </li>
            <li>
              Efficient data analysis: Machine learning algorithms can process
              vast amounts of data much faster than humans, making it easier to
              extract insights and make data-driven decisions.
            </li>
            <li>
              Personalization: Machine learning algorithms can be used to
              personalize experiences for users, such as personalized
              recommendations and advertisements.
            </li>
            <li>
              Predictive maintenance: Machine learning algorithms can be used to
              predict equipment failures, reducing downtime and maintenance
              costs.
            </li>
            <li>
              Fraud detection: Machine learning algorithms can be used to detect
              and prevent fraudulent activities in various industries, such as
              finance and e-commerce.
            </li>
            <li>
              Improved healthcare: Machine learning algorithms can be used to
              analyze patient data, diagnose diseases and recommend treatments,
              improving healthcare outcomes.
            </li>
          </ol>
          <h3>Disadvantages:</h3>
          <ol start="1">
            <li>Can be time-consuming to train models.</li>
            <li>
              May produce biased or unethical results if not properly monitored.
            </li>
            <li>Can be complex and challenging to understand.</li>
            <li>May replace certain jobs with automation.</li>
            <li>
              Bias: Machine learning algorithms can be biased if the training
              data contains biases, leading to incorrect predictions and unfair
              treatment of certain groups.
            </li>
            <li>
              Lack of transparency: Machine learning algorithms can be complex
              and difficult to interpret, making it challenging to understand
              how they make decisions.
            </li>
            <li>
              Overfitting: Machine learning algorithms can overfit to the
              training data, leading to poor performance on new, unseen data.
            </li>
            <li>
              Data quality: Machine learning algorithms are only as good as the
              data they are trained on, so it is crucial to have high-quality,
              relevant, and diverse data to train the algorithms.
            </li>
            <li>
              Technical limitations: Machine learning algorithms require
              significant computing power and memory, making it challenging to
              deploy them in resource-constrained environments.
            </li>
            <li>
              Job displacement: Machine learning algorithms can automate certain
              jobs, leading to job displacement for some workers.
            </li>
            <li>
              Ethical concerns: Machine learning algorithms can be used for
              unethical purposes, such as mass surveillance and discriminatory
              practices, raising ethical and privacy concerns.
            </li>
          </ol>
        </div>
        </div>
      </div>
    </div>
  );
};

export default MachineLearning;

// export const Main = styled.div`
//   font-weight: 500;
//   background-color: white;
// `;

// export const Nav = styled.div`
//   height: 10vh;
//   width:100% ;
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
//   background-color:whitesmoke ;
// `;
// export const OutletDiv = styled.div`
//   padding: 10px;

// `;
// export const SideBar = styled.div`
//   background-color: Green;
//   width: 20%;

// `;
