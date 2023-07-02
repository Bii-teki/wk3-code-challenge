


function fetchData() {
   
    let former = document.getElementById('new-film').addEventListener('submit', handleSubmit)

    function handleSubmit(e) {
        e.preventDefault()
        let filmObj ={
        id: e.target.id.value,
        title: e.target.title.value,
        runtime: e.target.runtime.value,
        capacity: e.target.capacity.value,
        showtime: e.target.showtime.value,
        tickets_sold: e.target.tickets_sold.value,
        description: e.target.description.value,    
        poster: e.target.poster.value
        
     }
   
     postFilm(filmObj)
    }
    function postFilm(filmObj) {
        fetch('http://localhost:3000/films',{
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify(filmObj)
          
        })
        .then(res=>res.json)
        .then(films=>console.log(films))
    
    }
   
    function deleteFilm(id) {
        
        fetch(`http://localhost:3000/films/${id}`,{
        method: 'delete',
        headers:{
            'Content-Type': 'application/json'
        }
        
    })

}


    fetch("http://localhost:3000/films")
     .then(response => response.json())
       // handle the response
     .then(json => getData(json))
     //  requesting data from the server
     // ass

    //  function editFilm(id) {
    //     let editor = document.querySelector('#')
        
    //  }
   
     function getData(films) {
           // forEach iterates through an array of names 
          films.forEach(char => {
            const main = document.getElementById("film-item");
            const p = document.createElement('p') 
            const bt = document.createElement('button') 
            bt.id =char.id
            bt.className= 'btn-danger'
            bt.textContent="Delete"
            bt.addEventListener('click', ()=>{
                main.remove()

                deleteFilm(char.id)
            })

            const bt1 = document.createElement('button') 
            bt1.id =char.id
            bt1.className= 'btn-danger'
            bt1.textContent="Edit"
            bt1.addEventListener('click', ()=>{              

                editFilm(char.id)
            })
            // we have create variable p and assigne all the names in an array
            // we have created variable button and assigned all the id in an array
            p.textContent = char.title;
            p.id=char.id;
            p.addEventListener('click', displayFilmsDetails)
            //we have added an event to names and buttuns where one can view animal
            
            main.append(p);
            bt.id=char.id;      
            p.appendChild(bt)
            p.append(bt1)
     
          }); 

     
     }
function displayFilmsDetails(e) {

    const id = e.target.id
    fetchFilms(id)
}

function fetchFilms(id) {
    fetch(`http://localhost:3000/films/${id}`)
    .then(response => response.json())
    .then(json=> createFilm(json))
    
}

function createFilm(films) {   
    
        const l2 =document.getElementById("film-details")
        const p1 = document.createElement('p')
        l2.innerHTML=films.title
        l2.append(p1)
        const l3 = document.getElementById("run");
        const p2 = document.createElement('p') 
        l3.innerHTML=films.runtime
        l3.append(p2)
        const l4 = document.getElementById("show");
        const p3 = document.createElement('p') 
        l4.innerHTML=films.showtime
        l4.append(p3)
        const l6 = document.getElementById("sell");
        const p4 = document.createElement('p') 
        l6.innerHTML=(films.capacity - films.tickets_sold)
        l6.append(p4)
        l6.id= films.id
        // l6.addEventListener('click',  handleSales(id))

        const l5 = document.getElementById("available");
        const image = document.createElement('img') 
        image.src = films.poster
        l5.append(image)
       

   
}


// function handleSales(e) {
   
//     // let  vote = Number.parseInt(e.target.textContent) 
//     // let  vote = Number.parseInt(e.target.textContent) 
//     //   // e.target refers to the clicked votes element
//     //   // we use if statement to vote by checking if the has already voted 
//     //   // or wants to uncheck his vote
//     //   if(vote===)
//     //   {
//     //   vote += 1  
//     //   e.target.textContent = vote + "uncheck"
//     //   }

//     //   else if(vote===1){
//     //   vote -= 1  
//     //   e.target.textContent = vote + "vote"
//     //   }
//     //   else if(vote==="click to uncheck"){
//     //   vote=0
//     //   }
//     //   // counting total votes
//     //   let title = document.createElement('p')
//     //   title.innerHTML = 'total votes' + ' ' + vote ;
//     //   votes.append(title)
//     //   let count = document.createElement('p')
//     //   count.innerHTML = vote;
// }

}
window.onload=fetchData