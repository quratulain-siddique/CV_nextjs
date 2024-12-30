
import styles from './experience.module.css';

export default function Projects(){
    return <>
    <h2>Projects</h2>
    <div className={styles.divBorder}>
      <div className="container">
        <div>
          <p className={styles.dateAlignRight}  >2022</p>
        </div>
        <div>
        <h3>E-Commerce Websites</h3>
        <ul >
          <li >
            <h4 >Shoe Store</h4>
            <p>
            Developed an online shoe store with features like user registration, inventory display, order placement, and a shopping cart, ensuring a seamless and interactive shopping experience. The platform enables efficient management of products and customer orders.
            </p>
            <div className={styles.skillContainer}> 
        <span className={styles.skillBorder}>HTML</span>  
        <span className={styles.skillBorder}>CSS</span>
        <span className={styles.skillBorder}>JavaScript</span> 
        <span className={styles.skillBorder}>Bootstrap 5</span> 
        <span className={styles.skillBorder}>MySQL</span>
        
        <span className={styles.skillBorder}>PHP</span> 
        <span className={styles.skillBorder}>Web Development</span> 
        
         </div>
          </li>
          <br/>
          <li> 
            <h4 >Mobile Store</h4>
            <p>
            Developed an online mobile store with features such as user registration, inventory display, order placement, inventory filtering, and a shopping cart, providing an efficient and user-friendly shopping experience. The platform allows users to easily browse, filter, and purchase mobile products.
            </p>
            <div className={styles.skillContainer}> 
        <span className={styles.skillBorder}>HTML 5</span>  
        <span className={styles.skillBorder}>CSS</span>
        <span className={styles.skillBorder}>JavaScript</span>
        <span className={styles.skillBorder}>MySQL</span>
        <span className={styles.skillBorder}>PHP</span> 
        <span className={styles.skillBorder}>Web Development</span> 
        
         </div>
          </li>
        </ul>
      </div>
      
      </div>
      <br/>
    </div>
    {/* 
    --------------------------------------------------------------------------------------
      */}
    <div className={styles.divBorder}>
      <div className="container">
        <div>
          <p className={styles.dateAlignRight}  > 2022</p>
        </div>
        <div>
        <h3>Game Developer</h3>
        <ul>
        <li> 
            <h4 >Stay Human 3D</h4>
            <p>
            Developed an online mobile store with features such as user registration, inventory display, order placement, inventory filtering, and a shopping cart, providing an efficient and user-friendly shopping experience. The platform allows users to easily browse, filter, and purchase mobile products.
            </p>
          </li>
        </ul>
        <div className={styles.skillContainer}> 
       
        <span className={styles.skillBorder}>C# Programming</span> 
        <span className={styles.skillBorder}>Unity</span> 
        <span className={styles.skillBorder}>Playfab</span> 
        <span className={styles.skillBorder}>Android</span> 
        <span className={styles.skillBorder}>iOS</span> 
        <span className={styles.skillBorder}>Game Development</span>
         </div>
        </div>
      
      </div>
      
    </div>
    {/* 
    --------------------------------------------------------------------------------------
      */}
 <div className={styles.divBorder}>
      <div className="container">
        <div>
          <p className={styles.dateAlignRight}  > 2021</p>
        </div>
        <div>
        <h3>App Developer</h3>
        <ul>
        <li> 
            <h4 >Quiz Application</h4>
            <p>
            Developed a cross-platform app with quiz-like functionality, including levels and a scoreboard by using Kotlin for Android and Flutter for iOS. Led the full development process, including UI design, functionality implementation, and score tracking. </p>
          </li>
        </ul>
        <div className={styles.skillContainer}> 
        <span className={styles.skillBorder}>Kotlin</span>  
        <span className={styles.skillBorder}>Android</span>
        <span className={styles.skillBorder}>Flutter</span> 
        <span className={styles.skillBorder}>iOS</span> 
        <span className={styles.skillBorder}>App Development</span>
         </div>
        </div>
      
      </div>
      
    </div>



    {/* 
    --------------------------------------------------------------------------------------
      */}
    <div className={styles.divBorder}>
      <div className="container">
        <div>
          <p className={styles.dateAlignRight}  > 2020</p>
        </div>
        <div>
        <h3>Artificial Intelligence</h3>
        <ul>
        <li> 
            <h4 >Fake News Detection System</h4>
            <p>
            Developed an AI model to detect fake news using Python and various machine learning algorithms. The project involved training the model and comparing the performance of different supervised learning algorithms to achieve optimal accuracy in identifying false information.
            </p>
          </li>
        </ul>
        <div className={styles.skillContainer}> 
       
        <span className={styles.skillBorder}>Python</span> 
        <span className={styles.skillBorder}>Artificial Intelligence</span> 
        <span className={styles.skillBorder}>Machine Learning</span> 
        <span className={styles.skillBorder}>Jupyter Notebook</span>
         </div>
        </div>
      
      </div>
      
    </div>
    {/* 
    --------------------------------------------------------------------------------------
      */}
    <div className={styles.divBorder}>
      <div className="container">
        <div>
          <p className={styles.dateAlignRight}  > 2020</p>
        </div>
        <div>
        <h3>Java Programming</h3>
        <ul>
        <li> 
            <h4 >Calculator</h4>
            <p>
            Developed a Java-based calculator application that performs basic arithmetic operations such as addition, subtraction, multiplication, and division. The project helped enhance skills in object-oriented programming, user input handling, and implementing mathematical logic.</p>
          </li>
        </ul>
        <div className={styles.skillContainer}> 
       
       <span className={styles.skillBorder}>Java</span> 
        </div>
        </div>
      
      </div>
     
    </div>
    </>;
}