import Link from "next/link";
import Image from "next/image";
import styles from './experience.module.css';

export default function Experience(){
    return <>
    <h2>Experience: </h2>
    {/* 
    --------------------------------------------------------------------------------------
      */}
    <div className={styles.divBorder}>
      <div className="container">
        <div>
          <p className={styles.dateAlignRight}  > December 2024 - March 2025</p>
        </div>
        <div>
        <h3>Web Developer Intern</h3>
        <p>Tripshepherd
        
        <Image
        src="/tripshepherd_logo.jpg"
        alt="tripshepherd logo" 
        className={styles.logoImg}
        width={20}
        height={20}
        
      />
      </p>
      <p>Developed expertise in Next.js and its prerequisites through completed certifications. Applied skills by building a personal portfolio website and working on additional web development projects.</p>
        </div>
      
      </div>
      <div className={styles.skillContainer}> 
      
        <span className={styles.skillBorder}>HTML</span> 
        <span className={styles.skillBorder}>CSS</span> 
        <span className={styles.skillBorder}>JavaScript</span> 
        <span className={styles.skillBorder}>React js</span> 
        <span className={styles.skillBorder}>Next js</span> 
        <span className={styles.skillBorder}>Website Development</span>  </div>
    </div>

{/* 
    --------------------------------------------------------------------------------------
      */}
    <div className={styles.divBorder}>
      <div className="container">
        <div>
          <p className={styles.dateAlignRight}  > August 2024 - December 2025</p>
        </div>
        <div>
        <h3>Software Engineer</h3>
        <p>Orion Oynx Technologies
        
        <Image
        src="/oot_logo.png"
        alt="orion oynx technologies logo" 
        className={styles.logoImg}
        width={20}
        height={20}
        
      />
      </p>
      <p >Gained expertise in game development using C# and Unity through hands-on projects. Worked on the full development cycle of multiple games, implementing provided designs, developing game mechanics, optimizing performance, and ensuring smooth user experiences from start to finish.</p>
        </div>
      
      </div>
      <div className={styles.skillContainer}> 
       
        <span className={styles.skillBorder}>C# Programming</span> 
        <span className={styles.skillBorder}>Unity</span> 
        <span className={styles.skillBorder}>Playfab</span> 
        <span className={styles.skillBorder}>Android</span> 
        <span className={styles.skillBorder}>iOS</span> 
        <span className={styles.skillBorder}>Game Development</span>
         </div>
    </div>
     {/* 
    --------------------------------------------------------------------------------------
      */}
    
    </>;
}