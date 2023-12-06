import React from "react";
import {useLocation, useNavigate} from 'react-router-dom';
function MasterContent(){
   const location=useLocation()

   
   
    return(
                <div className="content">
                    <h1>Hello {location.state.id} Welcome to my website!</h1>
                    <p>This is the main content area.</p>
                    
                    <div className="form-container">
                        <form id="form">
                            <input type="search" id="query" name="q" placeholder="Search.."></input>
                            <button><span class="material-symbols-outlined">search</span></button>
                        </form>
                        
                    </div>
                </div>  
            
        
    );
}

export default MasterContent;