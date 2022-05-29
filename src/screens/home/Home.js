import React, { useEffect, useState } from 'react';
import './Home.css';
import { TOKEN } from '../../services/config';
import { getUserData } from '../../services/api/duolingo';


function Home() {

   const [state, setState] = useState({
      userData: null
   });

   let apiRequestHeaders = {
      headers: { Authorization: `Bearer ${TOKEN}` }
   }

   useEffect(() => {
      getUserData(apiRequestHeaders)
         .then(response => {
            console.log(response);
            setState({
               ...state,
               userData: response
            })
         });
   }, [])


   /* 
   $all_languages = new stdClass();
   foreach ($courses as $course) {
      $target = $course->learningLanguage;
      $source = $course->fromLanguage;
      if (!property_exists($all_languages, $source))
         $all_languages->$source = [];
      $all_languages->$source[] = $target;
   } 
   */

   const renderCourses = (item, key) => {
      console.log(item);
      return (
         <li key={`${item.id}-${item.key}`}>{item.fromLanguage} -&gt; {item.learningLanguage}</li>
      )
   }

   if (state.userData === null) {
      return (
         <p>Wait for it</p>
      )
   } else {
      return (
         <main>
            <p>
               {state.userData.streak}
            </p>
            <p>
               {state.userData.username}
            </p>
            <p>
               <img src={`${state.userData.picture}/xlarge`} />
            </p>
            <p>
               {state.userData.learningLanguage}
            </p>
            <ul>
               {state.userData.courses.map(renderCourses)}
            </ul>
            <p>
               {state.userData.totalXp}
            </p>
            <p>
               {state.userData.courses[0].title}
            </p>
            <p>
               {state.userData.creationDate}
            </p>
         </main>
      )
   }
}

export default Home;
