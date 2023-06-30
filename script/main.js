    


function fetchData() {
   
    fetch("http://localhost:3000/films")
     .then(response => response.json())
       // handle the response
     .then(json => getData(json))
     //  requesting data from the server
     // ass
   
     function getData(films) {
           // forEach iterates through an array of names 
          films.forEach(char => {
            const main = document.getElementById("film-item");
            const p = document.createElement('p') 
            const bt = document.createElement('button') 
            // we have create variable p and assigne all the names in an array
            // we have created variable button and assigned all the id in an array
            p.textContent = char.title;
            p.id=char.id;
            p.addEventListener('click', displayFilmsDetails)
            //we have added an event to names and buttuns where one can view animal
            bt.textContent="view"
            main.append(p);
            bt.id=char.id;      
            p.append(bt)
     
            const bt_stylying={
           display: "block",
           color: "white",
           width: "100px",
           borderRadius: '20px',
           backgroundColor: '#444',
           height: "26px"
           }
     
     //Object.assign():
           Object.assign(bt.style, bt_stylying);
           
          
          }); 

     
     }
function displayFilmsDetails(e) {

    const id =e.target.id
    fetchFilms(id)
}

function f(params) {
    
}



}
window.onload=fetchData